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
              className="group block h-full rounded-2xl border border-line bg-cream p-6 transition-colors hover:border-gold"
            >
              <Icon className="h-10 w-10 text-navy group-hover:text-gold" />
              <h3 className="mt-4 font-heading text-lg font-semibold text-navy">{card.title}</h3>
              <p className="mt-2 text-sm text-ink/80">{card.description}</p>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
