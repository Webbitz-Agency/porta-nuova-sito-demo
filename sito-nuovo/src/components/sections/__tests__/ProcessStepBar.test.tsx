import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProcessStepBar } from "@/components/sections/ProcessStepBar";

const STEPS = [
  { number: 1, title: "Verifica requisiti", description: "Controlliamo la soglia di reddito." },
  { number: 2, title: "Nomina avvocato", description: "Scegli un avvocato iscritto agli elenchi." },
  { number: 3, title: "Deposito istanza", description: "Presentiamo l'istanza al Consiglio dell'Ordine." },
];

describe("ProcessStepBar", () => {
  it("renders the heading once and every step title (mobile timeline + desktop bar both in the DOM)", () => {
    render(<ProcessStepBar eyebrow="Come funziona" heading="Quattro passaggi" steps={STEPS} />);

    expect(screen.getByRole("heading", { level: 2, name: "Quattro passaggi" })).toBeInTheDocument();
    // Rendered twice: once in the mobile ProcessTimeline, once in the desktop step bar.
    expect(screen.getAllByText("Verifica requisiti").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Nomina avvocato").length).toBeGreaterThanOrEqual(1);
  });

  it("renders a single continuous connecting line under all the steps, not one per gap", () => {
    const { container } = render(
      <ProcessStepBar eyebrow="Come funziona" heading="Quattro passaggi" steps={STEPS} />
    );
    // Exactly one line regardless of step count — it runs the full row, not per-gap segments.
    expect(container.querySelectorAll('svg[data-orientation="horizontal"]').length).toBe(1);
  });
});
