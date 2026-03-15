import Link from 'next/link';

export const metadata = {
  title: 'Whisper Garden - Cronx Academy',
  description: 'Gentle voice therapy for children with selective mutism',
};

export default function WellbeingPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      <Link href="/" className="button-secondary mb-6">
        ← Back to Cronx Academy
      </Link>

      <div className="paper-card p-10">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🌈</div>
          <h1 className="display-title mb-4 text-5xl text-[var(--text-dark)]">Whisper Garden</h1>
          <p className="text-xl text-[var(--text-soft-dark)]">
            Gentle voice therapy for children with selective mutism
          </p>
        </div>

        <div className="mb-8 rounded-[1.5rem] border-l-[5px] border-green-500 bg-[linear-gradient(135deg,rgba(187,247,208,0.36),rgba(255,255,255,0.72))] p-8">
          <h2 className="mb-4 text-2xl font-bold text-[var(--text-dark)]">
            🚧 Module In Development
          </h2>
          <p className="mb-4 text-[var(--text-soft-dark)]">
            This gentle wellbeing module is currently being refactored into the new Next.js
            architecture. It will include:
          </p>
          <ul className="space-y-2">
            {[
              'Breathing exercises',
              'Animal sound practice',
              'Whisper activities',
              'Progress garden & celebrations',
              'No pressure, always optional',
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
          <a href="/old-html/voice-therapy-app.html" target="_blank" className="button-primary">
            View Original Whisper Garden Module
          </a>
        </div>
      </div>
    </div>
  );
}
