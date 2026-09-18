import { Hero } from "@/components/sections/Hero";
import { SectionLines } from "@/components/motion/SectionLines";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { RequisitiPanel } from "@/components/sections/RequisitiPanel";
import { ImageChecklist } from "@/components/sections/ImageChecklist";
import { ProcessStepBar } from "@/components/sections/ProcessStepBar";
import { CtaBlock } from "@/components/sections/CtaBlock";
import home from "@/content/home";
import contatti from "@/content/contatti";

const PROCESS_STEPS = [
  { number: 1, title: "Verifica dei requisiti reddituali", description: "Controlliamo insieme la soglia di reddito e il nucleo familiare." },
  { number: 2, title: "Nomina dell'avvocato", description: "Scegli un avvocato iscritto negli elenchi del gratuito patrocinio." },
  { number: 3, title: "Deposito dell'istanza", description: "Presentiamo l'istanza di ammissione al Consiglio dell'Ordine competente." },
  { number: 4, title: "Decreto di ammissione", description: "Attendiamo il decreto e avviamo l'assistenza legale." },
];

const WHY_CHOOSE_US = [
  { title: "Oltre 600 pratiche seguite", description: "Esperienza diretta e consolidata nel patrocinio a spese dello Stato." },
  { title: "Copertura su 9 Tribunali", description: "Milano, Monza, Lodi, Pavia, Como, Busto Arsizio, Varese, Bergamo, Brescia." },
  { title: "Videoconsulenza disponibile", description: "Prima valutazione anche a distanza, per chi non può raggiungere lo studio." },
];

export default function HomePage() {
  return (
    <>
      <Hero
        variant="home"
        eyebrow={home.eyebrow}
        title={home.title}
        subtitle={home.subtitle}
        primaryCta={{ label: "Verifica i requisiti", href: "/requisiti-per-accedere/" }}
        secondaryCta={{ label: "Scrivi su WhatsApp", href: "https://wa.me/393454616191" }}
        image={{ src: "/images/hero-justice.jpg", alt: "Bilancia della giustizia" }}
      />

      <section className="relative overflow-hidden py-24">
        <SectionLines />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">Aree di assistenza</p>
            <h2 className="mt-3 font-heading text-5xl font-semibold text-navy md:text-6xl">
              Un supporto legale completo, senza costi se hai diritto
            </h2>
            <p className="mt-4 text-ink/70">{home.intro}</p>
          </div>
          <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.6fr_1fr]">
            <ServiceCardGrid cards={home.services.slice(0, 4)} />
            <RequisitiPanel
              title={home.services[4].title}
              description={home.services[4].description}
              href={home.services[4].href}
            />
          </div>
        </div>
      </section>

      <section className="bg-beige py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ImageChecklist
            eyebrow="Perché sceglierci"
            heading="Esperienza concreta nel gratuito patrocinio, non solo diritto generico"
            image={{ src: "/images/consulenza.jpg", alt: "Consulenza legale allo Studio Legale Porta Nuova" }}
            items={WHY_CHOOSE_US}
            callPhone={contatti.phone}
          />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ProcessStepBar
            eyebrow="Come funziona"
            heading="Quattro passaggi verso l&apos;assistenza gratuita"
            steps={PROCESS_STEPS}
          />
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <CtaBlock
            variant="link"
            tone="gold"
            title="Verifica gratuitamente se hai diritto al patrocinio"
            description="Rispondi a due domande rapide, senza impegno."
            label="Verifica ora"
            href="/requisiti-per-accedere/"
          />
        </div>
      </section>
    </>
  );
}
