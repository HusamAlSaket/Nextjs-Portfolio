import Navbar from './components/Navbar'

export const metadata = {
  title: 'Galaxy Portfolio',
  description: 'A cosmic developer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind CSS should be installed via npm and imported in your CSS. Removed CDN and inline config for production build compatibility. */}

        {/* Preload Orbitron for better UX */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>

      {/* Prevent hydration warning from canvas */}
      <body suppressHydrationWarning className="relative bg-galaxy text-star font-space min-h-screen overflow-x-hidden">
        {/* ✨ Star sparkle background */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 opacity-10 z-0"
          style={{
            backgroundImage: `radial-gradient(white 1px, transparent 2px),
                              radial-gradient(white 1px, transparent 2px)`,
            backgroundPosition: '0 0, 25px 25px',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'repeat',
          }}
        />

        {/* 🚀 Navbar always on top */}
        <Navbar />

        {/* 🌌 Main content */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  )
}
