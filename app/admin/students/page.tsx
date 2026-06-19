"use client";

import { useMemo, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Plan = "Starter" | "Essential" | "Pro" | "Premium";
type Status = "active" | "inactive";

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  plan: Plan;
  status: Status;
  joined: string;
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
function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7"
      />
    </svg>
  );
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const PLANS: ("all" | Plan)[] = [
  "all",
  "Starter",
  "Essential",
  "Pro",
  "Premium",
];

const STUDENTS: Student[] = [
  {
    id: "1",
    name: "Mireille Fotso",
    email: "mireille@example.com",
    phone: "+237 671 000 111",
    plan: "Pro",
    status: "active",
    joined: "2026-06-14",
  },
  {
    id: "2",
    name: "Jean-Paul Eboa",
    email: "jp.eboa@example.com",
    phone: "+237 680 222 333",
    plan: "Essential",
    status: "active",
    joined: "2026-06-13",
  },
  {
    id: "3",
    name: "Larissa Ngono",
    email: "larissa.n@example.com",
    phone: "+237 690 444 555",
    plan: "Premium",
    status: "active",
    joined: "2026-06-12",
  },
  {
    id: "4",
    name: "Bruno Tchami",
    email: "bruno.t@example.com",
    phone: "+237 677 666 777",
    plan: "Starter",
    status: "inactive",
    joined: "2026-06-12",
  },
  {
    id: "5",
    name: "Sandrine Abena",
    email: "s.abena@example.com",
    phone: "+237 698 888 999",
    plan: "Pro",
    status: "active",
    joined: "2026-06-11",
  },
  {
    id: "6",
    name: "Patrick Mballa",
    email: "p.mballa@example.com",
    phone: "+237 655 121 314",
    plan: "Essential",
    status: "inactive",
    joined: "2026-06-09",
  },
  {
    id: "7",
    name: "Carine Nguefack",
    email: "carine.n@example.com",
    phone: "+237 671 151 617",
    plan: "Premium",
    status: "active",
    joined: "2026-06-08",
  },
];

const PLAN_STYLES: Record<Plan, string> = {
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

// ─── Component ────────────────────────────────────────────────────────────────

export default function AdminStudentsPage() {
  const [query, setQuery] = useState("");
  const [plan, setPlan] = useState<"all" | Plan>("all");

  const filtered = useMemo(() => {
    return STUDENTS.filter((s) => {
      const matchesQuery =
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.email.toLowerCase().includes(query.toLowerCase());
      const matchesPlan = plan === "all" || s.plan === plan;
      return matchesQuery && matchesPlan;
    });
  }, [query, plan]);

  const activeCount = STUDENTS.filter((s) => s.status === "active").length;

  return (
    <div className="min-h-screen bg-[#04040f] p-6 sm:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-extrabold text-white">Students</h1>
          <p className="mt-1 text-[13.5px] text-white/50">
            {STUDENTS.length} total · {activeCount} active
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-[#A11D2C] px-4 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-[#861825]">
          <PlusIcon className="h-4 w-4" /> Add student
        </button>
      </div>

      {/* Toolbar */}
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[220px]">
          <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or email…"
            className="w-full rounded-lg border border-white/12 bg-[#1A0E10]/80 py-2.5 pl-10 pr-4 text-[13.5px] text-white placeholder-white/30 outline-none transition-colors focus:border-[#e05565]"
          />
        </div>
        <div className="flex gap-1.5">
          {PLANS.map((p) => (
            <button
              key={p}
              onClick={() => setPlan(p)}
              className={[
                "rounded-lg px-3.5 py-2 text-[12.5px] font-semibold capitalize transition-colors",
                plan === p
                  ? "bg-[#A11D2C] text-white"
                  : "border border-white/12 bg-white/5 text-white/60 hover:bg-white/10",
              ].join(" ")}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1A0E10]/80">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 text-[11.5px] uppercase tracking-wide text-white/40">
                <th className="px-6 py-3 font-semibold">Student</th>
                <th className="px-6 py-3 font-semibold">Phone</th>
                <th className="px-6 py-3 font-semibold">Plan</th>
                <th className="px-6 py-3 font-semibold">Status</th>
                <th className="px-6 py-3 font-semibold">Joined</th>
                <th className="px-6 py-3 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
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
                  <td className="px-6 py-4 text-[13px] text-white/60">
                    {s.phone}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11.5px] font-semibold ${PLAN_STYLES[s.plan]}`}
                    >
                      {s.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={[
                        "inline-flex items-center gap-1.5 text-[12.5px] font-medium",
                        s.status === "active"
                          ? "text-emerald-400"
                          : "text-white/40",
                      ].join(" ")}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${s.status === "active" ? "bg-emerald-400" : "bg-white/40"}`}
                      />
                      {s.status === "active" ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[13px] text-white/60">
                    {s.joined}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-[12.5px] font-semibold text-[#e05565] hover:underline">
                        View
                      </button>
                      <button
                        className="text-white/40 transition-colors hover:text-[#e05565]"
                        aria-label="Delete"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-[13.5px] text-white/40"
                  >
                    No students match your search.
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
