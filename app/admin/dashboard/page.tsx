"use client";

import NextLink from "next/link";

// ─── Types (local mock) ───────────────────────────────────────────────────────

interface StatCard {
  label: string;
  value: string;
  delta: string;
  up: boolean;
  icon: (p: React.SVGProps<SVGSVGElement>) => React.ReactElement;
}

interface Student {
  id: string;
  name: string;
  email: string;
  plan: "Starter" | "Essential" | "Pro" | "Premium";
  joined: string;
}

interface Result {
  id: string;
  student: string;
  band: number;
  date: string;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <circle cx="9" cy="8" r="3.5" />
      <path strokeLinecap="round" d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" />
      <path
        strokeLinecap="round"
        d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.5.7 4 2.8 4 6"
      />
    </svg>
  );
}
function BookIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4 5a2 2 0 0 1 2-2h11v16H6a2 2 0 0 0-2 2zM17 3h1a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2h-1"
      />
    </svg>
  );
}
function ChartIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4 20V10M10 20V4M16 20v-7M22 20H2"
      />
    </svg>
  );
}
function CashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path strokeLinecap="round" d="M6 12h.01M18 12h.01" />
    </svg>
  );
}
function TrendUpIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3 17l6-6 4 4 8-8M21 7v5m0-5h-5"
      />
    </svg>
  );
}
function TrendDownIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3 7l6 6 4-4 8 8M21 17v-5m0 5h-5"
      />
    </svg>
  );
}
function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
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

// ─── Mock data ────────────────────────────────────────────────────────────────

const STATS: StatCard[] = [
  {
    label: "Total students",
    value: "1,248",
    delta: "+12.5%",
    up: true,
    icon: UsersIcon,
  },
  {
    label: "Active courses",
    value: "18",
    delta: "+2",
    up: true,
    icon: BookIcon,
  },
  {
    label: "Results recorded",
    value: "642",
    delta: "+8.1%",
    up: true,
    icon: ChartIcon,
  },
  {
    label: "Revenue (CFA)",
    value: "4.2M",
    delta: "-3.2%",
    up: false,
    icon: CashIcon,
  },
];

// Monthly enrollments for the chart
const ENROLLMENTS = [
  { m: "Jan", v: 42 },
  { m: "Feb", v: 58 },
  { m: "Mar", v: 51 },
  { m: "Apr", v: 73 },
  { m: "May", v: 89 },
  { m: "Jun", v: 96 },
  { m: "Jul", v: 81 },
  { m: "Aug", v: 110 },
];

const RECENT_STUDENTS: Student[] = [
  {
    id: "1",
    name: "Mireille Fotso",
    email: "mireille@example.com",
    plan: "Pro",
    joined: "2026-06-14",
  },
  {
    id: "2",
    name: "Jean-Paul Eboa",
    email: "jp.eboa@example.com",
    plan: "Essential",
    joined: "2026-06-13",
  },
  {
    id: "3",
    name: "Larissa Ngono",
    email: "larissa.n@example.com",
    plan: "Premium",
    joined: "2026-06-12",
  },
  {
    id: "4",
    name: "Bruno Tchami",
    email: "bruno.t@example.com",
    plan: "Starter",
    joined: "2026-06-12",
  },
  {
    id: "5",
    name: "Sandrine Abena",
    email: "s.abena@example.com",
    plan: "Pro",
    joined: "2026-06-11",
  },
];

const RECENT_RESULTS: Result[] = [
  { id: "1", student: "Mireille Fotso", band: 7.5, date: "2026-06-15" },
  { id: "2", student: "Larissa Ngono", band: 8.0, date: "2026-06-14" },
  { id: "3", student: "Jean-Paul Eboa", band: 6.5, date: "2026-06-13" },
  { id: "4", student: "Sandrine Abena", band: 7.0, date: "2026-06-12" },
];

