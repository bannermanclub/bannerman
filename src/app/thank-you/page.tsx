import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ThankYouPage() {
  return (
    <div className="container-custom py-16 md:py-24">
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
        <div className="space-y-4 max-w-xl">
          <p className="pill-outline text-xs">Next steps</p>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Thank you — we&apos;ll review your details shortly.
          </h1>
          <p className="text-neutral-600 text-sm md:text-base">
            We&apos;re excited you&apos;re considering Flagbearer as your newsletter
            growth partner. Within 24–48 hours, we&apos;ll review your inputs and
            share a tailored point of view on how we can help.
          </p>
          <p className="text-neutral-600 text-sm md:text-base">
            In the meantime, you can grab time directly with our team to walk
            through your goals, constraints, and current acquisition stack.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#calendly" className="inline-flex">
              <Button size="lg" variant="primary">
                Book a call now
              </Button>
            </a>
            <Link href="/" className="text-sm text-neutral-600 hover:text-primary">
              Back to homepage
            </Link>
          </div>
        </div>

        <div id="calendly" className="space-y-3">
          <h2 className="text-lg md:text-xl font-semibold text-neutral-900">
            Book a time that works for you
          </h2>
          <p className="text-xs md:text-sm text-neutral-600">
            Choose a slot below and we&apos;ll use your form submission to prepare
            ahead of the call.
          </p>
          <div className="w-full rounded-2xl border border-neutral-200 bg-white p-2 md:p-3">
            <div className="relative pb-[140%] md:pb-[120%] h-0 overflow-hidden rounded-xl">
              {/* Replace the src below with your actual Calendly scheduling URL */}
              <iframe
                src="https://calendly.com/clubflagbearer/30min"
                title="Schedule a call with Flagbearer"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

