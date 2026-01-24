import { ModuleCard } from '@/types';

export const modules: ModuleCard[] = [
  {
    id: 'history',
    title: 'History Quest',
    icon: '📚',
    description: 'Interactive journey through Caribbean and world history with timelines, quizzes, and engaging stories.',
    features: [
      'World War II (NEW!) - 14 comprehensive lessons',
      'Tudor England & Caribbean Colonization',
      'Pirates of the Caribbean',
      'Nubian Warrior Queens',
      'African & Caribbean Spirituality',
      'American Revolution'
    ],
    status: 'ready',
    href: '/modules/history',
    colorClass: 'history'
  },
  {
    id: 'orishas',
    title: 'Understanding the Orishas',
    icon: '✨',
    description: 'Deep dive into African and Caribbean spiritual traditions, meeting the powerful spirits of nature and life.',
    features: [
      'Meet 6 major Orishas in detail',
      'Learn about sacred practices',
      'Compare global spiritual systems',
      'Beautiful interactive profiles',
      'Cultural understanding & respect'
    ],
    status: 'ready',
    href: '/modules/orishas',
    colorClass: 'history'
  },
  {
    id: 'maths',
    title: 'Maths Interactive',
    icon: '🔢',
    description: 'Daily maths lessons covering algebra, geometry, number work, and statistics. Each lesson includes warm-up, activities, practice, and homework.',
    features: [
      '15 complete lesson plans',
      'Algebra, geometry, number & statistics',
      'Practice questions with checkboxes',
      'Progress tracking',
      'Extension challenges',
      'Teaching tips for Sheena'
    ],
    status: 'ready',
    href: '/modules/maths',
    colorClass: 'maths'
  },
  {
    id: 'english',
    title: 'English & Literature',
    icon: '📖',
    description: 'Coming soon! Reading comprehension, creative writing, and analysis with Caribbean authors.',
    features: [
      'Reading journal & reviews',
      'Creative writing prompts',
      'Caribbean literature focus',
      'Grammar practice games',
      'Public speaking skills'
    ],
    status: 'coming-soon',
    href: '#',
    colorClass: 'english'
  },
  {
    id: 'wellbeing',
    title: 'Whisper Garden',
    icon: '🌈',
    description: 'Gentle voice therapy for children with selective mutism. A safe space to practice vocalization and build confidence.',
    features: [
      'Breathing exercises',
      'Animal sound practice',
      'Whisper activities',
      'Progress garden & celebrations',
      'No pressure, always optional'
    ],
    status: 'ready',
    href: '/modules/wellbeing',
    colorClass: 'wellbeing'
  }
];
