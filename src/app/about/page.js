'use client'

export default function About() {
  return (
    <main className="min-h-screen bg-galaxy px-6 py-12 text-gray-300 font-space max-w-4xl mx-auto">
      <h1
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
        style={{ textShadow: '0 0 8px #6b53ffcc' }}
      >
        About Me
      </h1>

      {/* 🌌 Introduction */}
      <section className="mb-12 text-center text-lg md:text-xl leading-relaxed">
        <p className="mb-4">
          Hey, I’m <span className="text-glow font-semibold">Husam</span> — a Full Stack Developer & Computer Engineer
          passionate about clean code, smooth UX, and solving real-world problems with tech.
        </p>
        <p>
          I work mostly with <span className="text-glow font-semibold">Laravel</span>, <span className="text-glow font-semibold">React</span>, and <span className="text-glow font-semibold">Next.js</span>,
          but I love picking up new tools and exploring what’s possible across the stack.
        </p>
      </section>

      {/* 🛠 Skills Summary */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4 text-glow">What I Work With</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-400">
          <div><span className="text-white font-medium">Frontend:</span> HTML, CSS, Bootstrap, JavaScript, React, Next.js, TypeScript</div>
          <div><span className="text-white font-medium">Backend:</span> PHP, Laravel</div>
          <div><span className="text-white font-medium">Database:</span> MySQL</div>
          <div><span className="text-white font-medium">Tools:</span> VS Code, GitHub, Figma, Trello</div>
          <div><span className="text-white font-medium">Workflow:</span> Agile, Scrum</div>
          <div><span className="text-white font-medium">OS:</span> Windows</div>
        </div>
      </section>

      {/* 🧠 Soft Skills */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4 text-glow">How I Work</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          I thrive in collaborative environments where problem-solving, adaptability, and clear communication are key. Whether I’m working solo or with a team, I focus on details, user experience, and clean code.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400 text-sm">
          <li>Problem-Solving & Critical Thinking</li>
          <li>Attention to Detail</li>
          <li>Team Collaboration & Adaptability</li>
          <li>Creative UI/UX Thinking</li>
        </ul>
      </section>

      {/* 💼 Experience */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-glow">Where I’ve Been</h2>
        <ul className="space-y-6 text-sm text-gray-400 leading-relaxed">
          <li>
            <strong className="text-white">EqraTech (Mar 2025 – Present)</strong><br />
            Working on a Quranic linguistic platform with Laravel. Built logic to handle grammar, semantics, and future AI speech recognition.
          </li>
          <li>
            <strong className="text-white">Tourstify (Jan 2025 – Mar 2025)</strong><br />
            Developed backend/admin dashboards using PHP and JavaScript. Integrated APIs, tested with Postman, and improved scalability.
          </li>
          <li>
            <strong className="text-white">Orange Coding Academy (Aug 2024 – Dec 2024)</strong><br />
            Full-stack training in React, Laravel, version control, and agile development. Built several projects and improved system-level comfort.
          </li>
          <li>
            <strong className="text-white">Orange Core Network (Oct 2023 – Feb 2024)</strong><br />
            Interned on network core infrastructure. Optimized GPRS traffic, session routing, and internet service performance.
          </li>
        </ul>
      </section>
    </main>
  )
}
