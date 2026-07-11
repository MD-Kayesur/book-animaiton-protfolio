"use client";

import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-ink/10 bg-white/40 p-4 shadow-sm transition-shadow hover:shadow-md">
      <div
        className="mb-3 h-1.5 w-10 rounded-full"
        style={{ backgroundColor: project.color }}
      />
      <h3 className="font-display text-base font-semibold text-ink">{project.title}</h3>
      <p className="mt-1.5 text-sm leading-snug text-ink-light">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-ink/5 px-2 py-0.5 text-[10px] uppercase tracking-wide text-ink-light"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-3 flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="inline-flex items-center gap-1 text-xs font-medium text-ink underline decoration-gold decoration-2 underline-offset-2"
          >
            <ExternalLink className="h-3 w-3" /> Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            className="inline-flex items-center gap-1 text-xs font-medium text-ink underline decoration-gold decoration-2 underline-offset-2"
          >
            <Github className="h-3 w-3" /> GitHub
          </a>
        )}
      </div>
    </div>
  );
}
