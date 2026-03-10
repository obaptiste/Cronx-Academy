import Link from 'next/link';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { symptoms } from '@/lib/fault-path/data';

export default function DiagnosePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Choose a symptom</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {symptoms.map((symptom) => (
          <Link key={symptom.slug} href={`/diagnose/${symptom.slug}`}>
            <Card className="h-full hover:border-slate-400">
              <CardTitle>{symptom.title}</CardTitle>
              <CardDescription>{symptom.description}</CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
