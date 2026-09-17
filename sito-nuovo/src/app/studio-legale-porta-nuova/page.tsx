import { Hero } from "@/components/sections/Hero";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { CtaBlock } from "@/components/sections/CtaBlock";
import studio from "@/content/studio";

export default function StudioPage() {
  return (
    <>
      <Hero variant="secondary" eyebrow={studio.eyebrow} title={studio.title} subtitle={studio.subtitle} />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-ink/80">{studio.intro}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {studio.coverage.map((city) => (
            <span key={city} className="rounded-full border border-line px-4 py-1 text-sm text-navy">
              {city}
            </span>
          ))}
        </div>

        <div className="mt-14">
          <TeamGrid heading="Perché scegliere lo Studio Legale Porta Nuova" items={studio.values} />
        </div>

        <div className="mt-14">
          <CtaBlock
            variant="link"
            title="Parliamo del tuo caso"
            label="Contattaci"
            href="/contatti/"
          />
        </div>
      </div>
    </>
  );
}
