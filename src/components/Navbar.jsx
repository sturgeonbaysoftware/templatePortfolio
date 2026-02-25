import { useState, useEffect } from 'react'
import { personal } from '../data/portfolio'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
          className="text-base font-semibold tracking-tight text-zinc-100 hover:text-sky-400 transition-colors"
        >
          {personal.name.split(' ')[0]}
          <span className="text-sky-400">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors rounded-md hover:bg-zinc-800/50 cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="ml-2">
            <a
              href={personal.resumeUrl}
              className="px-3 py-1.5 text-sm border border-sky-400/50 text-sky-400 hover:bg-sky-400/10 rounded-md transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-zinc-400 transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-zinc-400 transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-zinc-400 transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/60 px-5 pb-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-3 py-2.5 text-sm text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-md transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="mt-1">
            <a
              href={personal.resumeUrl}
              className="block px-3 py-2.5 text-sm text-sky-400 border border-sky-400/40 rounded-md hover:bg-sky-400/10 transition-colors text-center"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
