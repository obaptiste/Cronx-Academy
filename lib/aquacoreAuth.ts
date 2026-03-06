export interface AcademyUser {
  name: string;
  email: string;
  password: string;
}

interface StoredAcademyUser {
  name: string;
  email: string;
  passwordHash: string;
  passwordSalt: string;
}

interface LegacyStoredAcademyUser {
  name: string;
  email: string;
  password: string;
}

const USERS_KEY = 'aquacore-users';
const SESSION_KEY = 'aquacore-session';

const canUseStorage = () => typeof window !== 'undefined';

export function getRegisteredUsers(): Pick<AcademyUser, 'name' | 'email'>[] {
  return getStoredUsers().map((user) => ({ name: user.name, email: user.email }));
}

function getStoredUsers(): (StoredAcademyUser | LegacyStoredAcademyUser)[] {
  if (!canUseStorage()) return [];
  const raw = window.localStorage.getItem(USERS_KEY);
  if (!raw) return [];

  const parsed = JSON.parse(raw) as unknown;
  if (!Array.isArray(parsed)) return [];

  return parsed.filter((entry): entry is StoredAcademyUser | LegacyStoredAcademyUser => {
    if (!entry || typeof entry !== 'object') return false;
    const candidate = entry as Partial<StoredAcademyUser & LegacyStoredAcademyUser>;

    const hasBase = typeof candidate.name === 'string' && typeof candidate.email === 'string';
    const isHashed = typeof candidate.passwordHash === 'string' && typeof candidate.passwordSalt === 'string';
    const isLegacy = typeof candidate.password === 'string';

    return hasBase && (isHashed || isLegacy);
  });
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

function createSalt(byteLength = 16): string {
  const randomBytes = new Uint8Array(byteLength);
  crypto.getRandomValues(randomBytes);
  return toHex(randomBytes.buffer);
}

async function hashPassword(password: string, salt: string): Promise<string> {
  const enc = new TextEncoder();
  const data = enc.encode(`${salt}:${password}`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return toHex(digest);
}

export async function registerUser(user: AcademyUser): Promise<{ ok: boolean; message: string }> {
  const users = getStoredUsers();
  const exists = users.some((existing) => existing.email.toLowerCase() === user.email.toLowerCase());

  if (exists) {
    return { ok: false, message: 'An account with that email already exists.' };
  }

  if (!canUseStorage()) {
    return { ok: false, message: 'Storage is not available in this environment.' };
  }

  const passwordSalt = createSalt();
  const passwordHash = await hashPassword(user.password, passwordSalt);
  const nextUsers: (StoredAcademyUser | LegacyStoredAcademyUser)[] = [
    ...users,
    {
      name: user.name,
      email: user.email,
      passwordHash,
      passwordSalt,
    },
  ];

  window.localStorage.setItem(USERS_KEY, JSON.stringify(nextUsers));
  window.localStorage.setItem(SESSION_KEY, JSON.stringify({ name: user.name, email: user.email }));

  return { ok: true, message: 'Account created successfully.' };
}

export async function loginUser(email: string, password: string): Promise<{ ok: boolean; message: string }> {
  const users = getStoredUsers();
  const user = users.find((existing) => existing.email.toLowerCase() === email.toLowerCase());

  if (!user) {
    return { ok: false, message: 'Invalid email or password.' };
  }

  let passwordMatches = false;

  if ('passwordHash' in user) {
    const attemptedHash = await hashPassword(password, user.passwordSalt);
    passwordMatches = attemptedHash === user.passwordHash;
  } else {
    passwordMatches = user.password === password;

    if (passwordMatches && canUseStorage()) {
      const passwordSalt = createSalt();
      const passwordHash = await hashPassword(password, passwordSalt);

      const migratedUsers: (StoredAcademyUser | LegacyStoredAcademyUser)[] = users.map((existing) => {
        if (existing.email.toLowerCase() !== email.toLowerCase()) {
          return existing;
        }

        return {
          name: existing.name,
          email: existing.email,
          passwordHash,
          passwordSalt,
        };
      });

      window.localStorage.setItem(USERS_KEY, JSON.stringify(migratedUsers));
    }
  }

  if (!passwordMatches) {
    return { ok: false, message: 'Invalid email or password.' };
  }

  if (!canUseStorage()) {
    return { ok: false, message: 'Storage is not available in this environment.' };
  }

  window.localStorage.setItem(SESSION_KEY, JSON.stringify({ name: user.name, email: user.email }));
  return { ok: true, message: 'Signed in successfully.' };
}

export function getSessionUser(): Pick<AcademyUser, 'name' | 'email'> | null {
  if (!canUseStorage()) return null;
  const raw = window.localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  return JSON.parse(raw) as Pick<AcademyUser, 'name' | 'email'>;
}

export function logoutUser() {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(SESSION_KEY);
}
