'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type Tab = 'signin' | 'register';
type Role = 'PARENT' | 'LEARNER';

export default function AuthPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('signin');

  // Sign-in state
  const [siEmail, setSiEmail] = useState('');
  const [siPassword, setSiPassword] = useState('');
  const [siError, setSiError] = useState('');
  const [siLoading, setSiLoading] = useState(false);

  // Register state
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regRole, setRegRole] = useState<Role>('LEARNER');
  const [regError, setRegError] = useState('');
  const [regSuccess, setRegSuccess] = useState('');
  const [regLoading, setRegLoading] = useState(false);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setSiError('');
    setSiLoading(true);
    const result = await signIn('credentials', {
      email: siEmail,
      password: siPassword,
      redirect: false,
    });
    setSiLoading(false);
    if (result?.error) {
      setSiError('Incorrect email or password. Please try again.');
    } else {
      router.push('/');
      router.refresh();
    }
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setRegError('');
    setRegSuccess('');
    setRegLoading(true);

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: regName,
        email: regEmail,
        password: regPassword,
        role: regRole,
      }),
    });

    const data = await res.json();
    setRegLoading(false);

    if (!res.ok) {
      setRegError(data.error ?? 'Registration failed. Please try again.');
      return;
    }

    // Auto sign-in after registration
    setRegSuccess(`Account created for ${data.name}! Signing you in…`);
    await signIn('credentials', { email: regEmail, password: regPassword, redirect: false });
    router.push('/');
    router.refresh();
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      }}
    >
      <div className="w-full max-w-md">
        {/* Logo / Branding */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-3">🎓</div>
          <h1 className="text-3xl font-bold text-white">Cronx Academy</h1>
          <p className="text-purple-200 mt-1">Homeschooling with Sheena &amp; Thalia</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            <button
              onClick={() => setTab('signin')}
              className={`flex-1 py-4 font-semibold text-sm transition-colors ${
                tab === 'signin'
                  ? 'text-purple-700 border-b-2 border-purple-600 bg-purple-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setTab('register')}
              className={`flex-1 py-4 font-semibold text-sm transition-colors ${
                tab === 'register'
                  ? 'text-purple-700 border-b-2 border-purple-600 bg-purple-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Create Account
            </button>
          </div>

          <div className="p-8">
            {/* ── Sign In ── */}
            {tab === 'signin' && (
              <form onSubmit={handleSignIn} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={siEmail}
                    onChange={(e) => setSiEmail(e.target.value)}
                    placeholder="sheena@example.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors text-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    autoComplete="current-password"
                    value={siPassword}
                    onChange={(e) => setSiPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors text-gray-800"
                  />
                </div>

                {siError && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    {siError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={siLoading}
                  className="w-full py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 hover:-translate-y-0.5 transition-all shadow-lg disabled:opacity-60 disabled:translate-y-0"
                >
                  {siLoading ? 'Signing in…' : 'Sign In'}
                </button>
              </form>
            )}

            {/* ── Register ── */}
            {tab === 'register' && (
              <form onSubmit={handleRegister} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Full name
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="Thalia"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors text-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="thalia@example.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors text-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="At least 8 characters"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors text-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Account type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {(['LEARNER', 'PARENT'] as Role[]).map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRegRole(r)}
                        className={`py-3 rounded-xl font-semibold text-sm border-2 transition-all ${
                          regRole === r
                            ? 'bg-purple-600 text-white border-purple-600'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-purple-400'
                        }`}
                      >
                        {r === 'LEARNER' ? '🎒 Learner' : '👩‍🏫 Parent'}
                      </button>
                    ))}
                  </div>
                </div>

                {regError && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    {regError}
                  </p>
                )}
                {regSuccess && (
                  <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                    {regSuccess}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={regLoading}
                  className="w-full py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 hover:-translate-y-0.5 transition-all shadow-lg disabled:opacity-60 disabled:translate-y-0"
                >
                  {regLoading ? 'Creating account…' : 'Create Account'}
                </button>
              </form>
            )}
          </div>
        </div>

        <p className="text-center text-purple-200 text-xs mt-6">
          Cronx Academy · Private homeschool platform
        </p>
      </div>
    </div>
  );
}
