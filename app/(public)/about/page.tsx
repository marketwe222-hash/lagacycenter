"use client";

import NextLink from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "1,200+", label: "Students coached" },
  { value: "7.5", label: "Average band score" },
  { value: "95%", label: "Reached target band" },
  { value: "8", label: "Years of experience" },
];

const VALUES = [
  {
    title: "Personalised coaching",
    desc: "Every learner gets feedback tailored to their level, target band, and timeline, never a one-size-fits-all course.",
  },
  {
    title: "Proven strategies",
    desc: "Our methods are built from years of exam analysis, so you practise exactly what the IELTS rewards.",
  },
  {
    title: "Real accountability",
    desc: "Progress tracking, mock exams, and tutor check-ins keep you moving toward your goal week after week.",
  },
  {
    title: "Accessible to all",
    desc: "From a free starter plan to 1-on-1 coaching, we make world-class preparation affordable in Cameroon.",
  },
];

const TEAM = [
  {
    name: "Aïcha N.",
    role: "Founder & Lead Instructor",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Daniel M.",
    role: "Speaking & Writing Coach",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Grace T.",
    role: "Reading & Listening Coach",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Samuel K.",
    role: "Student Success Lead",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&auto=format&fit=crop",
  },
];

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
function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 21s-6.7-4.35-9.33-8.07C.9 10.2 1.5 6.7 4.2 5.3c2-1.05 4.2-.4 5.4 1.2L12 9l2.4-2.5c1.2-1.6 3.4-2.25 5.4-1.2 2.7 1.4 3.3 4.9 1.53 7.63C18.7 16.65 12 21 12 21z" />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutPage() {
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
        <div className="relative z-10 mx-auto max-w-(--breakpoint-xl) px-6 sm:px-12">
          <div className="max-w-[640px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e05565]/40 bg-[#A11D2C]/30 px-4 py-1.5 mb-5">
              <HeartIcon className="h-3.5 w-3.5 text-[#e89aa4]" />
              <span className="text-[11px] font-bold tracking-[0.18em] text-[#e89aa4] uppercase">
                About Legacy Language Center
              </span>
            </div>
            <h1 className="text-[40px] sm:text-[54px] font-extrabold leading-[1.05] text-white mb-5">
              Helping Cameroon
              <br />
              speak to the <span className="text-[#e05565]">world</span>
            </h1>
            <p className="max-w-[520px] text-[15px] text-white/65 leading-relaxed">
              Based in Yaoundé, Legacy Language Center is dedicated to one
              mission: helping students achieve the IELTS band scores that open
              doors to universities, visas, and global careers.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="relative z-10 mx-auto max-w-(--breakpoint-xl) px-6 sm:px-12 -mt-12 pb-20">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-[#1A0E10]/80 p-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[34px] font-extrabold text-[#e05565]">
                {stat.value}
              </p>
              <p className="mt-1 text-[12.5px] font-medium text-white/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Story ── */}
      <section className="mx-auto max-w-(--breakpoint-xl) px-6 sm:px-12 pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80&auto=format&fit=crop"
              alt="Students learning together"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E10]/60 to-transparent" />
          </div>
          <div>
            <span className="text-[11px] font-bold tracking-[0.18em] text-[#e05565] uppercase">
              Our story
            </span>
            <h2 className="mt-3 text-[32px] font-extrabold leading-tight text-white">
              Built by educators who believe in potential
            </h2>
            <p className="mt-5 text-[14.5px] leading-relaxed text-white/65">
              Legacy Language Center started with a simple observation: talented
              students across Cameroon were being held back not by ability, but
              by access to quality IELTS preparation. We set out to change that.
            </p>
            <p className="mt-4 text-[14.5px] leading-relaxed text-white/65">
              Today we combine expert coaching, proven exam strategies, and
              personalised feedback to help every learner reach their target
              band, whether they're aiming for study abroad, migration, or a
              global career.
            </p>
            <NextLink
              href="/courses"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#A11D2C] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#861825]"
            >
              Explore our plans
              <ArrowRightIcon className="h-4 w-4" />
            </NextLink>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="border-t border-white/10 bg-[#1A0E10]/60 py-20">
        <div className="mx-auto max-w-(--breakpoint-xl) px-6 sm:px-12">
          <div className="mx-auto mb-12 max-w-[560px] text-center">
            <h2 className="text-[32px] font-extrabold text-white">
              What we stand for
            </h2>
            <p className="mt-3 text-[14px] text-white/55">
              The principles that guide every lesson, every plan, and every
              student relationship.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-[#04040f]/40 p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#A11D2C]/25">
                  <CheckIcon className="h-5 w-5 text-[#e05565]" />
                </span>
                <div>
                  <h3 className="text-[16px] font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/60">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="mx-auto max-w-(--breakpoint-xl) px-6 sm:px-12 py-20">
        <div className="mx-auto mb-12 max-w-[560px] text-center">
          <h2 className="text-[32px] font-extrabold text-white">
            Meet the team
          </h2>
          <p className="mt-3 text-[14px] text-white/55">
            Experienced coaches dedicated to your success in every IELTS skill.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#1A0E10]/80"
            >
              <div className="relative aspect-square overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[15.5px] font-bold text-white">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-[12.5px] text-[#e05565]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-legacy-gradient py-16">
        <div className="mx-auto max-w-(--breakpoint-xl) px-6 text-center">
          <h2 className="text-[28px] font-extrabold text-white">
            Ready to start your IELTS journey?
          </h2>
          <p className="mx-auto mt-3 max-w-[440px] text-[14px] text-white/65">
            Join over a thousand students who reached their target band with
            Legacy Language Center.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <NextLink
              href="/register"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[14px] font-bold text-[#A11D2C] transition-colors hover:bg-white/90"
            >
              Get started
              <ArrowRightIcon className="h-4 w-4" />
            </NextLink>
            <NextLink
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              Book a free trial
            </NextLink>
          </div>
        </div>
      </section>
    </main>
  );
}
