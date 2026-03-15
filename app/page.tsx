import ModuleCard from '@/components/ui/ModuleCard';
import { modules } from '@/lib/data/modules';

const moduleCategories = [
  {
    id: 'history',
    label: 'History & Culture',
    emoji: '🏛️',
    color: 'from-rose-500 to-pink-600',
    border: 'border-rose-400',
    bg: 'bg-rose-50',
    ids: ['history', 'orishas'],
  },
  {
    id: 'stem',
    label: 'Science & Maths',
    emoji: '🔬',
    color: 'from-blue-500 to-indigo-600',
    border: 'border-blue-400',
    bg: 'bg-blue-50',
    ids: ['maths', 'chemistry', 'physics', 'biology'],
  },
  {
    id: 'literacy',
    label: 'Language & Literacy',
    emoji: '📝',
    color: 'from-emerald-500 to-teal-600',
    border: 'border-emerald-400',
    bg: 'bg-emerald-50',
    ids: ['english', 'etymology'],
  },
  {
    id: 'lifeskills',
    label: 'Life Skills & Wellbeing',
    emoji: '🌱',
    color: 'from-amber-500 to-orange-600',
    border: 'border-amber-400',
    bg: 'bg-amber-50',
    ids: ['financial-literacy', 'food-nutrition', 'wellbeing'],
  },
];

const stats = [
  { value: '11', label: 'Modules' },
  { value: '100+', label: 'Lessons' },
  { value: '4', label: 'Subject Areas' },
  { value: '∞', label: 'Curiosity' },
];

const dailySchedule = [
  { time: '9:00–9:30', activity: 'Check-in, stretch, plan the day' },
  { time: '9:30–11:00', activity: 'Main focus (English / Maths)' },
  { time: '11:00–11:30', activity: 'Break / snack / quick walk' },
  { time: '11:30–13:00', activity: 'Second focus (Science / Computing)' },
  { time: '13:00–14:00', activity: 'Lunch & reset' },
  { time: '14:00–15:00', activity: 'Creative / Practical (Art, Music, PSHE)' },
  { time: '15:00–16:00', activity: 'Reflection, journalling, or community task' },
];

const subjectTips = [
  {
    subject: 'English Language & Literature',
    emoji: '📖',
    tip: 'Read widely; discuss themes & characters; keep a reading journal; write short reviews. Rotate: one week creative writing, next week non-fiction/essay. Use History Quest stories as reading material!',
  },
  {
    subject: 'Mathematics',
    emoji: '🔢',
    tip: 'Use real-life problems: cooking ratios, home budgeting, map scales. Short daily practice beats long cramming. Mix videos + problems + talk-throughs.',
  },
  {
    subject: 'Science',
    emoji: '⚗️',
    tip: 'Home experiments + virtual labs (e.g., PhET). Keep a lab log: question → method → result → what we learned. Visit museums when you can.',
  },
  {
    subject: 'Languages',
    emoji: '🌍',
    tip: 'Daily 10 minutes of vocab + 10 minutes speaking/listening. Label objects at home. Watch short videos with subtitles; write tiny dialogues.',
  },
  {
    subject: 'Computing & Digital Skills',
    emoji: '💻',
    tip: 'Create a simple website or blog. Discuss online safety & digital footprints. Try a coding project (Scratch/Python) with a clear, fun goal.',
  },
  {
    subject: 'Art, Design & Media',
    emoji: '🎨',
    tip: 'Keep a sketchbook. Explore photography walks. Try upcycling or poster design. Share finished pieces in a portfolio folder.',
  },
  {
    subject: 'PSHE & Wellbeing',
    emoji: '🌈',
    tip: 'Weekly check-in: mood, stress, wins. Practise mindfulness/light exercise. Cook together; talk about healthy habits & friendships. Use Whisper Garden for gentle confidence building.',
  },
];

