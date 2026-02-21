export default function ThankYouPage() {
  return (
    <div className="container-custom py-16 md:py-24">
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
        <div className="space-y-8 max-w-xl">
          <div className="space-y-4">
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
              In the meantime, you can book a discovery call directly with our team to walk
              through your goals, constraints, and current acquisition stack.
            </p>
          </div>

          <div className="space-y-3 border-t border-neutral-200 pt-8">
            <h2 className="text-lg font-semibold text-neutral-900">
              What is a discovery call?
            </h2>
            <p className="text-sm text-neutral-600">
              This discovery call is a focused conversation designed to explore
              whether Flagbearer is the right strategic partner for you.
            </p>
            <p className="text-sm font-medium text-neutral-800">During this session, we&apos;ll:</p>
            <ul className="text-sm text-neutral-600 space-y-1.5">
              <li className="flex gap-2">
                <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                Understand your current challenges, goals, and growth ambitions
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                Identify gaps in strategy, positioning, or execution
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                Clarify what &ldquo;winning&rdquo; looks like for you and your organization
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                Determine whether there&apos;s a strong mutual fit
              </li>
            </ul>
            <p className="text-sm text-neutral-600">
              <span className="font-medium text-neutral-800">You will not be sold to.</span>{" "}
              If there&apos;s a clear opportunity to work together, we&apos;ll outline what
              that could look like.
            </p>
            <p className="text-sm text-neutral-500 italic">
              If not, you&apos;ll still leave with clarity and direction.
            </p>
          </div>
        </div>

        <div id="calendly" className="space-y-3">
          <h2 className="text-lg md:text-xl font-semibold text-neutral-900">
            Book a time that works for you
          </h2>
          <p className="text-xs text-neutral-500">
            Choose a slot below — we&apos;ll use your form submission to prepare ahead of the call.
          </p>
          <div className="w-full rounded-2xl border border-neutral-200 bg-white p-2 md:p-3">
            <div className="relative pb-[140%] md:pb-[120%] h-0 overflow-hidden rounded-xl">
              <iframe
                src="https://calendly.com/flagbearerclub/15min?hide_gdpr_banner=1&primary_color=bc4f12"
                title="Schedule 15 mins with Flagbearer"
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
