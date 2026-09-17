import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import requisiti from "@/content/requisiti";
import penale from "@/content/penale";

describe("ServicePageTemplate", () => {
  it("renders the page title as H1 and every section heading", () => {
    render(<ServicePageTemplate content={penale} />);
    expect(screen.getByRole("heading", { level: 1, name: penale.title })).toBeInTheDocument();
    for (const section of penale.sections) {
      expect(screen.getByText(section.heading)).toBeInTheDocument();
    }
  });

  it("renders the FAQ accordion when the content has one", () => {
    render(<ServicePageTemplate content={requisiti} />);
    expect(screen.getByText(requisiti.faq![0].question)).toBeInTheDocument();
  });

  it("renders VerificaRequisiti when includeVerifica is true", () => {
    render(<ServicePageTemplate content={requisiti} includeVerifica verificaResultHref="/contatti/" />);
    // requisiti's own content also mentions "reddito annuo" in a section body,
    // so assert on VerificaRequisiti's distinctive Sì/No buttons instead of
    // text that would ambiguously match two elements on this page.
    expect(screen.getByRole("button", { name: "Sì" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "No" })).toBeInTheDocument();
  });
});
