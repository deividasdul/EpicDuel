import { auth } from "./auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isAuthenticated = !!req.auth; // Check if user is authenticated
  const protectedRoutes = ["/dashboard", "/profile", "/settings"]; // Define protected routes

  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

  return NextResponse.next();
});

// Define which paths middleware should run on
export const config = {
  matcher: ["/dashboard", "/profile", "/settings"], // Apply middleware only to these routes
};
