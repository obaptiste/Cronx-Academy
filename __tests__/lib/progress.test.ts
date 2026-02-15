import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getAllModuleProgress, getOverallStats, saveQuizResult } from '@/lib/progress';
import { QuizResult } from '@/types';

// Mock localStorage
const localStorageMock: Record<string, string> = {};

beforeEach(() => {
  Object.keys(localStorageMock).forEach((key) => delete localStorageMock[key]);
  vi.stubGlobal('localStorage', {
    getItem: vi.fn((key: string) => localStorageMock[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      localStorageMock[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete localStorageMock[key];
    }),
  });
});

describe('getAllModuleProgress', () => {
  it('returns progress for all 8 modules', () => {
    const progress = getAllModuleProgress();
    expect(progress).toHaveLength(8);
  });

  it('each module has required fields', () => {
    const progress = getAllModuleProgress();
    for (const mod of progress) {
      expect(mod.moduleId).toBeTruthy();
      expect(mod.moduleName).toBeTruthy();
      expect(mod.icon).toBeTruthy();
      expect(mod.totalLessons).toBeGreaterThan(0);
      expect(mod.completedLessons).toBeGreaterThanOrEqual(0);
      expect(Array.isArray(mod.quizResults)).toBe(true);
      expect(mod.storageKey).toBeTruthy();
    }
  });

  it('reads completed lessons from localStorage', () => {
    localStorageMock['completedWW2Lessons'] = JSON.stringify(['Lesson 1', 'Lesson 2']);
    const progress = getAllModuleProgress();
    const ww2 = progress.find((m) => m.moduleId === 'ww2');
    expect(ww2?.completedLessons).toBe(2);
  });

  it('reads quiz results from localStorage', () => {
    const results: QuizResult[] = [
      {
        lessonTitle: 'Test Lesson',
        module: 'ww2',
        score: 4,
        totalQuestions: 5,
        completedAt: new Date().toISOString(),
      },
    ];
    localStorageMock['quizResults_ww2'] = JSON.stringify(results);
    const progress = getAllModuleProgress();
    const ww2 = progress.find((m) => m.moduleId === 'ww2');
    expect(ww2?.quizResults).toHaveLength(1);
    expect(ww2?.quizResults[0].score).toBe(4);
  });

  it('returns 0 completed when localStorage is empty', () => {
    const progress = getAllModuleProgress();
    for (const mod of progress) {
      expect(mod.completedLessons).toBe(0);
    }
  });
});

describe('getOverallStats', () => {
  it('returns correct totals when no progress', () => {
    const stats = getOverallStats();
    expect(stats.totalCompleted).toBe(0);
    expect(stats.totalLessons).toBeGreaterThan(0);
    expect(stats.totalQuizzesTaken).toBe(0);
    expect(stats.averageQuizScore).toBe(0);
  });

  it('calculates total completed across modules', () => {
    localStorageMock['completedWW2Lessons'] = JSON.stringify(['L1', 'L2']);
    localStorageMock['completedEnglishLessons'] = JSON.stringify(['L3']);
    const stats = getOverallStats();
    expect(stats.totalCompleted).toBe(3);
  });

  it('calculates average quiz score', () => {
    const results: QuizResult[] = [
      {
        lessonTitle: 'Test',
        module: 'ww2',
        score: 8,
        totalQuestions: 10,
        completedAt: new Date().toISOString(),
      },
      {
        lessonTitle: 'Test 2',
        module: 'ww2',
        score: 6,
        totalQuestions: 10,
        completedAt: new Date().toISOString(),
      },
    ];
    localStorageMock['quizResults_ww2'] = JSON.stringify(results);
    const stats = getOverallStats();
    expect(stats.totalQuizzesTaken).toBe(2);
    expect(stats.averageQuizScore).toBe(70);
  });
});

describe('saveQuizResult', () => {
  it('saves a quiz result to localStorage', () => {
    const result: QuizResult = {
      lessonTitle: 'Test Lesson',
      module: 'tudor',
      score: 3,
      totalQuestions: 5,
      completedAt: new Date().toISOString(),
    };
    saveQuizResult(result);
    expect(localStorage.setItem).toHaveBeenCalledWith('quizResults_tudor', expect.any(String));
    const saved = JSON.parse(localStorageMock['quizResults_tudor']);
    expect(saved).toHaveLength(1);
    expect(saved[0].lessonTitle).toBe('Test Lesson');
  });

  it('appends to existing results', () => {
    const existing: QuizResult[] = [
      {
        lessonTitle: 'Previous',
        module: 'tudor',
        score: 4,
        totalQuestions: 5,
        completedAt: new Date().toISOString(),
      },
    ];
    localStorageMock['quizResults_tudor'] = JSON.stringify(existing);

    const newResult: QuizResult = {
      lessonTitle: 'New Lesson',
      module: 'tudor',
      score: 5,
      totalQuestions: 5,
      completedAt: new Date().toISOString(),
    };
    saveQuizResult(newResult);
    const saved = JSON.parse(localStorageMock['quizResults_tudor']);
    expect(saved).toHaveLength(2);
  });
});
