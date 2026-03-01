'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import {
  languageNodes,
  timelineEvents,
  wordDetectiveRounds,
  deadLanguages,
  quizQuestions,
  getChildren,
  getNodeById,
} from '@/lib/data/etymologyData';
import type { EtymologyLanguageNode } from '@/types';

// ─── Inline SVG Icons (no external icon library needed) ───────────────────────

function IconChevronDown({ size = 14, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function IconChevronRight({ size = 14, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function IconChevronLeft({ size = 14, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function IconCheck({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconX({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ─── Theme constants ──────────────────────────────────────────────────────────

const GOLD = '#c4a040';
const PARCHMENT = '#e8dcc0';
const DARK_BG = '#0a0a10';
const CARD_BG = 'rgba(20, 20, 30, 0.9)';
const TEAL = '#2a88aa';

// ─── Utility components ───────────────────────────────────────────────────────

function CaribbeanCallout({ text }: { text: string }) {
  return (
    <div
      className="mt-4 rounded-lg border p-3 text-sm"
      style={{ background: `${TEAL}18`, borderColor: `${TEAL}60`, color: '#7dd3ea' }}
    >
      <span className="mr-2 font-bold" style={{ color: TEAL }}>
        🌊 Caribbean Connection:
      </span>
      {text}
    </div>
  );
}

function SectionBadge({ visited }: { visited: boolean }) {
  return visited ? (
    <span className="ml-1 text-xs font-bold" style={{ color: GOLD }}>
      ✓
    </span>
  ) : null;
}

// ─── Section 1: Language Family Tree ─────────────────────────────────────────

function StatusPill({ status }: { status: EtymologyLanguageNode['status'] }) {
  const colours: Record<EtymologyLanguageNode['status'], string> = {
    living: '#22c55e',
    extinct: '#ef4444',
    revived: '#a855f7',
  };
  const labels: Record<EtymologyLanguageNode['status'], string> = {
    living: 'Living',
    extinct: 'Extinct ☠',
    revived: 'Revived ✦',
  };
  return (
    <span
      className="rounded-full px-2 py-0.5 text-xs font-semibold"
      style={{
        background: `${colours[status]}22`,
        color: colours[status],
        border: `1px solid ${colours[status]}44`,
      }}
    >
      {labels[status]}
    </span>
  );
}

function TreeNode({
  node,
  depth,
  selectedId,
  expandedIds,
  onSelect,
  onToggleExpand,
}: {
  node: EtymologyLanguageNode;
  depth: number;
  selectedId: string | null;
  expandedIds: Set<string>;
  onSelect: (id: string) => void;
  onToggleExpand: (id: string) => void;
}) {
  const children = getChildren(node.id);
  const hasChildren = children.length > 0;
  const isExpanded = expandedIds.has(node.id);
  const isSelected = selectedId === node.id;

  const isFamily = node.type === 'family' || node.type === 'subfamily';
  const indent = depth * 16;

  return (
    <div>
      <div
        className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 transition-all duration-150 hover:opacity-100"
        style={{
          marginLeft: indent,
          background: isSelected ? `${GOLD}22` : 'transparent',
          borderLeft: isSelected ? `2px solid ${GOLD}` : '2px solid transparent',
          opacity: isSelected ? 1 : 0.8,
        }}
        onClick={() => {
          onSelect(node.id);
          if (hasChildren) onToggleExpand(node.id);
        }}
      >
        {hasChildren ? (
          <span style={{ color: GOLD, flexShrink: 0, width: 14 }}>
            {isExpanded ? <IconChevronDown size={14} /> : <IconChevronRight size={14} />}
          </span>
        ) : (
          <span style={{ width: 14, flexShrink: 0 }} />
        )}
        <span
          className="text-sm font-medium leading-tight"
          style={{
            color: isSelected ? GOLD : isFamily ? PARCHMENT : `${PARCHMENT}cc`,
            fontFamily: isFamily ? 'Georgia, serif' : 'inherit',
          }}
        >
          {node.name}
        </span>
        {node.status === 'extinct' && (
          <span className="text-xs" style={{ color: '#ef4444' }}>
            ☠
          </span>
        )}
        {node.status === 'revived' && (
          <span className="text-xs" style={{ color: '#a855f7' }}>
            ✦
          </span>
        )}
      </div>
      {hasChildren && isExpanded && (
        <div>
          {children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              depth={depth + 1}
              selectedId={selectedId}
              expandedIds={expandedIds}
              onSelect={onSelect}
              onToggleExpand={onToggleExpand}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function NodeDetailPanel({ node }: { node: EtymologyLanguageNode }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-lg font-bold" style={{ color: GOLD, fontFamily: 'Georgia, serif' }}>
          {node.name}
        </h3>
        <StatusPill status={node.status} />
      </div>

      <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
        <div>
          <span className="font-semibold" style={{ color: `${GOLD}aa` }}>
            Era:{' '}
          </span>
          <span style={{ color: PARCHMENT }}>{node.era}</span>
        </div>
        <div>
          <span className="font-semibold" style={{ color: `${GOLD}aa` }}>
            Region:{' '}
          </span>
          <span style={{ color: PARCHMENT }}>{node.region}</span>
        </div>
        {node.speakers && (
          <div className="sm:col-span-2">
            <span className="font-semibold" style={{ color: `${GOLD}aa` }}>
              Speakers:{' '}
            </span>
            <span style={{ color: PARCHMENT }}>{node.speakers}</span>
          </div>
        )}
      </div>

      {node.examples.length > 0 && (
        <div>
          <p
            className="mb-2 text-xs font-semibold uppercase tracking-wider"
            style={{ color: `${GOLD}99` }}
          >
            Etymology Examples
          </p>
          <div className="flex flex-col gap-3">
            {node.examples.map((ex, i) => (
              <div
                key={i}
                className="rounded-lg p-3 text-sm"
                style={{ background: `${GOLD}0d`, border: `1px solid ${GOLD}22` }}
              >
                <p className="mb-1 font-bold" style={{ color: PARCHMENT }}>
                  "{ex.modernWord}"
                </p>
                <div className="mb-1 flex flex-wrap gap-1">
                  {ex.chain.map((step, j) => (
                    <span key={j} className="flex items-center gap-1">
                      <span
                        className="rounded px-1.5 py-0.5 text-xs"
                        style={{ background: `${GOLD}18`, color: `${PARCHMENT}cc` }}
                      >
                        {step}
                      </span>
                      {j < ex.chain.length - 1 && <span style={{ color: `${GOLD}66` }}>→</span>}
                    </span>
                  ))}
                </div>
                <p className="text-xs italic" style={{ color: `${PARCHMENT}99` }}>
                  {ex.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        className="rounded-lg p-3 text-sm"
        style={{ background: `${TEAL}12`, border: `1px solid ${TEAL}30` }}
      >
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider" style={{ color: TEAL }}>
          Did You Know?
        </p>
        <p style={{ color: `${PARCHMENT}cc` }}>{node.didYouKnow}</p>
      </div>

      {node.caribbeanConnection && <CaribbeanCallout text={node.caribbeanConnection} />}
    </div>
  );
}

function LanguageFamilyTree() {
  const roots = getChildren(undefined);
  const pie = languageNodes.find((n) => n.id === 'pie');
  const basque = languageNodes.find((n) => n.id === 'basque');
  const [selectedId, setSelectedId] = useState<string | null>('pie');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    new Set([
      'pie',
      'celtic',
      'germanic',
      'north-germanic',
      'west-germanic',
      'romance',
      'slavic',
      'hellenic',
      'baltic',
    ]),
  );

  const selectedNode = selectedId ? getNodeById(selectedId) : (pie ?? null);

  function toggleExpand(id: string) {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  // The outlier Basque node rendered separately
  const topLevelNodes = roots.filter((n) => n.id !== 'basque' && n.id !== 'pie');
  const pieNode = pie;

  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
      {/* Tree panel */}
      <div
        className="flex-shrink-0 overflow-y-auto rounded-xl p-3 md:w-64 md:max-h-[540px]"
        style={{ background: CARD_BG, border: `1px solid ${GOLD}22` }}
      >
        <p
          className="mb-3 text-xs font-semibold uppercase tracking-wider"
          style={{ color: `${GOLD}99` }}
        >
          Language Family Tree
        </p>
        {/* PIE root */}
        {pieNode && (
          <TreeNode
            node={pieNode}
            depth={0}
            selectedId={selectedId}
            expandedIds={expandedIds}
            onSelect={setSelectedId}
            onToggleExpand={toggleExpand}
          />
        )}
        {/* Branches from PIE */}
        {topLevelNodes.map((node) => (
          <TreeNode
            key={node.id}
            node={node}
            depth={1}
            selectedId={selectedId}
            expandedIds={expandedIds}
            onSelect={setSelectedId}
            onToggleExpand={toggleExpand}
          />
        ))}
        {/* Basque outlier */}
        {basque && (
          <div className="mt-3 border-t pt-3" style={{ borderColor: `${GOLD}22` }}>
            <p className="mb-1 text-xs" style={{ color: `${GOLD}66` }}>
              The Outlier
            </p>
            <TreeNode
              node={basque}
              depth={0}
              selectedId={selectedId}
              expandedIds={expandedIds}
              onSelect={setSelectedId}
              onToggleExpand={toggleExpand}
            />
          </div>
        )}
      </div>

      {/* Detail panel */}
      <div
        className="flex-1 overflow-y-auto rounded-xl p-4 md:max-h-[540px]"
        style={{ background: CARD_BG, border: `1px solid ${GOLD}22` }}
      >
        {selectedNode ? (
          <NodeDetailPanel node={selectedNode} />
        ) : (
          <p className="text-center text-sm" style={{ color: `${PARCHMENT}66` }}>
            Select a language or family to explore
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Section 2: Timeline Explorer ────────────────────────────────────────────

function TimelineExplorer() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-4">
      {/* Horizontal scroll strip */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto pb-2"
        style={{ scrollbarWidth: 'thin', scrollbarColor: `${GOLD}44 transparent` }}
      >
        {timelineEvents.map((ev, i) => (
          <button
            key={i}
            onClick={() => setExpandedIdx(i === expandedIdx ? null : i)}
            className="flex-shrink-0 rounded-lg px-3 py-2 text-center text-xs font-semibold transition-all duration-200"
            style={{
              background: expandedIdx === i ? `${GOLD}33` : `${GOLD}0d`,
              border: `1px solid ${expandedIdx === i ? GOLD : `${GOLD}33`}`,
              color: expandedIdx === i ? GOLD : `${PARCHMENT}aa`,
              minWidth: 90,
            }}
          >
            <div
              className="mb-0.5 text-xs"
              style={{ color: expandedIdx === i ? GOLD : `${GOLD}88` }}
            >
              {ev.year}
            </div>
            <div className="leading-tight">{ev.event}</div>
          </button>
        ))}
      </div>

      {/* Expanded event card */}
      {expandedIdx !== null && (
        <div
          className="rounded-xl p-5"
          style={{ background: CARD_BG, border: `1px solid ${GOLD}33` }}
        >
          <div
            className="mb-1 text-xs font-semibold uppercase tracking-wider"
            style={{ color: GOLD }}
          >
            {timelineEvents[expandedIdx].year}
          </div>
          <h3
            className="mb-1 text-xl font-bold"
            style={{ color: PARCHMENT, fontFamily: 'Georgia, serif' }}
          >
            {timelineEvents[expandedIdx].event}
          </h3>
          <p className="mb-3 text-sm font-medium" style={{ color: `${PARCHMENT}99` }}>
            {timelineEvents[expandedIdx].detail}
          </p>
          <p
            className="mb-4 leading-relaxed"
            style={{ color: `${PARCHMENT}cc`, fontSize: '0.9rem' }}
          >
            {timelineEvents[expandedIdx].narrative}
          </p>
          <div
            className="mb-3 rounded-lg p-3 text-sm"
            style={{ background: `${GOLD}0d`, border: `1px solid ${GOLD}22` }}
          >
            <p
              className="mb-1 text-xs font-semibold uppercase tracking-wider"
              style={{ color: `${GOLD}99` }}
            >
              Etymology Example
            </p>
            <p style={{ color: `${PARCHMENT}cc` }}>
              {timelineEvents[expandedIdx].etymologicalExample}
            </p>
          </div>
          {timelineEvents[expandedIdx].caribbeanConnection && (
            <CaribbeanCallout text={timelineEvents[expandedIdx].caribbeanConnection!} />
          )}
          {/* Prev / Next */}
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => setExpandedIdx(Math.max(0, expandedIdx - 1))}
              disabled={expandedIdx === 0}
              className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm transition-opacity disabled:opacity-30"
              style={{ background: `${GOLD}22`, color: GOLD }}
            >
              <IconChevronLeft size={14} /> Previous
            </button>
            <button
              onClick={() => setExpandedIdx(Math.min(timelineEvents.length - 1, expandedIdx + 1))}
              disabled={expandedIdx === timelineEvents.length - 1}
              className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm transition-opacity disabled:opacity-30"
              style={{ background: `${GOLD}22`, color: GOLD }}
            >
              Next <IconChevronRight size={14} />
            </button>
          </div>
        </div>
      )}

      {expandedIdx === null && (
        <p className="text-center text-sm" style={{ color: `${PARCHMENT}66` }}>
          Select an event above to explore it in detail
        </p>
      )}
    </div>
  );
}

// ─── Section 3: Word Detective ────────────────────────────────────────────────

function WordDetective() {
  const [roundIdx, setRoundIdx] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [roundComplete, setRoundComplete] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [roundScores, setRoundScores] = useState<boolean[]>([]);

  const round = wordDetectiveRounds[roundIdx];
  const step = round.steps[stepIdx];
  const totalSteps = round.steps.length;

  function handleAnswer(idx: number) {
    if (answered) return;
    setSelectedAnswer(idx);
    setAnswered(true);
    const correct = idx === step.correctIndex;
    if (correct) {
      const bonus = streak >= 2 ? 2 : 1;
      setScore((s) => s + bonus);
      setStreak((s) => s + 1);
    } else {
      setStreak(0);
    }
    setRoundScores((prev) => [...prev, correct]);
  }

  function nextStep() {
    if (stepIdx < totalSteps - 1) {
      setStepIdx(stepIdx + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setRoundComplete(true);
    }
  }

  function nextRound() {
    if (roundIdx < wordDetectiveRounds.length - 1) {
      setRoundIdx(roundIdx + 1);
      setStepIdx(0);
      setSelectedAnswer(null);
      setAnswered(false);
      setRoundComplete(false);
      setRoundScores([]);
    } else {
      const finalScore = score;
      setHighScore((h) => Math.max(h, finalScore));
      setGameComplete(true);
    }
  }

  function resetGame() {
    setRoundIdx(0);
    setStepIdx(0);
    setScore(0);
    setStreak(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setRoundComplete(false);
    setGameComplete(false);
    setRoundScores([]);
  }

  if (gameComplete) {
    const maxScore = wordDetectiveRounds.reduce((acc, r) => acc + r.steps.length, 0) * 2;
    return (
      <div className="flex flex-col items-center gap-6 py-8 text-center">
        <span style={{ fontSize: 56, lineHeight: 1 }}>🏆</span>
        <h3
          className="text-2xl font-bold"
          style={{ color: PARCHMENT, fontFamily: 'Georgia, serif' }}
        >
          Word Detective Complete!
        </h3>
        <div
          className="rounded-2xl px-10 py-6"
          style={{ background: `${GOLD}18`, border: `1px solid ${GOLD}44` }}
        >
          <p className="mb-1 text-5xl font-bold" style={{ color: GOLD }}>
            {score}
          </p>
          <p className="text-sm" style={{ color: `${PARCHMENT}99` }}>
            points out of {maxScore} possible
          </p>
          {highScore > 0 && (
            <p className="mt-2 text-xs" style={{ color: `${GOLD}88` }}>
              High score: {highScore}
            </p>
          )}
        </div>
        <div className="max-w-sm text-sm" style={{ color: `${PARCHMENT}99` }}>
          {score >= maxScore * 0.8
            ? "Outstanding! You've traced words through millennia like a true etymologist."
            : score >= maxScore * 0.5
              ? 'Well done! Etymology takes practice — every wrong answer is a lesson.'
              : 'Keep digging! The history of words rewards those who persist.'}
        </div>
        <button
          onClick={resetGame}
          className="rounded-xl px-6 py-3 font-semibold transition-opacity hover:opacity-80"
          style={{ background: GOLD, color: DARK_BG }}
        >
          Play Again
        </button>
      </div>
    );
  }

  if (roundComplete) {
    const roundCorrect = roundScores.filter(Boolean).length;
    return (
      <div
        className="rounded-xl p-6 text-center"
        style={{ background: CARD_BG, border: `1px solid ${GOLD}33` }}
      >
        <p
          className="mb-2 text-sm font-semibold uppercase tracking-wider"
          style={{ color: `${GOLD}99` }}
        >
          Round {roundIdx + 1} Complete
        </p>
        <h3
          className="mb-4 text-xl font-bold"
          style={{ color: PARCHMENT, fontFamily: 'Georgia, serif' }}
        >
          "{round.word}"
        </h3>
        <p className="mb-1 text-3xl font-bold" style={{ color: GOLD }}>
          {roundCorrect}/{totalSteps}
        </p>
        <p className="mb-5 text-sm" style={{ color: `${PARCHMENT}99` }}>
          correct answers this round
        </p>
        <div
          className="mb-5 rounded-lg p-4 text-left text-sm"
          style={{ background: `${GOLD}0d`, border: `1px solid ${GOLD}22` }}
        >
          <p
            className="mb-1 text-xs font-semibold uppercase tracking-wider"
            style={{ color: `${GOLD}99` }}
          >
            Full Etymology
          </p>
          <p style={{ color: `${PARCHMENT}cc` }}>{round.finalFact}</p>
        </div>
        {round.caribbeanConnection && <CaribbeanCallout text={round.caribbeanConnection} />}
        <button
          onClick={nextRound}
          className="mt-5 rounded-xl px-6 py-2.5 font-semibold transition-opacity hover:opacity-80"
          style={{ background: GOLD, color: DARK_BG }}
        >
          {roundIdx < wordDetectiveRounds.length - 1 ? 'Next Word →' : 'See Final Score'}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Score bar */}
      <div
        className="flex items-center justify-between rounded-lg px-4 py-2"
        style={{ background: `${GOLD}0d` }}
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold" style={{ color: GOLD }}>
            Score: {score}
          </span>
          {streak >= 2 && (
            <span
              className="flex items-center gap-1 text-xs font-bold"
              style={{ color: '#f97316' }}
            >
              ⚡ {streak}× streak! (+2 pts)
            </span>
          )}
        </div>
        <span className="text-xs" style={{ color: `${PARCHMENT}77` }}>
          Word {roundIdx + 1}/{wordDetectiveRounds.length} · Step {stepIdx + 1}/{totalSteps}
        </span>
      </div>

      {/* Word card */}
      <div
        className="rounded-xl p-5"
        style={{ background: CARD_BG, border: `1px solid ${GOLD}33` }}
      >
        <div className="mb-4 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: `${GOLD}99` }}
          >
            Trace this word backward through history
          </p>
          <p
            className="mt-1 text-4xl font-bold tracking-wide"
            style={{ color: GOLD, fontFamily: 'Georgia, serif' }}
          >
            {round.word}
          </p>
        </div>

        {/* Step progress dots */}
        <div className="mb-4 flex justify-center gap-2">
          {round.steps.map((_, i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full transition-all"
              style={{
                background: i < stepIdx ? GOLD : i === stepIdx ? GOLD : `${GOLD}33`,
                transform: i === stepIdx ? 'scale(1.4)' : 'scale(1)',
              }}
            />
          ))}
        </div>

        <p className="mb-4 text-center text-sm font-medium" style={{ color: PARCHMENT }}>
          {step.prompt}
        </p>

        <div className="flex flex-col gap-2">
          {step.options.map((opt, i) => {
            let bg = `${GOLD}0d`;
            let border = `${GOLD}22`;
            let textColor = `${PARCHMENT}cc`;
            if (answered) {
              if (i === step.correctIndex) {
                bg = '#22c55e22';
                border = '#22c55e66';
                textColor = '#86efac';
              } else if (i === selectedAnswer && i !== step.correctIndex) {
                bg = '#ef444422';
                border = '#ef444466';
                textColor = '#fca5a5';
              }
            } else if (selectedAnswer === i) {
              bg = `${GOLD}22`;
              border = GOLD;
              textColor = GOLD;
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={answered}
                className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-all duration-200"
                style={{ background: bg, border: `1px solid ${border}`, color: textColor }}
              >
                {answered && i === step.correctIndex && (
                  <IconCheck size={14} className="flex-shrink-0" />
                )}
                {answered && i === selectedAnswer && i !== step.correctIndex && (
                  <IconX size={14} className="flex-shrink-0" />
                )}
                {(!answered || (i !== step.correctIndex && i !== selectedAnswer)) && (
                  <span
                    className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs"
                    style={{ background: `${GOLD}22`, color: GOLD }}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                )}
                {opt}
              </button>
            );
          })}
        </div>

        {answered && (
          <div
            className="mt-4 rounded-lg p-3 text-sm"
            style={{
              background: selectedAnswer === step.correctIndex ? '#22c55e0d' : '#ef44440d',
              border: `1px solid ${selectedAnswer === step.correctIndex ? '#22c55e44' : '#ef444444'}`,
            }}
          >
            <p style={{ color: `${PARCHMENT}cc` }}>{step.explanation}</p>
            <button
              onClick={nextStep}
              className="mt-3 rounded-lg px-4 py-1.5 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ background: GOLD, color: DARK_BG }}
            >
              {stepIdx < totalSteps - 1 ? 'Next Step →' : 'See Round Result →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Section 4: Dead Languages Memorial ──────────────────────────────────────

function DeadLanguagesMemorial() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <div
        className="rounded-xl p-4 text-center text-sm"
        style={{ background: `rgba(239, 68, 68, 0.06)`, border: `1px solid rgba(239,68,68,0.2)` }}
      >
        <p style={{ color: '#fca5a5' }}>
          Of the ~7,000 languages spoken today,{' '}
          <strong style={{ color: '#ef4444' }}>one dies approximately every two weeks.</strong>
          <br />
          <span style={{ color: `${PARCHMENT}88` }}>
            Each death represents not merely lost vocabulary, but vanished ways of organising
            thought, unique etymological pathways, and irreplaceable cultural memory.
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {deadLanguages.map((lang, i) => (
          <button
            key={i}
            onClick={() => setSelectedIdx(i === selectedIdx ? null : i)}
            className="rounded-xl p-4 text-left transition-all duration-200 hover:opacity-90"
            style={{
              background: selectedIdx === i ? `rgba(239,68,68,0.1)` : CARD_BG,
              border: `1px solid ${selectedIdx === i ? 'rgba(239,68,68,0.4)' : `${GOLD}22`}`,
            }}
          >
            <div className="mb-1 flex items-center gap-2">
              <span style={{ color: '#ef4444', flexShrink: 0, fontSize: 14 }}>☠</span>
              <span
                className="font-bold"
                style={{ color: PARCHMENT, fontFamily: 'Georgia, serif' }}
              >
                {lang.name}
              </span>
            </div>
            <p className="mb-1 text-xs" style={{ color: `${PARCHMENT}77` }}>
              {lang.family}
            </p>
            <p className="text-xs font-medium" style={{ color: '#ef444499' }}>
              Died: {lang.died}
            </p>
            {selectedIdx === i && (
              <IconChevronDown size={12} style={{ color: `${GOLD}88`, marginTop: 8 }} />
            )}
            {selectedIdx !== i && (
              <IconChevronRight size={12} style={{ color: `${GOLD}44`, marginTop: 8 }} />
            )}
          </button>
        ))}
      </div>

      {selectedIdx !== null && (
        <div
          className="rounded-xl p-5"
          style={{ background: CARD_BG, border: `1px solid rgba(239,68,68,0.3)` }}
        >
          <div className="mb-1 flex items-center gap-2">
            <span style={{ color: '#ef4444', fontSize: 18 }}>☠</span>
            <h3
              className="text-xl font-bold"
              style={{ color: PARCHMENT, fontFamily: 'Georgia, serif' }}
            >
              {deadLanguages[selectedIdx].name}
            </h3>
          </div>
          <p className="mb-4 text-sm" style={{ color: `${PARCHMENT}88` }}>
            {deadLanguages[selectedIdx].family}
          </p>

          <div className="mb-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            <div>
              <p className="mb-0.5 text-xs font-semibold uppercase" style={{ color: `${GOLD}88` }}>
                Region
              </p>
              <p style={{ color: `${PARCHMENT}cc` }}>{deadLanguages[selectedIdx].region}</p>
            </div>
            <div>
              <p className="mb-0.5 text-xs font-semibold uppercase" style={{ color: `${GOLD}88` }}>
                Died
              </p>
              <p style={{ color: '#fca5a5' }}>{deadLanguages[selectedIdx].died}</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="mb-1 text-xs font-semibold uppercase" style={{ color: `${GOLD}88` }}>
              Last Speaker
            </p>
            <p className="text-sm italic" style={{ color: `${PARCHMENT}cc` }}>
              {deadLanguages[selectedIdx].lastSpeaker}
            </p>
          </div>

          <div className="mb-4">
            <p className="mb-1 text-xs font-semibold uppercase" style={{ color: `${GOLD}88` }}>
              Legacy
            </p>
            <p className="text-sm" style={{ color: `${PARCHMENT}cc` }}>
              {deadLanguages[selectedIdx].legacy}
            </p>
          </div>

          {deadLanguages[selectedIdx].sampleWords.length > 0 && (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase" style={{ color: `${GOLD}88` }}>
                Preserved Words
              </p>
              <div className="flex flex-wrap gap-2">
                {deadLanguages[selectedIdx].sampleWords.map((w, j) => (
                  <div
                    key={j}
                    className="rounded-lg px-3 py-1.5 text-xs"
                    style={{ background: `${GOLD}0d`, border: `1px solid ${GOLD}22` }}
                  >
                    <span className="font-bold" style={{ color: GOLD }}>
                      {w.word}
                    </span>
                    <span style={{ color: `${PARCHMENT}88` }}> — {w.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Section 5: Quiz Zone ─────────────────────────────────────────────────────

function QuizZone() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null),
  );
  const [submitted, setSubmitted] = useState(false);
  const [showExplanations, setShowExplanations] = useState<Set<number>>(new Set());

  const score = submitted
    ? answers.filter((a, i) => a === quizQuestions[i].correctIndex).length
    : 0;

  function selectAnswer(qIdx: number, optIdx: number) {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qIdx] = optIdx;
      return next;
    });
  }

  function toggleExplanation(qIdx: number) {
    setShowExplanations((prev) => {
      const next = new Set(prev);
      if (next.has(qIdx)) next.delete(qIdx);
      else next.add(qIdx);
      return next;
    });
  }

  function resetQuiz() {
    setAnswers(new Array(quizQuestions.length).fill(null));
    setSubmitted(false);
    setShowExplanations(new Set());
  }

  function getBadge() {
    if (score === quizQuestions.length)
      return { label: 'Master Etymologist', icon: '🏆', color: GOLD };
    if (score >= 12) return { label: 'Language Scholar', icon: '📚', color: '#a78bfa' };
    if (score >= 8) return { label: 'Word Explorer', icon: '🗺️', color: TEAL };
    return { label: 'Keep Digging!', icon: '🔍', color: `${PARCHMENT}99` };
  }

  const badge = getBadge();
  const answeredCount = answers.filter((a) => a !== null).length;

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm" style={{ color: `${PARCHMENT}88` }}>
          {submitted
            ? `Score: ${score}/${quizQuestions.length}`
            : `${answeredCount}/${quizQuestions.length} answered`}
        </p>
        {submitted && (
          <div className="flex items-center gap-2">
            <span style={{ fontSize: '1.2rem' }}>{badge.icon}</span>
            <span className="font-bold" style={{ color: badge.color }}>
              {badge.label}
            </span>
          </div>
        )}
      </div>

      {/* Score bar after submit */}
      {submitted && (
        <div
          className="flex items-center gap-4 rounded-xl p-4"
          style={{ background: `${GOLD}18`, border: `1px solid ${GOLD}44` }}
        >
          <p className="text-4xl font-bold" style={{ color: GOLD }}>
            {score}/{quizQuestions.length}
          </p>
          <div>
            <p className="font-semibold" style={{ color: PARCHMENT }}>
              {badge.icon} {badge.label}
            </p>
            <p className="text-sm" style={{ color: `${PARCHMENT}88` }}>
              {score >= 12
                ? 'You have a remarkable feel for the roots and migrations of language.'
                : score >= 8
                  ? 'Solid foundations — etymology rewards those who keep exploring.'
                  : 'Language history is vast — every mistake is a new discovery.'}
            </p>
          </div>
        </div>
      )}

      {/* Questions */}
      <div className="flex flex-col gap-4">
        {quizQuestions.map((q, qIdx) => {
          const userAnswer = answers[qIdx];
          const isCorrect = submitted && userAnswer === q.correctIndex;
          const isWrong = submitted && userAnswer !== null && userAnswer !== q.correctIndex;

          return (
            <div
              key={q.id}
              className="rounded-xl p-4"
              style={{
                background: CARD_BG,
                border: `1px solid ${submitted ? (isCorrect ? '#22c55e44' : isWrong ? '#ef444444' : `${GOLD}22`) : `${GOLD}22`}`,
              }}
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <p className="text-sm font-medium leading-snug" style={{ color: PARCHMENT }}>
                  <span
                    className="mr-2 rounded px-1.5 py-0.5 text-xs font-bold"
                    style={{ background: `${GOLD}22`, color: GOLD }}
                  >
                    Q{q.id}
                  </span>
                  {q.question}
                </p>
                {submitted && (
                  <span className="flex-shrink-0">
                    {isCorrect ? (
                      <IconCheck size={16} className="flex-shrink-0" />
                    ) : (
                      <IconX size={16} className="flex-shrink-0" />
                    )}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                {q.options.map((opt, oIdx) => {
                  let bg = 'transparent';
                  let border = `${GOLD}22`;
                  let textColor = `${PARCHMENT}cc`;

                  if (!submitted && userAnswer === oIdx) {
                    bg = `${GOLD}22`;
                    border = GOLD;
                    textColor = GOLD;
                  } else if (submitted) {
                    if (oIdx === q.correctIndex) {
                      bg = '#22c55e18';
                      border = '#22c55e55';
                      textColor = '#86efac';
                    } else if (oIdx === userAnswer) {
                      bg = '#ef444418';
                      border = '#ef444455';
                      textColor = '#fca5a5';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => selectAnswer(qIdx, oIdx)}
                      disabled={submitted}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-all duration-150"
                      style={{ background: bg, border: `1px solid ${border}`, color: textColor }}
                    >
                      {submitted && oIdx === q.correctIndex && (
                        <IconCheck size={12} className="flex-shrink-0" />
                      )}
                      {submitted && oIdx === userAnswer && oIdx !== q.correctIndex && (
                        <IconX size={12} className="flex-shrink-0" />
                      )}
                      {(!submitted || (oIdx !== q.correctIndex && oIdx !== userAnswer)) && (
                        <span
                          className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-xs"
                          style={{ background: `${GOLD}18`, color: `${GOLD}cc` }}
                        >
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                      )}
                      {opt}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <button
                  onClick={() => toggleExplanation(qIdx)}
                  className="mt-2 flex items-center gap-1 text-xs transition-opacity hover:opacity-80"
                  style={{ color: `${GOLD}99` }}
                >
                  📖 {showExplanations.has(qIdx) ? 'Hide' : 'Show'} explanation
                </button>
              )}
              {submitted && showExplanations.has(qIdx) && (
                <div
                  className="mt-2 rounded-lg p-2.5 text-xs"
                  style={{
                    background: `${GOLD}0d`,
                    border: `1px solid ${GOLD}22`,
                    color: `${PARCHMENT}bb`,
                  }}
                >
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit / Reset */}
      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={answeredCount < quizQuestions.length}
          className="rounded-xl py-3 font-bold transition-opacity disabled:opacity-40"
          style={{ background: GOLD, color: DARK_BG }}
        >
          {answeredCount < quizQuestions.length
            ? `Answer all ${quizQuestions.length - answeredCount} remaining questions`
            : 'Submit Quiz →'}
        </button>
      ) : (
        <button
          onClick={resetQuiz}
          className="rounded-xl py-3 font-bold transition-opacity hover:opacity-80"
          style={{ background: `${GOLD}22`, color: GOLD, border: `1px solid ${GOLD}44` }}
        >
          Try Again
        </button>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const TABS = [
  { label: 'Family Tree', shortLabel: 'Tree', emoji: '🌳' },
  { label: 'Timeline', shortLabel: 'Timeline', emoji: '📅' },
  { label: 'Word Detective', shortLabel: 'Detective', emoji: '🔍' },
  { label: 'The Graveyard', shortLabel: 'Graveyard', emoji: '💀' },
  { label: 'Quiz Zone', shortLabel: 'Quiz', emoji: '❓' },
];

export default function EtymologyInteractive() {
  const [activeTab, setActiveTab] = useState(0);
  const [visitedTabs, setVisitedTabs] = useState<Set<number>>(new Set([0]));

  function goToTab(idx: number) {
    setActiveTab(idx);
    setVisitedTabs((prev) => new Set([...prev, idx]));
  }

  const sectionsVisited = visitedTabs.size;

  return (
    <div
      className="min-h-screen"
      style={{ background: `linear-gradient(135deg, ${DARK_BG} 0%, #0d0d1a 50%, #0a0f14 100%)` }}
    >
      {/* Header */}
      <div
        className="sticky top-0 z-40 px-4 py-3"
        style={{
          background: `rgba(10,10,16,0.95)`,
          borderBottom: `1px solid ${GOLD}22`,
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-opacity hover:opacity-80"
              style={{ background: `${GOLD}18`, color: GOLD, border: `1px solid ${GOLD}33` }}
            >
              <IconChevronLeft size={13} /> Cronx Academy
            </Link>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(TABS.length)].map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 w-1.5 rounded-full transition-all"
                    style={{
                      background: visitedTabs.has(i) ? GOLD : `${GOLD}33`,
                      transform: visitedTabs.has(i) ? 'scale(1.2)' : 'scale(1)',
                    }}
                  />
                ))}
              </div>
              <span className="text-xs" style={{ color: `${GOLD}88` }}>
                {sectionsVisited}/{TABS.length} explored
              </span>
            </div>
          </div>

          <div className="text-center">
            <h1
              className="text-lg font-bold leading-tight sm:text-xl"
              style={{ color: PARCHMENT, fontFamily: 'Georgia, serif' }}
            >
              European Language Etymology
            </h1>
            <p className="text-xs" style={{ color: `${PARCHMENT}77` }}>
              Origins, Migrations & Deaths — from PIE to the Caribbean
            </p>
          </div>

          {/* Tab navigation */}
          <div className="mt-3 flex gap-1 overflow-x-auto pb-0.5">
            {TABS.map((tab, i) => {
              const isActive = activeTab === i;
              return (
                <button
                  key={i}
                  onClick={() => goToTab(i)}
                  className="flex flex-shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all duration-200"
                  style={{
                    background: isActive ? `${GOLD}33` : 'transparent',
                    color: isActive ? GOLD : `${PARCHMENT}88`,
                    border: `1px solid ${isActive ? GOLD : 'transparent'}`,
                  }}
                >
                  <span>{tab.emoji}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.shortLabel}</span>
                  <SectionBadge visited={visitedTabs.has(i) && i !== activeTab} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-5xl px-4 py-6">
        {/* Section intros */}
        {activeTab === 0 && (
          <div className="mb-4">
            <h2
              className="mb-1 text-lg font-bold"
              style={{ color: GOLD, fontFamily: 'Georgia, serif' }}
            >
              The Language Family Tree
            </h2>
            <p className="text-sm" style={{ color: `${PARCHMENT}99` }}>
              Explore how ~400 languages descend from a single ancestor spoken 6,000 years ago.
              Click any branch or language to see its story — and the Caribbean connection woven
              through it.
            </p>
          </div>
        )}
        {activeTab === 1 && (
          <div className="mb-4">
            <h2
              className="mb-1 text-lg font-bold"
              style={{ color: GOLD, fontFamily: 'Georgia, serif' }}
            >
              The Great Migrations — A Timeline
            </h2>
            <p className="text-sm" style={{ color: `${PARCHMENT}99` }}>
              From the Pontic-Caspian steppes to the Caribbean islands — 6,000 years of language on
              the move. Click any event to read the full story.
            </p>
          </div>
        )}
        {activeTab === 2 && (
          <div className="mb-4">
            <h2
              className="mb-1 text-lg font-bold"
              style={{ color: GOLD, fontFamily: 'Georgia, serif' }}
            >
              Word Detective
            </h2>
            <p className="text-sm" style={{ color: `${PARCHMENT}99` }}>
              Trace words backward through history, step by step. Choose the correct origin at each
              stage — earn bonus points for streaks. Can you reach the PIE root?
            </p>
          </div>
        )}
        {activeTab === 3 && (
          <div className="mb-4">
            <h2
              className="mb-1 text-lg font-bold"
              style={{ color: '#ef4444', fontFamily: 'Georgia, serif' }}
            >
              The Graveyard of Tongues
            </h2>
            <p className="text-sm" style={{ color: `${PARCHMENT}99` }}>
              A memorial to the languages that fell silent. Each one carried irreplaceable
              knowledge, culture, and ways of seeing the world. Select a language to pay your
              respects.
            </p>
          </div>
        )}
        {activeTab === 4 && (
          <div className="mb-4">
            <h2
              className="mb-1 text-lg font-bold"
              style={{ color: GOLD, fontFamily: 'Georgia, serif' }}
            >
              Quiz Zone — 15 Questions
            </h2>
            <p className="text-sm" style={{ color: `${PARCHMENT}99` }}>
              Test everything you've learned. Answer all 15 questions, then submit to see your
              badge. Expand each question's explanation to learn more.
            </p>
          </div>
        )}

        {/* Section content */}
        {activeTab === 0 && <LanguageFamilyTree />}
        {activeTab === 1 && <TimelineExplorer />}
        {activeTab === 2 && <WordDetective />}
        {activeTab === 3 && <DeadLanguagesMemorial />}
        {activeTab === 4 && <QuizZone />}

        {/* Caribbean connections footer (shown on all tabs) */}
        {activeTab !== 2 && (
          <div
            className="mt-8 rounded-xl p-4"
            style={{ background: `${TEAL}0d`, border: `1px solid ${TEAL}33` }}
          >
            <div className="mb-2 flex items-center gap-2">
              <span style={{ color: TEAL }}>⚓</span>
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: TEAL }}>
                Caribbean Language Roots — The Full Picture
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 text-xs sm:grid-cols-2">
              {[
                { lang: 'Spanish', places: 'Cuba, Dominican Republic, Puerto Rico' },
                { lang: 'English', places: 'Jamaica, Barbados, Trinidad, Dominica' },
                { lang: 'French / Creole', places: 'Haiti, Guadeloupe, Martinique' },
                { lang: 'Dutch / Papiamentu', places: 'Curaçao, Aruba, Suriname' },
                {
                  lang: 'Taíno substrate',
                  places: 'hurricane, canoe, hammock, barbecue, tobacco — now global',
                },
                {
                  lang: 'African languages',
                  places: 'Jamaican Patois, Haitian Creole, Papiamentu foundations',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-2">
                  <span className="mt-0.5 flex-shrink-0" style={{ color: TEAL, fontSize: 10 }}>★</span>
                  <span style={{ color: `${PARCHMENT}cc` }}>
                    <strong style={{ color: '#7dd3ea' }}>{item.lang}:</strong> {item.places}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
