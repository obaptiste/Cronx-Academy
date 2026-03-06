import { redirect } from 'next/navigation';
import PrintButton from '@/components/academy/PrintButton';
import { getCurrentUser } from '@/lib/auth/session';

export default async function CertificatePage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string }>;
}) {
  const user = await getCurrentUser();
  if (!user) redirect('/login');

  const params = await searchParams;
  const certificateName = params.name ?? user.name;
  const date = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
      <article className="w-full max-w-4xl bg-gradient-to-br from-slate-900 to-cyan-950 border border-cyan-800 rounded-2xl p-10 text-center space-y-4">
        <p className="uppercase tracking-[0.2em] text-cyan-300">AquaCore Academy</p>
        <h1 className="text-4xl font-bold">Certificate of Completion</h1>
        <p>This certifies that</p>
        <p className="text-3xl font-semibold text-cyan-200">{certificateName}</p>
        <p>has successfully completed the Pool Maintenance Operations Programme (12 modules).</p>
        <p className="text-slate-300">Issued on {date}</p>
        <PrintButton />
      </article>
    </main>
  );
}
