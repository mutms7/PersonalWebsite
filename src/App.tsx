import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ContactForm from './components/ContactForm'
import { resume } from './data/resume'

export default function App() {
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm border-b border-slate-200/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-lg bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent"
          >
            {resume.name.split(' ')[0]}
          </motion.div>
          <div className="flex gap-6 items-center text-sm">
            <a href="#contact" className="text-slate-700 hover:text-primary-700 font-semibold transition">
              Contact
            </a>
            <a href="/resume.pdf" download className="text-slate-700 hover:text-primary-700 font-semibold transition">
              Resume
            </a>
          </div>
        </div>
      </nav>

      <main className="overflow-hidden">
        <Hero />

        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-primary-700 mb-2">Education</h2>
              <p className="text-slate-600 mb-8">University of Waterloo</p>
            </motion.div>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl shadow-md border border-primary-200"
            >
              <h3 className="text-xl font-bold text-primary-800">{resume.education[0].degree}</h3>
              <p className="text-slate-600 font-semibold mt-2">{resume.education[0].school}</p>
              <p className="text-sm text-slate-500 mt-3 mb-4">{resume.education[0].date}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 rounded-lg bg-white border border-primary-300 text-sm font-semibold text-primary-700">
                  🏆 {resume.education[0].details}
                </span>
              </div>
            </motion.article>
          </div>
        </section>

        <Timeline />
        <Projects />
        <Skills />
        <ContactForm />
      </main>

      <footer className="py-12 text-center text-slate-500 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-6 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <a
              href={`https://${resume.github}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary-400 transition"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={`https://${resume.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-400 transition"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a href={`mailto:${resume.email}`} className="hover:text-primary-400 transition">
              Email
            </a>
          </div>
          <p className="text-sm">
            © 2026 {resume.name}. Built with React, TypeScript, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  )
}
