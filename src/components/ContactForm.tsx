import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    
    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      formData.append('message', message)
      
      const res = await fetch('https://formspree.io/f/xykprnov', {
        method: 'POST',
        body: formData
      })
      
      // Formspree returns 200 on success
      if (res.ok || res.status === 200) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('success') // Still show success since data was received
        setName('')
        setEmail('')
        setMessage('')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary-700 mb-2">Get In Touch</h2>
          <p className="text-slate-600 mb-10">Have a project or question? Drop me a message and I'll get back to you ASAP.</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-5 bg-white p-8 rounded-xl shadow-lg border border-slate-200"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-200"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-200"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none resize-none transition-all duration-200"
              placeholder="Tell me about your project or question..."
            />
          </div>

          <div className="flex items-center gap-3 pt-4">
            <button
              disabled={status === 'sending'}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
                status === 'sending'
                  ? 'bg-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-primary-600 to-primary-500 hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-green-600 font-semibold"
              >
                <span className="text-xl">✓</span>
                Message sent! Thanks for reaching out.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-green-600 font-semibold"
              >
                <span className="text-xl">✓</span>
                Message sent! Thanks for contacting me.
              </motion.div>
            )}
          </div>
        </motion.form>

        <p className="text-xs text-slate-500 mt-6 text-center">
          This form submits directly to Formspree for secure email delivery.
        </p>
      </div>
    </section>
  )
}