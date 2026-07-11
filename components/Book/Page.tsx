"use client";

import { cn } from "@/lib/utils";

interface PageProps {
  children: React.ReactNode;
  pageNumber?: number;
  align?: "left" | "right";
  className?: string;
}

/**
 * Standard paper page shell used for all interior content pages.
 * Provides consistent cream paper texture, margins, and folio numbering.
 */
export default function Page({ children, pageNumber, align = "right", className }: PageProps) {
  return (
    <div
      className={cn(
        "paper-texture page-shimmer relative flex h-full w-full flex-col bg-paper",
        className
      )}
    >
      <div className="page-scroll flex-1 overflow-y-auto px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12">
        {children}
      </div>
      {pageNumber !== undefined && (
        <div
          className={cn(
            "font-display pb-3 text-[11px] tracking-[0.2em] text-ink-light/50 sm:pb-4",
            align === "right" ? "text-right pr-6 sm:pr-10 md:pr-12" : "text-left pl-6 sm:pl-10 md:pl-12"
          )}
        >
          {String(pageNumber).padStart(2, "0")}
        </div>
      )}
    </div>
  );
}
