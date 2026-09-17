"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

interface VerificaRequisitiProps {
  resultHref: string;
}

type Step = 0 | 1 | 2 | 3;

const QUESTIONS = [
  "Il tuo reddito annuo imponibile è sotto la soglia di € 13.659,64?",
  "Hai già un procedimento in corso, o stai per avviarne uno?",
];

export function VerificaRequisiti({ resultHref }: VerificaRequisitiProps) {
  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  function answer(value: boolean) {
    const next = [...answers, value];
    setAnswers(next);
    if (step === 0) {
      setStep(1);
    } else if (step === 1) {
      setStep(2);
      window.setTimeout(() => setStep(3), 900);
    }
  }

  function restart() {
    setAnswers([]);
    setStep(0);
  }

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-line bg-cream p-8 text-center">
      <AnimatePresence mode="wait">
        {step < 2 && (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
          >
            <p className="font-heading text-lg text-navy">{QUESTIONS[step]}</p>
            <div className="mt-6 flex justify-center gap-4">
              <button type="button" onClick={() => answer(true)} className="rounded-full bg-gold px-6 py-2 text-sm font-semibold text-navy">
                Sì
              </button>
              <button type="button" onClick={() => answer(false)} className="rounded-full border border-navy px-6 py-2 text-sm font-semibold text-navy">
                No
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.p key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-ink/70">
            Verifica in corso…
          </motion.p>
        )}

        {step === 3 && (
          <motion.div key="result" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            {answers[0] ? (
              <>
                <p className="font-heading text-lg font-semibold text-navy">
                  In base alle risposte, potresti avere diritto al gratuito patrocinio.
                </p>
                <p className="mt-2 text-sm text-ink/70">
                  Questo è un orientamento indicativo, non una valutazione legale — confermiamo tutto con un avvocato.
                </p>
              </>
            ) : (
              <>
                <p className="font-heading text-lg font-semibold text-navy">
                  In base al reddito indicato, potresti non rientrare nei limiti del gratuito patrocinio.
                </p>
                <p className="mt-2 text-sm text-ink/70">
                  Esistono comunque eccezioni previste dalla legge — verificarlo con un avvocato è sempre la scelta giusta.
                </p>
              </>
            )}
            <Link
              href={resultHref}
              className="mt-6 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy"
            >
              Parla con lo studio
            </Link>
            <button
              type="button"
              onClick={restart}
              className="mx-auto mt-4 block text-xs text-ink/50 underline"
            >
              Ricomincia
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
