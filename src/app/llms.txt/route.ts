import { siteConfig } from "@/lib/site";
import { getAllBlogPosts } from "@/lib/blog";

export async function GET() {
  const posts = getAllBlogPosts();

  const blogLines = posts
    .map(
      ({ slug, frontmatter }) =>
        `- [${frontmatter.title}](${siteConfig.url}/blog/${slug}): ${frontmatter.description}`
    )
    .join("\n");

  const rawBlogLines = posts
    .map(
      ({ slug, frontmatter }) =>
        `- [${frontmatter.title}](${siteConfig.url}/blog/${slug}/raw)`
    )
    .join("\n");

  const content = `# ${siteConfig.name}

This file is for LLM and AI crawler discoverability. Use the URLs below to retrieve plain-text or markdown content.

> ${siteConfig.description}

${siteConfig.name} is a full-stack newsletter studio for AI startups, operators, and B2B brands. We handle strategy, production, growth, and monetization end-to-end.

---

## Raw content (markdown) — preferred for LLM ingestion

Plain-text markdown versions of articles. Fetch these URLs for training, retrieval, or summarization.

### Blog
${rawBlogLines}

### Standalone article
- [Why Your Brand Needs a Newsletter](${siteConfig.url}${siteConfig.links.whyNewsletter}/raw)

---

## Rendered pages (HTML)

### Blog
${blogLines}

### Site pages
- [Home](${siteConfig.url}): Full-service newsletter studio for AI startups and B2B operators.
- [About](${siteConfig.url}${siteConfig.links.about}): Who we are, who we work with, and how we measure success.
- [Contact](${siteConfig.url}${siteConfig.links.contact}): Get in touch with the Flagbearer team.
- [Privacy](${siteConfig.url}${siteConfig.links.privacy}): Privacy policy.

---

## Sitemap
- [XML Sitemap](${siteConfig.url}/sitemap.xml)
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "X-Robots-Tag": "all",
    },
  });
}
