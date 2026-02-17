import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/contact",
  "/privacy",
  "/thank-you",
  "/why-do-brands-need-a-newsletter",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/why-do-brands-need-a-newsletter"
          ? 0.9
          : route === "/about" || route === "/contact"
            ? 0.8
            : 0.6,
  }));
}
