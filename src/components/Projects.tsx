import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, GitBranch, RadioTower } from 'lucide-react'
import { Project, resume } from '../data/resume'

const accentStyles = {
  cyan: {
    border: 'hover:border-cyan-200/60',
    text: 'text-cyan-200',
    chip: 'border-cyan-300/20 bg-cyan-300/10 text-cyan-100',
    glow: 'from-cyan-300/20',
    line: 'bg-cyan-300'
  },
  emerald: {
    border: 'hover:border-emerald-200/60',
    text: 'text-emerald-200',
    chip: 'border-emerald-300/20 bg-emerald-300/10 text-emerald-100',
    glow: 'from-emerald-300/20',
    line: 'bg-emerald-300'
  },
  amber: {
    border: 'hover:border-amber-200/60',
    text: 'text-amber-200',
    chip: 'border-amber-300/20 bg-amber-300/10 text-amber-100',
    glow: 'from-amber-300/20',
    line: 'bg-amber-300'
  },
  rose: {
    border: 'hover:border-rose-200/60',
    text: 'text-rose-200',
    chip: 'border-rose-300/20 bg-rose-300/10 text-rose-100',
    glow: 'from-rose-300/20',
    line: 'bg-rose-300'
  },
  blue: {
    border: 'hover:border-blue-200/60',
    text: 'text-blue-200',
    chip: 'border-blue-300/20 bg-blue-300/10 text-blue-100',
    glow: 'from-blue-300/20',
    line: 'bg-blue-300'
  }
} as const

function ProjectPreview({ project }: { project: Project }) {
  const styles = accentStyles[project.accent]

  return (
    <div className="project-screen relative h-32 overflow-hidden rounded-lg border border-white/10 bg-[#03070d] p-4">
      <div className={`absolute inset-x-0 top-0 h-20 bg-gradient-to-b ${styles.glow} to-transparent`} />
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
          <RadioTower className={`h-4 w-4 ${styles.text}`} aria-hidden="true" />
          {project.status}
        </div>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rose-300" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
        </div>
      </div>
      <div className="relative z-10 mt-5 grid grid-cols-[0.8fr_1.2fr] gap-3">
        <div className="space-y-2">
          <span className={`block h-2 rounded-full ${styles.line}`} />
          <span className="block h-2 rounded-full bg-white/18" />
          <span className="block h-2 w-2/3 rounded-full bg-white/12" />
        </div>
        <div className="flex h-14 items-end gap-1.5">
          {[30, 46, 38, 62, 48, 72, 54, 82, 68].map((height, index) => (
            <span
              key={index}
              className={`w-full rounded-t-sm ${index % 3 === 0 ? styles.line : 'bg-white/18'}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="border-y border-white/10 bg-[#060a12] py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm font-bold uppercase text-cyan-200">Selected work</p>
          <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">Projects with real interfaces, systems, and live demos.</h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Featured builds now include StockTracker and The Air Outside, alongside hackathon-winning systems and product experiments.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-5 lg:grid-cols-6"
        >
          {resume.projects.map((project) => {
            const styles = accentStyles[project.accent]

            return (
              <motion.div key={project.title} variants={item} className={project.featured ? 'lg:col-span-3' : 'lg:col-span-2'}>
                <Tilt glareEnable glareMaxOpacity={0.08} tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.01} className="h-full">
                  <article
                    className={`group flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur transition duration-300 ${styles.border} hover:-translate-y-1 hover:bg-white/[0.075]`}
                  >
                    <ProjectPreview project={project} />

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <span className={`rounded-md border px-2.5 py-1 text-xs font-bold ${styles.chip}`}>{project.category}</span>
                      {project.date && <span className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-xs font-bold text-slate-400">{project.date}</span>}
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-white">{project.title}</h3>
                    <p className={`mt-2 text-sm font-bold ${styles.text}`}>{project.subtitle}</p>
                    <p className="mt-4 text-sm leading-6 text-slate-300">{project.highlight}</p>

                    <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-400">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <ArrowUpRight className={`mt-1 h-4 w-4 flex-none ${styles.text}`} aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-xs font-bold text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-3 pt-6">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-10 items-center gap-2 rounded-lg bg-white px-3.5 text-sm font-black text-[#05070f] transition hover:-translate-y-0.5 hover:bg-cyan-100"
                        >
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                          Live
                        </a>
                      )}
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/15"
                        >
                          <GitBranch className="h-4 w-4" aria-hidden="true" />
                          Source
                        </a>
                      )}
                    </div>
                  </article>
                </Tilt>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
