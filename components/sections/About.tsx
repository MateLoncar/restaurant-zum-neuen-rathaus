import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember-300">Seit vielen Jahren in Benrath</p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ember-50 sm:text-5xl">Ein Haus, in dem man gern zusammenkommt.</h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-ember-50/70">
          {siteConfig.story.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <Link href="/restaurant/" className="inline-flex text-sm font-semibold text-ember-200 underline underline-offset-4 hover:text-ember-100">Unsere Geschichte entdecken</Link>
          <dl className="grid max-w-lg grid-cols-3 gap-5 border-t border-white/10 pt-6">
            <div><dt className="font-display text-2xl text-ember-200">40+</dt><dd className="mt-1 text-xs text-ember-50/50">Jahre Erfahrung</dd></div>
            <div><dt className="font-display text-2xl text-ember-200">6</dt><dd className="mt-1 text-xs text-ember-50/50">Hotelzimmer</dd></div>
            <div><dt className="font-display text-2xl text-ember-200">Benrath</dt><dd className="mt-1 text-xs text-ember-50/50">Düsseldorf</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
