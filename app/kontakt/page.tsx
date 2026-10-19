import PageHeading from "@/components/PageHeading";
import Visit from "@/components/sections/Visit";
import { pageMetadata } from "@/config/metadata";

export const metadata = pageMetadata({
  title: "Kontakt & Anfahrt",
  description:
    "Adresse, Telefonnummer, WhatsApp, E-Mail, Öffnungszeiten und Routenplanung zum Hotel-Restaurant Zum Neuen Rathaus in Düsseldorf-Benrath.",
  path: "/kontakt/",
});

export default function KontaktPage() {
  return (
    <main id="main-content">
      <PageHeading eyebrow="Wir freuen uns auf Sie" title="Kontakt & Anfahrt" description="Besuchen Sie uns in der Benrather Rathausstraße 1 in Düsseldorf-Benrath." />
      <Visit />
    </main>
  );
}
