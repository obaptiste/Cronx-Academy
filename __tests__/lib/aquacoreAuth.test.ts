import { beforeEach, describe, expect, it } from 'vitest';
import {
  getRegisteredUsers,
  getSessionUser,
  loginUser,
  logoutUser,
  registerUser,
} from '@/lib/aquacoreAuth';

describe('aquacoreAuth', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('registers a new user and creates a session without storing plaintext password', async () => {
    const result = await registerUser({
      name: 'Pool Operator',
      email: 'operator@example.com',
      password: 'Secret123',
    });

    expect(result.ok).toBe(true);
    expect(getRegisteredUsers()).toHaveLength(1);
    expect(getSessionUser()).toEqual({ name: 'Pool Operator', email: 'operator@example.com' });

    const storedUsers = JSON.parse(window.localStorage.getItem('aquacore-users') ?? '[]') as Array<
      Record<string, string>
    >;

    expect(storedUsers[0]).toMatchObject({
      name: 'Pool Operator',
      email: 'operator@example.com',
    });
    expect(storedUsers[0].password).toBeUndefined();
    expect(typeof storedUsers[0].passwordHash).toBe('string');
    expect(typeof storedUsers[0].passwordSalt).toBe('string');
  });

  it('prevents duplicate registration by email', async () => {
    await registerUser({ name: 'One', email: 'operator@example.com', password: 'Secret123' });

    const duplicate = await registerUser({ name: 'Two', email: 'OPERATOR@example.com', password: 'NewPass' });
    expect(duplicate.ok).toBe(false);
    expect(getRegisteredUsers()).toHaveLength(1);
  });

  it('allows login and logout flow', async () => {
    await registerUser({ name: 'One', email: 'operator@example.com', password: 'Secret123' });
    logoutUser();

    const badLogin = await loginUser('operator@example.com', 'wrong');
    expect(badLogin.ok).toBe(false);

    const success = await loginUser('operator@example.com', 'Secret123');
    expect(success.ok).toBe(true);
    expect(getSessionUser()).toEqual({ name: 'One', email: 'operator@example.com' });

    logoutUser();
    expect(getSessionUser()).toBeNull();
  });
});
