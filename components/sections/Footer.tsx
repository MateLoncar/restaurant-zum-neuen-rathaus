import Link from "next/link";
import Logo from "@/components/Logo";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const { contact } = siteConfig;

  return (
    <footer className="border-t border-white/10 bg-char-950 px-5 py-12 text-ember-50">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link href="/" aria-label={`${siteConfig.shortName} – Startseite`}>
            <Logo />
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-ember-50/65">
            Kroatische und internationale Küche, ein herzlicher Familienbetrieb
            und sechs Hotelzimmer mitten in Düsseldorf-Benrath.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ember-200">
            Besuch
          </h2>
          <address className="mt-4 text-sm not-italic leading-6 text-ember-50/70">
            {contact.address.street}
            <br />
            {contact.address.postalCode} {contact.address.city}
          </address>
          <a
            className="mt-3 inline-block text-sm text-ember-50 hover:text-ember-200"
            href={contact.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Route planen
          </a>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ember-200">
            Kontakt
          </h2>
          <a
            className="mt-4 block text-sm hover:text-ember-200"
            href={`tel:${contact.phoneHref}`}
          >
            {contact.phone}
          </a>
          <a
            className="mt-2 block break-all text-sm text-ember-50/70 hover:text-ember-200"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <a
            className="mt-2 inline-block text-sm text-ember-50/70 hover:text-ember-200"
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ember-50/55 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {siteConfig.shortName}</span>
        <nav aria-label="Rechtliche Hinweise" className="flex gap-5">
          <Link href="/impressum/" className="hover:text-ember-200">Impressum</Link>
          <Link href="/datenschutz/" className="hover:text-ember-200">Datenschutz</Link>
        </nav>
      </div>
    </footer>
  );
}
