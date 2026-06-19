"use client";

import NextLink from "next/link";

// ─── Icons ────────────────────────────────────────────────────────────────────

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
function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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

const TRUST = [
  "Start free, no card required",
  "Cancel anytime",
  "Expert certified tutors",
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function CtaBanner() {
  return (
    <section className="bg-[#04040f] px-4 py-20 sm:px-6">
      <div className="relative mx-auto max-w-(--breakpoint-xl) overflow-hidden rounded-3xl border border-[#e05565]/25 bg-legacy-gradient px-6 py-16 sm:px-12">
        {/* glow accents */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(224,85,101,0.35) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(161,29,44,0.4) 0%, transparent 50%)",
          }}
        />
        {/* faint grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
            <SparkleIcon className="h-3.5 w-3.5 text-[#e89aa4]" />
            <span className="text-[11px] font-bold tracking-[0.18em] text-white/90 uppercase">
              Your target band is within reach
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[34px] font-extrabold leading-[1.1] text-white sm:text-[44px]">
            Ready to achieve your{" "}
            <span className="text-[#e89aa4]">dream score?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
            Join hundreds of students at Legacy Language Center and start your
            preparation today, with a free plan and expert coaching when
            you&apos;re ready.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <NextLink
              href="/register"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-[14.5px] font-bold text-[#A11D2C] transition-colors hover:bg-white/90"
            >
              Start for free
              <ArrowRightIcon className="h-4 w-4" />
            </NextLink>
            <NextLink
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 text-[14.5px] font-semibold text-white transition-colors hover:bg-white/20"
            >
              <CalendarIcon className="h-4 w-4" />
              Book a free trial class
            </NextLink>
          </div>

          {/* Trust signals */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {TRUST.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 text-[12.5px] text-white/65"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/15">
                  <CheckIcon className="h-2.5 w-2.5 text-[#e89aa4]" />
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
