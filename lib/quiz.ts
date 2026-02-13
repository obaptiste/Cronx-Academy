import { HistoryLesson, QuizQuestion } from '@/types';

/**
 * Shuffle an array in place using Fisher-Yates algorithm.
 * Returns a new shuffled array.
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Generate vocabulary quiz questions from a lesson's vocabulary terms.
 * Uses other terms from the vocab pool as distractors.
 *
 * @param lesson - The lesson to generate questions from
 * @param vocabPool - All vocabulary definitions in the module (for distractors)
 * @param maxQuestions - Maximum number of questions to generate
 */
export function generateVocabQuestions(
  lesson: HistoryLesson,
  vocabPool: { term: string; definition: string }[],
  maxQuestions = 5,
): QuizQuestion[] {
  const terms = lesson.vocabularyTerms;
  if (terms.length === 0) return [];

  // Get all definitions except from this lesson for distractors
  const otherDefinitions = vocabPool
    .filter((v) => !terms.some((t) => t.term === v.term))
    .map((v) => v.definition);

  const questions: QuizQuestion[] = [];
  const selectedTerms = shuffleArray(terms).slice(0, maxQuestions);

  for (const term of selectedTerms) {
    // Pick 3 distractor definitions
    const distractors = shuffleArray(otherDefinitions).slice(0, 3);

    // If not enough distractors, use definitions from same lesson
    while (distractors.length < 3) {
      const otherLessonDefs = terms
        .filter((t) => t.term !== term.term)
        .map((t) => t.definition);
      const remaining = otherLessonDefs.filter((d) => !distractors.includes(d));
      if (remaining.length === 0) break;
      distractors.push(remaining[0]);
    }

    // Build options: correct answer + distractors
    const options = shuffleArray([term.definition, ...distractors]);
    const correctIndex = options.indexOf(term.definition);

    questions.push({
      id: `vocab-${term.term.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'vocabulary',
      question: `What does "${term.term}" mean?`,
      options,
      correctIndex,
    });
  }

  return questions;
}

/**
 * Generate date-matching quiz questions from a lesson's key dates.
 * Questions ask "When did [event] happen?" with date options.
 *
 * @param lesson - The lesson to generate questions from
 * @param maxQuestions - Maximum number of questions to generate
 */
export function generateDateQuestions(
  lesson: HistoryLesson,
  maxQuestions = 3,
): QuizQuestion[] {
  const dates = lesson.keyDates;
  if (dates.length < 2) return [];

  // Parse dates into { date, event } pairs
  const parsed = dates
    .map((d) => {
      const separatorIndex = d.indexOf(' - ');
      if (separatorIndex === -1) return null;
      return {
        date: d.substring(0, separatorIndex).trim(),
        event: d.substring(separatorIndex + 3).trim(),
      };
    })
    .filter((d): d is { date: string; event: string } => d !== null);

  if (parsed.length < 2) return [];

  const questions: QuizQuestion[] = [];
  const selected = shuffleArray(parsed).slice(0, maxQuestions);

  for (const item of selected) {
    // Get distractor dates from other entries
    const otherDates = parsed.filter((p) => p.date !== item.date).map((p) => p.date);
    const distractors = shuffleArray(otherDates).slice(0, 3);

    // Pad with plausible dates if needed
    while (distractors.length < 3 && distractors.length < parsed.length - 1) {
      break; // Can't generate more distractors than available
    }

    if (distractors.length < 1) continue;

    const options = shuffleArray([item.date, ...distractors]);
    const correctIndex = options.indexOf(item.date);

    questions.push({
      id: `date-${item.event.toLowerCase().replace(/\s+/g, '-').slice(0, 30)}`,
      type: 'date',
      question: `When did this happen: "${item.event}"?`,
      options,
      correctIndex,
    });
  }

  return questions;
}

/**
 * Generate a full quiz for a history/English lesson by combining
 * vocabulary and date questions.
 *
 * @param lesson - The lesson to quiz on
 * @param vocabPool - All vocabulary definitions in the module
 * @param maxTotal - Maximum total questions
 */
export function generateLessonQuiz(
  lesson: HistoryLesson,
  vocabPool: { term: string; definition: string }[],
  maxTotal = 8,
): QuizQuestion[] {
  const vocabQuestions = generateVocabQuestions(lesson, vocabPool, Math.ceil(maxTotal * 0.6));
  const dateQuestions = generateDateQuestions(lesson, Math.floor(maxTotal * 0.4));

  return shuffleArray([...vocabQuestions, ...dateQuestions]).slice(0, maxTotal);
}

/**
 * Collect all vocabulary terms from a topics object (any history module).
 */
export function collectVocabPool(
  topics: Record<string, HistoryLesson[]>,
): { term: string; definition: string }[] {
  const pool: { term: string; definition: string }[] = [];
  for (const lessons of Object.values(topics)) {
    for (const lesson of lessons) {
      pool.push(...lesson.vocabularyTerms);
    }
  }
  return pool;
}
