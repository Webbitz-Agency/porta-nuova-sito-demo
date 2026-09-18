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

const FLASH_DURATION = 0.6;
const FLASH_START_DELAY = 0.3;

export function ServiceCardGrid({ cards }: ServiceCardGridProps) {
  return (
    <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-2">
      {cards.map((card, i) => {
        const Icon = ICONS[card.icon];
        return (
          <motion.div
            key={card.href}
            initial={{ opacity: 0, y: 24, boxShadow: "0 10px 25px rgba(46,42,40,0.08)" }}
            whileInView={{
              opacity: 1,
              y: 0,
              boxShadow: [
                "0 10px 25px rgba(46,42,40,0.08)",
                "0 18px 40px rgba(143,106,44,0.55)",
                "0 10px 25px rgba(46,42,40,0.08)",
              ],
            }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              opacity: { duration: 0.5, delay: i * 0.08 },
              y: { duration: 0.5, delay: i * 0.08 },
              boxShadow: {
                duration: FLASH_DURATION,
                delay: FLASH_START_DELAY + i * FLASH_DURATION,
                times: [0, 0.5, 1],
              },
            }}
            className="h-full rounded-lg"
          >
            <Link
              href={card.href}
              className="group flex h-full flex-col rounded-lg border border-line bg-white shadow-sm shadow-navy/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
            >
              <div className="flex flex-1 flex-col p-7">
                <Icon className="h-11 w-11 text-gold" />
                <h3 className="mt-5 font-heading text-2xl font-bold text-navy">{card.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/70">{card.description}</p>
                <div className="mt-auto pt-6">
                  <span className="block w-full bg-beige py-3 text-center text-sm font-semibold text-navy transition-colors group-hover:bg-gold group-hover:text-cream">
                    Scopri di più
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
