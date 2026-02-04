import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { resume } from '../data/resume'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "Computer Science student & builder — I create full-stack web apps, developer tools, and innovative projects."
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="hero-bg relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">
            {resume.name}
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto h-8 md:h-auto"
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
          >
            Download Resume
          </a>
          <a
            href={`https://${resume.github}`}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-lg border-2 border-primary-500 text-primary-700 font-semibold hover:bg-primary-50 hover:-translate-y-1 transition-all duration-200"
          >
            GitHub
          </a>
          <a
            href={`https://${resume.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-lg border-2 border-accent-500 text-accent-700 font-semibold hover:bg-accent-50 hover:-translate-y-1 transition-all duration-200"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </header>
  )
}
