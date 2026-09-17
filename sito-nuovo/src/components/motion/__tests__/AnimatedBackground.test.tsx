import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { AnimatedBackground } from "@/components/motion/AnimatedBackground";

describe("AnimatedBackground", () => {
  it("renders decorative blob shapes marked aria-hidden", () => {
    const { container } = render(<AnimatedBackground />);
    const root = container.firstElementChild;
    expect(root).toHaveAttribute("aria-hidden", "true");
  });
});
