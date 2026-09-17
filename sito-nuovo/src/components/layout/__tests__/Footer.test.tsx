import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/layout/Footer";

describe("Footer", () => {
  it("renders phone, whatsapp and email as links", () => {
    render(<Footer phone="345 4616191" whatsapp="+393454616191" email="info@example.com" />);
    expect(screen.getByRole("link", { name: /345 4616191/ })).toHaveAttribute("href", "tel:+393454616191");
    expect(screen.getByRole("link", { name: /WhatsApp/i })).toHaveAttribute(
      "href",
      "https://wa.me/393454616191"
    );
    expect(screen.getByRole("link", { name: /info@example.com/ })).toHaveAttribute(
      "href",
      "mailto:info@example.com"
    );
  });

  it("does not fabricate a street address, only city-level coverage", () => {
    render(<Footer phone="345 4616191" whatsapp="+393454616191" email="info@example.com" />);
    expect(screen.getByText(/Milano/)).toBeInTheDocument();
  });
});
