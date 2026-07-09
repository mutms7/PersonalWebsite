import React, { useMemo, useState } from 'react'
import { resume } from '../data/resume'

const accentHex: Record<string, string> = {
  cyan: '#67e8f9',
  emerald: '#6ee7b7',
  amber: '#fcd34d',
  rose: '#fda4af',
  blue: '#93c5fd',
  violet: '#c4b5fd',
  orange: '#fb923c'
}

// Positions keyed by project index in resume.projects:
// 0 ConquestCartes · 1 Blend Together · 2 Molt · 3 StockTracker · 4 The Air Outside
// 5 HardHaq '25 · 6 UmbrellaShare · 7 Hairrison · 8 RougeRogue
// Clustered by theme: interactive worlds (left), hackathon podiums (centre), live products (right).
const positions: Record<number, { x: number; y: number }> = {
  4: { x: 255, y: 150 },
  8: { x: 180, y: 295 },
  2: { x: 300, y: 415 },
  5: { x: 600, y: 150 },
  6: { x: 665, y: 295 },
  7: { x: 585, y: 415 },
  3: { x: 960, y: 150 },
  0: { x: 1035, y: 295 },
  1: { x: 955, y: 415 }
}

const clusters = [
  { label: 'interactive worlds', x: 245, y: 64 },
  { label: 'hackathon podiums', x: 625, y: 64 },
  { label: 'live products', x: 980, y: 64 }
]

type Edge = { a: number; b: number; label: string }

const edgeList: Edge[] = [
  { a: 4, b: 8, label: 'Two C# worlds: a branching narrative engine and a procedural dungeon' },
  { a: 8, b: 2, label: 'Playable worlds: a roguelike crawler and a 3D platformer' },
  { a: 4, b: 2, label: 'Same world and mood: suits as masks, presence over performance' },
  { a: 5, b: 6, label: 'Hackathon podiums: 1st in quantum hardware, 3rd at UN-Habitat' },
  { a: 6, b: 7, label: 'Hackathon builds around everyday, human problems' },
  { a: 3, b: 7, label: 'TypeScript + React products shipped live on Vercel' },
  { a: 3, b: 5, label: 'Heavy data on both sides: market feeds and Maxwell capacitance matrices' },
  { a: 0, b: 1, label: 'Live multiplayer on shared, synced game state' },
  { a: 7, b: 1, label: 'AI does the heavy lifting: generative restyling and a vision-model judge' },
  { a: 0, b: 2, label: 'Two browser games of mine: a deck-builder and a 3D platformer' }
]

function curve(a: { x: number; y: number }, b: { x: number; y: number }, i: number) {
  const mx = (a.x + b.x) / 2
  const my = (a.y + b.y) / 2
  const bend = i % 2 === 0 ? 34 : -34
  return { d: `M ${a.x} ${a.y} Q ${mx} ${my + bend} ${b.x} ${b.y}`, lx: mx, ly: my + bend * 0.55 }
}

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
      return (
        <g stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 0 -6 C -3 -9, -10 -9, -11 -7 L -11 7 C -10 5, -3 5, 0 8" />
          <path d="M 0 -6 C 3 -9, 10 -9, 11 -7 L 11 7 C 10 5, 3 5, 0 8" />
          <line x1="0" y1="-6" x2="0" y2="8" />
        </g>
      )
    case "HardHaq '25":
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
    case 'ConquestCartes':
      return (
        <g stroke={color} strokeWidth="1.8" fill="none" strokeLinejoin="round">
          <rect x="-10" y="-8" width="12" height="17" rx="2" transform="rotate(-13 -4 1)" />
          <rect x="-2" y="-9" width="12" height="17" rx="2" transform="rotate(13 4 -1)" />
        </g>
      )
    case 'Blend Together':
      return (
        <g stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round">
          <polygon points="0,-10 9,-5 0,0 -9,-5" />
          <path d="M -9 -5 L -9 6 L 0 11 L 9 6 L 9 -5" />
          <line x1="0" y1="0" x2="0" y2="11" />
        </g>
      )
    case 'Molt':
      return (
        <g stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="0" cy="-6" r="3.5" />
          <path d="M 0 -2 L 0 6 M -5 1 L 0 -2 L 5 1 M -4 11 L 0 6 L 4 11" />
        </g>
      )
    default:
      return <circle r="5" fill={color} />
  }
}

