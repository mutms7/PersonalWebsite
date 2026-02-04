import React from 'react'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import { resume } from './data/resume'

export default function App(){
  return (
    <div>
      <nav className="sticky top-0 z-40 bg-white/60 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <div className="font-semibold text-primary-700">{resume.name}</div>
          <div className="flex gap-4 items-center">
            <a href="#contact" className="text-sm text-slate-700 hover:text-primary-700">Contact</a>
            <a href="/resume.pdf" className="text-sm text-slate-700 hover:text-primary-700">Resume</a>
          </div>
        </div>
      </nav>
      <main>
        <Hero />
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-primary-700">Education</h2>
            <div className="mt-4 p-4 bg-white rounded shadow">
              <h3 className="font-semibold">{resume.education[0].school}</h3>
              <p className="text-sm text-slate-700">{resume.education[0].degree}</p>
              <p className="text-sm text-slate-500 mt-1">{resume.education[0].date}</p>
            </div>
          </div>
        </section>
        <Timeline />
        <Projects />
        <ContactForm />
      </main>
      <footer className="py-8 text-center text-slate-500">
        <div className="container mx-auto px-6">Built with ❤️ — {resume.name}</div>
      </footer>
    </div>
  )
}
