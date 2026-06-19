"use client";

import { useMemo, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Level = "Beginner" | "Intermediate" | "Advanced";
type CourseStatus = "published" | "draft";

interface Course {
  id: string;
  title: string;
  skill: "Listening" | "Reading" | "Writing" | "Speaking" | "Full IELTS";
  level: Level;
  price: number; // CFA, 0 = free
  students: number;
  lessons: number;
  status: CourseStatus;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

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
function EditIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"
      />
    </svg>
  );
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const COURSES: Course[] = [
  {
    id: "1",
    title: "IELTS Listening Mastery",
    skill: "Listening",
    level: "Intermediate",
    price: 10000,
    students: 312,
    lessons: 18,
    status: "published",
  },
  {
    id: "2",
    title: "Reading Strategies & Speed",
    skill: "Reading",
    level: "Intermediate",
    price: 10000,
    students: 268,
    lessons: 16,
    status: "published",
  },
  {
    id: "3",
    title: "Writing Task 1 & 2 Pro",
    skill: "Writing",
    level: "Advanced",
    price: 30000,
    students: 154,
    lessons: 22,
    status: "published",
  },
  {
    id: "4",
    title: "Speaking Confidence",
    skill: "Speaking",
    level: "Beginner",
    price: 30000,
    students: 201,
    lessons: 14,
    status: "published",
  },
  {
    id: "5",
    title: "Full IELTS Intensive",
    skill: "Full IELTS",
    level: "Advanced",
    price: 50000,
    students: 97,
    lessons: 40,
    status: "published",
  },
  {
    id: "6",
    title: "Free IELTS Starter",
    skill: "Listening",
    level: "Beginner",
    price: 0,
    students: 540,
    lessons: 5,
    status: "published",
  },
  {
    id: "7",
    title: "Grammar Foundations (new)",
    skill: "Writing",
    level: "Beginner",
    price: 10000,
    students: 0,
    lessons: 8,
    status: "draft",
  },
];

const SKILL_STYLES: Record<Course["skill"], string> = {
  Listening: "bg-sky-500/20 text-sky-300",
  Reading: "bg-emerald-500/20 text-emerald-300",
  Writing: "bg-amber-500/20 text-amber-300",
  Speaking: "bg-violet-500/20 text-violet-300",
  "Full IELTS": "bg-[#A11D2C]/30 text-[#e89aa4]",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatPrice(price: number) {
  return price === 0 ? "Free" : `${price.toLocaleString("fr-FR")} CFA`;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AdminCoursesPage() {
  const [filter, setFilter] = useState<"all" | CourseStatus>("all");

  const filtered = useMemo(
    () => COURSES.filter((c) => filter === "all" || c.status === filter),
    [filter],
  );

  const totalStudents = COURSES.reduce((sum, c) => sum + c.students, 0);

  return (
    <div className="min-h-screen bg-[#04040f] p-6 sm:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-extrabold text-white">Courses</h1>
          <p className="mt-1 text-[13.5px] text-white/50">
            {COURSES.length} courses · {totalStudents.toLocaleString("fr-FR")}{" "}
            enrollments
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-[#A11D2C] px-4 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-[#861825]">
          <PlusIcon className="h-4 w-4" /> New course
        </button>
      </div>

      {/* Filter tabs */}
      <div className="mb-6 flex gap-1.5">
        {(["all", "published", "draft"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={[
              "rounded-lg px-4 py-2 text-[12.5px] font-semibold capitalize transition-colors",
              filter === f
                ? "bg-[#A11D2C] text-white"
                : "border border-white/12 bg-white/5 text-white/60 hover:bg-white/10",
            ].join(" ")}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((c) => (
          <div
            key={c.id}
            className="flex flex-col rounded-2xl border border-white/10 bg-[#1A0E10]/80 p-5 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${SKILL_STYLES[c.skill]}`}
              >
                {c.skill}
              </span>
              {c.status === "draft" ? (
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/50">
                  Draft
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />{" "}
                  Published
                </span>
              )}
            </div>

            <h3 className="mt-4 text-[16px] font-bold text-white">{c.title}</h3>
            <p className="mt-1 text-[12.5px] text-white/50">{c.level}</p>

            <div className="mt-4 flex items-center gap-4 text-[12px] text-white/55">
              <span className="inline-flex items-center gap-1.5">
                <UsersIcon className="h-3.5 w-3.5 text-[#e05565]" />{" "}
                {c.students.toLocaleString("fr-FR")}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BookIcon className="h-3.5 w-3.5 text-[#e05565]" /> {c.lessons}{" "}
                lessons
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-[15px] font-extrabold text-white">
                {formatPrice(c.price)}
              </span>
              <button className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[12px] font-semibold text-white transition-colors hover:bg-white/10">
                <EditIcon className="h-3.5 w-3.5" /> Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
