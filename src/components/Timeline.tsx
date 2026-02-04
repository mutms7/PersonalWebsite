import React from 'react'
import { motion } from 'framer-motion'
import { resume } from '../data/resume'

export default function Timeline() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary-700 mb-2">Experience</h2>
          <p className="text-slate-600 mb-10">Roles and positions I've held</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {resume.experience.map((exp, i) => (
            <motion.article
              key={i}
              variants={item}
              className="relative pl-8 border-l-2 border-primary-300"
            >
              <div className="absolute -left-3.5 top-2 w-6 h-6 rounded-full bg-primary-500 border-4 border-white shadow-lg"></div>

              <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-primary-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                  <div>
                    <h3 className="font-bold text-lg text-primary-800">{exp.role}</h3>
                    <p className="text-slate-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>

                {exp.location && (
                  <p className="text-sm text-slate-500 mb-3">📍 {exp.location}</p>
                )}

                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-slate-700">
                      <span className="text-accent-600 font-bold mt-0.5">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
