import { notFound } from 'next/navigation';
import { DiagnosisFlow } from '@/components/fault-path/diagnosis-flow';
import { symptoms } from '@/lib/fault-path/data';

export default async function SymptomDiagnosisPage({ params }: { params: Promise<{ symptomSlug: string }> }) {
  const { symptomSlug } = await params;
  const symptom = symptoms.find((item) => item.slug === symptomSlug);
  if (!symptom) return notFound();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{symptom.title}</h1>
      <DiagnosisFlow symptomSlug={symptomSlug} />
    </div>
  );
}
