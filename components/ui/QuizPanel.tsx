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
      <div className="paper-card border border-amber-300/70 p-8">
        <div className="text-center">
          <div className="text-5xl mb-4">📝</div>
          <h3 className="display-title mb-3 text-3xl text-[var(--text-dark)]">No Quiz Available</h3>
          <p className="mb-6 text-[var(--text-soft-dark)]">
            This lesson doesn&apos;t have enough content to generate a quiz yet.
          </p>
          <button
            onClick={onClose}
            className="rounded-full bg-slate-700 px-6 py-3 font-bold text-white hover:bg-slate-800"
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
      <div className="paper-card border border-[var(--line-strong)] p-8">
        <div className="text-center">
          <div className="text-6xl mb-4">{scorePercentage >= 70 ? '🎉' : '📚'}</div>
          <h3 className="display-title mb-2 text-4xl text-[var(--text-dark)]">Quiz Complete!</h3>
          <p className="mb-6 text-lg text-[var(--text-soft-dark)]">{lessonTitle}</p>

          <div className="mb-6 rounded-[1.5rem] border border-amber-200 bg-[linear-gradient(135deg,rgba(226,197,121,0.16),rgba(95,196,182,0.12))] p-8">
            <div className="mb-2 text-5xl font-bold text-[var(--text-dark)]">
              {scorePercentage}%
            </div>
            <p className="text-lg text-[var(--text-soft-dark)]">
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
                    wasCorrect ? 'border-green-300 bg-green-50/80' : 'border-red-300 bg-red-50/80'
                  }`}
                >
                  <p className="mb-1 font-semibold text-[var(--text-dark)]">
                    {wasCorrect ? '✓' : '✗'} {q.question}
                  </p>
                  {!wasCorrect && (
                    <p className="text-sm text-[var(--text-soft-dark)]">
                      Correct answer: {q.options[q.correctIndex]}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <button onClick={onClose} className="button-primary">
            Back to Lesson
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="paper-card border border-[var(--line-strong)] p-8">
      {/* Quiz header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="display-title flex items-center gap-2 text-3xl text-[var(--text-dark)]">
          📝 Lesson Quiz
        </h3>
        <span className="rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-bold text-amber-800">
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="mb-6 h-2 w-full rounded-full bg-stone-200">
        <div
          className="h-2 rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-strong))] transition-all duration-300"
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
      <p className="mb-6 text-xl font-semibold text-[var(--text-dark)]">
        {currentQuestion.question}
      </p>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {currentQuestion.options.map((option, idx) => {
          let buttonClass = 'w-full text-left p-4 rounded-xl border-2 font-medium transition-all ';

          if (!answered) {
            buttonClass +=
              selectedAnswers[currentIndex] === idx
                ? 'border-amber-400 bg-amber-50 text-amber-900'
                : 'border-stone-200 bg-[rgba(255,255,255,0.8)] text-[var(--text-soft-dark)] hover:border-amber-300 hover:bg-amber-50/70';
          } else {
            if (idx === currentQuestion.correctIndex) {
              buttonClass += 'border-green-500 bg-green-50 text-green-800';
            } else if (selectedAnswers[currentIndex] === idx) {
              buttonClass += 'border-red-400 bg-red-50 text-red-800';
            } else {
              buttonClass += 'border-stone-200 bg-stone-50 text-stone-500';
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
          className="font-semibold text-[var(--text-soft-dark)] hover:text-[var(--text-dark)]"
        >
          Exit Quiz
        </button>
        {answered && (
          <button onClick={handleNext} className="button-primary">
            {isLastQuestion ? 'See Results' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  );
}
