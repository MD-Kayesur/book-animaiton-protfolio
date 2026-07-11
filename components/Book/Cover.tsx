"use client";

import { motion } from "framer-motion";
import { ChevronsRight } from "lucide-react";
import { NAME, TITLE } from "@/data/portfolio";

export default function Cover() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden bg-leather px-8 py-14 text-center sm:px-14">
      {/* leather texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(255,220,160,0.08) 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, rgba(0,0,0,0.35) 0%, transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 3px)",
        }}
      />
      {/* gold frame */}
      <div className="pointer-events-none absolute inset-4 border border-gold/40 sm:inset-6" />
      <div className="pointer-events-none absolute inset-6 border border-gold/20 sm:inset-9" />

      <div className="relative z-10 mt-6 flex flex-col items-center gap-3 sm:mt-10">
        <span className="h-px w-16 bg-gold/70" />
        <span className="font-display text-[11px] uppercase tracking-[0.45em] text-gold-light/80">
          Portfolio
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-5">
        <h1 className="font-display text-4xl font-bold leading-tight text-paper drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-6xl">
          {NAME}
        </h1>
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gold/60" />
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gold-light sm:text-base">
            {TITLE}
          </p>
          <span className="h-px w-10 bg-gold/60" />
        </div>
      </div>

      <motion.div
        className="relative z-10 mb-4 flex flex-col items-center gap-2 text-gold-light/80 sm:mb-6"
        animate={{ x: [0, 5, 0], rotate: [0, 3, 0], y: [0, -2, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-display text-[11px] uppercase tracking-[0.3em]">
          Click to open
        </span>
        <ChevronsRight className="h-5 w-5" />
      </motion.div>
    </div>
  );
}
