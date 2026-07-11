"use client";

import Page from "@/components/Book/Page";
import { INTRO, NAME } from "@/data/portfolio";

export default function IntroPage() {
  return (
    <Page pageNumber={3} align="left">
      <div className="flex h-full flex-col justify-center">
        <span className="font-display text-6xl leading-none text-gold-dark/70">“</span>
        <p className="-mt-6 font-display text-lg italic leading-relaxed text-ink sm:text-xl">
          {INTRO}
        </p>
        <div className="mt-8 flex items-center gap-3">
          <span className="h-px w-10 bg-gold-dark/60" />
          <span className="font-display text-sm tracking-wide text-ink-light">— {NAME}</span>
        </div>
      </div>
    </Page>
  );
}
