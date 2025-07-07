'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#181a23]/80 border-b border-[#a259ff]/30 backdrop-blur-xl shadow-lg z-20 relative rounded-b-2xl" style={{boxShadow:'0 4px 32px 0 #a259ff22, 0 2px 16px 0 #000a'}}>
      <h1 className="text-[#a259ff] font-bold text-xl select-none font-[Orbitron,sans-serif] tracking-wide flex items-center gap-2">
        <span role="img" aria-label="galaxy"></span> Husam
      </h1>

      <div className="flex gap-6 text-sm md:text-base font-[Orbitron,sans-serif]">
        <Link href="/" className={pathname === '/' ? 'text-[#a259ff] drop-shadow-[0_0_8px_#a259ff88]' : 'text-white hover:text-[#a259ff] hover:drop-shadow-[0_0_8px_#a259ff88] transition'}>
          Home
        </Link>
        <Link href="/about" className={pathname === '/about' ? 'text-[#a259ff] drop-shadow-[0_0_8px_#a259ff88]' : 'text-white hover:text-[#a259ff] hover:drop-shadow-[0_0_8px_#a259ff88] transition'}>
          About
        </Link>
        <Link href="/projects" className={pathname === '/projects' ? 'text-[#a259ff] drop-shadow-[0_0_8px_#a259ff88]' : 'text-white hover:text-[#a259ff] hover:drop-shadow-[0_0_8px_#a259ff88] transition'}>
          Projects
        </Link>
        <Link href="/contact" className={pathname === '/contact' ? 'text-[#a259ff] drop-shadow-[0_0_8px_#a259ff88]' : 'text-white hover:text-[#a259ff] hover:drop-shadow-[0_0_8px_#a259ff88] transition'}>
          Contact
        </Link>
      </div>
    </nav>
  );
  
}
