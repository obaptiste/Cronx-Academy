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
