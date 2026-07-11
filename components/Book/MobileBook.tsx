"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { flattenPages } from "@/components/Book/sheets";
import Navigation from "@/components/Navigation/Navigation";

const PAGES = flattenPages();
const TOTAL_PAGES = PAGES.length;

/**
 * Single-page reading mode for mobile: one page fills the screen,
 * and turning flips it away in 3D (like a real page lifting off the stack)
 * to reveal the next page underneath.
 */
export default function MobileBook() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [locked, setLocked] = useState(false);

  const goNext = useCallback(() => {
    if (locked) return;
    setIndex((i) => {
      if (i >= TOTAL_PAGES - 1) return i;
      setDirection(1);
      setLocked(true);
      return i + 1;
    });
  }, [locked]);

  const goPrev = useCallback(() => {
    if (locked) return;
    setIndex((i) => {
      if (i <= 0) return i;
      setDirection(-1);
      setLocked(true);
      return i - 1;
    });
  }, [locked]);

  useEffect(() => {
    const t = setTimeout(() => setLocked(false), 650);
    return () => clearTimeout(t);
  }, [index]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  useEffect(() => {
    let startX = 0;
    function onStart(e: TouchEvent) {
      startX = e.touches[0].clientX;
    }
    function onEnd(e: TouchEvent) {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) {
        if (dx < 0) goNext();
        else goPrev();
      }
    }
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [goNext, goPrev]);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <div
        className="perspective-book relative"
        style={{ width: "92vw", height: "72vh", maxWidth: "480px" }}
      >
        <div
          className="absolute inset-0 rounded-md"
          style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.6)" }}
        />
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            className="preserve-3d absolute inset-0 overflow-hidden rounded-md"
            style={{ transformOrigin: direction === 1 ? "left center" : "right center" }}
            initial={{ rotateY: direction === 1 ? 0 : 0, zIndex: 2 }}
            animate={{ rotateY: 0, zIndex: 2 }}
            exit={{
              rotateY: direction === 1 ? -170 : 170,
              zIndex: 1,
              transition: { type: "spring", stiffness: 110, damping: 20 },
            }}
            transition={{ type: "spring", stiffness: 110, damping: 20 }}
          >
            <div className="backface-hidden absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
              {PAGES[index]}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* tap zones */}
        <button
          aria-label="Previous page"
          onClick={goPrev}
          className="absolute left-0 top-0 h-full w-1/4 opacity-0"
        />
        <button
          aria-label="Next page"
          onClick={goNext}
          className="absolute right-0 top-0 h-full w-1/4 opacity-0"
        />
      </div>

      <Navigation
        onPrev={goPrev}
        onNext={goNext}
        current={index + 1}
        total={TOTAL_PAGES}
        canPrev={index > 0}
        canNext={index < TOTAL_PAGES - 1}
      />
    </div>
  );
}
