'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('operator@aquacore.academy');
  const [password, setPassword] = useState('PoolSafe!2026');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      setError('Sign-in failed. Please verify your credentials.');
      setLoading(false);
      return;
    }

    router.push('/academy');
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
      <form onSubmit={submit} className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <h1 className="text-2xl font-bold">AquaCore Academy Login</h1>
        <p className="text-sm text-slate-400">Use demo credentials to access the training platform.</p>
        <label className="block">
          <span className="text-sm">Email</span>
          <input className="mt-1 w-full rounded bg-slate-800 p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="block">
          <span className="text-sm">Password</span>
          <input type="password" className="mt-1 w-full rounded bg-slate-800 p-2" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {error && <p className="text-red-300 text-sm">{error}</p>}
        <button disabled={loading} className="w-full rounded bg-cyan-400 text-slate-950 p-2 font-semibold disabled:opacity-50">
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </main>
  );
}
