"use client";



import { motion } from "framer-motion";
import HeroCanvas from "../components/HeroCanvas";
import Image from "next/image";

export default function About() {
  return (

    <main
      className="min-h-screen px-4 md:px-8 py-8 text-gray-200 font-space relative overflow-x-hidden"
      style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}
    >
      {/* Full-page animated star galaxy background */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <HeroCanvas />
      </div>

      {/* Header with profile picture */}
      <section className="relative flex flex-col items-center justify-center gap-6 mb-16 max-w-4xl mx-auto py-8 md:py-12 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-2"
        >
          <Image
            src="/me.JPG"
            alt="Husam profile"
            width={208}
            height={208}
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-[#a259ff] shadow-lg mx-auto"
            style={{ boxShadow: '0 0 32px 0 #a259ff55, 0 2px 16px 0 #000a' }}
            priority
          />
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-2 text-[#a259ff] font-[Orbitron,sans-serif] tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>
        <motion.div
          className="text-lg md:text-xl text-gray-300 max-w-2xl text-center font-medium space-y-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p>
            Hey, I’m <span className="text-[#a259ff] font-semibold">Husam</span> — a Full Stack Developer & Computer Engineer passionate about clean code, smooth UX, and solving real-world problems with tech.
          </p>
        </motion.div>
      </section>

      {/* Skills, Soft Skills, Experience - creative, no boxes, galaxy theme accents */}
      <section className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 mb-16 z-10">
        {/* Skills List */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#a259ff] font-[Orbitron,sans-serif]">What I Work With</h2>
          <ul className="space-y-2 text-base md:text-lg">
            <li><span className="text-[#a259ff] font-medium">Frontend:</span> HTML, CSS, Bootstrap, JavaScript, React, Next.js, TypeScript</li>
            <li><span className="text-[#a259ff] font-medium">Backend:</span> PHP, Laravel</li>
            <li><span className="text-[#a259ff] font-medium">Database:</span> MySQL</li>
            <li><span className="text-[#a259ff] font-medium">Tools:</span> VS Code, GitHub, Figma, Trello</li>
            <li><span className="text-[#a259ff] font-medium">Workflow:</span> Agile, Scrum</li>
            <li><span className="text-[#a259ff] font-medium">OS:</span> Windows</li>
          </ul>
        </div>
        {/* Soft Skills */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#a259ff] font-[Orbitron,sans-serif]">How I Work</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-base md:text-lg pl-2">
            <li>Problem-Solving & Critical Thinking</li>
            <li>Attention to Detail</li>
            <li>Team Collaboration & Adaptability</li>
            <li>Creative UI/UX Thinking</li>
          </ul>
        </div>
      </section>

      {/* Experience Timeline - creative, galaxy accent bar */}
      <section className="max-w-3xl mx-auto mb-10 z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#a259ff] font-[Orbitron,sans-serif] text-center">Where I’ve Been</h2>
        <div className="relative pl-6 md:pl-12">
          {/* Timeline vertical bar */}
          <div className="absolute left-2 md:left-5 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-[#a259ff] via-[#6b53ff] to-transparent opacity-60" style={{zIndex:0}}></div>
          <ul className="space-y-10">
            <li className="relative z-10">
              <div className="absolute -left-3 md:-left-6 top-2 w-5 h-5 rounded-full bg-[#a259ff] border-4 border-white/20 shadow-lg" />
              <div className="ml-6 md:ml-12">
                <strong className="text-white">EqraTech (Mar 2025 – Present)</strong><br />
                <span className="text-gray-300">Working on a Quranic linguistic platform with Laravel. Built logic to handle grammar, semantics, and future AI speech recognition.</span>
              </div>
            </li>
            <li className="relative z-10">
              <div className="absolute -left-3 md:-left-6 top-2 w-5 h-5 rounded-full bg-[#a259ff] border-4 border-white/20 shadow-lg" />
              <div className="ml-6 md:ml-12">
                <strong className="text-white">Tourstify (Jan 2025 – Mar 2025)</strong><br />
                <span className="text-gray-300">Developed backend/admin dashboards using PHP and JavaScript. Integrated APIs, tested with Postman, and improved scalability.</span>
              </div>
            </li>
            <li className="relative z-10">
              <div className="absolute -left-3 md:-left-6 top-2 w-5 h-5 rounded-full bg-[#a259ff] border-4 border-white/20 shadow-lg" />
              <div className="ml-6 md:ml-12">
                <strong className="text-white">Orange Coding Academy (Aug 2024 – Dec 2024)</strong><br />
                <span className="text-gray-300">Full-stack training in React, Laravel, version control, and agile development. Built several projects and improved system-level comfort.</span>
              </div>
            </li>
            <li className="relative z-10">
              <div className="absolute -left-3 md:-left-6 top-2 w-5 h-5 rounded-full bg-[#a259ff] border-4 border-white/20 shadow-lg" />
              <div className="ml-6 md:ml-12">
                <strong className="text-white">Orange Core Network (Oct 2023 – Feb 2024)</strong><br />
                <span className="text-gray-300">Interned on network core infrastructure. Optimized GPRS traffic, session routing, and internet service performance.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
