import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProcessStepBar } from "@/components/sections/ProcessStepBar";

const STEPS = [
  { number: 1, title: "Verifica requisiti", description: "Controlliamo la soglia di reddito." },
  { number: 2, title: "Nomina avvocato", description: "Scegli un avvocato iscritto agli elenchi." },
];

describe("ProcessStepBar", () => {
  it("renders the heading once and every step title (mobile timeline + desktop bar both in the DOM)", () => {
    render(<ProcessStepBar eyebrow="Come funziona" heading="Quattro passaggi" steps={STEPS} />);

    expect(screen.getByRole("heading", { level: 2, name: "Quattro passaggi" })).toBeInTheDocument();
    // Rendered twice: once in the mobile ProcessTimeline, once in the desktop step bar.
    expect(screen.getAllByText("Verifica requisiti").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Nomina avvocato").length).toBeGreaterThanOrEqual(1);
  });

  it("renders a connecting line between steps but not after the last one", () => {
    const { container } = render(
      <ProcessStepBar eyebrow="Come funziona" heading="Quattro passaggi" steps={STEPS} />
    );
    // One connecting line for 2 steps.
    expect(container.querySelectorAll('svg[data-orientation="horizontal"]').length).toBe(1);
  });
});
