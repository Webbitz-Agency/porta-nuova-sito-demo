"use client";

import { useState } from "react";

interface ContactFormShellProps {
  phone: string;
  whatsapp: string;
  email?: string;
}

export function ContactFormShell({ phone, whatsapp, email }: ContactFormShellProps) {
  const [sent, setSent] = useState(false);

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <form
        aria-label="form"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="flex flex-col gap-4 rounded-lg border border-line border-t-4 border-t-gold bg-white p-7 shadow-sm shadow-navy/5"
      >
        <label className="text-sm text-ink" htmlFor="nome">
          Nome
          <input id="nome" name="nome" type="text" className="mt-1 w-full rounded-lg border border-line px-3 py-2" />
        </label>
        <label className="text-sm text-ink" htmlFor="email">
          Email
          <input id="email" name="email" type="email" className="mt-1 w-full rounded-lg border border-line px-3 py-2" />
        </label>
        <label className="text-sm text-ink" htmlFor="oggetto">
          Oggetto
          <input id="oggetto" name="oggetto" type="text" className="mt-1 w-full rounded-lg border border-line px-3 py-2" />
        </label>
        <label className="text-sm text-ink" htmlFor="telefono">
          Telefono
          <input id="telefono" name="telefono" type="tel" className="mt-1 w-full rounded-lg border border-line px-3 py-2" />
        </label>
        <label className="text-sm text-ink" htmlFor="messaggio">
          Messaggio
          <textarea id="messaggio" name="messaggio" rows={4} className="mt-1 w-full rounded-lg border border-line px-3 py-2" />
        </label>
        <label className="flex items-center gap-2 text-xs text-ink/70" htmlFor="informativa">
          <input id="informativa" name="informativa" type="checkbox" />
          Ho preso visione dell&apos;Informativa
        </label>
        <label className="flex items-center gap-2 text-xs text-ink/70" htmlFor="privacy">
          <input id="privacy" name="privacy" type="checkbox" />
          Ho letto e accetto Privacy and Cookie Policy
        </label>
        {sent ? (
          <p className="mt-2 rounded-lg bg-sage/10 px-4 py-3 text-sm font-semibold text-sage">
            Messaggio inviato — ti risponderemo al più presto.
          </p>
        ) : (
          <button type="submit" className="mt-2 rounded-md bg-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-lg shadow-gold/20 hover:bg-gold-dark">
            Invia
          </button>
        )}
      </form>

      <div className="flex flex-col justify-center gap-4">
        <p className="text-sm text-ink/80">
          Il gratuito patrocinio non è applicabile per prestazioni di consulenza o assistenza stragiudiziale.
        </p>
        <p className="font-heading text-lg text-navy">{phone}</p>
        <p className="text-sm text-ink/70">WhatsApp: {whatsapp}</p>
        {email && <p className="text-sm text-ink/70">{email}</p>}
      </div>
    </div>
  );
}
