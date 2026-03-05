/**
 * prisma/seed.ts
 *
 * Idempotent seed script — safe to re-run at any time.
 * Upserts all modules and lessons from the static TypeScript data files.
 *
 * Run via:  npx prisma db seed
 * Or:       npx tsx prisma/seed.ts
 *
 * Requires DATABASE_URL in .env.local or the environment.
 */

import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../lib/generated/prisma/client';
import { LessonType, ModuleStatus } from '../lib/generated/prisma/enums';

// ---- Lesson data imports (relative paths, tsx resolves @/types via tsconfig) ----
import { mathTopics } from '../lib/data/mathLessons';
import { ww2Topics } from '../lib/data/ww2Lessons';
import { tudorTopics } from '../lib/data/tudorLessons';
import { piratesTopics } from '../lib/data/piratesLessons';
import { revolutionTopics } from '../lib/data/revolutionLessons';
import { spiritualityTopics } from '../lib/data/spiritualityLessons';
import { nubianTopics } from '../lib/data/nubianLessons';
import { englishTopics } from '../lib/data/englishLessons';
import { financialLiteracyTopics } from '../lib/data/financialLiteracyLessons';
import { chemistryTopics } from '../lib/data/chemistryLessons';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error('DATABASE_URL is not set');

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

// ---------------------------------------------------------------------------
// Module metadata
// ---------------------------------------------------------------------------

interface ModuleSeed {
  slug: string;
  title: string;
  icon: string;
  description: string;
  colorClass: string;
  href: string;
  status: ModuleStatus;
  sortOrder: number;
}

