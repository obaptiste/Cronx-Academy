import { Card, CardDescription, CardTitle } from '@/components/ui/card';

const metrics = [
  ['Total diagnoses started', '128'],
  ['Most selected symptom', 'RCD trips immediately'],
  ['Most common end result', 'Appliance causes trip'],
  ['Average completion time', '2m 40s'],
];

const recent = [
  { token: 'FP-1021', symptom: 'Some sockets dead, others live', result: 'Broken ring final suspected', risk: 'high' },
  { token: 'FP-1020', symptom: 'Socket hot / burn marks', result: 'High resistance joint', risk: 'urgent' },
  { token: 'FP-1019', symptom: 'Appliance causes trip', result: 'Appliance earth leakage', risk: 'high' },
];

export default function TutorPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Tutor dashboard</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {metrics.map(([title, value]) => (
          <Card key={title}>
            <CardDescription>{title}</CardDescription>
            <CardTitle>{value}</CardTitle>
          </Card>
        ))}
      </div>
      <Card>
        <CardTitle>Recent diagnosis sessions</CardTitle>
        <table className="mt-2 w-full text-left text-sm">
          <thead><tr><th>Session</th><th>Symptom</th><th>Result</th><th>Risk</th></tr></thead>
          <tbody>{recent.map((row)=><tr key={row.token} className="border-t"><td>{row.token}</td><td>{row.symptom}</td><td>{row.result}</td><td>{row.risk}</td></tr>)}</tbody>
        </table>
      </Card>
    </div>
  );
}
