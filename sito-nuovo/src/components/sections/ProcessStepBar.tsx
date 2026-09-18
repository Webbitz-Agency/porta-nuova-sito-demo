"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import { AnimatedLine } from "@/components/motion/AnimatedLine";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepBarProps {
  eyebrow: string;
  heading: string;
  steps: ProcessStep[];
}

export function ProcessStepBar({ eyebrow, heading, steps }: ProcessStepBarProps) {
  return (
    <div>
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">{eyebrow}</p>
        <h2 className="mt-3 font-heading text-5xl font-semibold text-navy md:text-6xl">{heading}</h2>
      </div>

      {/* Mobile/tablet: vertical timeline */}
      <div className="mt-14 lg:hidden">
        <ProcessTimeline steps={steps} />
      </div>

      {/* Desktop: horizontal step bar, revealed with a staggered pop-in as it scrolls into view */}
      <div className="mt-20 hidden lg:flex lg:items-start">
        {steps.map((step, i) => (
          <Fragment key={step.number}>
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.18, ease: "easeOut" }}
              className="flex w-44 shrink-0 flex-col items-center text-center"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-xl font-bold text-cream ring-4 ring-cream shadow-lg shadow-navy/20">
                {step.number}
              </span>
              <h3 className="mt-4 flex min-h-[76px] items-start font-heading text-xl font-bold leading-tight text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.description}</p>
            </motion.div>
            {i < steps.length - 1 && (
              <div className="mt-8 flex-1 px-1">
                <AnimatedLine orientation="horizontal" delay={i * 0.18 + 0.3} />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
