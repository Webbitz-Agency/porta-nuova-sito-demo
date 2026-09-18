import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RequisitiPanel } from "@/components/sections/RequisitiPanel";

describe("RequisitiPanel", () => {
  it("renders the title, description and links to the given href", () => {
    render(
      <RequisitiPanel
        title="Requisiti per accedere"
        description="Scopri se il tuo reddito rientra nella soglia per il gratuito patrocinio."
        href="/requisiti-per-accedere/"
      />
    );
    expect(screen.getByRole("heading", { name: "Requisiti per accedere" })).toBeInTheDocument();
    expect(screen.getByText(/Scopri se il tuo reddito/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Requisiti per accedere/ })).toHaveAttribute(
      "href",
      "/requisiti-per-accedere/"
    );
  });
});
