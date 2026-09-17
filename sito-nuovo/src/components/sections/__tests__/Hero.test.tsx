import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/Hero";

describe("Hero", () => {
  it("renders the title as an H1 and the subtitle", () => {
    render(<Hero variant="home" title="Avvocato Gratuito a Milano" subtitle="Verifica se hai diritto" />);
    expect(screen.getByRole("heading", { level: 1, name: "Avvocato Gratuito a Milano" })).toBeInTheDocument();
    expect(screen.getByText("Verifica se hai diritto")).toBeInTheDocument();
  });

  it("renders CTAs as links when provided", () => {
    render(
      <Hero
        variant="secondary"
        title="Requisiti"
        primaryCta={{ label: "Verifica requisiti", href: "/requisiti-per-accedere/" }}
      />
    );
    expect(screen.getByRole("link", { name: "Verifica requisiti" })).toHaveAttribute(
      "href",
      "/requisiti-per-accedere/"
    );
  });
});
