import React from 'react'
import Tilt from 'react-parallax-tilt'
import { resume } from '../data/resume'

export default function Projects(){
  return (
    <section className="py-12 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-primary-700">Projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {resume.projects.map((p, i) => (
            <Tilt
              key={i}
              glareEnable={true}
              glareMaxOpacity={0.08}
              className="rounded-lg"
            >
              <article className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <span className="text-sm text-slate-500">{p.date}</span>
                </div>
                <p className="text-sm text-slate-600 mt-2">{p.stack.join(' • ')}</p>
                <ul className="list-disc pl-5 mt-3 text-slate-700">
                  {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </article>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  )
}