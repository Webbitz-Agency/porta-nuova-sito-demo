"use client";

import Image from "next/image";
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
  image?: { src: string; alt: string };
}

export function Hero({ variant, eyebrow, title, subtitle, primaryCta, secondaryCta, image }: HeroProps) {
  const isHome = variant === "home";

  const textBlock = (
    <div className={isHome ? "" : "mx-auto max-w-4xl text-center"}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-gold"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-heading font-semibold leading-tight ${isHome ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl"}`}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-6 text-lg text-cream/80 ${isHome ? "max-w-xl" : "mx-auto max-w-2xl"}`}
        >
          {subtitle}
        </motion.p>
      )}
      {(primaryCta || secondaryCta) && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-10 flex flex-wrap gap-4 ${isHome ? "" : "justify-center"}`}
        >
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="rounded-md bg-gold px-7 py-4 text-sm font-semibold text-navy shadow-lg shadow-gold/25 hover:bg-gold-dark"
            >
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="rounded-md border border-cream/35 px-7 py-4 text-sm font-semibold text-cream hover:border-cream"
            >
              {secondaryCta.label}
            </Link>
          )}
        </motion.div>
      )}
    </div>
  );

  return (
    <section className={`relative overflow-hidden ${isHome ? "py-24 md:py-32" : "py-16 md:py-20"} bg-navy text-cream`}>
      <AnimatedBackground variant={isHome ? "hero" : "subtle"} />
      <div className="pointer-events-none absolute -right-24 -top-32 hidden h-[420px] w-[420px] rounded-full border border-gold/20 md:block" />
      <div className="pointer-events-none absolute -right-8 -top-16 hidden h-[420px] w-[420px] rounded-full border border-gold/10 md:block" />

      {isHome && image ? (
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          {textBlock}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 rounded-xl border border-gold/50" />
            <Image
              src={image.src}
              alt={image.alt}
              width={640}
              height={480}
              className="relative h-[420px] w-full rounded-lg object-cover shadow-2xl shadow-black/40"
            />
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-lg bg-cream px-5 py-4 shadow-xl shadow-black/25">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="var(--color-gold)" strokeWidth={2}>
                  <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="font-heading text-sm font-bold text-navy">Verifica in 2 minuti</p>
                <p className="text-xs text-navy/60">Nessun costo per la valutazione</p>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="relative mx-auto max-w-4xl px-6">{textBlock}</div>
      )}
    </section>
  );
}
