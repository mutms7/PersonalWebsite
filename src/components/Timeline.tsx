import React from 'react'
import { resume } from '../data/resume'

export default function Timeline() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-primary-700">Experience</h2>
        <div className="mt-6 space-y-6">
          {resume.experience.map((exp, i) => (
            <article key={i} className="p-4 rounded-md shadow-sm bg-white">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{exp.role} — {exp.company}</h3>
                <span className="text-sm text-slate-500">{exp.date}</span>
              </div>
              <p className="text-sm text-slate-600 mt-2">{exp.location}</p>
              <ul className="list-disc pl-5 mt-3 text-slate-700">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
