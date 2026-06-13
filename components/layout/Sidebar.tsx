"use client";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

const studentLinks = [
  { href: "/dashboard",  label: "Dashboard" },
  { href: "/lessons",    label: "Lessons" },
  { href: "/practice",   label: "Practice" },
  { href: "/progress",   label: "My Progress" },
];

const adminLinks = [
  { href: "/admin/dashboard", label: "Overview" },
  { href: "/admin/students",  label: "Students" },
  { href: "/admin/courses",   label: "Courses" },
  { href: "/admin/results",   label: "Results" },
];

export default function Sidebar() {
  const { user } = useAuth();
  const links = user?.role === "admin" ? adminLinks : studentLinks;
  return (
    <aside className="w-56 min-h-screen border-r px-4 py-6 flex flex-col gap-1">
      {links.map(({ href, label }) => (
        <Link key={href} href={href}
          className="px-3 py-2 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
          {label}
        </Link>
      ))}
    </aside>
  );
}
