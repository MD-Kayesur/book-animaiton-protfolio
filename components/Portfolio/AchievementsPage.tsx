"use client";

import Page from "@/components/Book/Page";
import { ACHIEVEMENTS } from "@/data/portfolio";
import { Award } from "lucide-react";

export default function AchievementsPage() {
  return (
    <Page pageNumber={9} align="left">
      <h2 className="font-display text-2xl font-bold text-ink">Achievements</h2>
      <span className="mb-5 mt-1 block h-px w-12 bg-gold-dark/60" />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {ACHIEVEMENTS.map((a) => (
          <div
            key={a.title}
            className="flex flex-col items-start gap-2 rounded-lg border border-ink/10 bg-white/40 p-3"
          >
            <Award className="h-5 w-5 text-gold-dark" />
            <p className="font-display text-sm font-semibold leading-snug text-ink">{a.title}</p>
            <p className="text-xs text-ink-light">
              {a.issuer} · {a.year}
            </p>
          </div>
        ))}
      </div>
    </Page>
  );
}
