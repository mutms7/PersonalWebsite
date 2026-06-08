export type ProjectAccent = 'cyan' | 'emerald' | 'amber' | 'rose' | 'blue'

export type Project = {
  title: string
  subtitle: string
  category: string
  status: string
  date?: string
  live?: string
  repo?: string
  stack: string[]
  highlight: string
  bullets: string[]
  accent: ProjectAccent
  featured?: boolean
}

export type Experience = {
  role: string
  company: string
  date?: string
  location?: string
  bullets: string[]
}

export type Education = {
  school: string
  degree: string
  date?: string
  details?: string
}

export type Stat = {
  label: string
  value: string
}

export type FocusArea = {
  label: string
  detail: string
}

export type Resume = {
  name: string
  role: string
  headline: string
  summary: string
  site: string
  location: string
  availability: string
  github?: string
  linkedin?: string
  email?: string
  phone?: string
  education: Education[]
  projects: Project[]
  experience: Experience[]
  skills: string[]
  interests: string[]
  stats: Stat[]
  focusAreas: FocusArea[]
}

export const resume: Resume = {
  name: 'William Chenyin',
  role: 'Computer Science student, full-stack builder, and product-minded engineer',
  headline: 'I build polished systems where useful data, humane interfaces, and ambitious ideas meet.',
  summary:
    'Waterloo CS student shipping full-stack applications, AI-assisted workflows, finance dashboards, and interactive story systems with a bias toward fast iteration and memorable interfaces.',
  site: 'william-chenyin.vercel.app',
  location: 'Waterloo, ON / Coquitlam, BC',
  availability: 'Open to 2026 software internships, hackathons, and ambitious product builds',
  github: 'github.com/mutms7',
  linkedin: 'linkedin.com/in/william-chenyin',
  email: 'chenyinwilliam@gmail.com',
  phone: '778-903-6567',
  stats: [
    { label: 'Waterloo CS', value: '4.0 GPA' },
    { label: 'Hackathon podiums', value: '2' },
    { label: 'Live products', value: '4+' },
    { label: 'Primary stack', value: 'TS / React' }
  ],
  focusAreas: [
    {
      label: 'Product engineering',
      detail: 'Designing fast, usable web apps with thoughtful data flows, responsive interfaces, and clean deployment paths.'
    },
    {
      label: 'AI and data systems',
      detail: 'Turning market, search, and user context into practical tools with cautious AI summaries and provider fallbacks.'
    },
    {
      label: 'Creative technology',
      detail: 'Building interactive narrative systems, procedural audio, custom UI animation, and code-first visual experiences.'
    }
  ],
  education: [
    {
      school: 'University of Waterloo, Waterloo, ON',
      degree: 'Bachelor of Computer Science (Honours), Co-operative Program - GPA: 4.0/4.0',
      date: 'Sep 2025 - Apr 2030 (expected)',
      details: "President's Scholarship with Distinction; BC Provincial District/Authority Scholarship"
    }
  ],
  projects: [
    {
      title: 'StockTracker',
      subtitle: 'Dark market intelligence dashboard for equities, ETFs, news, and AI-assisted quick takes.',
      category: 'Finance / AI',
      status: 'Live prototype',
      date: 'Jun. 2026',
      live: 'https://stockstalker-one.vercel.app',
      repo: 'https://github.com/mutms7/advanced-stock-stalker',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'OpenAI', 'Brave Search', 'Polygon'],
      highlight: 'Turns scattered market context into a focused command center for research and comparison.',
      bullets: [
        'Built an expandable stock and ETF research workspace with charts, overlays, volume, benchmarks, and draggable panels.',
        'Designed provider hooks for mock data, Polygon/Massive, FMP, Alpha Vantage, Brave Search, and OpenAI-powered assessments.',
        'Modeled instruments, watchlists, ETF holdings, news, and assessments with Prisma-ready persistence.'
      ],
      accent: 'cyan',
      featured: true
    },
    {
      title: 'The Air Outside',
      subtitle: 'A browser visual novel about presence, masks, ordinary life, and one quiet choice.',
      category: 'Interactive fiction',
      status: 'Playable end to end',
      date: 'May 2026',
      live: 'https://the-air-outside.vercel.app',
      repo: 'https://github.com/mutms7/TheAirOutside',
      stack: ['Blazor WASM', 'C#', '.NET 10', 'Ink', 'SVG', 'Web Audio', 'WPF'],
      highlight: 'A full narrative system with 15 scenes, branching gates, 9 endings, procedural audio, and hand-coded art.',
      bullets: [
        'Implemented an end-to-end visual novel with reader settings, a story map, scene picker, backlog, and persistent choices.',
        'Authored a decoupled Ink pipeline so story files can change independently from the renderer.',
        'Built browser and Windows desktop targets over shared Blazor components and code-first SVG illustration.'
      ],
      accent: 'emerald',
      featured: true
    },
    {
      title: "HardHaq '25",
      subtitle: 'Quantum hardware simulation tooling that won first place at Canada\'s quantum hardware hackathon.',
      category: 'Quantum simulation',
      status: '1st place',
      date: 'Nov. 2025',
      repo: 'https://github.com/mutms7/HardHaq2025',
      stack: ['Python', 'ANSYS HFSS', 'Finite Element Analysis'],
      highlight: 'Automated high-friction simulation workflows for capacitance extraction and coupling optimization.',
      bullets: [
        'Won first place among 20+ teams at Canada\'s only quantum hardware hackathon in North America.',
        'Developed Python scripts to automate ANSYS HFSS simulations and extract Maxwell capacitance matrices.',
        'Optimized coupling strength of 35.8 MHz against 900 MHz detuning using finite element analysis.'
      ],
      accent: 'amber'
    },
    {
      title: 'UmbrellaShare',
      subtitle: 'Urban umbrella-sharing concept built for the UN-Habitat Quality of Life Hackathon.',
      category: 'Civic tech',
      status: '3rd place',
      date: 'Oct. 2025',
      stack: ['Rust', 'Java', 'Android', 'VPS'],
      highlight: 'A city-embedded service concept connecting hardware access, identity, and sustainable urban mobility.',
      bullets: [
        'Led a four-person team to third place among 24 teams at the UN-Habitat Quality of Life Hackathon.',
        'Built a Rust backend with real-time communication and a Java Android frontend for shared umbrella access.',
        'Implemented a UWaterloo ID scanner prototype for practical user authentication at kiosks.'
      ],
      accent: 'blue'
    },
    {
      title: 'Hairrison',
      subtitle: 'Hair styling visualization tool powered by Cloudinary transformations.',
      category: 'AI-assisted consumer app',
      status: 'Live',
      date: 'Mar. 2026',
      live: 'https://hairrison.vercel.app',
      repo: 'https://github.com/mutms7/Hairrison',
      stack: ['TypeScript', 'React', 'Cloudinary', 'Vercel'],
      highlight: 'A lightweight product experience for previewing and iterating on hairstyle ideas.',
      bullets: [
        'Built a polished visual interface for hair styling exploration and image transformation workflows.',
        'Connected Cloudinary-powered media handling to a fast TypeScript frontend deployed on Vercel.',
        'Focused the UX on quick comparison, low-friction uploads, and clear visual feedback.'
      ],
      accent: 'rose'
    },
    {
      title: 'RougeRogue',
      subtitle: 'A roguelike dungeon crawler focused on procedural maps, visibility, and enemy behavior.',
      category: 'Game systems',
      status: 'In progress',
      date: '2025 - Present',
      stack: ['C#', 'RogueSharp', 'RLNET'],
      highlight: 'A systems-heavy game project exploring procedural generation and tactical dungeon play.',
      bullets: [
        'Implemented randomized dungeon generation with connected rooms, corridors, and field-of-view behavior.',
        'Built line-of-sight systems for enemy AI and player exploration.',
        'Designed character stats, health tracking, and behavior systems for extendable gameplay.'
      ],
      accent: 'amber'
    }
  ],
  experience: [
    {
      role: 'Sales Associate',
      company: 'Boathouse Retail Store',
      date: 'Oct. 2023 - Oct. 2024',
      location: 'Coquitlam, BC',
      bullets: [
        'Supported customers in a high-traffic retail environment with clear communication and quick problem solving.',
        'Processed transactions, managed POS workflows, and handled security tag removal accurately.'
      ]
    },
    {
      role: 'Math Tutor',
      company: 'RootMaths Math Tutoring',
      date: 'Jun. 2023 - Aug. 2023',
      location: 'Coquitlam, BC',
      bullets: [
        'Tutored students ages 8-10 in small groups, adapting explanations to different confidence levels.',
        'Built student momentum through accessible examples, patient feedback, and structured practice.'
      ]
    }
  ],
  skills: [
    'Python',
    'Java',
    'TypeScript',
    'JavaScript',
    'HTML/CSS',
    'C/C++',
    'C#',
    'Rust',
    'React',
    'Next.js',
    'Node.js',
    'Flask',
    'Tailwind CSS',
    'Blazor',
    '.NET',
    'Git',
    'MySQL',
    'PostgreSQL',
    'Prisma',
    'Stripe',
    'PayPal',
    'Cloudinary'
  ],
  interests: ['Board games', 'Pickleball', 'A cappella singing', 'Interactive fiction']
}
