'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { AcademyUser } from '@/lib/auth/session';
import { poolModules } from '@/lib/data/poolModules';

type Props = { user: AcademyUser };

const maintenance = {
  daily: ['Record pH & free chlorine every 2 hours', 'Check pump room alarms and dosing levels', 'Complete opening and closing walk-through'],
  weekly: ['Backwash filters per pressure trend', 'Inspect chemical bunding and stock integrity', 'Review incident and near-miss log'],
  monthly: ['Calibrate probes and dosing control systems', 'Validate emergency response drills', 'Audit records against PWTAG expectations'],
};

function simplifyText(text: string) {
  const [first, second] = text.split('. ');
  return `${first ?? text}. ${second ?? ''}`.trim();
}

export default function AcademyExperience({ user }: Props) {
  const [openedModule, setOpenedModule] = useState(poolModules[0].id);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showSimplified, setShowSimplified] = useState<Record<string, boolean>>({});
  const [activeSpeech, setActiveSpeech] = useState<string | null>(null);

  const completedCount = useMemo(
    () =>
      poolModules.filter((module) => selectedAnswers[module.id] === module.quiz.answer)
        .length,
    [selectedAnswers],
  );
  const progress = Math.round((completedCount / poolModules.length) * 100);
  const isComplete = completedCount === poolModules.length;

  const speak = (moduleId: string, text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setActiveSpeech(null);
    setActiveSpeech(moduleId);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-slate-800 z-20">
        <div className="h-full bg-cyan-400 transition-all" style={{ width: `${progress}%` }} />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950 border border-cyan-900 rounded-2xl p-8">
          <p className="text-cyan-300 text-sm uppercase tracking-[0.2em] mb-2">AquaCore Academy</p>
          <h1 className="text-4xl font-bold mb-3">Pool Maintenance Operations Programme</h1>
          <p className="text-slate-300 max-w-3xl">
            Welcome, {user.name}. Complete all 12 modules to unlock your completion certificate. This curriculum follows UK best-practice references including HSG179, COSHH, PWTAG, RIDDOR, and environmental discharge guidance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">Progress: {progress}%</span>
            <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">Completed quizzes: {completedCount}/{poolModules.length}</span>
            {isComplete && (
              <Link href={`/certificate?name=${encodeURIComponent(user.name)}`} className="px-3 py-1 rounded-full bg-cyan-500 text-slate-950 font-semibold">
                View Completion Certificate
              </Link>
            )}
          </div>
        </header>

        <section className="grid md:grid-cols-3 gap-4">
          {Object.entries(maintenance).map(([period, tasks]) => (
            <article key={period} className="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <h2 className="font-semibold text-cyan-300 capitalize mb-2">{period} maintenance</h2>
              <ul className="text-sm text-slate-300 space-y-1 list-disc ml-5">
                {tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="bg-red-950/40 border border-red-900 rounded-xl p-5">
          <h2 className="text-xl font-semibold text-red-200">Emergency Quick Reference</h2>
          <ul className="mt-3 space-y-1 text-sm text-red-100 list-disc ml-5">
            <li>Isolate the affected water body and stop admissions.</li>
            <li>Follow contamination treatment matrix and notify duty manager.</li>
            <li>Capture factual records for incident log and RIDDOR assessment.</li>
          </ul>
        </section>

        <section className="space-y-3">
          {poolModules.map((module) => {
            const selected = selectedAnswers[module.id];
            const isCorrect = selected === module.quiz.answer;
            const isOpen = openedModule === module.id;
            const textBody = `${module.lesson} Procedure: ${module.procedure.join(', ')}`;

            return (
              <article key={module.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <button
                  className="w-full text-left p-4 flex items-center justify-between"
                  onClick={() => setOpenedModule(isOpen ? '' : module.id)}
                >
                  <div>
                    <h3 className="font-semibold">{module.title}</h3>
                    <p className="text-xs text-slate-400">{module.duration} · {module.objective}</p>
                  </div>
                  <span className="text-cyan-300">{isCorrect ? '✅' : isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 space-y-3 text-sm">
                    <p className="text-slate-300">
                      {showSimplified[module.id] ? simplifyText(module.lesson) : module.lesson}
                    </p>

                    <div className="flex gap-2">
                      <button
                        className="px-3 py-1 rounded bg-slate-800 border border-slate-700"
                        onClick={() => setShowSimplified((prev) => ({ ...prev, [module.id]: !prev[module.id] }))}
                      >
                        ✨ Simplify
                      </button>
                      <button
                        className="px-3 py-1 rounded bg-slate-800 border border-slate-700"
                        onClick={() => speak(module.id, textBody)}
                      >
                        {activeSpeech === module.id ? '🔊 Reading...' : '🔊 Read Aloud'}
                      </button>
                    </div>

                    <ol className="list-decimal ml-5 text-slate-300 space-y-1">
                      {module.procedure.map((step) => <li key={step}>{step}</li>)}
                    </ol>

                    <p className="text-xs text-cyan-300">Regulatory references: {module.regulations.join(' · ')}</p>

                    <fieldset className="space-y-2 border border-slate-800 rounded-lg p-3">
                      <legend className="text-sm font-semibold">Quiz: {module.quiz.question}</legend>
                      {module.quiz.options.map((option) => (
                        <label key={option} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name={module.id}
                            value={option}
                            checked={selected === option}
                            onChange={() => setSelectedAnswers((prev) => ({ ...prev, [module.id]: option }))}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                      {selected && (
                        <p className={isCorrect ? 'text-emerald-300' : 'text-amber-300'}>
                          {isCorrect ? 'Correct.' : 'Not quite.'} {module.quiz.explanation}
                        </p>
                      )}
                    </fieldset>
                  </div>
                )}
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
}
