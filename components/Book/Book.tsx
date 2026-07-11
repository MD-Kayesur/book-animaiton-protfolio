"use client";

import { useMemo } from "react";
import PageFlip from "@/components/Book/PageFlip";
import BookShadow from "@/components/Book/BookShadow";
import BookSpine from "@/components/Book/BookSpine";
import BookBinding from "@/components/Book/BookBinding";
import Navigation from "@/components/Navigation/Navigation";
import MobileBook from "@/components/Book/MobileBook";
import { SHEETS, TOTAL_SHEETS } from "@/components/Book/sheets";
import { useBookNavigation } from "@/hooks/useBookNavigation";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function Book() {
  const { isMobile } = useWindowSize();
  const { flippedCount, goNext, goPrev, isClosedFront, isClosedBack } =
    useBookNavigation(TOTAL_SHEETS);

  const sheets = useMemo(() => SHEETS, []);

  if (isMobile) {
    return (
      <div className="perspective-book spotlight relative flex h-full w-full items-center justify-center">
        <MobileBook />
      </div>
    );
  }

  return (
    <div className="perspective-book spotlight relative flex h-full w-full items-center justify-center">
      <BookShadow />

      <div
        className="relative"
        style={{
          width: "var(--book-w)",
          height: "var(--book-h)",
        }}
      >
        {/* hardcover base (visible edge behind pages, gives thickness) */}
        <div
          className="absolute inset-0 rounded-md bg-leather-dark shadow-book"
          style={{ transform: "translateZ(-14px) scale(1.015)" }}
        />
        <div
          className="absolute inset-0 rounded-md bg-leather"
          style={{ transform: "translateZ(-7px) scale(1.008)" }}
        />

        <div className="preserve-3d relative h-full w-full">
          <BookSpine />
          <BookBinding side="left" />
          <BookBinding side="right" />

          {sheets.map((sheet, i) => {
            const flipped = i < flippedCount;
            const frontActive = i === flippedCount && flippedCount < TOTAL_SHEETS;
            const backActive = i === flippedCount - 1 && flippedCount > 0;
            return (
              <PageFlip
                key={i}
                index={i}
                totalSheets={TOTAL_SHEETS}
                flipped={flipped}
                front={sheet.front}
                back={sheet.back}
                isCover={sheet.isCover}
                isBackCoverSheet={sheet.isBackCoverSheet}
                frontActive={frontActive}
                onClickFront={goNext}
                backActive={backActive}
                onClickBack={goPrev}
              />
            );
          })}
        </div>
      </div>

      <Navigation
        onPrev={goPrev}
        onNext={goNext}
        current={flippedCount}
        total={TOTAL_SHEETS}
        canPrev={!isClosedFront}
        canNext={!isClosedBack}
      />
    </div>
  );
}
