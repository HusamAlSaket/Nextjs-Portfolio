
'use client';

import HeroCanvas from "../components/HeroCanvas";
import { useEffect } from 'react';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const fullName = `${form.firstName} ${form.lastName}`.trim();

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email: form.email,
          message: form.message,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Something went wrong.');
      }

      setSubmitted(true);
      setForm({ firstName: '', lastName: '', email: '', message: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (submitted && typeof window !== 'undefined') {
      // Dynamically import SweetAlert2 for SSR safety
      import('sweetalert2').then((Swal) => {
        Swal.default.fire({
          title: 'Message Sent!',
          text: 'Thanks for reaching out! I’ll get back to you soon.',
          icon: 'success',
          background: '#181a23',
          color: '#fff',
          confirmButtonColor: '#a259ff',
          confirmButtonText: 'OK',
          customClass: {
            title: 'font-[Orbitron,sans-serif]',
            popup: 'rounded-2xl',
            confirmButton: 'font-bold',
          },
        }).then(() => {
          setSubmitted(false);
        });
      });
    }
  }, [submitted]);

  return (
    <main className="min-h-screen px-6 py-16 text-gray-300 font-space relative overflow-x-hidden max-w-xl mx-auto"
      style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}
    >
      {/* Full-page animated star galaxy background */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <HeroCanvas />
      </div>

      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#a259ff] font-[Orbitron,sans-serif]"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h1>

      {!submitted && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-4">
            <label className="block flex-1">
              <span className="text-gray-400 mb-1 block">First Name</span>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full rounded-md bg-black bg-opacity-40 border border-nebula text-white px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-glow"
                placeholder="First name"
              />
            </label>

            <label className="block flex-1">
              <span className="text-gray-400 mb-1 block">Last Name</span>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-full rounded-md bg-black bg-opacity-40 border border-nebula text-white px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-glow"
                placeholder="Last name"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-gray-400 mb-1 block">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-black bg-opacity-40 border border-nebula text-white px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-glow"
              placeholder="you@example.com"
            />
          </label>

          <label className="block">
            <span className="text-gray-400 mb-1 block">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-md bg-black bg-opacity-40 border border-nebula text-white px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-glow resize-none"
              placeholder="Write your message here..."
            ></textarea>
          </label>

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 rounded text-black ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-glow hover:brightness-110'
            } transition`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </main>
  );
}
