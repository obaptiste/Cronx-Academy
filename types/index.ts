// Maths Module Types
export interface MathLesson {
  title: string;
  objectives: string[];
  warmUp: string;
  mainActivities: string[];
  practice: string[];
  extension: string;
  homework: string;
}

export interface MathTopics {
  algebra: MathLesson[];
  geometry: MathLesson[];
  number: MathLesson[];
  statistics: MathLesson[];
}

export type DifficultyLevel = 'foundation' | 'standard' | 'higher';

// Module Types
export interface ModuleCard {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  status: 'ready' | 'coming-soon';
  href: string;
  colorClass: string;
}

// Progress Tracking
export interface Progress {
  completedTopics: string[];
  lastVisited: Date;
}

// WW2 History Module Types
export interface WW2Lesson {
  title: string;
  era: string;
  objectives: string[];
  keyDates: string[];
  introduction: string;
  mainContent: string[];
  primarySources: string[];
  discussionQuestions: string[];
  activities: string[];
  keyFigures: string[];
  vocabularyTerms: { term: string; definition: string }[];
  furtherReading: string;
}

export interface WW2Topics {
  causesAndOrigins: WW2Lesson[];
  majorEvents: WW2Lesson[];
  homeFront: WW2Lesson[];
  keyFiguresAndLeadership: WW2Lesson[];
  holocaustAndGenocide: WW2Lesson[];
  endAndLegacy: WW2Lesson[];
}

export type WW2TopicCategory = keyof WW2Topics;
