'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SpiritualityLesson, SpiritualityTopicCategory } from '@/types';
import {
  spiritualityTopics,
  getAllSpiritualityLessons,
  spiritualityCategoryNames,
  spiritualityCategoryIcons,
} from '@/lib/data/spiritualityLessons';

export default function SpiritualityInteractive() {
  const [currentLesson, setCurrentLesson] = useState<SpiritualityLesson | null>(null);
  const [currentCategory, setCurrentCategory] = useState<SpiritualityTopicCategory>('africanRoots');
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    const saved = localStorage.getItem('completedSpiritualityLessons');
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

  const generateRandomLesson = (completed: string[]) => {
    const allLessons = getAllSpiritualityLessons();
    const availableLessons = allLessons.filter(({ lesson }) => !completed.includes(lesson.title));

    if (availableLessons.length === 0) {
      const randomIndex = Math.floor(Math.random() * allLessons.length);
      const { lesson, category } = allLessons[randomIndex];
      setCurrentLesson(lesson);
      setCurrentCategory(category);
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableLessons.length);
    const { lesson, category } = availableLessons[randomIndex];
    setCurrentLesson(lesson);
    setCurrentCategory(category);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('completedSpiritualityLessons');
      const completed = saved ? JSON.parse(saved) : [];
      generateRandomLesson(completed);

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
      const newCompleted = [...completedLessons, currentLesson.title];
      setCompletedLessons(newCompleted);
      localStorage.setItem('completedSpiritualityLessons', JSON.stringify(newCompleted));
    }
  };

  const handleNewLesson = () => {
    generateRandomLesson(completedLessons);
    setViewMode('lesson');
  };

  const selectLesson = (lesson: SpiritualityLesson, category: SpiritualityTopicCategory) => {
    setCurrentLesson(lesson);
    setCurrentCategory(category);
    setViewMode('lesson');
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const totalLessons = getAllSpiritualityLessons().length;

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-5 py-8">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
          <div className="text-6xl mb-4">⏳</div>
          <p className="text-xl text-gray-600">Loading your lesson...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      <Link
        href="/modules/history"
        className="inline-flex items-center gap-2 bg-white text-amber-600 border-2 border-amber-600 px-5 py-3 rounded-xl font-semibold hover:bg-amber-600 hover:text-white transition-all hover:-translate-y-1 mb-6"
      >
        ← Back to History Quest
      </Link>

      {/* Header Section */}
      <div className="bg-white p-8 rounded-3xl shadow-xl mb-6 border-[3px] border-amber-500">
        <div className="flex items-center gap-4 mb-6">
          <div className="text-5xl">✨</div>
          <div>
            <h1 className="text-4xl font-bold text-amber-600">African & Caribbean Spirituality</h1>
            <p className="text-gray-600">
              Exploring the rich spiritual traditions of Africa and the Caribbean
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-5 rounded-2xl">
            <div className="flex items-center gap-2 font-semibold text-amber-900 mb-2">
              📅 Today&apos;s Date
            </div>
            <div className="text-xl font-semibold text-gray-800">{currentDate || 'Loading...'}</div>
          </div>

          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-5 rounded-2xl">
            <div className="flex items-center gap-2 font-semibold text-yellow-900 mb-2">
              ✅ Progress
            </div>
            <div className="text-xl font-semibold text-gray-800">
              {completedLessons.length} of {totalLessons} lessons
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-5 rounded-2xl">
            <div className="flex items-center gap-2 font-semibold text-orange-900 mb-2">
              📖 Current Topic
            </div>
            <div className="text-xl font-semibold text-gray-800">
              {spiritualityCategoryNames[currentCategory]}
            </div>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex gap-3">
          <button
            onClick={() => setViewMode('browse')}
            className={`flex-1 px-4 py-3 rounded-xl border-2 font-semibold transition-all ${
              viewMode === 'browse'
                ? 'bg-amber-600 text-white border-amber-600 shadow-lg'
                : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
            }`}
          >
            📚 Browse All Topics
          </button>
          <button
            onClick={handleNewLesson}
            className={`flex-1 px-4 py-3 rounded-xl border-2 font-semibold transition-all ${
              viewMode === 'lesson'
                ? 'bg-amber-600 text-white border-amber-600 shadow-lg'
                : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
            }`}
          >
            🎲 Random Lesson
          </button>
        </div>
      </div>

      {/* Browse Mode */}
      {viewMode === 'browse' && (
        <div className="space-y-6">
          {(Object.keys(spiritualityTopics) as SpiritualityTopicCategory[]).map((category) => (
            <div key={category} className="bg-white p-6 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="text-3xl">{spiritualityCategoryIcons[category]}</span>
                {spiritualityCategoryNames[category]}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {spiritualityTopics[category].map((lesson, idx) => {
                  const isCompleted = completedLessons.includes(lesson.title);
                  return (
                    <button
                      key={idx}
                      onClick={() => selectLesson(lesson, category)}
                      className={`text-left p-4 rounded-xl border-2 transition-all hover:-translate-y-1 hover:shadow-lg ${
                        isCompleted
                          ? 'border-green-400 bg-green-50'
                          : 'border-gray-200 bg-gray-50 hover:border-amber-400'
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

      {/* Lesson Mode */}
      {viewMode === 'lesson' && currentLesson && (
        <div className="space-y-6">
          {/* Lesson Header */}
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white p-8 rounded-3xl shadow-xl">
            <div className="flex items-center gap-2 text-amber-200 mb-2">
              {spiritualityCategoryIcons[currentCategory]}{' '}
              {spiritualityCategoryNames[currentCategory]}
            </div>
            <h2 className="text-3xl font-bold mb-2">{currentLesson.title}</h2>
            <p className="text-amber-100 text-lg">{currentLesson.era}</p>
          </div>

          {/* Learning Objectives */}
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

          {/* Key Dates */}
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

          {/* Introduction */}
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              📖 Introduction
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">{currentLesson.introduction}</p>
          </div>

          {/* Main Content (Collapsible) */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-yellow-500">
            <button
              onClick={() => toggleSection('content')}
              className="w-full flex items-center justify-between text-xl font-bold text-yellow-900 mb-4"
            >
              <span className="flex items-center gap-2">📚 Main Content</span>
              <span className="text-2xl">{expandedSections.content ? '−' : '+'}</span>
            </button>
            {expandedSections.content && (
              <ol className="space-y-3">
                {currentLesson.mainContent.map((content, idx) => (
                  <li key={idx} className="flex gap-3 py-2">
                    <span className="font-bold text-yellow-600 flex-shrink-0">{idx + 1}.</span>
                    <span className="text-gray-800">{content}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>

          {/* Key Figures */}
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

          {/* Primary Sources (Collapsible) */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-orange-600">
            <button
              onClick={() => toggleSection('sources')}
              className="w-full flex items-center justify-between text-xl font-bold text-orange-900 mb-4"
            >
              <span className="flex items-center gap-2">📜 Primary Sources</span>
              <span className="text-2xl">{expandedSections.sources ? '−' : '+'}</span>
            </button>
            {expandedSections.sources && (
              <div className="space-y-4">
                {currentLesson.primarySources.map((source, idx) => (
                  <blockquote
                    key={idx}
                    className="bg-white p-4 rounded-xl border-l-4 border-orange-500 italic text-gray-700"
                  >
                    &quot;{source}&quot;
                  </blockquote>
                ))}
              </div>
            )}
          </div>

          {/* Discussion Questions (Collapsible) */}
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

          {/* Activities (Collapsible) */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-3xl shadow-lg border-l-[5px] border-purple-600">
            <button
              onClick={() => toggleSection('activities')}
              className="w-full flex items-center justify-between text-xl font-bold text-purple-900 mb-4"
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
                      className="w-5 h-5 rounded border-2 border-purple-600 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-gray-800">{activity}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Vocabulary (Collapsible) */}
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

          {/* Further Reading */}
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              📚 Further Reading
            </h3>
            <p className="text-gray-700">{currentLesson.furtherReading}</p>
          </div>

          {/* Action Buttons */}
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
              className="flex-1 bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-amber-700 hover:-translate-y-1 hover:shadow-xl transition-all flex items-center justify-center gap-3"
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

      {/* Teaching Tips */}
      <div className="bg-white p-8 rounded-3xl shadow-xl mt-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Teaching Tips for Sheena</h3>
        <ul className="space-y-3">
          {[
            'Approach all religions with respect - these are living traditions with millions of practitioners',
            'Challenge misconceptions from popular media, especially about Vodou',
            'Emphasize connections between African roots and Caribbean traditions',
            'Allow time for questions - students may have family connections to these traditions',
            'Use this as an opportunity to discuss cultural resilience and adaptation',
            'Connect to broader themes of colonialism, slavery, and resistance',
          ].map((tip, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-700">
              <span className="text-amber-600 font-bold">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
