import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle2, MapPin } from 'lucide-react'
import { resume } from '../data/resume'

export default function Timeline() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -18 },
    show: { opacity: 1, x: 0 }
  }

  return (
    <section id="experience" className="bg-[#05070f] py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm font-bold uppercase text-emerald-200">Experience</p>
          <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">Clear communication, fast learning, steady execution.</h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Customer-facing roles sharpened the same habits that make product engineering better: listening, simplifying, and following through.
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative space-y-5">
          <div className="absolute bottom-6 left-3 top-3 w-px bg-gradient-to-b from-emerald-300 via-cyan-300 to-transparent" />

          {resume.experience.map((exp) => (
            <motion.article key={`${exp.role}-${exp.company}`} variants={item} className="relative pl-10">
              <div className="absolute left-0 top-5 flex h-6 w-6 items-center justify-center rounded-full border border-emerald-200/40 bg-[#071018] shadow-[0_0_24px_rgba(110,231,183,0.25)]">
                <span className="h-2 w-2 rounded-full bg-emerald-200" />
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6 transition hover:border-emerald-200/45 hover:bg-white/[0.075]">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-black text-white">{exp.role}</h3>
                    <p className="mt-1 font-semibold text-slate-300">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-400">
                    {exp.date && (
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-black/20 px-2.5 py-1">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        {exp.date}
                      </span>
                    )}
                    {exp.location && (
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-black/20 px-2.5 py-1">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="mt-5 space-y-3">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-400">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-200" aria-hidden="true" />
                      <span>{bullet}</span>
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
