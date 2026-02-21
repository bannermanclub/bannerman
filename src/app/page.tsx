import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { HeroRotatingPhrase } from "@/components/ui/HeroRotatingPhrase";
import { LeadFormModal } from "@/components/ui/LeadFormModal";
import { ReadyToTalkCta } from "@/components/ui/ReadyToTalkCta";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Layers3,
  LayoutTemplate,
  MailOpen,
  MessageSquareQuote,
  PiggyBank,
  TimerReset,
  User,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 pb-16 sm:pb-20">
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-200 via-amber-100 to-orange-200 py-14 sm:py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-50 mix-blend-soft-light">
          <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-amber-400 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-500 blur-3xl" />
        </div>

        <div className="container-custom relative z-10 grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-center md:gap-14">
          <div>
            <p
              className="inline-block rounded-full border border-orange-300/80 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-700 shadow-sm backdrop-blur-sm sm:text-sm"
            >
              Newsletter Studio for AI startups &amp; operators
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:mt-5 sm:text-5xl md:text-6xl md:leading-[1.1]">
              We build, grow &amp; monetize your {" "}
              <HeroRotatingPhrase />
            </h1>
            <p className="mt-4 text-base text-neutral-700 sm:mt-5 sm:text-lg md:text-xl md:leading-relaxed max-w-2xl">
              Strategy, production, growth, and monetization under one roof. You
              focus on building the business — we turn your newsletter into a
              compounding audience and revenue asset.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <LeadFormModal>
                <Button size="lg" className="w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow">
                  Book a discovery call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </LeadFormModal>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-1.5 text-neutral-800 font-medium underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 rounded sm:no-underline"
              >
                See how it works
                <ArrowRight className="h-4 w-4 opacity-70" />
              </a>
            </div>
            <p className="mt-5 text-sm text-neutral-600">
              Ideal for AI startups, B2B SaaS, tools, and operators serious about
              owning their audience.
            </p>
            <p className="mt-4 text-sm text-neutral-600">
              From the team behind{" "}
              <a
                href="https://thisweekinaiclub.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-800 hover:text-primary transition-colors underline-offset-2 hover:underline"
              >
                This Week in AI
              </a>
              {" "}— Hardeep Singh Mehra{" "}
              <a href="https://linkedin.com/in/iamhasime" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary transition-colors underline-offset-2 hover:underline">LinkedIn</a>
              {" · "}
              <a href="https://x.com/hsm4ai" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary transition-colors underline-offset-2 hover:underline">X</a>
            </p>
          </div>

          <div className="hidden md:block">
            <div className="relative rounded-2xl border border-orange-200/90 bg-white/90 p-6 shadow-lg shadow-orange-200/20 backdrop-blur-sm">
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

      {/* Problem & Value */}
      <section className="container-custom">
        <div className="grid gap-10 lg:grid-cols-2 items-start lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-2 sm:mb-3">
              The challenge
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mb-4">
              But, most AI newsletters stall after launch.
            </h2>
            <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
              Founders and operators know they need to own an email audience, but
              the newsletter gets treated like a side project — inconsistent,
              hard to grow, and rarely monetized.
            </p>
            <ul className="space-y-2 text-neutral-600 text-sm leading-relaxed">
              <li className="flex gap-2"><span className="text-orange-500">•</span> No time to consistently ship great content</li>
              <li className="flex gap-2"><span className="text-orange-500">•</span> Unclear positioning and audience definition</li>
              <li className="flex gap-2"><span className="text-orange-500">•</span> Growth stuck at a few thousand subscribers</li>
              <li className="flex gap-2"><span className="text-orange-500">•</span> Sponsorships and product funnels never fully wired up</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm sm:p-8 transition-all hover:shadow-md hover:border-neutral-300/80">
            <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700 mb-4">
              Our approach
            </span>
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

      {/* Results — TWIA outcome */}
      <section className="container-custom">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-2 sm:mb-3">
            Results
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mb-3">
            Proof in practice.
          </h2>
          <p className="text-neutral-600 max-w-xl leading-relaxed">
            We deliver newsletters with original research you can repurpose for content marketing — not vanity metrics.
          </p>
        </div>
        <a
          href="https://thisweekinaiclub.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border border-orange-200/90 bg-white p-6 shadow-sm transition-all hover:border-orange-300 hover:shadow-md hover:shadow-orange-100/50 text-left sm:p-8"
        >
          <h3 className="text-lg font-bold tracking-tight text-neutral-900 sm:text-xl mb-2 group-hover:text-primary transition-colors">
            This Week in AI
          </h3>
          <p className="text-sm text-neutral-700 sm:text-base mb-4 leading-relaxed">
            0 to 30K subscribers in 12 months. Built for a global audience of business owners. We run the strategy, production, and growth — original research, repurposed across content marketing.
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">View newsletter <ArrowRight className="h-4 w-4" /></span>
        </a>
      </section>

      {/* We plug in — solo or team, we work with both */}
      <section className="container-custom scroll-mt-[calc(5rem+5vh)]" id="how-it-works">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-2 sm:mb-3">
            How it works
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mb-3">
            We plug in. You don&apos;t replace anyone.
          </h2>
          <p className="text-neutral-600 max-w-2xl leading-relaxed">
            Solo founder or full content team — we work with both. You stay in the driver&apos;s seat; we add the newsletter engine and capacity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm sm:p-8 transition-all hover:shadow-md hover:border-neutral-300/80">
            <User className="h-8 w-8 text-orange-600 mb-4" />
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              You&apos;re solo or you write the content
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              We add the newsletter engine so you&apos;re not starting from zero. Strategy, production, growth, and repurposing — we own it as your dedicated partner. You stay the voice; we handle the system and scale.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm sm:p-8 transition-all hover:shadow-md hover:border-neutral-300/80">
            <Users className="h-8 w-8 text-orange-600 mb-4" />
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              You have a content team
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              We plug in as your newsletter specialist. Your team stays; we add leverage. No one gets replaced — we own newsletter strategy, production, and growth so your existing people can focus on what they do best.
            </p>
          </div>
        </div>
      </section>

      {/* Why a newsletter — reinforcement for believers */}
      <section className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-2 sm:mb-3">
              Why a newsletter is needed
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mb-3">
              One differentiated channel beats scattered content.
            </h2>
            <p className="text-neutral-600 max-w-2xl leading-relaxed">
              In an AI-saturated market, a strategic newsletter gives you a clear
              point of view, ongoing trust with buyers, and reusable content
              infrastructure that compounds over time.
            </p>
          </div>
          <Link
            href="/why-do-brands-need-a-newsletter"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-800 hover:text-orange-700 underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 rounded"
          >
            Read the full breakdown
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-6 auto-rows-[minmax(130px,auto)]">
          <article className="md:col-span-4 rounded-2xl border border-orange-200/90 bg-gradient-to-br from-orange-50 via-amber-50 to-white p-6 shadow-sm transition-all hover:shadow-md hover:border-orange-300/80">
            <BrainCircuit className="h-7 w-7 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              AI can generate content, not conviction.
            </h3>
            <p className="text-sm text-neutral-700 max-w-2xl leading-relaxed">
              When everyone is using the same tools, sameness becomes the default.
              A newsletter creates a consistent place for your real point of view
              to stand out.
            </p>
          </article>

          <article className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300/80">
            <MessageSquareQuote className="h-7 w-7 text-orange-600 mb-4" />
            <h3 className="text-base font-semibold text-neutral-900 mb-2">
              Trust drives B2B decisions
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Buyers choose voices that explain their market clearly, not brands
              that publish the most.
            </p>
          </article>

          <article className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300/80">
            <TimerReset className="h-7 w-7 text-orange-600 mb-4" />
            <h3 className="text-base font-semibold text-neutral-900 mb-2">
              Bridge long sales cycles
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Most prospects are &ldquo;not now.&rdquo; Newsletters keep you relevant
              until they&apos;re ready to act.
            </p>
          </article>

          <article className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300/80">
            <Layers3 className="h-7 w-7 text-orange-600 mb-4" />
            <h3 className="text-base font-semibold text-neutral-900 mb-2">
              Build content infrastructure
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              One strong edition can fuel social posts, sales talking points, and
              webinar angles.
            </p>
          </article>

          <article className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300/80">
            <PiggyBank className="h-7 w-7 text-orange-600 mb-4" />
            <h3 className="text-base font-semibold text-neutral-900 mb-2">
              More leverage, less overhead
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              You get senior strategy and reliable execution without building a
              full internal editorial team.
            </p>
          </article>
        </div>
      </section>

      {/* Full-stack studio */}
      <section className="container-custom" id="services">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-2 sm:mb-3">
              What we do
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mb-3">
              Full-stack newsletter studio.
            </h2>
            <p className="text-neutral-600 max-w-xl leading-relaxed">
              Modular services that cover the entire lifecycle — from zero to a
              compounding, revenue-generating media asset.
            </p>
          </div>
          <p className="text-sm text-neutral-500 max-w-xs">
            Platforms we work with: Substack (generally), Beehiiv, Kit, custom stacks.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300/80">
            <LayoutTemplate className="h-7 w-7 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Strategy &amp; Positioning
            </h3>
            <p className="text-sm text-neutral-600 mb-4">
              Niche research, audience definition, content angles, and
              monetization roadmap packaged into a Strategy Blueprint.
            </p>
            <ul className="text-xs text-neutral-600 space-y-1.5 leading-relaxed">
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Unique positioning framework</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Competitor and category mapping</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Revenue model recommendations</li>
            </ul>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300/80">
            <MailOpen className="h-7 w-7 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Branding, Setup &amp; Production
            </h3>
            <p className="text-sm text-neutral-600 mb-4">
              Name, visual identity, templates, automations, and an editorial
              calendar with full writing and design.
            </p>
            <ul className="text-xs text-neutral-600 space-y-1.5 leading-relaxed">
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Newsletter name &amp; brand voice</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Landing page &amp; welcome flows</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Weekly to daily send schedules</li>
            </ul>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300/80">
            <BarChart3 className="h-7 w-7 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Growth, Monetization &amp; Analytics
            </h3>
            <p className="text-sm text-neutral-600 mb-4">
              Growth engine, sponsorship pipeline, and analytics layer tuned to
              your business model.
            </p>
            <ul className="text-xs text-neutral-600 space-y-1.5 leading-relaxed">
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Lead magnets &amp; referral loops</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Sponsorship &amp; product funnels</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> KPI dashboard &amp; testing cadence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-custom">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-2 sm:mb-3">
            How we work
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mb-3">
            A clear, operator-friendly process.
          </h2>
          <p className="text-neutral-600 max-w-xl leading-relaxed">
            From first call to scale, we follow a structured cadence so your
            team always knows what&apos;s happening and why.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-4 text-sm">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300/80">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 mb-2">
              Week 0
            </p>
            <h3 className="text-base font-semibold text-neutral-900 mb-2">Discovery</h3>
            <p className="text-neutral-600 leading-relaxed">
              Deep dive into your product, audience, and current acquisition
              stack.
            </p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300/80">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 mb-2">
              Weeks 1–3
            </p>
            <h3 className="text-base font-semibold text-neutral-900 mb-2">
              Strategy &amp; Build
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Strategy Blueprint, infrastructure setup, and first content calendar.
            </p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300/80">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 mb-2">
              Weeks 4–12
            </p>
            <h3 className="text-base font-semibold text-neutral-900 mb-2">Operate</h3>
            <p className="text-neutral-600 leading-relaxed">
              Weekly production cycles, growth experiments, and monthly reviews.
            </p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm transition-all hover:shadow-md hover:border-neutral-300/80">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 mb-2">
              Quarterly
            </p>
            <h3 className="text-base font-semibold text-neutral-900 mb-2">
              Reset &amp; Scale
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Strategy reset, new growth levers, and monetization upgrades.
            </p>
          </div>
        </div>
      </section>

      {/* Packages & CTA */}
      <section className="container-custom">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-2 sm:mb-3">
            Engagement
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mb-3">
            Engagement models built for operators.
          </h2>
          <p className="text-neutral-600 max-w-xl leading-relaxed">
            Start with launch, grow into a full-stack knowledge partner. All
            packages include reporting and clear KPIs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col shadow-sm transition-all hover:shadow-md hover:border-neutral-300/80">
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
            <ul className="text-xs text-neutral-600 space-y-1.5 mb-4 flex-1 leading-relaxed">
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Strategy Blueprint</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Brand, templates &amp; setup</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Weekly sends</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Basic analytics</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-orange-300 rounded-2xl p-6 shadow-md flex flex-col ring-2 ring-orange-200/50 transition-all hover:shadow-lg hover:border-orange-400/80">
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
            <ul className="text-xs text-neutral-600 space-y-1.5 mb-4 flex-1 leading-relaxed">
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Weekly newsletter</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> 1 monthly video asset</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Research pod &amp; growth experiments</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Monetization setup &amp; reporting</li>
            </ul>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col shadow-sm transition-all hover:shadow-md hover:border-neutral-300/80">
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
            <ul className="text-xs text-neutral-600 space-y-1.5 mb-4 flex-1 leading-relaxed">
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Weekly newsletters &amp; video</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Active growth campaigns</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Sponsorship management</li>
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span> Option for performance-based upside</li>
            </ul>
          </div>
        </div>

        <ReadyToTalkCta />
      </section>
    </div>
  );
}
