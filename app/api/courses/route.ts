import { NextResponse } from "next/server";

const MOCK = [
  { id: "1", title: "IELTS Listening Mastery", skill: "listening", lessons: 12 },
  { id: "2", title: "Academic Reading Skills",  skill: "reading",   lessons: 10 },
  { id: "3", title: "Writing Task 1 & 2",       skill: "writing",   lessons: 14 },
];

export async function GET() {
  return NextResponse.json(MOCK);
}
