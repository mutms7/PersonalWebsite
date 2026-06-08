import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, Download, GitBranch, Mail, Sparkles } from 'lucide-react'
import { resume } from '../data/resume'

const typedLine = 'Full-stack products. AI-assisted workflows. Finance dashboards. Narrative systems.'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setDisplayedText(typedLine.slice(0, index))
      if (index >= typedLine.length) {
        window.clearInterval(timer)
      }
    }, 24)

    return () => window.clearInterval(timer)
  }, [])

  const featuredProjects = resume.projects.filter((project) => project.featured)

  return (
    <header id="home" className="relative isolate overflow-hidden border-b border-white/10 bg-[#05070f]">
      <img
        src="/hero-future.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(5,7,15,0.98)_0%,rgba(5,7,15,0.92)_37%,rgba(5,7,15,0.65)_72%,rgba(5,7,15,0.92)_100%)]" />
      <div className="cyber-grid absolute inset-0 -z-10 opacity-35" />

      <div className="container mx-auto grid min-h-[86vh] gap-12 px-6 py-24 md:grid-cols-[1.08fr_0.92fr] md:items-center lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {resume.availability}
          </div>

          <p className="mb-4 text-sm font-bold uppercase text-emerald-200">{resume.role}</p>
          <h1 className="max-w-5xl text-5xl font-black leading-none text-white md:text-7xl">
            {resume.name}
            <span className="block bg-gradient-to-r from-cyan-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
              builds future-facing software.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">{resume.headline}</p>
          <p className="mt-4 min-h-[4rem] max-w-2xl text-base leading-7 text-slate-400">
            {displayedText}
            <span className="ml-1 inline-block h-5 w-2 translate-y-1 bg-cyan-300 motion-safe:animate-pulse" />
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex h-12 items-center gap-2 rounded-lg bg-cyan-300 px-5 text-sm font-bold text-[#041014] shadow-[0_0_30px_rgba(103,232,249,0.22)] transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              View projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-emerald-200/60 hover:bg-emerald-300/10"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>
            <a
              href={`https://${resume.github}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-cyan-300/10"
            >
              <GitBranch className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>

          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
            {resume.stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.18, duration: 0.7 }}
          className="relative"
        >
          <div className="scanline rounded-lg border border-cyan-200/20 bg-[#071018]/82 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.48)] backdrop-blur-md">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-bold uppercase text-cyan-200">Current signal</p>
                <h2 className="mt-2 text-2xl font-black text-white">Shipping polished, strange, useful things.</h2>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-300/30 bg-emerald-300/10 text-emerald-200">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {featuredProjects.map((project) => (
                <a
                  key={project.title}
                  href={project.live ?? project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-lg border border-white/10 bg-white/[0.055] p-4 transition hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-black text-white">{project.title}</p>
                      <p className="mt-1 text-xs font-semibold text-slate-400">{project.category}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-cyan-200 transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{project.highlight}</p>
                </a>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {['React', 'TypeScript', 'AI'].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-center text-xs font-bold text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a
              href={`https://${resume.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 transition hover:text-emerald-200"
            >
              <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a href={`mailto:${resume.email}`} className="inline-flex items-center gap-2 text-slate-300 transition hover:text-cyan-200">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {resume.email}
            </a>
          </div>
        </motion.aside>
      </div>
    </header>
  )
}
