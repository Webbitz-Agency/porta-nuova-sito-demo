import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ContattiPage from "@/app/contatti/page";

describe("ContattiPage", () => {
  it("renders the contact form shell and the fake-booking CTA", () => {
    render(<ContattiPage />);
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Prenota/i })).toBeInTheDocument();
  });
});
