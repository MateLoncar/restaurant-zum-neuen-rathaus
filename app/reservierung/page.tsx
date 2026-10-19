import PageHeading from "@/components/PageHeading";
import Reservations from "@/components/sections/Reservations";
import { pageMetadata } from "@/config/metadata";

export const metadata = pageMetadata({
  title: "Tischreservierung",
  description:
    "Fragen Sie einen Tisch im Restaurant Zum Neuen Rathaus in Düsseldorf-Benrath an. Wir melden uns persönlich zur Bestätigung.",
  path: "/reservierung/",
});

export default function ReservierungPage() {
  return (
    <main id="main-content">
      <PageHeading eyebrow="Restaurant · Benrath" title="Ein Tisch für Ihren Besuch." description="Senden Sie uns Datum, Uhrzeit und Gästezahl. Wir melden uns persönlich, um Ihre Anfrage zu bestätigen." />
      <Reservations />
    </main>
  );
}
