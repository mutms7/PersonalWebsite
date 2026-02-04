# William Chenyin — Personal Portfolio

A modern, interactive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, 3D effects, and a serverless contact form.

🔗 **Live Site:** [site-rose-beta-45.vercel.app](https://site-rose-beta-45.vercel.app)

## ✨ Features

- **Modern Tech Stack:** Vite + React + TypeScript + Tailwind CSS
- **Elegant Design:** Blue/green gradient theme with smooth animations
- **Interactive Elements:**
  - Animated hero section with typing effects
  - Timeline component for education and experience
  - 3D-tilt project cards with hover effects
- **Serverless Contact Form:**
  - Formspree integration for email forwarding
  - Honeypot spam protection
  - Optional Google reCAPTCHA support
- **Fast & Optimized:** Deployed on Vercel with edge functions

## 🚀 Quick Start
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Project Structure
```
PersonalWebsite/
├── api/
│   └── contact.ts          # Serverless function for contact form
├── public/
│   └── resume.pdf          # Your resume PDF
├── src/
│   ├── components/         # React components
│   ├── data/
│   │   └── resume.ts       # Portfolio content and data
│   └── styles/             # Tailwind configuration
└── package.json
```

## 🌐 Deployment (Vercel)

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mutms7/PersonalWebsite)

### Manual Deployment

1. **Connect Repository:**
   - Import your GitHub repository to Vercel
   - Vercel will auto-detect the Vite configuration

2. **Environment Variables:**
   Add these in your Vercel project settings:
```
   FORMSPREE_URL=https://formspree.io/f/your-form-id
   RECAPTCHA_SECRET=your-recaptcha-secret-key  # Optional
```

3. **Deploy:**
   - Push to main branch to trigger automatic deployments
   - Your contact API will be available at `/api/contact`

### Getting Formspree Setup

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and copy your endpoint URL
3. Add to Vercel environment variables as `FORMSPREE_URL`

### Optional: reCAPTCHA Setup

1. Get keys from [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Add secret key to Vercel as `RECAPTCHA_SECRET`
3. Add site key to your client-side form component

## 📄 Adding Your Resume

Place your `resume.pdf` file in the `public/` directory. It will be accessible at:
```
https://your-site.vercel.app/resume.pdf
```

The download button in the hero section automatically links to `/resume.pdf`.

## 🎨 Customization

### Update Content
Edit `src/data/resume.ts` to customize:
- Personal information
- Education & experience
- Projects and skills
- Contact information

### Modify Styling
Tailwind configuration in `tailwind.config.js`:
- Change color themes
- Adjust animations
- Customize breakpoints

### Add Components
Create new components in `src/components/` and import them into your pages.

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (optional)
- **Deployment:** Vercel
- **Forms:** Formspree + Serverless Functions

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Issues and pull requests are welcome! Feel free to fork and customize.

---

Built with ❤️ by [William Chenyin](https://github.com/mutms7)
