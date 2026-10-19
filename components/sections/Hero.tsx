import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[650px] overflow-hidden bg-char-900 sm:min-h-[740px]">
      <Image
        src="/rathaus-exterior.webp"
        alt="Das Hotel-Restaurant Zum Neuen Rathaus in Düsseldorf-Benrath"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center]"
      />
      <div className="hero-shade absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[650px] max-w-7xl flex-col justify-end px-5 pb-12 pt-20 sm:min-h-[740px] sm:pb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember-200">
          Düsseldorf-Benrath · Familie Lončar
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-ember-50 sm:text-6xl lg:text-7xl">
          Gastfreundschaft mit Geschichte. Küche mit Charakter.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-ember-50/80 sm:text-lg">
          Kroatische und internationale Gerichte, ein sonniger Platz auf der Terrasse und sechs Hotelzimmer im Herzen von Benrath.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/reservierung/" className="inline-flex min-h-12 items-center justify-center rounded-full bg-ember-500 px-7 font-semibold text-char-950 transition-colors hover:bg-ember-400">
            Tisch anfragen
          </Link>
          <Link href="/speisekarte/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-7 font-semibold text-ember-50 transition-colors hover:bg-white/10">
            Speisekarte ansehen
          </Link>
        </div>
        <div className="mt-12 grid gap-6 border-t border-white/25 pt-6 text-sm text-ember-50/85 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-ember-200">Adresse</p>
            <p className="mt-2">{siteConfig.contact.address.street}<br />40597 Düsseldorf</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-ember-200">Öffnungszeiten</p>
            <p className="mt-2">Dienstag bis Sonntag<br />11:30–15:00 · 17:30–24:00 Uhr</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-ember-200">Reservierung</p>
            <a className="mt-2 inline-block hover:text-ember-200" href={`tel:${siteConfig.contact.phoneHref}`}>{siteConfig.contact.phone}</a>
            <span className="px-2 text-ember-50/40">·</span>
            <a className="hover:text-ember-200" href={siteConfig.contact.whatsapp}>WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
