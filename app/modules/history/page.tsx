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
  {
    title: 'Food and Nutrition',
    icon: '🥗',
    description: 'Exploring food culture, health, and nutrition across the diaspora',
    topics: [
      'Caribbean Food Heritage',
      'African Food Traditions',
      'Healthy Eating',
      'Food and Identity',
    ],
    status: 'coming-soon',
    href: '/modules/history',
    color: 'from-emerald-500 to-lime-600',
  },
  {
    title: 'Caribbean and African Music',
    icon: '🎶',
    description: 'Tracing musical roots, genres, and cultural influence',
    topics: [
      'Traditional Rhythms',
      'Reggae & Dancehall',
      'Afrobeats & Highlife',
      'Music and Resistance',
    ],
    status: 'coming-soon',
    href: '/modules/history',
    color: 'from-fuchsia-500 to-rose-600',
  },
];

export default function HistoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      <Link href="/" className="button-secondary mb-6">
        ← Back to Cronx Academy
      </Link>

      <div className="hero-panel mb-8 rounded-[2rem] p-10">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">📚</div>
          <h1 className="display-title mb-4 text-5xl text-white">History Quest</h1>
          <p className="text-xl text-slate-300">
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
              className={`paper-card overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl ${
                isComingSoon ? 'opacity-75' : ''
              }`}
            >
              <div className={`bg-linear-to-r ${module.color} p-6 text-white`}>
                <div className="text-4xl mb-2">{module.icon}</div>
                <h2 className="text-2xl font-bold">{module.title}</h2>
                {isComingSoon && (
                  <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-sm">
                    Coming Soon
                  </span>
                )}
              </div>
              <div className="p-6">
                <p className="mb-4 text-[var(--text-soft-dark)]">{module.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {module.topics.map((topic, topicIdx) => (
                    <span
                      key={topicIdx}
                      className="rounded-full bg-[rgba(0,0,0,0.04)] px-3 py-1 text-sm text-[var(--text-soft-dark)]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                {!isComingSoon ? (
                  <Link href={module.href} className="button-primary flex w-full">
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
      <div className="paper-card border-l-[5px] border-pink-500 p-8">
        <h2 className="display-title mb-4 text-3xl text-[var(--text-dark)]">
          📜 Original History Quest
        </h2>
        <p className="mb-4 text-[var(--text-soft-dark)]">
          Access the original comprehensive history module with all topics while we continue
          building out the interactive Next.js versions.
        </p>
        <a href="/old-html/history-quest-fixed.html" target="_blank" className="button-primary">
          View Original History Quest Module
        </a>
      </div>
    </div>
  );
}
