import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { restaurantSchema, siteConfig } from "@/config/site";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Restaurant Düsseldorf-Benrath",
    "Hotel Düsseldorf-Benrath",
    "kroatisches Restaurant Benrath",
    "Mittagstisch Benrath",
    "Hotel-Restaurant Zum Neuen Rathaus",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    images: [{ url: "/rathaus-exterior.webp", alt: "Hotel-Restaurant Zum Neuen Rathaus in Düsseldorf-Benrath" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/rathaus-exterior.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { var theme = localStorage.getItem("site-theme"); document.documentElement.dataset.theme = theme === "dark" ? "dark" : "light"; } catch (_) { document.documentElement.dataset.theme = "light"; }`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema()) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-text antialiased">
        <a href="#main-content" className="skip-link">Zum Inhalt springen</a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
