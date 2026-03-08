import { cookies } from 'next/headers';
import { createHmac, timingSafeEqual } from 'node:crypto';

const SESSION_COOKIE = 'aquacore_session';

export type AcademyUser = {
  name: string;
  email: string;
  role: 'operator' | 'supervisor';
};

const users: Record<string, { password: string; role: AcademyUser['role']; name: string }> = {
  'operator@aquacore.academy': {
    password: 'PoolSafe!2026',
    role: 'operator',
    name: 'Jordan Blake',
  },
  'supervisor@aquacore.academy': {
    password: 'LeadOps!2026',
    role: 'supervisor',
    name: 'Alex Morgan',
  },
};

export function createSessionToken(user: AcademyUser) {
  const payload = Buffer.from(JSON.stringify(user)).toString('base64url');
  const signature = signPayload(payload);
  return `${payload}.${signature}`;
}

export function verifySessionToken(token?: string): AcademyUser | null {
  if (!token) return null;

  try {
    const [payload, signature] = token.split('.');
    if (!payload || !signature) return null;

    const expected = signPayload(payload);
    const isValidSignature = timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
    if (!isValidSignature) return null;

    const parsed = JSON.parse(Buffer.from(payload, 'base64url').toString()) as AcademyUser;
    if (!parsed.email || !parsed.name || !isValidRole(parsed.role)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function authenticateUser(email: string, password: string): AcademyUser | null {
  const normalizedEmail = email.trim().toLowerCase();
  const found = users[normalizedEmail];
  if (!found || found.password !== password) return null;

  return {
    email: normalizedEmail,
    name: found.name,
    role: found.role,
  };
}

export async function getCurrentUser() {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  return verifySessionToken(token);
}

function getSessionSecret() {
  return process.env.SESSION_SECRET ?? 'local-dev-session-secret';
}

function signPayload(payload: string) {
  return createHmac('sha256', getSessionSecret()).update(payload).digest('base64url');
}

function isValidRole(value: string): value is AcademyUser['role'] {
  return value === 'operator' || value === 'supervisor';
}

export const sessionCookieName = SESSION_COOKIE;
