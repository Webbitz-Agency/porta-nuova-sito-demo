"use client";

import { motion } from "motion/react";

export function IconDocument({ className }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ y: [0, -7, 0], rotate: [0, 3, -3, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M14 4h14l8 8v32H14Z" />
      <path d="M28 4v8h8" />
      <motion.path
        d="M18 24h12"
        whileHover={{ pathLength: [0.6, 1] }}
        transition={{ duration: 0.4 }}
      />
      <path d="M18 30h12" />
      <path d="M18 36h8" />
    </motion.svg>
  );
}
