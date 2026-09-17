import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import StudioPage from "@/app/studio-legale-porta-nuova/page";
import studio from "@/content/studio";

describe("StudioPage", () => {
  it("renders the studio title, coverage area and value items", () => {
    render(<StudioPage />);
    expect(screen.getByRole("heading", { level: 1, name: studio.title })).toBeInTheDocument();
    expect(screen.getByText("Milano")).toBeInTheDocument();
    expect(screen.getByText(studio.values[0].title)).toBeInTheDocument();
  });
});
