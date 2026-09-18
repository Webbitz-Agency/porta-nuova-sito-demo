"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { IconScales, IconDocument, IconShield, IconHandshake, IconGavel } from "@/components/icons";

type ServiceIconKey = "scales" | "document" | "shield" | "handshake" | "gavel";

const ICONS: Record<ServiceIconKey, typeof IconScales> = {
  scales: IconScales,
  document: IconDocument,
  shield: IconShield,
  handshake: IconHandshake,
  gavel: IconGavel,
};

interface ServiceCard {
  icon: ServiceIconKey;
  title: string;
  description: string;
  href: string;
}

interface ServiceCardGridProps {
  cards: ServiceCard[];
}

export function ServiceCardGrid({ cards }: ServiceCardGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, i) => {
        const Icon = ICONS[card.icon];
        return (
          <motion.div
            key={card.href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          >
            <Link
              href={card.href}
              className="group block h-full rounded-lg border border-line border-t-4 border-t-gold bg-white p-7 shadow-sm shadow-navy/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy p-3">
                <Icon className="h-6 w-6 text-gold" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-navy">{card.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/70">{card.description}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                Scopri di più
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