const PLAN_STYLES: Record<Student["plan"], string> = {
  Starter: "bg-white/10 text-white/70",
  Essential: "bg-sky-500/20 text-sky-300",
  Pro: "bg-[#A11D2C]/30 text-[#e89aa4]",
  Premium: "bg-amber-500/20 text-amber-300",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function bandColor(band: number) {
  if (band >= 7.5) return "text-emerald-400";
  if (band >= 6.5) return "text-amber-400";
  return "text-[#e05565]";
}

// ─── Mini bar chart (pure SVG) ────────────────────────────────────────────────

function EnrollmentsChart({ data }: { data: { m: string; v: number }[] }) {
  const max = Math.max(...data.map((d) => d.v));
  return (
    <div className="flex h-44 items-end gap-3">
      {data.map((d) => (
        <div key={d.m} className="flex flex-1 flex-col items-center gap-2">
          <div className="flex w-full flex-1 items-end">
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-[#5C141C] to-[#A11D2C] transition-all duration-500 hover:from-[#A11D2C] hover:to-[#e05565]"
              style={{ height: `${(d.v / max) * 100}%` }}
              title={`${d.m}: ${d.v} enrollments`}
            />
          </div>
          <span className="text-[11px] text-white/40">{d.m}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-[#04040f] p-6 sm:p-8">
      {/* ── Header ── */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-extrabold text-white">Dashboard</h1>
          <p className="mt-1 text-[13.5px] text-white/50">
            Welcome back, here&apos;s what&apos;s happening at Legacy Language
            Center.
          </p>
        </div>
        <div className="flex gap-2.5">
          <NextLink
            href="/admin/students"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            <PlusIcon className="h-4 w-4" /> Add student
          </NextLink>
          <NextLink
            href="/admin/courses"
            className="inline-flex items-center gap-2 rounded-lg bg-[#A11D2C] px-4 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-[#861825]"
          >
            <PlusIcon className="h-4 w-4" /> New course
          </NextLink>
        </div>
      </div>

      {/* ── Stat cards ── */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-[#1A0E10]/80 p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A11D2C]/25">
                  <Icon className="h-5 w-5 text-[#e05565]" />
                </span>
                <span
                  className={[
                    "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold",
                    stat.up
                      ? "bg-emerald-500/15 text-emerald-400"
                      : "bg-[#A11D2C]/20 text-[#e05565]",
                  ].join(" ")}
                >
                  {stat.up ? (
                    <TrendUpIcon className="h-3 w-3" />
                  ) : (
                    <TrendDownIcon className="h-3 w-3" />
                  )}
                  {stat.delta}
                </span>
              </div>
              <p className="mt-4 text-[28px] font-extrabold text-white">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[12.5px] text-white/50">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* ── Chart + Recent results ── */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Chart */}
        <div className="rounded-2xl border border-white/10 bg-[#1A0E10]/80 p-6 lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-[16px] font-bold text-white">Enrollments</h2>
              <p className="text-[12.5px] text-white/40">Last 8 months</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11.5px] font-semibold text-emerald-400">
              <TrendUpIcon className="h-3 w-3" /> +24% YoY
            </span>
          </div>
          <EnrollmentsChart data={ENROLLMENTS} />
        </div>

        {/* Recent results */}
        <div className="rounded-2xl border border-white/10 bg-[#1A0E10]/80 p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-[16px] font-bold text-white">Recent results</h2>
            <NextLink
              href="/admin/results"
              className="text-[12px] font-semibold text-[#e05565] hover:underline"
            >
              View all
            </NextLink>
          </div>
          <ul className="flex flex-col gap-4">
            {RECENT_RESULTS.map((r) => (
              <li key={r.id} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#A11D2C]/25 text-[12px] font-bold text-[#e89aa4]">
                  {initials(r.student)}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-medium text-white/85">
                    {r.student}
                  </p>
                  <p className="text-[11.5px] text-white/40">{r.date}</p>
                </div>
                <span
                  className={`text-[15px] font-extrabold ${bandColor(r.band)}`}
                >
                  {r.band.toFixed(1)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Recent students table ── */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#1A0E10]/80">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h2 className="text-[16px] font-bold text-white">Recent students</h2>
          <NextLink
            href="/admin/students"
            className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#e05565] hover:underline"
          >
            View all <ArrowRightIcon className="h-3.5 w-3.5" />
          </NextLink>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 text-[11.5px] uppercase tracking-wide text-white/40">
                <th className="px-6 py-3 font-semibold">Student</th>
                <th className="px-6 py-3 font-semibold">Plan</th>
                <th className="px-6 py-3 font-semibold">Joined</th>
                <th className="px-6 py-3 text-right font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {RECENT_STUDENTS.map((s) => (
                <tr
                  key={s.id}
                  className="border-b border-white/5 transition-colors last:border-0 hover:bg-white/[0.03]"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#A11D2C]/25 text-[12px] font-bold text-[#e89aa4]">
                        {initials(s.name)}
                      </span>
                      <div>
                        <p className="text-[13.5px] font-medium text-white/90">
                          {s.name}
                        </p>
                        <p className="text-[11.5px] text-white/40">{s.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11.5px] font-semibold ${PLAN_STYLES[s.plan]}`}
                    >
                      {s.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[13px] text-white/60">
                    {s.joined}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <NextLink
                      href={`/admin/students?id=${s.id}`}
                      className="text-[12.5px] font-semibold text-[#e05565] hover:underline"
                    >
                      View
                    </NextLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
