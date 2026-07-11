"use client";

import { Experience } from "@/types";

export default function Timeline({ items }: { items: Experience[] }) {
  return (
    <div className="relative ml-2 border-l border-ink/15 pl-6">
      {items.map((item, i) => (
        <div key={item.company} className="relative mb-7 last:mb-0">
          <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-gold bg-paper" />
          <p className="font-display text-[11px] uppercase tracking-widest text-gold-dark">
            {item.period}
          </p>
          <h3 className="mt-0.5 font-display text-lg font-semibold text-ink">{item.role}</h3>
          <p className="text-sm italic text-ink-light">{item.company}</p>
          <p className="mt-1.5 text-sm leading-snug text-ink-light">{item.description}</p>
          <ul className="mt-1.5 space-y-1">
            {item.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-xs text-ink-light">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gold-dark" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
