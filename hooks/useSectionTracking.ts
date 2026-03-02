'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Tracks which sections have been listened to, persisting state in localStorage.
 *
 * Design notes:
 * - Uses lazy state initializer so localStorage is only read once on mount.
 * - Deduplicates section IDs: marking an already-listened section is a no-op.
 * - The effect that persists to localStorage is keyed on `storageKey` so it
 *   won't fire unnecessarily when unrelated state changes.
 * - No cleanup needed: the effect only writes, never subscribes.
 *
 * Analytics extension point: swap the localStorage calls for an API write to
 * make this backend-ready without changing the hook's public API.
 */
export interface UseSectionTrackingReturn {
  /** IDs of all sections that have been fully listened to */
  listenedSections: string[];
  /** Mark a section as listened (idempotent) */
  markAsListened: (sectionId: string) => void;
  /** Returns true if the given section has been listened to */
  isListened: (sectionId: string) => boolean;
  /**
   * Listening completion as a percentage (0–100).
   * @param totalSections - Total number of sections in the current view.
   */
  percentageComplete: (totalSections: number) => number;
}

export function useSectionTracking(storageKey: string): UseSectionTrackingReturn {
  const [listenedSections, setListenedSections] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? (JSON.parse(saved) as string[]) : [];
    } catch {
      return [];
    }
  });

  // Persist to localStorage whenever the list changes.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(listenedSections));
    } catch {
      // Quota exceeded or private browsing — fail silently.
    }
  }, [listenedSections, storageKey]);

  const markAsListened = useCallback((sectionId: string) => {
    setListenedSections((prev) => {
      // Guard against duplicates without a Set so we keep plain-array semantics.
      if (prev.includes(sectionId)) return prev;
      return [...prev, sectionId];
    });
  }, []);

  const isListened = useCallback(
    (sectionId: string) => listenedSections.includes(sectionId),
    [listenedSections],
  );

  const percentageComplete = useCallback(
    (totalSections: number) => {
      if (totalSections === 0) return 0;
      return Math.round((listenedSections.length / totalSections) * 100);
    },
    [listenedSections],
  );

  return { listenedSections, markAsListened, isListened, percentageComplete };
}
