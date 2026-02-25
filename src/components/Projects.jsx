import { useState } from 'react'
import { projects } from '../data/portfolio'

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)
  const visible = showAll ? projects : featured

  return (
    <section id="projects" className="py-24 md:py-32 px-5 md:px-8 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto">
        <p className="text-sky-400 text-xs font-mono tracking-widest uppercase mb-3">02. Work</p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
            Selected Projects
          </h2>
          {rest.length > 0 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors self-start sm:self-auto cursor-pointer"
            >
              {showAll ? 'Show less ↑' : `Show all (${projects.length}) ↓`}
            </button>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((project, i) => (
            <article
              key={project.id}
              className="card-hover group flex flex-col bg-zinc-900/60 border border-zinc-800/60 rounded-2xl p-6 relative overflow-hidden"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                  </svg>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-100 transition-colors">
                      <GitHubIcon />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-100 transition-colors">
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-zinc-100 font-semibold text-lg mb-2 group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors group"
          >
            <GitHubIcon />
            <span>View more on GitHub</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
