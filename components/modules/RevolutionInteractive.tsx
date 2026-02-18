'use client';

import type { HistoryLesson } from '@/types';
import HistoryModuleInteractive from '@/components/modules/shared/HistoryModuleInteractive';
import {
  revolutionTopics,
  getAllRevolutionLessons,
  revolutionCategoryNames,
  revolutionCategoryIcons,
} from '@/lib/data/revolutionLessons';

const teachingTips = [
  'Connect American Revolution themes to British history and Caribbean perspectives',
  'Discuss the contradictions between revolutionary ideals and slavery',
  'Use primary sources to show multiple perspectives on events',
  'Encourage critical thinking: Were the colonists justified in their rebellion?',
  'Compare the American Revolution to other revolutions (French, Haitian)',
  'Discuss the ongoing relevance of revolutionary ideas today',
];

export default function RevolutionInteractive() {
  return (
    <HistoryModuleInteractive
      title="American Revolution"
      subtitle="The birth of a nation and the ideas that changed the world"
      icon="🗽"
      backHref="/modules/history"
      backLabel="Back to History Quest"
      moduleId="revolution"
      storageKey="completedRevolutionLessons"
      variant="blue"
      headerGradient="from-blue-600 to-indigo-700"
      topics={revolutionTopics as unknown as Record<string, HistoryLesson[]>}
      categoryNames={revolutionCategoryNames}
      categoryIcons={revolutionCategoryIcons}
      defaultCategory="causesAndOrigins"
      getAllLessons={getAllRevolutionLessons}
      teachingTips={teachingTips}
    />
  );
}
