import { describe, it, expect } from 'vitest';
import { ww2Topics } from '@/lib/data/ww2Lessons';
import { tudorTopics } from '@/lib/data/tudorLessons';
import { piratesTopics } from '@/lib/data/piratesLessons';
import { revolutionTopics } from '@/lib/data/revolutionLessons';
import { spiritualityTopics } from '@/lib/data/spiritualityLessons';

/**
 * All history lesson types share the same required fields.
 * This helper validates any history-style lesson object.
 */
function expectValidHistoryLesson(lesson: Record<string, unknown>, context: string) {
  const requiredStringFields = ['title', 'era', 'introduction', 'furtherReading'] as const;
  const requiredArrayFields = [
    'objectives',
    'keyDates',
    'mainContent',
    'primarySources',
    'discussionQuestions',
    'activities',
    'keyFigures',
  ] as const;

  for (const field of requiredStringFields) {
    it(`${context} has non-empty "${field}"`, () => {
      expect(lesson[field]).toBeTruthy();
      expect(typeof lesson[field]).toBe('string');
    });
  }

  for (const field of requiredArrayFields) {
    it(`${context} has at least one entry in "${field}"`, () => {
      expect(Array.isArray(lesson[field])).toBe(true);
      expect((lesson[field] as unknown[]).length).toBeGreaterThan(0);
    });
  }

  it(`${context} has vocabularyTerms with term & definition`, () => {
    const terms = lesson.vocabularyTerms as { term: string; definition: string }[];
    expect(Array.isArray(terms)).toBe(true);
    expect(terms.length).toBeGreaterThan(0);
    for (const entry of terms) {
      expect(entry.term).toBeTruthy();
      expect(entry.definition).toBeTruthy();
    }
  });
}

// ----- WW2 -----
describe('WW2 lessons data integrity', () => {
  const topicKeys = Object.keys(ww2Topics) as (keyof typeof ww2Topics)[];

  it('exports at least 3 topic categories', () => {
    expect(topicKeys.length).toBeGreaterThanOrEqual(3);
  });

  it('has at least one lesson per topic', () => {
    for (const key of topicKeys) {
      expect(ww2Topics[key].length).toBeGreaterThan(0);
    }
  });

  for (const topicKey of topicKeys) {
    describe(`topic: ${topicKey}`, () => {
      const lessons = ww2Topics[topicKey];
      lessons.forEach((lesson, i) => {
        describe(`lesson ${i + 1}`, () => {
          expectValidHistoryLesson(
            lesson as unknown as Record<string, unknown>,
            `WW2/${topicKey}/${lesson.title}`,
          );
        });
      });
    });
  }

  it('has no duplicate lesson titles', () => {
    const all = Object.values(ww2Topics).flat();
    const titles = all.map((l) => l.title);
    expect(titles.length).toBe(new Set(titles).size);
  });
});

// ----- Tudor -----
describe('Tudor lessons data integrity', () => {
  const topicKeys = Object.keys(tudorTopics) as (keyof typeof tudorTopics)[];

  it('has at least one lesson per topic', () => {
    for (const key of topicKeys) {
      expect(tudorTopics[key].length).toBeGreaterThan(0);
    }
  });

  for (const topicKey of topicKeys) {
    describe(`topic: ${topicKey}`, () => {
      const lessons = tudorTopics[topicKey];
      lessons.forEach((lesson, i) => {
        describe(`lesson ${i + 1}`, () => {
          expectValidHistoryLesson(
            lesson as unknown as Record<string, unknown>,
            `Tudor/${topicKey}/${lesson.title}`,
          );
        });
      });
    });
  }

  it('has no duplicate lesson titles', () => {
    const all = Object.values(tudorTopics).flat();
    const titles = all.map((l) => l.title);
    expect(titles.length).toBe(new Set(titles).size);
  });
});

// ----- Pirates -----
describe('Pirates lessons data integrity', () => {
  const topicKeys = Object.keys(piratesTopics) as (keyof typeof piratesTopics)[];

  it('has at least one lesson per topic', () => {
    for (const key of topicKeys) {
      expect(piratesTopics[key].length).toBeGreaterThan(0);
    }
  });

  for (const topicKey of topicKeys) {
    describe(`topic: ${topicKey}`, () => {
      const lessons = piratesTopics[topicKey];
      lessons.forEach((lesson, i) => {
        describe(`lesson ${i + 1}`, () => {
          expectValidHistoryLesson(
            lesson as unknown as Record<string, unknown>,
            `Pirates/${topicKey}/${lesson.title}`,
          );
        });
      });
    });
  }

  it('has no duplicate lesson titles', () => {
    const all = Object.values(piratesTopics).flat();
    const titles = all.map((l) => l.title);
    expect(titles.length).toBe(new Set(titles).size);
  });
});

// ----- Revolution -----
describe('Revolution lessons data integrity', () => {
  const topicKeys = Object.keys(revolutionTopics) as (keyof typeof revolutionTopics)[];

  it('has at least one lesson per topic', () => {
    for (const key of topicKeys) {
      expect(revolutionTopics[key].length).toBeGreaterThan(0);
    }
  });

  for (const topicKey of topicKeys) {
    describe(`topic: ${topicKey}`, () => {
      const lessons = revolutionTopics[topicKey];
      lessons.forEach((lesson, i) => {
        describe(`lesson ${i + 1}`, () => {
          expectValidHistoryLesson(
            lesson as unknown as Record<string, unknown>,
            `Revolution/${topicKey}/${lesson.title}`,
          );
        });
      });
    });
  }

  it('has no duplicate lesson titles', () => {
    const all = Object.values(revolutionTopics).flat();
    const titles = all.map((l) => l.title);
    expect(titles.length).toBe(new Set(titles).size);
  });
});

// ----- Spirituality -----
describe('Spirituality lessons data integrity', () => {
  const topicKeys = Object.keys(spiritualityTopics) as (keyof typeof spiritualityTopics)[];

  it('has at least one lesson per topic', () => {
    for (const key of topicKeys) {
      expect(spiritualityTopics[key].length).toBeGreaterThan(0);
    }
  });

  for (const topicKey of topicKeys) {
    describe(`topic: ${topicKey}`, () => {
      const lessons = spiritualityTopics[topicKey];
      lessons.forEach((lesson, i) => {
        describe(`lesson ${i + 1}`, () => {
          expectValidHistoryLesson(
            lesson as unknown as Record<string, unknown>,
            `Spirituality/${topicKey}/${lesson.title}`,
          );
        });
      });
    });
  }

  it('has no duplicate lesson titles', () => {
    const all = Object.values(spiritualityTopics).flat();
    const titles = all.map((l) => l.title);
    expect(titles.length).toBe(new Set(titles).size);
  });
});
