"use client";

import { useState, useRef, useEffect } from "react";
import NextLink from "next/link";

// ─── Image columns ────────────────────────────────────────────────────────────

const COLUMNS = [
  // Left — fastest (14s)
  [
    {
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=80&auto=format&fit=crop",
      alt: "Students in library",
    },
    {
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&q=80&auto=format&fit=crop",
      alt: "Student at desk",
    },
    {
      url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&q=80&auto=format&fit=crop",
      alt: "Bright classroom",
    },
    {
      url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&q=80&auto=format&fit=crop",
      alt: "Students on campus",
    },
  ],
  // Middle — medium (20s)
  [
    {
      url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80&auto=format&fit=crop",
      alt: "Student writing notes",
    },
    {
      url: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=500&q=80&auto=format&fit=crop",
      alt: "International students",
    },
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&q=80&auto=format&fit=crop",
      alt: "Students collaborating",
    },
    {
      url: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&q=80&auto=format&fit=crop",
      alt: "Student taking notes",
    },
  ],
  // Right — slowest (28s)
  [
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80&auto=format&fit=crop",
      alt: "Group study",
    },
    {
      url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&q=80&auto=format&fit=crop",
      alt: "Books and study",
    },
    {
      url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&q=80&auto=format&fit=crop",
      alt: "Library session",
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80&auto=format&fit=crop",
      alt: "Student with books",
    },
  ],
];

const DURATIONS = ["54s", "60s", "68s"];

// ─── Skill details (popup content) ────────────────────────────────────────────

interface SkillRow {
  label: string;
  value: string;
}
interface SkillDetail {
  emoji: string;
  title: string;
  rows: SkillRow[];
}

const SKILL_DETAILS: Record<string, SkillDetail> = {
  Listening: {
    emoji: "🎧",
    title: "Listening Session",
    rows: [
      { label: "Format", value: "4 sections, 40 questions total." },
      {
        label: "Time",
        value: "~30 minutes (+10 min transfer time for paper tests).",
      },
      { label: "The catch", value: "You hear each audio track only once." },
      {
        label: "Content",
        value:
          "Everyday conversations, solo speeches, and lectures with international accents.",
      },
    ],
  },
  Reading: {
    emoji: "📖",
    title: "Reading Session",
    rows: [
      {
        label: "Academic",
        value:
          "3 long, complex passages · 40 questions · 60 min. Texts from journals & textbooks; tests advanced vocabulary (30/40 ≈ Band 7.0).",
      },
      {
        label: "General Training",
        value:
          "5 shorter texts in 3 sections · 40 questions · 60 min. Everyday 'survival' English; stricter scale (34/40 ≈ Band 7.0).",
      },
    ],
  },
  Writing: {
    emoji: "✍️",
    title: "Writing Session",
    rows: [
      {
        label: "Format",
        value: "2 distinct tasks · 60 minutes (you manage your own time).",
      },
      {
        label: "Task 1",
        value:
          "Describe a chart, graph, table, or diagram in your own words (min. 150 words). ~20 min.",
      },
      {
        label: "Task 2",
        value:
          "Essay responding to a point of view, argument, or problem (min. 250 words). ~40 min.",
      },
    ],
  },
  Speaking: {
    emoji: "🗣️",
    title: "Speaking Session",
    rows: [
      {
        label: "Format",
        value:
          "3-part face-to-face or video interview with a certified examiner · 11–14 min.",
      },
      {
        label: "The catch",
        value: "Every session is recorded for quality and grading.",
      },
      {
        label: "Part 1",
        value:
          "Small talk about familiar topics (home, family, work, hobbies).",
      },
      {
        label: "Part 2",
        value: "Topic card; 1 min to prepare a solo 2-min speech.",
      },
      {
        label: "Part 3",
        value: "Deeper, abstract discussion based on the Part 2 topic.",
      },
    ],
  },
};

const SKILLS = Object.keys(SKILL_DETAILS);

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
function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v5m0-8h.01" />
    </svg>
  );
}

// ─── Skill badge with hover/click popup ───────────────────────────────────────

// ─── Skill badge with hover/click popup (auto-flip top/bottom) ────────────────

