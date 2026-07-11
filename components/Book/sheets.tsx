import Cover from "@/components/Book/Cover";
import { InsideBackCover, OuterBackCover } from "@/components/Book/BackCover";
import Page from "@/components/Book/Page";
import AboutPage from "@/components/Portfolio/AboutPage";
import IntroPage from "@/components/Portfolio/IntroPage";
import SkillsPage from "@/components/Portfolio/SkillsPage";
import ExperiencePage from "@/components/Portfolio/ExperiencePage";
import ProjectsPage from "@/components/Portfolio/ProjectsPage";
import ServicesPage from "@/components/Portfolio/ServicesPage";
import EducationPage from "@/components/Portfolio/EducationPage";
import AchievementsPage from "@/components/Portfolio/AchievementsPage";
import TestimonialsPage from "@/components/Portfolio/TestimonialsPage";
import ContactPage from "@/components/Portfolio/ContactPage";

function InsideFrontCover() {
  return (
    <Page align="left">
      <div className="flex h-full flex-col items-center justify-center text-center">
        <span className="font-display text-sm uppercase tracking-[0.35em] text-ink-light/60">
          Table of Contents
        </span>
        <div className="mt-6 space-y-2 text-left font-display text-sm text-ink-light">
          {[
            "About Me",
            "Introduction",
            "Skills",
            "Experience",
            "Featured Projects",
            "Services",
            "Education",
            "Achievements",
            "Testimonials",
            "Contact",
          ].map((t, i) => (
            <div key={t} className="flex items-center justify-between gap-6 border-b border-ink/10 pb-1">
              <span>{t}</span>
              <span className="text-ink-light/50">{String(i + 2).padStart(2, "0")}</span>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}

export interface SheetConfig {
  front: React.ReactNode;
  back: React.ReactNode;
  isCover?: boolean;
  isBackCoverSheet?: boolean;
}

/**
 * The book's physical sheets, in order. Index 0 is the front cover,
 * the last index is the back cover. Every sheet in between has two content
 * faces (front = right-hand page, back = left-hand page once flipped).
 */
export const SHEETS: SheetConfig[] = [
  { front: <Cover />, back: <InsideFrontCover />, isCover: true },
  { front: <AboutPage />, back: <IntroPage /> },
  { front: <SkillsPage />, back: <ExperiencePage /> },
  { front: <ProjectsPage />, back: <ServicesPage /> },
  { front: <EducationPage />, back: <AchievementsPage /> },
  { front: <TestimonialsPage />, back: <ContactPage /> },
  { front: <InsideBackCover />, back: <OuterBackCover />, isBackCoverSheet: true },
];

export const TOTAL_SHEETS = SHEETS.length;

/** Flattened list of every single page face, used for mobile single-page mode. */
export function flattenPages(): React.ReactNode[] {
  const pages: React.ReactNode[] = [];
  SHEETS.forEach((s) => {
    pages.push(s.front);
    pages.push(s.back);
  });
  return pages;
}
