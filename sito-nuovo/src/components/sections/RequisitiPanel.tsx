"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { IconDocument } from "@/components/icons";

interface RequisitiPanelProps {
  title: string;
  description: string;
  href: string;
}

export function RequisitiPanel({ title, description, href }: RequisitiPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="h-full"
    >
      <Link
        href={href}
        className="group flex h-full flex-col justify-center rounded-lg bg-navy p-9 text-center shadow-lg shadow-navy/15 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
      >
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
          <IconDocument className="h-8 w-8 text-gold" />
        </span>
        <h3 className="mt-6 font-heading text-3xl font-bold text-cream">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-cream/70">{description}</p>
        <motion.span
          animate={{
            boxShadow: [
              "0 0 22px 6px rgba(171,127,56,0)",
              "0 0 22px 6px rgba(171,127,56,0.65)",
              "0 0 22px 6px rgba(171,127,56,0)",
            ],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
          className="mx-auto mt-8 inline-flex items-center gap-2 bg-gold px-6 py-3 text-sm font-semibold text-cream transition-colors group-hover:bg-gold-dark"
        >
          Verifica ora
          <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </Link>
    </motion.div>
  );
}
