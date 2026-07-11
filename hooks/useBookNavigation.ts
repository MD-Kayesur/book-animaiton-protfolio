"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Manages the "flipped sheet count" state of the book.
 * A sheet index i is flipped (moved to the left stack) when i < flippedCount.
 * flippedCount ranges from 0 (fully closed, front cover facing up)
 * to totalSheets (fully closed, back cover facing up).
 */
export function useBookNavigation(totalSheets: number) {
  const [flippedCount, setFlippedCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationLock = useRef(false);

  const goNext = useCallback(() => {
    if (animationLock.current) return;
    setFlippedCount((c) => {
      if (c >= totalSheets) return c;
      animationLock.current = true;
      setIsAnimating(true);
      return c + 1;
    });
  }, [totalSheets]);

  const goPrev = useCallback(() => {
    if (animationLock.current) return;
    setFlippedCount((c) => {
      if (c <= 0) return c;
      animationLock.current = true;
      setIsAnimating(true);
      return c - 1;
    });
  }, []);

  const goToSheet = useCallback(
    (index: number) => {
      if (animationLock.current) return;
      const target = Math.max(0, Math.min(totalSheets, index));
      if (target === flippedCount) return;
      animationLock.current = true;
      setIsAnimating(true);
      setFlippedCount(target);
    },
    [flippedCount, totalSheets]
  );

  useEffect(() => {
    // 900ms matches the heavier spring (stiffness:72, damping:17, mass:1.35)
    const timer = setTimeout(() => {
      animationLock.current = false;
      setIsAnimating(false);
    }, 900);
    return () => clearTimeout(timer);
  }, [flippedCount]);

  // Keyboard navigation
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  // Touch / swipe navigation
  useEffect(() => {
    let startX = 0;
    let startY = 0;
    function onTouchStart(e: TouchEvent) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }
    function onTouchEnd(e: TouchEvent) {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) goNext();
        else goPrev();
      }
    }
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [goNext, goPrev]);

  return {
    flippedCount,
    isAnimating,
    goNext,
    goPrev,
    goToSheet,
    isClosedFront: flippedCount === 0,
    isClosedBack: flippedCount === totalSheets,
  };
}
