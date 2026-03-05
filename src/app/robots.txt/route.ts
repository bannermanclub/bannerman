import { siteConfig } from "@/lib/site";

export async function GET() {
  const lines = [
    "# https://www.robotstxt.org/robotstxt.html",
    "User-agent: *",
    "Allow: /",
    "",
    "# LLM and AI crawlers",
    "User-agent: GPTBot",
    "Allow: /",
    "User-agent: ChatGPT-User",
    "Allow: /",
    "User-agent: Claude-Web",
    "Allow: /",
    "User-agent: anthropic-ai",
    "Allow: /",
    "User-agent: CCBot",
    "Allow: /",
    "User-agent: PerplexityBot",
    "Allow: /",
    "User-agent: Googlebot",
    "Allow: /",
    "User-agent: Meta-ExternalAgent",
    "Allow: /",
    "User-agent: FacebookBot",
    "Allow: /",
    "",
    "# LLM and AI index (llms.txt)",
    `llms.txt: ${siteConfig.url}/llms.txt`,
    "",
    "Sitemap: " + siteConfig.url + "/sitemap.xml",
    "Host: " + siteConfig.url,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
