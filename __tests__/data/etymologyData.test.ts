import { describe, it, expect } from 'vitest';
import {
  languageNodes,
  timelineEvents,
  wordDetectiveRounds,
  deadLanguages,
  quizQuestions,
  getChildren,
  getNodeById,
} from '@/lib/data/etymologyData';

describe('Language Nodes — data integrity', () => {
  it('has at least 30 language nodes', () => {
    expect(languageNodes.length).toBeGreaterThanOrEqual(30);
  });

  it('every node has required string fields', () => {
    for (const node of languageNodes) {
      expect(typeof node.id).toBe('string');
      expect(node.id.length).toBeGreaterThan(0);
      expect(typeof node.name).toBe('string');
      expect(node.name.length).toBeGreaterThan(0);
      expect(typeof node.era).toBe('string');
      expect(typeof node.region).toBe('string');
      expect(typeof node.didYouKnow).toBe('string');
      expect(node.didYouKnow.length).toBeGreaterThan(0);
    }
  });

  it('every node has a valid type', () => {
    const validTypes = ['root', 'family', 'subfamily', 'language'] as const;
    for (const node of languageNodes) {
      expect(validTypes).toContain(node.type);
    }
  });

  it('every node has a valid status', () => {
    const validStatuses = ['living', 'extinct', 'revived'] as const;
    for (const node of languageNodes) {
      expect(validStatuses).toContain(node.status);
    }
  });

  it('all node ids are unique', () => {
    const ids = languageNodes.map((n) => n.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('every parent reference points to an existing node', () => {
    const ids = new Set(languageNodes.map((n) => n.id));
    for (const node of languageNodes) {
      if (node.parent !== undefined) {
        expect(ids.has(node.parent)).toBe(true);
      }
    }
  });

  it('has exactly one root node (PIE)', () => {
    const roots = languageNodes.filter((n) => n.type === 'root');
    expect(roots.length).toBe(1);
    expect(roots[0].id).toBe('pie');
  });

  it('every node has at least one example', () => {
    for (const node of languageNodes) {
      expect(Array.isArray(node.examples)).toBe(true);
      expect(node.examples.length).toBeGreaterThanOrEqual(1);
      for (const ex of node.examples) {
        expect(typeof ex.modernWord).toBe('string');
        expect(Array.isArray(ex.chain)).toBe(true);
        expect(ex.chain.length).toBeGreaterThanOrEqual(1);
        expect(typeof ex.meaning).toBe('string');
      }
    }
  });

  it('includes Basque as an outlier with no parent', () => {
    const basque = languageNodes.find((n) => n.id === 'basque');
    expect(basque).toBeDefined();
    expect(basque!.parent).toBeUndefined();
    expect(basque!.type).toBe('language');
  });

  it('includes expected language families', () => {
    const familyIds = languageNodes.filter((n) => n.type === 'family').map((n) => n.id);
    expect(familyIds).toContain('celtic');
    expect(familyIds).toContain('germanic');
    expect(familyIds).toContain('romance');
    expect(familyIds).toContain('slavic');
    expect(familyIds).toContain('hellenic');
    expect(familyIds).toContain('baltic');
  });

  it('includes extinct languages', () => {
    const extinctNodes = languageNodes.filter((n) => n.status === 'extinct');
    expect(extinctNodes.length).toBeGreaterThanOrEqual(2);
    const ids = extinctNodes.map((n) => n.id);
    expect(ids).toContain('dalmatian');
    expect(ids).toContain('norn');
  });

  it('includes at least one revived language (Cornish)', () => {
    const revived = languageNodes.filter((n) => n.status === 'revived');
    expect(revived.length).toBeGreaterThanOrEqual(1);
    expect(revived.map((n) => n.id)).toContain('cornish');
  });

  it('includes Caribbean connections on key nodes', () => {
    const withCaribbean = languageNodes.filter((n) => n.caribbeanConnection !== undefined);
    expect(withCaribbean.length).toBeGreaterThanOrEqual(4);
    const ids = withCaribbean.map((n) => n.id);
    expect(ids).toContain('english');
    expect(ids).toContain('spanish');
    expect(ids).toContain('dutch');
  });
});

describe('getChildren helper', () => {
  it('returns direct children of PIE', () => {
    const pieChildren = getChildren('pie');
    expect(pieChildren.length).toBeGreaterThanOrEqual(5);
    const childIds = pieChildren.map((n) => n.id);
    expect(childIds).toContain('celtic');
    expect(childIds).toContain('germanic');
    expect(childIds).toContain('romance');
    expect(childIds).toContain('slavic');
  });

  it('returns empty array for leaf nodes', () => {
    const leafChildren = getChildren('english');
    expect(leafChildren).toEqual([]);
  });

  it('returns nodes with no parent when called with undefined', () => {
    const roots = getChildren(undefined);
    expect(roots.length).toBeGreaterThanOrEqual(1);
    for (const node of roots) {
      expect(node.parent).toBeUndefined();
    }
  });
});

describe('getNodeById helper', () => {
  it('finds a node by id', () => {
    const node = getNodeById('pie');
    expect(node).toBeDefined();
    expect(node!.name).toContain('Proto-Indo-European');
  });

  it('returns undefined for unknown id', () => {
    const node = getNodeById('nonexistent-language-xyz');
    expect(node).toBeUndefined();
  });
});

describe('Timeline Events — data integrity', () => {
  it('has at least 10 events', () => {
    expect(timelineEvents.length).toBeGreaterThanOrEqual(10);
  });

  it('every event has required fields', () => {
    for (const ev of timelineEvents) {
      expect(typeof ev.year).toBe('string');
      expect(ev.year.length).toBeGreaterThan(0);
      expect(typeof ev.event).toBe('string');
      expect(ev.event.length).toBeGreaterThan(0);
      expect(typeof ev.detail).toBe('string');
      expect(typeof ev.narrative).toBe('string');
      expect(ev.narrative.length).toBeGreaterThan(50);
      expect(typeof ev.etymologicalExample).toBe('string');
      expect(ev.etymologicalExample.length).toBeGreaterThan(10);
    }
  });

  it('includes the Colonial Era event with Caribbean connection', () => {
    const colonial = timelineEvents.find((e) => e.event.includes('Colonial'));
    expect(colonial).toBeDefined();
    expect(colonial!.caribbeanConnection).toBeDefined();
    expect(colonial!.caribbeanConnection!.length).toBeGreaterThan(0);
  });

  it('includes the Norman Conquest', () => {
    const conquest = timelineEvents.find((e) => e.event.includes('Norman'));
    expect(conquest).toBeDefined();
    expect(conquest!.year).toBe('1066 CE');
  });

  it('includes the printing press event', () => {
    const press = timelineEvents.find((e) => e.event.includes('Printing'));
    expect(press).toBeDefined();
    expect(press!.year).toBe('1440 CE');
  });
});

describe('Word Detective Rounds — data integrity', () => {
  it('has at least 5 rounds', () => {
    expect(wordDetectiveRounds.length).toBeGreaterThanOrEqual(5);
  });

  it('every round has required fields', () => {
    for (const round of wordDetectiveRounds) {
      expect(typeof round.word).toBe('string');
      expect(round.word.length).toBeGreaterThan(0);
      expect(Array.isArray(round.steps)).toBe(true);
      expect(round.steps.length).toBeGreaterThanOrEqual(2);
      expect(typeof round.finalFact).toBe('string');
      expect(round.finalFact.length).toBeGreaterThan(10);
    }
  });

  it('every step has valid options with a correct answer in range', () => {
    for (const round of wordDetectiveRounds) {
      for (const step of round.steps) {
        expect(typeof step.prompt).toBe('string');
        expect(Array.isArray(step.options)).toBe(true);
        expect(step.options.length).toBeGreaterThanOrEqual(2);
        expect(step.correctIndex).toBeGreaterThanOrEqual(0);
        expect(step.correctIndex).toBeLessThan(step.options.length);
        expect(typeof step.explanation).toBe('string');
        expect(step.explanation.length).toBeGreaterThan(10);
      }
    }
  });

  it('includes rounds about Caribbean words', () => {
    const caribbeanRounds = wordDetectiveRounds.filter((r) => r.caribbeanConnection !== undefined);
    expect(caribbeanRounds.length).toBeGreaterThanOrEqual(2);
  });

  it('includes a round for HURRICANE', () => {
    const hurricane = wordDetectiveRounds.find((r) => r.word === 'HURRICANE');
    expect(hurricane).toBeDefined();
    expect(hurricane!.caribbeanConnection).toBeDefined();
  });

  it('includes a round for BARBECUE', () => {
    const bbq = wordDetectiveRounds.find((r) => r.word === 'BARBECUE');
    expect(bbq).toBeDefined();
  });
});

describe('Dead Languages — data integrity', () => {
  it('has at least 5 entries', () => {
    expect(deadLanguages.length).toBeGreaterThanOrEqual(5);
  });

  it('every entry has required fields', () => {
    for (const lang of deadLanguages) {
      expect(typeof lang.name).toBe('string');
      expect(lang.name.length).toBeGreaterThan(0);
      expect(typeof lang.family).toBe('string');
      expect(typeof lang.region).toBe('string');
      expect(typeof lang.died).toBe('string');
      expect(typeof lang.lastSpeaker).toBe('string');
      expect(lang.lastSpeaker.length).toBeGreaterThan(0);
      expect(typeof lang.legacy).toBe('string');
      expect(lang.legacy.length).toBeGreaterThan(20);
      expect(Array.isArray(lang.sampleWords)).toBe(true);
      for (const word of lang.sampleWords) {
        expect(typeof word.word).toBe('string');
        expect(typeof word.meaning).toBe('string');
      }
    }
  });

  it('includes Dalmatian with correct death year', () => {
    const dalmatian = deadLanguages.find((l) => l.name === 'Dalmatian');
    expect(dalmatian).toBeDefined();
    expect(dalmatian!.died).toContain('1898');
    expect(dalmatian!.lastSpeaker).toContain('Udaina');
  });

  it('includes Cornish', () => {
    const cornish = deadLanguages.find((l) => l.name === 'Cornish');
    expect(cornish).toBeDefined();
    expect(cornish!.sampleWords.length).toBeGreaterThan(0);
  });

  it('includes Gothic', () => {
    const gothic = deadLanguages.find((l) => l.name === 'Gothic');
    expect(gothic).toBeDefined();
    expect(gothic!.family).toContain('Germanic');
  });
});

describe('Quiz Questions — data integrity', () => {
  it('has exactly 15 questions', () => {
    expect(quizQuestions.length).toBe(15);
  });

  it('all question ids are unique', () => {
    const ids = quizQuestions.map((q) => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('every question has required fields', () => {
    for (const q of quizQuestions) {
      expect(typeof q.id).toBe('number');
      expect(['multiple-choice', 'true-false']).toContain(q.type);
      expect(typeof q.question).toBe('string');
      expect(q.question.length).toBeGreaterThan(10);
      expect(Array.isArray(q.options)).toBe(true);
      expect(q.options.length).toBeGreaterThanOrEqual(2);
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThan(q.options.length);
      expect(typeof q.explanation).toBe('string');
      expect(q.explanation.length).toBeGreaterThan(20);
    }
  });

  it('true-false questions have exactly 2 options', () => {
    const tfQuestions = quizQuestions.filter((q) => q.type === 'true-false');
    expect(tfQuestions.length).toBeGreaterThanOrEqual(2);
    for (const q of tfQuestions) {
      expect(q.options.length).toBe(2);
    }
  });

  it('multiple-choice questions have at least 3 options', () => {
    const mcQuestions = quizQuestions.filter((q) => q.type === 'multiple-choice');
    for (const q of mcQuestions) {
      expect(q.options.length).toBeGreaterThanOrEqual(3);
    }
  });

  it('the Basque question has the correct answer', () => {
    const basqueQ = quizQuestions.find((q) =>
      q.question.toLowerCase().includes('pre-indo-european'),
    );
    expect(basqueQ).toBeDefined();
    expect(basqueQ!.options[basqueQ!.correctIndex]).toBe('Basque');
  });

  it('the Norman Conquest question has the correct answer', () => {
    const conquestQ = quizQuestions.find((q) => q.question.toLowerCase().includes('1066'));
    expect(conquestQ).toBeDefined();
    expect(conquestQ!.options[conquestQ!.correctIndex]).toContain('Norman');
  });
});
