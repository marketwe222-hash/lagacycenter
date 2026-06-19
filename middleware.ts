import { NextRequest, NextResponse } from "next/server";

const STUDENT_PATHS = ["/dashboard", "/lessons", "/practice", "/progress"];
const ADMIN_PATHS = ["/admin"];

// ─── DEV BYPASS ───────────────────────────────────────────────────────────────
// While there is no database/auth wired up, skip all auth checks so you can
// freely browse the student + admin pages.
// ⚠️ Set this to false (or remove it) before going to production.
const BYPASS_AUTH = true;

export function middleware(req: NextRequest) {
  if (BYPASS_AUTH) {
    return NextResponse.next();
  }

  const { pathname } = req.nextUrl;
  // Replace cookie name with your real session cookie
  const userRaw = req.cookies.get("user")?.value;
  const user = userRaw ? JSON.parse(decodeURIComponent(userRaw)) : null;

  const isStudentPath = STUDENT_PATHS.some((p) => pathname.startsWith(p));
  const isAdminPath = ADMIN_PATHS.some((p) => pathname.startsWith(p));

  if ((isStudentPath || isAdminPath) && !user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (isAdminPath && user?.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/lessons/:path*",
    "/practice/:path*",
    "/progress/:path*",
    "/admin/:path*",
  ],
};
