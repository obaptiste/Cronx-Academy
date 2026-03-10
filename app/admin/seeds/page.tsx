import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { faults, symptoms, trees } from '@/lib/fault-path/data';

export default function AdminSeedsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Admin seed preview</h1>
      <Card>
        <CardTitle>Seed bundle summary</CardTitle>
        <CardDescription>{faults.length} faults, {symptoms.length} symptoms, {trees.length} detailed decision trees.</CardDescription>
      </Card>
      <Card>
        <CardTitle>Fault slugs</CardTitle>
        <ul className="mt-2 list-disc pl-5 text-sm">{faults.map((fault)=><li key={fault.slug}>{fault.slug}</li>)}</ul>
      </Card>
    </div>
  );
}
