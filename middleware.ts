import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { sessionCookieName, verifySessionToken } from '@/lib/auth/session';

const protectedPaths = ['/academy', '/certificate'];

export function middleware(request: NextRequest) {
  const isProtected = protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path));
  if (!isProtected) return NextResponse.next();

  const token = request.cookies.get(sessionCookieName)?.value;
  const user = verifySessionToken(token);

  if (!user) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/academy/:path*', '/certificate/:path*'],
};
