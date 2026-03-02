'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChemistryLesson, ChemistryTopicCategory } from '@/types';
import {
  chemistryTopics,
  getAllChemistryLessons,
  chemistryCategoryNames,
  chemistryCategoryIcons,
  chemistryCategoryColors,
} from '@/lib/data/chemistryLessons';

// ─── Animated Atom SVG ────────────────────────────────────────────────────────
function AtomDiagram({ electrons }: { electrons: number }) {
  const shells = [
    { r: 52, max: 2, color: '#818cf8' },
    { r: 80, max: 8, color: '#34d399' },
    { r: 108, max: 8, color: '#fb923c' },
  ];
  const electronShells: number[] = [];
  let remaining = Math.min(electrons, 18);
  for (const sh of shells) {
    const count = Math.min(remaining, sh.max);
    electronShells.push(count);
    remaining -= count;
    if (remaining <= 0) break;
  }

  return (
    <svg
      viewBox="0 0 240 240"
      className="w-40 h-40"
      aria-label={`Atom diagram with ${electrons} electrons`}
    >
      {/* Nucleus */}
      <circle cx="120" cy="120" r="18" fill="#6366f1" opacity="0.9" />
      <text x="120" y="125" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
        nucleus
      </text>

      {electronShells.map((count, shellIdx) => {
        const sh = shells[shellIdx];
        return (
          <g key={shellIdx}>
            {/* Shell ring */}
            <circle
              cx="120"
              cy="120"
              r={sh.r}
              fill="none"
              stroke={sh.color}
              strokeWidth="1.5"
              strokeDasharray="4 3"
              opacity="0.5"
            />
            {/* Electrons */}
            {Array.from({ length: count }).map((_, eIdx) => {
              const angle = (360 / count) * eIdx - 90;
              const rad = (angle * Math.PI) / 180;
              const ex = 120 + sh.r * Math.cos(rad);
              const ey = 120 + sh.r * Math.sin(rad);
              return (
                <circle
                  key={eIdx}
                  cx={ex}
                  cy={ey}
                  r="6"
                  fill={sh.color}
                  className="animate-pulse"
                  style={{ animationDelay: `${eIdx * 0.2}s` }}
                />
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

// ─── Flip Card ────────────────────────────────────────────────────────────────
function FlipCard({ term, definition }: { term: string; definition: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      className={`relative w-full min-h-[90px] rounded-2xl p-4 text-left transition-all duration-300 shadow-md border-2 cursor-pointer
        ${flipped ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-indigo-200 text-gray-800 hover:border-indigo-400'}`}
      aria-label={`Flip card: ${term}`}
    >
      {flipped ? (
        <>
          <span className="text-xs font-bold uppercase tracking-wider opacity-70 block mb-1">
            Definition
          </span>
          <span className="text-sm leading-snug">{definition}</span>
        </>
      ) : (
        <>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-1">
            Tap to reveal
          </span>
          <span className="font-bold text-base">{term}</span>
        </>
      )}
    </button>
  );
}

// ─── Quiz Panel ───────────────────────────────────────────────────────────────
function QuizPanel({ lesson }: { lesson: ChemistryLesson }) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(lesson.quizQuestions.length).fill(null),
  );
  const [submitted, setSubmitted] = useState(false);

  const score = submitted
    ? answers.filter((a, i) => a === lesson.quizQuestions[i].correctIndex).length
    : 0;

  const reset = () => {
    setAnswers(Array(lesson.quizQuestions.length).fill(null));
    setSubmitted(false);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-3xl shadow-lg border-2 border-indigo-200">
      <h3 className="text-xl font-bold text-indigo-800 mb-5 flex items-center gap-2">
        🧩 Quick Quiz
        {submitted && (
          <span
            className={`ml-auto text-base px-3 py-1 rounded-full font-bold ${score === lesson.quizQuestions.length ? 'bg-green-500 text-white' : 'bg-amber-400 text-white'}`}
          >
            {score}/{lesson.quizQuestions.length}
          </span>
        )}
      </h3>

      <div className="space-y-6">
        {lesson.quizQuestions.map((q, qi) => (
          <div key={qi}>
            <p className="font-semibold text-gray-800 mb-3">
              {qi + 1}. {q.question}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {q.options.map((opt, oi) => {
                const isSelected = answers[qi] === oi;
                const isCorrect = oi === q.correctIndex;
                let cls =
                  'px-4 py-3 rounded-xl text-sm text-left border-2 transition-all font-medium ';
                if (!submitted) {
                  cls += isSelected
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white border-gray-200 hover:border-indigo-400 text-gray-700';
                } else {
                  if (isCorrect) cls += 'bg-green-500 text-white border-green-500';
                  else if (isSelected && !isCorrect) cls += 'bg-red-400 text-white border-red-400';
                  else cls += 'bg-gray-100 text-gray-500 border-gray-200';
                }
                return (
                  <button
                    key={oi}
                    className={cls}
                    onClick={() => {
                      if (submitted) return;
                      setAnswers((prev) => {
                        const next = [...prev];
                        next[qi] = oi;
                        return next;
                      });
                    }}
                    aria-label={`Option ${oi + 1}: ${opt}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {submitted && answers[qi] !== q.correctIndex && (
              <p className="mt-2 text-sm text-green-700 font-medium">
                ✓ Correct answer: {q.options[q.correctIndex]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        {!submitted ? (
          <button
            onClick={() => setSubmitted(true)}
            disabled={answers.some((a) => a === null)}
            className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 hover:-translate-y-1 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0"
          >
            Submit Answers
          </button>
        ) : (
          <button
            onClick={reset}
            className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-purple-700 hover:-translate-y-1 transition-all"
          >
            🔄 Try Again
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Experiment Steps ─────────────────────────────────────────────────────────
function ExperimentSteps({ experiment }: { experiment: ChemistryLesson['experiments'][number] }) {
  const [checked, setChecked] = useState<boolean[]>(Array(experiment.steps.length).fill(false));
  const done = checked.filter(Boolean).length;

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border-l-4 border-amber-500 shadow-sm">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h4 className="font-bold text-amber-900 text-base">{experiment.name}</h4>
          <p className="text-sm text-amber-800 mt-1">{experiment.description}</p>
        </div>
        <span className="text-xs font-bold bg-amber-500 text-white px-2 py-1 rounded-full whitespace-nowrap">
          {done}/{experiment.steps.length}
        </span>
      </div>

      <ol className="space-y-2 mb-3">
        {experiment.steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={checked[i]}
              onChange={() =>
                setChecked((prev) => {
                  const next = [...prev];
                  next[i] = !next[i];
                  return next;
                })
              }
              aria-label={`Step ${i + 1}`}
              className="mt-1 w-4 h-4 rounded border-2 border-amber-600 text-amber-600 focus:ring-amber-500 flex-shrink-0"
            />
            <span
              className={`text-sm text-gray-800 ${checked[i] ? 'line-through text-gray-400' : ''}`}
            >
              <strong className="text-amber-700">{i + 1}.</strong> {step}
            </span>
          </li>
        ))}
      </ol>

      {experiment.safetyNote && (
        <p className="text-xs bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-xl">
          ⚠️ <strong>Safety:</strong> {experiment.safetyNote}
        </p>
      )}
    </div>
  );
}

// ─── Practice Questions ───────────────────────────────────────────────────────
function PracticeQuestions({ questions }: { questions: ChemistryLesson['practiceQuestions'] }) {
  const [revealed, setRevealed] = useState<boolean[]>(Array(questions.length).fill(false));

  return (
    <div className="space-y-3">
      {questions.map((q, i) => (
        <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p className="font-semibold text-gray-800 mb-2">
            <span className="text-indigo-600 font-bold mr-2">Q{i + 1}.</span>
            {q.question}
          </p>
          {revealed[i] ? (
            <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-xl text-sm text-green-900">
              <strong>Answer:</strong> {q.answer}
            </div>
          ) : (
            <button
              onClick={() =>
                setRevealed((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                })
              }
              className="text-sm text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
            >
              Show answer →
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Fun Fact Ticker ──────────────────────────────────────────────────────────
function FunFactTicker({ facts }: { facts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  const next = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setIdx((i) => (i + 1) % facts.length);
      setVisible(true);
    }, 300);
  }, [facts.length]);

  const prev = () => {
    setVisible(false);
    setTimeout(() => {
      setIdx((i) => (i - 1 + facts.length) % facts.length);
      setVisible(true);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-2xl px-5 py-4 flex items-center gap-3 shadow-lg">
      <span className="text-2xl flex-shrink-0">💡</span>
      <p
        className={`flex-1 text-sm font-medium transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        <span className="opacity-70 text-xs block mb-0.5">
          Fun Fact {idx + 1}/{facts.length}
        </span>
        {facts[idx]}
      </p>
      <div className="flex gap-1">
        <button
          onClick={prev}
          aria-label="Previous fact"
          className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all text-sm"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next fact"
          className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all text-sm"
        >
          ›
        </button>
      </div>
    </div>
  );
}

// ─── Category Picker ──────────────────────────────────────────────────────────
function CategoryPicker({
  selected,
  onSelect,
}: {
  selected: ChemistryTopicCategory | 'all';
  onSelect: (c: ChemistryTopicCategory | 'all') => void;
}) {
  const categories = Object.keys(chemistryTopics) as ChemistryTopicCategory[];
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
      <button
        onClick={() => onSelect('all')}
        className={`flex-shrink-0 px-4 py-2 rounded-xl font-semibold text-sm transition-all border-2
          ${selected === 'all' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white border-gray-200 text-gray-700 hover:border-indigo-400'}`}
      >
        All Topics
      </button>
      {categories.map((cat) => {
        const colors = chemistryCategoryColors[cat];
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`flex-shrink-0 px-4 py-2 rounded-xl font-semibold text-sm transition-all border-2
              ${selected === cat ? `${colors.badge} text-white border-transparent` : 'bg-white border-gray-200 text-gray-700 hover:border-indigo-400'}`}
          >
            {chemistryCategoryIcons[cat]} {chemistryCategoryNames[cat]}
          </button>
        );
      })}
    </div>
  );
}

// ─── Lesson Browser ───────────────────────────────────────────────────────────
function LessonBrowser({
  selectedCategory,
  completedLessons,
  onSelect,
}: {
  selectedCategory: ChemistryTopicCategory | 'all';
  completedLessons: string[];
  onSelect: (lesson: ChemistryLesson) => void;
}) {
  const categories = Object.keys(chemistryTopics) as ChemistryTopicCategory[];
  const visibleCategories = selectedCategory === 'all' ? categories : [selectedCategory];

  return (
    <div className="space-y-6">
      {visibleCategories.map((cat) => {
        const colors = chemistryCategoryColors[cat];
        return (
          <div
            key={cat}
            className={`bg-gradient-to-br ${colors.bg} rounded-3xl p-5 border-2 ${colors.border}`}
          >
            <h3 className={`text-lg font-bold ${colors.text} mb-4 flex items-center gap-2`}>
              {chemistryCategoryIcons[cat]} {chemistryCategoryNames[cat]}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {chemistryTopics[cat].map((lesson) => {
                const done = completedLessons.includes(lesson.title);
                return (
                  <button
                    key={lesson.title}
                    onClick={() => onSelect(lesson)}
                    className="text-left bg-white rounded-2xl p-4 shadow-sm border-2 border-transparent hover:border-indigo-400 hover:-translate-y-1 transition-all"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-semibold text-gray-800 text-sm leading-snug">
                        {lesson.title}
                      </span>
                      {done && <span className="text-green-500 text-lg flex-shrink-0">✅</span>}
                    </div>
                    <div className="flex gap-2 mt-2">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full text-white ${colors.badge}`}
                      >
                        {lesson.category}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-600 capitalize">
                        {lesson.level}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ChemistryInteractive() {
  const readCompleted = (): string[] => {
    if (typeof window === 'undefined') return [];
    if (typeof localStorage?.getItem !== 'function') return [];
    const saved = localStorage.getItem('completedChemistryLessons');
    if (!saved) return [];
    try {
      const parsed: unknown = JSON.parse(saved);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter((item): item is string => typeof item === 'string');
    } catch {
      return [];
    }
  };

  const [currentLesson, setCurrentLesson] = useState<ChemistryLesson | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>(readCompleted);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState('');
  const [viewMode, setViewMode] = useState<'lesson' | 'browse'>('lesson');
  const [selectedCategory, setSelectedCategory] = useState<ChemistryTopicCategory | 'all'>('all');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['objectives', 'concepts']),
  );

  const allLessons = getAllChemistryLessons();

  const pickRandomLesson = (completed: string[]) => {
    const available = allLessons.filter((l) => !completed.includes(l.lesson.title));
    const pool = available.length > 0 ? available : allLessons;
    return pool[Math.floor(Math.random() * pool.length)].lesson;
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completed = readCompleted();
      const date = new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      queueMicrotask(() => {
        setCurrentLesson(pickRandomLesson(completed));
        setCurrentDate(date);
        setIsLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const markComplete = () => {
    if (!currentLesson || typeof window === 'undefined') return;
    if (completedLessons.includes(currentLesson.title)) return;
    const updated = [...completedLessons, currentLesson.title];
    setCompletedLessons(updated);
    localStorage.setItem('completedChemistryLessons', JSON.stringify(updated));
  };

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const SectionToggle = ({
    id,
    label,
    icon,
    children,
  }: {
    id: string;
    label: string;
    icon: string;
    children: React.ReactNode;
  }) => {
    const open = expandedSections.has(id);
    return (
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <button
          onClick={() => toggleSection(id)}
          className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
          aria-expanded={open}
        >
          <span className="font-bold text-gray-800 flex items-center gap-2">
            {icon} {label}
          </span>
          <span
            className={`text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          >
            ▾
          </span>
        </button>
        {open && <div className="px-6 pb-6">{children}</div>}
      </div>
    );
  };

  // ── Loading ─────────────────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-5 py-8">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
          <div className="text-6xl mb-4 animate-bounce">⚗️</div>
          <p className="text-xl text-gray-600">Mixing the reagents…</p>
        </div>
      </div>
    );
  }

  const isCompleted = !!currentLesson && completedLessons.includes(currentLesson.title);
  const categoryKey = currentLesson
    ? (Object.keys(chemistryTopics).find((k) =>
        chemistryTopics[k as ChemistryTopicCategory].some((l) => l.title === currentLesson.title),
      ) as ChemistryTopicCategory | undefined)
    : undefined;
  const catColors = categoryKey ? chemistryCategoryColors[categoryKey] : null;

  return (
    <div className="max-w-4xl mx-auto px-5 py-8 space-y-6">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-white text-indigo-600 border-2 border-indigo-600 px-5 py-3 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all hover:-translate-y-1"
      >
        ← Back to Cronx Academy
      </Link>

      {/* Header */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border-[3px] border-indigo-500">
        <div className="flex items-center gap-4 mb-6">
          <div className="text-5xl">⚗️</div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600">
              Chemistry Interactive
            </h1>
            <p className="text-gray-600 mt-1">
              Atoms, reactions, and the molecules of life — for Thalia
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-2xl">
            <div className="text-xs font-semibold text-purple-900 mb-1">📅 Today</div>
            <div className="text-sm font-bold text-gray-800 leading-snug">
              {currentDate || 'Loading…'}
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-emerald-200 p-4 rounded-2xl">
            <div className="text-xs font-semibold text-green-900 mb-1">✅ Progress</div>
            <div className="text-sm font-bold text-gray-800">
              {completedLessons.length}/{allLessons.length} lessons
            </div>
            <div className="mt-2 bg-white rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-green-500 h-full rounded-full transition-all"
                style={{ width: `${(completedLessons.length / allLessons.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 bg-gradient-to-br from-blue-100 to-cyan-200 p-4 rounded-2xl">
            <div className="text-xs font-semibold text-blue-900 mb-1">📚 Topics</div>
            <div className="text-sm font-bold text-gray-800">6 chemistry topics</div>
          </div>
        </div>

        {/* View mode toggle */}
        <div className="flex gap-3">
          <button
            onClick={() => setViewMode('lesson')}
            className={`flex-1 py-3 rounded-2xl font-bold transition-all border-2 text-sm
              ${viewMode === 'lesson' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'}`}
          >
            🎲 Random Lesson
          </button>
          <button
            onClick={() => setViewMode('browse')}
            className={`flex-1 py-3 rounded-2xl font-bold transition-all border-2 text-sm
              ${viewMode === 'browse' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'}`}
          >
            🔍 Browse Topics
          </button>
        </div>
      </div>

      {/* Browse mode */}
      {viewMode === 'browse' && (
        <div className="space-y-4">
          <CategoryPicker selected={selectedCategory} onSelect={setSelectedCategory} />
          <LessonBrowser
            selectedCategory={selectedCategory}
            completedLessons={completedLessons}
            onSelect={(lesson) => {
              setCurrentLesson(lesson);
              setViewMode('lesson');
              setExpandedSections(new Set(['objectives', 'concepts']));
            }}
          />
        </div>
      )}

      {/* Lesson mode */}
      {viewMode === 'lesson' && currentLesson && (
        <>
          {/* Fun Fact Ticker */}
          <FunFactTicker facts={currentLesson.funFacts} />

          {/* Lesson header */}
          <div
            className={`bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden`}
          >
            {/* Decorative atom */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20">
              <AtomDiagram electrons={6} />
            </div>
            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-3">
                {catColors && (
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-bold text-white ${catColors.badge}`}
                  >
                    {chemistryCategoryIcons[categoryKey!]} {currentLesson.category}
                  </span>
                )}
                <span className="text-xs px-3 py-1 rounded-full bg-white/20 font-semibold capitalize">
                  {currentLesson.level}
                </span>
                {isCompleted && (
                  <span className="text-xs px-3 py-1 rounded-full bg-green-400 font-bold">
                    ✅ Completed
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 leading-snug">
                {currentLesson.title}
              </h2>
              <p className="text-indigo-200 text-sm leading-relaxed">
                {currentLesson.introduction}
              </p>
            </div>
          </div>

          {/* Objectives */}
          <SectionToggle id="objectives" label="Learning Objectives" icon="🎯">
            <ul className="space-y-2 mt-2">
              {currentLesson.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-indigo-600 font-bold mt-0.5">✦</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </SectionToggle>

          {/* Key Concepts — Flip Cards */}
          <SectionToggle id="concepts" label="Key Concepts — Tap to Flip!" icon="🃏">
            <p className="text-sm text-gray-500 mb-4">Click each card to reveal the definition.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {currentLesson.keyConceptsAndDefinitions.map((c, i) => (
                <FlipCard key={i} term={c.term} definition={c.definition} />
              ))}
            </div>
          </SectionToggle>

          {/* Main Content */}
          <SectionToggle id="content" label="What You Need to Know" icon="📚">
            <ol className="space-y-3 mt-2">
              {currentLesson.mainContent.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-gray-800 leading-snug pt-0.5">{point}</span>
                </li>
              ))}
            </ol>
          </SectionToggle>

          {/* Experiments */}
          <SectionToggle id="experiments" label="Lab Experiments" icon="🔬">
            <div className="space-y-4 mt-2">
              {currentLesson.experiments.map((exp, i) => (
                <ExperimentSteps key={i} experiment={exp} />
              ))}
            </div>
          </SectionToggle>

          {/* Practice Questions */}
          <SectionToggle id="practice" label="Practice Questions" icon="✏️">
            <div className="mt-2">
              <PracticeQuestions questions={currentLesson.practiceQuestions} />
            </div>
          </SectionToggle>

          {/* Quiz */}
          <QuizPanel lesson={currentLesson} />

          {/* Real-World Connections */}
          <SectionToggle id="realworld" label="Real-World Connections" icon="🌍">
            <ul className="space-y-3 mt-2">
              {currentLesson.realWorldConnections.map((c, i) => (
                <li key={i} className="flex items-start gap-3 bg-emerald-50 rounded-2xl px-4 py-3">
                  <span className="text-emerald-600 text-lg">🌱</span>
                  <span className="text-gray-800 text-sm">{c}</span>
                </li>
              ))}
            </ul>
          </SectionToggle>

          {/* Further Reading */}
          <SectionToggle id="reading" label="Further Reading" icon="📖">
            <p className="text-gray-700 mt-2 text-sm bg-blue-50 rounded-2xl px-4 py-3 border border-blue-100">
              🔗 {currentLesson.furtherReading}
            </p>
          </SectionToggle>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={markComplete}
              disabled={isCompleted}
              className={`flex-1 px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3
                ${isCompleted ? 'bg-green-100 text-green-700 border-2 border-green-300 cursor-default' : 'bg-green-500 text-white hover:bg-green-600 hover:-translate-y-1 hover:shadow-xl'}`}
            >
              {isCompleted ? '✅ Completed!' : '✅ Mark Complete'}
            </button>
            <button
              onClick={() => {
                setCurrentLesson(pickRandomLesson(completedLessons));
                setExpandedSections(new Set(['objectives', 'concepts']));
              }}
              className="flex-1 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-xl transition-all flex items-center justify-center gap-3"
            >
              🔄 New Lesson
            </button>
          </div>
        </>
      )}

      {/* Teaching Tips */}
      <div className="bg-white p-8 rounded-3xl shadow-xl">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Teaching Tips for Sheena</h3>
        <ul className="space-y-3">
          {[
            'Use everyday examples first — cooking, cleaning, the body — before moving to abstract theory.',
            'The flip cards are great for quick vocabulary review at the start or end of a session.',
            'Encourage Thalia to attempt the quiz before revealing answers — mistakes are learning moments.',
            'The experiment checklist helps structure hands-on time; always read safety notes together first.',
            'Connect chemistry to Caribbean and African contexts where possible — e.g. rum distillation, coral reef acidification.',
            'If a topic feels hard, try the foundation-level lessons first before returning to standard.',
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <span className="text-indigo-600 font-bold flex-shrink-0">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
