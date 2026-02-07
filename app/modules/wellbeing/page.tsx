import Link from 'next/link';

export const metadata = {
  title: 'Whisper Garden - Cronx Academy',
  description: 'Gentle voice therapy for children with selective mutism',
};

export default function WellbeingPage() {
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
          <div className="text-7xl mb-4">🌈</div>
          <h1 className="text-5xl font-bold text-indigo-600 mb-4">Whisper Garden</h1>
          <p className="text-xl text-gray-600">
            Gentle voice therapy for children with selective mutism
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl border-l-[5px] border-green-500 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🚧 Module In Development</h2>
          <p className="text-gray-700 mb-4">
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
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <span className="text-green-500 font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">For now, you can access the original version:</p>
          <a
            href="/old-html/voice-therapy-app.html"
            target="_blank"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            View Original Whisper Garden Module
          </a>
        </div>
      </div>
    </div>
  );
}
