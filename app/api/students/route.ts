import { NextResponse } from "next/server";

const MOCK = [
  { id: "1", name: "Alice Ngo",   email: "alice@example.com",  role: "student" },
  { id: "2", name: "Brian Eto",   email: "brian@example.com",  role: "student" },
  { id: "3", name: "Claire Meka", email: "claire@example.com", role: "student" },
];

export async function GET() {
  return NextResponse.json(MOCK);
}
