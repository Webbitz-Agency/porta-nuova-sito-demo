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
        className={`font-heading font-semibold leading-[0.95] ${isHome ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl"}`}
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
              className="bg-gold px-6 py-3 font-heading text-base font-semibold tracking-wide text-cream shadow-lg shadow-gold/25 hover:bg-gold-dark"
            >
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="border border-cream/35 px-6 py-3 font-heading text-base font-semibold tracking-wide text-cream hover:border-cream"
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

      {/* Right orbiting ring — half off-screen, spans the hero's height */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[85%] w-[85%] max-w-[620px] -translate-y-1/2 translate-x-1/2 md:block">
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-[54%] -translate-y-1/2 rounded-full border border-gold/20" />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-[46%] rounded-full border border-gold/10" />
        </motion.div>
      </div>

      {/* Left orbiting ring — mirrored */}
      <div className="pointer-events-none absolute left-0 top-1/2 hidden h-[85%] w-[85%] max-w-[620px] -translate-x-1/2 -translate-y-1/2 md:block">
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-[46%] -translate-y-1/2 rounded-full border border-gold/15" />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-[54%] rounded-full border border-gold/10" />
        </motion.div>
      </div>

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
            <Link
              href="/requisiti-per-accedere/"
              aria-label="Verifica in 2 minuti se hai diritto al gratuito patrocinio"
              className="absolute -bottom-6 -left-6 block"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 20px 40px rgba(0,0,0,0.25)",
                    "0 20px 46px rgba(171,127,56,0.6)",
                    "0 20px 40px rgba(0,0,0,0.25)",
                  ],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
                className="flex items-center gap-3 rounded-lg bg-cream px-5 py-4 transition-transform hover:scale-[1.02]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="var(--color-cream)" strokeWidth={2.25}>
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-navy">Verifica in 2 minuti</p>
                  <p className="text-xs text-navy/60">Nessun costo per la valutazione</p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      ) : (
        <div className="relative mx-auto max-w-4xl px-6">{textBlock}</div>
      )}
    </section>
  );
}
