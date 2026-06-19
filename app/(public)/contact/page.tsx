"use client";

import { useState } from "react";
import NextLink from "next/link";
import { useToast } from "@/hooks/useToast";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SUBJECTS = [
  "General enquiry",
  "Book a free trial class",
  "Course & pricing info",
  "Technical support",
  "Partnership",
];

const HOURS = [
  { day: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

// ─── Icons ────────────────────────────────────────────────────────────────────

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"
      />
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
function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
    </svg>
  );
}
function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M5 12h14M12 5l7 7-7 7"
      />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: SUBJECTS[0],
  message: "",
};

export default function ContactPage() {
  const { addToast } = useToast();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email.";
    }
    if (!form.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      // TODO: wire to your API route, e.g. POST /api/contact
      await new Promise((r) => setTimeout(r, 900));
      addToast("Message sent! We'll get back to you shortly.", "success");
      setForm(EMPTY);
    } catch {
      addToast("Something went wrong. Please try again.", "error");
    } finally {
      setSubmitting(false);
    }
  }

  const inputBase =
    "w-full rounded-lg border bg-[#04040f]/60 px-4 py-3 text-[14px] text-white placeholder-white/30 outline-none transition-colors focus:border-[#e05565]";

  return (
    <main className="min-h-screen bg-[#04040f]">
      {/* ── Hero band ── */}
      {/* pt-[118px] clears the fixed header (30px bar + 64px nav + 24px breathing) */}
      <section className="relative overflow-hidden bg-legacy-gradient pt-[118px] pb-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(161,29,44,0.35) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-(--breakpoint-xl) px-6 sm:px-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e05565]/40 bg-[#A11D2C]/30 px-4 py-1.5 mb-5">
            <MailIcon className="h-3.5 w-3.5 text-[#e89aa4]" />
            <span className="text-[11px] font-bold tracking-[0.18em] text-[#e89aa4] uppercase">
              Get in touch
            </span>
          </div>
          <h1 className="text-[40px] sm:text-[54px] font-extrabold leading-[1.05] text-white mb-5">
            Let&apos;s talk about your{" "}
            <span className="text-[#e05565]">goals</span>
          </h1>
          <p className="mx-auto max-w-[520px] text-[15px] text-white/65 leading-relaxed">
            Questions about courses, pricing, or booking a free trial class?
            Reach out, our team in Yaoundé is happy to help.
          </p>
        </div>
      </section>

      {/* ── Contact grid ── */}
      <section className="relative z-10 mx-auto max-w-(--breakpoint-xl) px-6 sm:px-12 -mt-12 pb-24">
        <div className="grid gap-6 lg:grid-cols-5">
          {/* ── Form (3/5) ── */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-white/10 bg-[#1A0E10]/80 p-7 sm:p-8"
            >
              <h2 className="text-[20px] font-extrabold text-white">
                Send us a message
              </h2>
              <p className="mt-1 text-[13px] text-white/50">
                We typically reply within one business day.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="mb-1.5 block text-[12.5px] font-semibold text-white/70">
                    Full name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your name"
                    className={`${inputBase} ${errors.name ? "border-red-500/70" : "border-white/12"}`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-[11.5px] text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1.5 block text-[12.5px] font-semibold text-white/70">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@example.com"
                    className={`${inputBase} ${errors.email ? "border-red-500/70" : "border-white/12"}`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11.5px] text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-1.5 block text-[12.5px] font-semibold text-white/70">
                    Phone <span className="text-white/30">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+237 6XX XXX XXX"
                    className={`${inputBase} border-white/12`}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="mb-1.5 block text-[12.5px] font-semibold text-white/70">
                    Subject
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    className={`${inputBase} border-white/12`}
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s} className="bg-[#1A0E10]">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label className="mb-1.5 block text-[12.5px] font-semibold text-white/70">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell us how we can help…"
                  className={`${inputBase} resize-none ${errors.message ? "border-red-500/70" : "border-white/12"}`}
                />
                {errors.message && (
                  <p className="mt-1 text-[11.5px] text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#A11D2C] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#861825] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send message"}
                {!submitting && <ArrowRightIcon className="h-4 w-4" />}
              </button>
            </form>
          </div>

          {/* ── Info (2/5) ── */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* Contact details */}
            <div className="rounded-2xl border border-white/10 bg-[#1A0E10]/80 p-7">
              <h3 className="text-[16px] font-bold text-white">
                Contact details
              </h3>
              <ul className="mt-5 flex flex-col gap-5">
                <li className="flex gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#A11D2C]/25">
                    <MapPinIcon className="h-4.5 w-4.5 text-[#e05565]" />
                  </span>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-wide text-white/40">
                      Location
                    </p>
                    <p className="mt-0.5 text-[13.5px] text-white/80">
                      Chapelle Obili, Yaoundé
                    </p>
                  </div>
                </li>
                <li className="flex gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#A11D2C]/25">
                    <PhoneIcon className="h-4.5 w-4.5 text-[#e05565]" />
                  </span>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-wide text-white/40">
                      Phone
                    </p>
                    <a
                      href="tel:+237671619643"
                      className="mt-0.5 block text-[13.5px] text-white/80 hover:text-white"
                    >
                      +237 671 619 643
                    </a>
                    <a
                      href="tel:+237680148076"
                      className="block text-[13.5px] text-white/80 hover:text-white"
                    >
                      +237 680 148 076
                    </a>
                  </div>
                </li>
                <li className="flex gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#A11D2C]/25">
                    <MailIcon className="h-4.5 w-4.5 text-[#e05565]" />
                  </span>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-wide text-white/40">
                      Email
                    </p>
                    <a
                      href="mailto:hello@legacycenter.cm"
                      className="mt-0.5 block text-[13.5px] text-white/80 hover:text-white"
                    >
                      hello@legacycenter.cm
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div className="rounded-2xl border border-white/10 bg-[#1A0E10]/80 p-7">
              <div className="flex items-center gap-2.5">
                <ClockIcon className="h-4.5 w-4.5 text-[#e05565]" />
                <h3 className="text-[16px] font-bold text-white">
                  Opening hours
                </h3>
              </div>
              <ul className="mt-4 flex flex-col gap-2.5">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between text-[13px]"
                  >
                    <span className="text-white/60">{h.day}</span>
                    <span className="font-semibold text-white/85">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Map ── */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="Legacy Language Center location"
            src="https://www.google.com/maps?q=Obili,Yaound%C3%A9,Cameroon&output=embed"
            className="h-[360px] w-full grayscale-[0.2]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-legacy-gradient py-16">
        <div className="mx-auto max-w-(--breakpoint-xl) px-6 text-center">
          <h2 className="text-[28px] font-extrabold text-white">
            Prefer to start right away?
          </h2>
          <p className="mx-auto mt-3 max-w-[440px] text-[14px] text-white/65">
            Create your free account and explore the platform in minutes.
          </p>
          <NextLink
            href="/register"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[14px] font-bold text-[#A11D2C] transition-colors hover:bg-white/90"
          >
            Get started for free
            <ArrowRightIcon className="h-4 w-4" />
          </NextLink>
        </div>
      </section>
    </main>
  );
}
