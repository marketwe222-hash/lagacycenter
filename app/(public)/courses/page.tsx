"use client";

import NextLink from "next/link";

// ─── Pricing data ───────────────────────────────────────────────────────────

interface Plan {
  name: string;
  tagline: string;
  price: number; // CFA per month (0 = free)
  highlight?: boolean;
  badge?: string;
  cta: string;
  href: string;
  features: string[];
}

const PLANS: Plan[] = [
  {
    name: "Starter",
    tagline: "Try IELTS prep at no cost",
    price: 0,
    cta: "Start for free",
    href: "/register",
    features: [
      "1 skill module (Listening)",
      "5 practice exercises / month",
      "Community forum access",
      "Basic progress tracking",
      "Mobile & desktop access",
    ],
  },
  {
    name: "Essential",
    tagline: "Build a solid foundation",
    price: 10000,
    cta: "Choose Essential",
    href: "/register?plan=essential",
    features: [
      "All 4 skills (Listening, Reading, Writing, Speaking)",
      "Unlimited practice exercises",
      "Weekly group lessons",
      "Detailed progress tracking",
      "Downloadable study materials",
      "Email support",
    ],
  },
  {
    name: "Pro",
    tagline: "Most popular for serious learners",
    price: 30000,
    highlight: true,
    badge: "Most popular",
    cta: "Choose Pro",
    href: "/register?plan=pro",
    features: [
      "Everything in Essential",
      "2 live tutor sessions / week",
      "Personalised feedback on Writing & Speaking",
      "Full-length mock exams",
      "Band score prediction",
      "Priority support",
    ],
  },
  {
    name: "Premium",
    tagline: "Maximum support & 1-on-1 coaching",
    price: 50000,
    cta: "Choose Premium",
    href: "/register?plan=premium",
    features: [
      "Everything in Pro",
      "Daily 1-on-1 coaching",
      "Unlimited mock exams + reviews",
      "Custom study plan",
      "Guaranteed band score support",
      "24/7 priority support",
    ],
  },
];

const FAQS = [
  {
    q: "Can I switch plans later?",
    a: "Yes. You can upgrade or downgrade at any time from your dashboard, and changes take effect on your next billing cycle.",
  },
  {
    q: "Is the Starter plan really free?",
    a: "Absolutely. The Starter plan is free forever with no card required, so you can explore the platform before committing.",
  },
  {
    q: "How are payments made?",
    a: "We accept Mobile Money (MTN & Orange) and bank transfer. All prices are in CFA per month.",
  },
  {
    q: "Do you offer a free trial class?",
    a: "Yes. Book a free trial class from the Contact page to experience a live lesson before subscribing.",
  },
];

// ─── Icons ────────────────────────────────────────────────────────────────────

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
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.27 6.2 21l1.3-7.34L3 9.27l6.1-1.01z" />
    </svg>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatPrice(price: number) {
  return price.toLocaleString("fr-FR");
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#04040f]">
      {/* ── Hero band ── */}
      {/* pt-[118px] clears the fixed header (30px bar + 64px nav + 24px breathing) */}
      <section className="relative overflow-hidden bg-legacy-gradient pt-[118px] pb-20">
        {/* subtle vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(161,29,44,0.35) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-(--breakpoint-xl) px-6 sm:px-12 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e05565]/40 bg-[#A11D2C]/30 px-4 py-1.5 mb-5">
            <StarIcon className="h-3.5 w-3.5 text-[#e89aa4]" />
            <span className="text-[11px] font-bold tracking-[0.18em] text-[#e89aa4] uppercase">
              Plans & Pricing
            </span>
          </div>

          <h1 className="text-[40px] sm:text-[54px] font-extrabold leading-[1.05] text-white mb-5">
            Choose Your <span className="text-[#e05565]">IELTS</span> Path
          </h1>
          <p className="mx-auto max-w-[560px] text-[15px] text-white/65 leading-relaxed">
            Start free, then upgrade to expert coaching across all four IELTS
            skills. Transparent monthly pricing in CFA, cancel anytime.
          </p>
        </div>
      </section>

      {/* ── Pricing cards ── */}
      <section className="relative z-10 mx-auto max-w-(--breakpoint-xl) px-6 sm:px-12 -mt-12 pb-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={[
                "relative flex flex-col rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-1",
                plan.highlight
                  ? "border-[#e05565]/60 bg-[#1A0E10] shadow-2xl shadow-[#A11D2C]/30 xl:scale-[1.03]"
                  : "border-white/10 bg-[#1A0E10]/80",
              ].join(" ")}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#A11D2C] px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-white">
                  {plan.badge}
                </span>
              )}

              {/* Header */}
              <h3 className="text-[19px] font-extrabold text-white">
                {plan.name}
              </h3>
              <p className="mt-1 text-[12.5px] text-white/50">{plan.tagline}</p>

              {/* Price */}
              <div className="mt-5 flex items-end gap-1">
                {plan.price === 0 ? (
                  <span className="text-[34px] font-extrabold text-white leading-none">
                    Free
                  </span>
                ) : (
                  <>
                    <span className="text-[34px] font-extrabold text-white leading-none">
                      {formatPrice(plan.price)}
                    </span>
                    <span className="mb-1 text-[13px] font-semibold text-white/50">
                      CFA / month
                    </span>
                  </>
                )}
              </div>

              {/* CTA */}
              <NextLink
                href={plan.href}
                className={[
                  "mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-[14px] font-bold transition-colors",
                  plan.highlight
                    ? "bg-[#A11D2C] text-white hover:bg-[#861825]"
                    : "border border-white/22 bg-white/7 text-white hover:bg-white/14",
                ].join(" ")}
              >
                {plan.cta}
                <ArrowRightIcon className="h-4 w-4" />
              </NextLink>

              {/* Features */}
              <ul className="mt-7 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#A11D2C]/25">
                      <CheckIcon className="h-3 w-3 text-[#e05565]" />
                    </span>
                    <span className="text-[13px] leading-snug text-white/75">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Reassurance line */}
        <p className="mt-10 text-center text-[13px] text-white/40">
          All paid plans include a 7-day money-back guarantee · No hidden fees ·
          Cancel anytime
        </p>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-white/10 bg-[#1A0E10]/60 py-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-12">
          <h2 className="mb-10 text-center text-[30px] font-extrabold text-white">
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-white/10 bg-[#04040f]/40 px-5 py-4 [&_summary]:cursor-pointer"
              >
                <summary className="flex items-center justify-between text-[15px] font-semibold text-white marker:content-none">
                  {faq.q}
                  <span className="text-[#e05565] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/60">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-legacy-gradient py-16">
        <div className="mx-auto max-w-(--breakpoint-xl) px-6 text-center">
          <h2 className="text-[28px] font-extrabold text-white">
            Not sure which plan fits you?
          </h2>
          <p className="mx-auto mt-3 max-w-[440px] text-[14px] text-white/65">
            Book a free trial class and let our team recommend the right path to
            your target band score.
          </p>
          <NextLink
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[14px] font-bold text-[#A11D2C] transition-colors hover:bg-white/90"
          >
            Book a free trial class
            <ArrowRightIcon className="h-4 w-4" />
          </NextLink>
        </div>
      </section>
    </main>
  );
}
