"use client";

import { useDrawLineOnScroll } from "@/hooks/useDrawLineOnScroll";

export function SectionLines() {
  const lineTop = useDrawLineOnScroll<SVGPathElement>();
  const lineBottom = useDrawLineOnScroll<SVGPathElement>();

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      fill="none"
    >
      {/* Sweeps in from off-screen left */}
      <path
        ref={lineTop}
        d="M-120 460 C 210 390, 480 570, 800 450 S 1280 380, 1600 500"
        stroke="var(--color-gold-dark)"
        strokeWidth={1.5}
        opacity={0.55}
      />
      {/* Sweeps in from off-screen right, deliberately different curve so it doesn't read as a mirror of the first */}
      <path
        ref={lineBottom}
        d="M1620 720 C 1280 840, 1040 610, 700 760 S 220 690, -100 630"
        stroke="var(--color-gold-dark)"
        strokeWidth={1.5}
        opacity={0.4}
      />
    </svg>
  );
}
