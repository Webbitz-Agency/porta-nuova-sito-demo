import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TeamGrid } from "@/components/sections/TeamGrid";

describe("TeamGrid", () => {
  it("renders the heading and each value item", () => {
    render(
      <TeamGrid
        heading="Perché scegliere lo Studio Legale Porta Nuova"
        items={[{ title: "Oltre 600 pratiche seguite", description: "Esperienza diretta nel gratuito patrocinio." }]}
      />
    );
    expect(screen.getByRole("heading", { name: /Perché scegliere/ })).toBeInTheDocument();
    expect(screen.getByText("Oltre 600 pratiche seguite")).toBeInTheDocument();
  });
});
