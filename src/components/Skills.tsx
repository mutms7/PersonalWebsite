import React from 'react'
import { motion } from 'framer-motion'
import { resume } from '../data/resume'

const skillCategories = {
  Languages: ['Python', 'Java', 'TypeScript', 'JavaScript', 'HTML/CSS', 'C', 'C++', 'Rust', 'C#', 'Racket'],
  Frameworks: ['React', 'Next.js', 'Node.js', 'Flask', 'Redux', 'Android SDK', 'RogueSharp', 'NextAuth', 'Tailwind CSS'],
  'Developer Tools': ['Git', 'VS Code', 'MySQL', 'PostgreSQL', 'Prisma ORM', 'Visual Studio', 'Eclipse', 'Linux', 'ANSYS HFSS', 'Jest'],
  'APIs/Services': ['Stripe', 'PayPal', 'Google Gemini API', 'REST APIs', 'gRPC', 'WebSocket']
}

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary-700 mb-2">Skills & Tools</h2>
          <p className="text-slate-600 mb-10">Languages, frameworks, and technologies I work with</p>
        </motion.div>

        <div className="space-y-10">
          {Object.entries(skillCategories).map(([category, skills], catIdx) => (
            <div key={catIdx}>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-primary-600 to-accent-500 rounded-full"></span>
                {category}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {skills.map((skill, i) => (
                  <motion.div key={i} variants={item}>
                    <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 hover:border-primary-400 hover:shadow-md transition-all duration-200">
                      <span className="text-sm font-semibold text-primary-800">{skill}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-xl bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200"
        >
          <h3 className="font-bold text-lg text-slate-800 mb-4">Beyond Code 🎵</h3>
          <p className="text-slate-700 mb-4">When I'm not coding, you can find me:</p>
          <div className="flex flex-wrap gap-3">
            {resume.interests.map((interest, i) => (
              <span key={i} className="px-4 py-2 rounded-lg bg-white border border-primary-300 text-slate-700 font-semibold">
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
