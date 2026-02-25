import { personal } from '../data/portfolio'

const stats = [
  { label: 'Years Experience', value: '6+' },
  { label: 'Projects Shipped', value: '40+' },
  { label: 'Companies', value: '3' },
  { label: 'Open Source Stars', value: '2.1k' },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-sky-400 text-xs font-mono tracking-widest uppercase mb-3">01. About</p>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-16">
          A bit about me
        </h2>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Text */}
          <div className="md:col-span-3 space-y-5">
            {personal.bio.split('\n\n').map((para, i) => (
              <p key={i} className="text-zinc-400 leading-relaxed text-base md:text-lg">
                {para}
              </p>
            ))}
            <p className="text-zinc-400 leading-relaxed">
              Based in{' '}
              <span className="text-zinc-200 font-medium">{personal.location}</span>
              {' '}— available for remote and hybrid roles worldwide.
            </p>
            <a
              href={personal.resumeUrl}
              className="inline-flex items-center gap-2 mt-2 text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors group"
            >
              Download Resume
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>

          {/* Avatar + stats */}
          <div className="md:col-span-2 space-y-6">
            {/* Avatar placeholder */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/20 to-indigo-500/20 border border-zinc-700/60" />
              <div className="absolute inset-0 rounded-2xl flex items-center justify-center">
                <span className="text-6xl md:text-7xl select-none">👨‍💻</span>
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-2 -right-2 w-14 h-14 border-r-2 border-b-2 border-sky-400/40 rounded-br-xl" />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-zinc-100">{stat.value}</div>
                  <div className="text-xs text-zinc-500 mt-0.5 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
