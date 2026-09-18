import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Testimonials } from "@/components/sections/Testimonials";

const ITEMS = [
  { title: "Ottimo servizio", quote: "Servizio impeccabile e persone gentili.", author: "Anna S.", rating: 5 },
  { title: "Molto attenti", quote: "Mi hanno seguito con grande attenzione.", author: "Luca P.", rating: 4 },
];

describe("Testimonials", () => {
  it("renders the heading, and every quote/title/author at least once (track is duplicated for the loop)", () => {
    render(<Testimonials eyebrow="Recensioni" heading="Chi si è affidato a noi" items={ITEMS} />);

    expect(screen.getByRole("heading", { level: 2, name: "Chi si è affidato a noi" })).toBeInTheDocument();
    expect(screen.getAllByText(/Servizio impeccabile/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Ottimo servizio").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Anna S.").length).toBeGreaterThanOrEqual(1);
  });

  it("duplicates the track once for a seamless loop and varies the star count per rating", () => {
    const { container } = render(
      <Testimonials eyebrow="Recensioni" heading="Chi si è affidato a noi" items={ITEMS} />
    );
    // 2 items duplicated once = 4 cards, 5 stars each = 20 star icons total.
    expect(container.querySelectorAll("svg").length).toBe(20);
    // A 4-star card must render fewer filled stars than a 5-star card.
    const filled = container.querySelectorAll("svg.fill-gold").length;
    const empty = container.querySelectorAll("svg.fill-line").length;
    expect(filled).toBeGreaterThan(0);
    expect(empty).toBeGreaterThan(0);
    expect(filled + empty).toBe(20);
  });
});
