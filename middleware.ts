import { NextRequest, NextResponse } from "next/server";

const STUDENT_PATHS = ["/dashboard", "/lessons", "/practice", "/progress"];
const ADMIN_PATHS   = ["/admin"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // Replace cookie name with your real session cookie
  const userRaw = req.cookies.get("user")?.value;
  const user = userRaw ? JSON.parse(decodeURIComponent(userRaw)) : null;

  const isStudentPath = STUDENT_PATHS.some((p) => pathname.startsWith(p));
  const isAdminPath   = ADMIN_PATHS.some((p) => pathname.startsWith(p));

  if ((isStudentPath || isAdminPath) && !user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (isAdminPath && user?.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/lessons/:path*", "/practice/:path*",
            "/progress/:path*", "/admin/:path*"],
};
