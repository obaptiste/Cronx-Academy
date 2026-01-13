import Link from 'next/link';

export const metadata = {
  title: 'Understanding the Orishas - Cronx Academy',
  description: 'Deep dive into African and Caribbean spiritual traditions',
};

export default function OrishasPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-white text-indigo-600 border-2 border-indigo-600 px-5 py-3 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all hover:-translate-y-1 mb-6"
      >
        ← Back to Cronx Academy
      </Link>

      <div className="bg-white p-10 rounded-3xl shadow-xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">✨</div>
          <h1 className="text-5xl font-bold text-indigo-600 mb-4">Understanding the Orishas</h1>
          <p className="text-xl text-gray-600">
            Deep dive into African and Caribbean spiritual traditions
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-2xl border-l-[5px] border-purple-500 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🚧 Module In Development</h2>
          <p className="text-gray-700 mb-4">
            This cultural education module is currently being refactored into the new Next.js
            architecture. It will include:
          </p>
          <ul className="space-y-2">
            {[
              'Meet 6 major Orishas in detail',
              'Learn about sacred practices',
              'Compare global spiritual systems',
              'Beautiful interactive profiles',
              'Cultural understanding & respect'
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <span className="text-green-500 font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            For now, you can access the original version:
          </p>
          <a
            href="/old-html/orishas-learning-module.html"
            target="_blank"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            View Original Orishas Module
          </a>
        </div>
      </div>
    </div>
  );
}
