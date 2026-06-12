import React, { useState } from 'react'
import { resume } from '../data/resume'

const accentHex: Record<string, string> = {
  cyan: '#67e8f9',
  emerald: '#6ee7b7',
  amber: '#fcd34d',
  rose: '#fda4af',
  blue: '#93c5fd'
}

type Node = { x: number; y: number; index: number }

// Hand-placed nodes shaped like a branching narrative graph.
const nodes: Node[] = [
  { x: 70, y: 230, index: 0 },
  { x: 200, y: 110, index: 1 },
  { x: 215, y: 330, index: 2 },
  { x: 360, y: 200, index: 3 },
  { x: 470, y: 80, index: 4 },
  { x: 510, y: 310, index: 5 }
]

const edges: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
  [1, 4]
]

function curve(a: Node, b: Node) {
  const mx = (a.x + b.x) / 2
  const my = (a.y + b.y) / 2
  const bend = (a.index + b.index) % 2 === 0 ? 26 : -26
  return `M ${a.x} ${a.y} Q ${mx + bend} ${my + bend} ${b.x} ${b.y}`
}

// Small glyphs drawn around (0,0), fits inside a 22px-radius node.
function Glyph({ title, color }: { title: string; color: string }) {
  switch (title) {
    case 'StockTracker':
      return (
        <g stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="-10,7 -4,1 1,5 10,-6" />
          <polyline points="4,-6 10,-6 10,0" />
        </g>
      )
    case 'The Air Outside':
      // an open book
      return (
        <g stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 0 -6 C -3 -9, -10 -9, -11 -7 L -11 7 C -10 5, -3 5, 0 8" />
          <path d="M 0 -6 C 3 -9, 10 -9, 11 -7 L 11 7 C 10 5, 3 5, 0 8" />
          <line x1="0" y1="-6" x2="0" y2="8" />
        </g>
      )
    case "HardHaq '25":
      // an atom
      return (
        <g stroke={color} strokeWidth="1.6" fill="none">
          <ellipse rx="11" ry="4.5" />
          <ellipse rx="11" ry="4.5" transform="rotate(60)" />
          <ellipse rx="11" ry="4.5" transform="rotate(-60)" />
          <circle r="2" fill={color} stroke="none" />
        </g>
      )
    case 'UmbrellaShare':
      return (
        <g stroke={color} strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M -11 0 A 11 11 0 0 1 11 0 Q 8.2 -3 5.5 0 Q 2.8 -3 0 0 Q -2.8 -3 -5.5 0 Q -8.2 -3 -11 0" fill={color} stroke="none" />
          <line x1="0" y1="0" x2="0" y2="9" />
          <path d="M 0 9 q 0 3 3 3" />
        </g>
      )
    case 'Hairrison':
      // scissors
      return (
        <g stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round">
          <circle cx="-7" cy="6" r="3" />
          <circle cx="7" cy="6" r="3" />
          <line x1="-5" y1="3.5" x2="8" y2="-9" />
          <line x1="5" y1="3.5" x2="-8" y2="-9" />
        </g>
      )
    case 'RougeRogue':
      return (
        <text textAnchor="middle" dominantBaseline="central" fill={color} fontSize="17" fontFamily="IBM Plex Mono, monospace">
          @
        </text>
      )
    default:
      return <circle r="5" fill={color} />
  }
}

export default function StoryGraph() {
  const projects = resume.projects.slice(0, nodes.length)
  const [active, setActive] = useState<number | null>(null)

  function goTo(index: number) {
    const el = document.getElementById(`scene-${index + 1}`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <figure aria-label="Story map of selected projects. Each node links to a project below.">
      <svg viewBox="0 0 580 400" role="group" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        {edges.map(([from, to], i) => (
          <path
            key={`${from}-${to}`}
            d={curve(nodes[from], nodes[to])}
            fill="none"
            stroke={active === from || active === to ? accentHex[projects[to]?.accent] ?? '#403868' : '#403868'}
            strokeWidth={active === from || active === to ? 2 : 1.25}
            className="thread-path"
            style={{ animationDelay: `${i * 0.18}s` }}
          />
        ))}

        {projects.map((project, i) => {
          const node = nodes[i]
          const hex = accentHex[project.accent] ?? '#f1ebdd'
          const isActive = active === i
          return (
            <g
              key={project.title}
              className="node-float cursor-pointer"
              style={{ animationDelay: `${i * 0.6}s` }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              onClick={() => goTo(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  goTo(i)
                }
              }}
              tabIndex={0}
              role="link"
              aria-label={`Go to ${project.title}`}
            >
              <circle cx={node.x} cy={node.y} r={isActive ? 27 : 22} fill="#221c40" stroke={hex} strokeWidth={isActive ? 2.5 : 1.5} />
              <g transform={`translate(${node.x} ${node.y})${isActive ? ' scale(1.2)' : ''}`}>
                <Glyph title={project.title} color={hex} />
              </g>
              <text
                x={node.x}
                y={node.y - (isActive ? 38 : 32)}
                textAnchor="middle"
                fill={isActive ? hex : '#9a93b8'}
                fontSize={isActive ? 14 : 12}
                fontFamily="IBM Plex Mono, monospace"
              >
                {project.title}
              </text>
            </g>
          )
        })}

        <text x={70} y={274} textAnchor="middle" fill="#9a93b8" fontSize={11} fontFamily="IBM Plex Mono, monospace">
          start here
        </text>
      </svg>
      <figcaption className="mt-3 font-mono text-xs text-fade">
        {active !== null ? projects[active].subtitle : 'A map of recent work. Pick a node to jump to its scene.'}
      </figcaption>
    </figure>
  )
}
