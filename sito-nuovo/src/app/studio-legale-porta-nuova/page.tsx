import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { CtaBlock } from "@/components/sections/CtaBlock";
import studio from "@/content/studio";

export default function StudioPage() {
  return (
    <>
      <Hero variant="secondary" eyebrow={studio.eyebrow} title={studio.title} subtitle={studio.subtitle} />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-ink/80">{studio.intro}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {studio.coverage.map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-navy"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -bottom-5 -left-5 -z-10 h-28 w-28 rounded-lg bg-gold" />
            <Image
              src="/images/consulenza.jpg"
              alt="Consulenza allo Studio Legale Porta Nuova"
              width={640}
              height={480}
              className="h-72 w-full rounded-lg object-cover shadow-xl shadow-navy/15"
            />
          </div>
        </div>

        <div className="mt-16">
          <TeamGrid heading="Perché scegliere lo Studio Legale Porta Nuova" items={studio.values} />
        </div>

        <div className="mt-14">
          <CtaBlock
            variant="link"
            tone="gold"
            title="Parliamo del tuo caso"
            label="Contattaci"
            href="/contatti/"
          />
        </div>
      </div>
    </>
  );
}
