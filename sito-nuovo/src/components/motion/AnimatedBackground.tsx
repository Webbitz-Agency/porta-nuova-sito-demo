"use client";

import { motion, useReducedMotion } from "motion/react";

interface AnimatedBackgroundProps {
  variant?: "hero" | "subtle";
}

export function AnimatedBackground({ variant = "hero" }: AnimatedBackgroundProps) {
  const shouldReduceMotion = useReducedMotion();
  const opacity = variant === "hero" ? 0.35 : 0.15;

  const blobAnimation = shouldReduceMotion
    ? {}
    : {
        x: [0, 24, -16, 0],
        y: [0, -20, 12, 0],
        rotate: [0, 6, -4, 0],
      };

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={blobAnimation}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity }}
        className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-navy blur-3xl"
      />
      <motion.div
        animate={blobAnimation}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ opacity }}
        className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-gold blur-3xl"
      />
    </div>
  );
}
