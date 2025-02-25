import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of paths that require authentication
const protectedPaths = ['/trading', '/trading/:path*'];

// List of paths that should redirect to dashboard if already authenticated
const authPaths = ['/login', '/register'];

export function middleware(request: NextRequest) {
  const userStr = request.cookies.get('finance_society_current_user')?.value;
  const path = request.nextUrl.pathname;

  const isAuthenticated = !!userStr;

  // Normalize path for case-insensitive matching
  const normalizedPath = path.toLowerCase();

  // If trying to access protected routes without authentication
  if (
    protectedPaths.some((protectedPath) =>
      normalizedPath.startsWith(protectedPath.replace('/:path*', ''))
    ) &&
    !isAuthenticated
  ) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', path); // Preserve the original path for redirection after login
    return NextResponse.redirect(loginUrl);
  }

  // If trying to access auth pages while already authenticated
  if (
    authPaths.some((authPath) => normalizedPath === authPath.toLowerCase()) &&
    isAuthenticated
  ) {
    return NextResponse.redirect(new URL('/trading', request.url));
  }

  return NextResponse.next();
}

// Static configuration for middleware
export const config = {
  matcher: ['/trading', '/trading/:path*', '/login', '/register'],
};