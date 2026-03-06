import { cookies } from 'next/headers';

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
  return Buffer.from(JSON.stringify(user)).toString('base64url');
}

export function verifySessionToken(token?: string): AcademyUser | null {
  if (!token) return null;

  try {
    const parsed = JSON.parse(Buffer.from(token, 'base64url').toString()) as AcademyUser;
    if (!parsed.email || !parsed.name || !parsed.role) return null;
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

export const sessionCookieName = SESSION_COOKIE;
