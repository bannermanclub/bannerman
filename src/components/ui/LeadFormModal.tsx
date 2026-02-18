'use client';

import { useState, useCallback, useEffect, useRef, cloneElement, isValidElement } from "react";
import { createPortal } from "react-dom";
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

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function LeadFormModal({ children }: LeadFormModalProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<LeadFormState>(initialState);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousActiveRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

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
    } else {
      try {
        new URL(form.website.trim().startsWith("http") ? form.website.trim() : `https://${form.website.trim()}`);
      } catch {
        nextErrors.website = "Enter a valid URL (e.g. https://yourcompany.com).";
      }
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

  const close = useCallback(() => {
    setOpen(false);
    setErrors({});
    setGlobalError(null);
  }, []);

  // Body scroll lock when modal is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Escape to close
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  // Focus trap and initial focus when opened
  useEffect(() => {
    if (!open || !dialogRef.current) return;
    previousActiveRef.current = document.activeElement as HTMLElement | null;
    const focusables = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    const firstInput = dialogRef.current.querySelector<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("input:not([type=hidden]):not([type=button]):not([type=submit]), select, textarea");
    const first = (firstInput as HTMLElement) ?? focusables[0];
    const last = focusables[focusables.length - 1];
    first?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    dialogRef.current.addEventListener("keydown", onKeyDown);
    return () => {
      dialogRef.current?.removeEventListener("keydown", onKeyDown);
      previousActiveRef.current?.focus?.();
    };
  }, [open]);

  const trigger = isValidElement(children)
    ? cloneElement(children as React.ReactElement<{ onClick?: React.MouseEventHandler; type?: string }>, {
        type: "button",
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
          setOpen(true);
          (children as React.ReactElement<{ onClick?: React.MouseEventHandler }>).props?.onClick?.(e);
        },
      })
    : <span onClick={() => setOpen(true)} className="inline-flex">{children}</span>;

  const overlay = open ? (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/40 px-3 py-4 sm:px-4 sm:py-6 overflow-y-auto overscroll-contain"
      style={{ paddingTop: "max(1rem, env(safe-area-inset-top))", paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Close lead form"
            onClick={close}
          />

          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-form-title"
            aria-describedby="lead-form-desc"
            className="relative z-10 w-full max-w-lg my-auto flex flex-col max-h-[min(90dvh,calc(100vh-2rem))]"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden flex flex-col min-h-0">
              <div className="flex-shrink-0 p-5 md:p-6 border-b border-neutral-200 flex items-start justify-between gap-4">
                <div>
                  <h2 id="lead-form-title" className="text-xl md:text-2xl font-bold text-neutral-900 mb-1.5">
                    Tell us about your newsletter
                  </h2>
                  <p id="lead-form-desc" className="text-xs md:text-sm text-neutral-600">
                    Share a few details and we&apos;ll come back with a tailored
                    growth and monetization plan for your AI newsletter.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="flex-shrink-0 rounded-full border border-neutral-200 p-1.5 text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 md:p-6">
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
                    type="text"
                    autoComplete="name"
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
                    autoComplete="email"
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
                    type="text"
                    autoComplete="organization"
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
                    type="text"
                    autoComplete="url"
                    placeholder="https://yourcompany.com"
                    value={form.website}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, website: e.target.value }))
                    }
                    error={errors.website}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="lead-fundingStatus" className="block text-sm font-medium text-neutral-700 mb-1">
                        Funding status
                      </label>
                      <select
                        id="lead-fundingStatus"
                        name="fundingStatus"
                        value={form.fundingStatus}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            fundingStatus: e.target.value,
                          }))
                        }
                        className="block w-full rounded-md border border-neutral-300 px-4 py-2 text-neutral-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white"
                        aria-invalid={errors.fundingStatus ? true : undefined}
                        aria-describedby={errors.fundingStatus ? "lead-fundingStatus-error" : undefined}
                      >
                        <option value="">Select...</option>
                        <option value="Pre-product">Pre-product</option>
                        <option value="Bootstrapped">Bootstrapped</option>
                        <option value="Pre-seed">Pre-seed</option>
                        <option value="Seed">Seed</option>
                        <option value="Series A+">Series A+</option>
                      </select>
                      {errors.fundingStatus && (
                        <p id="lead-fundingStatus-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.fundingStatus}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lead-profitable" className="block text-sm font-medium text-neutral-700 mb-1">
                        Profitable
                      </label>
                      <select
                        id="lead-profitable"
                        name="profitable"
                        value={form.profitable}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            profitable: e.target.value,
                          }))
                        }
                        className="block w-full rounded-md border border-neutral-300 px-4 py-2 text-neutral-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white"
                        aria-invalid={errors.profitable ? true : undefined}
                        aria-describedby={errors.profitable ? "lead-profitable-error" : undefined}
                      >
                        <option value="">Select...</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Not sure">Not sure</option>
                      </select>
                      {errors.profitable && (
                        <p id="lead-profitable-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.profitable}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lead-mrrUsd" className="block text-sm font-medium text-neutral-700 mb-1">
                      MRR in USD (approx.)
                    </label>
                    <input
                      id="lead-mrrUsd"
                      type="text"
                      name="mrrUsd"
                      inputMode="numeric"
                      autoComplete="off"
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

              <div className="flex-shrink-0 bg-neutral-50 p-6 border-t border-neutral-200">
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
  ) : null;

  return (
    <>
      {trigger}
      {mounted && createPortal(overlay, document.body)}
    </>
  );
}

