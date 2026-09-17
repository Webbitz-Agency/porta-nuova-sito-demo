"use client";

import { motion } from "motion/react";

interface ValueItem {
  title: string;
  description: string;
}

interface TeamGridProps {
  heading: string;
  items: ValueItem[];
}

export function TeamGrid({ heading, items }: TeamGridProps) {
  return (
    <div>
      <h2 className="text-center font-heading text-2xl font-semibold text-navy">{heading}</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-line bg-cream p-6"
          >
            <h3 className="font-heading text-base font-semibold text-navy">{item.title}</h3>
            <p className="mt-2 text-sm text-ink/80">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
