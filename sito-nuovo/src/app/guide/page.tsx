import { Hero } from "@/components/sections/Hero";
import guide from "@/content/guide";

export default function GuidePage() {
  return (
    <>
      <Hero
        variant="secondary"
        eyebrow="Guide"
        title="Guide e approfondimenti sul gratuito patrocinio"
        subtitle="Una selezione di articoli sui temi più richiesti dai nostri assistiti."
      />
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {guide.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-line border-t-4 border-t-gold bg-white p-6 shadow-sm shadow-navy/5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">{item.date}</p>
              <h2 className="mt-2 font-heading text-lg font-semibold text-navy">{item.title}</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/70">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
