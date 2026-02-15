import Link from 'next/link';

export const metadata = {
  title: 'History Quest - Cronx Academy',
  description: 'Interactive journey through Caribbean and world history',
};

type HistoryModule = {
  title: string;
  icon: string;
  description: string;
  topics: string[];
  status: 'ready' | 'coming-soon';
  href: string;
  color: string;
};

const historyModules: HistoryModule[] = [
  {
    title: 'World War II',
    icon: '🌍',
    description: 'An interactive journey through 1939-1945',
    topics: [
      'Causes & Origins',
      'Major Battles',
      'The Home Front',
      'Holocaust & Remembrance',
      'Legacy',
    ],
    status: 'ready',
    href: '/modules/ww2',
    color: 'from-red-500 to-pink-600',
  },
  {
    title: 'Tudor England & Caribbean',
    icon: '👑',
    description: 'Explore the Tudor era and its connection to Caribbean colonization',
    topics: ['Henry VIII', 'Elizabeth I', 'Early Exploration', 'Caribbean Settlement'],
    status: 'ready',
    href: '/modules/tudor',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Pirates of the Caribbean',
    icon: '🏴‍☠️',
    description: 'The golden age of piracy in Caribbean waters',
    topics: ['Famous Pirates', 'Life at Sea', 'Trade Routes', 'Naval Battles'],
    status: 'ready',
    href: '/modules/pirates',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Nubian Warrior Queens',
    icon: '⚔️',
    description: 'Powerful women rulers of ancient Nubia',
    topics: ['Queen Amanirenas', 'Kingdom of Kush', 'Military Campaigns', 'Legacy'],
    status: 'ready',
    href: '/modules/nubian',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    title: 'African & Caribbean Spirituality',
    icon: '✨',
    description: 'Understanding cultural and spiritual traditions',
    topics: ['African Roots', 'Caribbean Traditions', 'Syncretism', 'Modern Practice'],
    status: 'ready',
    href: '/modules/spirituality',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    title: 'American Revolution',
    icon: '🗽',
    description: 'The birth of a new nation and its global impact',
    topics: ['Causes', 'Key Battles', 'Key Figures', 'Legacy & Impact'],
    status: 'ready',
    href: '/modules/revolution',
    color: 'from-blue-500 to-indigo-600',
  },
];

export default function HistoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-white text-indigo-600 border-2 border-indigo-600 px-5 py-3 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all hover:-translate-y-1 mb-6"
      >
        ← Back to Cronx Academy
      </Link>

      <div className="bg-white p-10 rounded-3xl shadow-xl mb-8">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">📚</div>
          <h1 className="text-5xl font-bold text-pink-600 mb-4">History Quest</h1>
          <p className="text-xl text-gray-600">
            Interactive journey through Caribbean and world history
          </p>
        </div>
      </div>

      {/* History Modules Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {historyModules.map((module, idx) => {
          const isComingSoon = module.status !== 'ready';

          return (
            <div
              key={idx}
              className={`bg-white rounded-3xl shadow-lg overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl ${
                isComingSoon ? 'opacity-75' : ''
              }`}
            >
              <div className={`bg-gradient-to-r ${module.color} p-6 text-white`}>
                <div className="text-4xl mb-2">{module.icon}</div>
                <h2 className="text-2xl font-bold">{module.title}</h2>
                {isComingSoon && (
                  <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-sm">
                    Coming Soon
                  </span>
                )}
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{module.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {module.topics.map((topic, topicIdx) => (
                    <span
                      key={topicIdx}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                {!isComingSoon ? (
                  <Link
                    href={module.href}
                    className="block w-full text-center bg-pink-600 text-white py-3 rounded-xl font-bold hover:bg-pink-700 transition-all"
                  >
                    Start Learning →
                  </Link>
                ) : (
                  <button
                    disabled
                    className="block w-full text-center bg-gray-300 text-gray-500 py-3 rounded-xl font-bold cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legacy Module Link */}
      <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-8 rounded-3xl border-l-[5px] border-pink-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📜 Original History Quest</h2>
        <p className="text-gray-700 mb-4">
          Access the original comprehensive history module with all topics while we continue
          building out the interactive Next.js versions.
        </p>
        <a
          href="/old-html/history-quest-fixed.html"
          target="_blank"
          className="inline-block bg-pink-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-pink-700 hover:-translate-y-1 hover:shadow-lg transition-all"
        >
          View Original History Quest Module
        </a>
      </div>
    </div>
  );
}
