export type ProjectAccent = 'cyan' | 'emerald' | 'amber' | 'rose' | 'blue' | 'violet' | 'orange'

export type Shot = {
  src: string
  caption: string
}

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
  shots?: Shot[]
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
    'Waterloo CS student shipping full-stack applications, AI-assisted workflows, finance dashboards, interactive story systems, and 3D browser games with a bias toward fast iteration and memorable interfaces.',
  site: 'william-chenyin.vercel.app',
  location: 'Waterloo, ON / Coquitlam, BC',
  availability: 'Open to 2026 software internships, hackathons, and ambitious product builds',
  github: 'github.com/mutms7',
  linkedin: 'linkedin.com/in/william-chenyin',
  email: 'chenyinwilliam@gmail.com',
  phone: '778-903-6567',
  stats: [
    { label: 'Waterloo CS', value: '3.9 GPA' },
    { label: 'Hackathon podiums', value: '2' },
    { label: 'Live products', value: '6' },
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
      degree: 'Bachelor of Computer Science (Honours), Co-operative Program - GPA: 3.9/4.0',
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
      featured: true,
      shots: [
        { src: '/shots/airoutside/intro.webp', caption: 'The opening: people decided they could be safer wearing something between themselves and the world.' },
        { src: '/shots/airoutside/wren.webp', caption: 'Wren, in their suit, at home in the early morning.' },
        { src: '/shots/airoutside/morning.webp', caption: 'A quiet everyday moment: the house is still, the kitchen is clean.' }
      ]
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
      subtitle: 'An AI hairstyle preview, rebuilt as a real product: upload a selfie, describe any look, and see it in a salon mirror before the chair.',
      category: 'AI consumer app',
      status: 'Live · Stripe payments',
      date: 'Mar. 2026',
      live: 'https://hairrison.vercel.app',
      repo: 'https://github.com/mutms7/Hairrison',
      stack: ['React 19', 'TypeScript', 'Vite', 'Cloudinary', 'Stripe', 'Vercel'],
      highlight: 'Try the haircut before the haircut. Cloudinary Generative Replace does the restyle; a $1.99 Stripe unlock turns it into a real product.',
      bullets: [
        'Rebuilt v2 ("Hairrison Studio") from the ground up around a custom look builder: type anything, or assemble a look from length / texture / color chips.',
        'Wired Cloudinary Generative Replace to swap hair from short, literal prompts, with a draggable salon-mirror slider that sweeps between before and after.',
        'Shipped a real paywall: two free tries, then a one-time $1.99 Stripe Checkout unlock, with HMAC-signed licenses verified server-side after redirect.',
        'Added a preset inspiration gallery filterable by length and texture, result tabs, downloads, and a locally-saved session history. Originally built for Hack Canada 2026.'
      ],
      accent: 'rose',
      shots: [
        { src: '/shots/hairrison/landing.webp', caption: 'The Hairrison Studio landing page.' },
        { src: '/shots/hairrison/studio.webp', caption: 'The look builder: describe anything, or pick from length / texture / color chips, plus the inspiration gallery.' }
      ]
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
    },
    {
      title: 'ConquestCartes',
      subtitle: 'An original fantasy deck-builder in Godot: buy from a rotating market, build an engine from almost nothing, and race for victory points.',
      category: 'Game · deck-builder',
      status: 'Live · multiplayer',
      date: 'Jul. 2026',
      live: 'https://conquest-cartes.vercel.app',
      repo: 'https://github.com/mutms7/ConquestCartes',
      stack: ['Godot 4.7', 'GDScript', 'Node', 'WebAssembly', 'Vercel'],
      highlight: 'That "build an engine from almost nothing" Dominion feeling, with my own painted cards, plus relics and time-based combat.',
      bullets: [
        '63 data-driven cards with original artwork and the full deck-builder verb set: draw, trash, gain, upgrade, replay, and reactive triggers on gain, buy, discard, and cleanup.',
        'A fresh 14-card kingdom market every game, finite supply piles with visible counts and sold-out handling, and 0-cost Briar Hex curses worth -1 VP.',
        'Multiplayer over both direct-IP LAN tables and 4-letter online-code lobbies, with a host-authoritative relay, shared supplies, and attacks that hit your rivals.',
        'A handmade medieval UI: jewel-toned cards, quiet UI sounds, layered music, an end-game score plaque, and a Kingdoms browser that filters the random market pool.'
      ],
      accent: 'violet',
      featured: true,
      shots: [
        { src: '/shots/conquestcartes/home.webp', caption: 'The ConquestCartes home screen, with the Sunspire tower artwork.' },
        { src: '/shots/conquestcartes/table.webp', caption: 'A game in progress: the market of action cards, your treasury and estates, and your opening hand.' }
      ]
    },
    {
      title: 'Blend Together',
      subtitle: 'A co-op 3D modeling party game: sculpt one shared low-poly model against a timer, then let an AI judge score it.',
      category: 'Game · AI · multiplayer',
      status: 'Live',
      date: 'Jul. 2026',
      live: 'https://blending3d.vercel.app',
      repo: 'https://github.com/mutms7/blending',
      stack: ['React', 'TypeScript', 'Three.js', 'R3F', 'Yjs', 'Node', 'Claude'],
      highlight: 'Lightweight Blender meets Jackbox: build something dumb with friends under pressure, then have Claude tell you exactly how the handle turned out.',
      bullets: [
        'A real-time shared mesh (vertices, faces, colors, and paint) synced with Yjs, so concurrent edits merge per-key and undo stays scoped to your own transactions.',
        'A full modeling toolset: vertex / edge / face / object select, move-rotate-scale gizmos, extrude, subdivide, per-face paint, and a Blender-style view-cube.',
        'On timeout the round captures the model from six angles and sends them to Claude vision for a 0-100 score, locked to a JSON schema so the reply always parses.',
        'A daily challenge with a global leaderboard and per-player streaks, run modifiers, a timelapse replay of the build, and a session gallery.'
      ],
      accent: 'blue',
      featured: true,
      shots: [
        { src: '/shots/blend/editor.webp', caption: 'The Blend Together editor: a shared model, the modeling toolbar, and the interactive tutorial.' },
        { src: '/shots/blend/sculpt.webp', caption: 'Sculpting with primitives and the move gizmo.' }
      ]
    },
    {
      title: 'Molt',
      subtitle: 'A 3D puzzle platformer about precise movement, and about when to take your armor off.',
      category: 'Game · 3D platformer',
      status: 'Live',
      date: 'Jul. 2026',
      live: 'https://molt-one.vercel.app',
      repo: 'https://github.com/mutms7/Molt',
      stack: ['Three.js', 'React-Three-Fiber', 'Rapier', 'TypeScript', 'Vite', 'Zustand'],
      highlight: 'One toggle, a real trade-off both ways. Suited, you\'re fast but half-blind; bare, color and sound flood in and hidden platforms appear.',
      bullets: [
        'A reversible "Shell" transition that morphs between states smoothly, without letting you half-toggle to steal the target state\'s powers early.',
        'Crisp movement on Rapier\'s kinematic controller: per-axis move-and-slide, coyote time, a suited double-jump, and a dash that keeps your vertical velocity.',
        'A procedurally-animated character rig (idle, speed-blended run, jump, landing squash, victory pose) with two genuinely different silhouettes and no model files.',
        'A hub plus five zones, each with its own palette and twist, built in the same world and mood as my visual novel: suits as masks, presence over performance.'
      ],
      accent: 'orange',
      shots: [
        { src: '/shots/molt/title.webp', caption: 'The Molt title screen.' },
        { src: '/shots/molt/suited.webp', caption: 'Suited: fast and armored, but the world is desaturated and some geometry is invisible.' },
        { src: '/shots/molt/bare.webp', caption: 'Bare: slower and exposed, but color floods in and the hidden platforms appear.' }
      ]
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
    'Godot',
    'Three.js',
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
