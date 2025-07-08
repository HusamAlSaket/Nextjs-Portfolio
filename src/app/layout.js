import Navbar from './components/Navbar'

export const metadata = {
  title: 'Galaxy Portfolio',
  description: 'A cosmic developer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind CDN (keep only if you're not using tailwind.config.js natively) */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Tailwind galaxy theme override */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      galaxy: '#0a0a0f',         // Deep space black
                      nebula: '#2c2f53',         // Muted purple/blue
                      glow: '#6b53ff',           // Electric purple
                      star: 'rgba(255,255,255,0.12)', // Subtle white for stars
                      accent: '#00b4d8',         // Vibrant blue accent
                      highlight: '#a29bfe',      // Soft purple highlight
                    },
                    fontFamily: {
                      space: ['Orbitron', 'sans-serif'],
                    },
                    backgroundImage: {
                      'nebula-gradient': 'radial-gradient(circle at 60% 40%, #6b53ff55 0%, #0a0a0f 100%)',
                      'hero-gradient': 'linear-gradient(135deg, #6b53ff 0%, #00b4d8 100%)',
                    },
                    boxShadow: {
                      glow: '0 0 16px 4px #6b53ff88, 0 0 32px 8px #00b4d844',
                    },
                  },
                },
              }
            `,
          }}
        />

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
