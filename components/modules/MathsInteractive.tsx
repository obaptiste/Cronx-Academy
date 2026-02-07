'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MathLesson, DifficultyLevel } from '@/types';
import { mathTopics } from '@/lib/data/mathLessons';

const difficultyDescriptions: Record<DifficultyLevel, string> = {
  foundation: 'Building core skills with extra support',
  standard: 'Year 9 expected standard',
  higher: 'Extended challenges and deeper thinking',
};

export default function MathsInteractive() {
  const [currentLesson, setCurrentLesson] = useState<MathLesson | null>(null);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('standard');
  const [completedTopics, setCompletedTopics] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    const saved = localStorage.getItem('completedTopics');
    return saved ? JSON.parse(saved) : [];
  });
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState<string>('');

  const generateDailyLesson = (completed: string[]) => {
    const allTopics = Object.values(mathTopics).flat();
    const availableTopics = allTopics.filter((t) => !completed.includes(t.title));

    if (availableTopics.length === 0) {
      const randomTopic = allTopics[Math.floor(Math.random() * allTopics.length)];
      setCurrentLesson(randomTopic);
      return;
    }

    const randomTopic = availableTopics[Math.floor(Math.random() * availableTopics.length)];
    setCurrentLesson(randomTopic);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('completedTopics');
      const completed = saved ? JSON.parse(saved) : [];
      generateDailyLesson(completed);

      // Set current date on client side only
      const date = new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      setCurrentDate(date);

      setIsLoading(false);
    }
  }, []);

  const markComplete = () => {
    if (currentLesson && typeof window !== 'undefined') {
      const newCompleted = [...completedTopics, currentLesson.title];
      setCompletedTopics(newCompleted);
      localStorage.setItem('completedTopics', JSON.stringify(newCompleted));
    }
  };

  const handleNewLesson = () => {
    generateDailyLesson(completedTopics);
  };

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
            <p className="text-gray-600">Interactive lessons tailored for Thalia (Year 9)</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
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
        </div>

        <div>
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
      </div>

      {currentLesson && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold mb-4">{currentLesson.title}</h2>
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">🎯</div>
              <div>
                <p className="font-semibold mb-3">Learning Objectives:</p>
                <ul className="space-y-2">
                  {currentLesson.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="opacity-60">•</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-yellow-600">
            <h3 className="text-xl font-bold text-yellow-900 mb-3 flex items-center gap-2">
              🔥 Warm-Up (5 minutes)
            </h3>
            <p className="text-gray-800">{currentLesson.warmUp}</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-blue-500">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              📚 Main Activities (30 minutes)
            </h3>
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
            <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
              ✏️ Practice Questions (15 minutes)
            </h3>
            <div className="space-y-3">
              {currentLesson.practice.map((question, idx) => (
                <div key={idx} className="flex items-center gap-3 py-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-2 border-green-600 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-gray-800">{question}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-purple-600">
            <h3 className="text-xl font-bold text-purple-900 mb-3 flex items-center gap-2">
              🌟 Extension Challenge
            </h3>
            <p className="text-gray-800">{currentLesson.extension}</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-orange-600">
            <h3 className="text-xl font-bold text-orange-900 mb-3 flex items-center gap-2">
              📝 Homework
            </h3>
            <p className="text-gray-800">{currentLesson.homework}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={markComplete}
              className="flex-1 bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-600 hover:-translate-y-1 hover:shadow-xl transition-all flex items-center justify-center gap-3"
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
          </div>
        </div>
      )}

      <div className="bg-white p-8 rounded-3xl shadow-xl mt-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Teaching Tips for Sheena</h3>
        <ul className="space-y-3">
          {[
            'Encourage working out on paper - mental maths is good but showing method is essential',
            'Use real-world examples whenever possible to show why maths matters',
            'Take breaks every 20-25 minutes to maintain focus and energy',
            'Celebrate progress, not just perfection - maths is about growth',
            'If Thalia gets stuck, try a different approach or come back to it later',
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
