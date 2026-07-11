"use client";

import { SOCIALS, RESUME_URL } from "@/data/portfolio";
import { Download } from "lucide-react";

export default function Footer() {
  return (
    <div className="mt-6 border-t border-ink/10 pt-4">
      <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="text-xs uppercase tracking-widest text-ink-light underline decoration-gold decoration-2 underline-offset-4 hover:text-ink"
          >
            {s.label}
          </a>
        ))}
      </div>
      <a
        href={RESUME_URL}
        className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-1.5 text-xs uppercase tracking-widest text-ink hover:bg-ink hover:text-paper transition-colors"
      >
        <Download className="h-3.5 w-3.5" /> Download Resume
      </a>
    </div>
  );
}
