"use client";

import NextLink from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

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
function PinIconBadge(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
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

export default function LocationContact() {
  return (
    <section className="relative overflow-hidden bg-legacy-gradient">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(161,29,44,0.28) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-(--breakpoint-xl) px-4 py-20 sm:px-6">
        {/* ── Header ── */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#e05565]/40 bg-[#A11D2C]/30 px-4 py-1.5">
          <PinIconBadge className="h-3.5 w-3.5 text-[#e89aa4]" />
          <span className="text-[11px] font-bold tracking-[0.16em] text-[#e89aa4] uppercase">
            Visit Us
          </span>
        </div>

        <h2 className="mb-3 max-w-2xl text-[32px] font-extrabold leading-tight text-white sm:text-[36px]">
          Find us in <span className="text-[#e05565]">Yaoundé</span>
        </h2>
        <p className="mb-12 max-w-xl text-[15px] leading-relaxed text-white/60">
          Drop by our center, give us a call, or send an email, our team is
          happy to help you start your journey.
        </p>

        {/* ── Grid: info + map ── */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left: contact + hours */}
          <div className="flex flex-col gap-4">
            {/* Contact cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Location */}
              <div className="rounded-2xl border border-white/10 bg-[#1A0E10]/80 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e05565]/30 bg-[#A11D2C]/25">
                  <MapPinIcon className="h-5 w-5 text-[#e05565]" />
                </span>
                <p className="mt-4 text-[12px] font-semibold uppercase tracking-wide text-white/40">
                  Location
                </p>
                <p className="mt-1 text-[14px] text-white/80">
                  Chapelle Obili, Yaoundé
                </p>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-white/10 bg-[#1A0E10]/80 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e05565]/30 bg-[#A11D2C]/25">
                  <MailIcon className="h-5 w-5 text-[#e05565]" />
                </span>
                <p className="mt-4 text-[12px] font-semibold uppercase tracking-wide text-white/40">
                  Email
                </p>
                <a
                  href="mailto:support@legacycenter.com"
                  className="mt-1 block text-[14px] text-white/80 transition-colors hover:text-white"
                >
                  support@legacycenter.com
                </a>
              </div>

              {/* Phone (spans both columns) */}
              <div className="rounded-2xl border border-white/10 bg-[#1A0E10]/80 p-6 sm:col-span-2">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#e05565]/30 bg-[#A11D2C]/25">
                    <PhoneIcon className="h-5 w-5 text-[#e05565]" />
                  </span>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-wide text-white/40">
                      Phone
                    </p>
                    <div className="mt-1 flex flex-wrap gap-x-6 gap-y-1">
                      <a
                        href="tel:+237671619643"
                        className="text-[14px] text-white/80 transition-colors hover:text-white"
                      >
                        +237 671 619 643
                      </a>
                      <a
                        href="tel:+237680148076"
                        className="text-[14px] text-white/80 transition-colors hover:text-white"
                      >
                        +237 680 148 076
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening hours */}
            <div className="rounded-2xl border border-white/10 bg-[#1A0E10]/80 p-6">
              <div className="flex items-center gap-2.5">
                <ClockIcon className="h-4.5 w-4.5 text-[#e05565]" />
                <h3 className="text-[15px] font-bold text-white">
                  Opening hours
                </h3>
              </div>
              <ul className="mt-4 flex flex-col gap-2.5">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between text-[13px]"
                  >
                    <span className="text-white/55">{h.day}</span>
                    <span className="font-semibold text-white/85">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <NextLink
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#A11D2C] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#861825]"
            >
              Get in touch
              <ArrowRightIcon className="h-4 w-4" />
            </NextLink>
          </div>

          {/* Right: map */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1A0E10]/80">
            <iframe
              title="Legacy Language Center, Obili Yaoundé"
              src="https://www.google.com/maps?q=Obili,Yaound%C3%A9,Cameroon&output=embed"
              className="h-full min-h-[420px] w-full grayscale-[0.25]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
