import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[720px] flex-col justify-end overflow-hidden px-5 pb-10 pt-24 text-[#F8F4E9] sm:min-h-[740px] sm:px-8 sm:pb-14 lg:px-10">
      <Image
        src="/rathaus-exterior.webp"
        alt="Das Hotel-Restaurant Zum Neuen Rathaus in Düsseldorf-Benrath"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[58%_center]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(24,26,32,0.94)_0%,rgba(24,26,32,0.76)_43%,rgba(24,26,32,0.2)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(24,26,32,0.72)_0%,transparent_45%)]" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E4C77E]">
            Düsseldorf-Benrath <span className="px-2">·</span> Familie Lončar
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Gastfreundschaft mit Geschichte. Küche mit Charakter.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#F0EEE8] sm:text-lg sm:leading-8">
            Kroatische und internationale Küche, ein sonniger Platz auf der Terrasse und sechs Hotelzimmer im Herzen von Benrath.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/reservierung/" className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-7 font-semibold text-char-950 transition-colors hover:bg-accent-light">
              Tisch anfragen
            </Link>
            <Link href="/speisekarte/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/55 px-7 font-semibold text-white transition-colors hover:border-white hover:bg-white/10">
              Speisekarte ansehen
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-5 border-t border-white/35 pt-6 text-sm sm:grid-cols-3 sm:gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E4C77E]">Adresse</p>
            <p className="mt-2 leading-5 text-white">{siteConfig.contact.address.street}<br />40597 Düsseldorf</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E4C77E]">Öffnungszeiten</p>
            <p className="mt-2 leading-5 text-white">Dienstag bis Sonntag<br />11:30–15:00 · 17:30–24:00 Uhr</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E4C77E]">Reservierung</p>
            <p className="mt-2 leading-5">
              <a className="text-white underline decoration-white/50 underline-offset-4 hover:decoration-white" href={`tel:${siteConfig.contact.phoneHref}`}>{siteConfig.contact.phone}</a>
              <span className="px-2 text-white/60">·</span>
              <a className="text-white underline decoration-white/50 underline-offset-4 hover:decoration-white" href={siteConfig.contact.whatsapp}>WhatsApp</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
