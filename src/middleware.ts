import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of paths that require authentication
const protectedPaths = ['/trading'];

// List of paths that should redirect to dashboard if already authenticated
const authPaths = ['/login'];

export function middleware(request: NextRequest) {
  const userStr = request.cookies.get('finance_society_current_user')?.value;
  const path = request.nextUrl.pathname;

  const isAuthenticated = !!userStr;

  // If trying to access protected routes without authentication
  if (protectedPaths.includes(path) && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', path);
    return NextResponse.redirect(loginUrl);
  }

  // If trying to access auth pages while already authenticated
  if (authPaths.includes(path) && isAuthenticated) {
    return NextResponse.redirect(new URL('/trading', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [...protectedPaths, ...authPaths],
};
