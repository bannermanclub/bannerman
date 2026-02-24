import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

const BRAND_COLOR = "#BC4F12";

const iconSize = 20;

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SubstackIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

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
            <div className="flex gap-4 mt-4">
              <a
                href="https://linkedin.com/company/flagbearerclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://flagbearerclub.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary transition-colors"
                aria-label="Substack"
              >
                <SubstackIcon />
              </a>
              <a
                href="https://x.com/flagbearerclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary transition-colors"
                aria-label="X"
              >
                <XIcon />
              </a>
            </div>
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
