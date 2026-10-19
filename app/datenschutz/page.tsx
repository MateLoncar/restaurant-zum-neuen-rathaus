import PageHeading from "@/components/PageHeading";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/config/metadata";

export const metadata = pageMetadata({
  title: "Datenschutzhinweise",
  description: "Informationen zur Verarbeitung personenbezogener Daten auf der Website des Hotel-Restaurants Zum Neuen Rathaus.",
  path: "/datenschutz/",
});

export default function DatenschutzPage() {
  const { contact } = siteConfig;
  return (
    <main id="main-content">
      <PageHeading eyebrow="Rechtliches" title="Datenschutzhinweise" description="Informationen darüber, welche Daten diese Website verarbeitet und wie Sie Ihre Rechte wahrnehmen können." />
      <article className="mx-auto max-w-3xl px-5 py-12 text-sm leading-7 text-ember-50/75 sm:py-16">
        <p>Wir behandeln personenbezogene Daten vertraulich und entsprechend den geltenden Datenschutzvorschriften. Diese Hinweise beschreiben die Funktionen, die auf dieser Website derzeit eingerichtet sind.</p>

        <h2 className="mt-10 font-display text-2xl text-ember-100">Verantwortlicher</h2>
        <address className="mt-4 not-italic">Teo Loncar<br />Hotel-Restaurant Zum Neuen Rathaus<br />{contact.address.street}<br />{contact.address.postalCode} {contact.address.city}<br />Telefon: <a href={`tel:${contact.phoneHref}`} className="underline underline-offset-4">{contact.phone}</a><br />E-Mail: <a href={`mailto:${contact.email}`} className="underline underline-offset-4">{contact.email}</a></address>

        <h2 className="mt-10 font-display text-2xl text-ember-100">Aufruf der Website</h2>
        <p className="mt-4">Beim Aufruf der Website verarbeitet der Hosting-Dienst technisch erforderliche Verbindungsdaten, damit die Seiten an Ihren Browser ausgeliefert werden können. Dazu können insbesondere IP-Adresse, Zeitpunkt der Anfrage, angeforderte Adresse sowie Browser- und Gerätedaten gehören. Der konkrete Hosting-Anbieter und seine Speicherfristen hängen vom später gewählten Hosting-Vertrag ab und müssen vor der Veröffentlichung in diesen Abschnitt eingetragen werden.</p>

        <h2 className="mt-10 font-display text-2xl text-ember-100">Anfragen über die Formulare</h2>
        <p className="mt-4">Wenn Sie eine Tisch- oder Zimmeranfrage senden, verarbeiten wir die von Ihnen eingegebenen Kontaktdaten und Angaben zur Anfrage, um Ihnen zu antworten und Verfügbarkeit beziehungsweise Reservierung persönlich zu klären. Die Angaben werden über den E-Mail-Versanddienst Resend an das Hotel-Restaurant übermittelt und dort als E-Mail empfangen. Die Website speichert keine Formularanfragen in einer Datenbank. Die Nachricht bleibt anschließend im E-Mail-System des Empfängers entsprechend den dort geltenden Aufbewahrungs- und Löschabläufen gespeichert.</p>
        <p className="mt-4">Für den E-Mail-Versand wird die Resend-API verwendet. Informationen zur Datenverarbeitung durch den Dienst finden Sie in der <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noreferrer" className="underline underline-offset-4">Datenschutzerklärung von Resend</a>. Ohne eingerichtete Zugangsdaten werden Formulareingaben nicht per E-Mail versendet.</p>
        <p className="mt-4">Die Daten werden nur zur Bearbeitung Ihrer konkreten Anfrage verwendet. Bitte übermitteln Sie keine besonderen Kategorien personenbezogener Daten oder vertraulichen Zahlungsdaten über die Formulare.</p>

        <h2 className="mt-10 font-display text-2xl text-ember-100">Externe Links</h2>
        <p className="mt-4">Diese Website lädt keine Google-Karte, Social-Media-Plugins, Analysewerkzeuge oder externen Schriftarten automatisch. Wenn Sie einen Link zu Google Maps oder WhatsApp anklicken, verlassen Sie diese Website; ab diesem Zeitpunkt gelten die Datenschutzhinweise des jeweiligen Anbieters.</p>

        <h2 className="mt-10 font-display text-2xl text-ember-100">Ihre Rechte</h2>
        <p className="mt-4">Sie können im Rahmen der gesetzlichen Voraussetzungen Auskunft über Ihre Daten sowie Berichtigung, Löschung oder Einschränkung der Verarbeitung verlangen und einer Verarbeitung widersprechen. Eine erteilte Einwilligung können Sie mit Wirkung für die Zukunft widerrufen. Außerdem können Sie sich bei einer Datenschutzaufsichtsbehörde beschweren. Für Nordrhein-Westfalen ist die <a href="https://www.ldi.nrw.de/" target="_blank" rel="noreferrer" className="underline underline-offset-4">Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen</a> zuständig.</p>
        <p className="mt-4">Für Anliegen zum Datenschutz erreichen Sie uns unter <a href={`mailto:${contact.email}`} className="underline underline-offset-4">{contact.email}</a>.</p>

        <aside className="mt-12 rounded-xl border border-ember-300/25 bg-white/[0.025] p-5 text-xs leading-6 text-ember-50/60">
          Vor Veröffentlichung müssen hier noch der konkrete Hosting-Anbieter, dessen Kontaktdaten und die zutreffenden Angaben zu Speicherfristen ergänzt werden. Die Datenschutzhinweise sollten außerdem anhand der tatsächlich gewählten Hosting- und E-Mail-Verträge geprüft werden.
        </aside>
      </article>
    </main>
  );
}
