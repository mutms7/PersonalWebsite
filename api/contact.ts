type JsonResponse = {
  status: (code: number) => {
    json: (payload: unknown) => void
  }
}

type ContactRequest = {
  method?: string
  body?: {
    name?: string
    email?: string
    message?: string
    website?: string
    recaptchaToken?: string
  }
}

declare const process: {
  env: Record<string, string | undefined>
}

export default async function handler(req: ContactRequest, res: JsonResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const { name, email, message, website } = req.body || {}

    if (website && website.length > 0) {
      return res.status(400).json({ success: false, error: 'Spam detected' })
    }

    if (!email || !message) {
      return res.status(400).json({ success: false, error: 'Email and message are required' })
    }

    if (process.env.RECAPTCHA_SECRET && req.body?.recaptchaToken) {
      const verificationResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(process.env.RECAPTCHA_SECRET)}&response=${encodeURIComponent(req.body.recaptchaToken)}`
      })
      const verification = await verificationResponse.json()

      if (!verification.success) {
        return res.status(400).json({ success: false, error: 'reCAPTCHA failed' })
      }
    }

    const formspreeUrl = process.env.FORMSPREE_URL

    if (!formspreeUrl) {
      return res.status(500).json({ success: false, error: 'Formspree endpoint not configured' })
    }

    const payload = {
      name: name || 'No name',
      email,
      message,
      _subject: `Website contact from ${name || 'visitor'}`
    }

    const response = await fetch(formspreeUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      const details = await response.text()
      return res.status(502).json({ success: false, error: 'Formspree forward failed', details })
    }

    return res.status(200).json({ success: true })
  } catch {
    return res.status(500).json({ success: false, error: 'Server error' })
  }
}
