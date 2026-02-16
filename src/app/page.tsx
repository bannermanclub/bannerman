import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { LeadFormModal } from "@/components/ui/LeadFormModal";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Layers3,
  LayoutTemplate,
  MailOpen,
  MessageSquareQuote,
  PiggyBank,
  Rocket,
  TimerReset,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-200 via-amber-100 to-orange-200 py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-soft-light">
          <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-amber-400 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-500 blur-3xl" />
        </div>

        <div className="container-custom relative z-10 grid gap-12 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-center">
          <div>
            <p className="badge-soft mb-4" style={{ color: "var(--color-primary, #ea580c)", fontWeight: "800" }}>
              Newsletter Studio for AI startups &amp; operators
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              We build, grow &amp; monetize {" "}
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                your newsletter.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-700 max-w-2xl mb-8">
              Strategy, production, growth, and monetization under one roof. You
              focus on building the business — we turn your newsletter into a
              compounding audience and revenue asset.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <LeadFormModal>
                <Button size="lg" className="w-full sm:w-auto">
                  Book a discovery call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </LeadFormModal>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center text-neutral-800 font-medium"
              >
                See how it works
              </a>
            </div>
            <p className="mt-6 text-sm text-neutral-600">
              Ideal for AI startups, B2B SaaS, tools, and operators serious about
              owning their audience.
            </p>
          </div>

          <div className="hidden md:block">
            <div className="relative rounded-2xl border border-orange-200 bg-white/80 p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                  This Week in AI Performance
                </span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  +10% MoM
                </span>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Subscribers</span>
                  <span className="font-medium text-neutral-900">30,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Followers</span>
                  <span className="font-medium text-neutral-900">45,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Open rate</span>
                  <span className="font-medium text-neutral-900">35%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Click rate</span>
                  <span className="font-medium text-neutral-900">3.6%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Overview */}
      <section className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600 mb-3">
              Why a newsletter is needed
            </p>
            <h2 className="text-3xl font-bold text-neutral-900 mb-3">
              One differentiated channel beats scattered content.
            </h2>
            <p className="text-neutral-600 max-w-2xl">
              In an AI-saturated market, a strategic newsletter gives you a clear
              point of view, ongoing trust with buyers, and reusable content
              infrastructure that compounds over time.
            </p>
          </div>
          <Link
            href="/why-do-brands-need-a-newsletter"
            className="inline-flex items-center text-sm font-medium text-neutral-800 hover:text-orange-700"
          >
            Read the full breakdown
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-6 auto-rows-[minmax(130px,auto)]">
          <article className="md:col-span-4 rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 via-amber-50 to-white p-6">
            <BrainCircuit className="h-6 w-6 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              AI can generate content, not conviction.
            </h3>
            <p className="text-sm text-neutral-700 max-w-2xl">
              When everyone is using the same tools, sameness becomes the default.
              A newsletter creates a consistent place for your real point of view
              to stand out.
            </p>
          </article>

          <article className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-6">
            <MessageSquareQuote className="h-6 w-6 text-orange-600 mb-4" />
            <h3 className="text-base font-semibold text-neutral-900 mb-2">
              Trust drives B2B decisions
            </h3>
            <p className="text-sm text-neutral-600">
              Buyers choose voices that explain their market clearly, not brands
              that publish the most.
            </p>
          </article>

          <article className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-6">
            <TimerReset className="h-6 w-6 text-orange-600 mb-4" />
            <h3 className="text-base font-semibold text-neutral-900 mb-2">
              Bridge long sales cycles
            </h3>
            <p className="text-sm text-neutral-600">
              Most prospects are &ldquo;not now.&rdquo; Newsletters keep you relevant
              until they&apos;re ready to act.
            </p>
          </article>

          <article className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-6">
            <Layers3 className="h-6 w-6 text-orange-600 mb-4" />
            <h3 className="text-base font-semibold text-neutral-900 mb-2">
              Build content infrastructure
            </h3>
            <p className="text-sm text-neutral-600">
              One strong edition can fuel social posts, sales talking points, and
              webinar angles.
            </p>
          </article>

          <article className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-6">
            <PiggyBank className="h-6 w-6 text-orange-600 mb-4" />
            <h3 className="text-base font-semibold text-neutral-900 mb-2">
              More leverage, less overhead
            </h3>
            <p className="text-sm text-neutral-600">
              You get senior strategy and reliable execution without building a
              full internal editorial team.
            </p>
          </article>
        </div>
      </section>

            {/* 2. Problem & Value */}
            <section className="container-custom" id="how-it-works">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              But, most AI newsletters stall after launch.
            </h2>
            <p className="text-lg text-neutral-600 mb-4">
              Founders and operators know they need to own an email audience, but
              the newsletter gets treated like a side project — inconsistent,
              hard to grow, and rarely monetized.
            </p>
            <ul className="space-y-2 text-neutral-600 text-sm">
              <li>• No time to consistently ship great content</li>
              <li>• Unclear positioning and audience definition</li>
              <li>• Growth stuck at a few thousand subscribers</li>
              <li>• Sponsorships and product funnels never fully wired up</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-neutral-200 p-8">
            <p className="pill-outline mb-4">Our approach</p>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
              We don&apos;t just write. We operate the channel.
            </h3>
            <p className="text-neutral-600 mb-4">
              Flagbearer plugs in as your newsletter growth partner — from strategy
              and infrastructure to growth experiments and revenue operations.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 text-sm">
              <div>
                <p className="font-medium text-neutral-900 mb-1">
                  Strategic positioning
                </p>
                <p className="text-neutral-600">
                  Clear angle, audience, and differentiation in a noisy AI market.
                </p>
              </div>
              <div>
                <p className="font-medium text-neutral-900 mb-1">
                  Predictable growth
                </p>
                <p className="text-neutral-600">
                  Referrals, cross-promos, and paid acquisition tuned for email.
                </p>
              </div>
              <div>
                <p className="font-medium text-neutral-900 mb-1">
                  Revenue-first mindset
                </p>
                <p className="text-neutral-600">
                  Sponsorship, product, and premium plays designed from day one.
                </p>
              </div>
              <div>
                <p className="font-medium text-neutral-900 mb-1">
                  Data-driven iteration
                </p>
                <p className="text-neutral-600">
                  KPI dashboard, cohort views, and monthly optimization cycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Overview */}
      <section className="container-custom" id="services">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-3">
              Full-stack newsletter studio.
            </h2>
            <p className="text-neutral-600 max-w-xl">
              Modular services that cover the entire lifecycle — from zero to a
              compounding, revenue-generating media asset.
            </p>
          </div>
          <p className="text-sm text-neutral-500">
            Platforms we work with: Substack (generally), Beehiiv, Kit, custom stacks.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6">
            <LayoutTemplate className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Strategy &amp; Positioning
            </h3>
            <p className="text-sm text-neutral-600 mb-4">
              Niche research, audience definition, content angles, and
              monetization roadmap packaged into a Strategy Blueprint.
            </p>
            <ul className="text-xs text-neutral-600 space-y-1">
              <li>• Unique positioning framework</li>
              <li>• Competitor and category mapping</li>
              <li>• Revenue model recommendations</li>
            </ul>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl p-6">
            <MailOpen className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Branding, Setup &amp; Production
            </h3>
            <p className="text-sm text-neutral-600 mb-4">
              Name, visual identity, templates, automations, and an editorial
              calendar with full writing and design.
            </p>
            <ul className="text-xs text-neutral-600 space-y-1">
              <li>• Newsletter name &amp; brand voice</li>
              <li>• Landing page &amp; welcome flows</li>
              <li>• Weekly to daily send schedules</li>
            </ul>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl p-6">
            <BarChart3 className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Growth, Monetization &amp; Analytics
            </h3>
            <p className="text-sm text-neutral-600 mb-4">
              Growth engine, sponsorship pipeline, and analytics layer tuned to
              your business model.
            </p>
            <ul className="text-xs text-neutral-600 space-y-1">
              <li>• Lead magnets &amp; referral loops</li>
              <li>• Sponsorship &amp; product funnels</li>
              <li>• KPI dashboard &amp; testing cadence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Process / Journey */}
      <section className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-3">
              A clear, operator-friendly process.
            </h2>
            <p className="text-neutral-600 max-w-xl">
              From first call to scale, we follow a structured cadence so your
              team always knows what&apos;s happening and why.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-4 text-sm">
          <div className="bg-white border border-neutral-200 rounded-2xl p-5">
            <p className="text-xs font-medium text-neutral-500 mb-1">
              Week 0
            </p>
            <h3 className="font-semibold text-neutral-900 mb-2">Discovery</h3>
            <p className="text-neutral-600">
              Deep dive into your product, audience, and current acquisition
              stack.
            </p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-5">
            <p className="text-xs font-medium text-neutral-500 mb-1">
              Weeks 1–3
            </p>
            <h3 className="font-semibold text-neutral-900 mb-2">
              Strategy &amp; Build
            </h3>
            <p className="text-neutral-600">
              Strategy Blueprint, infrastructure setup, and first content calendar.
            </p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-5">
            <p className="text-xs font-medium text-neutral-500 mb-1">
              Weeks 4–12
            </p>
            <h3 className="font-semibold text-neutral-900 mb-2">Operate</h3>
            <p className="text-neutral-600">
              Weekly production cycles, growth experiments, and monthly reviews.
            </p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-5">
            <p className="text-xs font-medium text-neutral-500 mb-1">
              Quarterly
            </p>
            <h3 className="font-semibold text-neutral-900 mb-2">
              Reset &amp; Scale
            </h3>
            <p className="text-neutral-600">
              Strategy reset, new growth levers, and monetization upgrades.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Packages & CTA */}
      <section className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-3">
              Engagement models built for operators.
            </h2>
            <p className="text-neutral-600 max-w-xl">
              Start with launch, grow into a full-stack knowledge partner. All
              packages include reporting and clear KPIs.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 mb-2">
              Tier 1
            </p>
            <h3 className="text-lg font-semibold text-neutral-900 mb-1">
              Launch Package
            </h3>
            <p className="text-sm text-neutral-600 mb-4">
              3-month engagement to stand up a high-performing newsletter from
              scratch.
            </p>
            <p className="text-sm font-medium text-neutral-900 mb-4">
              Clear launch outcomes for what you pay.
            </p>
            <ul className="text-xs text-neutral-600 space-y-1 mb-4 flex-1">
              <li>• Strategy Blueprint</li>
              <li>• Brand, templates &amp; setup</li>
              <li>• Weekly sends</li>
              <li>• Basic analytics</li>
            </ul>
          </div>

          <div className="bg-white border border-orange-300 rounded-2xl p-6 shadow-sm flex flex-col">
            <p className="text-xs font-medium uppercase tracking-wide text-orange-600 mb-2">
              Tier 2 • Most popular
            </p>
            <h3 className="text-lg font-semibold text-neutral-900 mb-1">
              Growth Package
            </h3>
            <p className="text-sm text-neutral-600 mb-4">
              6-month partnership to scale audience and wire in monetization.
            </p>
            <p className="text-sm font-medium text-neutral-900 mb-4">
              Scaled growth systems for what you pay.
            </p>
            <ul className="text-xs text-neutral-600 space-y-1 mb-4 flex-1">
              <li>• Weekly newsletter</li>
              <li>• 1 monthly video asset</li>
              <li>• Research pod &amp; growth experiments</li>
              <li>• Monetization setup &amp; reporting</li>
            </ul>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 mb-2">
              Tier 3
            </p>
            <h3 className="text-lg font-semibold text-neutral-900 mb-1">
              Full-Stack Partner
            </h3>
            <p className="text-sm text-neutral-600 mb-4">
              12-month, deep integration as your knowledge and media partner.
            </p>
            <p className="text-sm font-medium text-neutral-900 mb-4">
              Deep operational support for what you pay.
            </p>
            <ul className="text-xs text-neutral-600 space-y-1 mb-4 flex-1">
              <li>• Weekly newsletters &amp; video</li>
              <li>• Active growth campaigns</li>
              <li>• Sponsorship management</li>
              <li>• Option for performance-based upside</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl border border-neutral-200 bg-neutral-900 px-6 py-6 md:px-10 md:py-8">
          <div>
            <p className="text-sm font-medium text-amber-300 mb-1">
              Ready to see if we&apos;re a fit?
            </p>
            <p className="text-sm text-neutral-200">
              We take on a limited number of partners per quarter to stay close
              to the work.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <LeadFormModal>
              <Button size="lg" variant="accent" className="w-full sm:w-auto">
                Share your details
                <Rocket className="ml-2 h-5 w-5" />
              </Button>
            </LeadFormModal>
          </div>
        </div>
      </section>
    </div>
  );
}
