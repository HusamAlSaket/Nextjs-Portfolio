"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroCanvas from "./components/HeroCanvas";

export default function Home() {
  return (
    <main
      className="min-h-screen px-4 md:px-8 py-8 text-gray-200 font-space relative overflow-x-hidden"
      style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}
    >
      {/* Full-page animated star galaxy background */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
        <HeroCanvas />
      </div>
      {/* 🌠 Hero Section - Minimal, clean, and modern approach */}
      <section className="relative flex flex-col md:flex-row items-center justify-center gap-10 mb-20 max-w-5xl mx-auto py-8 md:py-16 overflow-visible z-10">
        {/* HeroCanvas as a full-section animated background */}
        {/* HeroCanvas as a circular, bordered, left-side element */}
        <div className="w-full md:w-[340px] h-[220px] md:h-[340px] flex-shrink-0 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full border-4 border-glow/70 shadow-2xl" style={{boxShadow:'0 0 80px 20px #6b53ff55'}}></div>
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <HeroCanvas />
            </div>
          </div>
        </div>
        {/* Text content on the right, less glow, more clarity, with z-10 to appear above background */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4 text-glow tracking-tight font-[Orbitron,sans-serif]"
            style={{ textShadow: "0 2px 24px #a259ff, 0 0 48px #6b53ff" }}
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hey, I'm Husam
          </motion.h1>

          <motion.p
            className="text-base md:text-xl text-gray-300 max-w-xl mb-8 font-medium"
            style={{ textShadow: "0 2px 12px #a259ff55" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            A 23-year-old Computer Engineering graduate with a love for creating modern, powerful web apps using{' '}
            <span className="text-[#a259ff] font-semibold">Laravel</span>,{' '}
            <span className="text-[#a259ff] font-semibold">React</span>, and{' '}
            <span className="text-[#a259ff] font-semibold">Next.js</span>.
          </motion.p>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://www.linkedin.com/in/husamalsaket/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-transparent text-white font-bold px-8 py-3 rounded-2xl shadow-lg hover:bg-[#a259ff] hover:text-white transition text-lg border-2 border-[#a259ff] focus-visible:ring-2 focus-visible:ring-[#a259ff] focus-visible:outline-none">
                Hire Me
              </button>
            </a>
            <Link href="/about">
              <button className="border border-[#a259ff]/60 text-white px-8 py-3 rounded-2xl hover:bg-[#a259ff] hover:text-white shadow-lg transition text-lg font-bold">
                About Me
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ✨ Passion Section - Modern Glassmorphic Floating Card (smaller, less border, no glow) */}
      <section
        className="relative text-center max-w-4xl mx-auto mb-12 px-0 md:px-8"
        style={{ zIndex: 20 }}
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.18 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-[#181a23]/70 border border-[#a259ff]/10 shadow-lg backdrop-blur-xl px-16 md:px-32 py-4 flex flex-col items-center gap-5"
          style={{
            boxShadow: '0 4px 32px 0 #a259ff22, 0 2px 16px 0 #000a',
            border: '1px solid #a259ff22',
            background: 'linear-gradient(120deg, #181a23cc 70%, #2a1a3a99 100%)',
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-1 font-[Orbitron,sans-serif] tracking-tight text-white">
            Designing Is My Passion
          </h2>
          <p className="text-gray-200 text-base md:text-lg mb-1 max-w-xl">
            As a Computer Engineer, I enjoy building clean, modern UI and user-friendly experiences.<br className="hidden md:inline" /> Every project I work on is fueled by creativity and a deep understanding of how things work.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#a259ff]/10 border border-[#a259ff]/40 text-white font-semibold shadow hover:bg-[#a259ff]/20 hover:scale-105 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#a259ff] focus-visible:outline-none"
              style={{backdropFilter:'blur(6px)'}}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="inline-block"><path d="M10 2v12m0 0l-4-4m4 4l4-4" stroke="#a259ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="16" width="14" height="2" rx="1" fill="#a259ff"/></svg>
              Download CV
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#a259ff]/10 border border-[#a259ff]/40 text-white font-semibold shadow hover:bg-[#a259ff]/20 hover:scale-105 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#a259ff] focus-visible:outline-none"
              style={{backdropFilter:'blur(6px)'}}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="inline-block"><path d="M5 12V7a2 2 0 012-2h6a2 2 0 012 2v5m-7 4h6m-3-4v4" stroke="#a259ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              View CV
            </a>
          </div>
        </motion.div>
      </section>

      {/* 🔧 Services */}
      <section className="mb-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-glow drop-shadow-lg font-[Orbitron,sans-serif]">
          What I Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              desc: "I create professional, high-performance web platforms with modern tools and best practices.",
            },
            {
              title: "Frontend Development",
              desc: "I build responsive, accessible UIs with React, Next.js, and Tailwind — clean design, smooth UX.",
            },
            {
              title: "Backend Development",
              desc: "Secure & scalable backend APIs using Laravel & PHP. Clean architecture and robust databases.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="bg-[#181a23]/80 border border-[#6b53ff]/40 rounded-xl p-6 shadow-lg hover:shadow-glow transition duration-300 text-left backdrop-blur-md"
            >
              <h3 className="text-glow text-xl font-bold mb-2 drop-shadow-lg font-[Orbitron,sans-serif]">{title}</h3>
              <p className="text-gray-300 text-base">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 Skills Bar */}
      <section className="mb-20 max-w-3xl mx-auto rounded-3xl p-10 shadow-lg border border-[#6b53ff]/40 bg-[#181a23]/80 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-glow drop-shadow-lg font-[Orbitron,sans-serif]">
          Skills Overview
        </h2>
        {[
          { name: "Laravel", level: "90%" },
          { name: "React", level: "75%" },
          { name: "Next.js", level: "50%" },
          { name: "TypeScript", level: "40%" },
        ].map(({ name, level }) => (
          <div key={name} className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-[#a259ff] font-semibold font-[Orbitron,sans-serif] text-lg">{name}</span>
              <span className="text-[#a259ff] font-bold text-lg drop-shadow">{level}</span>
            </div>
            <div className="w-full bg-[#23243a]/70 rounded-full h-5 border border-[#a259ff]/60 shadow-inner overflow-hidden">
              <div
                className="h-5 rounded-full transition-all duration-700"
                style={{
                  width: level,
                  background: "linear-gradient(90deg, #a259ff 0%, #6b53ff 100%)",
                  boxShadow: "0 0 16px 2px #a259ff55, 0 2px 12px 0 #6b53ff55 inset"
                }}
              ></div>
            </div>
          </div>
        ))}
      </section>

      {/* 🛸 Final CTA */}
      <section className="text-center mb-10">
        <h2 className="text-2xl font-bold mb-3 text-glow drop-shadow-lg font-[Orbitron,sans-serif]">
          Have a project in mind?
        </h2>
        <p className="text-star mb-6 text-lg">
          Let’s build something awesome together.
        </p>
        <Link href="/contact">
          <button className="bg-transparent text-white font-bold px-8 py-3 rounded-2xl shadow-lg hover:bg-[#a259ff] hover:text-white transition text-lg border border-[#a259ff]/60">
            Let's Chat
          </button>
        </Link>
      </section>
    </main>
  );
}
