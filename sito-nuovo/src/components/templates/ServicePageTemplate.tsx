import { Hero } from "@/components/sections/Hero";
import { AnimatedLine } from "@/components/motion/AnimatedLine";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { VerificaRequisiti } from "@/components/sections/VerificaRequisiti";
import { CtaBlock } from "@/components/sections/CtaBlock";
import type { PageContent } from "@/content/types";

interface ProcessStepInput {
  number: number;
  title: string;
  description: string;
}

interface ServicePageTemplateProps {
  content: PageContent;
  processSteps?: ProcessStepInput[];
  includeVerifica?: boolean;
  verificaResultHref?: string;
}

export function ServicePageTemplate({
  content,
  processSteps,
  includeVerifica,
  verificaResultHref,
}: ServicePageTemplateProps) {
  return (
    <>
      <Hero variant="secondary" eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />

      <div className="mx-auto max-w-3xl px-6 py-16">
        {content.sections.map((section, i) => (
          <div key={section.heading}>
            {i > 0 && <AnimatedLine className="my-10" />}
            <h2 className="font-heading text-2xl font-semibold text-navy">{section.heading}</h2>
            {section.body && <p className="mt-3 text-ink/80">{section.body}</p>}
            {section.items && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-ink/80">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {processSteps && (
          <div className="mt-14">
            <ProcessTimeline steps={processSteps} />
          </div>
        )}

        {includeVerifica && (
          <div className="mt-14">
            <VerificaRequisiti resultHref={verificaResultHref ?? "/contatti/"} />
          </div>
        )}

        {content.faq && (
          <div className="mt-14">
            <FaqAccordion items={content.faq} />
          </div>
        )}

        <div className="mt-14">
          <CtaBlock
            variant="link"
            title="Hai bisogno di parlare con un avvocato?"
            description="Raccontaci la tua situazione, ti rispondiamo rapidamente."
            label="Contattaci"
            href="/contatti/"
          />
        </div>
      </div>
    </>
  );
}
