'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center px-6 py-16 text-gray-300 font-space"
      style={{ backgroundImage: "url('/galaxy-bg.jpg')" }}
    >
      {/* 🌠 Hero Section */}
      <section className="text-center mb-20">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ textShadow: "0 0 12px #6b53ffaa" }}
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hey, I'm Husam
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          A 23-year-old Computer Engineering graduate with a love for creating
          modern, powerful web apps using Laravel, React, and Next.js.
        </motion.p>

        <div className="flex justify-center gap-4">
          <Link
            href="https://www.linkedin.com/in/husamalsaket/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-nebula text-white px-6 py-2 rounded hover:bg-glow transition">
              Hire Me
            </button>
          </Link>
          <Link href="/about">
            <button className="border border-glow text-glow px-6 py-2 rounded hover:bg-glow hover:text-black transition">
              About Me
            </button>
          </Link>
        </div>
      </section>

      {/* ✨ Passion Section */}
      <section className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl text-glow font-semibold mb-3">
          Designing Is My Passion
        </h2>
        <p className="text-gray-400">
          As a Computer Engineer, I enjoy building clean, modern UI and
          user-friendly experiences. Every project I work on is fueled by
          creativity and a deep understanding of how things work.
        </p>
        <div className="mt-4 space-y-2">
          <a
            href="/cv.pdf"
            download
            className="text-sm text-glow underline hover:text-white block"
          >
            Download My CV →
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-glow underline hover:text-white block"
          >
            View My CV →
          </a>
        </div>
      </section>

      {/* 🔧 Services */}
      <section className="mb-20 max-w-6xl mx-auto">
        <h2 className="text-2xl text-glow font-semibold text-center mb-10">
          What I Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              className="bg-black bg-opacity-40 p-6 rounded-xl border border-nebula hover:shadow-glow transition"
            >
              <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 Skills Bar */}
      <section className="mb-20 max-w-3xl mx-auto">
        <h2 className="text-2xl text-glow font-semibold text-center mb-8">
          Skills Overview
        </h2>
        {[
          { name: "Laravel", level: "90%" },
          { name: "React", level: "75%" },
          { name: "Next.js", level: "50%" },
          { name: "TypeScript", level: "40%" },
        ].map(({ name, level }) => (
          <div key={name} className="mb-4">
            <div className="flex justify-between mb-1">
              <span>{name}</span>
              <span>{level}</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3">
              <div
                className="bg-glow h-3 rounded-full"
                style={{ width: level }}
              ></div>
            </div>
          </div>
        ))}
      </section>

      {/* 🛸 Final CTA */}
      <section className="text-center">
        <h2 className="text-xl text-white font-semibold mb-3">
          Have a project in mind?
        </h2>
        <p className="text-gray-400 mb-4">
          Let’s build something awesome together.
        </p>
        <Link href="/contact">
          <button className="bg-glow text-black px-6 py-2 rounded hover:brightness-110 transition">
            Let's Chat
          </button>
        </Link>
      </section>
    </main>
  );
}
