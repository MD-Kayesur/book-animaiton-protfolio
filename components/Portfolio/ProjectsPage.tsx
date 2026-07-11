"use client";

import Page from "@/components/Book/Page";
import ProjectCard from "@/components/UI/ProjectCard";
import { PROJECTS } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <Page pageNumber={6} align="right">
      <h2 className="font-display text-2xl font-bold text-ink">Featured Projects</h2>
      <span className="mb-5 mt-1 block h-px w-12 bg-gold-dark/60" />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Page>
  );
}
