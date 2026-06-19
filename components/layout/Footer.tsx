"use client";

import { useState } from "react";
import NextLink from "next/link";
import { useToast } from "@/hooks/useToast";

// ─── Data ─────────────────────────────────────────────────────────────────────

const LINK_COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Courses", href: "/courses" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Programmes",
    links: [
      { label: "IELTS Preparation", href: "/courses" },
      { label: "TOEFL & TOEIC", href: "/courses" },
      { label: "French (TCF / TEF)", href: "/courses" },
      { label: "General English", href: "/courses" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Sign in", href: "/login" },
      { label: "Create account", href: "/register" },
      { label: "Student dashboard", href: "/dashboard" },
      { label: "My progress", href: "/progress" },
    ],
  },
];

// ─── Icons ────────────────────────────────────────────────────────────────────

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
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 9h3V6h-3c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9.5c0-.28.22-.5.5-.5z" />
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.9.9-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.2 7.2 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4c0-.1-.5-1.3-.7-1.7s-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11 11 0 0 0 4.3 3.8c.6.3 1.1.4 1.5.5a3.5 3.5 0 0 0 1.6.1 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "WhatsApp", href: "https://wa.me/237671619643", Icon: WhatsAppIcon },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  const { addToast } = useToast();
  const [email, setEmail] = useState("");

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      addToast("Please enter a valid email.", "error");
      return;
    }
    // TODO: wire to your newsletter API
    addToast("Subscribed! Thanks for joining our list.", "success");
    setEmail("");
  }

  return (
    <footer className="border-t border-white/10 bg-[#1A0E10] text-white">
      <div className="mx-auto max-w-(--breakpoint-xl) px-6 sm:px-12">
        {/* ── Top ── */}
        <div className="grid gap-10 py-14 lg:grid-cols-12">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <NextLink href="/" className="inline-flex items-center gap-2.5">
              <LogoCheckIcon className="h-8 w-8 text-[#A11D2C]" />
              <span className="text-[15px] font-bold text-white">
                Legacy Language Center
              </span>
            </NextLink>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-white/55">
              Expert coaching in English and French proficiency exams, helping
              you unlock universities, visas, and global career opportunities.
            </p>

            <ul className="mt-6 flex flex-col gap-3 text-[13px]">
              <li className="flex items-center gap-2.5 text-white/65">
                <MapPinIcon className="h-4 w-4 shrink-0 text-[#e05565]" />
                Chapelle Obili, Yaoundé
              </li>
              <li className="flex items-center gap-2.5 text-white/65">
                <PhoneIcon className="h-4 w-4 shrink-0 text-[#e05565]" />
                <span className="flex flex-wrap gap-x-3">
                  <a href="tel:+237671619643" className="hover:text-white">
                    +237 671 619 643
                  </a>
                  <a href="tel:+237680148076" className="hover:text-white">
                    +237 680 148 076
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-white/65">
                <MailIcon className="h-4 w-4 shrink-0 text-[#e05565]" />
                <a
                  href="mailto:support@legacycenter.com"
                  className="hover:text-white"
                >
                  support@legacycenter.com
                </a>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {LINK_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-[12px] font-bold uppercase tracking-wide text-white/40">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <NextLink
                        href={link.href}
                        className="text-[13px] text-white/65 transition-colors hover:text-[#e05565]"
                      >
                        {link.label}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-[12px] font-bold uppercase tracking-wide text-white/40">
              Stay updated
            </h3>
            <p className="mt-4 text-[13px] leading-relaxed text-white/55">
              Get study tips, exam dates, and special offers in your inbox.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="mt-4 flex flex-col gap-2.5"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full rounded-lg border border-white/12 bg-[#04040f]/60 px-4 py-2.5 text-[13.5px] text-white placeholder-white/30 outline-none transition-colors focus:border-[#e05565]"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#A11D2C] px-5 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-[#861825]"
              >
                Subscribe
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </form>

            {/* Socials */}
            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/60 transition-colors hover:border-[#e05565]/40 hover:bg-[#A11D2C]/20 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-[12.5px] text-white/40">
            © {new Date().getFullYear()} Legacy Language Center. All rights
            reserved.
          </p>
          <div className="flex gap-5 text-[12.5px] text-white/40">
            <NextLink
              href="/terms"
              className="transition-colors hover:text-white/70"
            >
              Terms
            </NextLink>
            <NextLink
              href="/privacy"
              className="transition-colors hover:text-white/70"
            >
              Privacy
            </NextLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