export default function StoryGraph() {
  const projects = resume.projects
  const [activeNode, setActiveNode] = useState<number | null>(null)
  const [activeEdge, setActiveEdge] = useState<number | null>(null)

  const caption = useMemo(() => {
    if (activeEdge !== null) return edgeList[activeEdge].label
    if (activeNode !== null) {
      const related = edgeList
        .filter((e) => e.a === activeNode || e.b === activeNode)
        .map((e) => projects[e.a === activeNode ? e.b : e.a].title)
      return `${projects[activeNode].title} connects to ${related.join(' and ')}. Click to read its scene.`
    }
    return 'Nine projects, three clusters. Hover a thread to see why two stories connect; click a node to jump to it.'
  }, [activeNode, activeEdge, projects])

  function goTo(index: number) {
    const el = document.getElementById(`scene-${index + 1}`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const edgeIsLit = (e: Edge, i: number) => activeEdge === i || activeNode === e.a || activeNode === e.b

  return (
    <figure aria-label="Story map of projects grouped by theme. Threads describe how projects relate.">
      <svg viewBox="0 0 1200 480" role="group" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        {clusters.map((c) => (
          <text key={c.label} x={c.x} y={c.y} textAnchor="middle" fill="#9a93b8" opacity="0.7" fontSize="15" letterSpacing="4" fontFamily="IBM Plex Mono, monospace">
            {c.label.toUpperCase()}
          </text>
        ))}

        {edgeList.map((edge, i) => {
          const { d, lx, ly } = curve(positions[edge.a], positions[edge.b], i)
          const lit = edgeIsLit(edge, i)
          const hex = accentHex[projects[edge.b].accent]
          return (
            <g
              key={i}
              onMouseEnter={() => setActiveEdge(i)}
              onMouseLeave={() => setActiveEdge(null)}
              className="cursor-help"
            >
              {/* fat invisible hit area so the thread is easy to hover */}
              <path d={d} fill="none" stroke="transparent" strokeWidth="22" />
              <path
                d={d}
                fill="none"
                stroke={lit ? hex : '#403868'}
                strokeWidth={lit ? 2.25 : 1.25}
                className="thread-path"
                style={{ animationDelay: `${i * 0.18}s`, transition: 'stroke 0.25s' }}
              />
            </g>
          )
        })}

        {Object.entries(positions).map(([key, pos]) => {
          const i = Number(key)
          const project = projects[i]
          const hex = accentHex[project.accent] ?? '#f1ebdd'
          const isActive = activeNode === i
          return (
            <g
              key={project.title}
              className="node-float cursor-pointer"
              style={{ animationDelay: `${i * 0.6}s` }}
              onMouseEnter={() => setActiveNode(i)}
              onMouseLeave={() => setActiveNode(null)}
              onFocus={() => setActiveNode(i)}
              onBlur={() => setActiveNode(null)}
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
              <circle cx={pos.x} cy={pos.y} r={isActive ? 30 : 24} fill="#221c40" stroke={hex} strokeWidth={isActive ? 2.5 : 1.5} />
              <g transform={`translate(${pos.x} ${pos.y})${isActive ? ' scale(1.25)' : ''}`}>
                <Glyph title={project.title} color={hex} />
              </g>
              <text
                x={pos.x}
                y={pos.y + (isActive ? 52 : 46)}
                textAnchor="middle"
                fill={isActive ? hex : '#9a93b8'}
                fontSize={isActive ? 17 : 15}
                fontFamily="IBM Plex Mono, monospace"
              >
                {project.title}
              </text>
            </g>
          )
        })}

        {/* hover pill, painted last so it sits above the nodes */}
        {activeEdge !== null &&
          (() => {
            const edge = edgeList[activeEdge]
            const { lx, ly } = curve(positions[edge.a], positions[edge.b], activeEdge)
            const hex = accentHex[projects[edge.b].accent]
            const short = edge.label.split(':')[0]
            return (
              <g pointerEvents="none">
                <rect
                  x={lx - short.length * 4.6 - 14}
                  y={ly - 16}
                  width={short.length * 9.2 + 28}
                  height="30"
                  rx="15"
                  fill="#14122b"
                  stroke={hex}
                  strokeWidth="1"
                />
                <text x={lx} y={ly + 4} textAnchor="middle" fill={hex} fontSize="14" fontFamily="IBM Plex Mono, monospace">
                  {short}
                </text>
              </g>
            )
          })()}
      </svg>
      <figcaption className="mx-auto mt-4 max-w-3xl text-center font-mono text-sm text-fade min-h-[2.5rem] px-4">
        {caption}
      </figcaption>
    </figure>
  )
}
