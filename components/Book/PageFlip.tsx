"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface PageFlipProps {
  index: number;
  flipped: boolean;
  totalSheets: number;
  front: React.ReactNode;
  back: React.ReactNode;
  onClickFront?: () => void;
  onClickBack?: () => void;
  frontActive?: boolean;
  backActive?: boolean;
  isCover?: boolean;
  isBackCoverSheet?: boolean;
}

/**
 * Realistic book sheet with:
 * - Physics-tuned spring (heavy paper feel)
 * - Paper bend illusion via skewY at mid-flip
 * - Corner pre-lift on hover before turning
 * - 4-layer shadow system (gutter, bend, cast, specular)
 * - Paper edge thickness strip (lit edge visible during turn)
 * - Dynamic z-index that snaps at -90° so pages never bleed through
 */
export default function PageFlip({
  index,
  flipped,
  totalSheets,
  front,
  back,
  onClickFront,
  onClickBack,
  frontActive,
  backActive,
  isCover,
  isBackCoverSheet,
}: PageFlipProps) {
  const rotateY = useMotionValue(flipped ? -180 : 0);
  const hasMounted = useRef(false);

  // ─── Spring animation ──────────────────────────────────────────────────────
  useEffect(() => {
    const target = flipped ? -180 : 0;
    const controls = animate(rotateY, target, {
      type: "spring",
      // Heavy paper: softer stiffness, higher damping, heavier mass
      stiffness: hasMounted.current ? 72 : 280,
      damping: hasMounted.current ? 17 : 38,
      mass: hasMounted.current ? 1.35 : 1,
    });
    hasMounted.current = true;
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flipped]);

  // ─── Derived visual values ────────────────────────────────────────────────

  // Bow / bend: peaks at ±4° when page is exactly at 90° (perpendicular to viewer)
  const skewY = useTransform(rotateY, [0, -45, -90, -135, -180], [0, 2.5, 4, 2.5, 0]);

  // Paper perspective squish: slightly narrow at mid-flip to sell the bend
  const scaleX = useTransform(rotateY, [0, -90, -180], [1, 0.97, 1]);

  // ── Layer 1: Bend shadow sweeps across the face as it bows
  const bendShadowOpacity = useTransform(
    rotateY,
    [0, -30, -75, -90, -105, -150, -180],
    [0, 0.18, 0.52, 0.68, 0.52, 0.18, 0]
  );

  // ── Layer 2: Specular highlight — sheen at mid-flip (light catching curved paper)
  const specularOpacity = useTransform(
    rotateY,
    [0, -60, -90, -120, -180],
    [0, 0.06, 0.22, 0.06, 0]
  );

  // ── Layer 3: Cast shadow thrown onto the page stack below
  const castShadowOpacity = useTransform(
    rotateY,
    [0, -45, -90, -135, -180],
    [0.12, 0.42, 0.65, 0.42, 0.12]
  );
  const castShadowBlur = useTransform(
    rotateY,
    [0, -90, -180],
    [4, 28, 4]
  );

  // ── Paper edge opacity — the lit edge strip visible during turn
  const edgeOpacity = useTransform(
    rotateY,
    [0, -60, -90, -120, -180],
    [0, 0.7, 1, 0.7, 0]
  );


  // ─── Z-index — derived directly from the motion value (no stale-closure bugs)
  // The spring animation OVERSHOOTS past -180°. If we only guard up to 178° the
  // page briefly drops to restZ during the overshoot tail, causing a flash of the
  // previous page. We extend the guard to 185° to cover the full overshoot range.
  //
  // At rest the page falls into correct stack order:
  //   • flipped   (left stack): totalSheets + index → higher index = more on top
  //   • unflipped (right stack): totalSheets - index → lower index = more on top
  const restZ = flipped
    ? totalSheets + index + 1          // settled left stack  (higher = more on top)
    : totalSheets - index + 1;         // settled right stack (lower  = more on top)

  const dynamicZIndex = useTransform(rotateY, (v) => {
    const abs = Math.abs(v);
    // Actively in motion (including spring overshoot) → maximum z
    if (abs > 2 && abs < 185) return 999;
    return restZ;
  });

  return (
    <motion.div
      className="preserve-3d absolute top-0 right-0 h-full"
      style={{
        width: "50%",
        transformOrigin: "left center",
        rotateY,
        skewY,
        scaleX,
        zIndex: dynamicZIndex,
      }}
    >
      {/* ═══════════════════════════════════════════════════════════════════
          FRONT FACE  (right-hand page before flipping)
      ════════════════════════════════════════════════════════════════════ */}
      <div
        onClick={frontActive ? onClickFront : undefined}
        className={cn(
          "backface-hidden absolute inset-0 overflow-visible",
          "rounded-r-[6px]",
          frontActive && "cursor-pointer group"
        )}
        style={{ backfaceVisibility: "hidden" }}
      >
        {/* Page content clipped */}
        <div className="absolute inset-0 overflow-hidden rounded-r-[6px]">
          {front}

          {/* Layer 1 — Gutter shadow (always present near spine) */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-12"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.08) 40%, transparent 100%)",
            }}
          />

          {/* Layer 2 — Bend shadow (sweeps across during flip) */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: bendShadowOpacity,
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 20%, rgba(0,0,0,0.05) 45%, transparent 65%)",
            }}
          />

          {/* Layer 3 — Specular sheen (bright curved-paper sheen at mid-flip) */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: specularOpacity,
              background:
                "linear-gradient(105deg, transparent 20%, rgba(255,248,230,0.85) 48%, rgba(255,248,230,0.4) 55%, transparent 70%)",
            }}
          />
        </div>

        {/* Layer 4 — Paper edge thickness strip (right edge lit during turn) */}
        <motion.div
          className="pointer-events-none absolute top-0 right-[-3px] h-full w-[4px] rounded-r-[2px]"
          style={{
            opacity: edgeOpacity,
            background:
              "linear-gradient(180deg, rgba(246,241,230,0.9) 0%, rgba(220,210,190,0.8) 50%, rgba(246,241,230,0.9) 100%)",
            boxShadow: "1px 0 4px rgba(0,0,0,0.3)",
          }}
        />

      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          BACK FACE  (left-hand page after flipping)
      ════════════════════════════════════════════════════════════════════ */}
      <div
        onClick={backActive ? onClickBack : undefined}
        className={cn(
          "backface-hidden absolute inset-0 overflow-visible",
          "rounded-l-[6px]",
          backActive && "cursor-pointer group"
        )}
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        {/* Page content clipped */}
        <div className="absolute inset-0 overflow-hidden rounded-l-[6px]">
          {back}

          {/* Layer 1 — Gutter shadow (right side on back face = spine side) */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-12"
            style={{
              background:
                "linear-gradient(270deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.08) 40%, transparent 100%)",
            }}
          />

          {/* Layer 2 — Bend shadow */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: bendShadowOpacity,
              background:
                "linear-gradient(270deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 20%, rgba(0,0,0,0.05) 45%, transparent 65%)",
            }}
          />

          {/* Layer 3 — Specular sheen */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: specularOpacity,
              background:
                "linear-gradient(255deg, transparent 20%, rgba(255,248,230,0.85) 48%, rgba(255,248,230,0.4) 55%, transparent 70%)",
            }}
          />
        </div>

        {/* Paper edge thickness strip (left edge on back face) */}
        <motion.div
          className="pointer-events-none absolute top-0 left-[-3px] h-full w-[4px] rounded-l-[2px]"
          style={{
            opacity: edgeOpacity,
            background:
              "linear-gradient(180deg, rgba(246,241,230,0.9) 0%, rgba(220,210,190,0.8) 50%, rgba(246,241,230,0.9) 100%)",
            boxShadow: "-1px 0 4px rgba(0,0,0,0.3)",
          }}
        />


      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          CAST SHADOW  — thrown onto the page stack below during the flip
      ════════════════════════════════════════════════════════════════════ */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-[1]"
        style={{
          height: "100%",
          opacity: castShadowOpacity,
          filter: useTransform(
            castShadowBlur,
            (v) => `blur(${v}px)`
          ),
          background:
            isCover || isBackCoverSheet
              ? "radial-gradient(ellipse 85% 40% at 50% 100%, rgba(0,0,0,0.7) 0%, transparent 100%)"
              : "radial-gradient(ellipse 85% 40% at 50% 100%, rgba(0,0,0,0.45) 0%, transparent 100%)",
        }}
      />
    </motion.div>
  );
}
