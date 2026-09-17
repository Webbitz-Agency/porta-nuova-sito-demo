import { Hero } from "@/components/sections/Hero";
import { ContactFormShell } from "@/components/sections/ContactFormShell";
import { CtaBlock } from "@/components/sections/CtaBlock";
import contatti from "@/content/contatti";

export default function ContattiPage() {
  return (
    <>
      <Hero
        variant="secondary"
        eyebrow="Contatti"
        title="Parla con lo Studio Legale Porta Nuova"
        subtitle={contatti.note}
      />
      <div className="mx-auto max-w-4xl px-6 py-16">
        <ContactFormShell phone={contatti.phone} whatsapp={contatti.whatsapp} email={contatti.email} />

        <div className="mt-14 max-w-md mx-auto">
          <CtaBlock
            variant="prenota"
            title="Preferisci una chiamata?"
            description="Prenota una prima chiamata conoscitiva con lo studio."
            label="Prenota"
          />
        </div>
      </div>
    </>
  );
}
