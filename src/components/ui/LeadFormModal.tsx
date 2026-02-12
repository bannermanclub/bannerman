'use client';

import { useState } from "react";
import type { ReactNode, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { Input } from "./Input";
import { AlertCircle, CheckCircle2, Loader2, X } from "lucide-react";

type LeadFormState = {
  name: string;
  email: string;
  company: string;
  website: string;
  fundingStatus: string;
  profitable: string;
  mrrUsd: string;
};

type LeadFormErrors = Partial<Record<keyof LeadFormState, string>>;

const initialState: LeadFormState = {
  name: "",
  email: "",
  company: "",
  website: "",
  fundingStatus: "",
  profitable: "",
  mrrUsd: "",
};

interface LeadFormModalProps {
  children: ReactNode;
}

export function LeadFormModal({ children }: LeadFormModalProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<LeadFormState>(initialState);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const validate = (): boolean => {
    const nextErrors: LeadFormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(form.email)) {
        nextErrors.email = "Enter a valid email address.";
      }
    }

    if (!form.company.trim()) {
      nextErrors.company = "Company is required.";
    }

    if (!form.website.trim()) {
      nextErrors.website = "Website is required.";
    }

    if (!form.fundingStatus) {
      nextErrors.fundingStatus = "Select a funding status.";
    }

    if (!form.profitable) {
      nextErrors.profitable = "Select whether you are profitable.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGlobalError(null);

    if (!validate()) {
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/get-started", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      // Close modal and redirect to thank-you page with Calendly,
      // similar to how fame.so handles its proposal flow.
      setOpen(false);
      setForm(initialState);
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setGlobalError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const close = () => {
    setOpen(false);
    setErrors({});
    setGlobalError(null);
  };

  return (
    <>
      <span onClick={() => setOpen(true)} className="inline-flex">
        {children}
      </span>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4">
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Close lead form"
            onClick={close}
          />

          <div className="relative z-10 w-full max-w-lg">
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden">
              <div className="p-5 md:p-6 border-b border-neutral-200 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-1.5">
                    Tell us about your newsletter
                  </h2>
                  <p className="text-xs md:text-sm text-neutral-600">
                    Share a few details and we&apos;ll come back with a tailored
                    growth and monetization plan for your AI newsletter.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-full border border-neutral-200 p-1.5 text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-5 md:p-6">
                {globalError && (
                  <div className="mb-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
                    <AlertCircle className="mt-0.5 h-5 w-5" />
                    <p>{globalError}</p>
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <Input
                    label="Name"
                    name="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                    error={errors.name}
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, email: e.target.value }))
                    }
                    error={errors.email}
                  />
                  <Input
                    label="Company"
                    name="company"
                    placeholder="Acme AI"
                    value={form.company}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, company: e.target.value }))
                    }
                    error={errors.company}
                  />
                  <Input
                    label="Website"
                    name="website"
                    placeholder="https://yourcompany.com"
                    value={form.website}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, website: e.target.value }))
                    }
                    error={errors.website}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Funding status
                      </label>
                      <select
                        name="fundingStatus"
                        value={form.fundingStatus}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            fundingStatus: e.target.value,
                          }))
                        }
                        className="block w-full rounded-md border border-neutral-300 px-4 py-2 text-neutral-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="Pre-product">Pre-product</option>
                        <option value="Bootstrapped">Bootstrapped</option>
                        <option value="Pre-seed">Pre-seed</option>
                        <option value="Seed">Seed</option>
                        <option value="Series A+">Series A+</option>
                      </select>
                      {errors.fundingStatus && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.fundingStatus}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Profitable
                      </label>
                      <select
                        name="profitable"
                        value={form.profitable}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            profitable: e.target.value,
                          }))
                        }
                        className="block w-full rounded-md border border-neutral-300 px-4 py-2 text-neutral-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Not sure">Not sure</option>
                      </select>
                      {errors.profitable && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.profitable}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      MRR in USD (approx.)
                    </label>
                    <input
                      type="text"
                      name="mrrUsd"
                      placeholder="$25,000"
                      value={form.mrrUsd}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, mrrUsd: e.target.value }))
                      }
                      className="block w-full rounded-md border border-neutral-300 px-4 py-2 text-neutral-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      size="lg"
                      className="w-full"
                      type="submit"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <span className="inline-flex items-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting…
                        </span>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </div>

                  <p className="text-xs text-neutral-500 text-center mt-4">
                    We&apos;ll review your information and reach out with next
                    steps. No spam, ever.
                  </p>
                </form>
              </div>

              <div className="bg-neutral-50 p-6 border-t border-neutral-200">
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-neutral-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Strategy-first, no fluff</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Operators with media experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Limited active partners at any time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

