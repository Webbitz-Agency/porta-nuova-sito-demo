import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";

describe("ProcessTimeline", () => {
  it("renders each step's number, title and description in order", () => {
    render(
      <ProcessTimeline
        steps={[
          { number: 1, title: "Verifica requisiti", description: "Controlliamo la soglia di reddito." },
          { number: 2, title: "Nomina avvocato", description: "Scegli un avvocato iscritto agli elenchi." },
        ]}
      />
    );
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Verifica requisiti");
    expect(items[1]).toHaveTextContent("Nomina avvocato");
  });
});
