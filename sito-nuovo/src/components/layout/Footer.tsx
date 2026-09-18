import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  phone: string;
  whatsapp: string;
  email?: string;
}

const AREAS_LINKS = [
  { label: "Diritto penale", href: "/avvocato-penalista-gratis-milano/" },
  { label: "Diritto civile", href: "/avvocato-civilista-gratis-milano/" },
  { label: "Diritto del lavoro", href: "/avvocato-lavoro-gratis-milano/" },
  { label: "Famiglia", href: "/assistenza-legale-milano/separazione-e-divorzio/" },
];

const STUDIO_LINKS = [
  { label: "Come funziona", href: "/gratuito-patrocinio-milano/" },
  { label: "Requisiti", href: "/requisiti-per-accedere/" },
  { label: "Guide", href: "/guide/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contatti", href: "/contatti/" },
];

export function Footer({ phone, whatsapp, email }: FooterProps) {
  const whatsappDigits = whatsapp.replace(/[^\d]/g, "");
  const phoneDigits = "+39" + phone.replace(/[^\d]/g, "").replace(/^39/, "");

  return (
    <footer className="bg-navy py-16 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-cream/10 pb-12 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
          <div>
            <Image
              src="/images/logo.png"
              alt="Studio Legale Porta Nuova"
              width={200}
              height={46}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm text-cream/70">
              Assistenza legale gratuita e gratuito patrocinio in tutti i Tribunali di Milano e provincia.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cream">Aree</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-cream/75">
              {AREAS_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cream">Studio</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-cream/75">
              {STUDIO_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cream">Contatti</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-cream/75">
              <Link href={`tel:${phoneDigits}`} className="hover:text-gold">
                {phone}
              </Link>
              <Link href={`https://wa.me/${whatsappDigits}`} className="hover:text-gold">
                WhatsApp
              </Link>
              {email && (
                <Link href={`mailto:${email}`} className="hover:text-gold">
                  {email}
                </Link>
              )}
              <span>Milano e provincia</span>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-cream/50">
          © {new Date().getFullYear()} Studio Legale Porta Nuova. Bozza dimostrativa — non sito in produzione.
        </p>
      </div>
    </footer>
  );
}