const resources = [
  { label: 'GOV.UK Home Education', href: 'https://www.gov.uk/home-education', emoji: '🏛️' },
  {
    label: 'Croydon Council',
    href: 'https://www.croydon.gov.uk/schools-and-education/parents/educating-your-child-home',
    emoji: '🏙️',
  },
  {
    label: 'Oak National Academy',
    href: 'https://classroom.thenational.academy/',
    emoji: '🌳',
  },
  { label: 'BBC Bitesize', href: 'https://www.bbc.co.uk/bitesize', emoji: '📡' },
  {
    label: 'Financial Education',
    href: 'https://www.bankofengland.co.uk/education/education-resources',
    emoji: '💷',
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 md:py-12">
      {/* ── Hero ── */}
      <header className="hero-panel rounded-[2rem] px-6 py-8 md:px-10 md:py-12">
        <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-6">
            <span className="eyebrow">Curated Homeschool Studio</span>
            <div className="space-y-4">
              <div className="text-5xl md:text-6xl">🌷</div>
              <h1 className="display-title max-w-4xl text-5xl leading-[0.9] text-white md:text-7xl">
                Cronx Academy
              </h1>
              <p className="max-w-2xl text-lg font-semibold text-amber-100 md:text-2xl">
                Sheena&apos;s teaching guide for Thalia, designed as a rich home-learning world
                instead of a pile of worksheets.
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                Age 14, based in Croydon, with a rhythm that blends structure, cultural depth,
                curiosity, and real progress tracking.
              </p>
            </div>

            <a href="#modules" className="button-primary">
              <span>📚</span>
              <span>Explore Modules</span>
            </a>
            <nav className="flex flex-wrap gap-3">
              <a href="#guide" className="button-secondary">
                <span>📖</span>
                <span>Teaching Guide</span>
              </a>
              <a href="#resources" className="button-secondary">
                <span>🔗</span>
                <span>Resources</span>
              </a>
            </nav>
          </div>

          <div className="panel rounded-[1.75rem] p-5 md:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-amber-200/80">
                  Learning Snapshot
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  A calm, beautiful dashboard for planning, exploring, and reflecting.
                </p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-200">
                2026
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="soft-stat">
                  <p className="text-3xl font-extrabold text-white">{s.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-200/85">
                Daily Focus
              </p>
              <div className="mt-3 grid gap-3 text-sm text-slate-200">
                <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                  <span>Morning anchor</span>
                  <span className="text-amber-200">English / Maths</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                  <span>Afternoon arc</span>
                  <span className="text-teal-200">Science / Creative</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Modules by Category ── */}
      <section id="modules" className="scroll-mt-6 space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Learning Worlds</span>
            <h2 className="section-heading display-title mt-4">
              Interactive modules with a point of view
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-300">
            Each subject keeps its own personality while sharing one visual language, so moving
            across the site feels intentional and connected.
          </p>
        </div>

        {moduleCategories.map((cat) => {
          const catModules = modules.filter((m) => cat.ids.includes(m.id));
          if (catModules.length === 0) return null;
          return (
            <div key={cat.id} className="panel rounded-[2rem] p-5 md:p-6">
              {/* Category header */}
              <div className="mb-5 flex items-center gap-3">
                <div
                  className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${cat.color} px-5 py-2 text-sm font-bold text-white shadow-lg`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.label}</span>
                </div>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {catModules.map((module) => (
                  <ModuleCard key={module.id} module={module} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ── Teaching Guide ── */}
      <section id="guide" className="panel-light section-shell scroll-mt-6">
        <span className="eyebrow">Sheena&apos;s Guide</span>
        <h2 className="section-heading-light display-title mt-4 mb-2">
          A grounded rhythm for teaching at home
        </h2>
        <p className="mb-6 text-sm text-[var(--text-soft-dark)]">
          Open each section for practical guidance, structure, and encouragement.
        </p>

        {/* Welcome callout */}
        <div className="mb-6 rounded-[1.75rem] border border-amber-300/50 bg-[linear-gradient(135deg,rgba(226,197,121,0.18),rgba(95,196,182,0.10))] p-5">
          <p className="leading-relaxed text-[var(--text-dark)]">
            <strong className="text-[var(--text-dark)]">💛 Welcome & Encouragement:</strong> Dear
            Sheena, you don&apos;t need to be a professional teacher — just patient, curious, and
            willing to learn alongside Thalia. This guide helps you turn each day into an
            opportunity for connection and growth. Perfection isn&apos;t the goal; joy and progress
            are.
          </p>
        </div>

        <div className="space-y-3">
          {/* Your Role */}
          <details className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-[rgba(255,255,255,0.6)]">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 font-bold text-[var(--text-dark)] transition-colors hover:bg-[rgba(255,255,255,0.8)]">
              <span>🌼 Your Role as a Home Educator</span>
              <span className="text-amber-700 group-open:rotate-180 transition-transform duration-200 text-xl">
                ▾
              </span>
            </summary>
            <div className="px-6 pb-5 pt-1">
              <ul className="space-y-2 text-[var(--text-soft-dark)]">
                {[
                  '📚 Provide full-time, suitable education (no need to follow the national curriculum)',
                  '🕰️ Keep a gentle 9–4 structure with movement and breaks',
                  '🌼 Encourage questions, choice, and creativity',
                  '💬 Flex when needed — interest-led detours are powerful',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 text-amber-700">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </details>

          {/* Curriculum Overview */}
          <details className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-[rgba(255,255,255,0.6)]">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 font-bold text-[var(--text-dark)] transition-colors hover:bg-[rgba(255,255,255,0.8)]">
              <span>📚 Curriculum Overview</span>
              <span className="text-amber-700 group-open:rotate-180 transition-transform duration-200 text-xl">
                ▾
              </span>
            </summary>
            <div className="px-6 pb-5 pt-1 grid md:grid-cols-2 gap-4">
              <div>
                <p className="mb-2 font-bold text-[var(--text-dark)]">Core Subjects:</p>
                <ul className="space-y-1 text-sm text-[var(--text-soft-dark)]">
                  {[
                    'English – reading, writing, analysis',
                    'Maths – algebra, geometry, statistics',
                    'Science – biology, chemistry, physics',
                    'Language – French/Spanish daily practice',
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="text-amber-700">•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 font-bold text-[var(--text-dark)]">
                  Creative, Digital & Life Skills:
                </p>
                <ul className="space-y-1 text-sm text-[var(--text-soft-dark)]">
                  {[
                    'Computing & digital citizenship',
                    'Art, design & media',
                    'PSHE, wellbeing & physical activity',
                    'Community projects & volunteering',
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="text-amber-700">•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>

          {/* Daily Routine */}
          <details className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-[rgba(255,255,255,0.6)]">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 font-bold text-[var(--text-dark)] transition-colors hover:bg-[rgba(255,255,255,0.8)]">
              <span>🌞 Daily Routine (9:00 – 16:00)</span>
              <span className="text-amber-700 group-open:rotate-180 transition-transform duration-200 text-xl">
                ▾
              </span>
            </summary>
            <div className="px-6 pb-5 pt-1">
              <div className="space-y-2">
                {dailySchedule.map((slot, i) => (
                  <div
                    key={slot.time}
                    className={`flex items-center gap-4 rounded-xl px-4 py-3 ${i % 2 === 0 ? 'bg-[rgba(0,0,0,0.04)]' : 'border border-black/10 bg-[rgba(255,255,255,0.8)]'}`}
                  >
                    <span className="w-28 flex-shrink-0 whitespace-nowrap font-mono text-sm font-bold text-amber-800">
                      {slot.time}
                    </span>
                    <span className="text-sm text-[var(--text-soft-dark)]">{slot.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </details>

          {/* Subject Tips */}
          <details className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-[rgba(255,255,255,0.6)]">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 font-bold text-[var(--text-dark)] transition-colors hover:bg-[rgba(255,255,255,0.8)]">
              <span>🪄 Subject-by-Subject Tips</span>
              <span className="text-amber-700 group-open:rotate-180 transition-transform duration-200 text-xl">
                ▾
              </span>
            </summary>
            <div className="px-6 pb-5 pt-2 grid md:grid-cols-2 gap-4">
              {subjectTips.map((tip, index) => (
                <div
                  key={tip.subject}
                  className={`rounded-xl border p-4 ${index % 2 === 0 ? 'border-amber-200 bg-amber-50/60' : 'border-teal-200 bg-teal-50/50'}`}
                >
                  <p className="mb-1 font-bold text-[var(--text-dark)]">
                    {tip.emoji} {tip.subject}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--text-soft-dark)]">{tip.tip}</p>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* ── Resources ── */}
      <section id="resources" className="panel section-shell scroll-mt-6">
        <span className="eyebrow">Resource Library</span>
        <h2 className="section-heading display-title mt-4 mb-2">
          Helpful links for the wider journey
        </h2>
        <p className="mb-6 text-slate-300">
          Reliable external resources to support structure, lesson planning, and local context.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {resources.map((r) => (
            <a
              key={r.label}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-[1.25rem] border border-white/10 bg-[rgba(255,255,255,0.06)] px-5 py-4 font-semibold text-white backdrop-blur-sm hover:-translate-y-1 hover:border-amber-200/40 hover:bg-white/10 hover:shadow-xl"
            >
              <span className="text-2xl">{r.emoji}</span>
              <span>{r.label}</span>
            </a>
          ))}
        </div>

        <div className="rounded-[1.5rem] border border-amber-300/25 bg-[linear-gradient(135deg,rgba(226,197,121,0.14),rgba(239,118,122,0.12))] p-5">
          <p className="text-slate-200">
            <strong className="text-amber-200">🏛️ Local Cultural Resources:</strong>
            <br />
            Museum of Croydon, Historic Croydon Airport, and Croydon libraries offer great learning
            opportunities for history and community engagement.
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="space-y-1 py-6 text-center text-sm text-slate-300">
        <p>🌸 Curriculum design and materials compiled by Oris John-Baptiste, 2025</p>
        <p className="text-xs text-slate-500">
          Built with love for Thalia&apos;s learning journey 💛
        </p>
      </footer>
    </div>
  );
}
