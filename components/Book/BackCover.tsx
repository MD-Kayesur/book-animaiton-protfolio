"use client";

import { NAME } from "@/data/portfolio";

export function InsideBackCover() {
  return (
    <div className="paper-texture relative flex h-full w-full flex-col items-center justify-center bg-paper px-10 text-center">
      <span className="font-display text-2xl italic text-ink-light">
        “Design is the silent ambassador of your brand.”
      </span>
      <span className="mt-4 h-px w-16 bg-ink-light/30" />
      <span className="mt-4 font-display text-xs uppercase tracking-[0.3em] text-ink-light/60">
        Thank you for reading
      </span>
    </div>
  );
}

export function OuterBackCover() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-leather px-10 text-center">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 80%, rgba(255,220,160,0.06) 0%, transparent 55%)",
        }}
      />
      <div className="pointer-events-none absolute inset-4 border border-gold/30 sm:inset-6" />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <span className="font-display text-lg tracking-[0.25em] text-gold-light/90">
          {NAME.split(" ").map((n) => n[0]).join(".")}.
        </span>
        <span className="h-px w-14 bg-gold/50" />
        <span className="font-display text-[10px] uppercase tracking-[0.4em] text-paper/50">
          End of Portfolio
        </span>
      </div>
    </div>
  );
}
