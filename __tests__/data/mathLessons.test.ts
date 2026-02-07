import { describe, it, expect } from 'vitest';
import { mathTopics } from '@/lib/data/mathLessons';

describe('mathLessons data integrity', () => {
  const allTopicKeys = Object.keys(mathTopics) as (keyof typeof mathTopics)[];
  const expectedTopics = ['algebra', 'geometry', 'number', 'statistics'];

  it('exports all expected topic categories', () => {
    expect(allTopicKeys.sort()).toEqual(expectedTopics.sort());
  });

  it('has at least one lesson per topic', () => {
    for (const key of allTopicKeys) {
      expect(mathTopics[key].length).toBeGreaterThan(0);
    }
  });

  for (const topicKey of expectedTopics) {
    describe(`topic: ${topicKey}`, () => {
      const lessons = mathTopics[topicKey as keyof typeof mathTopics];

      if (lessons) {
        lessons.forEach((lesson, index) => {
          describe(`lesson ${index + 1}: "${lesson.title}"`, () => {
            it('has a non-empty title', () => {
              expect(lesson.title).toBeTruthy();
              expect(lesson.title.length).toBeGreaterThan(0);
            });

            it('has at least one objective', () => {
              expect(lesson.objectives).toBeInstanceOf(Array);
              expect(lesson.objectives.length).toBeGreaterThan(0);
            });

            it('has a warmUp prompt', () => {
              expect(lesson.warmUp).toBeTruthy();
            });

            it('has at least one main activity', () => {
              expect(lesson.mainActivities).toBeInstanceOf(Array);
              expect(lesson.mainActivities.length).toBeGreaterThan(0);
            });

            it('has at least one practice question', () => {
              expect(lesson.practice).toBeInstanceOf(Array);
              expect(lesson.practice.length).toBeGreaterThan(0);
            });

            it('has an extension task', () => {
              expect(lesson.extension).toBeTruthy();
            });

            it('has homework', () => {
              expect(lesson.homework).toBeTruthy();
            });
          });
        });
      }
    });
  }

  it('has no duplicate lesson titles', () => {
    const allLessons = Object.values(mathTopics).flat();
    const titles = allLessons.map((l) => l.title);
    const uniqueTitles = new Set(titles);
    expect(titles.length).toBe(uniqueTitles.size);
  });
});
