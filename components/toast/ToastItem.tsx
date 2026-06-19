"use client";

import { useEffect, useRef, useState } from "react";
import { Toast, ToastType } from "@/types";

// ─── Icons ────────────────────────────────────────────────────────────────────

function SuccessIcon(props: React.SVGProps<SVGSVGElement>) {
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
function ErrorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6l12 12M18 6L6 18"
      />
    </svg>
  );
}
function WarningIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v4m0 4h.01M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.42 0z"
      />
    </svg>
  );
}
function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v5m0-8h.01" />
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

// ─── Style map per type ───────────────────────────────────────────────────────

const STYLES: Record<
  ToastType,
  {
    Icon: (p: React.SVGProps<SVGSVGElement>) => React.ReactElement;
    accent: string;
    iconBg: string;
    iconText: string;
  }
> = {
  success: {
    Icon: SuccessIcon,
    accent: "bg-emerald-500",
    iconBg: "bg-emerald-500/20",
    iconText: "text-emerald-400",
  },
  error: {
    Icon: ErrorIcon,
    accent: "bg-[#A11D2C]",
    iconBg: "bg-[#A11D2C]/25",
    iconText: "text-[#e05565]",
  },
  warning: {
    Icon: WarningIcon,
    accent: "bg-amber-500",
    iconBg: "bg-amber-500/20",
    iconText: "text-amber-400",
  },
  info: {
    Icon: InfoIcon,
    accent: "bg-sky-500",
    iconBg: "bg-sky-500/20",
    iconText: "text-sky-400",
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

interface ToastItemProps {
  toast: Toast;
  onClose: (id: string) => void;
}

export default function ToastItem({ toast, onClose }: ToastItemProps) {
  const { id, message, type, duration } = toast;
  const { Icon, accent, iconBg, iconText } = STYLES[type] ?? STYLES.info;

  const [leaving, setLeaving] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [paused, setPaused] = useState(false);

  // Trigger enter animation on next frame
  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  function handleClose() {
    setLeaving(true);
    // Match the exit transition duration before removing
    setTimeout(() => onClose(id), 200);
  }

  const showProgress = duration > 0;

  return (
    <div
      role="alert"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className={[
        "pointer-events-auto relative w-full max-w-sm overflow-hidden rounded-xl border border-white/10",
        "bg-[#1A0E10] shadow-xl shadow-black/40 backdrop-blur-md",
        "transition-all duration-200 ease-out",
        leaving
          ? "translate-x-2 opacity-0"
          : mounted
            ? "translate-x-0 opacity-100"
            : "translate-x-6 opacity-0",
      ].join(" ")}
    >
      <div className="flex items-start gap-3 p-4">
        {/* Icon */}
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${iconBg}`}
        >
          <Icon className={`h-4 w-4 ${iconText}`} />
        </span>

        {/* Message */}
        <p className="flex-1 pt-1 text-[13.5px] leading-snug text-white/85">
          {message}
        </p>

        {/* Close */}
        <button
          onClick={handleClose}
          aria-label="Dismiss notification"
          className="-mr-1 -mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white/40 transition-colors hover:bg-white/10 hover:text-white"
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      </div>

      {/* Progress bar */}
      {showProgress && (
        <span
          className={`absolute bottom-0 left-0 h-0.5 ${accent}`}
          style={{
            animation: `toast-progress ${duration}ms linear forwards`,
            animationPlayState: paused ? "paused" : "running",
          }}
        />
      )}

      {/* Keyframes (scoped, no global CSS needed) */}
      <style>{`
        @keyframes toast-progress {
          from { width: 100%; }
          to   { width: 0%; }
        }
      `}</style>
    </div>
  );
}
