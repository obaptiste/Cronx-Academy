'use client';

import type { HistoryLesson } from '@/types';
import HistoryModuleInteractive from '@/components/modules/shared/HistoryModuleInteractive';
import {
  ww2Topics,
  getAllWW2Lessons,
  ww2CategoryNames,
  ww2CategoryIcons,
} from '@/lib/data/ww2Lessons';

const topics = ww2Topics as unknown as Record<string, HistoryLesson[]>;

const teachingTips = [
  'Encourage Thalia to think critically about sources - who wrote them and why?',
  'Connect historical events to modern parallels when discussing causes and consequences',
  'Use maps and timelines to help visualise the geographic and temporal scope of events',
  'Sensitive topics (Holocaust) require careful handling - allow time for reflection and questions',
  'Activities can be adapted - writing tasks can become discussions if preferred',
  'Encourage research using reliable sources like BBC History, Imperial War Museum, and Holocaust Educational Trust',
];

export default function WW2Interactive() {
  return (
    <HistoryModuleInteractive
      title="World War II"
      subtitle="An interactive journey through 1939-1945"
      icon="🌍"
      backHref="/modules/history"
      backLabel="Back to History Quest"
      moduleId="ww2"
      storageKey="completedWW2Lessons"
      variant="pink"
      headerGradient="from-pink-600 to-red-700"
      topics={topics}
      categoryNames={ww2CategoryNames}
      categoryIcons={ww2CategoryIcons}
      defaultCategory="causesAndOrigins"
      getAllLessons={getAllWW2Lessons}
      teachingTips={teachingTips}
    />
  );
}
