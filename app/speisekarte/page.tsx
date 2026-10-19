import Link from "next/link";
import Menu from "@/components/sections/Menu";
import PageHeading from "@/components/PageHeading";
import menu from "@/content/menus/speisekarte.json";
import { pageMetadata } from "@/config/metadata";

export const metadata = pageMetadata({
  title: "Speisekarte & Getränke",
  description:
    "Alle Gerichte und Getränke der Speisekarte im Hotel-Restaurant Zum Neuen Rathaus in Düsseldorf-Benrath, übersichtlich als HTML.",
  path: "/speisekarte/",
});

export default function SpeisekartePage() {
  return (
    <main id="main-content">
      <PageHeading eyebrow="Aus unserer Küche" title="Speisen & Getränke" description="Unsere Gerichte, Getränke und Preise – gut lesbar auf dem Smartphone und in Kategorien geordnet." />
      <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
        <p className="mb-10 max-w-4xl border-l-2 border-ember-300 pl-5 text-sm leading-7 text-ember-50/65">{menu.note}</p>
        <Menu categories={menu.categories} emptyMessage="Zurzeit sind keine Einträge veröffentlicht." />
        <section className="mt-12 border-t border-border pt-8" aria-labelledby="zusatzstoffe">
          <h2 id="zusatzstoffe" className="font-display text-xl text-ember-100">Zusatzstoffe und Allergene</h2>
          <ul className="mt-4 grid gap-x-8 gap-y-2 text-sm leading-6 text-ember-50/55 sm:grid-cols-2">
            {menu.additives.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-ember-50/55">{menu.allergenNote}</p>
        </section>
        <div className="mt-12 flex flex-wrap gap-5 border-t border-border pt-7 text-sm">
          <Link href="/mittagskarte/" className="text-ember-200 underline underline-offset-4">Zur Mittagskarte</Link>
          <Link href="/sonderkarte/" className="text-ember-200 underline underline-offset-4">Zur Sonderkarte</Link>
          <a href={menu.sourceUrl} target="_blank" rel="noreferrer" className="text-ember-50/65 underline underline-offset-4">Offizielles PDF (Stand März 2026)</a>
        </div>
      </div>
    </main>
  );
}
