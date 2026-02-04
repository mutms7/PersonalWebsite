import React from 'react'
import { motion } from 'framer-motion'
import { resume } from '../data/resume'

export default function Hero() {
  return (
    <header className="hero-bg py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-primary-800"
        >
          {resume.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto"
        >
          Computer Science student & builder — I build full-stack web apps, developer tools, and interactive projects.
        </motion.p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="/resume.pdf" className="px-4 py-2 rounded-md bg-primary-500 text-white hover:bg-primary-600">Download Resume</a>
          <a href={`https://${resume.github}`} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border border-primary-500 text-primary-700 hover:bg-primary-50">GitHub</a>
        </div>
      </div>
    </header>
  )
}
