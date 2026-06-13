import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  // TODO: replace with real DB lookup + bcrypt verify
  if (!email || !password)
    return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
  const user = { id: "1", name: "Test User", email, role: email.includes("admin") ? "admin" : "student" };
  return NextResponse.json({ user });
}
