"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface ChecklistItem {
  title: string;
  description: string;
}

interface ImageChecklistProps {
  eyebrow: string;
  heading: string;
  items: ChecklistItem[];
  image: { src: string; alt: string };
}

export function ImageChecklist({ eyebrow, heading, items, image }: ImageChecklistProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div className="relative mx-auto w-full max-w-md lg:mx-0">
        <div className="absolute -right-5 -top-5 -z-10 h-32 w-32 rounded-lg bg-gold" />
        <Image
          src={image.src}
          alt={image.alt}
          width={640}
          height={480}
          className="h-96 w-full rounded-lg object-cover shadow-xl shadow-navy/15"
        />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">{eyebrow}</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-navy md:text-4xl">{heading}</h2>
        <div className="mt-8 flex flex-col gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="var(--color-navy)" strokeWidth={3}>
                  <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="font-heading text-base font-bold text-navy">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
