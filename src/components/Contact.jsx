import { useState } from 'react'
import { personal } from '../data/portfolio'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with your actual form submission logic (e.g., Formspree, EmailJS)
    if (form.name && form.email && form.message) {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } else {
      setStatus('error')
    }
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-sky-400 text-xs font-mono tracking-widest uppercase mb-3">05. Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
          Let&apos;s work together
        </h2>
        <p className="text-zinc-500 mb-14 max-w-xl text-base leading-relaxed">
          I&apos;m currently open to new opportunities. Whether you have a role, a project, or just want to say hi — my inbox is always open.
        </p>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 placeholder-zinc-600 text-sm focus:outline-none focus:border-sky-400/60 transition-colors"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 placeholder-zinc-600 text-sm focus:outline-none focus:border-sky-400/60 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 placeholder-zinc-600 text-sm focus:outline-none focus:border-sky-400/60 transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-sky-400 hover:bg-sky-300 text-zinc-950 font-semibold rounded-xl transition-all duration-200 text-sm cursor-pointer"
            >
              Send Message
            </button>

            {status === 'success' && (
              <p className="text-emerald-400 text-sm font-medium">
                ✓ Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm font-medium">
                Please fill in all fields.
              </p>
            )}
          </form>

          {/* Sidebar info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-zinc-300 font-semibold mb-4 text-sm uppercase tracking-wider">
                Direct Contact
              </h3>
              <a
                href={`mailto:${personal.email}`}
                className="text-sky-400 hover:text-sky-300 transition-colors text-sm font-mono break-all"
              >
                {personal.email}
              </a>
            </div>

            <div>
              <h3 className="text-zinc-300 font-semibold mb-4 text-sm uppercase tracking-wider">
                Socials
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'GitHub', url: personal.github },
                  { label: 'LinkedIn', url: personal.linkedin },
                  { label: 'Twitter / X', url: personal.twitter },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                  >
                    <span className="text-zinc-400 text-sm group-hover:text-zinc-100 transition-colors">
                      {link.label}
                    </span>
                    <span className="text-zinc-600 group-hover:text-sky-400 transition-colors text-sm">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800/60">
              <p className="text-zinc-600 text-xs leading-relaxed">
                Usually responds within 24 hours. Based in {personal.location}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
