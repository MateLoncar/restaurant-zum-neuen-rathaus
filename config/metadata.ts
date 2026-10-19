import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const pageTitle = `${title} | ${siteConfig.shortName}`;
  const image = "/rathaus-exterior.webp";

  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: new URL(path, siteConfig.url).toString(),
      title: pageTitle,
      description,
      siteName: siteConfig.shortName,
      images: [{ url: image, alt: "Hotel-Restaurant Zum Neuen Rathaus in Düsseldorf-Benrath" }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
    },
  };
}
