'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import Link from 'next/link';
import { Alert } from '@/components/ui/alert';
import { SeverityBadge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { faults } from '@/lib/fault-path/data';
import { getTree, runInference } from '@/lib/fault-path/engine';

type Answer = { nodeKey: string; value: string };

const DiagnosisContext = createContext<{ answers: Answer[]; setAnswers: (answers: Answer[]) => void } | null>(null);

function useDiagnosisState() {
  const ctx = useContext(DiagnosisContext);
  if (!ctx) throw new Error('Diagnosis context missing');
  return ctx;
}

export function DiagnosisFlow({ symptomSlug }: { symptomSlug: string }) {
  const [answers, setAnswers] = useState<Answer[]>([]);
  return (
    <DiagnosisContext.Provider value={{ answers, setAnswers }}>
      <FlowInner symptomSlug={symptomSlug} />
    </DiagnosisContext.Provider>
  );
}

function FlowInner({ symptomSlug }: { symptomSlug: string }) {
  const { answers, setAnswers } = useDiagnosisState();
  const tree = getTree(symptomSlug);
  const path = useMemo(() => {
    if (!tree) return [];
    const sequence = [] as string[];
    let key = tree.startNodeKey;
    for (let i = 0; i < 10 && key && key !== 'end'; i += 1) {
      sequence.push(key);
      const answer = answers.find((item) => item.nodeKey === key);
      key = tree.nodes[key].options.find((opt) => opt.value === answer?.value)?.nextNodeKey ?? '';
    }
    return sequence;
  }, [answers, tree]);

  if (!tree) {
    return <Alert tone="info">This symptom is available in the library but does not yet have a full guided flow.</Alert>;
  }

  const currentNodeKey = path.find((key) => !answers.find((a) => a.nodeKey === key));

  if (!currentNodeKey) {
    const result = runInference(symptomSlug, answers);
    const likely = result.likelyFaults.map((slug) => faults.find((fault) => fault.slug === slug)).filter(Boolean);

    return (
      <div className="space-y-4">
        <Card>
          <CardTitle>Diagnosis result</CardTitle>
          <CardDescription>Symptom: {tree.title}</CardDescription>
          <div className="mt-3 flex items-center gap-2">
            <SeverityBadge level={result.riskLevel === 'high' ? 'high' : result.riskLevel} />
            <span className="text-sm font-medium">{result.escalation}</span>
          </div>
        </Card>
        <Card>
          <CardTitle>Top likely causes</CardTitle>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            {likely.map((fault) => (
              <li key={fault?.slug}>{fault?.title}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <CardTitle>Safe next checks</CardTitle>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            {result.safeNextChecks.map((check) => (
              <li key={check}>{check}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <CardTitle>Why this conclusion was reached</CardTitle>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            {result.reasoning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
        <div className="flex gap-2">
          <Button href="/diagnose">Restart</Button>
          <Button href="/library" variant="outline">
            Related learning links
          </Button>
        </div>
      </div>
    );
  }

  const node = tree.nodes[currentNodeKey];
  const progress = ((answers.length + 1) / Object.keys(tree.nodes).length) * 100;

  return (
    <Card>
      <div className="space-y-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Step progress</p>
          <Progress value={progress} />
        </div>
        <CardTitle>{node.question}</CardTitle>
        <details className="rounded border border-slate-200 p-2 text-sm">
          <summary className="cursor-pointer font-medium">Why am I being asked this?</summary>
          <p className="mt-2 text-slate-600">{node.explanation}</p>
        </details>
        <div className="grid gap-2">
          {node.options.map((option) => (
            <button
              key={option.value}
              className="rounded-md border border-slate-300 px-3 py-2 text-left text-sm hover:bg-slate-50"
              onClick={() => setAnswers([...answers, { nodeKey: node.key, value: option.value }])}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-slate-500">
          This tool is educational only. Anything involving isolation, testing, board work, or proving dead requires a competent person.
        </p>
        <Link href="/diagnose" className="text-sm font-medium text-slate-700 underline">
          Choose a different symptom
        </Link>
      </div>
    </Card>
  );
}
