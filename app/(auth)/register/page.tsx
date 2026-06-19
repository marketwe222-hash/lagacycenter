"use client";

import { Suspense, useState } from "react";
import NextLink from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/hooks/useToast";
import { PLANS, formatPrice } from "@/lib/plans";

// ─── Icons ────────────────────────────────────────────────────────────────────

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <circle cx="12" cy="8" r="4" />
      <path strokeLinecap="round" d="M4 20c0-4 3.58-7 8-7s8 3 8 7" />
    </svg>
  );
}
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
    </svg>
  );
}
function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path strokeLinecap="round" d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function EyeOffIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3l18 18M10.6 10.6a3 3 0 0 0 4.2 4.2M9.9 4.6A9.5 9.5 0 0 1 12 4.4c6.5 0 10 7 10 7a17 17 0 0 1-3.3 4M6.6 6.6A17 17 0 0 0 2 11.4s3.5 7 10 7a9.5 9.5 0 0 0 3.1-.5"
      />
    </svg>
  );
}
function LogoCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 36 36" fill="none" {...props}>
      <rect width="36" height="36" rx="8" fill="currentColor" />
      <path
        d="M10 18.5l5.5 5.5 10.5-11"
        stroke="#fff"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 12H5M12 19l-7-7 7-7"
      />
    </svg>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function passwordStrength(pw: string): {
  score: number;
  label: string;
  color: string;
} {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  const labels = ["Too weak", "Weak", "Fair", "Good", "Strong"];
  const colors = [
    "bg-[#A11D2C]",
    "bg-[#A11D2C]",
    "bg-amber-500",
    "bg-emerald-500",
    "bg-emerald-500",
  ];
  return { score, label: labels[score], color: colors[score] };
}

const inputCls =
  "w-full bg-transparent py-3 text-[14px] text-white placeholder-white/30 outline-none";

function Field({
  icon,
  error,
  children,
}: {
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        className={[
          "flex items-center gap-2.5 rounded-lg border bg-[#04040f]/60 px-3.5 transition-colors focus-within:border-[#e05565]",
          error ? "border-red-500/70" : "border-white/12",
        ].join(" ")}
      >
        <span className="text-white/40">{icon}</span>
        {children}
      </div>
      {error && <p className="mt-1 text-[11.5px] text-red-400">{error}</p>}
    </div>
  );
}

function BackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => {
        // Use real browser history when there is somewhere to go back to,
        // otherwise fall back to the plans page so the button always does
        // something sensible (e.g. direct link / new tab to /register).
        if (typeof window !== "undefined" && window.history.length > 1) {
          router.back();
        } else {
          router.push("/courses");
        }
      }}
      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/50 transition-colors hover:text-white"
    >
      <ArrowLeftIcon className="h-4 w-4" />
      Back
    </button>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  password: string;
  confirm: string;
  agree: boolean;
}

