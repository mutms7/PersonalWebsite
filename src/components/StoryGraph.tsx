import React, { useState } from 'react'
import { resume } from '../data/resume'

const accentHex: Record<string, string> = {
  cyan: '#67e8f9',
  emerald: '#6ee7b7',
  amber: '#fcd34d',
  rose: '#fda4af',
  blue: '#93c5fd'
}

type Node = {
  x: number
  y: number
  index: number
}

// Hand-placed nodes shaped like a branching narrative graph:
// one origin, paths that split, converge, and split again.
const nodes: Node[] = [
  { x: 70, y: 230, index: 0 }, // origin
  { x: 200, y: 110, index: 1 },
  { x: 215, y: 330, index: 2 },
  { x: 360, y: 200, index: 3 },
  { x: 470, y: 80, index: 4 },
  { x: 510, y: 310, index: 5 }
]

// Edges as gentle curves between scene nodes.
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

export default function StoryGraph() {
  const projects = resume.projects.slice(0, nodes.length)
  const [active, setActive] = useState<number | null>(null)

  function goTo(index: number) {
    const el = document.getElementById(`scene-${index + 1}`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <figure aria-label="Story map of selected projects. Each node links to a project below.">
      <svg
        viewBox="0 0 580 400"
        role="group"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* threads */}
        {edges.map(([from, to], i) => (
          <path
            key={`${from}-${to}`}
            d={curve(nodes[from], nodes[to])}
            fill="none"
            stroke={
              active === from || active === to ? accentHex[projects[to]?.accent] ?? '#403868' : '#403868'
            }
            strokeWidth={active === from || active === to ? 2 : 1.25}
            className="thread-path"
            style={{ animationDelay: `${i * 0.18}s` }}
          />
        ))}

        {/* scene nodes */}
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
              <circle cx={node.x} cy={node.y} r={isActive ? 26 : 20} fill="#221c40" stroke={hex} strokeWidth={isActive ? 2.5 : 1.5} />
              <circle cx={node.x} cy={node.y} r={5} fill={hex} />
              <text
                x={node.x}
                y={node.y - (isActive ? 36 : 30)}
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

        {/* origin marker */}
        <text x={70} y={272} textAnchor="middle" fill="#9a93b8" fontSize={11} fontFamily="IBM Plex Mono, monospace">
          start here
        </text>
      </svg>
      <figcaption className="mt-3 font-mono text-xs text-fade">
        {active !== null ? projects[active].subtitle : 'A map of recent work. Pick a node to jump to its scene.'}
      </figcaption>
    </figure>
  )
}
