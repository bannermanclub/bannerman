import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllBlogPosts } from "@/lib/blog";

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.9, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/why-do-brands-need-a-newsletter", priority: 0.9, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.5, changeFrequency: "yearly" },
  { path: "/thank-you", priority: 0.4, changeFrequency: "monthly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })
  );

  const blogPosts = getAllBlogPosts();
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map(({ slug, frontmatter }) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified: new Date(frontmatter.date),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticEntries, ...blogEntries];
}
