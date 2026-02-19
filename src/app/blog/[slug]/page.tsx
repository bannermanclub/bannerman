import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getAllBlogPosts, getBlogPost } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let article;
  try {
    article = getBlogPost(slug);
  } catch {
    return {};
  }

  const { frontmatter } = article;
  const url = `${siteConfig.url}/blog/${slug}`;
  const ogTitle = `${frontmatter.title} | ${siteConfig.name}`;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      url,
      title: ogTitle,
      description: frontmatter.description,
      siteName: siteConfig.name,
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: frontmatter.description,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let article;
  try {
    article = getBlogPost(slug);
  } catch {
    notFound();
  }

  const { frontmatter, html } = article;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
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
    mainEntityOfPage: `${siteConfig.url}/blog/${slug}`,
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
      </div>

      <section className="relative mx-auto w-full max-w-3xl px-5 py-10 sm:px-7 sm:py-12 md:px-10 md:py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-primary mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          All posts
        </Link>

        <header className="mb-8 border-b border-neutral-200 pb-6">
          {frontmatter.category && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
              {frontmatter.category}
            </p>
          )}
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
              {frontmatter.author.slice(0, 3).toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-800">
                {frontmatter.author}
              </p>
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

        <footer className="mt-12 pt-8 border-t border-neutral-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Link>
        </footer>
      </section>
    </div>
  );
}
