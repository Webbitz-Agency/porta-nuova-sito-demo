import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SiteChrome } from "@/components/layout/SiteChrome";

describe("SiteChrome", () => {
  it("renders the header, the page content and the footer with real contact info", () => {
    render(
      <SiteChrome>
        <p>Contenuto di pagina</p>
      </SiteChrome>
    );
    expect(screen.getByText(/Studio Legale Porta Nuova/i)).toBeInTheDocument();
    expect(screen.getByText("Contenuto di pagina")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /345 4616191/ })).toBeInTheDocument();
  });
});
