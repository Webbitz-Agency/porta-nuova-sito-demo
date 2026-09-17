import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

function Probe() {
  return <p>testing harness online</p>;
}

describe("testing harness", () => {
  it("renders a component with Testing Library", () => {
    render(<Probe />);
    expect(screen.getByText("testing harness online")).toBeInTheDocument();
  });
});
