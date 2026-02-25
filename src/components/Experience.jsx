import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-5 md:px-8 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto">
        <p className="text-sky-400 text-xs font-mono tracking-widest uppercase mb-3">04. Journey</p>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-16">
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[140px] top-0 bottom-0 w-px bg-gradient-to-b from-sky-400/40 via-zinc-700/60 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <div
                key={job.id}
                className="relative sm:pl-0 md:pl-48 group"
              >
                {/* Period label — left side on desktop */}
                <div className="hidden md:block absolute left-0 top-1 w-32 text-right">
                  <span className="text-xs text-zinc-600 font-mono whitespace-nowrap">
                    {job.period}
                  </span>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-[136px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-700 border-2 border-zinc-600 group-hover:border-sky-400 group-hover:bg-sky-400/20 transition-all" />

                {/* Card */}
                <div className="bg-zinc-900/60 border border-zinc-800/60 rounded-2xl p-6 hover:border-zinc-700/80 transition-colors">
                  {/* Mobile period */}
                  <p className="md:hidden text-xs text-zinc-600 font-mono mb-2">{job.period}</p>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-zinc-100 font-semibold text-lg leading-tight">
                        {job.role}
                      </h3>
                      <p className="text-sky-400 text-sm font-medium">{job.company}</p>
                    </div>
                  </div>

                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
