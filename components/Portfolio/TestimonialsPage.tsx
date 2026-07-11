"use client";

import { useState } from "react";
import Page from "@/components/Book/Page";
import { TESTIMONIALS } from "@/data/portfolio";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsPage() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  return (
    <Page pageNumber={10} align="right">
      <h2 className="font-display text-2xl font-bold text-ink">Testimonials</h2>
      <span className="mb-6 mt-1 block h-px w-12 bg-gold-dark/60" />
      <div className="flex h-[62%] flex-col items-center justify-center text-center">
        <Quote className="mb-3 h-8 w-8 text-gold-dark/50" />
        <p className="max-w-md font-display text-base italic leading-relaxed text-ink sm:text-lg">
          {t.quote}
        </p>
        <p className="mt-5 font-display text-sm font-semibold text-ink">{t.name}</p>
        <p className="text-xs text-ink-light/70">{t.role}</p>
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
          }}
          className="rounded-full border border-ink/15 p-1.5 hover:bg-ink/5"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4 text-ink" />
        </button>
        <div className="flex gap-1.5">
          {TESTIMONIALS.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 w-1.5 rounded-full ${idx === i ? "bg-gold-dark" : "bg-ink/15"}`}
            />
          ))}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setI((p) => (p + 1) % TESTIMONIALS.length);
          }}
          className="rounded-full border border-ink/15 p-1.5 hover:bg-ink/5"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4 text-ink" />
        </button>
      </div>
    </Page>
  );
}
