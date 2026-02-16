import { CheckCircle2, LineChart, Target, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container-custom py-16 md:py-24 space-y-16">
      <section className="max-w-3xl">
        <p className="pill-outline mb-4">About Flagbearer</p>
        <h1 className="text-4xl font-bold text-neutral-900 mb-6">
          We build newsletter businesses, not email blasts.
        </h1>
        <p className="text-lg text-neutral-600 mb-4">
          Flagbearer is a full-stack newsletter studio for AI startups, operators,
          and brands. We handle strategy, production, growth, and monetization so
          your team can stay focused on building product and serving customers.
        </p>
        <p className="text-lg text-neutral-600">
          Our work blends operator experience, performance marketing, and
          editorial judgment to turn newsletters into durable, revenue-generating
          assets.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">What we do</h2>
          <ul className="space-y-3 text-neutral-600">
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
              <span>
                Build end-to-end newsletter infrastructure – from positioning, tech
                stack, and templates to landing pages and automation.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
              <span>
                Run consistent, high-quality content production across strategy,
                research, writing, and design.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
              <span>
                Operate growth engines including referrals, paid acquisition,
                sponsorships, and cross-promotion.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
              <span>
                Design and execute monetization roadmaps – from sponsorships to
                products and premium tiers.
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Why we do it</h2>
          <p className="text-neutral-600 mb-4">
            Most AI companies know they should own an audience, but newsletters
            become a side project: inconsistent, hard to grow, and rarely
            monetized. We exist to flip that script.
          </p>
          <p className="text-neutral-600 mb-4">
            We believe email is still one of the highest-ROI owned channels –
            especially in complex, high-consideration B2B categories where trust
            and education matter more than impressions.
          </p>
          <p className="text-neutral-600">
            Our goal is simple: make your newsletter a core business asset with
            clear KPIs, not a “nice-to-have” marketing experiment.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl border border-neutral-200 p-6">
          <Target className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            Who we work with
          </h3>
          <p className="text-neutral-600">
            AI startups, B2B SaaS, tools, operators, consultants, and creators who
            treat content as a strategic asset, not a vanity metric.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 p-6">
          <LineChart className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            How we measure success
          </h3>
          <p className="text-neutral-600">
            Subscriber growth, engagement (opens, clicks, replies), and revenue
            per subscriber – not just send volume or vanity impressions.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 p-6">
          <Users className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            How we work
          </h3>
          <p className="text-neutral-600">
            Long-term partnerships with clear scopes, monthly reviews, and
            quarterly strategy resets. Limited active clients to maintain depth.
          </p>
        </div>
      </section>

      <section className="border border-neutral-200 rounded-2xl p-8 md:p-10 bg-gradient-to-tr from-amber-50 via-white to-orange-50">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">
              Ready to turn email into a revenue channel?
            </h2>
            <p className="text-neutral-600">
              Share a bit about your company and current newsletter and we&apos;ll
              come back with a clear recommendation on how we can help.
            </p>
          </div>
          <div className="space-y-2 text-sm text-neutral-700">
            <p className="font-medium">Email</p>
            <a
              href="mailto:hello@flagbearer.club"
              className="text-primary hover:text-orange-600 font-mono text-sm"
            >
              hello@flagbearer.club
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

