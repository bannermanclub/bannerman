import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

const BRAND_COLOR = "#BC4F12";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 py-12 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <Image
                src="/logo-white.svg"
                alt=""
                width={60}
                height={60}
                className="h-10 w-10 sm:h-12 sm:w-12"
              />
              <span
                className="text-2xl sm:text-3xl font-[family-name:var(--font-instrument-serif)] font-normal tracking-tight"
                style={{
                  color: BRAND_COLOR,
                  WebkitTextStroke: "1.5px currentColor",
                  paintOrder: "stroke fill",
                }}
              >
                Flagbearer
              </span>
            </Link>
            <p className="text-neutral-600 max-w-sm">
              Full-service newsletter studio for AI startups, operators, and brands.
              We design, launch, grow, and monetize high-performing newsletter assets.
            </p>
            <p className="text-neutral-600 max-w-sm mt-4">
              A sister company of{" "}
              <a
                href="https://thisweekinaiclub.substack.com"
                className="hover:text-primary"
              >
                <strong>This Week in AI</strong>
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-neutral-900 mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-600 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.blog}
                  className="text-neutral-600 hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.whyNewsletter}
                  className="text-neutral-600 hover:text-primary"
                >
                  Why newsletter?
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.about}
                  className="text-neutral-600 hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.contact}
                  className="text-neutral-600 hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-neutral-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-neutral-600 hover:text-primary"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-neutral-500 text-sm">We read all emails.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-neutral-500 text-sm">
          <span>© {new Date().getFullYear()} Flagbearer Club</span>
          <span className="hidden sm:inline" aria-hidden>
            ·
          </span>
          <Link href={siteConfig.links.privacy} className="hover:text-primary">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
