"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useCountUp(
  target: number,
  opts: { duration?: number } = {}
): { ref: RefObject<HTMLElement | null>; value: number } {
  const ref = useRef<HTMLElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      queueMicrotask(() => setValue(target));
      return;
    }

    const counter = { value: 0 };
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          value: target,
          duration: opts.duration ?? 1.6,
          ease: "power1.out",
          onUpdate: () => setValue(Math.round(counter.value)),
        });
      },
    });

    return () => trigger.kill();
  }, [target, opts.duration]);

  return { ref, value };
}
