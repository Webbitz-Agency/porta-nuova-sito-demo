import { Hero } from "@/components/sections/Hero";
import { StatsBlock } from "@/components/sections/StatsBlock";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { CtaBlock } from "@/components/sections/CtaBlock";
import home from "@/content/home";

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
      />

      <section className="bg-navy py-16 text-cream">
        <div className="mx-auto max-w-4xl px-6">
          <StatsBlock stats={home.stats} />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mx-auto max-w-2xl text-center text-ink/80">{home.intro}</p>
          <div className="mt-12">
            <ServiceCardGrid cards={home.services} />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-2xl px-6">
          <CtaBlock
            variant="link"
            title="Verifica se hai diritto al gratuito patrocinio"
            description="Rispondi a due domande rapide sulla pagina Requisiti."
            label="Verifica ora"
            href="/requisiti-per-accedere/"
          />
        </div>
      </section>
    </>
  );
}
