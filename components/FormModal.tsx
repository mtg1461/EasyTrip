"use client";

import { Dispatch, SetStateAction, useEffect } from "react";
import { Check } from "lucide-react";

type FormData = {
  email: string;
  // optional fields (not required)
  role?: string;
  city?: string;
  // single required consent
  contactConsent: boolean;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  showSuccess: boolean;
};

export default function FormModal({
  open,
  onClose,
  onSubmit,
  formData,
  setFormData,
  showSuccess,
}: Props) {
  if (!open) return null;

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const titleId = "easytrip-dialog-title";
  const descId = "easytrip-dialog-desc";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      {/* overlay (click to close) */}
      <button
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label="Close form"
        tabIndex={-1}
      />

      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-lg bg-white p-6 shadow-lg">
        {showSuccess ? (
          <div className="text-center" aria-live="polite">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
              <Check className="h-6 w-6 text-emerald-700" />
            </div>
            <h3 className="text-xl font-semibold">You're in!</h3>
            <p className="mt-2 text-slate-600">
              Check your email for your preview link and next steps.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between">
              <h3 id={titleId} className="text-xl font-semibold">
                See EasyTrip in action
              </h3>
              <button
                onClick={onClose}
                className="text-3xl text-slate-800 hover:text-slate-600"
                aria-label="Close form"
              >
                ×
              </button>
            </div>

            <p id={descId} className="sr-only">
              Enter your email to receive a short preview. Not an emergency
              service.
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
              {/* Email (only required field) */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-slate-300 p-3 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, email: e.target.value }))
                  }
                />
              </div>

              {/* Optional fields in a native disclosure */}
              <details className="rounded-lg border border-slate-200 p-3 open:bg-slate-50">
                <summary className="cursor-pointer text-sm font-medium text-slate-700">
                  Add role and city (optional)
                </summary>
                <div className="mt-3 space-y-3">
                  <div>
                    <label
                      htmlFor="role"
                      className="mb-1 block text-sm font-medium"
                    >
                      Role (optional)
                    </label>
                    <select
                      id="role"
                      name="role"
                      className="w-full rounded-lg border border-slate-300 p-3 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                      value={formData.role ?? ""}
                      onChange={(e) =>
                        setFormData((d) => ({ ...d, role: e.target.value }))
                      }
                    >
                      <option value="">Select your role</option>
                      <option value="Caregiver">Caregiver</option>
                      <option value="Support Professional">
                        Support Professional
                      </option>
                      <option value="Autistic Adult">Autistic Adult</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="mb-1 block text-sm font-medium"
                    >
                      City / Metro (optional)
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="e.g., Seattle, WA"
                      autoComplete="address-level2"
                      className="w-full rounded-lg border border-slate-300 p-3 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                      value={formData.city ?? ""}
                      onChange={(e) =>
                        setFormData((d) => ({ ...d, city: e.target.value }))
                      }
                    />
                  </div>
                </div>
              </details>

              {/* Single required consent */}
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1"
                  checked={formData.contactConsent}
                  onChange={(e) =>
                    setFormData((d) => ({
                      ...d,
                      contactConsent: e.target.checked,
                    }))
                  }
                />
                <span className="text-sm">
                  I agree to be contacted about EasyTrip previews and updates.
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-600 py-3 font-semibold text-white transition-colors duration-200 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                data-event="form_submit"
              >
                See EasyTrip in action
              </button>

              <p className="text-center text-xs text-slate-500">
                Not an emergency service.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
