"use client";

import { motion } from "motion/react";

export function IconGavel({ className }: { className?: string }) {
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
      transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.g
        whileHover={{ rotate: -18 }}
        style={{ transformOrigin: "30px 12px" }}
      >
        <rect x="22" y="6" width="16" height="8" rx="1.5" transform="rotate(-35 30 10)" />
        <path d="M18 18 26 10" />
      </motion.g>
      <path d="M8 34h20" />
      <path d="M12 34v-6" />
      <path d="M24 34v-6" />
    </motion.svg>
  );
}
