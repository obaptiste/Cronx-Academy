import { describe, it, expect } from 'vitest';
import { biologyTopics, getAllBiologyLessons } from '@/lib/data/biologyLessons';

describe('biologyLessons data integrity', () => {
  const allTopicKeys = Object.keys(biologyTopics) as (keyof typeof biologyTopics)[];
  const expectedTopics = [
    'cellsAndOrganisation',
    'bodySystems',
    'ecologyAndEcosystems',
    'geneticsAndInheritance',
    'healthAndNutrition',
    'caribbeanBiodiversity',
  ];

  it('exports all expected topic categories', () => {
    expect(allTopicKeys.sort()).toEqual(expectedTopics.sort());
  });

  it('has at least one lesson per topic', () => {
    for (const key of allTopicKeys) {
      expect(biologyTopics[key].length).toBeGreaterThan(0);
    }
  });

  it('getAllBiologyLessons returns all lessons with their category', () => {
    const all = getAllBiologyLessons();
    const totalFromTopics = Object.values(biologyTopics).flat().length;
    expect(all.length).toBe(totalFromTopics);
    for (const { lesson, category } of all) {
      expect(lesson).toBeDefined();
      expect(category).toBeTruthy();
    }
  });

  for (const topicKey of expectedTopics) {
    describe(`topic: ${topicKey}`, () => {
      const lessons = biologyTopics[topicKey as keyof typeof biologyTopics];

      if (lessons) {
        lessons.forEach((lesson, index) => {
          describe(`lesson ${index + 1}: "${lesson.title}"`, () => {
            it('has a non-empty title', () => {
              expect(lesson.title).toBeTruthy();
              expect(lesson.title.length).toBeGreaterThan(0);
            });

            it('has a valid level', () => {
              expect(['foundation', 'standard', 'higher']).toContain(lesson.level);
            });

            it('has a non-empty category', () => {
              expect(lesson.category).toBeTruthy();
            });

            it('has at least one objective', () => {
              expect(lesson.objectives).toBeInstanceOf(Array);
              expect(lesson.objectives.length).toBeGreaterThan(0);
              for (const obj of lesson.objectives) {
                expect(obj).toBeTruthy();
              }
            });

            it('has a non-empty introduction', () => {
              expect(lesson.introduction).toBeTruthy();
              expect(lesson.introduction.length).toBeGreaterThan(20);
            });

            it('has at least two main content points', () => {
              expect(lesson.mainContent).toBeInstanceOf(Array);
              expect(lesson.mainContent.length).toBeGreaterThanOrEqual(2);
            });

            it('has at least two key concepts', () => {
              expect(lesson.keyConceptsAndDefinitions).toBeInstanceOf(Array);
              expect(lesson.keyConceptsAndDefinitions.length).toBeGreaterThanOrEqual(2);
              for (const { term, definition } of lesson.keyConceptsAndDefinitions) {
                expect(term).toBeTruthy();
                expect(definition).toBeTruthy();
              }
            });

            it('has at least one experiment with required fields', () => {
              expect(lesson.experiments).toBeInstanceOf(Array);
              expect(lesson.experiments.length).toBeGreaterThan(0);
              for (const exp of lesson.experiments) {
                expect(exp.name).toBeTruthy();
                expect(exp.description).toBeTruthy();
                expect(exp.steps).toBeInstanceOf(Array);
                expect(exp.steps.length).toBeGreaterThan(0);
              }
            });

            it('has at least one practice question with an answer', () => {
              expect(lesson.practiceQuestions).toBeInstanceOf(Array);
              expect(lesson.practiceQuestions.length).toBeGreaterThan(0);
              for (const { question, answer } of lesson.practiceQuestions) {
                expect(question).toBeTruthy();
                expect(answer).toBeTruthy();
              }
            });

            it('has at least one fun fact', () => {
              expect(lesson.funFacts).toBeInstanceOf(Array);
              expect(lesson.funFacts.length).toBeGreaterThan(0);
            });

            it('has at least one real-world connection', () => {
              expect(lesson.realWorldConnections).toBeInstanceOf(Array);
              expect(lesson.realWorldConnections.length).toBeGreaterThan(0);
            });

            it('has exactly 3 quiz questions', () => {
              expect(lesson.quizQuestions).toBeInstanceOf(Array);
              expect(lesson.quizQuestions.length).toBe(3);
            });

            it('has valid quiz questions with 4 options each and a valid correctIndex', () => {
              for (const q of lesson.quizQuestions) {
                expect(q.question).toBeTruthy();
                expect(q.options).toBeInstanceOf(Array);
                expect(q.options.length).toBe(4);
                expect(q.correctIndex).toBeGreaterThanOrEqual(0);
                expect(q.correctIndex).toBeLessThan(q.options.length);
              }
            });

            it('has a non-empty furtherReading field', () => {
              expect(lesson.furtherReading).toBeTruthy();
            });
          });
        });
      }
    });
  }

  it('has no duplicate lesson titles', () => {
    const allLessons = Object.values(biologyTopics).flat();
    const titles = allLessons.map((l) => l.title);
    const uniqueTitles = new Set(titles);
    expect(titles.length).toBe(uniqueTitles.size);
  });
});
