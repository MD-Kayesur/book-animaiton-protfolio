"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  current: number;
  total: number;
  canPrev: boolean;
  canNext: boolean;
}

export default function Navigation({
  onPrev,
  onNext,
  current,
  total,
  canPrev,
  canNext,
}: NavigationProps) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-4 z-[80] flex flex-col items-center gap-3 sm:bottom-6">
      <div className="pointer-events-auto flex items-center gap-4 rounded-full bg-black/30 px-4 py-2 backdrop-blur-sm">
        <button
          onClick={onPrev}
          disabled={!canPrev}
          aria-label="Previous page"
          className="rounded-full p-1.5 text-paper/80 transition-colors hover:bg-white/10 hover:text-paper disabled:opacity-25"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="font-display min-w-[64px] text-center text-xs uppercase tracking-widest text-paper/70">
          {current} / {total}
        </span>
        <button
          onClick={onNext}
          disabled={!canNext}
          aria-label="Next page"
          className="rounded-full p-1.5 text-paper/80 transition-colors hover:bg-white/10 hover:text-paper disabled:opacity-25"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <p className="pointer-events-none font-display text-[10px] uppercase tracking-[0.3em] text-paper/30">
        Use ← → arrow keys, swipe, or click a page edge
      </p>
    </div>
  );
}
