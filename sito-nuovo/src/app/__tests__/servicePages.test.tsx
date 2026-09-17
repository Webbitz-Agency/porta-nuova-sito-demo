import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ComeFunzionaPage from "@/app/gratuito-patrocinio-milano/page";
import RequisitiPage from "@/app/requisiti-per-accedere/page";
import PenalePage from "@/app/avvocato-penalista-gratis-milano/page";
import CivilePage from "@/app/avvocato-civilista-gratis-milano/page";
import LavoroPage from "@/app/avvocato-lavoro-gratis-milano/page";
import FamigliaPage from "@/app/assistenza-legale-milano/separazione-e-divorzio/page";
import comeFunziona from "@/content/comeFunziona";
import requisiti from "@/content/requisiti";
import penale from "@/content/penale";
import civile from "@/content/civile";
import lavoro from "@/content/lavoro";
import famiglia from "@/content/famiglia";

const routes = [
  { Page: ComeFunzionaPage, title: comeFunziona.title },
  { Page: RequisitiPage, title: requisiti.title },
  { Page: PenalePage, title: penale.title },
  { Page: CivilePage, title: civile.title },
  { Page: LavoroPage, title: lavoro.title },
  { Page: FamigliaPage, title: famiglia.title },
];

describe("template-driven service pages", () => {
  for (const { Page, title } of routes) {
    it(`renders "${title}" as the H1`, () => {
      render(<Page />);
      expect(screen.getByRole("heading", { level: 1, name: title })).toBeInTheDocument();
    });
  }
});
