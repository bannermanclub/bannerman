import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Flagbearer. We typically respond within 1–2 business days. Share your company and newsletter goals for a clear recommendation.",
  path: siteConfig.links.contact,
  ogTitle: "Contact | Flagbearer",
});

export default function ContactPage() {
  return (
    <div className="container-custom py-16 md:py-24">
      <section className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Contact us</h1>
        <p className="text-lg text-neutral-600 mb-10">
          We take on a limited number of partners per quarter. Share a bit about your
          company and current newsletter and we&apos;ll come back with a clear recommendation.
        </p>
        <div className="space-y-6">
          <p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-primary font-semibold hover:text-orange-600 text-lg"
            >
              {siteConfig.email}
            </a>
          </p>
          <p className="text-neutral-500 text-sm">
            We read all emails and typically respond within 1–2 business hours.
          </p>
          <p className="pt-4">
            <Link
              href="/"
              className="text-neutral-600 hover:text-primary text-sm font-medium"
            >
              ← Back to home
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
