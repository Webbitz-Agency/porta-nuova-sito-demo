import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";
import home from "@/content/home";

describe("HomePage", () => {
  it("renders the H1, the stat label and all 5 service cards", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { level: 1, name: home.title })).toBeInTheDocument();
    expect(screen.getByText(home.stats[0].label)).toBeInTheDocument();
    for (const service of home.services) {
      expect(screen.getByRole("link", { name: new RegExp(service.title) })).toBeInTheDocument();
    }
  });
});
