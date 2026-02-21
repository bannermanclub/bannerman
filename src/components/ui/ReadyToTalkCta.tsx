import { Button } from "@/components/ui/Button";
import { LeadFormModal } from "@/components/ui/LeadFormModal";
import { Rocket } from "lucide-react";

export function ReadyToTalkCta() {
  return (
    <div className="ready-to-talk-cta mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-2xl border border-[#7c2d12] bg-[#9a3412] px-6 py-6 sm:px-8 md:px-10 md:py-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200 mb-2 sm:mb-3">
          Let&apos;s talk
        </p>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">
          Ready to see if we&apos;re a fit?
        </h2>
        <p className="text-sm text-white/95 mb-2 leading-relaxed">
          We take on a limited number of partners per quarter to stay close to
          the work.
        </p>
        <p className="text-xs sm:text-sm text-white/75">
          Typically $1K–$2.5K/month. Minimum 3 months.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
        <LeadFormModal>
          <Button
            size="lg"
            variant="accent"
            className="w-full sm:w-auto min-h-[48px] touch-manipulation shadow-lg hover:shadow-xl transition-shadow"
          >
            Share your details
            <Rocket className="ml-2 h-5 w-5 flex-shrink-0" />
          </Button>
        </LeadFormModal>
      </div>
    </div>
  );
}
