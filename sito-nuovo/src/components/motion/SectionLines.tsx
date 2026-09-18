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
        d="M-100 140 C 260 40, 680 260, 1080 70 S 1560 30, 1760 150"
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
