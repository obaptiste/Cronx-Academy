import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { faults } from '@/lib/fault-path/data';

export default function LibraryPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Fault library</h1>
      <div className="grid gap-3">
        {faults.map((fault) => (
          <Link key={fault.slug} href={`/library/${fault.slug}`}>
            <Card className="hover:border-slate-400">
              <CardTitle>{fault.title}</CardTitle>
              <CardDescription>{fault.summary}</CardDescription>
              <div className="mt-2 flex flex-wrap gap-1">
                {fault.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
