"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { gsap } from "@/lib/gsap";

interface CtaBlockProps {
  variant: "prenota" | "link";
  title: string;
  description?: string;
  label: string;
  href?: string;
}

type BookingStatus = "idle" | "loading" | "success";

export function CtaBlock({ variant, title, description, label, href }: CtaBlockProps) {
  const [status, setStatus] = useState<BookingStatus>("idle");
  const checkPathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (status === "success" && checkPathRef.current) {
      gsap.fromTo(
        checkPathRef.current,
        { drawSVG: "0%" },
        { drawSVG: "100%", duration: 0.6, ease: "power2.out" }
      );
    }
  }, [status]);

  function handleClick() {
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 900);
  }

  return (
    <div className="rounded-2xl border border-line bg-navy px-8 py-10 text-center text-cream">
      <h3 className="font-heading text-2xl font-semibold">{title}</h3>
      {description && <p className="mt-2 text-cream/80">{description}</p>}

      <div className="mt-6 flex min-h-[48px] items-center justify-center">
        {variant === "link" && href && (
          <Link href={href} className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy">
            {label}
          </Link>
        )}

        {variant === "prenota" && status === "idle" && (
          <button
            type="button"
            onClick={handleClick}
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy"
          >
            {label}
          </button>
        )}

        {variant === "prenota" && status === "loading" && (
          <p className="text-sm text-cream/80">Invio in corso…</p>
        )}

        {variant === "prenota" && status === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="var(--color-gold)" strokeWidth={2}>
              <path ref={checkPathRef} d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-sm font-semibold">Richiesta inviata — ti ricontattiamo a breve</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
