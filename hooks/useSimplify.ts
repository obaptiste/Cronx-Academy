'use client';

import { useRef, useState, useCallback } from 'react';

/** Per-section UI state for the simplify feature */
export interface SimplifyState {
  simplified: string | null;
  isLoading: boolean;
  error: string | null;
  showSimplified: boolean;
}

const DEFAULT_STATE: SimplifyState = {
  simplified: null,
  isLoading: false,
  error: null,
  showSimplified: false,
};

export interface UseSimplifyReturn {
  /** Get the current state for a given section ID */
  getState: (sectionId: string) => SimplifyState;
  /**
   * Request a simplified version of the text.
   * Returns immediately if a cached result exists and shows it instead
   * of making a duplicate API call.
   */
  simplify: (sectionId: string, text: string) => Promise<void>;
  /** Toggle between simplified and original text (no-op if not yet simplified) */
  toggle: (sectionId: string) => void;
}

/**
 * Manages per-section simplify state and API calls.
 *
 * Design notes:
 * - Simplified results are cached in a `Map` stored in a ref so that repeated
 *   button presses never make a second API call. The cache lives for the
 *   component's lifetime only — we deliberately do not persist to localStorage
 *   because simplified text is derived/ephemeral, not user progress data.
 * - State that drives the UI (loading, error, showSimplified) is stored in
 *   React state so renders happen exactly when needed.
 * - A `Map` rather than a plain object is used for the cache ref because Maps
 *   guarantee insertion order and don't coerce keys to strings.
 */
export function useSimplify(): UseSimplifyReturn {
  // Cache: sectionId → simplified text. Mutated directly — no re-render.
  const cacheRef = useRef<Map<string, string>>(new Map());

  // UI state per section. Immutably updated so React can diff efficiently.
  const [stateMap, setStateMap] = useState<Map<string, SimplifyState>>(() => new Map());

  const getState = useCallback(
    (sectionId: string): SimplifyState => stateMap.get(sectionId) ?? DEFAULT_STATE,
    [stateMap],
  );

  /** Immutably update a single section's state */
  const patch = useCallback((sectionId: string, update: Partial<SimplifyState>) => {
    setStateMap((prev) => {
      const next = new Map(prev);
      next.set(sectionId, {
        ...(prev.get(sectionId) ?? DEFAULT_STATE),
        ...update,
      });
      return next;
    });
  }, []);

  const simplify = useCallback(
    async (sectionId: string, text: string) => {
      // Serve from cache — never hit the API twice for the same section.
      const cached = cacheRef.current.get(sectionId);
      if (cached !== undefined) {
        patch(sectionId, { simplified: cached, showSimplified: true });
        return;
      }

      patch(sectionId, { isLoading: true, error: null });

      try {
        const res = await fetch('/api/simplify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sectionId, text }),
        });

        if (!res.ok) {
          throw new Error(`Server error ${res.status}`);
        }

        const { simplified } = (await res.json()) as { simplified: string };
        cacheRef.current.set(sectionId, simplified);
        patch(sectionId, { simplified, isLoading: false, showSimplified: true });
      } catch (err) {
        patch(sectionId, {
          isLoading: false,
          error: err instanceof Error ? err.message : 'Could not simplify — please try again.',
        });
      }
    },
    [patch],
  );

  const toggle = useCallback(
    (sectionId: string) => {
      const current = stateMap.get(sectionId);
      // Only toggle if there is something to show.
      if (!current?.simplified) return;
      patch(sectionId, { showSimplified: !current.showSimplified });
    },
    [stateMap, patch],
  );

  return { getState, simplify, toggle };
}
