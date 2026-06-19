"use client";

import { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/useToast";

// ─── Icons ────────────────────────────────────────────────────────────────────

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

// ─── Shared branded panel ─────────────────────────────────────────────────────

function BrandPanel({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="relative hidden overflow-hidden bg-legacy-gradient lg:block">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(224,85,101,0.35) 0%, transparent 60%)",
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
            {title}
          </h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-white/70">
            {subtitle}
          </p>
        </div>
        <p className="text-[12px] text-white/40">
          Chapelle Obili, Yaoundé · +237 671 619 643
        </p>
      </div>
    </div>
  );
}

// ─── Reusable field ───────────────────────────────────────────────────────────

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

const inputCls =
  "w-full bg-transparent py-3 text-[14px] text-white placeholder-white/30 outline-none";

// ─── Component ────────────────────────────────────────────────────────────────

export default function LoginPage() {
  const router = useRouter();
  const { addToast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );
  const [loading, setLoading] = useState(false);

  function validate() {
    const next: typeof errors = {};
    if (!email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email.";
    if (!password) next.password = "Password is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      // TODO: replace with real login (e.g. await login(email, password))
      await new Promise((r) => setTimeout(r, 900));
      addToast("Welcome back!", "success");
      router.push("/dashboard");
    } catch {
      addToast("Invalid email or password.", "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      {/* Form side */}
      <div className="flex items-center justify-center bg-[#04040f] px-6 py-12">
        <div className="w-full max-w-[380px]">
          {/* Mobile logo */}
          <NextLink
            href="/"
            className="mb-8 inline-flex items-center gap-2.5 lg:hidden"
          >
            <LogoCheckIcon className="h-8 w-8 text-[#A11D2C]" />
            <span className="text-[15px] font-bold text-white">
              Legacy Language Center
            </span>
          </NextLink>

          <h1 className="text-[28px] font-extrabold text-white">Sign in</h1>
          <p className="mt-1.5 text-[13.5px] text-white/50">
            Welcome back, continue your IELTS journey.
          </p>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-8 flex flex-col gap-4"
          >
            <Field
              icon={<MailIcon className="h-4.5 w-4.5" />}
              error={errors.email}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((x) => ({ ...x, email: undefined }));
                }}
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((x) => ({ ...x, password: undefined }));
                  }}
                  placeholder="Your password"
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
              <div className="mt-2 text-right">
                <NextLink
                  href="/forgot-password"
                  className="text-[12px] font-medium text-[#e05565] hover:underline"
                >
                  Forgot password?
                </NextLink>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 rounded-lg bg-[#A11D2C] py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#861825] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="mt-7 text-center text-[13px] text-white/50">
            Don&apos;t have an account?{" "}
            <NextLink
              href="/register"
              className="font-semibold text-[#e05565] hover:underline"
            >
              Create one
            </NextLink>
          </p>
        </div>
      </div>

      {/* Brand side */}
      <BrandPanel
        title="Achieve your target IELTS band score."
        subtitle="Expert coaching across all four skills with proven strategies and personalised feedback."
      />
    </main>
  );
}
