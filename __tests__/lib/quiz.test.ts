import { describe, it, expect } from 'vitest';
import {
  shuffleArray,
  generateVocabQuestions,
  generateDateQuestions,
  generateLessonQuiz,
  collectVocabPool,
} from '@/lib/quiz';
import { HistoryLesson } from '@/types';

const mockLesson: HistoryLesson = {
  title: 'Test Lesson',
  era: '1900-2000',
  objectives: ['Learn something'],
  keyDates: [
    '1914 - World War I begins',
    '1918 - World War I ends',
    '1939 - World War II begins',
    '1945 - World War II ends',
  ],
  introduction: 'An introduction',
  mainContent: ['Content 1'],
  primarySources: ['Source 1'],
  discussionQuestions: ['Question 1?'],
  activities: ['Activity 1'],
  keyFigures: ['Person A'],
  vocabularyTerms: [
    { term: 'Alliance', definition: 'A formal agreement between countries' },
    { term: 'Treaty', definition: 'A formal signed agreement between states' },
    { term: 'Armistice', definition: 'A ceasefire agreement' },
    { term: 'Reparations', definition: 'Payments for war damages' },
    { term: 'Propaganda', definition: 'Information used to promote a cause' },
  ],
  furtherReading: 'Read more here',
};

const mockVocabPool = [
  { term: 'Alliance', definition: 'A formal agreement between countries' },
  { term: 'Treaty', definition: 'A formal signed agreement between states' },
  { term: 'Armistice', definition: 'A ceasefire agreement' },
  { term: 'Reparations', definition: 'Payments for war damages' },
  { term: 'Propaganda', definition: 'Information used to promote a cause' },
  { term: 'Blitzkrieg', definition: 'An intense military campaign' },
  { term: 'Conscription', definition: 'Compulsory military service' },
  { term: 'Rationing', definition: 'Controlled distribution of resources' },
];

describe('shuffleArray', () => {
  it('returns an array of the same length', () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffleArray(input);
    expect(result).toHaveLength(input.length);
  });

  it('contains all original elements', () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffleArray(input);
    expect(result.sort()).toEqual(input.sort());
  });

  it('does not mutate the original array', () => {
    const input = [1, 2, 3, 4, 5];
    const copy = [...input];
    shuffleArray(input);
    expect(input).toEqual(copy);
  });
});

describe('generateVocabQuestions', () => {
  it('generates questions from vocabulary terms', () => {
    const questions = generateVocabQuestions(mockLesson, mockVocabPool, 3);
    expect(questions.length).toBeGreaterThan(0);
    expect(questions.length).toBeLessThanOrEqual(3);
  });

  it('each question has correct structure', () => {
    const questions = generateVocabQuestions(mockLesson, mockVocabPool, 5);
    for (const q of questions) {
      expect(q.id).toBeTruthy();
      expect(q.type).toBe('vocabulary');
      expect(q.question).toContain('What does');
      expect(q.options.length).toBeGreaterThanOrEqual(2);
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThan(q.options.length);
    }
  });

  it('correct answer is in the options', () => {
    const questions = generateVocabQuestions(mockLesson, mockVocabPool, 5);
    for (const q of questions) {
      const termName = q.question.match(/"([^"]+)"/)?.[1];
      const term = mockLesson.vocabularyTerms.find((v) => v.term === termName);
      expect(term).toBeTruthy();
      expect(q.options[q.correctIndex]).toBe(term!.definition);
    }
  });

  it('returns empty array if no vocabulary terms', () => {
    const emptyLesson = { ...mockLesson, vocabularyTerms: [] };
    const questions = generateVocabQuestions(emptyLesson, mockVocabPool);
    expect(questions).toEqual([]);
  });
});

describe('generateDateQuestions', () => {
  it('generates questions from key dates', () => {
    const questions = generateDateQuestions(mockLesson, 3);
    expect(questions.length).toBeGreaterThan(0);
    expect(questions.length).toBeLessThanOrEqual(3);
  });

  it('each question has correct structure', () => {
    const questions = generateDateQuestions(mockLesson, 3);
    for (const q of questions) {
      expect(q.id).toBeTruthy();
      expect(q.type).toBe('date');
      expect(q.question).toContain('When did this happen');
      expect(q.options.length).toBeGreaterThanOrEqual(2);
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThan(q.options.length);
    }
  });

  it('returns empty array if fewer than 2 key dates', () => {
    const fewDates = { ...mockLesson, keyDates: ['1914 - One event'] };
    const questions = generateDateQuestions(fewDates);
    expect(questions).toEqual([]);
  });

  it('returns empty array if dates lack separator', () => {
    const badDates = { ...mockLesson, keyDates: ['no separator here', 'another one'] };
    const questions = generateDateQuestions(badDates);
    expect(questions).toEqual([]);
  });
});

describe('generateLessonQuiz', () => {
  it('combines vocab and date questions', () => {
    const questions = generateLessonQuiz(mockLesson, mockVocabPool, 8);
    expect(questions.length).toBeGreaterThan(0);
    expect(questions.length).toBeLessThanOrEqual(8);
    const types = questions.map((q) => q.type);
    expect(types).toContain('vocabulary');
  });

  it('respects max total limit', () => {
    const questions = generateLessonQuiz(mockLesson, mockVocabPool, 3);
    expect(questions.length).toBeLessThanOrEqual(3);
  });
});

describe('collectVocabPool', () => {
  it('collects all vocabulary terms from a topics object', () => {
    const topics: Record<string, HistoryLesson[]> = {
      category1: [mockLesson],
      category2: [
        {
          ...mockLesson,
          vocabularyTerms: [{ term: 'Extra', definition: 'An extra term' }],
        },
      ],
    };
    const pool = collectVocabPool(topics);
    expect(pool.length).toBe(mockLesson.vocabularyTerms.length + 1);
  });

  it('returns empty array for empty topics', () => {
    const pool = collectVocabPool({});
    expect(pool).toEqual([]);
  });
});
