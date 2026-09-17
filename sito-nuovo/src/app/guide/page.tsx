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
            <article key={item.title} className="rounded-2xl border border-line bg-cream p-6">
              <p className="text-xs uppercase tracking-wide text-gold">{item.date}</p>
              <h2 className="mt-2 font-heading text-lg font-semibold text-navy">{item.title}</h2>
              <p className="mt-2 text-sm text-ink/80">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
