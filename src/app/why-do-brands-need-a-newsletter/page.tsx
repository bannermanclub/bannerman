import { siteConfig } from "@/lib/site";
import { getArticle } from "@/lib/markdown";
import { createPageMetadata } from "@/lib/metadata";
import { ReadyToTalkCta } from "@/components/ui/ReadyToTalkCta";

export const metadata = createPageMetadata({
  title: "Why Your Brand Needs a Newsletter",
  description:
    "Why brands need a differentiated, insight-led newsletter to stand out in an AI-saturated content market. A case for clarity and conviction over volume.",
  path: siteConfig.links.whyNewsletter,
  type: "article",
});

export default function WhyDoBrandsNeedANewsletterPage() {
  const { frontmatter, html } = getArticle("why-do-brands-need-a-newsletter");

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    author: {
      "@type": "Person",
      name: frontmatter.author,
    },
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
      },
    },
    mainEntityOfPage: `${siteConfig.url}${siteConfig.links.whyNewsletter}`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-orange-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-amber-200/60 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute left-1/4 bottom-10 h-56 w-56 rounded-full bg-amber-100/60 blur-3xl" />
      </div>

      <section className="relative mx-auto w-full max-w-3xl px-5 py-10 sm:px-7 sm:py-12 md:px-10 md:py-16">
        <header className="mb-8 border-b border-neutral-200 pb-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
            {frontmatter.category ?? "Newsletter? Why!"}
          </p>
          <h1 className="text-3xl leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
            {frontmatter.title}
          </h1>
          {frontmatter.subtitle && (
            <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">
              {frontmatter.subtitle}
            </p>
          )}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-xs font-semibold text-neutral-700">
              {frontmatter.author}
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-800">{frontmatter.author}</p>
              <p className="text-xs text-neutral-500">
                {frontmatter.authorRole ?? `Founder, ${siteConfig.name}`}
                {" · "}
                {new Date(frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </header>

        <article
          className="article-body text-[1.04rem] leading-8 text-neutral-700 sm:text-[1.08rem]"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <ReadyToTalkCta />
      </section>
    </div>
  );
}
