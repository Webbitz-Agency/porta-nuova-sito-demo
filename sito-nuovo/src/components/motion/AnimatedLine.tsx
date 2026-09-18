"use client";

import { useDrawLineOnScroll } from "@/hooks/useDrawLineOnScroll";

interface AnimatedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  delay?: number;
}

export function AnimatedLine({ orientation = "horizontal", className, delay = 0 }: AnimatedLineProps) {
  const pathRef = useDrawLineOnScroll<SVGPathElement>(delay);
  const isHorizontal = orientation === "horizontal";

  return (
    <svg
      data-orientation={orientation}
      className={className}
      width={isHorizontal ? "100%" : 2}
      height={isHorizontal ? 2 : 80}
      viewBox={isHorizontal ? "0 0 100 2" : "0 0 2 80"}
      preserveAspectRatio="none"
    >
      <path
        ref={pathRef}
        d={isHorizontal ? "M0 1 L100 1" : "M1 0 L1 80"}
        stroke="var(--color-gold)"
        strokeWidth={2}
        fill="none"
      />
    </svg>
  );
}
