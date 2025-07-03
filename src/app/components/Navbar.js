'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black bg-opacity-80 backdrop-blur-md shadow-md">
      <h1 className="text-nebula font-bold text-xl select-none">🌌 Galaxy Dev</h1>

      <div className="flex gap-6 text-sm md:text-base">
        <Link href="/" className={pathname === '/' ? 'text-glow' : 'hover:text-glow'}>
          Home
        </Link>
        <Link href="/about" className={pathname === '/about' ? 'text-glow' : 'hover:text-glow'}>
          About
        </Link>
        <Link href="/projects" className={pathname === '/projects' ? 'text-glow' : 'hover:text-glow'}>
          Projects
        </Link>
        <Link href="/contact" className={pathname === '/contact' ? 'text-glow' : 'hover:text-glow'}>
          Contact
        </Link>
      </div>
    </nav>
  )
}
