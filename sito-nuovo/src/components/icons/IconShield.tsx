"use client";

import { motion } from "motion/react";

export function IconShield({ className }: { className?: string }) {
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
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.06 }}
    >
      <path d="M24 5 40 11v11c0 11-7 18-16 21C15 40 8 33 8 22V11Z" />
      <motion.path
        d="M17 24 22 29 32 18"
        whileHover={{ pathLength: [0, 1] }}
        transition={{ duration: 0.5 }}
      />
    </motion.svg>
  );
}
