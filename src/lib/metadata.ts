import type { Metadata } from "next";
import { siteConfig } from "./site";

const OG_IMAGE = {
  url: siteConfig.ogImage,
  width: 1200 as const,
  height: 630 as const,
};

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  ogTitle,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  ogTitle?: string;
}): Metadata {
  const resolvedOgTitle = ogTitle ?? `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: `${siteConfig.url}${path}`,
      title: resolvedOgTitle,
      description,
      siteName: siteConfig.name,
      images: [{ ...OG_IMAGE, alt: resolvedOgTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedOgTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
