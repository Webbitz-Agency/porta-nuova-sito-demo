import Link from "next/link";

interface FooterProps {
  phone: string;
  whatsapp: string;
  email?: string;
}

export function Footer({ phone, whatsapp, email }: FooterProps) {
  const whatsappDigits = whatsapp.replace(/[^\d]/g, "");
  const phoneDigits = "+39" + phone.replace(/[^\d]/g, "").replace(/^39/, "");

  return (
    <footer className="border-t border-line bg-navy py-12 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm text-cream/80">Milano e provincia — Gratuito Patrocinio</p>
        <div className="mt-6 flex flex-wrap gap-6 text-sm">
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
        </div>
        <p className="mt-8 text-xs text-cream/50">
          © {new Date().getFullYear()} Bozza dimostrativa — non sito in produzione.
        </p>
      </div>
    </footer>
  );
}
