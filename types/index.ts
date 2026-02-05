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

// Tudor England & Caribbean Module Types
export interface TudorLesson {
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

export interface TudorTopics {
  tudorEngland: TudorLesson[];
  earlyExploration: TudorLesson[];
  caribbeanColonization: TudorLesson[];
  tradAndEconomy: TudorLesson[];
}

export type TudorTopicCategory = keyof TudorTopics;

// Pirates of the Caribbean Module Types
export interface PiratesLesson {
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

export interface PiratesTopics {
  famousPirates: PiratesLesson[];
  lifeAtSea: PiratesLesson[];
  tradeRoutes: PiratesLesson[];
  navalBattles: PiratesLesson[];
}

export type PiratesTopicCategory = keyof PiratesTopics;

// African & Caribbean Spirituality Module Types
export interface SpiritualityLesson {
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

export interface SpiritualityTopics {
  africanRoots: SpiritualityLesson[];
  caribbeanTraditions: SpiritualityLesson[];
  syncretism: SpiritualityLesson[];
  modernPractice: SpiritualityLesson[];
}

export type SpiritualityTopicCategory = keyof SpiritualityTopics;

// American Revolution Module Types
export interface RevolutionLesson {
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

export interface RevolutionTopics {
  causesAndOrigins: RevolutionLesson[];
  majorBattles: RevolutionLesson[];
  keyFiguresAndLeaders: RevolutionLesson[];
  legacyAndImpact: RevolutionLesson[];
}

export type RevolutionTopicCategory = keyof RevolutionTopics;
