'use client';

import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { MathLesson, DifficultyLevel } from '@/types';
import { mathTopics } from '@/lib/data/mathLessons';

const difficultyDescriptions: Record<DifficultyLevel, string> = {
  foundation: 'Building core skills with extra support',
  standard: 'Year 9 expected standard',
  higher: 'Extended challenges and deeper thinking',
};

type MathCategory = keyof typeof mathTopics;
type LessonSection = 'warmUp' | 'main' | 'practice' | 'extension' | 'homework';

const CATEGORY_META: Record<MathCategory, { label: string; icon: string; accent: string }> = {
  algebra: { label: 'Algebra Lab', icon: '🧩', accent: 'from-indigo-600 to-violet-700' },
  geometry: { label: 'Geometry Studio', icon: '📐', accent: 'from-sky-600 to-cyan-700' },
  number: { label: 'Number Sense', icon: '💷', accent: 'from-emerald-600 to-teal-700' },
  statistics: { label: 'Data Deck', icon: '📊', accent: 'from-amber-600 to-orange-700' },
};

function readStringArrayFromStorage(key: string): string[] {
  if (typeof window === 'undefined') return [];
  if (typeof localStorage?.getItem !== 'function') return [];

  const saved = localStorage.getItem(key);
  if (!saved) return [];

  try {
    const parsed: unknown = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === 'string');
  } catch {
    return [];
  }
}

function writeStringArrayToStorage(key: string, value: string[]) {
  if (typeof window === 'undefined') return;
  if (typeof localStorage?.setItem !== 'function') return;
  localStorage.setItem(key, JSON.stringify(value));
}

function getRandomLessonFromPool(pool: MathLesson[]): MathLesson | null {
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)] ?? null;
}

