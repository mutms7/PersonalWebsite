import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { resume } from '../data/resume'

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white via-blue-50/30 to-green-50/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary-700 mb-2">Projects</h2>
          <p className="text-slate-600 mb-8">Hackathons, full-stack apps, and side projects I've built</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {resume.projects.map((p, i) => (
            <motion.div key={i} variants={item}>
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.1}
                scale={1.02}
                className="h-full rounded-xl"
              >
                <article
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="h-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-100 hover:border-primary-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg text-primary-800 flex-1">{p.title}</h3>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap ml-2">{p.date}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.stack.map((tech, j) => (
                      <span key={j} className="text-xs font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 px-2.5 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className={`text-sm text-slate-700 space-y-2 ${expanded === i ? 'block' : 'line-clamp-3'}`}>
                    {p.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-accent-600 font-bold mt-0.5">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {p.bullets.length > 3 && (
                    <p className="text-xs text-primary-600 font-semibold mt-3">
                      {expanded === i ? 'Show less' : 'Show more'}
                    </p>
                  )}

                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-block mt-4 text-sm font-semibold text-primary-600 hover:text-primary-700 underline"
                    >
                      View on GitHub →
                    </a>
                  )}
                </article>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}