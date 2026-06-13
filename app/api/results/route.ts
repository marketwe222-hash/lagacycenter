import { NextResponse } from "next/server";

const MOCK = [
  { id: "1", studentId: "1", skill: "listening", score: 36, maxScore: 40, takenAt: "2025-06-10" },
  { id: "2", studentId: "2", skill: "reading",   score: 28, maxScore: 40, takenAt: "2025-06-09" },
  { id: "3", studentId: "3", skill: "writing",   score: 16, maxScore: 20, takenAt: "2025-06-08" },
];

export async function GET() {
  return NextResponse.json(MOCK);
}
