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
  desktopDownload?: string
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

// The portfolio reads strongest when the most complete, distinctive work lands
// first. Keep this separate from the data array because the story map has its
// own thematic layout and should not change when the editorial order does.
export const projectDisplayOrder = [
  'EastEats',
  'Typer.AI',
  'SlimWaste',
  'GoodLife.AI',
  'PaletteCard AI',
  'Sandfall',
  'Blend Together',
  'ConquestCartes',
  "HardHaq '25",
  'Hairrison',
  'Molt',
  'The Air Outside',
  'StockTracker',
  'UmbrellaShare'
] as const

export function getProjectsInDisplayOrder(projects: Project[]) {
  const rank = new Map<string, number>(projectDisplayOrder.map((title, index) => [title, index]))
  return [...projects].sort(
    (a, b) => (rank.get(a.title) ?? projectDisplayOrder.length) - (rank.get(b.title) ?? projectDisplayOrder.length)
  )
}

export function getProjectSectionId(title: string) {
  return `project-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
}

export const resume: Resume = {
  "name": "William Chenyin",
  "role": "Founder of GoodLife.AI, Computer Science student, and full-stack engineer",
  "headline": "I build tools for everyday decisions, browser games, and simulations.",
  "summary": "I like building around a specific problem, like finding a great bowl of noodles when the overall rating doesn't tell you much about the food. EastEats grew out of that, while GoodLife.AI helps turn a plan into a few things to do today.",
  "site": "william-chenyin.vercel.app",
  "location": "Waterloo, ON / Coquitlam, BC",
  "availability": "Open to summer 2027 software internships, hackathons, and ambitious product builds",
  "github": "github.com/mutms7",
  "linkedin": "linkedin.com/in/william-chenyin",
  "email": "chenyinwilliam@gmail.com",
  "phone": "778-903-6567",
  "stats": [
    {
      "label": "Waterloo CS",
      "value": "3.9 GPA"
    },
    {
      "label": "Hackathon podiums",
      "value": "2"
    },
    {
      "label": "Primary stack",
      "value": "TS / React"
    }
  ],
  "focusAreas": [
    {
      "label": "Product engineering",
      "detail": "I build the interface and the systems behind it, from the first search to the saved result you come back to."
    },
    {
      "label": "AI and data",
      "detail": "I use AI where it helps interpret messy inputs, with review steps and clear limits on what the result can tell you."
    },
    {
      "label": "Games and simulations",
      "detail": "I like seeing what happens when small rules interact, whether people are sculpting together or finding their way through a falling-sand world."
    }
  ],
  "education": [
    {
      "school": "University of Waterloo",
      "degree": "Honours Computer Science, Co-op",
      "date": "Sep 2025 - Apr 2030 (expected)",
      "details": "GPA: 3.9/4.0; President’s Scholarship with Distinction; BC District/Authority Scholarship."
    }
  ],
  "projects": [
    {
      "title": "Sandfall",
      "subtitle": "A falling-sand world with people, wildlife, and Conway’s Game of Life.",
      "category": "Simulation · generative world",
      "status": "Live",
      "date": "Sep. 2026",
      "live": "https://sandfall-delta.vercel.app",
      "repo": "https://github.com/mutms7/Sandfall",
      "stack": [
        "JavaScript",
        "Canvas API",
        "HTML/CSS",
        "Typed arrays",
        "A* pathfinding"
      ],
      "highlight": "Paint the terrain and weather, then see how the world responds.",
      "bullets": [
        "I built local rules for sand, water, fire, lava, plants, and other materials, running at up to 60 ticks per second.",
        "People move through the same world with gravity, health, and oxygen. Some solve jump trajectories; others use A* to find a route.",
        "Conway’s Game of Life runs alongside the simulation, with seven landscape regions, wildlife, a minimap, and saved worlds."
      ],
      "accent": "amber",
      "featured": true,
      "shots": [
        {
          "src": "/shots/sandfall/home.webp",
          "caption": "The live Sandfall simulation and material controls."
        }
      ]
    },
    {
      "title": "GoodLife.AI",
      "subtitle": "An AI coach that runs on your device, on the web or Windows.",
      "category": "Local-first AI · life systems",
      "status": "Live",
      "date": "2026",
      "live": "https://goodlifeai.vercel.app",
      "repo": "https://github.com/mutms7/GoodLife.AI",
      "desktopDownload": "https://github.com/mutms7/GoodLife.AI/releases/latest/download/GoodLife.AI-Setup.exe",
      "stack": [
        "React",
        "TypeScript",
        "Electron",
        "WebLLM",
        "Supabase"
      ],
      "highlight": "Get three steps for today, then track the habits you want to keep.",
      "bullets": [
        "I kept inference on your device with a quantized Qwen2.5 1.5B model, WebLLM, and WebGPU.",
        "Habit history shows what you’ve done today, this week, and across the year. Accounts sync through Supabase.",
        "The Windows installer includes the model for offline use, with releases built through GitHub Actions."
      ],
      "accent": "emerald",
      "featured": true,
      "shots": [
        {
          "src": "/shots/goodlife/home.png",
          "caption": "The GoodLife.AI home page, introducing a private coach that runs locally."
        },
        {
          "src": "/shots/goodlife/daily-coach.png",
          "caption": "The daily coach with three practical actions, local conversation, and habit history."
        }
      ]
    },
    {
      "title": "PaletteCard AI",
      "subtitle": "Make a personal greeting card from a photo.",
      "category": "Machine learning · creative tools",
      "status": "Live · prototype",
      "date": "Aug. 2026",
      "live": "https://palettecardai.vercel.app",
      "repo": "https://github.com/mutms7/PaletteCardAI",
      "stack": [
        "Python",
        "PyTorch",
        "MobileNetV3",
        "FastAPI",
        "Pillow",
        "JavaScript"
      ],
      "highlight": "Upload a photo, choose from three covers, then paint and add your own message.",
      "bullets": [
        "I kept the original photo intact and put paint, brush strokes, and text on separate layers, so you can change each part before exporting a PNG.",
        "I fine-tuned MobileNetV3 to recognize five objects and trained a second model to assign color roles. Contrast checks keep the message readable."
      ],
      "accent": "rose",
      "featured": true,
      "shots": [
        {
          "src": "/shots/palettecard/studio.png",
          "caption": "The PaletteCard AI studio: one photo, three covers, and a palette to paint with."
        },
        {
          "src": "/shots/palettecard/how-it-works.png",
          "caption": "The illustrated guide to the object classifier, palette model, and color checks."
        }
      ]
    },
    {
      "title": "ConquestCartes",
      "subtitle": "A fantasy deck-builder with a rotating market and online multiplayer.",
      "category": "Game · deck-builder",
      "status": "Live · multiplayer",
      "date": "Jul. 2026",
      "live": "https://conquest-cartes.vercel.app",
      "repo": "https://github.com/mutms7/ConquestCartes",
      "stack": [
        "Godot 4.7",
        "GDScript",
        "Node",
        "WebAssembly",
        "Vercel"
      ],
      "highlight": "Build an engine from a small starting deck, with my own painted cards, relics, and timed combat.",
      "bullets": [
        "I built 63 cards around draw, trash, gain, upgrade, replay, and reactive effects, with a fresh 14-card market each game.",
        "Players share finite card supplies over LAN or four-letter online lobbies, with the host keeping game state consistent.",
        "The interface includes a filterable card pool, layered music, and an end-game score breakdown."
      ],
      "accent": "violet",
      "featured": true,
      "shots": [
        {
          "src": "/shots/conquestcartes/home.webp",
          "caption": "The ConquestCartes home screen, with the Sunspire tower artwork."
        },
        {
          "src": "/shots/conquestcartes/table.webp",
          "caption": "A game in progress: the market of action cards, your treasury and estates, and your opening hand."
        }
      ]
    },
    {
      "title": "Blend Together",
      "subtitle": "A co-op 3D modeling game where friends sculpt against a timer and Claude scores the result.",
      "category": "Game · AI · multiplayer",
      "status": "Live",
      "date": "Jul. 2026",
      "live": "https://blending3d.vercel.app",
      "repo": "https://github.com/mutms7/blending",
      "stack": [
        "React",
        "TypeScript",
        "Three.js",
        "R3F",
        "Yjs",
        "Node",
        "Claude"
      ],
      "highlight": "Build something with friends under pressure, then see what Claude makes of it.",
      "bullets": [
        "I used Yjs to merge edits to the shared mesh while keeping undo specific to each player.",
        "Players can select vertices, edges, faces, or objects, then move, rotate, extrude, subdivide, and paint them.",
        "Each round captures six views for Claude’s score. Daily challenges, a leaderboard, and a timelapse let you revisit the build."
      ],
      "accent": "blue",
      "featured": true,
      "shots": [
        {
          "src": "/shots/blend/editor.webp",
          "caption": "The Blend Together editor: a shared model, the modeling toolbar, and the interactive tutorial."
        },
        {
          "src": "/shots/blend/sculpt.webp",
          "caption": "Sculpting with primitives and the move gizmo."
        }
      ]
    },
    {
      "title": "Molt",
      "subtitle": "A 3D puzzle platformer about precise movement, and about when to take your armor off.",
      "category": "Game · 3D platformer",
      "status": "Live",
      "date": "Jul. 2026",
      "live": "https://molt-one.vercel.app",
      "repo": "https://github.com/mutms7/Molt",
      "stack": [
        "Three.js",
        "React-Three-Fiber",
        "Rapier",
        "TypeScript",
        "Vite",
        "Zustand"
      ],
      "highlight": "Keep your armor on for speed and a double-jump, or take it off to reveal hidden platforms.",
      "bullets": [
        "I made the armor transition reversible without letting players borrow the next state’s abilities halfway through.",
        "Movement uses Rapier’s kinematic controller, with coyote time, a suited double-jump, and a dash that preserves vertical speed.",
        "A procedural character moves through a hub and five zones, sharing the masks-and-presence theme of The Air Outside."
      ],
      "accent": "orange",
      "shots": [
        {
          "src": "/shots/molt/title.webp",
          "caption": "The Molt title screen."
        },
        {
          "src": "/shots/molt/suited.webp",
          "caption": "Suited: fast and armored, but the world is desaturated and some geometry is invisible."
        },
        {
          "src": "/shots/molt/bare.webp",
          "caption": "Bare: slower and exposed, but color floods in and the hidden platforms appear."
        }
      ]
    },
    {
      "title": "StockTracker",
      "subtitle": "A dashboard for comparing stocks, ETFs, news, and AI summaries.",
      "category": "Finance / AI",
      "status": "Live · prototype",
      "date": "Jun. 2026",
      "live": "https://stockstalker-one.vercel.app",
      "repo": "https://github.com/mutms7/advanced-stock-stalker",
      "stack": [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "OpenAI",
        "Brave Search",
        "Polygon"
      ],
      "highlight": "Keep the chart, holdings, and news together while researching an investment.",
      "bullets": [
        "I built a workspace with draggable panels, chart overlays, volume, and benchmarks.",
        "Provider adapters support market data, search, and AI summaries, with mock data for development.",
        "Prisma models cover instruments, watchlists, ETF holdings, news, and assessments."
      ],
      "accent": "cyan",
      "featured": true,
      "shots": [
        {
          "src": "/shots/stocktracker/home.webp",
          "caption": "StockTracker’s research dashboard."
        }
      ]
    },
    {
      "title": "The Air Outside",
      "subtitle": "A browser visual novel about presence, masks, ordinary life, and one quiet choice.",
      "category": "Interactive fiction",
      "status": "Live",
      "date": "May 2026",
      "live": "https://the-air-outside.vercel.app",
      "repo": "https://github.com/mutms7/TheAirOutside",
      "stack": [
        "Blazor WASM",
        "C#",
        ".NET 10",
        "Ink",
        "SVG",
        "Web Audio",
        "WPF"
      ],
      "highlight": "A branching story with 15 scenes, nine endings, and art drawn in code.",
      "bullets": [
        "I built reader settings, a story map, scene selection, a backlog, and saved choices.",
        "Ink story files stay separate from the renderer, so I can revise the writing without changing the interface.",
        "Browser and Windows versions share Blazor components, SVG illustrations, and procedural audio."
      ],
      "accent": "emerald",
      "featured": true,
      "shots": [
        {
          "src": "/shots/airoutside/intro.webp",
          "caption": "The opening: people decided they could be safer wearing something between themselves and the world."
        },
        {
          "src": "/shots/airoutside/wren.webp",
          "caption": "Wren, in their suit, at home in the early morning."
        },
        {
          "src": "/shots/airoutside/morning.webp",
          "caption": "A quiet everyday moment: the house is still, the kitchen is clean."
        }
      ]
    },
    {
      "title": "HardHaq '25",
      "subtitle": "Quantum simulation tools that won first place at HardHaq 2025.",
      "category": "Quantum simulation",
      "status": "1st place",
      "date": "Nov. 2025",
      "repo": "https://github.com/mutms7/HardHaq2025",
      "stack": [
        "Python",
        "ANSYS HFSS",
        "Finite Element Analysis"
      ],
      "highlight": "I automated the repeated simulation work so we could spend more time comparing designs.",
      "bullets": [
        "Our team placed first among 20+ teams at the quantum hardware hackathon.",
        "I wrote Python scripts to run ANSYS HFSS simulations and extract Maxwell capacitance matrices.",
        "The design reached 35.8 MHz coupling against 900 MHz detuning using finite element analysis."
      ],
      "accent": "amber"
    },
    {
      "title": "UmbrellaShare",
      "subtitle": "An umbrella-sharing prototype for the UN-Habitat Quality of Life Hackathon.",
      "category": "Civic tech",
      "status": "3rd place",
      "date": "Oct. 2025",
      "stack": [
        "Rust",
        "Java",
        "Android",
        "VPS"
      ],
      "highlight": "Borrow an umbrella through a campus kiosk, using your student ID for access.",
      "bullets": [
        "I led a four-person team to third place among 24 teams.",
        "We built a Rust backend, a Java Android frontend, and a UWaterloo ID scanner prototype for kiosk access."
      ],
      "accent": "blue"
    },
    {
      "title": "Hairrison",
      "subtitle": "Upload a selfie and preview a haircut before you commit to it.",
      "category": "AI consumer app",
      "status": "Live · Stripe payments",
      "date": "Mar. 2026",
      "live": "https://hairrison.vercel.app",
      "repo": "https://github.com/mutms7/Hairrison",
      "stack": [
        "React 19",
        "TypeScript",
        "Vite",
        "Cloudinary",
        "Stripe",
        "Vercel"
      ],
      "highlight": "Describe a look or choose its length, texture, and color, then compare before and after.",
      "bullets": [
        "I connected the look builder to Cloudinary Generative Replace, with a draggable slider to compare the result.",
        "Two free tries lead to a one-time $1.99 Stripe unlock, with licenses verified on the server.",
        "A filterable inspiration gallery, downloads, and local session history build on the original Hack Canada 2026 project."
      ],
      "accent": "rose",
      "shots": [
        {
          "src": "/shots/hairrison/landing.webp",
          "caption": "The Hairrison Studio landing page."
        },
        {
          "src": "/shots/hairrison/studio.webp",
          "caption": "The look builder: describe anything, or pick from length / texture / color chips, plus the inspiration gallery."
        }
      ]
    },
    {
      "title": "SlimWaste",
      "subtitle": "A food-waste tracker for student kitchens, starting with a photo of what you're throwing away.",
      "category": "AI · everyday tools",
      "status": "Live · early access",
      "date": "Sep. 2026",
      "live": "https://slimwaste.vercel.app",
      "repo": "https://github.com/mutms7/slimwaste",
      "stack": [
        "Next.js",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Gemini"
      ],
      "highlight": "Take a photo, fix what the AI got wrong, then find one thing to try on your next grocery run.",
      "bullets": [
        "I built this around shared kitchens, small budgets, and irregular schedules. The coach uses a corrected scan to suggest a next step, like buying less of something you keep throwing away.",
        "A photo can’t give an exact weight, so estimates stay as ranges. You can correct the food, amount, and reason before saving.",
        "Accounts keep photos private and clean them up automatically. The free Gemini tier requires agreement to its data-use terms."
      ],
      "accent": "emerald",
      "featured": true,
      "shots": [
        {
          "src": "/shots/slimwaste/home.webp",
          "caption": "SlimWaste’s food waste tracker and scan introduction."
        }
      ]
    },
    {
      "title": "Typer.AI",
      "subtitle": "A Chrome and Edge extension that completes familiar words and phrases from the document you're writing.",
      "category": "Browser extension · writing tools",
      "status": "Live · extension",
      "date": "Oct. 2026",
      "live": "https://mutms7.github.io/Typer.AI/",
      "repo": "https://github.com/mutms7/Typer.AI",
      "stack": [
        "JavaScript",
        "Chrome Extensions",
        "Node.js",
        "SQLite",
        "Gemini / OpenAI"
      ],
      "highlight": "Gray text at the cursor, Tab to accept, Escape to dismiss.",
      "bullets": [
        "I wanted repeated technical terms to take less effort when writing notes. Typer learns vocabulary from the active document and its title.",
        "I separated background AI ranking from typing. The local engine completes each prefix immediately and keeps working offline.",
        "A confidence slider and per-site pause give you control. The browser demo works without installing the extension; Google Docs needs a separate adapter."
      ],
      "accent": "cyan",
      "featured": true,
      "shots": [
        {
          "src": "/shots/typer/home.webp",
          "caption": "The Typer.AI website and interactive autocomplete demo."
        }
      ]
    },
    {
      "title": "EastEats",
      "subtitle": "Find nearby East Asian food based on what you like eating.",
      "category": "AI · restaurant discovery",
      "status": "Live · native clients in development",
      "date": "Oct. 2026 - Present",
      "live": "https://easteats.vercel.app",
      "repo": "https://github.com/mutms7/easteats",
      "stack": [
        "Next.js",
        "TypeScript",
        "React Native / Expo",
        "Supabase",
        "PostgreSQL / PostGIS",
        "Claude",
        "Apify"
      ],
      "highlight": "Tell EastEats where you love eating and why, then find your next spot from a list built around your tastes.",
      "bullets": [
        "I wanted food, service, and atmosphere to count separately. Claude extracts review evidence, and my ranking code weighs it against your preferences. Missing evidence stays neutral.",
        "I made your last list the default when you return. Reopening it or liking a place doesn’t call Apify or Claude; a new search or refresh collects fresh places.",
        "Listings appear while reviews are analyzed in the background. The web app and Expo clients share a backend; native store releases are still pending."
      ],
      "accent": "rose",
      "featured": true,
      "shots": [
        {
          "src": "/shots/easteats/home.webp",
          "caption": "EastEats homepage with its food discovery introduction and sign-in."
        }
      ]
    }
  ],
  "experience": [
    {
      "role": "AI Software Engineering Co-op",
      "company": "AXL Labs Inc",
      "date": "Jan. - Apr. 2027 (upcoming)",
      "location": "Toronto, ON",
      "bullets": [
        "I’ll join AXL Labs for my Winter 2027 co-op, working on AI applications with engineers, researchers, and founders."
      ]
    },
    {
      "role": "Software QA Automation Engineer, Co-op",
      "company": "Method Integration (Method CRM)",
      "date": "May 2026 - Aug. 2026",
      "location": "Toronto, ON",
      "bullets": [
        "I replaced fixed waits and fragile locators with state-based checks and shared helpers in TypeScript and Playwright, reducing test flakiness by 87% across three end-to-end suites.",
        "I automated 20+ iOS and Android flows with WebdriverIO, Appium, and BrowserStack, then added them to the team's daily CI pipeline.",
        "I turned API requirements into automated scheduler checks and wrote Playwright and WebdriverIO test and review guidelines adopted by an 11-person QA team."
      ]
    },
    {
      "role": "Sales Associate",
      "company": "Boathouse Retail Store",
      "date": "Oct. 2023 - Oct. 2024",
      "location": "Coquitlam, BC",
      "bullets": [
        "I helped customers, processed purchases, and handled POS and security-tag workflows in a busy retail store."
      ]
    },
    {
      "role": "Math Tutor",
      "company": "RootMaths Math Tutoring",
      "date": "Jun. 2023 - Aug. 2023",
      "location": "Coquitlam, BC",
      "bullets": [
        "I tutored students aged 8–10 in small groups, adjusting explanations and practice to what each student needed."
      ]
    }
  ],
  "skills": [
    "TypeScript",
    "JavaScript",
    "Python",
    "Java",
    "C",
    "C++",
    "SQL",
    "HTML/CSS",
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "PyTorch",
    "Electron",
    "Tailwind CSS",
    "PostgreSQL",
    "SQLite",
    "Supabase",
    "Git",
    "GitHub Actions",
    "Gemini API",
    "WebLLM",
    "WebGPU"
  ],
  "interests": [
    "board games",
    "pickleball",
    "a cappella singing (Water Boys ftw!)"
  ]
}

// Count published apps, demos, and prototypes, excluding award-only projects.
export const liveProjectCount = resume.projects.filter(project => project.live && /^Live(?: ·|$)/.test(project.status)).length
export const portfolioStats = [...resume.stats.slice(0, 2), { label: "Live products", value: String(liveProjectCount) }, ...resume.stats.slice(2)]