const MODULE_SEEDS: ModuleSeed[] = [
  // ---- Lesson-backed history sub-modules ----
  {
    slug: 'ww2',
    title: 'World War II',
    icon: '🪖',
    description:
      '14 comprehensive lessons covering causes, major events, the home front, key figures, the Holocaust, and legacy.',
    colorClass: 'history',
    href: '/modules/history',
    status: ModuleStatus.READY,
    sortOrder: 10,
  },
  {
    slug: 'tudor',
    title: 'Tudor England & Caribbean Colonization',
    icon: '👑',
    description:
      'Tudor England and the early colonization of the Caribbean — trade, exploration, and empire.',
    colorClass: 'history',
    href: '/modules/history',
    status: ModuleStatus.READY,
    sortOrder: 11,
  },
  {
    slug: 'pirates',
    title: 'Pirates of the Caribbean',
    icon: '🏴‍☠️',
    description: 'Famous pirates, life at sea, trade routes, and naval battles in the Caribbean.',
    colorClass: 'history',
    href: '/modules/history',
    status: ModuleStatus.READY,
    sortOrder: 12,
  },
  {
    slug: 'nubian',
    title: 'Nubian Warrior Queens',
    icon: '⚔️',
    description:
      'The Kingdom of Kush, its warrior queens, culture, innovation, and lasting legacy.',
    colorClass: 'history',
    href: '/modules/history',
    status: ModuleStatus.READY,
    sortOrder: 13,
  },
  {
    slug: 'spirituality',
    title: 'African & Caribbean Spirituality',
    icon: '🌀',
    description: 'African roots, Caribbean traditions, syncretism, and modern practice.',
    colorClass: 'history',
    href: '/modules/history',
    status: ModuleStatus.READY,
    sortOrder: 14,
  },
  {
    slug: 'revolution',
    title: 'American Revolution',
    icon: '🗽',
    description:
      'Causes, major battles, key figures, and the legacy and impact of the American Revolution.',
    colorClass: 'history',
    href: '/modules/history',
    status: ModuleStatus.READY,
    sortOrder: 15,
  },
  // ---- Other lesson-backed modules ----
  {
    slug: 'maths',
    title: 'Maths Interactive',
    icon: '🔢',
    description:
      'Daily maths lessons covering algebra, geometry, number work, and statistics.',
    colorClass: 'maths',
    href: '/modules/maths',
    status: ModuleStatus.READY,
    sortOrder: 30,
  },
  {
    slug: 'english',
    title: 'English & Literature',
    icon: '📖',
    description:
      'Caribbean authors, literary analysis, creative writing, and poetry & spoken word.',
    colorClass: 'english',
    href: '/modules/english',
    status: ModuleStatus.READY,
    sortOrder: 40,
  },
  {
    slug: 'financial-literacy',
    title: 'Financial Literacy',
    icon: '💷',
    description:
      'Essential money skills: banking, budgeting, earning, tax, and planning for the future.',
    colorClass: 'financial',
    href: '/modules/financial-literacy',
    status: ModuleStatus.READY,
    sortOrder: 50,
  },
  {
    slug: 'chemistry',
    title: 'Chemistry Interactive',
    icon: '⚗️',
    description: 'Atoms, periodic table, bonding, reactions, acids & bases, and materials.',
    colorClass: 'chemistry',
    href: '/modules/chemistry',
    status: ModuleStatus.READY,
    sortOrder: 60,
  },
  // ---- UI-only modules (no lesson data yet) ----
  {
    slug: 'etymology',
    title: 'Language Etymology',
    icon: '🌍',
    description:
      'Origins, migrations, and deaths of European languages — from Proto-Indo-European to the Caribbean.',
    colorClass: 'english',
    href: '/modules/etymology',
    status: ModuleStatus.READY,
    sortOrder: 70,
  },
  {
    slug: 'orishas',
    title: 'Understanding the Orishas',
    icon: '✨',
    description:
      'Deep dive into African and Caribbean spiritual traditions and the powerful Orishas.',
    colorClass: 'history',
    href: '/modules/orishas',
    status: ModuleStatus.READY,
    sortOrder: 20,
  },
  {
    slug: 'wellbeing',
    title: 'Whisper Garden',
    icon: '🌈',
    description: 'Gentle voice therapy for children with selective mutism.',
    colorClass: 'wellbeing',
    href: '/modules/wellbeing',
    status: ModuleStatus.READY,
    sortOrder: 80,
  },
  {
    slug: 'physics',
    title: 'Physics Explorer',
    icon: '⚡',
    description: 'Forces, energy, electricity, waves, and space.',
    colorClass: 'physics',
    href: '/modules/physics',
    status: ModuleStatus.COMING_SOON,
    sortOrder: 90,
  },
  {
    slug: 'biology',
    title: 'Living World Biology',
    icon: '🌿',
    description: 'Cells, body systems, ecosystems, genetics, and health.',
    colorClass: 'biology',
    href: '/modules/biology',
    status: ModuleStatus.COMING_SOON,
    sortOrder: 91,
  },
  {
    slug: 'food-nutrition',
    title: 'Food & Fuel',
    icon: '🍽️',
    description: 'Nutrition, cooking science, and how food powers the body.',
    colorClass: 'food',
    href: '/modules/food-nutrition',
    status: ModuleStatus.COMING_SOON,
    sortOrder: 92,
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function upsertModule(data: ModuleSeed) {
  return prisma.module.upsert({
    where: { slug: data.slug },
    update: {
      title: data.title,
      icon: data.icon,
      description: data.description,
      colorClass: data.colorClass,
      href: data.href,
      status: data.status,
      sortOrder: data.sortOrder,
    },
    create: data,
  });
}

async function upsertLesson(
  moduleId: string,
  topic: string,
  title: string,
  lessonType: LessonType,
  // Lesson data is arbitrary JSON derived from typed TS objects — safe to cast
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  sortOrder: number,
) {
  return prisma.lesson.upsert({
    where: { moduleId_title: { moduleId, title } },
    update: { topic, lessonType, data, sortOrder },
    create: { moduleId, topic, title, lessonType, data, sortOrder },
  });
}

// ---------------------------------------------------------------------------
// Per-module seeders
// ---------------------------------------------------------------------------

async function seedTopics(
  moduleId: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  topics: Record<string, any[]>,
  lessonType: LessonType,
  label: string,
) {
  let order = 0;
  for (const [topic, lessons] of Object.entries(topics)) {
    for (const lesson of lessons) {
      await upsertLesson(moduleId, topic, lesson.title as string, lessonType, lesson, order++);
    }
  }
  console.log(`  ✓ ${label}: ${order} lessons`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const LESSON_SEEDERS: Record<
  string,
  { topics: Record<string, unknown[]>; lessonType: LessonType; label: string }
> = {
  ww2: { topics: ww2Topics, lessonType: LessonType.HISTORY, label: 'WW2' },
  tudor: { topics: tudorTopics, lessonType: LessonType.HISTORY, label: 'Tudor' },
  pirates: { topics: piratesTopics, lessonType: LessonType.HISTORY, label: 'Pirates' },
  nubian: { topics: nubianTopics, lessonType: LessonType.HISTORY, label: 'Nubian' },
  spirituality: {
    topics: spiritualityTopics,
    lessonType: LessonType.HISTORY,
    label: 'Spirituality',
  },
  revolution: { topics: revolutionTopics, lessonType: LessonType.HISTORY, label: 'Revolution' },
  maths: { topics: mathTopics, lessonType: LessonType.MATH, label: 'Maths' },
  english: { topics: englishTopics, lessonType: LessonType.HISTORY, label: 'English' },
  'financial-literacy': {
    topics: financialLiteracyTopics,
    lessonType: LessonType.HISTORY,
    label: 'Financial Literacy',
  },
  chemistry: { topics: chemistryTopics, lessonType: LessonType.CHEMISTRY, label: 'Chemistry' },
};

async function main() {
  console.log('🌱 Seeding Cronx Academy database…\n');

  // 1. Upsert all modules
  console.log('📦 Modules:');
  const moduleMap: Record<string, string> = {};
  for (const moduleSeed of MODULE_SEEDS) {
    const mod = await upsertModule(moduleSeed);
    moduleMap[moduleSeed.slug] = mod.id;
    console.log(`  ✓ ${moduleSeed.slug}`);
  }

  // 2. Seed lessons for modules that have data
  console.log('\n📚 Lessons:');
  for (const [slug, { topics, lessonType, label }] of Object.entries(LESSON_SEEDERS)) {
    const moduleId = moduleMap[slug];
    if (!moduleId) {
      console.warn(`  ⚠ No module found for slug "${slug}" — skipping`);
      continue;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await seedTopics(moduleId, topics as Record<string, any[]>, lessonType, label);
  }

  console.log('\n✅ Seed complete.');
}

main()
  .catch((e) => {
    console.error('Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
