import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

describe("FaqAccordion", () => {
  it("hides answers until their question is clicked", async () => {
    const user = userEvent.setup();
    render(
      <FaqAccordion
        items={[{ question: "Il gratuito patrocinio è davvero gratuito?", answer: "Sì, lo Stato copre le spese legali." }]}
      />
    );
    expect(screen.queryByText("Sì, lo Stato copre le spese legali.")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /Il gratuito patrocinio è davvero gratuito?/ }));
    expect(screen.getByText("Sì, lo Stato copre le spese legali.")).toBeInTheDocument();
  });
});
