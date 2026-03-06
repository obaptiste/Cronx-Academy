import Link from 'next/link';
import { poolModules } from '@/lib/data/poolModules';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="text-center space-y-4">
          <p className="uppercase tracking-[0.25em] text-cyan-300 text-sm">Cronx Academy presents</p>
          <h1 className="text-5xl font-bold">AquaCore Academy</h1>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Professional, engaging pool maintenance training with 12 complete modules, interactive quizzes, UK compliance references, and completion certification.
          </p>
          <div className="flex justify-center gap-3">
            <Link href="/login" className="px-5 py-2 rounded-lg bg-cyan-400 text-slate-950 font-semibold">Sign in to continue</Link>
            <a href="#curriculum" className="px-5 py-2 rounded-lg border border-slate-700">Preview curriculum</a>
          </div>
        </header>

        <section id="curriculum" className="grid md:grid-cols-2 gap-4">
          {poolModules.map((module, idx) => (
            <article key={module.id} className="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <p className="text-xs text-cyan-300 mb-1">Module {idx + 1}</p>
              <h2 className="font-semibold">{module.title}</h2>
              <p className="text-sm text-slate-400 mt-1">{module.objective}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
