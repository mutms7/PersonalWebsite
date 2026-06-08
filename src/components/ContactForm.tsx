import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, ShieldCheck } from 'lucide-react'
import { resume } from '../data/resume'

const formspreeUrl = 'https://formspree.io/f/xykprnov'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function sendViaApi() {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message, website })
    })

    return res.ok
  }

  async function sendViaFormspree() {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('message', message)
    formData.append('website', website)

    const res = await fetch(formspreeUrl, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData
    })

    return res.ok
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')

    try {
      let sent = false

      if (!import.meta.env.DEV) {
        try {
          sent = await sendViaApi()
        } catch {
          sent = false
        }
      }

      if (!sent) {
        sent = await sendViaFormspree()
      }

      if (!sent) {
        throw new Error('Contact submission failed')
      }

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
      setWebsite('')
      window.setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-[#05070f] py-20">
      <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-sm font-bold uppercase text-cyan-200">Contact</p>
          <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">Have a project, team, or internship role in mind?</h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Send the signal here or email me directly. I am especially interested in full-stack product engineering, AI tooling, and polished user-facing systems.
          </p>

          <div className="mt-8 space-y-3 text-sm font-semibold text-slate-300">
            <a href={`mailto:${resume.email}`} className="flex items-center gap-3 transition hover:text-cyan-200">
              <Mail className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              {resume.email}
            </a>
            <p className="flex items-center gap-3">
              <ShieldCheck className="h-4 w-4 text-emerald-200" aria-hidden="true" />
              {resume.location}
            </p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.34)]"
        >
          <label htmlFor="website" className="sr-only">
            Website
          </label>
          <input
            id="website"
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-slate-200">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-black/30 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/70 focus:ring-2 focus:ring-cyan-300/15"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-slate-200">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-black/30 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/70 focus:ring-2 focus:ring-cyan-300/15"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="block text-sm font-bold text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/70 focus:ring-2 focus:ring-cyan-300/15"
              placeholder="Tell me what you are building, hiring for, or curious about."
            />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              disabled={status === 'sending'}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 text-sm font-black text-[#041014] transition hover:-translate-y-0.5 hover:bg-cyan-200 disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-200"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              {status === 'sending' ? 'Sending' : 'Send message'}
            </button>

            {status === 'success' && <p className="text-sm font-bold text-emerald-200">Message sent. Thanks for reaching out.</p>}
            {status === 'error' && (
              <p className="text-sm font-bold text-rose-200">
                Something failed. Email me at <a href={`mailto:${resume.email}`}>{resume.email}</a>.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}
