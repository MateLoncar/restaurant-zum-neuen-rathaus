import PageHeading from "@/components/PageHeading";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/config/metadata";

export const metadata = pageMetadata({
  title: "Impressum",
  description: "Impressum und Kontaktangaben des Hotel-Restaurants Zum Neuen Rathaus in Düsseldorf-Benrath.",
  path: "/impressum/",
});

export default function ImpressumPage() {
  const { contact } = siteConfig;
  return (
    <main id="main-content">
      <PageHeading eyebrow="Rechtliches" title="Impressum" description="Angaben zum Hotel-Restaurant Zum Neuen Rathaus." />
      <article className="prose-invert mx-auto max-w-3xl px-5 py-12 text-sm leading-7 text-ember-50/75 sm:py-16">
        <h2 className="font-display text-2xl text-ember-100">Zum Neuen Rathaus – Hotel-Restaurant</h2>
        <p className="mt-4">Inhaber: Teo Loncar</p>
        <address className="mt-4 not-italic">{contact.address.street}<br />{contact.address.postalCode} {contact.address.city}</address>
        <h2 className="mt-10 font-display text-2xl text-ember-100">Kontakt</h2>
        <p className="mt-4">Telefon: <a className="underline underline-offset-4" href={`tel:${contact.phoneHref}`}>{contact.phone}</a><br />WhatsApp: <a className="underline underline-offset-4" href={contact.whatsapp}>+49 1575 3271885</a><br />Fax: {contact.fax}<br />E-Mail: <a className="underline underline-offset-4" href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <h2 className="mt-10 font-display text-2xl text-ember-100">Urheberrecht</h2>
        <p className="mt-4">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors oder Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
        <p className="mt-4">Soweit Inhalte dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet und entsprechende Inhalte als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir die betreffenden Inhalte prüfen und gegebenenfalls entfernen.</p>
      </article>
    </main>
  );
}
