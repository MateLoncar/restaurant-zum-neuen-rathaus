import InquiryForm from "@/components/InquiryForm";
import { siteConfig } from "@/config/site";

export default function Reservations() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-12 sm:py-16 lg:grid-cols-[0.7fr_1.3fr]">
      <div>
        <h2 className="font-display text-2xl text-ember-50">Lieber direkt sprechen?</h2>
        <p className="mt-4 text-sm leading-7 text-ember-50/65">
          Für kurzfristige Reservierungen, Gruppen oder Feiern erreichen Sie uns am besten telefonisch. Das Restaurant bietet Platz für bis zu {siteConfig.restaurant.capacity} Gäste.
        </p>
        <a href={`tel:${siteConfig.contact.phoneHref}`} className="mt-6 inline-flex text-xl font-medium text-ember-200 underline underline-offset-4">{siteConfig.contact.phone}</a>
        <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer" className="mt-3 block text-sm text-ember-50/70 underline underline-offset-4">Oder per WhatsApp schreiben</a>
        <p className="mt-8 text-sm leading-7 text-ember-50/55">Geöffnet Dienstag bis Sonntag von 11:30 bis 15:00 Uhr und von 17:30 bis 24:00 Uhr. Montag ist Ruhetag.</p>
      </div>
      <div>
        <InquiryForm kind="reservation" />
      </div>
    </section>
  );
}
