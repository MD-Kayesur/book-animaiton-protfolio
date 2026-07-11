"use client";

import Page from "@/components/Book/Page";
import Timeline from "@/components/UI/Timeline";
import { EXPERIENCE } from "@/data/portfolio";

export default function ExperiencePage() {
  return (
    <Page pageNumber={5} align="left">
      <h2 className="font-display text-2xl font-bold text-ink">Experience</h2>
      <span className="mb-5 mt-1 block h-px w-12 bg-gold-dark/60" />
      <Timeline items={EXPERIENCE} />
    </Page>
  );
}
