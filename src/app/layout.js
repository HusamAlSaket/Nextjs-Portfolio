import Navbar from './components/Navbar'  // adjust path as needed

export const metadata = {
  title: 'Galaxy Portfolio',
  description: 'A cosmic developer portfolio',
}

export default function RootLayout({ children }) {
  return ( 
    <html lang="en">
      <head>
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Tailwind config: custom colors, font, background gradients */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      galaxy: '#0a0a0f',     // nearly black base
                      nebula: '#2c2f53',     // dark blue-purple
                      glow: '#6b53ff',       // soft violet glow
                      star: 'rgba(255,255,255,0.12)',  // faint star sparkle
                    },
                    fontFamily: {
                      space: ['Orbitron', 'sans-serif'],
                    },
                    backgroundImage: {
                      'nebula-gradient': 'radial-gradient(ellipse at center, #6b53ff33, #0a0a0f 80%)',
                    },
                  },
                },
              }
            `,
          }}
        />

        {/* Orbitron font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="relative bg-galaxy text-gray-300 font-space min-h-screen">
        {/* Subtle star sparkle overlay using CSS gradients */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(white 1px, transparent 2px),
                              radial-gradient(white 1px, transparent 2px)`,
            backgroundPosition: '0 0, 25px 25px',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'repeat',
          }}
        />

        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
