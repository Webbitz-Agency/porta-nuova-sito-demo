import type { Metadata } from "next";
import { Cormorant_SC, Inter } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/layout/SiteChrome";

const cormorantSC = Cormorant_SC({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Legale Porta Nuova — Gratuito Patrocinio Milano",
  description:
    "Verifica gratuitamente se hai diritto al patrocinio a spese dello Stato e ottieni assistenza legale a Milano senza anticipare spese.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${cormorantSC.variable} ${inter.variable} h-full antialiased`}
    >
      <body className={`${cormorantSC.variable} ${inter.variable} font-body antialiased`}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
