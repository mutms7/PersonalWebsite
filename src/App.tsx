import React, { useEffect, useRef, useState } from 'react'
import Tilt from 'react-parallax-tilt'
import { resume } from './data/resume'
import StoryGraph from './components/StoryGraph'
import ProjectArt from './components/ProjectArt'

const accentText: Record<string, string> = {
  cyan: 'text-glow-cyan',
  emerald: 'text-glow-emerald',
  amber: 'text-glow-amber',
  rose: 'text-glow-rose',
  blue: 'text-glow-blue'
}

const accentBorder: Record<string, string> = {
  cyan: 'border-glow-cyan',
  emerald: 'border-glow-emerald',
  amber: 'border-glow-amber',
  rose: 'border-glow-rose',
  blue: 'border-glow-blue'
}

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* The story thread: a fixed line down the left edge that inks in as you read. */
function ProgressThread() {
  const fillRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0
      if (fillRef.current) fillRef.current.style.transform = `scaleY(${p})`
      if (dotRef.current) dotRef.current.style.top = `${p * 100}%`
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div aria-hidden className="fixed left-4 top-20 bottom-8 z-30 hidden w-px lg:block">
      <div className="absolute inset-0 bg-thread/60" />
      <div ref={fillRef} className="absolute inset-0 origin-top bg-glow-amber" style={{ transform: 'scaleY(0)' }} />
      <div
        ref={dotRef}
        className="absolute -left-[5px] h-[11px] w-[11px] rounded-full border border-glow-amber bg-ink"
        style={{ top: 0 }}
      />
    </div>
  )
}

function useParallax(ref: React.RefObject<HTMLElement>, factor: number) {
  useEffect(() => {
    if (reducedMotion()) return
    let raf = 0
    const update = () => {
      if (ref.current) ref.current.style.transform = `translateY(${window.scrollY * factor}px)`
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [ref, factor])
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids.join(',')])
  return active
}

function SectionLabel({ kicker, title }: { kicker: string; title: string }) {
  return (
    <header className="reveal mb-12">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-glow-amber">{kicker}</p>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium">{title}</h2>
    </header>
  )
}

