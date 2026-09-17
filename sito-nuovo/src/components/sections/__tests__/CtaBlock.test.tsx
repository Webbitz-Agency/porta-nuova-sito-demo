import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CtaBlock } from "@/components/sections/CtaBlock";

describe("CtaBlock", () => {
  it("renders a plain link when variant is 'link'", () => {
    render(<CtaBlock variant="link" title="Contattaci" label="Vai ai contatti" href="/contatti/" />);
    expect(screen.getByRole("link", { name: "Vai ai contatti" })).toHaveAttribute("href", "/contatti/");
  });

  it("shows a fake success state after clicking 'Prenota'", async () => {
    vi.useFakeTimers();
    const user = userEvent.setup({ delay: null, advanceTimers: vi.advanceTimersByTime });
    render(<CtaBlock variant="prenota" title="Prenota una chiamata" label="Prenota" />);

    await user.click(screen.getByRole("button", { name: "Prenota" }));
    expect(screen.getByText(/Invio in corso/i)).toBeInTheDocument();

    await vi.advanceTimersByTimeAsync(1000);
    expect(screen.getByText(/Richiesta inviata/i)).toBeInTheDocument();

    vi.useRealTimers();
  });
});
