"use client";

import { motion } from "motion/react";

export function IconHandshake({ className }: { className?: string }) {
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
      transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M6 20 16 14l6 4" />
      <path d="M42 20 32 14l-6 4" />
      <motion.path
        d="M22 18 18 24l4 4 4-4 4 4-4 4"
        whileHover={{ x: [0, 2, -2, 0] }}
        transition={{ duration: 0.5 }}
      />
      <path d="M6 20v6l8 8" />
      <path d="M42 20v6l-8 8" />
    </motion.svg>
  );
}
