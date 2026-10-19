import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Visit() {
  const { contact } = siteConfig;
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:py-16 lg:grid-cols-2">
      <section className="rounded-sm border border-border p-7 sm:p-9" aria-labelledby="kontakt-daten">
        <h2 id="kontakt-daten" className="font-display text-2xl text-ember-100">Hotel-Restaurant Zum Neuen Rathaus</h2>
        <address className="mt-6 text-sm not-italic leading-7 text-ember-50/70">{contact.address.street}<br />{contact.address.postalCode} {contact.address.city}</address>
        <dl className="mt-7 space-y-4 text-sm">
          <Contact label="Telefon" href={`tel:${contact.phoneHref}`} value={contact.phone} />
          <Contact label="WhatsApp" href={contact.whatsapp} value="+49 1575 3271885" external />
          <Contact label="E-Mail" href={`mailto:${contact.email}`} value={contact.email} />
          <div><dt className="text-ember-50/50">Fax</dt><dd className="mt-1 text-ember-50/80">{contact.fax}</dd></div>
        </dl>
        <a href={contact.mapsUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-11 items-center rounded-full border border-ember-300/50 px-5 text-sm font-semibold text-ember-100 hover:bg-accent-light/20">Route in Google Maps öffnen</a>
        <p className="mt-4 text-xs leading-5 text-ember-50/45">Der Kartenlink öffnet Google Maps erst nach Ihrem Klick.</p>
      </section>

      <section className="rounded-sm border border-border p-7 sm:p-9" aria-labelledby="oeffnungszeiten">
        <h2 id="oeffnungszeiten" className="font-display text-2xl text-ember-100">Öffnungszeiten des Restaurants</h2>
        <dl className="mt-6 space-y-3 text-sm">
          {siteConfig.hours.map((entry) => (
            <div key={entry.day} className="flex justify-between gap-5 border-b border-border pb-3">
              <dt className="text-ember-50/70">{entry.day}</dt>
              <dd className="text-right text-ember-50/85">{entry.closed ? "Ruhetag" : <>11:30–15:00 Uhr<br />17:30–22:00 Uhr</>}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-xs leading-5 text-ember-50/45">Für Hotelanfragen nutzen Sie bitte das Formular auf der Hotel-Seite.</p>
        <Link href="/hotel/" className="mt-3 inline-block text-sm text-ember-200 underline underline-offset-4">Zum Hotel und zur Zimmeranfrage</Link>
      </section>
    </section>
  );
}

function Contact({ label, href, value, external = false }: { label: string; href: string; value: string; external?: boolean }) {
  return <div><dt className="text-ember-50/50">{label}</dt><dd className="mt-1"><a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="break-all text-ember-50/85 underline-offset-4 hover:text-ember-200 hover:underline">{value}</a></dd></div>;
}
