"use client";

import Page from "@/components/Book/Page";
import { NAME, TITLE, BIO } from "@/data/portfolio";

export default function AboutPage() {
  const initials = NAME.split(" ").map((n) => n[0]).join("");
  return (
    <Page pageNumber={2} align="right">
      <div className="flex h-full flex-col items-center text-center">
        <div
          className="mb-5 flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold-dark/40 font-display text-2xl font-bold text-ink shadow-inner sm:h-28 sm:w-28"
          style={{ background: "linear-gradient(135deg, #ece3d0, #f6f1e6)" }}
        >
          {initials}
        </div>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">About Me</h2>
        <span className="mt-1 mb-4 h-px w-12 bg-gold-dark/60" />
        <p className="max-w-md text-sm leading-relaxed text-ink-light sm:text-base">{BIO}</p>
        <div className="mt-6 grid w-full max-w-sm grid-cols-3 gap-3 border-t border-ink/10 pt-4 text-center">
          <div>
            <p className="font-display text-xl font-bold text-ink">5+</p>
            <p className="text-[10px] uppercase tracking-widest text-ink-light/70">Years</p>
          </div>
          <div>
            <p className="font-display text-xl font-bold text-ink">40+</p>
            <p className="text-[10px] uppercase tracking-widest text-ink-light/70">Projects</p>
          </div>
          <div>
            <p className="font-display text-xl font-bold text-ink">18</p>
            <p className="text-[10px] uppercase tracking-widest text-ink-light/70">Clients</p>
          </div>
        </div>
      </div>
    </Page>
  );
}
