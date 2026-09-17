import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { VerificaRequisiti } from "@/components/sections/VerificaRequisiti";

describe("VerificaRequisiti", () => {
  it("walks through both questions to a result with a contact CTA", async () => {
    const user = userEvent.setup();
    render(<VerificaRequisiti resultHref="/contatti/" />);

    expect(screen.getByText(/reddito annuo/i)).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Sì" }));

    await waitFor(
      () => expect(screen.getByText(/procedimento/i)).toBeInTheDocument(),
      { timeout: 1000 }
    );
    await user.click(screen.getByRole("button", { name: "Sì" }));

    await waitFor(
      () => expect(screen.getByText(/Verifica in corso/i)).toBeInTheDocument(),
      { timeout: 1000 }
    );

    await waitFor(
      () => expect(screen.getByText(/potresti avere diritto/i)).toBeInTheDocument(),
      { timeout: 2000 }
    );
    expect(screen.getByRole("link", { name: /Parla con lo studio/i })).toHaveAttribute("href", "/contatti/");
  });

  it("shows the negative-outcome result and can restart when the first answer is No", async () => {
    const user = userEvent.setup();
    render(<VerificaRequisiti resultHref="/contatti/" />);

    await user.click(screen.getByRole("button", { name: "No" }));

    await waitFor(
      () => expect(screen.getByText(/procedimento/i)).toBeInTheDocument(),
      { timeout: 1000 }
    );
    await user.click(screen.getByRole("button", { name: "Sì" }));

    await waitFor(
      () => expect(screen.getByText(/Verifica in corso/i)).toBeInTheDocument(),
      { timeout: 1000 }
    );

    await waitFor(
      () => expect(screen.getByText(/potresti non rientrare/i)).toBeInTheDocument(),
      { timeout: 2000 }
    );

    await user.click(screen.getByRole("button", { name: "Ricomincia" }));
    expect(screen.getByText(/reddito annuo/i)).toBeInTheDocument();
  });
});
