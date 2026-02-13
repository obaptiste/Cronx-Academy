'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ModuleProgress } from '@/types';
import { getAllModuleProgress, getOverallStats } from '@/lib/progress';

export default function ProgressDashboard() {
  const [modules, setModules] = useState<ModuleProgress[]>([]);
  const [stats, setStats] = useState({
    totalCompleted: 0,
    totalLessons: 0,
    totalQuizzesTaken: 0,
    averageQuizScore: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setModules(getAllModuleProgress());
      setStats(getOverallStats());
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-5 py-8">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
          <div className="text-6xl mb-4">📊</div>
          <p className="text-xl text-gray-600">Loading progress data...</p>
        </div>
      </div>
    );
  }

  const overallPercentage =
    stats.totalLessons > 0 ? Math.round((stats.totalCompleted / stats.totalLessons) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-white text-indigo-600 border-2 border-indigo-600 px-5 py-3 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all hover:-translate-y-1 mb-6"
      >
        ← Back to Cronx Academy
      </Link>

      {/* Header */}
      <div className="bg-white p-8 rounded-3xl shadow-xl mb-6 border-[3px] border-indigo-500">
        <div className="flex items-center gap-4 mb-6">
          <div className="text-5xl">📊</div>
          <div>
            <h1 className="text-4xl font-bold text-indigo-600">Progress Dashboard</h1>
            <p className="text-gray-600">Thalia&apos;s learning journey at a glance</p>
          </div>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-5 rounded-2xl text-center">
            <div className="text-3xl font-bold text-indigo-700">{overallPercentage}%</div>
            <div className="text-sm font-semibold text-indigo-600 mt-1">Overall Complete</div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-200 p-5 rounded-2xl text-center">
            <div className="text-3xl font-bold text-green-700">
              {stats.totalCompleted}/{stats.totalLessons}
            </div>
            <div className="text-sm font-semibold text-green-600 mt-1">Lessons Done</div>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-5 rounded-2xl text-center">
            <div className="text-3xl font-bold text-purple-700">{stats.totalQuizzesTaken}</div>
            <div className="text-sm font-semibold text-purple-600 mt-1">Quizzes Taken</div>
          </div>
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-5 rounded-2xl text-center">
            <div className="text-3xl font-bold text-amber-700">
              {stats.averageQuizScore > 0 ? `${stats.averageQuizScore}%` : '—'}
            </div>
            <div className="text-sm font-semibold text-amber-600 mt-1">Avg Quiz Score</div>
          </div>
        </div>
      </div>

      {/* Overall Progress Bar */}
      <div className="bg-white p-6 rounded-3xl shadow-xl mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Overall Learning Progress</h2>
        <div className="w-full bg-gray-200 rounded-full h-6 mb-2">
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-600 h-6 rounded-full transition-all duration-500 flex items-center justify-center"
            style={{ width: `${Math.max(overallPercentage, 2)}%` }}
          >
            {overallPercentage >= 10 && (
              <span className="text-white text-xs font-bold">{overallPercentage}%</span>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-500">
          {stats.totalCompleted} of {stats.totalLessons} lessons completed across all modules
        </p>
      </div>

      {/* Module-by-Module Breakdown */}
      <div className="bg-white p-8 rounded-3xl shadow-xl mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Module Progress</h2>
        <div className="space-y-6">
          {modules.map((mod) => {
            const percentage =
              mod.totalLessons > 0
                ? Math.round((mod.completedLessons / mod.totalLessons) * 100)
                : 0;
            const latestQuiz =
              mod.quizResults.length > 0 ? mod.quizResults[mod.quizResults.length - 1] : null;

            return (
              <div key={mod.moduleId} className="border-2 border-gray-100 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{mod.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{mod.moduleName}</h3>
                      <p className="text-sm text-gray-500">
                        {mod.completedLessons} of {mod.totalLessons} lessons
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-indigo-600">{percentage}%</div>
                    {latestQuiz && (
                      <p className="text-xs text-gray-400">
                        Last quiz:{' '}
                        {Math.round((latestQuiz.score / latestQuiz.totalQuestions) * 100)}%
                      </p>
                    )}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-500 ${
                      percentage === 100
                        ? 'bg-green-500'
                        : percentage >= 50
                          ? 'bg-indigo-500'
                          : percentage > 0
                            ? 'bg-amber-500'
                            : 'bg-gray-300'
                    }`}
                    style={{ width: `${Math.max(percentage, 0)}%` }}
                  />
                </div>

                {/* Quiz results for this module */}
                {mod.quizResults.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-600 mb-2">
                      Quiz History ({mod.quizResults.length} taken)
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {mod.quizResults.slice(-5).map((result, idx) => {
                        const quizPct = Math.round((result.score / result.totalQuestions) * 100);
                        return (
                          <span
                            key={idx}
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                              quizPct >= 70
                                ? 'bg-green-100 text-green-700'
                                : quizPct >= 40
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-red-100 text-red-700'
                            }`}
                            title={result.lessonTitle}
                          >
                            {quizPct}%
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Teaching Insights for Sheena */}
      <div className="bg-white p-8 rounded-3xl shadow-xl mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">💡 Insights for Sheena</h2>
        <div className="space-y-4">
          {overallPercentage === 0 && (
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-xl">
              <p className="text-gray-700">
                <strong>Getting Started:</strong> Thalia hasn&apos;t completed any lessons yet.
                Consider starting with a module she&apos;s most interested in to build momentum.
              </p>
            </div>
          )}
          {overallPercentage > 0 && overallPercentage < 25 && (
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
              <p className="text-gray-700">
                <strong>Early Progress:</strong> Thalia has begun her learning journey! Encourage
                consistent daily engagement to build study habits.
              </p>
            </div>
          )}
          {overallPercentage >= 25 && overallPercentage < 75 && (
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-xl">
              <p className="text-gray-700">
                <strong>Good Progress:</strong> Thalia is making steady progress across the
                curriculum. Consider focusing on modules with lower completion rates.
              </p>
            </div>
          )}
          {overallPercentage >= 75 && (
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-xl">
              <p className="text-gray-700">
                <strong>Excellent Progress:</strong> Thalia is doing brilliantly! She&apos;s
                completed most of the available content. Consider revisiting quiz scores to identify
                areas for deeper review.
              </p>
            </div>
          )}

          {/* Module-specific insights */}
          {modules.map((mod) => {
            const pct =
              mod.totalLessons > 0
                ? Math.round((mod.completedLessons / mod.totalLessons) * 100)
                : 0;
            const avgQuiz =
              mod.quizResults.length > 0
                ? Math.round(
                    (mod.quizResults.reduce((s, r) => s + (r.score / r.totalQuestions) * 100, 0) /
                      mod.quizResults.length) *
                      10,
                  ) / 10
                : null;

            if (pct === 0 && !avgQuiz) return null;

            return (
              <div
                key={mod.moduleId}
                className="bg-gray-50 border-l-4 border-gray-300 p-4 rounded-r-xl"
              >
                <p className="text-gray-700">
                  <strong>
                    {mod.icon} {mod.moduleName}:
                  </strong>{' '}
                  {pct}% complete
                  {avgQuiz !== null && ` with an average quiz score of ${avgQuiz}%`}.
                  {avgQuiz !== null && avgQuiz < 60 && (
                    <span className="text-amber-600">
                      {' '}
                      Consider reviewing this module together.
                    </span>
                  )}
                  {pct === 100 && ' All lessons finished!'}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
