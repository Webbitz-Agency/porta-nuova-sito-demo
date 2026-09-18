"use client";

import Image from "next/image";
import Link from "next/link";
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
  callPhone?: string;
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <path
        d="M6.5 3h3l2 5-2.5 1.5a12 12 0 0 0 5.5 5.5L16 12.5l5 2v3a2 2 0 0 1-2 2C10.5 19.5 4.5 13.5 4.5 5a2 2 0 0 1 2-2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ImageChecklist({ eyebrow, heading, items, image, callPhone }: ImageChecklistProps) {
  const phoneDigits = callPhone ? "+39" + callPhone.replace(/[^\d]/g, "").replace(/^39/, "") : undefined;
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
        <h2 className="mt-3 font-heading text-5xl font-semibold text-navy md:text-6xl">{heading}</h2>
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
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="var(--color-cream)" strokeWidth={3}>
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
        {phoneDigits && (
          <Link
            href={`tel:${phoneDigits}`}
            className="mt-8 inline-flex items-center gap-2 bg-gold px-4 py-2 font-heading text-base font-semibold tracking-wide text-cream shadow-md shadow-gold/25 hover:bg-gold-dark"
          >
            <PhoneIcon />
            Chiamaci subito
          </Link>
        )}
      </div>
    </div>
  );
}
