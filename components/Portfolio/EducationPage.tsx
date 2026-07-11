"use client";

import Page from "@/components/Book/Page";
import { EDUCATION } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export default function EducationPage() {
  return (
    <Page pageNumber={8} align="right">
      <h2 className="font-display text-2xl font-bold text-ink">Education</h2>
      <span className="mb-5 mt-1 block h-px w-12 bg-gold-dark/60" />
      <div className="space-y-5">
        {EDUCATION.map((e) => (
          <div key={e.degree} className="flex gap-3">
            <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-gold-dark" />
            <div>
              <p className="font-display text-[11px] uppercase tracking-widest text-gold-dark">
                {e.period}
              </p>
              <h3 className="font-display text-base font-semibold text-ink">{e.degree}</h3>
              <p className="text-sm italic text-ink-light">{e.institution}</p>
              <p className="mt-1 text-sm text-ink-light">{e.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}
