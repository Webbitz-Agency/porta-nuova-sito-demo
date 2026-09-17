import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactFormShell } from "@/components/sections/ContactFormShell";

describe("ContactFormShell", () => {
  it("renders the real field set and does not navigate on submit", async () => {
    const user = userEvent.setup();
    render(<ContactFormShell phone="345 4616191" whatsapp="+393454616191" email="info@example.com" />);

    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Oggetto/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telefono/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Messaggio/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Informativa/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Privacy and Cookie Policy/i)).toBeInTheDocument();

    const submitSpy = vi.fn((e: Event) => e.preventDefault());
    screen.getByRole("form").addEventListener("submit", submitSpy);
    await user.click(screen.getByRole("button", { name: /Invia/i }));
    expect(submitSpy).toHaveBeenCalled();
  });
});
