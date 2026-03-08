import { NextResponse } from 'next/server';
import { authenticateUser, createSessionToken, sessionCookieName } from '@/lib/auth/session';

export async function POST(request: Request) {
  let body: { email?: string; password?: string } = {};

  try {
    body = (await request.json()) as { email?: string; password?: string };
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const email = body.email ?? '';
  const password = body.password ?? '';

  const user = authenticateUser(email, password);
  if (!user) {
    return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
  }

  const response = NextResponse.json({ user });
  response.cookies.set(sessionCookieName, createSessionToken(user), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 12,
  });

  return response;
}
