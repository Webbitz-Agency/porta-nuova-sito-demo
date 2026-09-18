"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessScrollStackProps {
  eyebrow: string;
  heading: string;
  steps: ProcessStep[];
}

const STEP_SCROLL_DISTANCE = 500;

export function ProcessScrollStack({ eyebrow, heading, steps }: ProcessScrollStackProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const panels = panelsRef.current.filter((panel): panel is HTMLDivElement => panel !== null);
    if (!wrapper || panels.length === 0) return;

    const prefersReducedMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches;
    if (prefersReducedMotion || !isDesktop) return;

    gsap.set(panels[0], { xPercent: 0, opacity: 1 });
    gsap.set(panels.slice(1), { xPercent: 100, opacity: 0 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top+=132",
        end: "+=" + (panels.length - 1) * STEP_SCROLL_DISTANCE,
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const step = Math.min(panels.length - 1, Math.round(self.progress * (panels.length - 1)));
          setActiveStep(step);
        },
      },
    });

    panels.forEach((panel, i) => {
      if (i === panels.length - 1) return;
      const next = panels[i + 1];
      timeline
        .to(panel, { xPercent: -100, opacity: 0, duration: 1, ease: "power1.inOut" }, i)
        .to(next, { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" }, i);
    });

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, [steps]);

  return (
    <div ref={wrapperRef} className="relative">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">{eyebrow}</p>
        <h2 className="mt-3 font-heading text-5xl font-semibold text-navy md:text-6xl">{heading}</h2>
      </div>

      {/* Mobile/tablet: normal vertical timeline, no scroll-jacking */}
      <div className="mt-14 lg:hidden">
        <ProcessTimeline steps={steps} />
      </div>

      {/* Desktop: steps cross-fade/slide in place while the section is pinned */}
      <div className="relative mt-16 hidden h-[220px] lg:block">
        {steps.map((step, i) => (
          <div
            key={step.number}
            ref={(el) => {
              panelsRef.current[i] = el;
            }}
            className="absolute inset-0 flex items-start justify-center gap-6"
            style={{ opacity: i === 0 ? 1 : 0, transform: i === 0 ? "translateX(0%)" : "translateX(100%)" }}
          >
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-xl font-bold text-cream ring-4 ring-cream">
              {step.number}
            </span>
            <div className="max-w-md pt-1">
              <h3 className="font-heading text-2xl font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink/70">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 hidden justify-center gap-2 lg:flex">
        {steps.map((step, i) => (
          <span
            key={step.number}
            aria-hidden="true"
            className={`h-1.5 w-8 transition-colors ${i === activeStep ? "bg-gold" : "bg-line"}`}
          />
        ))}
      </div>
    </div>
  );
}
