import React, { useEffect, useRef, useState } from 'react'
import Tilt from 'react-parallax-tilt'
import { resume, type Shot } from './data/resume'
import StoryGraph from './components/StoryGraph'
import WebBackdrop from './components/WebBackdrop'
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
    // Track which sections are currently in the active band and pick the
    // topmost one, so scrolling back up updates the indicator instead of
    // leaving it stuck on a section you've already left.
    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        })
        const current = ids.find((id) => visible.has(id))
        if (current) setActive(current)
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
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-glow-amber">{kicker}</p>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium">{title}</h2>
    </header>
  )
}

function TopBar() {
  const links: Array<[string, string]> = [
    ['Map', 'map'],
    ['Scenes', 'scenes'],
    ['Backstory', 'backstory'],
    ['Timeline', 'timeline'],
    ['Glossary', 'glossary'],
    ['Epilogue', 'epilogue']
  ]
  const active = useActiveSection(links.map(([, id]) => id))
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <nav className="sticky top-0 z-40 border-b border-thread/60 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-page items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" onClick={() => setOpen(false)} className="font-mono text-sm text-paper">
          w.chenyin<span className="text-glow-amber">()</span>
        </a>
        <div className="hidden gap-6 font-mono text-sm sm:flex">
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
          className="hidden rounded-full border border-glow-amber px-4 py-1.5 font-mono text-sm text-glow-amber transition-colors hover:bg-glow-amber hover:text-ink sm:inline-block"
        >
          Say hello
        </a>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-paper sm:hidden"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
            {open ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="border-t border-thread/60 px-5 pb-4 pt-1 sm:hidden">
          <ul className="flex flex-col">
            {links.map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-[3rem] items-center font-mono text-sm transition-colors ${
                    active === id ? 'text-glow-amber' : 'text-fade'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${resume.email}`}
            onClick={() => setOpen(false)}
            className="mt-2 flex min-h-[3rem] items-center justify-center rounded-full border border-glow-amber font-mono text-sm text-glow-amber transition-colors hover:bg-glow-amber hover:text-ink"
          >
            Say hello
          </a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  const graphRef = useRef<HTMLDivElement>(null)
  useParallax(graphRef, -0.06)

  // One orchestrated page-load, staggered in reading order. The animations are
  // pure CSS (see index.css): the natural, visible state is the default, so if
  // motion is reduced or CSS never loads the hero simply renders in place.
  const step = (i: number) => ({ animationDelay: `${0.04 + i * 0.08}s` })

  return (
    <section id="top" className="mx-auto grid max-w-page items-center gap-12 overflow-x-clip px-5 pb-24 pt-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pt-24">
      <div>
        <p className="hero-enter font-mono text-sm uppercase tracking-[0.3em] text-fade" style={step(0)}>
          {resume.location} · {resume.availability}
        </p>
        <h1
          className="hero-enter mt-6 font-display font-medium leading-[1.02] tracking-[-0.02em] text-[clamp(2.75rem,7vw,5.25rem)]"
          style={step(1)}
        >
          Every build is a{' '}<br />
          <span className="relative inline-block">
            <em className="font-semibold text-glow-amber">branching story.</em>
            <span
              aria-hidden
              className="hero-thread absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-glow-amber/80"
            />
          </span>
        </h1>
        <p className="hero-enter mt-7 max-w-xl text-lg leading-relaxed text-fade" style={step(2)}>
          I'm <span className="text-paper">{resume.name}</span>, a Waterloo CS student who ships finance
          dashboards, interactive fiction, 3D browser games, quantum tooling, and consumer apps. Different
          genres, one author: fast iteration, humane interfaces, endings worth reaching.
        </p>
        <div className="hero-enter mt-8 flex flex-wrap gap-4" style={step(3)}>
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
        <dl className="hero-enter mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4" style={step(4)}>
          {resume.stats.map((stat) => (
            <div key={stat.label}>
              <dd className="font-display text-4xl leading-none text-paper">{stat.value}</dd>
              <dt className="mt-2 font-mono text-xs uppercase tracking-widest text-fade">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
      <div ref={graphRef} className="mx-auto w-full max-w-sm lg:max-w-none">
        <div className="hero-portrait">
          <figure className="rotate-[1.5deg] transition-transform duration-500 hover:rotate-0">
            <div className="overflow-hidden rounded-2xl border border-glow-amber/40 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
              <img
                src="/portrait.jpg"
                alt="William Chenyin in a blazer, smiling mid-performance while surrounded by phone cameras"
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-center font-mono text-sm text-fade">
              the author, between takes · the water boys, winter 2026
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

function StoryMap() {
  return (
    <section id="map" className="relative overflow-hidden border-y border-thread/60 bg-dusk/20 py-20">
      <WebBackdrop />
      <div className="relative">
        <div className="mx-auto max-w-page px-5 sm:px-8">
          <SectionLabel kicker="Prologue · The map" title="How the stories connect" />
        </div>
        <div className="mx-auto w-full max-w-[90rem] px-2 sm:px-6">
          <StoryGraph />
        </div>
      </div>
    </section>
  )
}

/* Full-screen viewer for real project screenshots. */
function Lightbox({
  shots,
  index,
  onClose,
  onNav
}: {
  shots: Shot[]
  index: number
  onClose: () => void
  onNav: (dir: number) => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') onNav(1)
      else if (e.key === 'ArrowLeft') onNav(-1)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      prevFocus?.focus?.()
    }
  }, [onClose, onNav])

  const shot = shots[index]
  const many = shots.length > 1

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={shot.caption}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Close screenshot"
        className="absolute right-4 top-4 rounded-full border border-thread bg-dusk/60 px-3 py-1.5 font-mono text-sm text-paper transition-colors hover:border-glow-amber hover:text-glow-amber"
      >
        Close ✕
      </button>
      <figure className="relative max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={shot.src}
          alt={shot.caption}
          className="mx-auto max-h-[78vh] w-auto rounded-xl border border-thread shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9)]"
        />
        <figcaption className="mt-4 px-4 text-center font-mono text-sm text-fade">
          {shot.caption}
          {many && <span className="ml-3 text-fade">{index + 1} / {shots.length}</span>}
        </figcaption>
        {many && (
          <>
            <button
              onClick={() => onNav(-1)}
              aria-label="Previous screenshot"
              className="absolute -left-2 top-1/2 -translate-y-1/2 rounded-full border border-thread bg-ink/80 px-3 py-2 font-mono text-lg text-paper transition-colors hover:border-glow-amber hover:text-glow-amber sm:-left-14"
            >
              ‹
            </button>
            <button
              onClick={() => onNav(1)}
              aria-label="Next screenshot"
              className="absolute -right-2 top-1/2 -translate-y-1/2 rounded-full border border-thread bg-ink/80 px-3 py-2 font-mono text-lg text-paper transition-colors hover:border-glow-amber hover:text-glow-amber sm:-right-14"
            >
              ›
            </button>
          </>
        )}
      </figure>
    </div>
  )
}

function Scenes({ onOpenShot }: { onOpenShot: (shots: Shot[], index: number) => void }) {
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
                <p className={`font-mono text-sm uppercase tracking-[0.3em] ${accentText[project.accent]}`}>
                  Scene {String(i + 1).padStart(2, '0')}
                </p>
                <p className="mt-4 font-mono text-sm text-fade">{project.category}</p>
                <p className="mt-1 font-mono text-sm text-fade">{project.date}</p>
                <p className={`mt-4 inline-block rounded-full border px-3 py-1 font-mono text-xs ${accentBorder[project.accent]} ${accentText[project.accent]}`}>
                  {project.status}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded bg-dusk px-2.5 py-1 font-mono text-xs text-fade">
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
                  <div>
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
                      <p className="mt-2 text-center font-mono text-xs text-fade">illustrated preview, drawn in code</p>
                    </Tilt>
                    {project.shots && project.shots.length > 0 && (
                      <div className="mt-6">
                        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-fade">
                          From the real build →{' '}
                          <span className="text-paper/70">tap to enlarge</span>
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                          {project.shots.map((shot, si) => (
                            <button
                              key={shot.src}
                              onClick={() => onOpenShot(project.shots!, si)}
                              aria-label={`Open screenshot: ${shot.caption}`}
                              className={`group relative overflow-hidden rounded-lg border ${accentBorder[project.accent]} border-opacity-30 transition-transform hover:-translate-y-0.5 hover:border-opacity-70`}
                            >
                              <img
                                src={shot.src}
                                alt={shot.caption}
                                loading="lazy"
                                className="h-[4.5rem] w-28 object-cover object-top sm:h-20 sm:w-32"
                              />
                              <span className="absolute inset-0 bg-ink/10 transition-colors group-hover:bg-transparent" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
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
            <p className="font-mono text-sm uppercase tracking-widest text-fade">{entry.date}</p>
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
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  function validate() {
    const next: { name?: string; email?: string; message?: string } = {}
    if (!name.trim()) next.name = 'Please enter your name.'
    if (!email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'That email looks off. Try name@example.com.'
    if (!message.trim()) next.message = 'Please add a short message.'
    return next
  }

  const clearError = (field: 'name' | 'email' | 'message') =>
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) {
      // Move focus to the first field that needs attention.
      const first = (['name', 'email', 'message'] as const).find((f) => found[f])
      if (first) document.getElementById(`cf-${first}`)?.focus()
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
        if (res.ok) {
          setName('')
          setEmail('')
          setMessage('')
        }
      } catch {
        setStatus('error')
      }
    }
  }

  const choices = [
    { label: '→ Send an email', href: `mailto:${resume.email}`, detail: resume.email ?? '' },
    { label: '→ Read the source', href: `https://${resume.github}`, detail: resume.github ?? '' },
    { label: '→ Connect on LinkedIn', href: `https://${resume.linkedin}`, detail: resume.linkedin ?? '' },
    { label: '→ Download the résumé', href: '/resume.pdf', detail: 'PDF, one page' }
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
          <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
            <div>
              <input
                id="cf-name"
                value={name}
                onChange={(e) => { setName(e.target.value); clearError('name') }}
                placeholder="Your name"
                aria-label="Your name"
                required
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'cf-name-err' : undefined}
                className={`w-full rounded-lg border bg-ink px-4 py-3 text-paper placeholder:text-fade ${errors.name ? 'border-glow-rose' : 'border-thread'}`}
              />
              {errors.name && <p id="cf-name-err" className="mt-1.5 font-mono text-xs text-glow-rose">{errors.name}</p>}
            </div>
            <div>
              <input
                id="cf-email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); clearError('email') }}
                type="email"
                placeholder="Your email"
                aria-label="Your email"
                required
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'cf-email-err' : undefined}
                className={`w-full rounded-lg border bg-ink px-4 py-3 text-paper placeholder:text-fade ${errors.email ? 'border-glow-rose' : 'border-thread'}`}
              />
              {errors.email && <p id="cf-email-err" className="mt-1.5 font-mono text-xs text-glow-rose">{errors.email}</p>}
            </div>
            <div>
              <textarea
                id="cf-message"
                value={message}
                onChange={(e) => { setMessage(e.target.value); clearError('message') }}
                rows={4}
                placeholder="What should we build?"
                aria-label="Your message"
                required
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'cf-message-err' : undefined}
                className={`w-full rounded-lg border bg-ink px-4 py-3 text-paper placeholder:text-fade ${errors.message ? 'border-glow-rose' : 'border-thread'}`}
              />
              {errors.message && <p id="cf-message-err" className="mt-1.5 font-mono text-xs text-glow-rose">{errors.message}</p>}
            </div>
            <input
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full rounded-lg bg-glow-amber py-3 font-mono text-sm text-ink transition-opacity disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p role="status" aria-live="polite" className="min-h-[1.25rem] font-mono text-sm">
              {status === 'success' && <span className="text-glow-emerald">Message sent. I'll reply soon.</span>}
              {status === 'error' && (
                <span className="text-glow-rose">Couldn't send. Please email me directly at {resume.email}.</span>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-thread/60">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-3 px-5 py-8 font-mono text-sm text-fade sm:px-8">
        <p>© {new Date().getFullYear()} {resume.name}. Hand-built with React, TypeScript, and Tailwind.</p>
        <p>fin, until the next commit.</p>
      </div>
    </footer>
  )
}

export default function App() {
  useReveal()
  const [lightbox, setLightbox] = useState<{ shots: Shot[]; index: number } | null>(null)
  return (
    <div>
      <ProgressThread />
      <TopBar />
      <main>
        <Hero />
        <StoryMap />
        <Scenes onOpenShot={(shots, index) => setLightbox({ shots, index })} />
        <Backstory />
        <Timeline />
        <Glossary />
        <Epilogue />
      </main>
      <Footer />
      {lightbox && (
        <Lightbox
          shots={lightbox.shots}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNav={(dir) =>
            setLightbox((s) =>
              s ? { ...s, index: (s.index + dir + s.shots.length) % s.shots.length } : s
            )
          }
        />
      )}
    </div>
  )
}
