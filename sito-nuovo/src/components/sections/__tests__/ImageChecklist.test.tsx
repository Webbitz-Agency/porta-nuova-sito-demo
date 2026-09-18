import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ImageChecklist } from "@/components/sections/ImageChecklist";

describe("ImageChecklist", () => {
  it("renders the heading, image and each checklist item", () => {
    render(
      <ImageChecklist
        eyebrow="Perché sceglierci"
        heading="Esperienza concreta nel gratuito patrocinio"
        image={{ src: "/images/consulenza.jpg", alt: "Consulenza legale" }}
        items={[
          { title: "Oltre 600 pratiche seguite", description: "Esperienza diretta nel gratuito patrocinio." },
          { title: "Copertura su 9 Tribunali", description: "Milano e provincia." },
        ]}
      />
    );

    expect(screen.getByRole("heading", { name: "Esperienza concreta nel gratuito patrocinio" })).toBeInTheDocument();
    expect(screen.getByAltText("Consulenza legale")).toBeInTheDocument();
    expect(screen.getByText("Oltre 600 pratiche seguite")).toBeInTheDocument();
    expect(screen.getByText("Copertura su 9 Tribunali")).toBeInTheDocument();
  });
});
