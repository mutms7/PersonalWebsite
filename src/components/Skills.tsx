import React from 'react'
import { motion } from 'framer-motion'
import { Blocks, Cloud, Code2, Database, Music2, Wrench } from 'lucide-react'
import { resume } from '../data/resume'

const skillCategories = {
  Languages: ['Python', 'Java', 'TypeScript', 'JavaScript', 'HTML/CSS', 'C', 'C++', 'C#', 'Rust', 'Racket'],
  Frontend: ['React', 'Next.js', 'Tailwind CSS', 'Blazor WASM', 'Framer Motion', 'Responsive UI'],
  Backend: ['Node.js', 'Flask', '.NET', 'REST APIs', 'WebSocket', 'Serverless Functions'],
  Data: ['PostgreSQL', 'MySQL', 'Prisma', 'Market Data APIs', 'Provider Fallbacks', 'AI Assessments'],
  Tools: ['Git', 'Vercel', 'Cloudinary', 'ANSYS HFSS', 'Visual Studio', 'VS Code', 'Linux'],
  Services: ['OpenAI API', 'Brave Search API', 'Polygon', 'Alpha Vantage', 'Stripe', 'PayPal', 'Formspree']
}

const categoryIcons = {
  Languages: Code2,
  Frontend: Blocks,
  Backend: Wrench,
  Data: Database,
  Tools: Cloud,
  Services: Cloud
}

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="border-y border-white/10 bg-[#071018] py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm font-bold uppercase text-amber-200">Stack</p>
          <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">A toolkit for shipping fast without making the work feel cheap.</h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Strongest in TypeScript and React, with enough backend, data, and creative technology range to own full product slices.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {Object.entries(skillCategories).map(([category, skills]) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons]

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                viewport={{ once: true }}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-5"
              >
                <h3 className="flex items-center gap-3 text-lg font-black text-white">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-200/25 bg-amber-300/10 text-amber-200">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {category}
                </h3>
                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={item}
                      className="rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm font-bold text-slate-300 transition hover:border-amber-200/45 hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mt-5 rounded-lg border border-white/10 bg-white/[0.055] p-6"
        >
          <h3 className="flex items-center gap-3 text-lg font-black text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-200/25 bg-cyan-300/10 text-cyan-200">
              <Music2 className="h-4 w-4" aria-hidden="true" />
            </span>
            Outside the editor
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {resume.interests.map((interest) => (
              <span key={interest} className="rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm font-bold text-slate-300">
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