function SkillBadge({ skill }: { skill: string }) {
  const detail = SKILL_DETAILS[skill];
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<"top" | "bottom">("bottom");
  const ref = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // Decide top vs bottom based on available viewport space
  function computePlacement() {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const popupHeight = popupRef.current?.offsetHeight ?? 240; // estimate before render
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    // Prefer bottom, but flip to top if not enough room below AND more room above
    if (spaceBelow < popupHeight + 16 && spaceAbove > spaceBelow) {
      setPlacement("top");
    } else {
      setPlacement("bottom");
    }
  }

  function show() {
    computePlacement();
    setOpen(true);
  }

  // Recompute after the popup mounts (real height) and on scroll/resize
  useEffect(() => {
    if (!open) return;
    computePlacement();
    window.addEventListener("scroll", computePlacement, { passive: true });
    window.addEventListener("resize", computePlacement);
    return () => {
      window.removeEventListener("scroll", computePlacement);
      window.removeEventListener("resize", computePlacement);
    };
  }, [open]);

  // Close on outside click / tap (mobile)
  useEffect(() => {
    if (!open) return;
    function handle(e: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    document.addEventListener("touchstart", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
      document.removeEventListener("touchstart", handle);
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isTop = placement === "top";

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-label={`${skill} details`}
        onClick={() => (open ? setOpen(false) : show())}
        className={[
          "inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors",
          open
            ? "border-[#e05565]/60 bg-[#A11D2C]/30 text-white"
            : "border-white/18 bg-white/7 text-white/80 hover:bg-white/12",
        ].join(" ")}
      >
        {skill}
        <InfoIcon className="h-3.5 w-3.5 text-[#e89aa4]" />
      </button>

      {/* Popup */}
      {open && (
        <div
          ref={popupRef}
          role="dialog"
          aria-label={detail.title}
          className={[
            "absolute left-0 z-30 w-[300px] rounded-xl border border-white/15 bg-[#1A0E10] p-4 shadow-2xl shadow-black/50",
            isTop
              ? "bottom-[calc(100%+10px)] origin-bottom-left"
              : "top-[calc(100%+10px)] origin-top-left",
          ].join(" ")}
        >
          {/* arrow — points toward the badge */}
          <span
            className={[
              "absolute left-6 h-3 w-3 rotate-45 border-white/15 bg-[#1A0E10]",
              isTop
                ? "-bottom-1.5 border-b border-r"
                : "-top-1.5 border-l border-t",
            ].join(" ")}
          />

          <div className="mb-2.5 flex items-center gap-2">
            <span className="text-[16px]">{detail.emoji}</span>
            <h3 className="text-[14px] font-bold text-white">{detail.title}</h3>
          </div>

          <ul className="flex flex-col gap-2">
            {detail.rows.map((row) => (
              <li key={row.label} className="text-[12px] leading-snug">
                <span className="font-semibold text-[#e05565]">
                  {row.label}:{" "}
                </span>
                <span className="text-white/70">{row.value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes hero-scroll-up {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .hero-col-inner {
          animation: hero-scroll-up linear infinite;
          will-change: transform;
        }
      `}</style>

      <section className="relative w-full min-h-screen overflow-hidden bg-[#1A0E10]">
        {/* ── Three image columns ── */}
        <div className="absolute inset-0 flex">
          {COLUMNS.map((images, colIdx) => (
            <div key={colIdx} className="flex-1 overflow-hidden">
              <div
                className="hero-col-inner flex flex-col"
                style={{ animationDuration: DURATIONS[colIdx] }}
              >
                {images.map((img) => (
                  <div
                    key={img.url}
                    className="relative w-full shrink-0"
                    style={{ aspectRatio: "2/3" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="h-full w-full object-cover"
                      loading={colIdx === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
                {images.map((img) => (
                  <div
                    key={img.url + "-dup"}
                    className="relative w-full shrink-0"
                    style={{ aspectRatio: "2/3" }}
                    aria-hidden
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.url}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Gradients ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, rgba(26,14,16,1.00) 0%, rgba(26,14,16,0.96) 15%, rgba(92,20,28,0.82) 32%, rgba(161,29,44,0.42) 52%, rgba(26,14,16,0.10) 100%)`,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(180deg, rgba(26,14,16,0.80) 0%, transparent 14%, transparent 86%, rgba(26,14,16,0.80) 100%)`,
          }}
        />

        {/* ── Text ── */}
        <div className="relative z-10 mx-auto max-w-(--breakpoint-xl) px-6 sm:px-12 pt-[118px] pb-20 flex items-center min-h-screen">
          <div className="max-w-[500px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e05565]/40 bg-[#A11D2C]/30 px-4 py-1.5 mb-5">
              <CertificateIcon className="h-3.5 w-3.5 text-[#e89aa4]" />
              <span className="text-[11px] font-bold tracking-[0.18em] text-[#e89aa4] uppercase">
                IELTS Preparation · Legacy Language Center
              </span>
            </div>

            <h1 className="text-[44px] sm:text-[58px] font-extrabold leading-[1.05] text-white mb-5">
              Achieve Your
              <br />
              Target <span className="text-[#e05565]">IELTS</span>
              <br />
              <span className="text-[#e05565]">Band Score</span>
            </h1>

            <p className="text-[15px] text-white/65 leading-relaxed mb-7 max-w-[400px]">
              Expert coaching in all four IELTS skills with proven strategies
              and personalised feedback. Helping you unlock universities, visas,
              and global career opportunities.
            </p>

            {/* Skill badges with popups */}
            <div className="flex flex-wrap gap-2 mb-3">
              {SKILLS.map((s) => (
                <SkillBadge key={s} skill={s} />
              ))}
            </div>
            <p className="mb-8 text-[11.5px] text-white/40">
              Hover or tap a skill to see exam details.
            </p>

            <div className="flex flex-wrap gap-3">
              <NextLink
                href="/register"
                className="inline-flex items-center gap-2 rounded-lg bg-[#A11D2C] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#861825]"
              >
                <ArrowRightIcon className="h-4 w-4" />
                Start your preparation
              </NextLink>
              <NextLink
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/22 bg-white/7 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white/14"
              >
                <CalendarIcon className="h-4 w-4" />
                Book a free trial class
              </NextLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
