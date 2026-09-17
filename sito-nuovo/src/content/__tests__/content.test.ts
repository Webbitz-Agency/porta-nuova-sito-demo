import { describe, it, expect } from "vitest";
import home from "@/content/home";
import comeFunziona from "@/content/comeFunziona";
import requisiti from "@/content/requisiti";
import penale from "@/content/penale";
import civile from "@/content/civile";
import lavoro from "@/content/lavoro";
import famiglia from "@/content/famiglia";
import studio from "@/content/studio";
import guide from "@/content/guide";
import contatti from "@/content/contatti";

describe("content data", () => {
  it("home has a title, at least one stat and 5 service cards", () => {
    expect(home.title.length).toBeGreaterThan(0);
    expect(home.stats.length).toBeGreaterThan(0);
    expect(home.services).toHaveLength(5);
  });

  it("template-driven pages each have a title and at least one section", () => {
    for (const page of [comeFunziona, requisiti, penale, civile, lavoro, famiglia]) {
      expect(page.title.length).toBeGreaterThan(0);
      expect(page.sections.length).toBeGreaterThan(0);
    }
  });

  it("requisiti and famiglia carry real FAQ content", () => {
    expect(requisiti.faq?.length).toBeGreaterThan(0);
    expect(famiglia.faq?.length).toBeGreaterThan(0);
  });

  it("studio lists real Tribunali coverage", () => {
    expect(studio.coverage).toContain("Milano");
  });

  it("guide has 8 real article entries", () => {
    expect(guide).toHaveLength(8);
  });

  it("contatti carries the real phone number and no fabricated email", () => {
    expect(contatti.phone).toBe("345 4616191");
    expect(contatti.email).toBeUndefined();
  });
});
