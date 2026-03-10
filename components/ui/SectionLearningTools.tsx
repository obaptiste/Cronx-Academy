'use client';

/**
 * SectionLearningTools
 * ─────────────────────
 * Composes three capabilities into a single, reusable content-section component:
 *
 *   1. Read Aloud   – Web Speech API with GB English voice, rate 0.9
 *   2. Simplify     – Calls /api/simplify; caches result per section; toggle original ↔ simplified
 *   3. Tracking     – Marks a section "listened" when TTS finishes; persists to localStorage
 *
 * Architecture
 * ────────────
 * All logic lives in three dedicated hooks (useSpeechPlayback, useSectionTracking,
 * useSimplify). This component is intentionally thin — it only handles rendering
 * and event wiring so tests and future changes are isolated to single files.
 *
 * Analytics extension
 * ───────────────────
 * Pass `onSectionListened` to receive a callback whenever a section is marked
 * complete. Wire it to your analytics/backend call without changing this file.
 *
 * Accessibility
 * ─────────────
 * - `<article>` landmark per section for screen-reader navigation
 * - `aria-label` on every button describes the action and target section
 * - Progress bar uses `role="progressbar"` with aria-valuenow/min/max
 * - `aria-live="polite"` on the simplified text panel so screen readers
 *   announce it without interrupting ongoing speech
 * - Visual checkmark carries an `aria-label` rather than being purely decorative
 */

import { useCallback } from 'react';
import { useSpeechPlayback } from '@/hooks/useSpeechPlayback';
import { useSectionTracking } from '@/hooks/useSectionTracking';
import { useSimplify } from '@/hooks/useSimplify';
import type { Section } from '@/types';

export interface SectionLearningToolsProps {
  /**
   * Unique localStorage key for this lesson/page so different lessons never
   * share the same listened-sections list.
   * Example: "ww2-causes-listened"
   */
  storageKey: string;
  /** Ordered list of content sections to render */
  sections: Section[];
  /**
   * Optional callback fired when a section is marked as listened.
   * Backend-ready extension point: send an analytics event here.
   */
  onSectionListened?: (sectionId: string) => void;
}

export function SectionLearningTools({
  storageKey,
  sections,
  onSectionListened,
}: SectionLearningToolsProps) {
  const { listenedSections, markAsListened, isListened, percentageComplete } =
    useSectionTracking(storageKey);

  const { isPlaying, activeSectionId, speak, stop, isSupported } = useSpeechPlayback();

  const { getState, simplify, toggle } = useSimplify();

  // ── Read-aloud handler ────────────────────────────────────────────────────
  const handleReadAloud = useCallback(
    (section: Section) => {
      // Pressing the button while this section is playing → stop it.
      if (activeSectionId === section.id && isPlaying) {
        stop();
        return;
      }

      speak(section.id, section.text, () => {
        markAsListened(section.id);
        onSectionListened?.(section.id);
      });
    },
    [activeSectionId, isPlaying, speak, stop, markAsListened, onSectionListened],
  );

  // ── Simplify handler ──────────────────────────────────────────────────────
  const handleSimplify = useCallback(
    (section: Section) => {
      const state = getState(section.id);
      // If we already have a result, just toggle the panel.
      if (state.simplified) {
        toggle(section.id);
      } else {
        void simplify(section.id, section.text);
      }
    },
    [getState, simplify, toggle],
  );

  const pct = percentageComplete(sections.length);

  return (
    <div className="space-y-6">
      {/* ── Listening progress bar ─────────────────────────────────────── */}
      {sections.length > 0 && (
        <div className="flex items-center gap-3 text-sm">
          <span className="font-medium text-gray-600 whitespace-nowrap">Listening progress</span>
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-500 ease-out"
              style={{ width: `${pct}%` }}
              role="progressbar"
              aria-valuenow={pct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Listening progress: ${pct}%`}
            />
          </div>
          <span
            className="tabular-nums font-semibold text-emerald-700 min-w-[3rem] text-right"
            aria-hidden="true"
          >
            {pct}%
          </span>
          <span className="sr-only">
            {listenedSections.length} of {sections.length} sections listened
          </span>
        </div>
      )}

      {/* ── Section cards ─────────────────────────────────────────────────── */}
      {sections.map((section) => {
        const listened = isListened(section.id);
        const isActive = activeSectionId === section.id;
        const simplifyState = getState(section.id);
        const isReadAloudPressed = Boolean(isActive && isPlaying);

        return (
          <article
            key={section.id}
            className={`rounded-xl border p-5 transition-colors duration-300 ${
              listened ? 'border-emerald-300 bg-emerald-50' : 'border-gray-200 bg-white'
            }`}
            aria-label={section.title}
          >
            {/* ── Section header ──────────────────────────────────────── */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <h3 className="font-semibold text-gray-800 text-base flex items-center gap-2">
                {listened && (
                  <span
                    className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-white text-xs shrink-0"
                    aria-label="Section listened"
                    title="You have listened to this section"
                  >
                    ✓
                  </span>
                )}
                {section.title}
              </h3>

              {/* ── Toolbar ─────────────────────────────────────────── */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Read Aloud */}
                {isSupported && (
                  <button
                    type="button"
                    onClick={() => handleReadAloud(section)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      isReadAloudPressed
                        ? 'bg-red-100 text-red-700 hover:bg-red-200 focus-visible:ring-red-400'
                        : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 focus-visible:ring-indigo-400'
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1`}
                    aria-label={
                      isReadAloudPressed
                        ? `Stop reading "${section.title}"`
                        : `Read "${section.title}" aloud`
                    }
                    aria-pressed={isReadAloudPressed}
                  >
                    <span aria-hidden="true">{isReadAloudPressed ? '⏹' : '🔊'}</span>
                    {isReadAloudPressed ? 'Stop' : 'Read Aloud'}
                  </button>
                )}

                {/* Simplify */}
                <button
                  type="button"
                  onClick={() => handleSimplify(section)}
                  disabled={simplifyState.isLoading}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                    simplifyState.showSimplified
                      ? 'bg-amber-100 text-amber-700 hover:bg-amber-200 focus-visible:ring-amber-400'
                      : 'bg-violet-100 text-violet-700 hover:bg-violet-200 focus-visible:ring-violet-400'
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1`}
                  aria-label={
                    simplifyState.showSimplified
                      ? `Show original text for "${section.title}"`
                      : `Simplify "${section.title}" for easier reading`
                  }
                  aria-pressed={simplifyState.showSimplified.toString()}
                >
                  <span aria-hidden="true">{simplifyState.isLoading ? '⏳' : '✨'}</span>
                  {simplifyState.isLoading
                    ? 'Simplifying…'
                    : simplifyState.showSimplified
                      ? 'Original'
                      : 'Simplify'}
                </button>
              </div>
            </div>

            {/* ── Original text ────────────────────────────────────────── */}
            <p className="text-gray-700 leading-relaxed text-sm">{section.text}</p>

            {/* ── Error state ──────────────────────────────────────────── */}
            {simplifyState.error && (
              <p
                role="alert"
                className="mt-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3"
              >
                {simplifyState.error}
              </p>
            )}

            {/* ── Simplified text panel ────────────────────────────────── */}
            {simplifyState.showSimplified && simplifyState.simplified && (
              <div
                aria-live="polite"
                aria-label="Simplified version"
                className="mt-4 rounded-lg bg-amber-50 border border-amber-200 p-4"
              >
                <p className="text-xs font-semibold text-amber-700 mb-2 uppercase tracking-wide">
                  ✨ Simplified version
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">{simplifyState.simplified}</p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
