import Image from "next/image";
import Link from "next/link";
import InquiryForm from "@/components/InquiryForm";
import PageHeading from "@/components/PageHeading";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/config/metadata";

const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

export const metadata = pageMetadata({
  title: "Hotelzimmer & Preise",
  description:
    "Sechs Hotelzimmer in Düsseldorf-Benrath. Informationen zu Zimmerpreisen, Frühstück, Ausstattung und barrierearmem Zugang sowie eine unverbindliche Anfrage.",
  path: "/hotel/",
});

export default function HotelPage() {
  return (
    <main id="main-content">
      <PageHeading eyebrow="Übernachten in Benrath" title="Ein ruhiger Platz für die Nacht." description="Sechs modern eingerichtete Zimmer im ersten Stock des Hotel-Restaurants Zum Neuen Rathaus." />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:py-16 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-char-900">
          <Image src="/rathaus-exterior.webp" alt="Außenansicht des Hotel-Restaurants in der Benrather Rathausstraße" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-300">Ausstattung</p>
          <h2 className="mt-4 font-display text-3xl text-ember-50">Alles Wesentliche für Ihren Aufenthalt</h2>
          <ul className="mt-6 grid gap-3 text-sm text-ember-50/75 sm:grid-cols-2">
            {siteConfig.hotel.amenities.map((amenity) => <li key={amenity} className="border-t border-white/10 pt-3">{amenity}</li>)}
          </ul>
          <p className="mt-6 text-sm leading-7 text-ember-50/65">Einzelzimmer und Doppelzimmer sind ohne Frühstück buchbar. Das Frühstück können Sie auf Wunsch zusätzlich anfragen.</p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-char-900 px-5 py-14" aria-labelledby="zimmerpreise">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-300">Preise pro Nacht</p>
          <h2 id="zimmerpreise" className="mt-4 font-display text-3xl text-ember-50">Zimmer und Extras</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <Rate title="Einzelzimmer" price={siteConfig.hotel.singleRoomCents} note="ohne Frühstück" />
            <Rate title="Doppelzimmer" price={siteConfig.hotel.doubleRoomCents} note="ohne Frühstück" />
            <Rate title="Frühstück" price={siteConfig.hotel.breakfastPerPersonCents} note="pro Person und Nacht" />
            <Rate title="Zusatzbett" price={siteConfig.hotel.extraBedPerNightCents} note="pro Nacht" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:py-20 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-300">Gut zu wissen</p>
          <h2 className="mt-4 font-display text-3xl text-ember-50">Vor der Anreise</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-ember-50/70">
            <li><strong className="text-ember-100">Parken:</strong> Es gibt keine privaten Hotelparkplätze. In der Nähe stehen öffentliche Straßenparkplätze kostenlos zur Verfügung.</li>
            <li><strong className="text-ember-100">Zugang:</strong> Die Zimmer liegen im ersten Obergeschoss. Der Zugang führt über ungefähr 40 Stufen.</li>
            <li><strong className="text-ember-100">Anfrage:</strong> Die Übernachtung gilt erst nach persönlicher Bestätigung als gebucht.</li>
          </ul>
          <a href={`tel:${siteConfig.contact.phoneHref}`} className="mt-7 inline-flex text-sm font-semibold text-ember-200 underline underline-offset-4">Fragen telefonisch klären: {siteConfig.contact.phone}</a>
        </div>
        <div>
          <h2 className="mb-6 font-display text-2xl text-ember-50">Zimmer unverbindlich anfragen</h2>
          <InquiryForm kind="hotel" />
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-5 pb-16">
        <Link href="/kontakt/" className="text-sm text-ember-200 underline underline-offset-4">Kontakt und Anfahrt</Link>
      </div>
    </main>
  );
}

function Rate({ title, price, note }: { title: string; price: number; note: string }) {
  return <article className="flex items-baseline justify-between gap-4 rounded-xl border border-white/10 px-5 py-4"><div><h3 className="font-medium text-ember-50">{title}</h3><p className="mt-1 text-sm text-ember-50/55">{note}</p></div><span className="shrink-0 font-display text-xl text-ember-200">{euro.format(price / 100)}</span></article>;
}
