"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import NextLink from "next/link";

// ─── Slide data ───────────────────────────────────────────────────────────────

const SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1400&q=80&auto=format&fit=crop",
    alt: "Students studying in a university library",
  },
  {
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400&q=80&auto=format&fit=crop",
    alt: "Bright classroom with engaged students",
  },
  {
    url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1400&q=80&auto=format&fit=crop",
    alt: "Student focused on writing exam notes",
  },
  {
    url: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1400&q=80&auto=format&fit=crop",
    alt: "Group of international students",
  },
];

const INTERVAL_MS = 8000;

// ─── Icons ────────────────────────────────────────────────────────────────────

function CertificateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <circle cx="12" cy="8" r="6" />
      <path strokeLinecap="round" d="M8.56 14.3 7 22l5-3 5 3-1.56-7.7" />
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

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
    </svg>
  );
}

// ─── IELTS skill badges ───────────────────────────────────────────────────────

const SKILLS = [
  { label: "Listening" },
  { label: "Reading" },
  { label: "Writing" },
  { label: "Speaking" },
];

// ─── Component ────────────────────────────────────────────────────────────────
// NOTE: The public layout must NOT add a top padding/margin — this hero sits
// directly under the fixed navbar. The hero itself has pt-[110px] to clear
// the stacked top-bar (30px) + navbar (~64px) + a little breathing room.

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const handleManual = (fn: () => void) => {
    if (timerRef.current) clearInterval(timerRef.current);
    fn();
    timerRef.current = setInterval(next, INTERVAL_MS);
  };

  return (
    <section className="relative w-full min-h-[620px] sm:min-h-[680px] overflow-hidden bg-[#1A0E10]">
      {/* ── Background slides ── */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.url}
          aria-hidden={i !== current}
          className={[
            "absolute inset-0 transition-opacity duration-1000",
            i === current ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.url}
            alt={slide.alt}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* ── Left-to-right gradient in brand crimson tones ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(26,14,16,0.95) 0%, rgba(92,20,28,0.80) 40%, rgba(161,29,44,0.25) 70%, rgba(26,14,16,0.05) 100%)",
        }}
      />

      {/* ── Content — pushed down to clear the fixed navbar ── */}
      {/* top-bar ≈ 30px + navbar ≈ 64px = 94px; add 24px breathing room */}
      <div className="relative z-10 mx-auto max-w-(--breakpoint-xl) px-6 sm:px-10 pt-[118px] pb-20 flex items-center min-h-[620px] sm:min-h-[680px]">
        <div className="max-w-[500px]">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e05565]/40 bg-[#A11D2C]/30 px-4 py-1.5 mb-5">
            <CertificateIcon className="h-3.5 w-3.5 text-[#e89aa4]" />
            <span className="text-[11px] font-bold tracking-[0.18em] text-[#e89aa4] uppercase">
              IELTS Preparation · Legacy Language Center
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[38px] sm:text-[48px] font-extrabold leading-[1.1] text-white mb-4">
            Achieve Your Target{" "}
            <span className="text-[#e05565]">IELTS Band Score</span>
          </h1>

          {/* Sub */}
          <p className="text-[15px] text-white/70 leading-relaxed mb-6 max-w-[440px]">
            Expert coaching in all four IELTS skills with proven strategies and
            personalised feedback to help you reach your goal band and unlock
            global opportunities.
          </p>

          {/* Skill badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {SKILLS.map((s) => (
              <span
                key={s.label}
                className="rounded-lg border border-white/20 bg-white/8 px-3.5 py-1.5 text-[12.5px] font-semibold text-white/85"
              >
                {s.label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <NextLink
              href="/register"
              className="inline-flex items-center gap-2 rounded-lg bg-[#A11D2C] px-5 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#861825]"
            >
              <ArrowRightIcon className="h-4 w-4" />
              Start your preparation
            </NextLink>
            <NextLink
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/8 px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white/15"
            >
              <CalendarIcon className="h-4 w-4" />
              Book a free trial class
            </NextLink>
          </div>
        </div>
      </div>

      {/* ── Avg band score card ── */}
      <div className="absolute bottom-8 right-8 z-10 hidden sm:block rounded-xl border border-white/15 bg-[#1A0E10]/70 px-5 py-4 text-center backdrop-blur-sm">
        <p className="text-[30px] font-extrabold text-[#e05565] leading-none">
          8.5
        </p>
        <p className="mt-1 text-[11px] font-medium text-white/50 leading-snug">
          avg. band
          <br />
          achieved
        </p>
      </div>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-8 left-6 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => handleManual(() => goTo(i))}
            className={[
              "h-2 rounded-full transition-all duration-300",
              i === current
                ? "w-6 bg-[#e05565]"
                : "w-2 bg-white/25 hover:bg-white/50",
            ].join(" ")}
          />
        ))}
      </div>

      {/* ── Prev / Next arrows ── */}
      <div className="absolute bottom-5 right-36 z-10 flex gap-2">
        <button
          aria-label="Previous slide"
          onClick={() => handleManual(prev)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#1A0E10]/50 text-white transition-colors hover:bg-[#A11D2C]/70"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        <button
          aria-label="Next slide"
          onClick={() => handleManual(next)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#1A0E10]/50 text-white transition-colors hover:bg-[#A11D2C]/70"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
