"use client";

import { useMemo, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Result {
  id: string;
  student: string;
  email: string;
  listening: number;
  reading: number;
  writing: number;
  speaking: number;
  overall: number;
  date: string;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="m21 21-4.3-4.3" />
    </svg>
  );
}
function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
      />
    </svg>
  );
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const RESULTS: Result[] = [
  {
    id: "1",
    student: "Mireille Fotso",
    email: "mireille@example.com",
    listening: 7.5,
    reading: 7.0,
    writing: 7.5,
    speaking: 8.0,
    overall: 7.5,
    date: "2026-06-15",
  },
  {
    id: "2",
    student: "Larissa Ngono",
    email: "larissa.n@example.com",
    listening: 8.0,
    reading: 8.5,
    writing: 7.5,
    speaking: 8.0,
    overall: 8.0,
    date: "2026-06-14",
  },
  {
    id: "3",
    student: "Jean-Paul Eboa",
    email: "jp.eboa@example.com",
    listening: 6.5,
    reading: 6.0,
    writing: 6.5,
    speaking: 7.0,
    overall: 6.5,
    date: "2026-06-13",
  },
  {
    id: "4",
    student: "Sandrine Abena",
    email: "s.abena@example.com",
    listening: 7.0,
    reading: 7.0,
    writing: 6.5,
    speaking: 7.5,
    overall: 7.0,
    date: "2026-06-12",
  },
  {
    id: "5",
    student: "Bruno Tchami",
    email: "bruno.t@example.com",
    listening: 5.5,
    reading: 6.0,
    writing: 5.5,
    speaking: 6.0,
    overall: 5.5,
    date: "2026-06-11",
  },
];

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

function Score({ value }: { value: number }) {
  return (
    <span className={`font-semibold ${bandColor(value)}`}>
      {value.toFixed(1)}
    </span>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AdminResultsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      RESULTS.filter(
        (r) =>
          r.student.toLowerCase().includes(query.toLowerCase()) ||
          r.email.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  const avg =
    RESULTS.reduce((sum, r) => sum + r.overall, 0) / (RESULTS.length || 1);
  const topBand = Math.max(...RESULTS.map((r) => r.overall));

  return (
    <div className="min-h-screen bg-[#04040f] p-6 sm:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-extrabold text-white">Results</h1>
          <p className="mt-1 text-[13.5px] text-white/50">
            {RESULTS.length} recorded · avg band {avg.toFixed(1)} · top{" "}
            {topBand.toFixed(1)}
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10">
          <DownloadIcon className="h-4 w-4" /> Export CSV
        </button>
      </div>

      {/* Search */}
      <div className="mb-5 relative max-w-md">
        <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by student or email…"
          className="w-full rounded-lg border border-white/12 bg-[#1A0E10]/80 py-2.5 pl-10 pr-4 text-[13.5px] text-white placeholder-white/30 outline-none transition-colors focus:border-[#e05565]"
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1A0E10]/80">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 text-[11.5px] uppercase tracking-wide text-white/40">
                <th className="px-6 py-3 font-semibold">Student</th>
                <th className="px-4 py-3 text-center font-semibold">List.</th>
                <th className="px-4 py-3 text-center font-semibold">Read.</th>
                <th className="px-4 py-3 text-center font-semibold">Writ.</th>
                <th className="px-4 py-3 text-center font-semibold">Speak.</th>
                <th className="px-4 py-3 text-center font-semibold">Overall</th>
                <th className="px-6 py-3 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr
                  key={r.id}
                  className="border-b border-white/5 transition-colors last:border-0 hover:bg-white/[0.03]"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#A11D2C]/25 text-[12px] font-bold text-[#e89aa4]">
                        {initials(r.student)}
                      </span>
                      <div>
                        <p className="text-[13.5px] font-medium text-white/90">
                          {r.student}
                        </p>
                        <p className="text-[11.5px] text-white/40">{r.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-[13px]">
                    <Score value={r.listening} />
                  </td>
                  <td className="px-4 py-4 text-center text-[13px]">
                    <Score value={r.reading} />
                  </td>
                  <td className="px-4 py-4 text-center text-[13px]">
                    <Score value={r.writing} />
                  </td>
                  <td className="px-4 py-4 text-center text-[13px]">
                    <Score value={r.speaking} />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span
                      className={`rounded-lg px-2.5 py-1 text-[14px] font-extrabold ${bandColor(r.overall)} bg-white/5`}
                    >
                      {r.overall.toFixed(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[13px] text-white/60">
                    {r.date}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-12 text-center text-[13.5px] text-white/40"
                  >
                    No results match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
