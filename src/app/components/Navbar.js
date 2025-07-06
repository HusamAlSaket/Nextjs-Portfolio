'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#23243a]/95 border-b border-[#6b53ff]/30 backdrop-blur-md shadow-md z-20 relative">
      <h1 className="text-nebula font-bold text-xl select-none">🌌 Husam </h1>

      <div className="flex gap-6 text-sm md:text-base">
        <Link href="/" className={pathname === '/' ? 'text-glow' : 'text-white hover:text-glow'}>
          Home
        </Link>
        <Link href="/about" className={pathname === '/about' ? 'text-glow' : 'text-white hover:text-glow'}>
          About
        </Link>
        <Link href="/projects" className={pathname === '/projects' ? 'text-glow' : 'text-white hover:text-glow'}>
          Projects
        </Link>
        <Link href="/contact" className={pathname === '/contact' ? 'text-glow' : 'text-white hover:text-glow'}>
          Contact
        </Link>
      </div>
    </nav>
  );
  
}
