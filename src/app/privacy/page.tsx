import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Flagbearer. How we collect, use, and protect your information when you use our website and get in touch with us.",
  alternates: { canonical: siteConfig.links.privacy },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}${siteConfig.links.privacy}`,
    title: "Privacy Policy | Flagbearer",
    description: "How we collect, use, and protect your information.",
    siteName: siteConfig.name,
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="container-custom py-16 md:py-24">
      <article className="max-w-3xl mx-auto prose prose-neutral">
        <h1 className="text-4xl font-bold text-neutral-900 mb-6">Privacy Policy</h1>
        <p className="text-neutral-600 text-sm mb-8">
          Last updated: {new Date().toISOString().slice(0, 10)}
        </p>

        <section className="space-y-4 text-neutral-700">
          <h2 className="text-xl font-semibold text-neutral-900">Who we are</h2>
          <p>
            Flagbearer (&quot;we&quot;, &quot;us&quot;) is a newsletter studio. Our website is{" "}
            <a href={siteConfig.url} className="text-primary hover:underline">
              {siteConfig.url}
            </a>
            . You can reach us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>

        <section className="space-y-4 text-neutral-700 mt-10">
          <h2 className="text-xl font-semibold text-neutral-900">Information we collect</h2>
          <p>
            When you contact us or submit a form (e.g. discovery call or lead form), we
            may collect your name, email, company name, website, and other details you
            provide. We use this to respond to your request and, with your consent, to
            follow up about our services.
          </p>
          <p>
            We may collect technical data such as IP address and browser type when you
            visit our site, for security and analytics purposes.
          </p>
        </section>

        <section className="space-y-4 text-neutral-700 mt-10">
          <h2 className="text-xl font-semibold text-neutral-900">How we use it</h2>
          <p>
            We use your information to respond to inquiries, send relevant updates about
            Flagbearer if you have opted in, and improve our website and services. We do
            not sell your personal data to third parties.
          </p>
        </section>

        <section className="space-y-4 text-neutral-700 mt-10">
          <h2 className="text-xl font-semibold text-neutral-900">Cookies and tracking</h2>
          <p>
            Our site may use cookies or similar technologies for essential functionality
            and, where applicable, analytics. You can control cookies via your browser
            settings.
          </p>
        </section>

        <section className="space-y-4 text-neutral-700 mt-10">
          <h2 className="text-xl font-semibold text-neutral-900">Your rights</h2>
          <p>
            You may ask us what data we hold about you, request correction or deletion, or
            withdraw consent. Contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
              {siteConfig.email}
            </a>{" "}
            for any privacy-related request.
          </p>
        </section>

        <section className="space-y-4 text-neutral-700 mt-10">
          <h2 className="text-xl font-semibold text-neutral-900">Changes</h2>
          <p>
            We may update this policy from time to time. The &quot;Last updated&quot; date at the
            top will reflect the latest version. Continued use of the site after changes
            constitutes acceptance of the updated policy.
          </p>
        </section>

        <p className="mt-12 pt-6 border-t border-neutral-200">
          <Link href="/" className="text-neutral-600 hover:text-primary text-sm font-medium">
            ← Back to home
          </Link>
        </p>
      </article>
    </div>
  );
}
