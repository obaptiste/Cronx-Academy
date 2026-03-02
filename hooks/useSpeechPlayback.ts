'use client';

import { useRef, useState, useCallback, useEffect } from 'react';

/**
 * Manages Web Speech API playback for individual sections.
 *
 * Design notes:
 * - The SpeechSynthesisUtterance is stored in a ref so creating a new utterance
 *   or updating its callbacks never triggers a re-render — which is critical
 *   because a re-render during active playback can cause speech to stutter or
 *   restart on some browsers.
 * - `onEnd` is also stored in a ref so the caller can pass a stable or unstable
 *   callback without needing to wrap it in useCallback themselves.
 * - Cleanup on unmount cancels any in-progress speech to avoid orphaned audio.
 */
export interface UseSpeechPlaybackReturn {
  /** Whether speech is currently active */
  isPlaying: boolean;
  /** The ID of the section currently being read, or null */
  activeSectionId: string | null;
  /** Begin reading a section aloud. Stops any existing playback first. */
  speak: (sectionId: string, text: string, onEnd?: () => void) => void;
  /** Stop all speech immediately */
  stop: () => void;
  /** False on SSR or browsers without speechSynthesis support */
  isSupported: boolean;
}

export function useSpeechPlayback(): UseSpeechPlaybackReturn {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  // Keep utterance and callback in refs — mutations here never cause re-renders.
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const onEndRef = useRef<(() => void) | undefined>(undefined);

  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  // Cancel any playing speech when the component unmounts to prevent
  // audio that outlives its host component.
  useEffect(() => {
    return () => {
      if (isSupported) window.speechSynthesis.cancel();
    };
    // isSupported is constant after mount — safe to omit from deps.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stop = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setActiveSectionId(null);
    onEndRef.current = undefined;
  }, [isSupported]);

  const speak = useCallback(
    (sectionId: string, text: string, onEnd?: () => void) => {
      if (!isSupported) return;

      // Cancel before creating a new utterance to reset browser state cleanly.
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Slightly slower than default for comprehension
      utterance.pitch = 1;
      utterance.lang = 'en-GB';

      onEndRef.current = onEnd;

      utterance.onstart = () => {
        setIsPlaying(true);
        setActiveSectionId(sectionId);
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setActiveSectionId(null);
        // Fire the stored callback then clear it so it can't be called twice.
        onEndRef.current?.();
        onEndRef.current = undefined;
      };

      utterance.onerror = () => {
        setIsPlaying(false);
        setActiveSectionId(null);
        onEndRef.current = undefined;
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [isSupported],
  );

  return { isPlaying, activeSectionId, speak, stop, isSupported };
}
