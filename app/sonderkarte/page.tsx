import Menu from "@/components/sections/Menu";
import PageHeading from "@/components/PageHeading";
import menu from "@/content/menus/sonderkarte.json";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/config/metadata";

export const metadata = pageMetadata({
  title: "Sonderkarte & saisonale Angebote",
  description:
    "Informationen zu saisonalen Gerichten und wechselnden Sonderangeboten im Restaurant Zum Neuen Rathaus.",
  path: "/sonderkarte/",
});

export default function SonderkartePage() {
  return (
    <main id="main-content">
      <PageHeading eyebrow="Nach Saison" title="Sonderkarte" description="Saisonale Gerichte ergänzen die Speisekarte, wenn sie gerade angeboten werden." />
      <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
        <p className="mb-10 max-w-4xl border-l-2 border-ember-300 pl-5 text-sm leading-7 text-ember-50/65">{menu.note}</p>
        <Menu categories={menu.categories} emptyMessage={menu.note} />
        <a href={`tel:${siteConfig.contact.phoneHref}`} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-ember-300/50 px-7 font-semibold text-ember-100 hover:bg-white/5">Saisonales Angebot telefonisch erfragen</a>
        <a href={menu.sourceUrl} target="_blank" rel="noreferrer" className="ml-5 inline-block text-sm text-ember-50/55 underline underline-offset-4">Offizielle Sonderkarte als PDF</a>
      </div>
    </main>
  );
}
