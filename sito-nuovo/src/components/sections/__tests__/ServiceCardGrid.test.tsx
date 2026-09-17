import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";

describe("ServiceCardGrid", () => {
  it("renders one link per card with its title and description", () => {
    render(
      <ServiceCardGrid
        cards={[
          { icon: "gavel", title: "Diritto penale", description: "Difesa in ogni fase.", href: "/penale/" },
          { icon: "scales", title: "Diritto civile", description: "Tutela dei tuoi diritti.", href: "/civile/" },
        ]}
      />
    );
    expect(screen.getByRole("link", { name: /Diritto penale/ })).toHaveAttribute("href", "/penale/");
    expect(screen.getByText("Difesa in ogni fase.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Diritto civile/ })).toHaveAttribute("href", "/civile/");
  });
});
