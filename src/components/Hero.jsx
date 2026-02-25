import { useEffect, useState } from 'react'
import { personal } from '../data/portfolio'

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'Backend Architect',
  'Open Source Contributor',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-8 overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px]" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #f4f4f5 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center md:text-left">
        <p className="animate-fade-up text-sky-400 text-sm font-mono tracking-widest uppercase mb-4 opacity-0"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          Hey, I&apos;m
        </p>

        <h1
          className="animate-fade-up text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-4 opacity-0"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          <span className="gradient-text">{personal.name}</span>
        </h1>

        <div
          className="animate-fade-up text-xl sm:text-2xl md:text-3xl font-medium text-zinc-400 mb-6 h-9 opacity-0"
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          <span className="text-zinc-200">{displayed}</span>
          <span className="cursor-blink text-sky-400 ml-0.5">|</span>
        </div>

        <p
          className="animate-fade-up text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto md:mx-0 mb-10 opacity-0"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          {personal.tagline}
        </p>

        <div
          className="animate-fade-up flex flex-col sm:flex-row gap-3 justify-center md:justify-start opacity-0"
          style={{ animationDelay: '0.65s', animationFillMode: 'forwards' }}
        >
          <button
            onClick={scrollToProjects}
            className="px-6 py-3 bg-sky-400 hover:bg-sky-300 text-zinc-950 font-semibold rounded-lg transition-all duration-200 text-sm cursor-pointer"
          >
            View My Work
          </button>
          <button
            onClick={scrollToContact}
            className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 font-medium rounded-lg transition-all duration-200 text-sm cursor-pointer"
          >
            Get In Touch
          </button>
        </div>

        {/* Social row */}
        <div
          className="animate-fade-up flex gap-4 mt-10 justify-center md:justify-start opacity-0"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          <a href={personal.github} target="_blank" rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-100 transition-colors text-sm font-mono">
            GitHub ↗
          </a>
          <span className="text-zinc-700">|</span>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-100 transition-colors text-sm font-mono">
            LinkedIn ↗
          </a>
          <span className="text-zinc-700">|</span>
          <a href={personal.twitter} target="_blank" rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-100 transition-colors text-sm font-mono">
            Twitter ↗
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-fade-in opacity-0"
        style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
        <span className="text-xs text-zinc-600 font-mono tracking-widest uppercase">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  )
}
