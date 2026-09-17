import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CtaBlock } from "@/components/sections/CtaBlock";

describe("CtaBlock", () => {
  it("renders a plain link when variant is 'link'", () => {
    render(<CtaBlock variant="link" title="Contattaci" label="Vai ai contatti" href="/contatti/" />);
    expect(screen.getByRole("link", { name: "Vai ai contatti" })).toHaveAttribute("href", "/contatti/");
  });

  it("shows a fake success state after clicking 'Prenota'", async () => {
    const user = userEvent.setup();
    render(<CtaBlock variant="prenota" title="Prenota una chiamata" label="Prenota" />);

    await user.click(screen.getByRole("button", { name: "Prenota" }));
    expect(screen.getByText(/Invio in corso/i)).toBeInTheDocument();

    await waitFor(
      () => expect(screen.getByText(/Richiesta inviata/i)).toBeInTheDocument(),
      { timeout: 2000 }
    );
  });
});
