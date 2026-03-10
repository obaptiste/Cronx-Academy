import { notFound } from 'next/navigation';
import { Alert } from '@/components/ui/alert';
import { SeverityBadge } from '@/components/ui/badge';
import { Card, CardTitle } from '@/components/ui/card';
import { faults } from '@/lib/fault-path/data';

export default async function FaultDetailsPage({ params }: { params: Promise<{ faultSlug: string }> }) {
  const { faultSlug } = await params;
  const fault = faults.find((item) => item.slug === faultSlug);
  if (!fault) return notFound();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{fault.title}</h1>
      <SeverityBadge level={fault.severity === 'high' ? 'high' : fault.severity} />
      <p className="text-slate-700">{fault.description}</p>
      <Alert tone={fault.severity === 'urgent' ? 'danger' : 'warning'}>{fault.dangerNotes}</Alert>

      <Card><CardTitle>Common symptoms</CardTitle><ul className="list-disc pl-5 text-sm">{fault.commonSymptoms.map((item)=><li key={item}>{item}</li>)}</ul></Card>
      <Card><CardTitle>Typical causes</CardTitle><ul className="list-disc pl-5 text-sm">{fault.likelyCauses.map((item)=><li key={item}>{item}</li>)}</ul></Card>
      <Card><CardTitle>Safe observational checks</CardTitle><ul className="list-disc pl-5 text-sm">{fault.safeChecks.map((item)=><li key={item}>{item}</li>)}</ul></Card>
      <Card><CardTitle>Escalation guidance</CardTitle><p className="text-sm">{fault.escalationGuidance}</p></Card>
      <Card>
        <CardTitle>What a qualified electrician would typically test next</CardTitle>
        <p className="mb-2 text-xs text-slate-500">Not for unqualified users to carry out.</p>
        <ul className="list-disc pl-5 text-sm">{fault.electricianTestsNext.map((item)=><li key={item}>{item}</li>)}</ul>
      </Card>
    </div>
  );
}
