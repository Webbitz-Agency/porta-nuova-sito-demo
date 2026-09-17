import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatsBlock } from "@/components/sections/StatsBlock";

describe("StatsBlock", () => {
  it("renders each stat's label and starting value", () => {
    render(<StatsBlock stats={[{ value: 600, suffix: "+", label: "Pratiche seguite" }]} />);
    expect(screen.getByText("Pratiche seguite")).toBeInTheDocument();
    // Before scroll-into-view fires in a real browser, jsdom renders the
    // initial value (0) — this locks the safe, no-JS-required fallback.
    expect(screen.getByText("0+")).toBeInTheDocument();
  });
});
