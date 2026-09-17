import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "@/components/layout/Header";

describe("Header", () => {
  it("renders the studio name and top-level nav links", () => {
    render(<Header />);
    expect(screen.getByText(/Studio Legale Porta Nuova/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Lo studio/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^Guide$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Contatti/i })).toBeInTheDocument();
  });

  it("reveals the practice-area links when the dropdown is opened", async () => {
    const user = userEvent.setup();
    render(<Header />);
    await user.click(screen.getByRole("button", { name: /Aree di assistenza/i }));
    expect(screen.getByRole("link", { name: /Diritto penale/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Diritto civile/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Diritto del lavoro/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Famiglia/i })).toBeInTheDocument();
  });

  it("toggles the mobile menu open and closed", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const toggle = screen.getByRole("button", { name: /Apri menu/i });
    await user.click(toggle);
    expect(screen.getByRole("button", { name: /Chiudi menu/i })).toBeInTheDocument();
  });
});
