import Link from "next/link";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/config/metadata";

export const metadata = pageMetadata({
  title: "Restaurant & Hotel in Düsseldorf-Benrath",
  description:
    "Willkommen im Hotel-Restaurant Zum Neuen Rathaus: kroatische und internationale Küche, sonnige Terrasse und sechs Hotelzimmer im Herzen von Benrath.",
  path: "/",
});

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />

      <section className="border-y border-border bg-char-900 px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-300">Restaurant und Hotel</p>
            <h2 className="mt-4 font-display text-3xl font-medium text-ember-50 sm:text-4xl">Was darf es heute sein?</h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard title="Restaurant" body="Kroatische Spezialitäten und internationale Gerichte, frisch zubereitet." href="/restaurant/" link="Das Restaurant" />
            <FeatureCard title="Speisekarte" body="Alle Gerichte und Getränke aus der zuletzt veröffentlichten Karte." href="/speisekarte/" link="Zur Speisekarte" />
            <FeatureCard title="Mittag & Saison" body="Wöchentlich wechselnde Mittagsgerichte und saisonale Angebote." href="/mittagskarte/" link="Aktuelle Karte erfragen" />
            <FeatureCard title="Hotel" body="Sechs Zimmer mit WLAN, Dusche, WC, Minibar und Flachbild-TV." href="/hotel/" link="Zimmer ansehen" />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-300">Gemeinsam feiern</p>
            <h2 className="mt-4 font-display text-3xl font-medium text-ember-50 sm:text-4xl">Platz für bis zu {siteConfig.restaurant.capacity} Gäste.</h2>
            <p className="mt-5 max-w-xl leading-7 text-ember-50/70">Für ein Essen mit der Familie, einen Abend mit Freunden oder eine private Feier bietet unser Restaurant den passenden Rahmen. Bei schönem Wetter lädt die sonnige Außenterrasse zum Verweilen ein.</p>
            <p className="mt-4 max-w-xl leading-7 text-ember-50/70">Für festliche Anlässe sind nach persönlicher Absprache Lösungen im Haus oder bei Ihnen zu Hause möglich.</p>
            <a href={`tel:${siteConfig.contact.phoneHref}`} className="mt-6 inline-flex rounded-full border border-ember-300/60 px-6 py-3 text-sm font-semibold text-ember-100 hover:bg-accent-light/20">Feier telefonisch besprechen</a>
          </div>
          <div className="border-l border-ember-300/40 pl-7 sm:pl-10">
            <p className="font-display text-2xl leading-relaxed text-ember-100">{siteConfig.story[2]}</p>
            <p className="mt-5 text-sm text-ember-50/55">Ihre Familie Lončar</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title, body, href, link }: { title: string; body: string; href: string; link: string }) {
  return (
    <article className="flex min-h-56 flex-col rounded-sm border border-border p-6">
      <h3 className="font-display text-xl text-ember-100">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-ember-50/65">{body}</p>
      <Link href={href} className="mt-auto pt-6 text-sm font-semibold text-ember-200 hover:text-ember-100">{link} <span aria-hidden="true">→</span></Link>
    </article>
  );
}
