'use client';

import type { HistoryLesson } from '@/types';
import HistoryModuleInteractive from '@/components/modules/shared/HistoryModuleInteractive';
import {
  foodNutritionTopics,
  getAllFoodNutritionLessons,
  foodNutritionCategoryNames,
  foodNutritionCategoryIcons,
} from '@/lib/data/foodNutritionLessons';

const teachingTips = [
  'Keep the focus on health, energy, and confidence rather than body size or dieting.',
  'Use foods already familiar at home, then add one small nutrition upgrade at a time.',
  'Teach label-reading as a life skill: compare products together in under one minute.',
  'Connect food choices to school concentration, sport recovery, sleep, and mood.',
  'Normalise flexibility: one meal does not define health, patterns across the week do.',
  'Involve Thalia in planning and cooking so nutrition becomes practical, not abstract.',
];

export default function FoodNutritionInteractive() {
  return (
    <HistoryModuleInteractive
      title="Food and Nutrition"
      subtitle="Practical nutrition skills for health, energy, and everyday life"
      icon="🥗"
      backHref="/"
      backLabel="Back to Cronx Academy"
      moduleId="food-nutrition"
      storageKey="completedFoodNutritionLessons"
      variant="amber"
      headerGradient="from-amber-600 to-orange-700"
      topics={foodNutritionTopics as unknown as Record<string, HistoryLesson[]>}
      categoryNames={foodNutritionCategoryNames}
      categoryIcons={foodNutritionCategoryIcons}
      defaultCategory="nutritionBasics"
      getAllLessons={getAllFoodNutritionLessons}
      teachingTips={teachingTips}
    />
  );
}
