import { redirect } from 'next/navigation';
import AcademyExperience from '@/components/academy/AcademyExperience';
import { getCurrentUser } from '@/lib/auth/session';

export default async function AcademyPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  return <AcademyExperience user={user} />;
}
