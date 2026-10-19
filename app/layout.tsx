import type { Metadata } from "next";
import { restaurantSchema, siteConfig } from "@/config/site";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import "./globals.css";

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
    <html lang="de" suppressHydrationWarning>
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
