import Link from "next/link";
import Menu from "@/components/sections/Menu";
import PageHeading from "@/components/PageHeading";
import menu from "@/content/menus/mittagskarte.json";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/config/metadata";

export const metadata = pageMetadata({
  title: "Mittagskarte",
  description:
    "Informationen zum wöchentlich wechselnden Mittagstisch im Restaurant Zum Neuen Rathaus in Düsseldorf-Benrath.",
  path: "/mittagskarte/",
});

export default function MittagskartePage() {
  return (
    <main id="main-content">
      <PageHeading eyebrow="Wöchentlich wechselnd" title="Mittagskarte" description="Ein frisches Angebot für die Mittagspause in Düsseldorf-Benrath." />
      <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
        <p className="mb-10 max-w-4xl border-l-2 border-ember-300 pl-5 text-sm leading-7 text-ember-50/65">{menu.note}</p>
        <Menu categories={menu.categories} emptyMessage={menu.note} />
        <a href={`tel:${siteConfig.contact.phoneHref}`} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-ember-500 px-7 font-semibold text-char-950 hover:bg-ember-400">Aktuelle Mittagskarte telefonisch erfragen</a>
        <p className="mt-5 text-sm text-ember-50/55">Geöffnet von Dienstag bis Sonntag, 11:30–15:00 Uhr. Montag ist Ruhetag.</p>
        <Link href="/speisekarte/" className="mt-10 block text-sm text-ember-200 underline underline-offset-4">Zur Speisen- und Getränkekarte</Link>
        <a href={menu.sourceUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-ember-50/55 underline underline-offset-4">Offizielle Mittagskarte als PDF</a>
      </div>
    </main>
  );
}
