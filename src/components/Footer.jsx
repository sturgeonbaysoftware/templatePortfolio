import { personal } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-zinc-800/60 py-8 px-5 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600 font-mono">
        <p>
          Designed &amp; built by{' '}
          <span className="text-zinc-400">{personal.name}</span>
        </p>
        <p>© {year} — All rights reserved</p>
      </div>
    </footer>
  )
}
