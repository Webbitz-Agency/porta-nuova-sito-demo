"use client";

import { motion } from "motion/react";

interface Testimonial {
  quote: string;
  author: string;
}

interface TestimonialsProps {
  eyebrow: string;
  heading: string;
  items: Testimonial[];
}

function StarRow() {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-gold">
          <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1 5.9L10 14.9l-5.2 2.7 1-5.9L1.5 7.6l5.9-.7L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials({ eyebrow, heading, items }: TestimonialsProps) {
  return (
    <div>
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">{eyebrow}</p>
        <h2 className="mt-3 font-heading text-5xl font-semibold text-navy md:text-6xl">{heading}</h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={item.author}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex h-full flex-col rounded-lg border border-line bg-white p-7 shadow-sm shadow-navy/5"
          >
            <StarRow />
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/80">&ldquo;{item.quote}&rdquo;</p>
            <p className="mt-5 font-heading text-base font-semibold text-navy">{item.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
