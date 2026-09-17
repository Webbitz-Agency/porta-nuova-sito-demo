"use client";

import { useEffect, useRef, type RefObject } from "react";
import { gsap } from "@/lib/gsap";

export function useDrawLineOnScroll<T extends SVGPathElement>(): RefObject<T | null> {
  const pathRef = useRef<T | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(path, { drawSVG: "100%" });
      return;
    }

    gsap.set(path, { drawSVG: "0%" });
    const tween = gsap.to(path, {
      drawSVG: "100%",
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: path,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      const withTrigger = tween as unknown as { scrollTrigger?: { kill: () => void }; kill: () => void };
      withTrigger.scrollTrigger?.kill();
      withTrigger.kill();
    };
  }, []);

  return pathRef;
}
