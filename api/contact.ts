import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' })
  try {
    const { name, email, message, website } = req.body || {}
    // honeypot check
    if (website && website.length > 0) return res.status(400).json({ success: false, error: 'Spam detected' })

    // Optional reCAPTCHA verification (if RECAPTCHA_SECRET set)
    if (process.env.RECAPTCHA_SECRET && req.body.recaptchaToken) {
      const v = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(process.env.RECAPTCHA_SECRET)}&response=${encodeURIComponent(req.body.recaptchaToken)}`
      })
      const verification = await v.json()
      if (!verification.success) return res.status(400).json({ success: false, error: 'reCAPTCHA failed' })
    }

    const FORMSPREE_URL = process.env.FORMSPREE_URL
    if (!FORMSPREE_URL) return res.status(500).json({ success: false, error: 'Formspree endpoint not configured' })

    const payload = {
      name: name || 'No name',
      email: email || 'No email',
      message: message || '',
      _subject: `Website contact from ${name || 'visitor'}`
    }

    const resp = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if (!resp.ok) {
      const text = await resp.text()
      return res.status(502).json({ success: false, error: 'Formspree forward failed', details: text })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Server error' })
  }
}
