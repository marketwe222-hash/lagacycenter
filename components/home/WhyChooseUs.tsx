"use client";

import NextLink from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Feature {
  title: string;
  desc: string;
  icon: (p: React.SVGProps<SVGSVGElement>) => React.ReactElement;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function TeacherIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <circle cx="12" cy="7" r="3.5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 21c0-4 3.6-7 8-7s8 3 8 7"
      />
      <path strokeLinecap="round" d="M18 3l3 1.2-3 1.2" />
    </svg>
  );
}
function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
function ChartIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4 20V10M10 20V4M16 20v-7M22 20H2"
      />
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
function BookIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4 5a2 2 0 0 1 2-2h11v16H6a2 2 0 0 0-2 2zM17 3h1a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2h-1"
      />
    </svg>
  );
}
function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
    </svg>
  );
}
function SparkleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2z" />
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
function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7 7H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2H3v2h1a4 4 0 0 0 4-4V9a2 2 0 0 0-1-2zm13 0h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V9a2 2 0 0 0-1-2z" />
    </svg>
  );
}

const FEATURES: Feature[] = [
  {
    title: "Certified expert tutors",
    desc: "Learn from instructors with years of exam coaching experience and proven track records.",
    icon: TeacherIcon,
  },
  {
    title: "Personalised study plans",
    desc: "Every learner gets a plan tailored to their level, target band, and timeline, never one-size-fits-all.",
    icon: TargetIcon,
  },
  {
    title: "Real progress tracking",
    desc: "Mock exams, scored practice, and dashboards keep you moving toward your goal week after week.",
    icon: ChartIcon,
  },
  {
    title: "Flexible schedules",
    desc: "Morning, evening, and weekend classes, plus self-paced lessons that fit around work and study.",
    icon: ClockIcon,
  },
  {
    title: "Proven exam strategies",
    desc: "Practise exactly what the exam rewards, built from years of analysing IELTS and other tests.",
    icon: BookIcon,
  },
  {
    title: "Results you can trust",
    desc: "A 95% pass rate and hundreds of students who reached their target band score.",
    icon: ShieldIcon,
  },
];

const HIGHLIGHTS = [
  { value: "95%", label: "Pass rate" },
  { value: "1,200+", label: "Students coached" },
  { value: "8.5", label: "Avg. IELTS band" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#04040f]">
      {/* radial highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(161,29,44,0.22) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-(--breakpoint-xl) px-4 py-20 sm:px-6">
        {/* ── Header ── */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#e05565]/40 bg-[#A11D2C]/30 px-4 py-1.5">
          <SparkleIcon className="h-3.5 w-3.5 text-[#e89aa4]" />
          <span className="text-[11px] font-bold tracking-[0.16em] text-[#e89aa4] uppercase">
            Why Choose Us
          </span>
        </div>

        <h2 className="mb-3 max-w-2xl text-[32px] font-extrabold leading-tight text-white sm:text-[36px]">
          The smarter way to reach your{" "}
          <span className="text-[#e05565]">target score</span>
        </h2>
        <p className="mb-12 max-w-xl text-[15px] leading-relaxed text-white/60">
          Everything about Legacy Language Center is built around one outcome:
          helping you pass with confidence.
        </p>

        {/* ── Feature grid ── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/10 bg-[#1A0E10]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e05565]/40"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#e05565]/30 bg-[#A11D2C]/25 transition-colors group-hover:bg-[#A11D2C]/40">
                  <Icon className="h-5 w-5 text-[#e05565]" />
                </div>
                <h3 className="text-[15.5px] font-bold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── Highlight / testimonial strip ── */}
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {/* Testimonial */}
          <div className="rounded-2xl border border-[#e05565]/25 bg-[#A11D2C]/15 p-7 lg:col-span-2">
            <QuoteIcon className="h-7 w-7 text-[#e05565]/60" />
            <p className="mt-3 text-[16px] font-medium leading-relaxed text-white/90">
              “I went from a 6.0 to a 7.5 in eight weeks. The personalised
              feedback on my writing and speaking made all the difference.”
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A11D2C] text-[13px] font-bold text-white">
                MF
              </span>
              <div>
                <p className="text-[13.5px] font-semibold text-white">
                  Mireille Fotso
                </p>
                <p className="text-[12px] text-white/45">
                  IELTS Academic · Band 7.5
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.label}
                className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#1A0E10]/80 px-3 py-4 text-center lg:flex-row lg:justify-between lg:px-5"
              >
                <p className="text-[24px] font-extrabold text-[#e05565]">
                  {h.value}
                </p>
                <p className="mt-1 text-[11.5px] text-white/45 lg:mt-0 lg:text-[13px]">
                  {h.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#1A0E10]/80 px-7 py-6">
          <div>
            <p className="text-[17px] font-bold text-white">
              Ready to start your preparation?
            </p>
            <p className="mt-1 text-[13px] text-white/50">
              Join hundreds of students reaching their target band score.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <NextLink
              href="/register"
              className="inline-flex items-center gap-2 rounded-lg bg-[#A11D2C] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#861825]"
            >
              Get started
              <ArrowRightIcon className="h-4 w-4" />
            </NextLink>
            <NextLink
              href="/courses"
              className="inline-flex items-center gap-2 rounded-lg border border-white/22 bg-white/7 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white/14"
            >
              View plans
            </NextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
