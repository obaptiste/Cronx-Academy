'use client';

import type { HistoryLesson } from '@/types';
import HistoryModuleInteractive from '@/components/modules/shared/HistoryModuleInteractive';
import {
  financialLiteracyTopics,
  getAllFinancialLiteracyLessons,
  financialLiteracyCategoryNames,
  financialLiteracyCategoryIcons,
} from '@/lib/data/financialLiteracyLessons';

const teachingTips = [
  "Relate lessons to Thalia's own money experience – pocket money, saving goals, online purchases",
  'Use real UK examples: compare savings accounts, look at actual payslips, check live interest rates',
  "Encourage critical thinking about advertising and social media's influence on spending",
  'Connect financial literacy to wider social justice – why some communities face systemic barriers',
  'Make it practical: set a small saving challenge or track spending for one week together',
  'Discuss the Caribbean diaspora experience of financial resilience and community saving traditions (e.g. "partner" systems)',
];

export default function FinancialLiteracyInteractive() {
  return (
    <HistoryModuleInteractive
      title="Financial Literacy"
      subtitle="Understanding money, making informed choices, and building your financial future"
      icon="💷"
      backHref="/"
      backLabel="Back to Cronx Academy"
      moduleId="financial-literacy"
      storageKey="completedFinancialLiteracyLessons"
      variant="green"
      headerGradient="from-emerald-600 to-teal-700"
      topics={financialLiteracyTopics as unknown as Record<string, HistoryLesson[]>}
      categoryNames={financialLiteracyCategoryNames}
      categoryIcons={financialLiteracyCategoryIcons}
      defaultCategory="moneyBasics"
      getAllLessons={getAllFinancialLiteracyLessons}
      teachingTips={teachingTips}
    />
  );
}
