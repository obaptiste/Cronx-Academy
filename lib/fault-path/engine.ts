import { z } from 'zod';
import { fallbackSafeChecks, faults, trees } from '@/lib/fault-path/data';
import type { DecisionTree, DiagnosisResult, RiskLevel } from '@/lib/fault-path/types';

export const answerSchema = z.object({ nodeKey: z.string(), value: z.string() });

const riskOrder: RiskLevel[] = ['low', 'caution', 'high', 'urgent'];

const treeBySlug = new Map(trees.map((tree) => [tree.slug, tree]));
const faultBySlug = new Map(faults.map((fault) => [fault.slug, fault]));

export function getTree(slug: string): DecisionTree | undefined {
  return treeBySlug.get(slug);
}

export function runInference(symptomSlug: string, answers: Array<{ nodeKey: string; value: string }>): DiagnosisResult {
  const tree = getTree(symptomSlug);
  const score = new Map<string, number>();
  let urgent = false;

  tree?.defaultFaults.forEach((slug) => score.set(slug, 1));

  for (const raw of answers) {
    const parsed = answerSchema.safeParse(raw);
    if (!parsed.success || !tree) continue;
    const node = tree.nodes[parsed.data.nodeKey];
    const selected = node?.options.find((option) => option.value === parsed.data.value);
    if (!selected) continue;

    if (selected.urgentTrigger) urgent = true;
    Object.entries(selected.scoreAdjustments ?? {}).forEach(([faultSlug, delta]) => {
      score.set(faultSlug, (score.get(faultSlug) ?? 0) + delta);
    });
  }

  const ranked = [...score.entries()].sort((a, b) => b[1] - a[1]).map(([slug]) => slug).slice(0, 3);
  const likelyFaults = ranked.length ? ranked : [symptomSlug];

  const topSeverity = likelyFaults.reduce<RiskLevel>((acc, slug) => {
    const sev = faultBySlug.get(slug)?.severity ?? 'caution';
    return riskOrder.indexOf(sev) > riskOrder.indexOf(acc) ? sev : acc;
  }, 'low');

  const riskLevel: RiskLevel = urgent ? 'urgent' : topSeverity;

  return {
    likelyFaults,
    urgent,
    riskLevel,
    safeNextChecks: likelyFaults.flatMap((slug) => faultBySlug.get(slug)?.safeChecks ?? []).slice(0, 6).length
      ? likelyFaults.flatMap((slug) => faultBySlug.get(slug)?.safeChecks ?? []).slice(0, 6)
      : fallbackSafeChecks,
    reasoning: likelyFaults.map((slug) => faultBySlug.get(slug)?.educationalExplanation ?? 'Reasoning unavailable.'),
    escalation:
      riskLevel === 'urgent' || riskLevel === 'high'
        ? 'Call a qualified electrician now. Do not carry out invasive or live testing.'
        : 'Safe to continue observing only. Escalate if symptoms worsen or repeat.',
  };
}
