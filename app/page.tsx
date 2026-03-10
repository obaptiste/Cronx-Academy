import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold">Fault Path UK</h1>
        <p className="text-lg text-slate-700">Learn domestic fault-finding logic for UK electrical installations.</p>
        <div className="flex flex-wrap gap-2">
          <Button href="/diagnose">Start diagnosis</Button>
          <Button href="/library" variant="outline">Explore fault library</Button>
          <Button href="/tutor" variant="secondary">Tutor view</Button>
        </div>
      </section>

      <Alert tone="danger">
        Educational and triage use only. This app does not replace a qualified electrician and does not provide live/invasive test instructions.
      </Alert>

      <section className="grid gap-3 md:grid-cols-2">
        <Card>
          <CardTitle>What this tool can do</CardTitle>
          <CardDescription>Structure fault-finding logic, show probable causes, and explain safe observational next checks.</CardDescription>
        </Card>
        <Card>
          <CardTitle>What this tool cannot do</CardTitle>
          <CardDescription>It cannot authorise board work, cover removal, continuity/IR testing, or bypassing protective devices.</CardDescription>
        </Card>
      </section>
    </div>
  );
}
