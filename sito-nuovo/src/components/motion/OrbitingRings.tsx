"use client";

import { motion } from "motion/react";

interface OrbitingRingsProps {
  /** "on-dark" (default) matches the Hero's navy background; "on-light" is tuned for cream/beige sections. */
  tone?: "on-dark" | "on-light";
}

export function OrbitingRings({ tone = "on-dark" }: OrbitingRingsProps) {
  const isLight = tone === "on-light";
  const ringA = isLight ? "border-gold-dark/25" : "border-gold/20";
  const ringB = isLight ? "border-gold-dark/15" : "border-gold/10";
  const ringC = isLight ? "border-gold-dark/20" : "border-gold/15";
  const ringD = isLight ? "border-gold-dark/10" : "border-gold/10";

  return (
    <>
      {/* Right orbiting ring — half off-screen, spans the section's height */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[85%] w-[85%] max-w-[620px] -translate-y-1/2 translate-x-1/2 md:block">
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <div className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-[54%] -translate-y-1/2 rounded-full border ${ringA}`} />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
        >
          <div className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-[46%] rounded-full border ${ringB}`} />
        </motion.div>
      </div>

      {/* Left orbiting ring — mirrored */}
      <div className="pointer-events-none absolute left-0 top-1/2 hidden h-[85%] w-[85%] max-w-[620px] -translate-x-1/2 -translate-y-1/2 md:block">
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        >
          <div className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-[46%] -translate-y-1/2 rounded-full border ${ringC}`} />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        >
          <div className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-[54%] rounded-full border ${ringD}`} />
        </motion.div>
      </div>
    </>
  );
}
