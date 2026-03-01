'use client';

/**
 * ExampleModuleInteractive
 * ─────────────────────────
 * Demonstrates SectionLearningTools with three content sections from a
 * hypothetical WW2 lesson. Intended as a working reference for integrating
 * the component into any existing module.
 *
 * Integration pattern for an existing history module
 * ──────────────────────────────────────────────────
 * 1. Extract the text content you want to make "tooled" into `Section[]`
 *    (each section needs a stable `id`, a `title`, and the body `text`).
 * 2. Choose a unique `storageKey` that won't clash with the module's existing
 *    progress keys (e.g. "ww2-causes-listened").
 * 3. Drop `<SectionLearningTools>` wherever you want it to appear inside
 *    the lesson view — below the introduction paragraph, for example.
 */

import Link from 'next/link';
import { SectionLearningTools } from '@/components/ui/SectionLearningTools';
import type { Section } from '@/types';

// ── Static lesson sections ─────────────────────────────────────────────────
// In a real module these would come from `lib/data/ww2Lessons.ts` and be
// mapped from a `HistoryLesson` to `Section[]` before being passed in.
const SECTIONS: Section[] = [
  {
    id: 'ww2-causes-origins',
    title: 'The Origins of World War II',
    text: 'World War II began on 1 September 1939 when Nazi Germany, under Adolf Hitler, invaded Poland. Britain and France, who had pledged to defend Poland, declared war on Germany two days later. The roots of the conflict stretched back to the deeply humiliating terms imposed on Germany by the Treaty of Versailles in 1919, which stripped the nation of territory, imposed crippling reparations, and blamed Germany entirely for World War I. Economic depression and political instability created fertile ground for extremist ideologies across Europe throughout the 1920s and 1930s.',
  },
  {
    id: 'ww2-causes-rise-of-hitler',
    title: 'The Rise of Adolf Hitler',
    text: "Adolf Hitler rose to power during a period of severe economic hardship in Germany. Unemployment was catastrophic, and the German people were desperate for change. Hitler promised to restore German greatness, blaming Jewish people, communists, and foreign powers for Germany's suffering. By 1933, he had become Chancellor and quickly dismantled democratic institutions, establishing a totalitarian dictatorship known as the Third Reich. The Nazi Party used propaganda, fear, and brutal repression to consolidate control over every aspect of German society.",
  },
  {
    id: 'ww2-causes-appeasement',
    title: 'Appeasement and its Failure',
    text: 'In the years before war broke out, British Prime Minister Neville Chamberlain pursued a policy of appeasement — making concessions to Hitler in the hope of avoiding another catastrophic war. The most infamous example was the Munich Agreement of September 1938, which allowed Germany to annex the Sudetenland region of Czechoslovakia without resistance. Chamberlain returned to Britain holding a piece of paper and declaring "peace for our time". Within a year, Hitler had seized the rest of Czechoslovakia and invaded Poland, exposing appeasement as a catastrophic miscalculation.',
  },
];

export default function ExampleModuleInteractive() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-600 via-rose-600 to-red-700 p-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="text-white mb-8 pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-pink-200 hover:text-white text-sm mb-4 transition-colors"
          >
            ← Back to Cronx Academy
          </Link>
          <h1 className="text-3xl font-bold">World War II — Causes</h1>
          <p className="mt-2 text-pink-100 text-sm">
            Read each section, press <strong>Read Aloud</strong> to hear it spoken in English, or
            press <strong>Simplify</strong> for an easier version. Your listening progress is saved
            automatically.
          </p>
        </header>

        {/* Learning tools */}
        <SectionLearningTools
          storageKey="example-ww2-causes-listened"
          sections={SECTIONS}
          onSectionListened={(id) => {
            // Backend-ready extension point.
            // Replace this console.info with an API call or analytics event:
            //   fetch('/api/analytics/listened', { method: 'POST', body: JSON.stringify({ sectionId: id }) })
            console.info('[analytics] Section listened:', id);
          }}
        />
      </div>
    </div>
  );
}
