"use client";

import Page from "@/components/Book/Page";
import { SERVICES } from "@/data/portfolio";
import { Code2, LayoutTemplate, Server, Gauge } from "lucide-react";

const ICONS: Record<string, React.ElementType> = {
  code: Code2,
  layout: LayoutTemplate,
  server: Server,
  gauge: Gauge,
};

export default function ServicesPage() {
  return (
    <Page pageNumber={7} align="left">
      <h2 className="font-display text-2xl font-bold text-ink">Services</h2>
      <span className="mb-5 mt-1 block h-px w-12 bg-gold-dark/60" />
      <div className="space-y-4">
        {SERVICES.map((s) => {
          const Icon = ICONS[s.icon] ?? Code2;
          return (
            <div key={s.title} className="flex gap-3 border-b border-ink/10 pb-4 last:border-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-ink">{s.title}</h3>
                <p className="mt-0.5 text-sm text-ink-light">{s.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Page>
  );
}
