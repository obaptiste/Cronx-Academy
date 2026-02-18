'use client';

import type { HistoryLesson } from '@/types';
import HistoryModuleInteractive from '@/components/modules/shared/HistoryModuleInteractive';
import {
  tudorTopics,
  getAllTudorLessons,
  tudorCategoryNames,
  tudorCategoryIcons,
} from '@/lib/data/tudorLessons';

const topics = tudorTopics as unknown as Record<string, HistoryLesson[]>;

const teachingTips = [
  'Connect Tudor history to modern Britain - many institutions trace back to this period',
  'Use maps to help visualise exploration routes and Caribbean geography',
  'Discuss the perspectives of different groups: monarchs, explorers, indigenous peoples, enslaved people',
  'Encourage critical thinking about sources - who wrote them and why?',
  'Sensitive topics (slavery, colonisation) require careful handling - allow time for discussion',
  'Consider local connections - many British towns have links to this period',
];

export default function TudorInteractive() {
  return (
    <HistoryModuleInteractive
      title="Tudor England & Caribbean"
      subtitle="Explore the Tudor era and its connection to Caribbean colonization"
      icon="👑"
      backHref="/modules/history"
      backLabel="Back to History Quest"
      moduleId="tudor"
      storageKey="completedTudorLessons"
      variant="purple"
      headerGradient="from-purple-600 to-indigo-700"
      topics={topics}
      categoryNames={tudorCategoryNames}
      categoryIcons={tudorCategoryIcons}
      defaultCategory="tudorEngland"
      getAllLessons={getAllTudorLessons}
      teachingTips={teachingTips}
    />
  );
}
