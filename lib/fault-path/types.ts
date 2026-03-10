export type RiskLevel = 'low' | 'caution' | 'high' | 'urgent';
export type QuestionType = 'single_choice' | 'multi_choice' | 'boolean' | 'info';

export type Fault = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  severity: RiskLevel;
  dangerNotes: string;
  commonSymptoms: string[];
  likelyCauses: string[];
  safeChecks: string[];
  escalationGuidance: string;
  electricianTestsNext: string[];
  tags: string[];
  educationalExplanation: string;
};

export type Symptom = { slug: string; title: string; description: string };

export type DecisionOption = {
  label: string;
  value: string;
  nextNodeKey?: string;
  scoreAdjustments?: Record<string, number>;
  riskAdjustment?: number;
  urgentTrigger?: boolean;
};

export type DecisionNode = {
  key: string;
  question: string;
  questionType: QuestionType;
  options: DecisionOption[];
  explanation: string;
  educationalNote?: string;
  safetyGate?: boolean;
  stopReason?: string;
  recommendedAction?: string;
};

export type DecisionTree = {
  slug: string;
  title: string;
  symptomSlug: string;
  startNodeKey: string;
  nodes: Record<string, DecisionNode>;
  defaultFaults: string[];
};

export type DiagnosisResult = {
  likelyFaults: string[];
  riskLevel: RiskLevel;
  urgent: boolean;
  safeNextChecks: string[];
  reasoning: string[];
  escalation: string;
};
