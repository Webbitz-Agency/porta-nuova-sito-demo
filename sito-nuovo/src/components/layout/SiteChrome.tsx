import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionConfigProvider } from "@/components/motion/MotionConfigProvider";
import contatti from "@/content/contatti";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfigProvider>
      <Header />
      <main>{children}</main>
      <Footer phone={contatti.phone} whatsapp={contatti.whatsapp} email={contatti.email} />
    </MotionConfigProvider>
  );
}
