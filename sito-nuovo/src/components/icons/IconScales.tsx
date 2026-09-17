"use client";

import { motion } from "motion/react";

export function IconScales({ className }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ rotate: [0, -4, 4, 0] }}
    >
      <path d="M24 6v30" />
      <path d="M12 14h24" />
      <motion.path
        d="M6 16 12 14 18 16 12 26Z"
        whileHover={{ rotate: -8 }}
        style={{ transformOrigin: "12px 14px" }}
      />
      <motion.path
        d="M30 16 36 14 42 16 36 26Z"
        whileHover={{ rotate: 8 }}
        style={{ transformOrigin: "36px 14px" }}
      />
      <path d="M16 42h16" />
      <path d="M24 36v6" />
    </motion.svg>
  );
}
