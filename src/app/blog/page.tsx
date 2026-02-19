import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Insights on newsletter strategy, growth, monetization, and the future of B2B content from the Flagbearer team.",
  path: siteConfig.links.blog,
  ogTitle: "Blog | Flagbearer",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="container-custom py-16 md:py-24">
      <section className="max-w-3xl mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600 mb-3">
          Flagbearer Blog
        </p>
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">
          Insights on newsletters, growth, and B2B content.
        </h1>
        <p className="text-lg text-neutral-600">
          Strategy, tactics, and perspective from a team that builds and operates
          newsletters full-time.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        {posts.map(({ slug, frontmatter }) => (
          <article
            key={slug}
            className="group flex flex-col bg-white rounded-2xl border border-neutral-200 p-6 hover:border-orange-200 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
              {frontmatter.category && (
                <>
                  <span className="font-medium text-orange-600 uppercase tracking-wide">
                    {frontmatter.category}
                  </span>
                  <span aria-hidden>·</span>
                </>
              )}
              <time dateTime={frontmatter.date}>
                {new Date(frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            <h2 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-orange-700 transition-colors">
              <Link href={`/blog/${slug}`} className="stretched-link">
                {frontmatter.title}
              </Link>
            </h2>

            <p className="text-sm text-neutral-600 mb-6 flex-1">
              {frontmatter.description}
            </p>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-neutral-500">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-[10px] font-semibold text-neutral-600">
                  {frontmatter.author.slice(0, 3).toUpperCase()}
                </div>
                <span>{frontmatter.author}</span>
              </div>

              <Link
                href={`/blog/${slug}`}
                className="ml-auto inline-flex items-center gap-1 font-medium text-orange-600 hover:text-orange-700"
                aria-label={`Read ${frontmatter.title}`}
              >
                Read
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-neutral-500 text-center py-16">No posts yet. Check back soon.</p>
      )}
    </div>
  );
}
