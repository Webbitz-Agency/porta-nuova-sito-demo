import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { SectionLines } from "@/components/motion/SectionLines";

describe("SectionLines", () => {
  it("renders a decorative svg with two paths, marked aria-hidden", () => {
    const { container } = render(<SectionLines />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(container.querySelectorAll("path").length).toBe(2);
  });
});
