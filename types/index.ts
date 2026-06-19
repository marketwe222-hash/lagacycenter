export type Role = "student" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
  createdAt: string;
}

export interface Course {
  id: string;
  title: string;
  skill: "listening" | "reading" | "writing";
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  content: string;
  durationMinutes: number;
  order: number;
}

export interface Result {
  id: string;
  studentId: string;
  skill: "listening" | "reading" | "writing";
  score: number;
  maxScore: number;
  takenAt: string;
}

export type ToastType = "success" | "error" | "warning" | "info";

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
}
