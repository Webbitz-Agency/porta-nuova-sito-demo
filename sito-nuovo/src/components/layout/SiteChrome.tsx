import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import contatti from "@/content/contatti";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer phone={contatti.phone} whatsapp={contatti.whatsapp} email={contatti.email} />
    </>
  );
}
