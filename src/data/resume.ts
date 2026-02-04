export type Project = {
  title: string
  link?: string
  stack: string[]
  date?: string
  bullets: string[]
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

export type Resume = {
  name: string
  github?: string
  linkedin?: string
  email?: string
  phone?: string
  education: Education[]
  projects: Project[]
  experience: Experience[]
  skills: string[]
}

export const resume: Resume = {
  name: 'William Chenyin',
  github: 'github.com/mutms7',
  linkedin: 'linkedin.com/in/william-chenyin',
  email: 'chenyinwilliam@gmail.com',
  phone: '778-903-6567',
  education: [
    {
      school: 'University of Waterloo, Waterloo, ON',
      degree: 'Bachelor of Computer Science (Honours), Co-operative Program — GPA: 4.0/4.0',
      date: 'Sep 2025 – Apr 2030 (expected)',
      details: "President’s Scholarship w/ Distinction, BC Provincial District/Authority Scholarship"
    }
  ],
  projects: [
    {
      title: "HardHaq '25",
      link: 'https://github.com',
      stack: ['Python', 'ANSYS HFSS'],
      date: 'Nov. 2025',
      bullets: [
        'Won first place among 20+ teams at Canada’s only quantum hardware hackathon across North America',
        'Developed Python scripts to automate ANSYS HFSS simulations and extract Maxwell capacitance matrices',
        'Conducted Finite Element Analysis to optimize coupling strength of 35.8 MHz against 900 MHz detuning'
      ]
    },
    {
      title: 'Clothing E-Commerce Platform',
      link: 'https://github.com',
      stack: ['Next.js', 'React', 'Stripe', 'PayPal'],
      date: 'Jan. 2026 – Present',
      bullets: [
        'Built a full-stack online store with Next.js and React',
        'Integrated Stripe and PayPal payments and NextAuth for auth',
        'Developed responsive interfaces and increased user-friendliness'
      ]
    }
  ],
  experience: [
    {
      role: 'Sales Associate',
      company: 'Boathouse Retail Store',
      date: 'Oct. 2023 – Oct. 2024',
      location: 'Coquitlam, BC',
      bullets: ['Assisted customers and processed transactions', 'Handled POS and security tag removal']
    },
    {
      role: 'Math Tutor',
      company: 'RootMaths Math Tutoring',
      date: 'Jun. 2023 – Aug. 2023',
      location: 'Coquitlam, BC',
      bullets: ['Tutored children ages 8–10 in groups of 3', 'Built student confidence with accessible explanations']
    }
  ],
  skills: [
    'Python',
    'Java',
    'TypeScript',
    'JavaScript',
    'HTML/CSS',
    'C/C++',
    'Rust',
    'React',
    'Next.js',
    'Node.js',
    'Flask',
    'Tailwind CSS',
    'Git',
    'MySQL',
    'PostgreSQL',
    'Stripe',
    'PayPal'
  ]
}
