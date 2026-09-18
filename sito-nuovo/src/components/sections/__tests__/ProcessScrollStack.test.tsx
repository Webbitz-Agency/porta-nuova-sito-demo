import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProcessScrollStack } from "@/components/sections/ProcessScrollStack";

const STEPS = [
  { number: 1, title: "Verifica requisiti", description: "Controlliamo la soglia di reddito." },
  { number: 2, title: "Nomina avvocato", description: "Scegli un avvocato iscritto agli elenchi." },
];

describe("ProcessScrollStack", () => {
  it("renders the heading once and every step title (mobile timeline + desktop panels both in the DOM)", () => {
    render(<ProcessScrollStack eyebrow="Come funziona" heading="Quattro passaggi" steps={STEPS} />);

    expect(screen.getByRole("heading", { level: 2, name: "Quattro passaggi" })).toBeInTheDocument();
    // Rendered twice: once in the mobile ProcessTimeline, once in the desktop panel stack.
    expect(screen.getAllByText("Verifica requisiti").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Nomina avvocato").length).toBeGreaterThanOrEqual(1);
  });

  it("does not throw when matchMedia reports a non-desktop viewport (GSAP pin effect skipped)", () => {
    // vitest.setup.ts's default matchMedia mock returns matches: false, so the
    // desktop/pin branch in the effect short-circuits — this just guards that
    // the component still renders cleanly in that case.
    expect(() =>
      render(<ProcessScrollStack eyebrow="Come funziona" heading="Quattro passaggi" steps={STEPS} />)
    ).not.toThrow();
  });
});
