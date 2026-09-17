import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { IconScales, IconDocument, IconShield, IconHandshake, IconGavel } from "@/components/icons";

const icons = { IconScales, IconDocument, IconShield, IconHandshake, IconGavel };

describe("animated icon set", () => {
  for (const [name, Icon] of Object.entries(icons)) {
    it(`${name} renders a single svg root`, () => {
      const { container } = render(<Icon />);
      expect(container.querySelectorAll("svg").length).toBe(1);
    });
  }
});
