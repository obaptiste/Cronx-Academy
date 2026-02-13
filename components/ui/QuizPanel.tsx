'use client';

import { useState } from 'react';
import { QuizQuestion, QuizResult } from '@/types';
import { saveQuizResult } from '@/lib/progress';

interface QuizPanelProps {
  questions: QuizQuestion[];
  lessonTitle: string;
  moduleId: string;
  onClose: () => void;
}

export default function QuizPanel({ questions, lessonTitle, moduleId, onClose }: QuizPanelProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null),
  );
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="bg-white p-8 rounded-3xl shadow-xl border-[3px] border-amber-400">
        <div className="text-center">
          <div className="text-5xl mb-4">📝</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">No Quiz Available</h3>
          <p className="text-gray-600 mb-6">
            This lesson doesn&apos;t have enough content to generate a quiz yet.
          </p>
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-700 transition-all"
          >
            Back to Lesson
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const score = selectedAnswers.reduce<number>((acc, answer, idx) => {
    if (answer === questions[idx].correctIndex) return acc + 1;
    return acc;
  }, 0);

  const scorePercentage = Math.round((score / questions.length) * 100);

  const handleSelectAnswer = (optionIndex: number) => {
    if (answered) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
    setAnswered(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Save result
      const result: QuizResult = {
        lessonTitle,
        module: moduleId,
        score,
        totalQuestions: questions.length,
        completedAt: new Date().toISOString(),
      };
      saveQuizResult(result);
      setShowResult(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setAnswered(false);
    }
  };

  if (showResult) {
    return (
      <div className="bg-white p-8 rounded-3xl shadow-xl border-[3px] border-indigo-400">
        <div className="text-center">
          <div className="text-6xl mb-4">{scorePercentage >= 70 ? '🎉' : '📚'}</div>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h3>
          <p className="text-lg text-gray-600 mb-6">{lessonTitle}</p>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl mb-6">
            <div className="text-5xl font-bold text-indigo-600 mb-2">{scorePercentage}%</div>
            <p className="text-gray-700 text-lg">
              {score} out of {questions.length} correct
            </p>
          </div>

          <div className="mb-6">
            {scorePercentage === 100 && (
              <p className="text-green-600 font-bold text-lg">Perfect score! Outstanding work!</p>
            )}
            {scorePercentage >= 70 && scorePercentage < 100 && (
              <p className="text-green-600 font-bold text-lg">
                Great job! You have a solid understanding.
              </p>
            )}
            {scorePercentage >= 40 && scorePercentage < 70 && (
              <p className="text-amber-600 font-bold text-lg">
                Good effort! Review the lesson to strengthen your knowledge.
              </p>
            )}
            {scorePercentage < 40 && (
              <p className="text-orange-600 font-bold text-lg">
                Keep learning! Re-read the lesson and try again.
              </p>
            )}
          </div>

          {/* Review answers */}
          <div className="text-left space-y-3 mb-6">
            {questions.map((q, idx) => {
              const wasCorrect = selectedAnswers[idx] === q.correctIndex;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border-2 ${
                    wasCorrect ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'
                  }`}
                >
                  <p className="font-semibold text-gray-800 mb-1">
                    {wasCorrect ? '✓' : '✗'} {q.question}
                  </p>
                  {!wasCorrect && (
                    <p className="text-sm text-gray-600">
                      Correct answer: {q.options[q.correctIndex]}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={onClose}
            className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all hover:-translate-y-1"
          >
            Back to Lesson
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border-[3px] border-indigo-400">
      {/* Quiz header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
          📝 Lesson Quiz
        </h3>
        <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm">
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question type badge */}
      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
          currentQuestion.type === 'vocabulary'
            ? 'bg-teal-100 text-teal-700'
            : 'bg-amber-100 text-amber-700'
        }`}
      >
        {currentQuestion.type === 'vocabulary' ? 'Vocabulary' : 'Timeline'}
      </span>

      {/* Question */}
      <p className="text-xl font-semibold text-gray-800 mb-6">{currentQuestion.question}</p>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {currentQuestion.options.map((option, idx) => {
          let buttonClass = 'w-full text-left p-4 rounded-xl border-2 font-medium transition-all ';

          if (!answered) {
            buttonClass +=
              selectedAnswers[currentIndex] === idx
                ? 'border-indigo-500 bg-indigo-50 text-indigo-800'
                : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50';
          } else {
            if (idx === currentQuestion.correctIndex) {
              buttonClass += 'border-green-500 bg-green-50 text-green-800';
            } else if (selectedAnswers[currentIndex] === idx) {
              buttonClass += 'border-red-400 bg-red-50 text-red-800';
            } else {
              buttonClass += 'border-gray-200 bg-gray-50 text-gray-500';
            }
          }

          return (
            <button key={idx} onClick={() => handleSelectAnswer(idx)} className={buttonClass}>
              <span className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span>{option}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 font-semibold transition-all"
        >
          Exit Quiz
        </button>
        {answered && (
          <button
            onClick={handleNext}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all hover:-translate-y-1"
          >
            {isLastQuestion ? 'See Results' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  );
}
