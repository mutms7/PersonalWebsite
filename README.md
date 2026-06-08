# William Chenyin - Personal Portfolio

A dark, futuristic portfolio for William Chenyin, built with React, TypeScript, Tailwind CSS, Framer Motion, and Vite.

**Live Site:** [william-chenyin.vercel.app](https://william-chenyin.vercel.app/)

## Highlights

- Futuristic dark interface with a custom hero image, animated system panel, and polished project showcases.
- Featured project coverage for [StockTracker](https://stockstalker-one.vercel.app) and [The Air Outside](https://the-air-outside.vercel.app).
- Live/source links for major projects, including Advanced Stock Stalker, The Air Outside, Hairrison, and HardHaq 2025.
- Responsive sections for education, focus areas, experience, skills, and contact.
- Contact form with Vercel serverless forwarding plus a Formspree fallback.

## Quick Start

```bash
npm install
npm run dev
npm run build
```

## Useful Scripts

```bash
npm run dev        # Start the local Vite server
npm run build      # Build the production bundle
npm run preview    # Preview the production build
npm run typecheck  # Run TypeScript checks
```

## Project Structure

```text
PersonalWebsite/
├── api/
│   └── contact.ts
├── public/
│   ├── hero-future.png
│   └── resume.pdf
├── src/
│   ├── components/
│   ├── data/
│   │   └── resume.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
└── package.json
```

## Content Updates

Most portfolio content lives in `src/data/resume.ts`:

- Personal details and links
- Education
- Featured and supporting projects
- Experience
- Skills and interests

## Deployment

This site is ready for Vercel. Import the GitHub repository, keep the Vite defaults, and deploy.

Optional environment variables for the serverless contact route:

```env
FORMSPREE_URL=https://formspree.io/f/your-form-id
RECAPTCHA_SECRET=your-recaptcha-secret-key
```

The client also includes a Formspree fallback so the contact form still has a delivery path if the serverless route is unavailable.

---

Built by [William Chenyin](https://github.com/mutms7).