function TopBar() {
  const links: Array<[string, string]> = [
    ['Scenes', 'scenes'],
    ['Backstory', 'backstory'],
    ['Timeline', 'timeline'],
    ['Glossary', 'glossary'],
    ['Epilogue', 'epilogue']
  ]
  const active = useActiveSection(links.map(([, id]) => id))
  return (
    <nav className="sticky top-0 z-40 border-b border-thread/60 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-page items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="font-mono text-sm text-paper">
          w.chenyin<span className="text-glow-amber">()</span>
        </a>
        <div className="hidden gap-6 font-mono text-xs sm:flex">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`transition-colors hover:text-paper ${
                active === id ? 'text-glow-amber' : 'text-fade'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${resume.email}`}
          className="rounded-full border border-glow-amber px-4 py-1.5 font-mono text-xs text-glow-amber transition-colors hover:bg-glow-amber hover:text-ink"
        >
          Say hello
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  const graphRef = useRef<HTMLDivElement>(null)
  useParallax(graphRef, -0.06)
  return (
    <section id="top" className="mx-auto grid max-w-page items-center gap-12 overflow-x-clip px-5 pb-24 pt-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pt-24">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-fade">
          {resume.location} · {resume.availability}
        </p>
        <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
          Every build is a<br />
          <em className="text-glow-amber">branching story.</em>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-fade">
          I'm <span className="text-paper">{resume.name}</span>, a Waterloo CS student who ships finance
          dashboards, interactive fiction engines, quantum tooling, and consumer apps. Different genres,
          one author: fast iteration, humane interfaces, endings worth reaching.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#scenes"
            className="rounded-full bg-glow-amber px-6 py-3 font-mono text-sm text-ink transition-transform hover:-translate-y-0.5"
          >
            Read the scenes
          </a>
          <a
            href={`https://${resume.github}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-thread px-6 py-3 font-mono text-sm text-paper transition-colors hover:border-paper"
          >
            github/mutms7
          </a>
        </div>
        <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {resume.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-fade">{stat.label}</dt>
              <dd className="mt-1 font-display text-2xl text-paper">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div ref={graphRef} className="rounded-2xl border border-thread/70 bg-dusk/40 p-5 sm:p-7">
        <StoryGraph />
      </div>
    </section>
  )
}

function Scenes() {
  return (
    <section id="scenes" className="mx-auto max-w-page px-5 py-20 sm:px-8">
      <SectionLabel kicker="Act I · The work" title="Scenes" />
      <div className="space-y-24">
        {resume.projects.map((project, i) => (
          <article
            key={project.title}
            id={`scene-${i + 1}`}
            className="reveal scroll-mt-24 border-t border-thread/60 pt-10"
          >
            <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
              <aside>
                <p className={`font-mono text-xs uppercase tracking-[0.3em] ${accentText[project.accent]}`}>
                  Scene {String(i + 1).padStart(2, '0')}
                </p>
                <p className="mt-4 font-mono text-sm text-fade">{project.category}</p>
                <p className="mt-1 font-mono text-sm text-fade">{project.date}</p>
                <p className={`mt-4 inline-block rounded-full border px-3 py-1 font-mono text-xs ${accentBorder[project.accent]} ${accentText[project.accent]}`}>
                  {project.status}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded bg-dusk px-2 py-1 font-mono text-[11px] text-fade">
                      {tech}
                    </li>
                  ))}
                </ul>
              </aside>
              <div>
                <h3 className="font-display text-3xl font-medium sm:text-4xl">{project.title}</h3>
                <p className="mt-3 max-w-2xl text-lg text-fade">{project.subtitle}</p>
                <div className="mt-7 grid items-start gap-8 xl:grid-cols-[1fr_420px]">
                  <div>
                    <p className="max-w-2xl border-l-2 border-thread pl-4 italic text-paper/90">{project.highlight}</p>
                    <ul className="mt-6 max-w-2xl space-y-3 text-fade">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-5 font-mono text-sm">
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className={`underline underline-offset-4 ${accentText[project.accent]}`}>
                          Visit live →
                        </a>
                      )}
                      {project.repo && (
                        <a href={project.repo} target="_blank" rel="noreferrer" className="text-paper underline underline-offset-4">
                          Source →
                        </a>
                      )}
                    </div>
                  </div>
                  <Tilt
                    tiltMaxAngleX={6}
                    tiltMaxAngleY={6}
                    transitionSpeed={1200}
                    tiltEnable={!reducedMotion()}
                    className="will-change-transform"
                  >
                    <div className={`overflow-hidden rounded-xl border ${accentBorder[project.accent]} border-opacity-40 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)]`}>
                      <ProjectArt title={project.title} />
                    </div>
                    <p className="mt-2 text-center font-mono text-[11px] text-fade">illustrated preview, drawn in code</p>
                  </Tilt>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Backstory() {
  return (
    <section id="backstory" className="border-y border-thread/60 bg-dusk/30">
      <div className="mx-auto max-w-page px-5 py-20 sm:px-8">
        <SectionLabel kicker="Act II · The author" title="Backstory" />
        <p className="reveal max-w-3xl text-xl leading-relaxed text-paper/90">{resume.summary}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {resume.focusAreas.map((area, i) => (
            <div key={area.label} className="reveal rounded-xl border border-thread/70 bg-ink/50 p-6" style={{ transitionDelay: `${i * 0.12}s` }}>
              <h3 className="font-display text-xl text-glow-amber">{area.label}</h3>
              <p className="mt-3 leading-relaxed text-fade">{area.detail}</p>
            </div>
          ))}
        </div>
        <p className="reveal mt-10 font-mono text-sm text-fade">
          Off the keyboard: {resume.interests.join(' · ').toLowerCase()}.
        </p>
      </div>
    </section>
  )
}

function Timeline() {
  const entries = [
    ...resume.education.map((e) => ({
      title: e.school,
      subtitle: e.degree,
      date: e.date,
      bullets: e.details ? [e.details] : []
    })),
    ...resume.experience.map((e) => ({
      title: `${e.role} · ${e.company}`,
      subtitle: e.location ?? '',
      date: e.date,
      bullets: e.bullets
    }))
  ]
  return (
    <section id="timeline" className="mx-auto max-w-page px-5 py-20 sm:px-8">
      <SectionLabel kicker="Act III · The arc" title="Timeline" />
      <ol className="relative ml-3 space-y-12 border-l border-thread pl-8">
        {entries.map((entry, i) => (
          <li key={entry.title} className="reveal relative" style={{ transitionDelay: `${i * 0.1}s` }}>
            <span className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border border-glow-amber bg-ink" aria-hidden />
            <p className="font-mono text-xs uppercase tracking-widest text-fade">{entry.date}</p>
            <h3 className="mt-2 font-display text-2xl">{entry.title}</h3>
            {entry.subtitle && <p className="mt-1 text-fade">{entry.subtitle}</p>}
            <ul className="mt-3 max-w-2xl space-y-2 text-fade">
              {entry.bullets.map((b) => (
                <li key={b} className="leading-relaxed">
                  {b}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Glossary() {
  return (
    <section id="glossary" className="border-y border-thread/60 bg-dusk/30">
      <div className="mx-auto max-w-page px-5 py-20 sm:px-8">
        <SectionLabel kicker="Appendix" title="Glossary" />
        <ul className="reveal flex max-w-4xl flex-wrap gap-3">
          {resume.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-thread px-4 py-2 font-mono text-sm text-fade transition-all hover:-translate-y-0.5 hover:border-glow-amber hover:text-paper"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Epilogue() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function submit() {
    if (!name || !email || !message) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, website })
      })
      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
        return
      }
      throw new Error('api failed')
    } catch {
      try {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('message', message)
        const res = await fetch('https://formspree.io/f/xykprnov', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData
        })
        setStatus(res.ok ? 'success' : 'error')
      } catch {
        setStatus('error')
      }
    }
  }

  const choices = [
    { label: '→ Send an email', href: `mailto:${resume.email}`, detail: resume.email ?? '' },
    { label: '→ Read the source', href: `https://${resume.github}`, detail: resume.github ?? '' },
    { label: '→ Connect on LinkedIn', href: `https://${resume.linkedin}`, detail: resume.linkedin ?? '' }
  ]

  return (
    <section id="epilogue" className="mx-auto max-w-page px-5 py-24 sm:px-8">
      <SectionLabel kicker="Epilogue · Your move" title="Choose your next branch" />
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="reveal space-y-4">
          {choices.map((choice) => (
            <a
              key={choice.label}
              href={choice.href}
              target={choice.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="block rounded-xl border border-thread bg-dusk/40 px-6 py-5 transition-all hover:-translate-y-0.5 hover:border-glow-amber"
            >
              <span className="font-display text-xl text-paper">{choice.label}</span>
              <span className="mt-1 block font-mono text-sm text-fade">{choice.detail}</span>
            </a>
          ))}
        </div>
        <div className="reveal rounded-xl border border-thread bg-dusk/40 p-6">
          <h3 className="font-display text-xl">Or write the next line here</h3>
          <div className="mt-5 space-y-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              aria-label="Your name"
              className="w-full rounded-lg border border-thread bg-ink px-4 py-3 text-paper placeholder:text-fade"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your email"
              aria-label="Your email"
              className="w-full rounded-lg border border-thread bg-ink px-4 py-3 text-paper placeholder:text-fade"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="What should we build?"
              aria-label="Your message"
              className="w-full rounded-lg border border-thread bg-ink px-4 py-3 text-paper placeholder:text-fade"
            />
            <input
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <button
              onClick={submit}
              disabled={status === 'sending'}
              className="w-full rounded-lg bg-glow-amber py-3 font-mono text-sm text-ink transition-opacity disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            {status === 'success' && (
              <p className="font-mono text-sm text-glow-emerald">Message sent. I'll reply soon.</p>
            )}
            {status === 'error' && (
              <p className="font-mono text-sm text-glow-rose">
                Couldn't send. Fill every field, or email me directly at {resume.email}.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-thread/60">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-3 px-5 py-8 font-mono text-xs text-fade sm:px-8">
        <p>© {new Date().getFullYear()} {resume.name}. Hand-built with React, TypeScript, and Tailwind.</p>
        <p>fin — until the next commit.</p>
      </div>
    </footer>
  )
}

export default function App() {
  useReveal()
  return (
    <div>
      <ProgressThread />
      <TopBar />
      <main>
        <Hero />
        <Scenes />
        <Backstory />
        <Timeline />
        <Glossary />
        <Epilogue />
      </main>
      <Footer />
    </div>
  )
}
