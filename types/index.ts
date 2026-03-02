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

// Nubian Warrior Queens Module Topics
export interface NubianTopics {
  kingdomOfKush: HistoryLesson[];
  warriorQueens: HistoryLesson[];
  cultureAndInnovation: HistoryLesson[];
  legacyAndConnections: HistoryLesson[];
}

export type NubianTopicCategory = keyof NubianTopics;

// English & Literature Module Topics
export interface EnglishTopics {
  caribbeanAuthors: HistoryLesson[];
  literaryAnalysis: HistoryLesson[];
  creativeWriting: HistoryLesson[];
  poetrySpokenWord: HistoryLesson[];
}

export type EnglishTopicCategory = keyof EnglishTopics;

// Financial Literacy Module Topics
export interface FinancialLiteracyTopics {
  moneyBasics: HistoryLesson[];
  budgetingAndSaving: HistoryLesson[];
  earningAndWork: HistoryLesson[];
  planningForFuture: HistoryLesson[];
}

export type FinancialLiteracyTopicCategory = keyof FinancialLiteracyTopics;

// Etymology Module Types
export interface EtymologyLanguageNode {
  id: string;
  name: string;
  type: 'root' | 'family' | 'subfamily' | 'language';
  parent?: string;
  era: string;
  region: string;
  status: 'living' | 'extinct' | 'revived';
  speakers?: string;
  examples: Array<{
    modernWord: string;
    chain: string[];
    meaning: string;
  }>;
  didYouKnow: string;
  caribbeanConnection?: string;
}

export interface EtymologyTimelineEvent {
  year: string;
  event: string;
  detail: string;
  narrative: string;
  etymologicalExample: string;
  caribbeanConnection?: string;
}

export interface WordDetectiveRound {
  word: string;
  steps: Array<{
    prompt: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }>;
  finalFact: string;
  caribbeanConnection?: string;
}

export interface DeadLanguage {
  name: string;
  family: string;
  region: string;
  died: string;
  lastSpeaker: string;
  legacy: string;
  sampleWords: Array<{ word: string; meaning: string }>;
}

export interface EtymologyQuizQuestion {
  id: number;
  type: 'multiple-choice' | 'true-false';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

// Chemistry Module Types
export interface ChemistryQuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface ChemistryExperiment {
  name: string;
  description: string;
  steps: string[];
  safetyNote?: string;
}

export interface ChemistryLesson {
  title: string;
  category: string;
  level: 'foundation' | 'standard' | 'higher';
  objectives: string[];
  introduction: string;
  mainContent: string[];
  keyConceptsAndDefinitions: { term: string; definition: string }[];
  experiments: ChemistryExperiment[];
  practiceQuestions: { question: string; answer: string }[];
  funFacts: string[];
  realWorldConnections: string[];
  quizQuestions: ChemistryQuizQuestion[];
  furtherReading: string;
}

export interface ChemistryTopics {
  atomsAndElements: ChemistryLesson[];
  periodicTable: ChemistryLesson[];
  chemicalBonding: ChemistryLesson[];
  chemicalReactions: ChemistryLesson[];
  acidsAndBases: ChemistryLesson[];
  materialsAndStates: ChemistryLesson[];
}

export type ChemistryTopicCategory = keyof ChemistryTopics;

// Quiz Types
export interface QuizQuestion {
  id: string;
  type: 'vocabulary' | 'date' | 'figure';
  question: string;
  options: string[];
  correctIndex: number;
}

export interface QuizResult {
  lessonTitle: string;
  module: string;
  score: number;
  totalQuestions: number;
  completedAt: string;
}

// Progress Dashboard Types
export interface ModuleProgress {
  moduleId: string;
  moduleName: string;
  icon: string;
  completedLessons: number;
  totalLessons: number;
  quizResults: QuizResult[];
  storageKey: string;
}
