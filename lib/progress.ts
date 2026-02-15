import { ModuleProgress, QuizResult } from '@/types';
import { getAllWW2Lessons } from '@/lib/data/ww2Lessons';
import { getAllTudorLessons } from '@/lib/data/tudorLessons';
import { getAllPiratesLessons } from '@/lib/data/piratesLessons';
import { getAllRevolutionLessons } from '@/lib/data/revolutionLessons';
import { getAllSpiritualityLessons } from '@/lib/data/spiritualityLessons';
import { getAllNubianLessons } from '@/lib/data/nubianLessons';
import { getAllEnglishLessons } from '@/lib/data/englishLessons';
import { mathTopics } from '@/lib/data/mathLessons';

interface ModuleConfig {
  moduleId: string;
  moduleName: string;
  icon: string;
  storageKey: string;
  getTotalLessons: () => number;
}

const moduleConfigs: ModuleConfig[] = [
  {
    moduleId: 'ww2',
    moduleName: 'World War II',
    icon: '🌍',
    storageKey: 'completedWW2Lessons',
    getTotalLessons: () => getAllWW2Lessons().length,
  },
  {
    moduleId: 'tudor',
    moduleName: 'Tudor & Caribbean',
    icon: '👑',
    storageKey: 'completedTudorLessons',
    getTotalLessons: () => getAllTudorLessons().length,
  },
  {
    moduleId: 'pirates',
    moduleName: 'Pirates of the Caribbean',
    icon: '🏴‍☠️',
    storageKey: 'completedPiratesLessons',
    getTotalLessons: () => getAllPiratesLessons().length,
  },
  {
    moduleId: 'revolution',
    moduleName: 'American Revolution',
    icon: '🗽',
    storageKey: 'completedRevolutionLessons',
    getTotalLessons: () => getAllRevolutionLessons().length,
  },
  {
    moduleId: 'spirituality',
    moduleName: 'African & Caribbean Spirituality',
    icon: '✨',
    storageKey: 'completedSpiritualityLessons',
    getTotalLessons: () => getAllSpiritualityLessons().length,
  },
  {
    moduleId: 'nubian',
    moduleName: 'Nubian Warrior Queens',
    icon: '⚔️',
    storageKey: 'completedNubianLessons',
    getTotalLessons: () => getAllNubianLessons().length,
  },
  {
    moduleId: 'english',
    moduleName: 'English & Literature',
    icon: '📖',
    storageKey: 'completedEnglishLessons',
    getTotalLessons: () => getAllEnglishLessons().length,
  },
  {
    moduleId: 'maths',
    moduleName: 'Maths Interactive',
    icon: '🔢',
    storageKey: 'completedTopics',
    getTotalLessons: () => Object.values(mathTopics).flat().length,
  },
];

/**
 * Read completed lesson titles from localStorage for a given key.
 */
function getCompletedLessons(storageKey: string): string[] {
  if (typeof window === 'undefined') return [];
  const saved = localStorage.getItem(storageKey);
  return saved ? JSON.parse(saved) : [];
}

/**
 * Read quiz results from localStorage for a given module.
 */
function getQuizResults(moduleId: string): QuizResult[] {
  if (typeof window === 'undefined') return [];
  const saved = localStorage.getItem(`quizResults_${moduleId}`);
  return saved ? JSON.parse(saved) : [];
}

/**
 * Save a quiz result to localStorage.
 */
export function saveQuizResult(result: QuizResult): void {
  if (typeof window === 'undefined') return;
  const key = `quizResults_${result.module}`;
  const existing = getQuizResults(result.module);
  existing.push(result);
  localStorage.setItem(key, JSON.stringify(existing));
}

/**
 * Get progress data for all modules.
 */
export function getAllModuleProgress(): ModuleProgress[] {
  return moduleConfigs.map((config) => ({
    moduleId: config.moduleId,
    moduleName: config.moduleName,
    icon: config.icon,
    completedLessons: getCompletedLessons(config.storageKey).length,
    totalLessons: config.getTotalLessons(),
    quizResults: getQuizResults(config.moduleId),
    storageKey: config.storageKey,
  }));
}

/**
 * Get aggregate stats across all modules.
 */
export function getOverallStats(): {
  totalCompleted: number;
  totalLessons: number;
  totalQuizzesTaken: number;
  averageQuizScore: number;
} {
  const allProgress = getAllModuleProgress();

  const totalCompleted = allProgress.reduce((sum, m) => sum + m.completedLessons, 0);
  const totalLessons = allProgress.reduce((sum, m) => sum + m.totalLessons, 0);

  const allQuizResults = allProgress.flatMap((m) => m.quizResults);
  const totalQuizzesTaken = allQuizResults.length;
  const averageQuizScore =
    totalQuizzesTaken > 0
      ? Math.round(
          (allQuizResults.reduce((sum, r) => sum + (r.score / r.totalQuestions) * 100, 0) /
            totalQuizzesTaken) *
            10,
        ) / 10
      : 0;

  return { totalCompleted, totalLessons, totalQuizzesTaken, averageQuizScore };
}
