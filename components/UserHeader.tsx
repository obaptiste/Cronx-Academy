import { auth, signOut } from '@/auth';

export default async function UserHeader() {
  const session = await auth();
  if (!session?.user) return null;

  const { name, role } = session.user;
  const isParent = role === 'PARENT';

  return (
    <div className="w-full bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <span className="text-lg">{isParent ? '👩‍🏫' : '🎒'}</span>
          <span className="font-semibold text-sm">{name}</span>
          <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full capitalize">
            {role.toLowerCase()}
          </span>
        </div>
        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/auth' });
          }}
        >
          <button
            type="submit"
            className="text-xs text-white/80 hover:text-white font-medium transition-colors px-3 py-1.5 rounded-lg hover:bg-white/10"
          >
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
}
