"use client";

import { motion } from "framer-motion";

export default function BookShadow() {
  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-[calc(50%+2px)] -z-10 -translate-x-1/2"
      style={{
        width: "var(--book-w)",
        height: "48px",
        translateY: "calc(var(--book-h) / 2 + 10px)",
        background:
          "radial-gradient(ellipse 50% 100% at 50% 50%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 45%, transparent 75%)",
        filter: "blur(12px)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}
