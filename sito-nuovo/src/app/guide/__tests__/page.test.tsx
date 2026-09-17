import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import GuidePage from "@/app/guide/page";
import guide from "@/content/guide";

describe("GuidePage", () => {
  it("renders all 8 guide titles", () => {
    render(<GuidePage />);
    for (const item of guide) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    }
  });
});
