'use client';

import type { HistoryLesson } from '@/types';
import HistoryModuleInteractive from '@/components/modules/shared/HistoryModuleInteractive';
import {
  nubianTopics,
  getAllNubianLessons,
  nubianCategoryNames,
  nubianCategoryIcons,
} from '@/lib/data/nubianLessons';

const teachingTips = [
  'Center Nubian voices and avoid framing Kush only as an extension of Egypt or Rome',
  'Use map work to link geography, trade routes, and military strategy',
  'Ask students to distinguish proven evidence from popular social-media claims',
  'Highlight women in power as political and military leaders, not side characters',
  'Connect Kush content to wider African and diaspora historical identity',
  'Encourage comparative thinking with other ancient states without hierarchy language',
];

export default function NubianInteractive() {
  return (
    <HistoryModuleInteractive
      title="Nubian Warrior Queens"
      subtitle="Power, strategy, and legacy in the Kingdom of Kush"
      icon="⚔️"
      backHref="/modules/history"
      backLabel="Back to History Quest"
      moduleId="nubian"
      storageKey="completedNubianLessons"
      variant="amber"
      headerGradient="from-amber-600 to-orange-700"
      topics={nubianTopics as unknown as Record<string, HistoryLesson[]>}
      categoryNames={nubianCategoryNames}
      categoryIcons={nubianCategoryIcons}
      defaultCategory="kingdomOfKush"
      getAllLessons={getAllNubianLessons}
      teachingTips={teachingTips}
    />
  );
}
