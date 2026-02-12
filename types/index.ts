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

// History Module Types (shared across all history modules)
export interface HistoryLesson {
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

// WW2 History Module Topics
export interface WW2Topics {
  causesAndOrigins: HistoryLesson[];
  majorEvents: HistoryLesson[];
  homeFront: HistoryLesson[];
  keyFiguresAndLeadership: HistoryLesson[];
  holocaustAndGenocide: HistoryLesson[];
  endAndLegacy: HistoryLesson[];
}

export type WW2TopicCategory = keyof WW2Topics;

// Tudor England & Caribbean Module Topics
export interface TudorTopics {
  tudorEngland: HistoryLesson[];
  earlyExploration: HistoryLesson[];
  caribbeanColonization: HistoryLesson[];
  tradAndEconomy: HistoryLesson[];
}

export type TudorTopicCategory = keyof TudorTopics;

// Pirates of the Caribbean Module Topics
export interface PiratesTopics {
  famousPirates: HistoryLesson[];
  lifeAtSea: HistoryLesson[];
  tradeRoutes: HistoryLesson[];
  navalBattles: HistoryLesson[];
}

export type PiratesTopicCategory = keyof PiratesTopics;

// African & Caribbean Spirituality Module Topics
export interface SpiritualityTopics {
  africanRoots: HistoryLesson[];
  caribbeanTraditions: HistoryLesson[];
  syncretism: HistoryLesson[];
  modernPractice: HistoryLesson[];
}

export type SpiritualityTopicCategory = keyof SpiritualityTopics;

// American Revolution Module Topics
export interface RevolutionTopics {
  causesAndOrigins: HistoryLesson[];
  majorBattles: HistoryLesson[];
  keyFiguresAndLeaders: HistoryLesson[];
  legacyAndImpact: HistoryLesson[];
}

export type RevolutionTopicCategory = keyof RevolutionTopics;

// English & Literature Module Topics
export interface EnglishTopics {
  caribbeanAuthors: HistoryLesson[];
  literaryAnalysis: HistoryLesson[];
  creativeWriting: HistoryLesson[];
  poetrySpokenWord: HistoryLesson[];
}

export type EnglishTopicCategory = keyof EnglishTopics;
