import Link from "next/link";
import Logo from "@/components/Logo";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const { contact } = siteConfig;

  return (
    <footer className="border-t border-border bg-background px-5 py-10 text-text">
      <div className="mx-auto grid max-w-7xl gap-9 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link href="/" aria-label={`${siteConfig.shortName} – Startseite`}>
            <Logo />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-text-muted">
            Kroatische und internationale Küche, ein herzlicher Familienbetrieb
            und sechs Hotelzimmer mitten in Düsseldorf-Benrath.
          </p>
          <nav aria-label="Weitere Seiten" className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-muted">
            <Link href="/restaurant/" className="hover:text-accent-ink">Restaurant</Link>
            <Link href="/speisekarte/" className="hover:text-accent-ink">Speisekarte</Link>
            <Link href="/hotel/" className="hover:text-accent-ink">Hotel</Link>
            <Link href="/reservierung/" className="hover:text-accent-ink">Tisch anfragen</Link>
          </nav>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-ink">
            Besuch
          </h2>
          <address className="mt-3 text-sm not-italic leading-6 text-text-muted">
            {contact.address.street}
            <br />
            {contact.address.postalCode} {contact.address.city}
          </address>
          <p className="mt-3 text-sm leading-6 text-text-muted">
            Di–So: 11:30–15:00 und 17:30–24:00 Uhr<br />Montag: Ruhetag
          </p>
          <a
            className="mt-2 inline-block text-sm text-text underline decoration-accent-light underline-offset-4 hover:text-accent-ink"
            href={contact.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Route planen
          </a>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-ink">
            Kontakt
          </h2>
          <a
            className="mt-3 block text-sm text-text-muted hover:text-accent-ink"
            href={`tel:${contact.phoneHref}`}
          >
            {contact.phone}
          </a>
          <a
            className="mt-2 block break-all text-sm text-text-muted hover:text-accent-ink"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <a
            className="mt-2 inline-block text-sm text-text-muted hover:text-accent-ink"
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-border pt-5 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {siteConfig.shortName}</span>
        <nav aria-label="Rechtliche Hinweise" className="flex gap-5">
          <Link href="/impressum/" className="hover:text-ember-200">Impressum</Link>
          <Link href="/datenschutz/" className="hover:text-ember-200">Datenschutz</Link>
        </nav>
      </div>
    </footer>
  );
}
