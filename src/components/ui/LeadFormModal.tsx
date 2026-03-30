'use client';

import { useState, useCallback, useEffect, useRef, cloneElement, isValidElement } from "react";
import { createPortal } from "react-dom";
import type { ReactNode, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { Input } from "./Input";
import { AlertCircle, Loader2, X } from "lucide-react";

type LeadFormState = {
  email: string;
  newsletterRun: string;
  newsletterUrl: string;
};

type LeadFormErrors = Partial<Record<keyof LeadFormState, string>>;

const initialState: LeadFormState = {
  email: "",
  newsletterRun: "",
  newsletterUrl: "",
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
  const scrollableRef = useRef<HTMLDivElement>(null);
  const previousActiveRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const validate = (): boolean => {
    const nextErrors: LeadFormErrors = {};

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(form.email)) {
        nextErrors.email = "Enter a valid email address.";
      }
    }

    if (!form.newsletterRun) {
      nextErrors.newsletterRun =
        "Please select whether you currently run a newsletter (or have in the past).";
    }

    if (form.newsletterRun === "Yes") {
      if (!form.newsletterUrl.trim()) {
        nextErrors.newsletterUrl = "Please share your newsletter URL.";
      } else {
        try {
          const candidate = form.newsletterUrl.trim().startsWith("http")
            ? form.newsletterUrl.trim()
            : `https://${form.newsletterUrl.trim()}`;
          new URL(candidate);
        } catch {
          nextErrors.newsletterUrl = "Enter a valid URL (e.g. https://yournewsletter.com).";
        }
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGlobalError(null);

    if (!validate()) {
      // Scroll to first invalid field so the user can see the errors
      requestAnimationFrame(() => {
        const firstInvalid = scrollableRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]');
        if (firstInvalid) {
          firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          scrollableRef.current?.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
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
    const firstInput = dialogRef.current.querySelector<HTMLElement>(
      "input:not([type=hidden]):not([type=button]):not([type=submit]), select, textarea"
    );
    const first = firstInput ?? focusables[0];
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
      {/* Backdrop — sits below the dialog in the stacking context */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
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

          {/* Fixed header */}
          <div className="flex-shrink-0 p-5 md:p-6 border-b border-neutral-200 flex items-start justify-between gap-4">
            <div>
              <h2 id="lead-form-title" className="text-xl md:text-2xl font-bold text-neutral-900 mb-1.5">
                Tell us about your newsletter
              </h2>
              <p id="lead-form-desc" className="text-xs md:text-sm text-neutral-600">
                You&apos;ll get a tailored
                growth plan for your newsletter based on these detials.
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

          {/* Form stretches to fill remaining space, keeping submit visible */}
          <form
            className="flex flex-col flex-1 min-h-0 overflow-hidden"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Scrollable fields */}
            <div
              ref={scrollableRef}
              className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 md:p-6"
            >
              {globalError && (
                <div className="mb-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <p>{globalError}</p>
                </div>
              )}

              <div className="space-y-6">
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="elon@spacex.com"
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  error={errors.email}
                />

                <div>
                  <label
                    htmlFor="lead-newsletterRun"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Do you currently run a newsletter, or have you run one in the past?
                  </label>
                  <select
                    id="lead-newsletterRun"
                    name="newsletterRun"
                    value={form.newsletterRun}
                    onChange={(e) => {
                      const value = e.target.value;
                      setForm((prev) => ({
                        ...prev,
                        newsletterRun: value,
                        newsletterUrl: value === "Yes" ? prev.newsletterUrl : "",
                      }));
                      setErrors((prev) => {
                        const next = { ...prev };
                        delete next.newsletterRun;
                        delete next.newsletterUrl;
                        return next;
                      });
                    }}
                    className="block w-full rounded-md border border-neutral-300 px-4 py-2 text-neutral-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white"
                    aria-invalid={errors.newsletterRun ? true : undefined}
                    aria-describedby={
                      errors.newsletterRun ? "lead-newsletterRun-error" : undefined
                    }
                  >
                    <option value="">Select...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {errors.newsletterRun && (
                    <p
                      id="lead-newsletterRun-error"
                      className="mt-1 text-sm text-red-600"
                      role="alert"
                    >
                      {errors.newsletterRun}
                    </p>
                  )}
                </div>

                {form.newsletterRun === "Yes" && (
                  <Input
                    label="Newsletter URL"
                    name="newsletterUrl"
                    type="text"
                    autoComplete="off"
                    placeholder="https://yournewsletter.com"
                    value={form.newsletterUrl}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, newsletterUrl: e.target.value }))
                    }
                    error={errors.newsletterUrl}
                  />
                )}
              </div>
            </div>

            {/* Always-visible submit area */}
            <div className="flex-shrink-0 px-5 md:px-6 py-4 border-t border-neutral-100 bg-white">
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
              <p className="text-xs text-neutral-500 text-center mt-3">
                We&apos;ll review your information and reach out with next steps. No spam, ever.
              </p>
            </div>
          </form>

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
