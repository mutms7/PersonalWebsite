# William Chenyin — Personal Website

This is a Vite + React + TypeScript + Tailwind personal website scaffolded from a resume.

Features:
- Blue/green theme with subtle gradients
- Animated hero, interactive timeline, 3D-tilt project cards
- Serverless contact form that forwards to Formspree with honeypot and optional reCAPTCHA verification
- Vercel-ready with `api/contact` serverless function

Quick start
1. Install: `npm install`
2. Local dev: `npm run dev`
3. Build: `npm run build`
4. Preview production: `npm run preview`

Vercel deployment
1. Create a Vercel project connected to this repository.
2. Add the environment variable `FORMSPREE_URL` containing your Formspree POST endpoint (e.g. `https://formspree.io/f/xxxxxx`).
3. Optionally add `RECAPTCHA_SECRET` if you use Google reCAPTCHA and attach the token from the client.
4. Deploy — the `api/contact` endpoint will be available at `https://<your-deploy>/api/contact` and will forward messages to Formspree.

Adding your resume PDF
- Place `resume.pdf` into the `public/` directory so the hero and resume link will work (`/resume.pdf`).

Notes & next steps
- Customize copy (in `src/data/resume.ts`), styles (Tailwind theme), and add more interactive components.
- If you'd like, I can finish the Vercel setup and add your Formspree endpoint and optional reCAPTCHA keys for you.
