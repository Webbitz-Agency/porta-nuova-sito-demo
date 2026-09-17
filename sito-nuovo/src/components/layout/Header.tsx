"use client";

import { useState } from "react";
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
  { label: "Contatti", href: "/contatti/" },
];

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading text-lg font-semibold text-navy">
          Studio Legale Porta Nuova
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {TOP_LEVEL_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-ink hover:text-gold">
              {link.label}
            </Link>
          ))}

          <div className="relative">
            <button
              type="button"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen((open) => !open)}
              className="text-sm text-ink hover:text-gold"
            >
              Aree di assistenza
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-2 flex w-56 flex-col gap-2 rounded-lg border border-line bg-cream p-3 shadow-lg"
                >
                  {PRACTICE_AREAS.map((area) => (
                    <Link key={area.href} href={area.href} className="text-sm text-ink hover:text-gold">
                      {area.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {TAIL_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-ink hover:text-gold">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? "Chiudi menu" : "Apri menu"}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[65px] z-40 flex flex-col gap-4 bg-cream p-6 md:hidden"
          >
            {[...TOP_LEVEL_LINKS, ...PRACTICE_AREAS, ...TAIL_LINKS].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link href={link.href} className="text-lg text-ink" onClick={() => setMobileOpen(false)}>
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
