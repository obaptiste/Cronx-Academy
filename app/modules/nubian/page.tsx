import Link from 'next/link';

export const metadata = {
  title: 'Nubian Warrior Queens - Cronx Academy',
  description: 'Introduction to the Kingdom of Kush and the Kandake warrior queens',
};

export default function NubianPage() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-8">
      <Link
        href="/modules/history"
        className="inline-flex items-center gap-2 bg-white text-amber-600 border-2 border-amber-600 px-5 py-3 rounded-xl font-semibold hover:bg-amber-600 hover:text-white transition-all hover:-translate-y-1 mb-6"
      >
        ← Back to History Quest
      </Link>

      <div className="bg-white p-8 rounded-3xl shadow-xl border-[3px] border-amber-500">
        <div className="text-5xl mb-4">⚔️</div>
        <h1 className="text-4xl font-bold text-amber-600 mb-3">Nubian Warrior Queens</h1>
        <p className="text-gray-700 mb-6">
          Explore the Kingdom of Kush, the Kandake title, and the leadership of Queen Amanirenas.
          This module introduces an often-overlooked chapter of African history centered on
          strategy, sovereignty, and legacy.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200">
            <h2 className="font-bold text-amber-900 mb-2">Core Topics</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Kingdom of Kush and Nile trade networks</li>
              <li>• Kandake warrior queens and statecraft</li>
              <li>• Amanirenas and conflict with Rome</li>
              <li>• Nubian legacy in global history</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-4 rounded-2xl border border-orange-200">
            <h2 className="font-bold text-orange-900 mb-2">Suggested Activity</h2>
            <p className="text-gray-700">
              Build a timeline from c. 800 BCE to c. 350 CE and annotate key moments in Kushite
              political power, military resistance, and cultural achievement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
