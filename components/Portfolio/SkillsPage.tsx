"use client";

import Page from "@/components/Book/Page";
import SkillCard from "@/components/UI/SkillCard";
import { SKILLS } from "@/data/portfolio";

export default function SkillsPage() {
  const categories = ["Frontend", "Backend", "Database", "Tools"] as const;
  return (
    <Page pageNumber={4} align="right">
      <h2 className="font-display text-2xl font-bold text-ink">Skills</h2>
      <span className="mb-5 mt-1 block h-px w-12 bg-gold-dark/60" />
      <div className="space-y-5">
        {categories.map((cat) => {
          const items = SKILLS.filter((s) => s.category === cat);
          if (!items.length) return null;
          return (
            <div key={cat}>
              <p className="mb-2 font-display text-[11px] uppercase tracking-widest text-gold-dark">
                {cat}
              </p>
              {items.map((s, i) => (
                <SkillCard key={s.name} skill={s} delay={i * 0.1} />
              ))}
            </div>
          );
        })}
      </div>
    </Page>
  );
}
