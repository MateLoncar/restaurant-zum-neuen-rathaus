import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/config/metadata";

export const metadata = pageMetadata({
  title: "Restaurant & Über uns",
  description:
    "Lernen Sie das Restaurant Zum Neuen Rathaus und die Familie Lončar kennen: kroatische und internationale Küche, Terrasse und Platz für bis zu 60 Gäste.",
  path: "/restaurant/",
});

export default function RestaurantPage() {
  return (
    <main id="main-content">
      <PageHeading
        eyebrow="Restaurant · Düsseldorf-Benrath"
        title="Küche mit Wurzeln. Gastfreundschaft von Herzen."
        description="Im Jugendstilhaus in der Benrather Rathausstraße treffen kroatische Spezialitäten auf internationale Gerichte und deutsche Klassiker."
      />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-300">Unsere Geschichte</p>
            <h2 className="mt-4 font-display text-3xl text-ember-50">Aus Split nach Benrath</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-ember-50/70">
            {siteConfig.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>

        <section className="mt-16 border-t border-white/10 pt-12" aria-labelledby="kueche">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-300">Unsere Küche</p>
          <h2 id="kueche" className="mt-4 font-display text-3xl text-ember-50">Für den kleinen und großen Appetit</h2>
          <div className="mt-7 grid gap-7 sm:grid-cols-3">
            <Info title="Kroatisch & international" text="Klassische Gerichte, Spezialitäten vom Grill und vertraute deutsche Küche – zubereitet mit mehr als 40 Jahren gastronomischer Erfahrung." />
            <Info title="Mittag und Saison" text="Die Küche bietet eine wöchentlich wechselnde Mittagskarte, saisonale Gerichte und ein Salatbuffet. Das aktuelle Wochenangebot erfahren Sie telefonisch." />
            <Info title="Terrasse und Feiern" text={`Bei schönem Wetter ist die sonnige Außenterrasse geöffnet. Das Restaurant bietet Platz für bis zu ${siteConfig.restaurant.capacity} Gäste. Für festliche Anlässe bietet der Betrieb einen Rahmen im Haus oder bei Ihnen zu Hause; Details werden persönlich besprochen.`} />
          </div>
          <p className="mt-8 text-sm leading-7 text-ember-50/60">Laut veröffentlichter Speisekarte sind alle Gerichte auch zum Mitnehmen erhältlich.</p>
        </section>

        <div className="mt-14 flex flex-col gap-3 sm:flex-row">
          <Link href="/speisekarte/" className="inline-flex min-h-12 items-center justify-center rounded-full bg-ember-500 px-7 font-semibold text-char-950 hover:bg-ember-400">Speisekarte ansehen</Link>
          <Link href="/reservierung/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-7 font-semibold text-ember-50 hover:bg-white/5">Tisch anfragen</Link>
        </div>
      </div>
    </main>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return <article className="border-t border-ember-300/40 pt-5"><h3 className="font-display text-xl text-ember-100">{title}</h3><p className="mt-3 text-sm leading-7 text-ember-50/65">{text}</p></article>;
}
