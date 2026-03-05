'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HistoryLesson, QuizQuestion } from '@/types';
import QuizPanel from '@/components/ui/QuizPanel';
import { generateLessonQuiz, collectVocabPool } from '@/lib/quiz';
import { SectionLearningTools } from '@/components/ui/SectionLearningTools';

// ── Variant styles ──────────────────────────────────────────────────────────
// All Tailwind class strings must be literal (no template literals) so that
// the content scanner can detect them at build time.

type ModuleVariant = 'pink' | 'purple' | 'orange' | 'amber' | 'blue' | 'green';

interface VariantStyle {
  border: string;
  backButton: string;
  title: string;
  statBg: string;
  statText: string;
  activeToggle: string;
  nextButton: string;
  browseBorder: string;
  bulletColor: string;
  lessonHeaderText: string;
  lessonHeaderSubtitle: string;
}

const variantStyles: Record<ModuleVariant, VariantStyle> = {
  pink: {
    border: 'border-pink-500',
    backButton: 'text-pink-600 border-pink-600 hover:bg-pink-600',
    title: 'text-pink-600',
    statBg: 'from-pink-100 to-pink-200',
    statText: 'text-pink-900',
    activeToggle: 'bg-pink-600 text-white border-pink-600',
    nextButton: 'bg-pink-600 hover:bg-pink-700',
    browseBorder: 'hover:border-pink-400',
    bulletColor: 'text-pink-600',
    lessonHeaderText: 'text-pink-200',
    lessonHeaderSubtitle: 'text-pink-100',
  },
  purple: {
    border: 'border-purple-500',
    backButton: 'text-purple-600 border-purple-600 hover:bg-purple-600',
    title: 'text-purple-600',
    statBg: 'from-purple-100 to-purple-200',
    statText: 'text-purple-900',
    activeToggle: 'bg-purple-600 text-white border-purple-600',
    nextButton: 'bg-purple-600 hover:bg-purple-700',
    browseBorder: 'hover:border-purple-400',
    bulletColor: 'text-purple-600',
    lessonHeaderText: 'text-purple-200',
    lessonHeaderSubtitle: 'text-purple-100',
  },
  orange: {
    border: 'border-orange-500',
    backButton: 'text-orange-600 border-orange-600 hover:bg-orange-600',
    title: 'text-orange-600',
    statBg: 'from-orange-100 to-orange-200',
    statText: 'text-orange-900',
    activeToggle: 'bg-orange-600 text-white border-orange-600',
    nextButton: 'bg-orange-600 hover:bg-orange-700',
    browseBorder: 'hover:border-orange-400',
    bulletColor: 'text-orange-600',
    lessonHeaderText: 'text-orange-200',
    lessonHeaderSubtitle: 'text-orange-100',
  },
  amber: {
    border: 'border-amber-500',
    backButton: 'text-amber-600 border-amber-600 hover:bg-amber-600',
    title: 'text-amber-600',
    statBg: 'from-amber-100 to-amber-200',
    statText: 'text-amber-900',
    activeToggle: 'bg-amber-600 text-white border-amber-600',
    nextButton: 'bg-amber-600 hover:bg-amber-700',
    browseBorder: 'hover:border-amber-400',
    bulletColor: 'text-amber-600',
    lessonHeaderText: 'text-amber-200',
    lessonHeaderSubtitle: 'text-amber-100',
  },
  blue: {
    border: 'border-blue-500',
    backButton: 'text-blue-600 border-blue-600 hover:bg-blue-600',
    title: 'text-blue-600',
    statBg: 'from-blue-100 to-blue-200',
    statText: 'text-blue-900',
    activeToggle: 'bg-blue-600 text-white border-blue-600',
    nextButton: 'bg-blue-600 hover:bg-blue-700',
    browseBorder: 'hover:border-blue-400',
    bulletColor: 'text-blue-600',
    lessonHeaderText: 'text-blue-200',
    lessonHeaderSubtitle: 'text-blue-100',
  },
  green: {
    border: 'border-green-500',
    backButton: 'text-green-600 border-green-600 hover:bg-green-600',
    title: 'text-green-600',
    statBg: 'from-green-100 to-green-200',
    statText: 'text-green-900',
    activeToggle: 'bg-green-600 text-white border-green-600',
    nextButton: 'bg-green-600 hover:bg-green-700',
    browseBorder: 'hover:border-green-400',
    bulletColor: 'text-green-600',
    lessonHeaderText: 'text-green-200',
    lessonHeaderSubtitle: 'text-green-100',
  },
};