function RegisterForm() {
  const router = useRouter();
  const params = useSearchParams();

  // Course/plan is driven by ?plan=<slug>, e.g. coming from the CTA on /courses.
  // If it's missing or doesn't match anything, default to the first plan
  // (Starter) so every registration is always associated with a course.
  const planSlug = params.get("plan");
  const selectedPlan = PLANS.find((p) => p.slug === planSlug) ?? PLANS[0];

  const { addToast } = useToast();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    confirm: "",
    agree: false,
  });
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [loading, setLoading] = useState(false);

  const strength = passwordStrength(form.password);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email.";
    if (form.password.length < 8) next.password = "At least 8 characters.";
    if (form.confirm !== form.password) next.confirm = "Passwords don't match.";
    if (!form.agree) next.agree = "You must accept the terms.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      // TODO: replace with real register call, e.g.
      // await register({ ...form, plan: selectedPlan.slug })
      await new Promise((r) => setTimeout(r, 900));
      addToast(
        "Account created! Welcome to Legacy Language Center.",
        "success",
      );
      router.push("/dashboard");
    } catch {
      addToast("Could not create account. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      {/* Brand side (left on register for variety) */}
      <div className="relative order-2 hidden overflow-hidden bg-legacy-gradient lg:order-1 lg:block">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, rgba(224,85,101,0.35) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-between p-12">
          <div className="inline-flex items-center gap-2.5">
            <LogoCheckIcon className="h-8 w-8 text-[#A11D2C]" />
            <span className="text-[15px] font-bold text-white">
              Legacy Language Center
            </span>
          </div>
          <div className="max-w-[360px]">
            <h2 className="text-[34px] font-extrabold leading-tight text-white">
              Start free. Upgrade when you&apos;re ready.
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-white/70">
              Join over a thousand students reaching their target band score
              with expert coaching.
            </p>
          </div>
          <p className="text-[12px] text-white/40">
            Chapelle Obili, Yaoundé · +237 671 619 643
          </p>
        </div>
      </div>

      {/* Form side */}
      <div className="order-1 flex items-center justify-center bg-[#04040f] px-6 py-12 lg:order-2">
        <div className="w-full max-w-[380px]">
          <div className="mb-7 flex items-center justify-between">
            <NextLink
              href="/"
              className="inline-flex items-center gap-2.5 lg:hidden"
            >
              <LogoCheckIcon className="h-8 w-8 text-[#A11D2C]" />
              <span className="text-[15px] font-bold text-white">
                Legacy Language Center
              </span>
            </NextLink>
            <BackButton />
          </div>

          <h1 className="text-[28px] font-extrabold text-white">
            Create account
          </h1>
          <p className="mt-1.5 text-[13.5px] text-white/50">
            It only takes a minute to get started.
          </p>

          {/* Selected plan summary — always shows a course, defaults to Starter */}
          <div className="mt-5 flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-[#1A0E10]/60 px-4 py-3">
            <div className="min-w-0">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/40">
                Selected plan
              </p>
              <p className="truncate text-[14px] font-bold text-white">
                {selectedPlan.name}{" "}
                <span className="font-medium text-white/50">
                  ·{" "}
                  {selectedPlan.price === 0
                    ? "Free"
                    : `${formatPrice(selectedPlan.price)} CFA/mo`}
                </span>
              </p>
            </div>
            <NextLink
              href="/courses"
              className="shrink-0 text-[12.5px] font-semibold text-[#e05565] hover:underline"
            >
              Change
            </NextLink>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-6 flex flex-col gap-4"
          >
            <Field
              icon={<UserIcon className="h-4.5 w-4.5" />}
              error={errors.name}
            >
              <input
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Full name"
                className={inputCls}
              />
            </Field>

            <Field
              icon={<MailIcon className="h-4.5 w-4.5" />}
              error={errors.email}
            >
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
                className={inputCls}
              />
            </Field>

            <div>
              <Field
                icon={<LockIcon className="h-4.5 w-4.5" />}
                error={errors.password}
              >
                <input
                  type={show ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => update("password", e.target.value)}
                  placeholder="Create a password"
                  className={inputCls}
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  aria-label={show ? "Hide password" : "Show password"}
                  className="text-white/40 transition-colors hover:text-white"
                >
                  {show ? (
                    <EyeOffIcon className="h-4.5 w-4.5" />
                  ) : (
                    <EyeIcon className="h-4.5 w-4.5" />
                  )}
                </button>
              </Field>
              {/* Strength meter */}
              {form.password && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex h-1 flex-1 gap-1">
                    {[0, 1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className={`flex-1 rounded-full transition-colors ${i < strength.score ? strength.color : "bg-white/10"}`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-white/50">
                    {strength.label}
                  </span>
                </div>
              )}
            </div>

            <Field
              icon={<LockIcon className="h-4.5 w-4.5" />}
              error={errors.confirm}
            >
              <input
                type={show ? "text" : "password"}
                value={form.confirm}
                onChange={(e) => update("confirm", e.target.value)}
                placeholder="Confirm password"
                className={inputCls}
              />
            </Field>

            {/* Terms */}
            <label className="flex items-start gap-2.5 text-[12.5px] text-white/60">
              <input
                type="checkbox"
                checked={form.agree}
                onChange={(e) => update("agree", e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-transparent accent-[#A11D2C]"
              />
              <span>
                I agree to the{" "}
                <NextLink
                  href="/terms"
                  className="font-medium text-[#e05565] hover:underline"
                >
                  Terms
                </NextLink>{" "}
                and{" "}
                <NextLink
                  href="/privacy"
                  className="font-medium text-[#e05565] hover:underline"
                >
                  Privacy Policy
                </NextLink>
                .
              </span>
            </label>
            {errors.agree && (
              <p className="-mt-2 text-[11.5px] text-red-400">{errors.agree}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-1 rounded-lg bg-[#A11D2C] py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#861825] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating account…" : "Create account"}
            </button>
          </form>

          <p className="mt-7 text-center text-[13px] text-white/50">
            Already have an account?{" "}
            <NextLink
              href="/login"
              className="font-semibold text-[#e05565] hover:underline"
            >
              Sign in
            </NextLink>
          </p>
        </div>
      </div>
    </main>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={null}>
      <RegisterForm />
    </Suspense>
  );
}
