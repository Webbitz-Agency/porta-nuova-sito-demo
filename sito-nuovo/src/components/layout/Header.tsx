"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

const TOP_LEVEL_LINKS = [
  { label: "Home", href: "/" },
  { label: "Come funziona", href: "/gratuito-patrocinio-milano/" },
];

const PRACTICE_AREAS = [
  { label: "Diritto penale", href: "/avvocato-penalista-gratis-milano/" },
  { label: "Diritto civile", href: "/avvocato-civilista-gratis-milano/" },
  { label: "Diritto del lavoro", href: "/avvocato-lavoro-gratis-milano/" },
  { label: "Famiglia", href: "/assistenza-legale-milano/separazione-e-divorzio/" },
];

const TAIL_LINKS = [
  { label: "Lo studio", href: "/studio-legale-porta-nuova/" },
  { label: "Guide", href: "/guide/" },
];

const CONTATTI_LINK = { label: "Contatti", href: "/contatti/" };

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <path
        d="M6.5 3h3l2 5-2.5 1.5a12 12 0 0 0 5.5 5.5L16 12.5l5 2v3a2 2 0 0 1-2 2C10.5 19.5 4.5 13.5 4.5 5a2 2 0 0 1 2-2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.75}>
      <path
        d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
}

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!dropdownOpen) return;

    function handleOutsideClick(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [dropdownOpen]);

  useEffect(() => {
    if (!dropdownOpen && !mobileOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [dropdownOpen, mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/95">
      <div className="hidden bg-navy py-2.5 text-cream md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-xs">
          <span className="flex items-center gap-2 opacity-85">
            <PhoneIcon />
            +39 345 4616191
          </span>
          <span className="flex items-center gap-2 opacity-85">
            <ClockIcon />
            Lun–Ven 9:00–19:00
          </span>
          <span className="flex items-center gap-2 opacity-85">
            <PinIcon />
            Milano e provincia
          </span>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Studio Legale Porta Nuova"
            width={220}
            height={51}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {TOP_LEVEL_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="font-heading text-base font-semibold tracking-wide text-ink hover:text-gold">
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              aria-controls="aree-dropdown"
              onClick={() => setDropdownOpen(true)}
              className="flex items-center gap-1.5 font-heading text-base font-semibold tracking-wide text-ink hover:text-gold"
            >
              Aree di assistenza
              <ChevronIcon open={dropdownOpen} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  id="aree-dropdown"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full flex w-64 flex-col gap-5 rounded-lg border border-line bg-cream p-5 pt-6 shadow-xl"
                >
                  {PRACTICE_AREAS.map((area) => (
                    <Link key={area.href} href={area.href} className="font-heading text-base font-semibold tracking-wide text-ink hover:text-gold">
                      {area.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {TAIL_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="font-heading text-base font-semibold tracking-wide text-ink hover:text-gold">
              {link.label}
            </Link>
          ))}

          <Link
            href={CONTATTI_LINK.href}
            className="rounded-md bg-gold px-5 py-2.5 font-heading text-base font-semibold tracking-wide text-cream shadow-md shadow-gold/25 hover:bg-gold-dark"
          >
            {CONTATTI_LINK.label}
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label="Apri menu"
          onClick={() => setMobileOpen(true)}
        >
          Apri menu
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col gap-4 bg-cream p-6 md:hidden"
          >
            <div className="flex items-center justify-between">
              <Image src="/images/logo.png" alt="Studio Legale Porta Nuova" width={180} height={41} className="h-9 w-auto" />
              <button
                type="button"
                aria-label="Chiudi menu"
                onClick={() => setMobileOpen(false)}
                className="text-2xl leading-none"
              >
                ×
              </button>
            </div>
            {[...TOP_LEVEL_LINKS, ...PRACTICE_AREAS, ...TAIL_LINKS, CONTATTI_LINK].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link href={link.href} className="font-heading text-xl font-semibold tracking-wide text-ink" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
