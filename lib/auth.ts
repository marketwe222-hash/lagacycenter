import { User } from "@/types";

export function getStoredUser(): User | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem("user");
  return raw ? JSON.parse(raw) : null;
}

export function isAdmin(user: User | null) {
  return user?.role === "admin";
}

export function isStudent(user: User | null) {
  return user?.role === "student";
}
