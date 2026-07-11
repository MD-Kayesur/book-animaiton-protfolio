"use client";

import { motion } from "framer-motion";
import { Skill } from "@/types";

export default function SkillCard({ skill, delay = 0 }: { skill: Skill; delay?: number }) {
  return (
    <div className="mb-4">
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="font-display text-sm text-ink">{skill.name}</span>
        <span className="text-xs text-ink-light/60">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
