import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { AnimatedLine } from "@/components/motion/AnimatedLine";

describe("AnimatedLine", () => {
  it("renders an svg with a path", () => {
    const { container } = render(<AnimatedLine />);
    expect(container.querySelector("svg")).toBeInTheDocument();
    expect(container.querySelector("path")).toBeInTheDocument();
  });

  it("renders vertically when orientation is vertical", () => {
    const { container } = render(<AnimatedLine orientation="vertical" />);
    expect(container.querySelector("svg")?.getAttribute("data-orientation")).toBe("vertical");
  });
});
