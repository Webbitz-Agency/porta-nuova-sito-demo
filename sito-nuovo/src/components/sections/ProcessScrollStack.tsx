"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, Observer } from "@/lib/gsap";
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

// One scroll/swipe gesture = one full step transition, then input locks out
// until it finishes. Native wheel-event preventDefault() isn't reliable
// against trackpad momentum scrolling, so gesture capture is delegated to
// GSAP's Observer plugin (built for exactly this "pinned slides" pattern)
// instead of a manual wheel listener.
const STEP_TRANSITION_DURATION = 0.7;
const PIN_DISTANCE = 1;

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

    let currentIndex = 0;
    let animating = false;

    function goTo(index: number, direction: 1 | -1) {
      animating = true;
      const current = panels[currentIndex];
      const next = panels[index];
      gsap.to(current, {
        xPercent: direction * -100,
        opacity: 0,
        duration: STEP_TRANSITION_DURATION,
        ease: "power2.inOut",
      });
      gsap.fromTo(
        next,
        { xPercent: direction * 100, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          duration: STEP_TRANSITION_DURATION,
          ease: "power2.inOut",
          onComplete: () => {
            animating = false;
          },
        }
      );
      currentIndex = index;
      setActiveStep(index);
    }

    const observer = Observer.create({
      target: window,
      type: "wheel,touch,pointer",
      preventDefault: true,
      tolerance: 10,
      onUp: () => {
        if (animating) return;
        if (currentIndex === panels.length - 1) {
          // Already at the last step: release capture so this same gesture
          // continues as a normal page scroll and unpins the section.
          observer.disable();
          return;
        }
        goTo(currentIndex + 1, 1);
      },
      onDown: () => {
        if (animating) return;
        if (currentIndex === 0) {
          observer.disable();
          return;
        }
        goTo(currentIndex - 1, -1);
      },
    });
    observer.disable();

    const trigger = ScrollTrigger.create({
      trigger: wrapper,
      start: "top top+=132",
      end: "+=" + PIN_DISTANCE,
      pin: true,
      anticipatePin: 1,
      onEnter: () => {
        currentIndex = 0;
        setActiveStep(0);
        observer.enable();
      },
      onEnterBack: () => {
        currentIndex = panels.length - 1;
        setActiveStep(panels.length - 1);
        observer.enable();
      },
      onLeave: () => observer.disable(),
      onLeaveBack: () => observer.disable(),
    });

    return () => {
      observer.kill();
      trigger.kill();
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
      <div className="relative mt-16 hidden h-[220px] overflow-hidden lg:block">
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
