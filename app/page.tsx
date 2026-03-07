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
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="text-center space-y-4">
          <p className="uppercase tracking-[0.25em] text-cyan-300 text-sm">Cronx Academy presents</p>
          <h1 className="text-5xl font-bold">AquaCore Academy</h1>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Professional, engaging pool maintenance training with 12 complete modules, interactive quizzes, UK compliance references, and completion certification.
          </p>
          <div className="flex justify-center gap-3">
            <Link href="/login" className="px-5 py-2 rounded-lg bg-cyan-400 text-slate-950 font-semibold">Sign in to continue</Link>
            <a href="#curriculum" className="px-5 py-2 rounded-lg border border-slate-700">Preview curriculum</a>
          </div>
        </header>

        <section id="curriculum" className="grid md:grid-cols-2 gap-4">
          {poolModules.map((module, idx) => (
            <article key={module.id} className="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <p className="text-xs text-cyan-300 mb-1">Module {idx + 1}</p>
              <h2 className="font-semibold">{module.title}</h2>
              <p className="text-sm text-slate-400 mt-1">{module.objective}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
