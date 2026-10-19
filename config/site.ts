export const siteConfig = {
  name: "Hotel-Restaurant Zum Neuen Rathaus",
  shortName: "Zum Neuen Rathaus",
  title: "Hotel-Restaurant Zum Neuen Rathaus | Düsseldorf-Benrath",
  description:
    "Kroatische und internationale Küche, herzliche Gastfreundschaft und sechs Hotelzimmer im Herzen von Düsseldorf-Benrath.",
  url: "https://www.hotel-zum-neuen-rathaus.de",
  cuisine: ["Kroatisch", "Deutsch", "International"],
  contact: {
    phone: "0211 71 66 66",
    phoneHref: "+49211716666",
    fax: "-",
    email: "hotelzumneuenrathaus@gmail.com",
    whatsapp: "https://wa.me/4915753271885",
    address: {
      street: "Benrather Rathausstraße 1",
      city: "Düsseldorf",
      region: "Nordrhein-Westfalen",
      postalCode: "40597",
      country: "DE",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Benrather+Rathausstr.+1%2C+40597+D%C3%BCsseldorf",
  },
  hours: [
    { day: "Montag", dayOfWeek: "Monday", closed: true },
    { day: "Dienstag", dayOfWeek: "Tuesday", closed: false },
    { day: "Mittwoch", dayOfWeek: "Wednesday", closed: false },
    { day: "Donnerstag", dayOfWeek: "Thursday", closed: false },
    { day: "Freitag", dayOfWeek: "Friday", closed: false },
    { day: "Samstag", dayOfWeek: "Saturday", closed: false },
    { day: "Sonntag", dayOfWeek: "Sunday", closed: false },
  ],
  restaurantHours: ["11:30–15:00 Uhr", "17:30–22:00 Uhr"],
  restaurant: {
    capacity: 60,
    terrace: true,
  },
  hotel: {
    rooms: 6,
    singleRoomCents: 6400,
    doubleRoomCents: 8800,
    breakfastPerPersonCents: 1500,
    extraBedPerNightCents: 3000,
    amenities: ["Kostenfreies WLAN", "Dusche", "WC", "Flachbild-TV"],
  },
  story: [
    "Unsere Geschichte beginnt in Split, der kroatischen Küstenstadt an der Adria. Von dort stammt die Leidenschaft für Gastfreundschaft und gutes Essen, die die Familie Lončar heute in Benrath weiterlebt.",
    "Küchenmeister und Gastgeber Teo Lončar bringt mehr als 40 Jahre Erfahrung in der Gastronomie mit. Seine Küche verbindet kroatische und mediterrane Einflüsse mit deutschen Klassikern – mit Sorgfalt und persönlicher Gastfreundschaft.",
    "Ob zum Mittagessen, zum Abendessen mit der Familie oder für eine private Feier: Wir freuen uns, Sie bei uns willkommen zu heißen.",
  ],
} as const;

export function restaurantSchema() {
  const { contact } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: contact.phoneHref,
    email: contact.email,
    image: `${siteConfig.url}/rathaus-exterior.webp`,
    servesCuisine: siteConfig.cuisine,
    priceRange: "€€",
    acceptsReservations: true,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      addressRegion: contact.address.region,
      postalCode: contact.address.postalCode,
      addressCountry: contact.address.country,
    },
    openingHoursSpecification: siteConfig.hours.flatMap((entry) =>
      entry.closed
        ? []
        : siteConfig.restaurantHours.map((hours) => {
            const [opens, closes] = hours.replace(" Uhr", "").split("–");
            return {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: `https://schema.org/${entry.dayOfWeek}`,
              opens,
              closes,
            };
          }),
    ),
    hasMenu: `${siteConfig.url}/speisekarte/`,
  };
}
