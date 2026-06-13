"use client";

import { useState, useEffect, useRef } from "react";
import NextLink from "next/link";
import { useTheme } from "@/hooks/useTheme";
import { useAuth } from "@/hooks/useAuth";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4 12H2M22 12h-2M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41M19.07 19.07l-1.41-1.41M6.34 6.34 4.93 4.93"
      />
    </svg>
  );
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.64 13a9 9 0 1 1-9.58-9.58 7 7 0 0 0 9.58 9.58Z" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function DashboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <circle cx="12" cy="8" r="4" />
      <path strokeLinecap="round" d="M4 20c0-4 3.58-7 8-7s8 3 8 7" />
    </svg>
  );
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <circle cx="12" cy="12" r="3" />
      <path
        strokeLinecap="round"
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
      />
    </svg>
  );
}

function LogoutIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1"
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

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  const [lang, setLang] = useState<"en" | "fr">("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detect scroll to add background to navbar when over hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const allNavLinks = [
    ...NAV_LINKS,
    ...(user ? [{ label: "Dashboard", href: "/dashboard" }] : []),
  ];

  return (
    <header className="w-full">
      {/* ── Top contact bar ── */}
      {/* Always dark crimson — sits above the hero */}
      <div className="w-full bg-[#1A0E10] text-[#c8a8a8]">
        <div className="mx-auto flex max-w-(--breakpoint-xl) items-center justify-between px-4 py-1.5 sm:px-6">
          <div className="flex items-center gap-5 text-[11.5px]">
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="h-3.5 w-3.5 text-[#e05565] shrink-0" />
              Chapelle Obili, Yaoundé
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <PhoneIcon className="h-3.5 w-3.5 text-[#e05565] shrink-0" />
              +237 671 619 643 · 680 148 076
            </span>
          </div>

          {/* EN / FR toggle */}
          <div
            className="flex overflow-hidden rounded-full bg-white/10 text-[11px] font-semibold"
            role="group"
            aria-label="Language selector"
          >
            {(["en", "fr"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={[
                  "px-3 py-0.5 uppercase transition-colors",
                  lang === l
                    ? "rounded-full bg-[#A11D2C] text-white"
                    : "text-[#c8a8a8] hover:text-white",
                ].join(" ")}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main navbar — floats over hero ── */}
      {/*
        position: absolute on hero-page, fixed after scroll.
        We achieve "float over hero" by making the nav absolute/fixed
        and letting the hero section be full-height behind it.
        The public layout should NOT add padding-top — the hero handles its own padding.
      */}
      <nav
        className={[
          "fixed top-[30px] left-0 right-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "bg-[#1A0E10]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="relative mx-auto flex max-w-(--breakpoint-xl) items-center justify-between px-4 py-3.5 sm:px-6">
          {/* Logo */}
          <NextLink href="/" className="flex items-center gap-2.5 shrink-0">
            <LogoCheckIcon className="h-9 w-9 text-[#A11D2C]" />
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-extrabold tracking-[0.08em] text-white">
                LEGACY
              </span>
              <span className="mt-0.5 text-[9px] font-bold tracking-[0.2em] text-[#e05565]">
                LANGUAGE CENTER
              </span>
            </div>
          </NextLink>

          {/* Nav links — absolute center */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 sm:flex">
            {allNavLinks.map((link) => (
              <NextLink
                key={link.href}
                href={link.href}
                className="rounded-md px-3.5 py-1.5 text-[13.5px] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </NextLink>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              {theme === "dark" ? (
                <SunIcon className="h-4.5 w-4.5" />
              ) : (
                <MoonIcon className="h-4.5 w-4.5" />
              )}
            </button>

            {/* Authenticated: avatar + dropdown */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen((o) => !o)}
                  aria-label="Account menu"
                  aria-expanded={isDropdownOpen}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#A11D2C] text-[13px] font-bold text-white transition-opacity hover:opacity-90"
                >
                  {(user.name ?? "U").charAt(0).toUpperCase()}
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 top-[calc(100%+10px)] z-50 min-w-[210px] overflow-hidden rounded-xl border border-white/15 bg-[#1A0E10] shadow-xl shadow-black/40">
                    <div className="border-b border-white/10 px-4 py-3">
                      <p className="text-[13.5px] font-semibold text-white">
                        {user.name ?? "Account"}
                      </p>
                      <p className="text-[12px] text-white/40">
                        {user.email ?? ""}
                      </p>
                    </div>
                    <div className="p-1.5">
                      <NextLink
                        href="/dashboard"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] text-white/80 hover:bg-white/8"
                      >
                        <DashboardIcon className="h-4 w-4 text-white/40" />{" "}
                        Dashboard
                      </NextLink>
                      <NextLink
                        href="/profile"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] text-white/80 hover:bg-white/8"
                      >
                        <UserIcon className="h-4 w-4 text-white/40" /> Profile
                      </NextLink>
                      <NextLink
                        href="/settings"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] text-white/80 hover:bg-white/8"
                      >
                        <SettingsIcon className="h-4 w-4 text-white/40" />{" "}
                        Settings
                      </NextLink>
                      <div className="my-1.5 h-px bg-white/10" />
                      <button
                        onClick={() => {
                          logout();
                          setIsDropdownOpen(false);
                        }}
                        className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] text-red-400 hover:bg-red-950/40"
                      >
                        <LogoutIcon className="h-4 w-4" /> Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <NextLink
                  href="/login"
                  className="hidden rounded-lg border border-white/25 px-3.5 py-1.5 text-[13px] font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:block"
                >
                  Sign in
                </NextLink>
                <NextLink
                  href="/register"
                  className="rounded-lg bg-[#A11D2C] px-4 py-1.5 text-[13px] font-bold text-white transition-colors hover:bg-[#861825]"
                >
                  Get started
                </NextLink>
              </>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen((o) => !o)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white/70 sm:hidden"
            >
              {isMenuOpen ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        {isMenuOpen && (
          <div className="border-t border-white/10 bg-[#1A0E10]/98 px-4 py-5 sm:hidden">
            <div className="flex flex-col gap-1">
              {allNavLinks.map((link) => (
                <NextLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base text-white/70 hover:bg-white/8 hover:text-white"
                >
                  {link.label}
                </NextLink>
              ))}
            </div>
            <div className="mt-4 border-t border-white/10 pt-4">
              {user ? (
                <div className="flex flex-col gap-1">
                  <div className="mb-2 flex items-center gap-3 px-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#A11D2C] text-[13px] font-bold text-white">
                      {(user.name ?? "U").charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-[13.5px] font-semibold text-white">
                        {user.name}
                      </p>
                      <p className="text-[12px] text-white/40">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-base text-red-400 hover:bg-red-950/30"
                  >
                    <LogoutIcon className="h-4.5 w-4.5" /> Sign out
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <NextLink
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-lg border border-white/20 px-4 py-2.5 text-center text-base font-medium text-white"
                  >
                    Sign in
                  </NextLink>
                  <NextLink
                    href="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-lg bg-[#A11D2C] px-4 py-2.5 text-center text-base font-bold text-white"
                  >
                    Get started
                  </NextLink>
                </div>
              )}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-white/10 px-1 pt-4">
              <span className="text-[12px] text-white/30">Language</span>
              <div className="flex overflow-hidden rounded-full border border-white/20 text-[11px] font-semibold">
                {(["en", "fr"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={[
                      "px-3 py-1 uppercase transition-colors",
                      lang === l ? "bg-[#A11D2C] text-white" : "text-white/40",
                    ].join(" ")}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
