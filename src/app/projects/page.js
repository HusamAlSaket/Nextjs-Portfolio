'use client'

const projects = [
  {
    title: 'Golden Fitness Platform',
    description:
      'A Laravel-based fitness web app offering memberships, premium videos, gym shop, blog, and admin dashboards. Integrated Mailtrap for email handling.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Mailtrap'],
    link: 'https://github.com/HusamAlSaket/GoldenFitness-Gym',
    image: '/projects/golden-fitness.png',
  },
  {
    title: 'Comfy Store (E-commerce)',
    description:
      'A modern React 18 e-commerce site using Redux Toolkit, JWT auth, localStorage cart persistence, and Tailwind/DaisyUI with dark/light theme switching.',
    tech: ['React', 'Redux', 'JWT', 'Tailwind CSS'],
    link: 'https://github.com/HusamAlSaket/ComfyStore',
    image: '/projects/comfy-store.png',
  },
  {
    title: 'Pharmacy Website (Freelance)',
    description:
      'Developed a complete pharmacy website using Laravel and React, with dynamic product management and clean UI.',
    tech: ['Laravel', 'React', 'JavaScript'],
    link: 'https://github.com/HusamAlSaket/interpharma-1',
    image: '/projects/interpharma.png',
  },
]

export default function Projects() {
  return (
    <main className="min-h-screen bg-galaxy px-6 py-12 text-gray-300 font-space max-w-6xl mx-auto">
      <h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        style={{ textShadow: '0 0 8px #6b53ffcc' }}
      >
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-nebula bg-opacity-60 backdrop-blur-md border border-nebula rounded-xl p-6 shadow-lg hover:shadow-glow transition duration-300"
            style={{ minHeight: '540px' }}
          >
            {/* 🧠 Title */}
            <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>

            {/* 🖼️ Screenshot */}
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="rounded-md mb-4 w-full object-cover max-h-48"
              />
            )}

            {/* 📝 Description */}
            <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

            {/* 🧩 Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 rounded-full bg-black bg-opacity-40 border border-glow text-glow"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 🔗 GitHub Link */}
            <div className="mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-glow hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
