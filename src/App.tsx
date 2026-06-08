import React from 'react'
import { motion } from 'framer-motion'
import { BriefcaseBusiness, GitBranch, Mail, MapPin } from 'lucide-react'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ContactForm from './components/ContactForm'
import { resume } from './data/resume'

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
]

export default function App() {
  const education = resume.education[0]

  return (
    <div className="min-h-screen bg-[#05070f] text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#05070f]/86 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between gap-4 px-6 py-4">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 font-black text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-200/30 bg-cyan-300/10 text-cyan-100">
              WC
            </span>
            <span className="hidden sm:inline">{resume.name}</span>
          </motion.a>

          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2.5 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white sm:px-3"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="overflow-hidden">
        <Hero />

        <section className="bg-[#071018] py-20">
          <div className="container mx-auto grid gap-6 px-6 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg border border-white/10 bg-white/[0.055] p-6"
            >
              <p className="text-sm font-bold uppercase text-emerald-200">Education</p>
              <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">Waterloo CS, built for breadth and velocity.</h2>
              <p className="mt-4 text-lg font-bold text-slate-200">{education.degree}</p>
              <p className="mt-2 text-sm font-semibold text-slate-400">{education.school}</p>
              <p className="mt-2 text-sm font-semibold text-slate-500">{education.date}</p>
              <p className="mt-5 rounded-lg border border-emerald-200/25 bg-emerald-300/10 p-4 text-sm font-semibold leading-6 text-emerald-100">
                {education.details}
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-3">
              {resume.focusAreas.map((focus, index) => (
                <motion.article
                  key={focus.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-white/10 bg-white/[0.055] p-5 transition hover:border-cyan-200/45 hover:bg-white/[0.075]"
                >
                  <p className="text-lg font-black text-white">{focus.label}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{focus.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <Projects />
        <Timeline />
        <Skills />
        <ContactForm />
      </main>

      <footer className="border-t border-white/10 bg-[#03050a] py-10 text-slate-400">
        <div className="container mx-auto flex flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black text-white">{resume.name}</p>
            <p className="mt-1 flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-emerald-200" aria-hidden="true" />
              {resume.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm font-bold">
            <a href={`https://${resume.github}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-cyan-200">
              <GitBranch className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <a href={`https://${resume.linkedin}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-emerald-200">
              <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a href={`mailto:${resume.email}`} className="inline-flex items-center gap-2 transition hover:text-amber-200">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
