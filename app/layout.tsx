import type { Metadata } from 'next';
import Link from 'next/link';
import { safetyBanner } from '@/lib/fault-path/data';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fault Path UK',
  description: 'Learn domestic fault-finding logic for UK electrical installations.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className="bg-slate-100 text-slate-900 antialiased">
        <header className="sticky top-0 z-20 border-b border-red-200 bg-red-700 px-4 py-2 text-sm font-semibold text-white">
          {safetyBanner}
        </header>
        <nav className="border-b bg-white px-4 py-3 text-sm">
          <div className="mx-auto flex max-w-5xl gap-4">
            <Link href="/">Fault Path UK</Link>
            <Link href="/diagnose">Start diagnosis</Link>
            <Link href="/library">Fault library</Link>
            <Link href="/tutor">Tutor view</Link>
          </div>
        </nav>
        <main className="mx-auto max-w-5xl p-4">{children}</main>
      </body>
    </html>
  );
}
