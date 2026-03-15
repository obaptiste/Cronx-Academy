import Link from 'next/link';

export const metadata = {
  title: 'Understanding the Orishas - Cronx Academy',
  description: 'Deep dive into African and Caribbean spiritual traditions',
};

export default function OrishasPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      <Link href="/" className="button-secondary mb-6">
        ← Back to Cronx Academy
      </Link>

      <div className="paper-card p-10">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">✨</div>
          <h1 className="display-title mb-4 text-5xl text-[var(--text-dark)]">
            Understanding the Orishas
          </h1>
          <p className="text-xl text-[var(--text-soft-dark)]">
            Deep dive into African and Caribbean spiritual traditions
          </p>
        </div>

        <div className="mb-8 rounded-[1.5rem] border-l-[5px] border-purple-500 bg-[linear-gradient(135deg,rgba(216,180,254,0.28),rgba(255,255,255,0.7))] p-8">
          <h2 className="mb-4 text-2xl font-bold text-[var(--text-dark)]">
            🚧 Module In Development
          </h2>
          <p className="mb-4 text-[var(--text-soft-dark)]">
            This cultural education module is currently being refactored into the new Next.js
            architecture. It will include:
          </p>
          <ul className="space-y-2">
            {[
              'Meet 6 major Orishas in detail',
              'Learn about sacred practices',
              'Compare global spiritual systems',
              'Beautiful interactive profiles',
              'Cultural understanding & respect',
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[var(--text-soft-dark)]">
                <span className="text-green-500 font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <p className="mb-4 text-[var(--text-soft-dark)]">
            For now, you can access the original version:
          </p>
          <a
            href="/old-html/orishas-learning-module.html"
            target="_blank"
            className="button-primary"
          >
            View Original Orishas Module
          </a>
        </div>
      </div>
    </div>
  );
}