// ── Props ────────────────────────────────────────────────────────────────────

export interface HistoryModuleInteractiveProps {
  // Branding
  title: string;
  subtitle: string;
  icon: string;
  // Navigation
  backHref: string;
  backLabel: string;
  // Module identity
  moduleId: string;
  storageKey: string;
  // Styling
  variant: ModuleVariant;
  /** Full Tailwind gradient stop classes, e.g. "from-pink-600 to-red-700" */
  headerGradient: string;
  // Data
  topics: Record<string, HistoryLesson[]>;
  categoryNames: Record<string, string>;
  categoryIcons: Record<string, string>;
  defaultCategory: string;
  getAllLessons: () => { lesson: HistoryLesson; category: string }[];
  // Content
  teachingTips: string[];
  loadingText?: string;
}

// ── Component ────────────────────────────────────────────────────────────────

export default function HistoryModuleInteractive({
  title,
  subtitle,
  icon,
  backHref,
  backLabel,
  moduleId,
  storageKey,
  variant,
  headerGradient,
  topics,
  categoryNames,
  categoryIcons,
  defaultCategory,
  getAllLessons,
  teachingTips,
  loadingText = 'Loading your lesson...',
}: HistoryModuleInteractiveProps) {
  const styles = variantStyles[variant];

  const [currentLesson, setCurrentLesson] = useState<HistoryLesson | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string>(defaultCategory);
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  });
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState<string>('');
  const [viewMode, setViewMode] = useState<'lesson' | 'browse'>('browse');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    content: true,
    sources: false,
    discussion: false,
    activities: false,
    vocabulary: false,
  });
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);

  const generateRandomLesson = (completed: string[]) => {
    const allLessons = getAllLessons();
    const availableLessons = allLessons.filter(({ lesson }) => !completed.includes(lesson.title));
    const pool = availableLessons.length > 0 ? availableLessons : allLessons;
    const { lesson, category } = pool[Math.floor(Math.random() * pool.length)];
    setCurrentLesson(lesson);
    setCurrentCategory(category);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(storageKey);
      const completed = saved ? JSON.parse(saved) : [];
      const date = new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      queueMicrotask(() => {
        generateRandomLesson(completed);
        setCurrentDate(date);
        setIsLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const markComplete = () => {
    if (currentLesson && typeof window !== 'undefined') {
      const newCompleted = [...completedLessons, currentLesson.title];
      setCompletedLessons(newCompleted);
      localStorage.setItem(storageKey, JSON.stringify(newCompleted));
    }
  };

  const handleNewLesson = () => {
    generateRandomLesson(completedLessons);
    setViewMode('lesson');
  };

  const selectLesson = (lesson: HistoryLesson, category: string) => {
    setCurrentLesson(lesson);
    setCurrentCategory(category);
    setViewMode('lesson');
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const startQuiz = () => {
    if (currentLesson) {
      const vocabPool = collectVocabPool(topics);
      const questions = generateLessonQuiz(currentLesson, vocabPool);
      setQuizQuestions(questions);
      setShowQuiz(true);
    }
  };

  const totalLessons = getAllLessons().length;

  // ── Loading state ────────────────────────────────────────────────────────

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-5 py-8">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
          <div className="text-6xl mb-4">⏳</div>
          <p className="text-xl text-gray-600">{loadingText}</p>
        </div>
      </div>
    );
  }

  // ── Main render ──────────────────────────────────────────────────────────

  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      <Link
        href={backHref}
        className={`inline-flex items-center gap-2 bg-white ${styles.backButton} border-2 px-5 py-3 rounded-xl font-semibold hover:text-white transition-all hover:-translate-y-1 mb-6`}
      >
        ← {backLabel}
      </Link>

      {/* Header */}
      <div className={`bg-white p-8 rounded-3xl shadow-xl mb-6 border-[3px] ${styles.border}`}>
        <div className="flex items-center gap-4 mb-6">
          <div className="text-5xl">{icon}</div>
          <div>
            <h1 className={`text-4xl font-bold ${styles.title}`}>{title}</h1>
            <p className="text-gray-600">{subtitle}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className={`bg-gradient-to-br ${styles.statBg} p-5 rounded-2xl`}>
            <div className={`flex items-center gap-2 font-semibold ${styles.statText} mb-2`}>
              📅 Today&apos;s Date
            </div>
            <div className="text-xl font-semibold text-gray-800">{currentDate || 'Loading...'}</div>
          </div>

          <div className="bg-gradient-to-br from-red-100 to-red-200 p-5 rounded-2xl">
            <div className="flex items-center gap-2 font-semibold text-red-900 mb-2">
              ✅ Progress
            </div>
            <div className="text-xl font-semibold text-gray-800">
              {completedLessons.length} of {totalLessons} lessons
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-5 rounded-2xl">
            <div className="flex items-center gap-2 font-semibold text-indigo-900 mb-2">
              📖 Current Topic
            </div>
            <div className="text-xl font-semibold text-gray-800">
              {categoryNames[currentCategory]}
            </div>
          </div>
        </div>

        {/* View mode toggle */}
        <div className="flex gap-3">
          <button
            onClick={() => setViewMode('browse')}
            className={`flex-1 px-4 py-3 rounded-xl border-2 font-semibold transition-all ${
              viewMode === 'browse'
                ? styles.activeToggle + ' shadow-lg'
                : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
            }`}
          >
            📚 Browse All Topics
          </button>
          <button
            onClick={handleNewLesson}
            className={`flex-1 px-4 py-3 rounded-xl border-2 font-semibold transition-all ${
              viewMode === 'lesson'
                ? styles.activeToggle + ' shadow-lg'
                : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
            }`}
          >
            🎲 Random Lesson
          </button>
        </div>
      </div>

      {/* Browse mode */}
      {viewMode === 'browse' && (
        <div className="space-y-6">
          {Object.keys(topics).map((category) => (
            <div key={category} className="bg-white p-6 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="text-3xl">{categoryIcons[category]}</span>
                {categoryNames[category]}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {topics[category].map((lesson, idx) => {
                  const isCompleted = completedLessons.includes(lesson.title);
                  return (
                    <button
                      key={idx}
                      onClick={() => selectLesson(lesson, category)}
                      className={`text-left p-4 rounded-xl border-2 transition-all hover:-translate-y-1 hover:shadow-lg ${
                        isCompleted
                          ? 'border-green-400 bg-green-50'
                          : `border-gray-200 bg-gray-50 ${styles.browseBorder}`
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-gray-800">{lesson.title}</h3>
                        {isCompleted && <span className="text-green-500">✓</span>}
                      </div>
                      <p className="text-sm text-gray-600">{lesson.era}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lesson mode */}
      {viewMode === 'lesson' && currentLesson && (
        <div className="space-y-6">
          {/* Lesson header */}
          <div
            className={`bg-gradient-to-r ${headerGradient} text-white p-8 rounded-3xl shadow-xl`}
          >
            <div className={`flex items-center gap-2 ${styles.lessonHeaderText} mb-2`}>
              {categoryIcons[currentCategory]} {categoryNames[currentCategory]}
            </div>
            <h2 className="text-3xl font-bold mb-2">{currentLesson.title}</h2>
            <p className={`${styles.lessonHeaderSubtitle} text-lg`}>{currentLesson.era}</p>
          </div>

          {/* Learning objectives */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-blue-500">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              🎯 Learning Objectives
            </h3>
            <ul className="space-y-2">
              {currentLesson.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key dates */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-amber-500">
            <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
              📅 Key Dates
            </h3>
            <div className="space-y-2">
              {currentLesson.keyDates.map((date, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 py-2 border-b border-amber-200 last:border-0"
                >
                  <span className="text-amber-600 font-bold">{idx + 1}.</span>
                  <span className="text-gray-800">{date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Introduction with voice learning tools */}
          <SectionLearningTools
            storageKey={`${moduleId}-${currentLesson.title}-listened`}
            sections={[
              {
                id: `${currentLesson.title}-intro`,
                title: 'Introduction',
                text: currentLesson.introduction,
              },
            ]}
          />

          {/* Main content (collapsible) */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-purple-500">
            <button
              onClick={() => toggleSection('content')}
              className="w-full flex items-center justify-between text-xl font-bold text-purple-900 mb-4"
            >
              <span className="flex items-center gap-2">📚 Main Content</span>
              <span className="text-2xl">{expandedSections.content ? '−' : '+'}</span>
            </button>
            {expandedSections.content && (
              <ol className="space-y-3">
                {currentLesson.mainContent.map((content, idx) => (
                  <li key={idx} className="flex gap-3 py-2">
                    <span className="font-bold text-purple-600 flex-shrink-0">{idx + 1}.</span>
                    <span className="text-gray-800">{content}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>

          {/* Key figures */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-indigo-500">
            <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
              👤 Key Figures
            </h3>
            <div className="flex flex-wrap gap-2">
              {currentLesson.keyFigures.map((figure, idx) => (
                <span
                  key={idx}
                  className="bg-white px-4 py-2 rounded-full border border-indigo-300 text-gray-700"
                >
                  {figure}
                </span>
              ))}
            </div>
          </div>

          {/* Primary sources (collapsible) */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-yellow-600">
            <button
              onClick={() => toggleSection('sources')}
              className="w-full flex items-center justify-between text-xl font-bold text-yellow-900 mb-4"
            >
              <span className="flex items-center gap-2">📜 Primary Sources</span>
              <span className="text-2xl">{expandedSections.sources ? '−' : '+'}</span>
            </button>
            {expandedSections.sources && (
              <div className="space-y-4">
                {currentLesson.primarySources.map((source, idx) => (
                  <blockquote
                    key={idx}
                    className="bg-white p-4 rounded-xl border-l-4 border-yellow-500 italic text-gray-700"
                  >
                    &quot;{source}&quot;
                  </blockquote>
                ))}
              </div>
            )}
          </div>

          {/* Discussion questions (collapsible) */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-green-600">
            <button
              onClick={() => toggleSection('discussion')}
              className="w-full flex items-center justify-between text-xl font-bold text-green-900 mb-4"
            >
              <span className="flex items-center gap-2">💬 Discussion Questions</span>
              <span className="text-2xl">{expandedSections.discussion ? '−' : '+'}</span>
            </button>
            {expandedSections.discussion && (
              <ol className="space-y-3">
                {currentLesson.discussionQuestions.map((question, idx) => (
                  <li key={idx} className="flex gap-3 py-2">
                    <span className="font-bold text-green-600 flex-shrink-0">{idx + 1}.</span>
                    <span className="text-gray-800">{question}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>

          {/* Activities (collapsible) */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-orange-600">
            <button
              onClick={() => toggleSection('activities')}
              className="w-full flex items-center justify-between text-xl font-bold text-orange-900 mb-4"
            >
              <span className="flex items-center gap-2">✏️ Activities</span>
              <span className="text-2xl">{expandedSections.activities ? '−' : '+'}</span>
            </button>
            {expandedSections.activities && (
              <div className="space-y-3">
                {currentLesson.activities.map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-3 py-2">
                    <input
                      type="checkbox"
                      aria-label={activity}
                      className="w-5 h-5 rounded border-2 border-orange-600 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-gray-800">{activity}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Vocabulary (collapsible) */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-teal-600">
            <button
              onClick={() => toggleSection('vocabulary')}
              className="w-full flex items-center justify-between text-xl font-bold text-teal-900 mb-4"
            >
              <span className="flex items-center gap-2">📖 Key Vocabulary</span>
              <span className="text-2xl">{expandedSections.vocabulary ? '−' : '+'}</span>
            </button>
            {expandedSections.vocabulary && (
              <div className="grid md:grid-cols-2 gap-4">
                {currentLesson.vocabularyTerms.map((vocab, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl">
                    <dt className="font-bold text-teal-700">{vocab.term}</dt>
                    <dd className="text-gray-600 mt-1">{vocab.definition}</dd>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Further reading */}
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              📚 Further Reading
            </h3>
            <p className="text-gray-700">{currentLesson.furtherReading}</p>
          </div>

          {/* Quiz */}
          {showQuiz ? (
            <QuizPanel
              questions={quizQuestions}
              lessonTitle={currentLesson.title}
              moduleId={moduleId}
              onClose={() => setShowQuiz(false)}
            />
          ) : (
            <button
              onClick={startQuiz}
              className="w-full bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <span>📝</span>
              <span>Take Lesson Quiz</span>
            </button>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={markComplete}
              disabled={completedLessons.includes(currentLesson.title)}
              className={`flex-1 px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                completedLessons.includes(currentLesson.title)
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-green-500 text-white hover:bg-green-600 hover:-translate-y-1 hover:shadow-xl'
              }`}
            >
              <span>✅</span>
              <span>
                {completedLessons.includes(currentLesson.title) ? 'Completed!' : 'Mark Complete'}
              </span>
            </button>
            <button
              onClick={handleNewLesson}
              className={`flex-1 ${styles.nextButton} text-white px-8 py-4 rounded-2xl font-bold text-lg hover:-translate-y-1 hover:shadow-xl transition-all flex items-center justify-center gap-3`}
            >
              <span>🔄</span>
              <span>Next Lesson</span>
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

      {/* Teaching tips */}
      <div className="bg-white p-8 rounded-3xl shadow-xl mt-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Teaching Tips for Sheena</h3>
        <ul className="space-y-3">
          {teachingTips.map((tip, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-700">
              <span className={`${styles.bulletColor} font-bold`}>•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
