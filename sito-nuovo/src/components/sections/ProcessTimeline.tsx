"use client";

import { motion } from "motion/react";
import { AnimatedLine } from "@/components/motion/AnimatedLine";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className="mx-auto flex max-w-2xl flex-col">
      {steps.map((step, i) => (
        <motion.li
          key={step.number}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="flex gap-5"
        >
          <div className="flex flex-col items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-lg font-bold text-cream ring-4 ring-cream">
              {step.number}
            </span>
            {i < steps.length - 1 && <AnimatedLine orientation="vertical" className="my-1" />}
          </div>
          <div className="pb-10">
            <h3 className="font-heading text-xl font-semibold text-navy">{step.title}</h3>
            <p className="mt-1 text-sm text-ink/70">{step.description}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
