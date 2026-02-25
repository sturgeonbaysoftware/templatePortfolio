import { skills } from '../data/portfolio'

const categoryColors = {
  Languages: 'sky',
  Frontend: 'indigo',
  Backend: 'emerald',
  Infrastructure: 'orange',
  Data: 'purple',
}

const colorMap = {
  sky:     { badge: 'bg-sky-400/8 text-sky-300 border-sky-400/20',     dot: 'bg-sky-400' },
  indigo:  { badge: 'bg-indigo-400/8 text-indigo-300 border-indigo-400/20', dot: 'bg-indigo-400' },
  emerald: { badge: 'bg-emerald-400/8 text-emerald-300 border-emerald-400/20', dot: 'bg-emerald-400' },
  orange:  { badge: 'bg-orange-400/8 text-orange-300 border-orange-400/20', dot: 'bg-orange-400' },
  purple:  { badge: 'bg-purple-400/8 text-purple-300 border-purple-400/20', dot: 'bg-purple-400' },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-sky-400 text-xs font-mono tracking-widest uppercase mb-3">03. Expertise</p>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
          Skills & Technologies
        </h2>
        <p className="text-zinc-500 mb-14 max-w-xl text-base">
          A curated list of technologies I work with regularly, organized by domain.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group) => {
            const color = categoryColors[group.category] || 'sky'
            const styles = colorMap[color]
            return (
              <div
                key={group.category}
                className="bg-zinc-900/60 border border-zinc-800/60 rounded-2xl p-6 hover:border-zinc-700/80 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span className={`w-2 h-2 rounded-full ${styles.dot}`} />
                  <h3 className="text-zinc-200 font-semibold text-sm uppercase tracking-wider">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-medium ${styles.badge}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
