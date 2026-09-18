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
      <path
        ref={lineTop}
        d="M-100 480 C 280 420, 620 580, 980 500 S 1500 430, 1760 520"
        stroke="var(--color-gold-dark)"
        strokeWidth={1.5}
        opacity={0.55}
      />
      <path
        ref={lineBottom}
        d="M-80 760 C 320 880, 760 620, 1160 800 S 1620 740, 1780 660"
        stroke="var(--color-gold-dark)"
        strokeWidth={1.5}
        opacity={0.4}
      />
    </svg>
  );
}
