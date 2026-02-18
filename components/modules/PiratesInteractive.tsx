'use client';

import type { HistoryLesson } from '@/types';
import HistoryModuleInteractive from '@/components/modules/shared/HistoryModuleInteractive';
import {
  piratesTopics,
  getAllPiratesLessons,
  piratesCategoryNames,
  piratesCategoryIcons,
} from '@/lib/data/piratesLessons';

const topics = piratesTopics as unknown as Record<string, HistoryLesson[]>;

const teachingTips = [
  'Distinguish between historical reality and popular myths about pirates',
  'Discuss the diverse backgrounds of pirates, including women and people of colour',
  'Use maps to show trade routes and pirate hunting grounds',
  'Connect piracy to broader themes: economics, politics, and social conditions',
  'Sensitive topics (slavery, violence) require careful handling and context',
  'Compare primary sources critically - many were written by enemies of pirates',
];

export default function PiratesInteractive() {
  return (
    <HistoryModuleInteractive
      title="Pirates of the Caribbean"
      subtitle="The golden age of piracy in Caribbean waters"
      icon="🏴‍☠️"
      backHref="/modules/history"
      backLabel="Back to History Quest"
      moduleId="pirates"
      storageKey="completedPiratesLessons"
      variant="orange"
      headerGradient="from-orange-600 to-red-700"
      topics={topics}
      categoryNames={piratesCategoryNames}
      categoryIcons={piratesCategoryIcons}
      defaultCategory="famousPirates"
      getAllLessons={getAllPiratesLessons}
      teachingTips={teachingTips}
    />
  );
}
