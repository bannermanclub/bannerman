import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const articleTitle = "Why Your Brand Needs a Newsletter";
const articleDescription =
  "Why brands need a differentiated, insight-led newsletter to stand out in an AI-saturated content market. A case for clarity and conviction over volume.";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  alternates: {
    canonical: siteConfig.links.whyNewsletter,
  },
  openGraph: {
    type: "article",
    url: `${siteConfig.url}${siteConfig.links.whyNewsletter}`,
    title: articleTitle,
    description: articleDescription,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "We build, grow and nurture newsletters for AI startups.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: articleDescription,
    images: [siteConfig.ogImage],
  },
};

export default function WhyDoBrandsNeedANewsletterPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Your Content Isn't Bad. It's Just Hard to Feel.",
    description:
      "Why brands need a differentiated, insight-led newsletter to stand out in an AI-saturated content market.",
    author: {
      "@type": "Person",
      name: "HSM",
    },
    datePublished: "2026-02-14",
    dateModified: "2026-02-14",
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
            Newsletter? Why!
          </p>
          <h1 className="text-3xl leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Your Content Isn&apos;t Bad.
            <br />
            It&apos;s Just Hard to Feel.
          </h1>
          <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">
            A case for creating more that content people remember, trust, and act on.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-xs font-semibold text-neutral-700">
              HSM
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-800">HSM</p>
              <p className="text-xs text-neutral-500">Founder, FlagBearer · February 17, 2026</p>
            </div>
          </div>
        </header>

        <article className="space-y-10 text-[1.04rem] leading-8 text-neutral-700 sm:text-[1.08rem]">
          <div className="space-y-4">
            <p className="font-semibold text-neutral-900">Let me start with a hard truth.</p>
            <p>Your competitors are using the same tools you are.</p>
            <p>They&apos;re prompting. Publishing. Posting. Optimizing.</p>
            <p>And yes, from a distance, it looks good. Clean. Smart. Professional.</p>
            <p className="font-semibold text-neutral-900">But up close, a lot of it feels empty.</p>
            <p>It&apos;s polished language carrying recycled thinking.</p>
            <p>Tools like ChatGPT can generate endless words.</p>
            <p>What they can&apos;t generate for you is conviction.</p>
            <p>They can&apos;t care about your market the way you do.</p>
            <p>And that&apos;s the gap buyers can feel, even when they can&apos;t name it.</p>
          </div>

          <section className="space-y-4 pt-8">
            <h2 className="pt-1 text-2xl text-neutral-900 sm:text-3xl">The Real Problem</h2>
            <p>You don&apos;t have a content problem.</p>
            <p>You have a differentiation problem.</p>
            <p>Right now:</p>
            <p>Blogs blur together.</p>
            <p>LinkedIn posts recycle the same frameworks.</p>
            <p>Thought leadership often sounds like yesterday&apos;s opinion in a new template.</p>
            <p>SEO plans chase algorithms instead of building real trust.</p>
            <p>For years, the playbook was simple:</p>
            <p>Rank high. Get traffic. Convert later.</p>
            <p>But people don&apos;t buy because you ranked first.</p>
            <p>They buy because:</p>
            <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
              <li>You sound like you understand what&apos;s at stake.</li>
              <li>You speak their market language naturally.</li>
              <li>You frame their problems more clearly than they can.</li>
              <li>You show up often enough to become familiar and trusted.</li>
            </ul>
            <p>Doing that well, internally, is hard.</p>
            <p>It takes research, disagreement, editorial judgment, and time.</p>
            <p>Time most teams simply don&apos;t have.</p>
          </section>

          <section className="space-y-4 pt-8">
            <h2 className="pt-1 text-2xl text-neutral-900 sm:text-3xl">
              The Solution: A Strategic Newsletter Engine
            </h2>
            <p>So instead of trying to be everywhere, build one asset that compounds.</p>
            <p className="font-semibold text-neutral-900">A differentiated, insight-led newsletter.</p>
            <p>Not a promo blast.</p>
            <p>Not a company update thread.</p>
            <p>Not a stitched-together recap of existing blogs.</p>
            <p>A publication with a clear point of view that helps people think better.</p>
            <p>That kind of newsletter can:</p>
            <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
              <li>Reconnect with cold leads</li>
              <li>Educate buyers through long sales cycles</li>
              <li>Position your leadership as thoughtful and credible</li>
              <li>Give your audience a reason to keep coming back</li>
            </ul>
            <p>Especially in B2B, this is everything.</p>
            <p>Most buyers are not ready right now.</p>
            <p>But they are watching.</p>
            <p>Your newsletter becomes the bridge between &ldquo;not today&rdquo; and &ldquo;let&apos;s talk.&rdquo;</p>
            <div className="rounded-xl border-l-4 border-orange-300 bg-orange-50/70 px-4 py-3 text-neutral-800">
              Especially in B2B, staying present matters more than being loud.
            </div>
          </section>

          <section className="space-y-4 pt-8">
            <h2 className="pt-1 text-2xl text-neutral-900 sm:text-3xl">
              And Here&apos;s Where It Gets Powerful
            </h2>
            <p>A strong newsletter isn&apos;t just an email send.</p>
            <p>It becomes your content system.</p>
            <p>From one strong edition, you can:</p>
            <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
              <li>Pull out 5-7 LinkedIn posts</li>
              <li>Turn key ideas into short-form insights</li>
              <li>Give your sales team better talking points</li>
              <li>Fuel webinars and roundtables with substance</li>
              <li>Build authority across every channel you care about</li>
            </ul>
            <p>So instead of asking every week, &ldquo;What should we post now?&rdquo;</p>
            <p>You operate from one reliable source of strategic truth.</p>
          </section>

          <section className="space-y-4 pt-8">
            <h2 className="pt-1 text-2xl text-neutral-900 sm:text-3xl">Why This Is Cost-Effective</h2>
            <p>Building this internally usually means:</p>
            <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
              <li>Strategy headcount</li>
              <li>Editorial management</li>
              <li>Research bandwidth</li>
              <li>Ongoing operational oversight</li>
            </ul>
            <p>What we bring is different:</p>
            <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
              <li>Senior-level thinking without senior-level payroll</li>
              <li>Market research without draining your team</li>
              <li>Consistent execution without operational drag</li>
            </ul>
            <p>You don&apos;t need more content.</p>
            <p>You need content that sounds lived-in, not generated.</p>
            <p>You need content that makes competitors feel reactive.</p>
            <p>You need content that builds familiarity before the sales call ever starts.</p>
          </section>

          <section className="space-y-4 pt-8">
            <h2 className="pt-1 text-2xl text-neutral-900 sm:text-3xl">The Key Takeaway</h2>
            <p>In a world flooded with AI-generated noise, clarity and conviction win.</p>
            <p>The companies that grow won&apos;t be the ones publishing the most.</p>
            <p>They&apos;ll be the ones people genuinely want to hear from.</p>
            <p className="font-semibold text-neutral-900">
              If you want your content to become an asset, not an obligation, we should talk.
            </p>
          </section>
        </article>
      </section>
    </div>
  );
}
