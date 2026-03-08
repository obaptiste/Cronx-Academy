import { describe, expect, it } from 'vitest';
import {
  authenticateUser,
  createSessionToken,
  verifySessionToken,
} from '@/lib/auth/session';

describe('session auth', () => {
  it('authenticates known demo user', () => {
    const user = authenticateUser('operator@aquacore.academy', 'PoolSafe!2026');
    expect(user?.name).toBe('Jordan Blake');
  });

  it('rejects invalid password', () => {
    const user = authenticateUser('operator@aquacore.academy', 'bad-pass');
    expect(user).toBeNull();
  });

  it('creates and verifies signed token', () => {
    const user = authenticateUser('supervisor@aquacore.academy', 'LeadOps!2026');
    expect(user).not.toBeNull();
    const token = createSessionToken(user!);
    expect(verifySessionToken(token)?.email).toBe('supervisor@aquacore.academy');
  });

  it('rejects tampered token payload', () => {
    const user = authenticateUser('supervisor@aquacore.academy', 'LeadOps!2026');
    expect(user).not.toBeNull();

    const token = createSessionToken(user!);
    const [payload, signature] = token.split('.');
    const tamperedPayload = Buffer.from(
      JSON.stringify({ ...JSON.parse(Buffer.from(payload, 'base64url').toString()), role: 'admin' }),
    ).toString('base64url');

    expect(verifySessionToken(`${tamperedPayload}.${signature}`)).toBeNull();
  });
});
