"use client";

import NextLink from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const ENGLISH_EXAMS = [
  "IELTS",
  "TOEFL",
  "TOEIC",
  "GRE",
  "GMAT",
  "SAT",
  "PTE",
  "Duolingo English Test",
];

const FRENCH_EXAMS = [
  { name: "TCF", full: "Test de Connaissance du Français" },
  { name: "TEF Canada", full: "Test d'Évaluation de Français" },
];

const STATS = [
  { value: "240+", label: "Students enrolled" },
  { value: "8.5", label: "Avg. IELTS band" },
  { value: "10+", label: "Exam types covered" },
  { value: "95%", label: "Pass rate" },
];

// ─── Icons ────────────────────────────────────────────────────────────────────

function LanguageIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3 5h12M9 3v2m1.5 11-2.5-5-2.5 5m0 0H10m0 0h.5M14 11.5A9 9 0 0 0 22 3M14 3a9 9 0 0 0 7.5 13"
      />
    </svg>
  );
}
function FlagIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
      />
      <line x1="4" y1="22" x2="4" y2="15" strokeLinecap="round" />
    </svg>
  );
}
function SchoolIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 3L1 9l11 6 11-6-11-6zM1 9v8m22-8v8M5 11.5V17c0 1.66 3.13 3 7 3s7-1.34 7-3v-5.5"
      />
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

// ─── Sub-components ───────────────────────────────────────────────────────────

function ExamDot() {
  return (
    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e05565]" />
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Programs() {
  return (
    <section className="relative overflow-hidden bg-legacy-gradient">
      {/* subtle radial highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(161,29,44,0.30) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-(--breakpoint-xl) px-4 py-20 sm:px-6">
        {/* ── Section header ── */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#e05565]/40 bg-[#A11D2C]/30 px-4 py-1.5">
          <SchoolIcon className="h-3.5 w-3.5 text-[#e89aa4]" />
          <span className="text-[11px] font-bold tracking-[0.16em] text-[#e89aa4] uppercase">
            Our Programmes
          </span>
        </div>

        <h2 className="mb-3 text-[32px] font-extrabold leading-tight text-white sm:text-[36px]">
          International <span className="text-[#e05565]">Exam Preparation</span>
        </h2>
        <p className="mb-10 max-w-xl text-[15px] leading-relaxed text-white/60">
          Expert-led preparation for leading English and French proficiency
          exams, taught by certified instructors with proven results.
        </p>

        {/* ── Cards ── */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* English card */}
          <div className="group rounded-2xl border border-white/10 bg-[#1A0E10]/80 p-6 transition-colors hover:border-[#e05565]/40">
            <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e05565]/30 bg-[#A11D2C]/25">
                <LanguageIcon className="h-5 w-5 text-[#e05565]" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-white">
                  English Exams
                </p>
                <p className="text-[11.5px] text-white/40">
                  8 programmes + General English
                </p>
              </div>
            </div>

            {/* Exam grid */}
            <div className="mb-3 grid grid-cols-2 gap-2">
              {ENGLISH_EXAMS.map((exam) => (
                <div
                  key={exam}
                  className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.04] px-3 py-2.5 text-[12.5px] font-semibold text-white/70 transition-all hover:border-[#e05565]/40 hover:bg-[#A11D2C]/20 hover:text-white"
                >
                  <ExamDot />
                  {exam}
                </div>
              ))}
            </div>

            {/* General English strip */}
            <div className="flex items-center gap-2.5 rounded-lg border border-[#e05565]/25 bg-[#A11D2C]/15 px-3 py-2.5">
              <span className="shrink-0 rounded-md bg-[#A11D2C] px-2 py-0.5 text-[10px] font-bold text-white">
                + General English
              </span>
              <span className="text-[12px] text-white/55">
                A1 · A2 · B1 · B2 · C1 · C2 levels available
              </span>
            </div>
          </div>

          {/* French card */}
          <div className="group rounded-2xl border border-white/10 bg-[#1A0E10]/80 p-6 transition-colors hover:border-[#e05565]/40">
            <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e05565]/30 bg-[#A11D2C]/25">
                <FlagIcon className="h-5 w-5 text-[#e05565]" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-white">French Exams</p>
                <p className="text-[11.5px] text-white/40">2 programmes</p>
              </div>
            </div>

            {/* French exam list */}
            <div className="flex flex-col gap-2">
              {FRENCH_EXAMS.map((exam) => (
                <div
                  key={exam.name}
                  className="flex items-start gap-2.5 rounded-lg border border-white/8 bg-white/[0.04] px-3 py-3 transition-all hover:border-[#e05565]/40 hover:bg-[#A11D2C]/20"
                >
                  <ExamDot />
                  <div>
                    <p className="text-[13px] font-bold text-white">
                      {exam.name}
                    </p>
                    <p className="text-[11.5px] text-white/45">{exam.full}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6">
              <NextLink
                href="/courses"
                className="inline-flex items-center gap-2 rounded-lg border border-[#e05565]/30 bg-[#A11D2C]/20 px-4 py-2.5 text-[13px] font-semibold text-[#e05565] transition-colors hover:bg-[#A11D2C]/30"
              >
                View all programmes
                <ArrowRightIcon className="h-4 w-4" />
              </NextLink>
            </div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-[#1A0E10]/80 px-4 py-4 text-center"
            >
              <p className="text-[24px] font-extrabold text-[#e05565]">
                {stat.value}
              </p>
              <p className="mt-1 text-[11.5px] text-white/45">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
