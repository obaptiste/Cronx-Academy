'use client';

import type { HistoryLesson } from '@/types';
import HistoryModuleInteractive from '@/components/modules/shared/HistoryModuleInteractive';
import {
  spiritualityTopics,
  getAllSpiritualityLessons,
  spiritualityCategoryNames,
  spiritualityCategoryIcons,
} from '@/lib/data/spiritualityLessons';

const teachingTips = [
  'Approach all religions with respect - these are living traditions with millions of practitioners',
  'Challenge misconceptions from popular media, especially about Vodou',
  'Emphasize connections between African roots and Caribbean traditions',
  'Allow time for questions - students may have family connections to these traditions',
  'Use this as an opportunity to discuss cultural resilience and adaptation',
  'Connect to broader themes of colonialism, slavery, and resistance',
];

export default function SpiritualityInteractive() {
  return (
    <HistoryModuleInteractive
      title="African & Caribbean Spirituality"
      subtitle="Exploring the rich spiritual traditions of Africa and the Caribbean"
      icon="✨"
      backHref="/modules/history"
      backLabel="Back to History Quest"
      moduleId="spirituality"
      storageKey="completedSpiritualityLessons"
      variant="amber"
      headerGradient="from-amber-600 to-yellow-600"
      topics={spiritualityTopics as unknown as Record<string, HistoryLesson[]>}
      categoryNames={spiritualityCategoryNames}
      categoryIcons={spiritualityCategoryIcons}
      defaultCategory="africanRoots"
      getAllLessons={getAllSpiritualityLessons}
      teachingTips={teachingTips}
    />
  );
}
