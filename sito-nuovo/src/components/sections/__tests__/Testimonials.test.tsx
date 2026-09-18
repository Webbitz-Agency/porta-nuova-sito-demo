import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Testimonials } from "@/components/sections/Testimonials";

const ITEMS = [
  { quote: "Servizio impeccabile e persone gentili.", author: "Anna S." },
  { quote: "Mi hanno seguito con grande attenzione.", author: "Luca P." },
];

describe("Testimonials", () => {
  it("renders the heading and every quote/author", () => {
    render(<Testimonials eyebrow="Recensioni" heading="Chi si è affidato a noi" items={ITEMS} />);

    expect(screen.getByRole("heading", { level: 2, name: "Chi si è affidato a noi" })).toBeInTheDocument();
    expect(screen.getByText(/Servizio impeccabile/)).toBeInTheDocument();
    expect(screen.getByText("Anna S.")).toBeInTheDocument();
    expect(screen.getByText("Luca P.")).toBeInTheDocument();
  });

  it("renders a 5-star row for each testimonial", () => {
    const { container } = render(
      <Testimonials eyebrow="Recensioni" heading="Chi si è affidato a noi" items={ITEMS} />
    );
    expect(container.querySelectorAll("svg.fill-gold").length).toBe(ITEMS.length * 5);
  });
});
