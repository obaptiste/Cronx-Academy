import ModuleCard from '@/components/ui/ModuleCard';
import { modules } from '@/lib/data/modules';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      {/* Header */}
      <header className="bg-white p-8 rounded-3xl shadow-xl mb-8 border-[3px] border-indigo-500">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-3 text-center">
          🌷 Cronx Academy
        </h1>
        <p className="text-xl text-purple-700 mb-4 text-center">
          Sheena&apos;s Homeschool Teaching Guide for Thalia (Age 14, Croydon)
        </p>
        <p className="text-gray-600 italic text-center">Learning together, growing together 💛</p>
      </header>

      {/* Quick Navigation */}
      <nav className="flex flex-wrap gap-4 justify-center mb-8">
        <a
          href="#modules"
          className="bg-white border-[3px] border-indigo-600 px-6 py-3 rounded-full font-bold text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          📚 Interactive Modules
        </a>
        <a
          href="#guide"
          className="bg-white border-[3px] border-indigo-600 px-6 py-3 rounded-full font-bold text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          📖 Teaching Guide
        </a>
        <a
          href="#resources"
          className="bg-white border-[3px] border-indigo-600 px-6 py-3 rounded-full font-bold text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          🔗 Resources
        </a>
        <a
          href="/progress"
          className="bg-indigo-600 border-[3px] border-indigo-600 px-6 py-3 rounded-full font-bold text-white hover:bg-indigo-700 transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          📊 Progress Dashboard
        </a>
      </nav>

      {/* Interactive Modules Section */}
      <section id="modules" className="bg-white p-10 rounded-3xl shadow-xl mb-8">
        <h2 className="text-4xl font-bold text-indigo-600 mb-6 text-center">
          🎯 Interactive Learning Modules
        </h2>
        <p className="text-center mb-8 text-gray-600 text-lg">
          Click any module below to start learning!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </section>

      {/* Teaching Guide Section */}
      <section id="guide" className="bg-white p-10 rounded-3xl shadow-xl mb-8">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">🧭 Teaching Guide for Sheena</h2>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border-l-[5px] border-blue-400 mb-6">
          <p className="text-gray-700 leading-relaxed">
            <strong>💛 Welcome & Encouragement:</strong> Dear Sheena, you don&apos;t need to be a
            professional teacher — just patient, curious, and willing to learn alongside Thalia.
            This guide helps you turn each day into an opportunity for connection and growth.
            Perfection isn&apos;t the goal; joy and progress are.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-purple-700 mt-6 mb-4">
          🌼 Your Role as a Home Educator
        </h3>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>
              📚 Provide full-time, suitable education (no need to follow the national curriculum)
            </span>
          </li>
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>🕰️ Keep a gentle 9–4 structure with movement and breaks</span>
          </li>
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>🌼 Encourage questions, choice, and creativity</span>
          </li>
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>💬 Flex when needed — interest-led detours are powerful</span>
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-purple-700 mt-6 mb-4">📚 Curriculum Overview</h3>
        <p className="font-bold text-gray-800 mb-2">Core Subjects:</p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>English – reading, writing, analysis</span>
          </li>
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>Maths – algebra, geometry, statistics</span>
          </li>
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>Science – biology, chemistry, physics</span>
          </li>
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>Language – French/Spanish daily practice</span>
          </li>
        </ul>

        <p className="font-bold text-gray-800 mb-2">Creative, Digital & Life Skills:</p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>Computing & digital citizenship</span>
          </li>
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>Art, design & media</span>
          </li>
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>PSHE, wellbeing & physical activity</span>
          </li>
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>Community projects & volunteering</span>
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-purple-700 mt-6 mb-4">
          🌞 Daily Routine (9:00 – 16:00)
        </h3>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>9:00–9:30 Check-in, stretch, plan the day</span>
          </li>
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>9:30–11:00 Main focus (English/Maths)</span>
          </li>
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>11:00–11:30 Break / snack / quick walk</span>
          </li>
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>11:30–13:00 Second focus (Science/Computing)</span>
          </li>
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>13:00–14:00 Lunch & reset</span>
          </li>
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>14:00–15:00 Creative / Practical (Art, Music, PSHE)</span>
          </li>
          <li className="flex items-start text-gray-700">
            <span className="text-indigo-600 font-bold mr-3">•</span>
            <span>15:00–16:00 Reflection, journalling, or community task</span>
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-purple-700 mt-6 mb-4">🪄 Subject-by-Subject Tips</h3>

        <div className="space-y-4">
          <div>
            <p className="font-bold text-gray-800 mb-2">English Language & Literature:</p>
            <p className="text-gray-700">
              Read widely; discuss themes & characters; keep a reading journal; write short reviews.
              Rotate: one week creative writing, next week non-fiction/essay. Use the History Quest
              stories as reading material!
            </p>
          </div>

          <div>
            <p className="font-bold text-gray-800 mb-2">Mathematics:</p>
            <p className="text-gray-700">
              Use real-life problems: cooking ratios, home budgeting, map scales. Short daily
              practice beats long cramming. Mix videos + problems + talk-throughs.
            </p>
          </div>

          <div>
            <p className="font-bold text-gray-800 mb-2">Science:</p>
            <p className="text-gray-700">
              Home experiments + virtual labs (e.g., PhET). Keep a lab log: question → method →
              result → what we learned. Visit museums when you can.
            </p>
          </div>

          <div>
            <p className="font-bold text-gray-800 mb-2">Languages:</p>
            <p className="text-gray-700">
              Daily 10 minutes of vocab + 10 minutes speaking/listening. Label objects at home.
              Watch short videos with subtitles; write tiny dialogues.
            </p>
          </div>

          <div>
            <p className="font-bold text-gray-800 mb-2">Computing & Digital Skills:</p>
            <p className="text-gray-700">
              Create a simple website or blog. Discuss online safety & digital footprints. Try a
              coding project (Scratch/Python) with a clear, fun goal.
            </p>
          </div>

          <div>
            <p className="font-bold text-gray-800 mb-2">Art, Design & Media:</p>
            <p className="text-gray-700">
              Keep a sketchbook. Explore photography walks. Try upcycling or poster design. Share
              finished pieces in a portfolio folder.
            </p>
          </div>

          <div>
            <p className="font-bold text-gray-800 mb-2">PSHE & Wellbeing:</p>
            <p className="text-gray-700">
              Weekly check-in: mood, stress, wins. Practise mindfulness/light exercise. Cook
              together; talk about healthy habits & friendships. Use Whisper Garden for gentle
              confidence building.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="bg-white p-10 rounded-3xl shadow-xl mb-8">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">🔗 Helpful Resources</h2>
        <p className="text-gray-700 mb-6">External links to support your homeschooling journey:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <a
            href="https://www.gov.uk/home-education"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-6 py-4 rounded-2xl text-center font-bold hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            GOV.UK Home Education
          </a>
          <a
            href="https://www.croydon.gov.uk/schools-and-education/parents/educating-your-child-home"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-6 py-4 rounded-2xl text-center font-bold hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            Croydon Council
          </a>
          <a
            href="https://classroom.thenational.academy/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-6 py-4 rounded-2xl text-center font-bold hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            Oak National Academy
          </a>
          <a
            href="https://www.bbc.co.uk/bitesize"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-6 py-4 rounded-2xl text-center font-bold hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            BBC Bitesize
          </a>
          <a
            href="https://www.bankofengland.co.uk/education/education-resources"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-6 py-4 rounded-2xl text-center font-bold hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            Financial Education
          </a>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border-l-[5px] border-blue-400">
          <p className="text-gray-700">
            <strong>🏛️ Local Cultural Resources:</strong>
            <br />
            Museum of Croydon, Historic Croydon Airport, and Croydon libraries offer great learning
            opportunities for history and community engagement.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-white py-8">
        <p className="text-sm">
          🌸 Curriculum design and materials compiled by Oris John-Baptiste, 2025
        </p>
        <p className="text-xs mt-2">Built with love for Thalia&apos;s learning journey 💛</p>
      </footer>
    </div>
  );
}
