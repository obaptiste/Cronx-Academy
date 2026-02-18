'use client';

import type { HistoryLesson } from '@/types';
import HistoryModuleInteractive from '@/components/modules/shared/HistoryModuleInteractive';
import {
  englishTopics,
  getAllEnglishLessons,
  englishCategoryNames,
  englishCategoryIcons,
} from '@/lib/data/englishLessons';

const teachingTips = [
  'Read texts together and discuss them — conversation is the best way to develop analytical skills',
  'Encourage Thalia to keep a reading journal where she notes favourite quotations and her responses',
  'Creative writing should be enjoyable — focus on expression and experimentation, not perfection',
  'Caribbean authors connect literature to cultural heritage — discuss family stories and experiences',
  'Poetry is meant to be read aloud — take turns performing poems and discuss how they sound',
  'For essay writing, practise PEE paragraphs regularly — they build confidence for GCSE preparation',
];

export default function EnglishInteractive() {
  return (
    <HistoryModuleInteractive
      title="English & Literature"
      subtitle="Caribbean authors, literary analysis, creative writing, and poetry"
      icon="📖"
      backHref="/"
      backLabel="Back to Cronx Academy"
      moduleId="english"
      storageKey="completedEnglishLessons"
      variant="green"
      headerGradient="from-green-600 to-emerald-700"
      topics={englishTopics as unknown as Record<string, HistoryLesson[]>}
      categoryNames={englishCategoryNames}
      categoryIcons={englishCategoryIcons}
      defaultCategory="caribbeanAuthors"
      getAllLessons={getAllEnglishLessons}
      teachingTips={teachingTips}
    />
  );
}
