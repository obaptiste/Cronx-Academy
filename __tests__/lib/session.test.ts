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
});