export default function MathsInteractive() {
  const allLessons = useMemo(() => Object.values(mathTopics).flat(), []);

  const [currentLesson, setCurrentLesson] = useState<MathLesson | null>(null);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('standard');
  const [currentCategory, setCurrentCategory] = useState<MathCategory>('algebra');
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [visitedCategories, setVisitedCategories] = useState<MathCategory[]>(['algebra']);
  const [sectionChecklist, setSectionChecklist] = useState<Record<LessonSection, boolean>>({
    warmUp: false,
    main: false,
    practice: false,
    extension: false,
    homework: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState<string>('');
  const [viewMode, setViewMode] = useState<'lesson' | 'browse'>('lesson');

  const completionPercentage =
    allLessons.length > 0 ? Math.round((completedTopics.length / allLessons.length) * 100) : 0;

  const categoryCompletionCount = mathTopics[currentCategory].filter((lesson) =>
    completedTopics.includes(lesson.title),
  ).length;

  const pickLesson = (completed: string[], category: MathCategory) => {
    const categoryPool = mathTopics[category];
    const incompleteInCategory = categoryPool.filter((lesson) => !completed.includes(lesson.title));

    const preferredPool = incompleteInCategory.length > 0 ? incompleteInCategory : categoryPool;
    const lesson = getRandomLessonFromPool(preferredPool);

    if (!lesson) {
      setCurrentLesson(getRandomLessonFromPool(allLessons));
      return;
    }

    setCurrentLesson(lesson);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completed = readStringArrayFromStorage('completedTopics');
      const visitedRaw = readStringArrayFromStorage('visitedMathCategories');
      const validVisited = visitedRaw.filter((cat): cat is MathCategory => cat in mathTopics);
      const seededVisited: MathCategory[] = validVisited.length > 0 ? validVisited : ['algebra'];
      const initialCategory: MathCategory = seededVisited[0] ?? 'algebra';

      const date = new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });

      queueMicrotask(() => {
        setCompletedTopics(completed);
        setVisitedCategories(seededVisited);
        setCurrentCategory(initialCategory);
        pickLesson(completed, initialCategory);
        setCurrentDate(date);
        setIsLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const markComplete = () => {
    if (!currentLesson) return;
    if (completedTopics.includes(currentLesson.title)) return;

    const newCompleted = [...completedTopics, currentLesson.title];
    setCompletedTopics(newCompleted);
    writeStringArrayToStorage('completedTopics', newCompleted);
  };

  const handleNewLesson = () => {
    pickLesson(completedTopics, currentCategory);
    setViewMode('lesson');
    setSectionChecklist({
      warmUp: false,
      main: false,
      practice: false,
      extension: false,
      homework: false,
    });
  };

  const handleSelectCategory = (category: MathCategory) => {
    setCurrentCategory(category);
    setVisitedCategories((prev) => {
      if (prev.includes(category)) return prev;
      const next = [...prev, category];
      writeStringArrayToStorage('visitedMathCategories', next);
      return next;
    });
  };

  const handleSelectLesson = (lesson: MathLesson, category: MathCategory) => {
    handleSelectCategory(category);
    setCurrentLesson(lesson);
    setViewMode('lesson');
    setSectionChecklist({
      warmUp: false,
      main: false,
      practice: false,
      extension: false,
      homework: false,
    });
  };

  const toggleSectionDone = (section: LessonSection) => {
    setSectionChecklist((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const completedSections = Object.values(sectionChecklist).filter(Boolean).length;

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-5 py-8">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
          <div className="text-6xl mb-4">🔢</div>
          <p className="text-xl text-gray-600">Loading your lesson...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-white text-indigo-600 border-2 border-indigo-600 px-5 py-3 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all hover:-translate-y-1 mb-6"
      >
        ← Back to Cronx Academy
      </Link>

      <div className="bg-white p-8 rounded-3xl shadow-xl mb-6 border-[3px] border-indigo-500">
        <div className="flex items-center gap-4 mb-6">
          <div className="text-5xl">🔢</div>
          <div>
            <h1 className="text-4xl font-bold text-indigo-600">Daily Maths Lesson</h1>
            <p className="text-gray-600">
              Studio-style maths learning with category exploration, lesson tracking, and guided
              practice.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-5 rounded-2xl">
            <div className="flex items-center gap-2 font-semibold text-purple-900 mb-2">
              📅 Today&apos;s Date
            </div>
            <div className="text-xl font-semibold text-gray-800">{currentDate || 'Loading...'}</div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-5 rounded-2xl">
            <div className="flex items-center gap-2 font-semibold text-blue-900 mb-2">
              ✅ Progress
            </div>
            <div className="text-xl font-semibold text-gray-800">
              {completedTopics.length} topics completed
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-5 rounded-2xl">
            <div className="flex items-center gap-2 font-semibold text-emerald-900 mb-2">
              🧭 Explored
            </div>
            <div className="text-xl font-semibold text-gray-800">
              {visitedCategories.length} of {Object.keys(mathTopics).length} strands
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-5 rounded-2xl">
            <div className="flex items-center gap-2 font-semibold text-amber-900 mb-2">
              🎯 Overall
            </div>
            <div className="text-xl font-semibold text-gray-800">
              {completionPercentage}% complete
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">Difficulty Level</label>
          <div className="grid grid-cols-3 gap-3 mb-3">
            {(Object.keys(difficultyDescriptions) as DifficultyLevel[]).map((level) => (
              <button
                key={level}
                onClick={() => setDifficulty(level)}
                className={`
                  px-4 py-3 rounded-xl border-2 font-semibold transition-all
                  ${
                    difficulty === level
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg'
                      : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                  }
                `}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-600 italic">{difficultyDescriptions[difficulty]}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          {(Object.keys(mathTopics) as MathCategory[]).map((category) => {
            const isActive = category === currentCategory;
            const meta = CATEGORY_META[category];
            const visited = visitedCategories.includes(category);

            return (
              <button
                key={category}
                onClick={() => handleSelectCategory(category)}
                className={`rounded-xl border-2 px-4 py-3 text-left transition-all ${
                  isActive
                    ? 'border-indigo-600 bg-indigo-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-indigo-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl">{meta.icon}</span>
                  {visited && <span className="text-xs font-bold text-emerald-600">Visited</span>}
                </div>
                <div className="text-sm font-semibold text-gray-800">{meta.label}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {mathTopics[category].length} lessons
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setViewMode('browse')}
            className={`flex-1 px-4 py-3 rounded-xl border-2 font-semibold transition-all ${
              viewMode === 'browse'
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg'
                : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
            }`}
          >
            📚 Browse Strand
          </button>
          <button
            onClick={handleNewLesson}
            className={`flex-1 px-4 py-3 rounded-xl border-2 font-semibold transition-all ${
              viewMode === 'lesson'
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg'
                : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
            }`}
          >
            🎲 Random Lesson
          </button>
        </div>
      </div>

      {viewMode === 'browse' && (
        <div className="bg-white p-8 rounded-3xl shadow-xl mb-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold text-gray-800">
              {CATEGORY_META[currentCategory].icon} {CATEGORY_META[currentCategory].label}
            </h2>
            <span className="text-sm font-semibold text-gray-600">
              {categoryCompletionCount}/{mathTopics[currentCategory].length} completed
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mathTopics[currentCategory].map((lesson, idx) => {
              const isDone = completedTopics.includes(lesson.title);
              return (
                <button
                  key={lesson.title}
                  onClick={() => handleSelectLesson(lesson, currentCategory)}
                  className={`text-left rounded-2xl border-2 p-5 transition-all hover:-translate-y-1 hover:shadow-lg ${
                    isDone
                      ? 'border-emerald-400 bg-emerald-50'
                      : 'border-gray-200 bg-gray-50 hover:border-indigo-400'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-gray-800">{lesson.title}</h3>
                    <span className="text-xs font-bold text-gray-500">#{idx + 1}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{lesson.objectives[0]}</p>
                  {isDone && <span className="text-xs font-bold text-emerald-700">Completed</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {viewMode === 'lesson' && currentLesson && (
        <div className="space-y-6">
          <div
            className={`bg-gradient-to-r ${CATEGORY_META[currentCategory].accent} text-white p-8 rounded-3xl shadow-xl`}
          >
            <div className="flex items-center justify-between gap-4 mb-3">
              <p className="font-semibold opacity-90">
                {CATEGORY_META[currentCategory].icon} {CATEGORY_META[currentCategory].label}
              </p>
              <p className="text-sm font-semibold opacity-90">
                Lesson flow: {completedSections}/5 done
              </p>
            </div>
            <h2 className="text-3xl font-bold mb-3">{currentLesson.title}</h2>
            <ul className="space-y-2">
              {currentLesson.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2 text-indigo-50">
                  <span className="opacity-70">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-yellow-600">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="text-xl font-bold text-yellow-900">🔥 Warm-Up (5 minutes)</h3>
              <button
                onClick={() => toggleSectionDone('warmUp')}
                className={`text-xs font-bold px-3 py-1 rounded-full border ${
                  sectionChecklist.warmUp
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : 'bg-white border-yellow-700 text-yellow-800'
                }`}
              >
                {sectionChecklist.warmUp ? 'Done' : 'Mark done'}
              </button>
            </div>
            <p className="text-gray-800">{currentLesson.warmUp}</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-blue-500">
            <div className="flex items-start justify-between gap-3 mb-4">
              <h3 className="text-xl font-bold text-blue-900">📚 Main Activities (30 minutes)</h3>
              <button
                onClick={() => toggleSectionDone('main')}
                className={`text-xs font-bold px-3 py-1 rounded-full border ${
                  sectionChecklist.main
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : 'bg-white border-blue-700 text-blue-800'
                }`}
              >
                {sectionChecklist.main ? 'Done' : 'Mark done'}
              </button>
            </div>
            <ol className="space-y-3">
              {currentLesson.mainActivities.map((activity, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">{idx + 1}.</span>
                  <span className="text-gray-800">{activity}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-green-600">
            <div className="flex items-start justify-between gap-3 mb-4">
              <h3 className="text-xl font-bold text-green-900">
                ✏️ Practice Questions (15 minutes)
              </h3>
              <button
                onClick={() => toggleSectionDone('practice')}
                className={`text-xs font-bold px-3 py-1 rounded-full border ${
                  sectionChecklist.practice
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : 'bg-white border-green-700 text-green-800'
                }`}
              >
                {sectionChecklist.practice ? 'Done' : 'Mark done'}
              </button>
            </div>
            <div className="space-y-3">
              {currentLesson.practice.map((question, idx) => (
                <div key={idx} className="flex items-center gap-3 py-2">
                  <input
                    type="checkbox"
                    aria-label={`Practice question ${idx + 1}: ${question}`}
                    className="w-5 h-5 rounded border-2 border-green-600 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-gray-800">{question}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-purple-600">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="text-xl font-bold text-purple-900">🌟 Extension Challenge</h3>
              <button
                onClick={() => toggleSectionDone('extension')}
                className={`text-xs font-bold px-3 py-1 rounded-full border ${
                  sectionChecklist.extension
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : 'bg-white border-purple-700 text-purple-800'
                }`}
              >
                {sectionChecklist.extension ? 'Done' : 'Mark done'}
              </button>
            </div>
            <p className="text-gray-800">{currentLesson.extension}</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-orange-600">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="text-xl font-bold text-orange-900">📝 Homework</h3>
              <button
                onClick={() => toggleSectionDone('homework')}
                className={`text-xs font-bold px-3 py-1 rounded-full border ${
                  sectionChecklist.homework
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : 'bg-white border-orange-700 text-orange-800'
                }`}
              >
                {sectionChecklist.homework ? 'Done' : 'Mark done'}
              </button>
            </div>
            <p className="text-gray-800">{currentLesson.homework}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={markComplete}
              disabled={completedTopics.includes(currentLesson.title)}
              className={`flex-1 px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                completedTopics.includes(currentLesson.title)
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-green-500 text-white hover:bg-green-600 hover:-translate-y-1 hover:shadow-xl'
              }`}
            >
              <span>✅</span>
              <span>Mark Complete</span>
            </button>
            <button
              onClick={handleNewLesson}
              className="flex-1 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <span>🔄</span>
              <span>New Lesson</span>
            </button>
            <button
              onClick={() => setViewMode('browse')}
              className="flex-1 bg-gray-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-700 hover:-translate-y-1 hover:shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <span>📚</span>
              <span>Browse Topics</span>
            </button>
          </div>
        </div>
      )}

      <div className="bg-white p-8 rounded-3xl shadow-xl mt-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Teaching Tips for Sheena</h3>
        <ul className="space-y-3">
          {[
            'Anchor each lesson with one confidence win before moving to challenge problems.',
            'Switch between verbal explanation, visual models, and written method checks.',
            'Use mini-retrieval moments to revisit previous strands at least twice a week.',
            'Track common mistakes and convert them into short correction drills.',
            'Celebrate method quality as much as final answers to build exam readiness.',
          ].map((tip, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-700">
              <span className="text-indigo-600 font-bold">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
