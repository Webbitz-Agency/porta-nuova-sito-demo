"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { AnimatedBackground } from "@/components/motion/AnimatedBackground";

interface HeroProps {
  variant: "home" | "secondary";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function Hero({ variant, eyebrow, title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  const isHome = variant === "home";

  return (
    <section
      className={`relative overflow-hidden ${isHome ? "py-28 md:py-36" : "py-16 md:py-20"} bg-navy text-cream`}
    >
      <AnimatedBackground variant={isHome ? "hero" : "subtle"} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-body text-sm uppercase tracking-widest text-gold"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`font-heading font-semibold ${isHome ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"}`}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-cream/85"
          >
            {subtitle}
          </motion.p>
        )}
        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-gold/90"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream hover:border-cream"
              >
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
