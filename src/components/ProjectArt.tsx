import React from 'react'

type Props = { title: string }

const frameProps = {
  viewBox: '0 0 560 330',
  xmlns: 'http://www.w3.org/2000/svg',
  className: 'w-full h-auto block',
  role: 'img'
} as const

function Chrome({ label, accent }: { label: string; accent: string }) {
  return (
    <g>
      <rect x="0" y="0" width="560" height="330" rx="14" fill="#1a1635" />
      <rect x="0.75" y="0.75" width="558.5" height="328.5" rx="13" fill="none" stroke="#403868" strokeWidth="1.5" />
      <rect x="0" y="0" width="560" height="34" rx="14" fill="#221c40" />
      <rect x="0" y="20" width="560" height="14" fill="#221c40" />
      <circle cx="22" cy="17" r="5" fill="#fda4af" opacity="0.8" />
      <circle cx="40" cy="17" r="5" fill="#fcd34d" opacity="0.8" />
      <circle cx="58" cy="17" r="5" fill="#6ee7b7" opacity="0.8" />
      <rect x="150" y="9" width="260" height="16" rx="8" fill="#14122b" />
      <text x="280" y="21" textAnchor="middle" fill="#9a93b8" fontSize="10" fontFamily="IBM Plex Mono, monospace">
        {label}
      </text>
      <circle cx="536" cy="17" r="4" fill={accent} />
    </g>
  )
}

function StockTracker() {
  const candles = [
    [70, 32, -1], [96, 24, 1], [122, 40, 1], [148, 28, -1], [174, 46, 1],
    [200, 30, 1], [226, 50, -1], [252, 36, 1], [278, 26, 1], [304, 44, 1]
  ]
  return (
    <svg {...frameProps} aria-label="StockTracker dashboard preview">
      <Chrome label="stockstalker-one.vercel.app" accent="#67e8f9" />
      <rect x="20" y="50" width="120" height="260" rx="8" fill="#14122b" />
      {['AAPL', 'NVDA', 'VTI', 'SHOP', 'TSLA'].map((t, i) => (
        <g key={t}>
          <text x="34" y={80 + i * 38} fill="#f1ebdd" fontSize="11" fontFamily="IBM Plex Mono, monospace">{t}</text>
          <text x="126" y={80 + i * 38} textAnchor="end" fill={i % 2 ? '#fda4af' : '#6ee7b7'} fontSize="10" fontFamily="IBM Plex Mono, monospace">
            {i % 2 ? '-1.2%' : '+2.4%'}
          </text>
          <polyline
            points={`34,${94 + i * 38} 54,${90 + i * 38} 74,${(i % 2 ? 96 : 86) + i * 38} 94,${(i % 2 ? 98 : 84) + i * 38} 114,${(i % 2 ? 100 : 82) + i * 38}`}
            fill="none" stroke={i % 2 ? '#fda4af' : '#6ee7b7'} strokeWidth="1.5" opacity="0.7"
          />
        </g>
      ))}
      <rect x="152" y="50" width="388" height="190" rx="8" fill="#14122b" />
      <text x="168" y="74" fill="#f1ebdd" fontSize="13" fontFamily="IBM Plex Mono, monospace">NVDA · 1D</text>
      <text x="524" y="74" textAnchor="end" fill="#67e8f9" fontSize="13" fontFamily="IBM Plex Mono, monospace">+3.18%</text>
      {[100, 130, 160, 190, 220].map((y) => (
        <line key={y} x1="168" y1={y} x2="524" y2={y} stroke="#2e2754" strokeWidth="0.75" />
      ))}
      {candles.map(([cx, h, dir], i) => (
        <g key={i}>
          <line x1={100 + cx} y1={210 - h - 12} x2={100 + cx} y2={210 - h + Number(h) + 12} stroke="#403868" strokeWidth="1.5" />
          <rect x={94 + Number(cx)} y={210 - Number(h)} width="12" height={Number(h)} rx="2" fill={dir === 1 ? '#6ee7b7' : '#fda4af'} />
        </g>
      ))}
      <path d="M 168 200 C 230 180, 280 196, 330 160 S 460 120, 524 96" fill="none" stroke="#67e8f9" strokeWidth="2" />
      <rect x="152" y="252" width="186" height="58" rx="8" fill="#14122b" />
      <text x="168" y="274" fill="#9a93b8" fontSize="10" fontFamily="IBM Plex Mono, monospace">AI QUICK TAKE</text>
      <rect x="168" y="284" width="150" height="6" rx="3" fill="#2e2754" />
      <rect x="168" y="296" width="110" height="6" rx="3" fill="#2e2754" />
      <rect x="354" y="252" width="186" height="58" rx="8" fill="#14122b" />
      <text x="370" y="274" fill="#9a93b8" fontSize="10" fontFamily="IBM Plex Mono, monospace">NEWS · BRAVE SEARCH</text>
      <rect x="370" y="284" width="150" height="6" rx="3" fill="#2e2754" />
      <rect x="370" y="296" width="92" height="6" rx="3" fill="#2e2754" />
    </svg>
  )
}

function AirOutside() {
  return (
    <svg {...frameProps} aria-label="The Air Outside visual novel preview">
      <Chrome label="the-air-outside.vercel.app" accent="#6ee7b7" />
      <defs>
        <linearGradient id="ao-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2e2754" />
          <stop offset="0.7" stopColor="#1f3a3a" />
          <stop offset="1" stopColor="#14302b" />
        </linearGradient>
      </defs>
      <rect x="20" y="48" width="520" height="186" rx="8" fill="url(#ao-sky)" />
      <circle cx="450" cy="92" r="22" fill="#f1ebdd" opacity="0.85" />
      <circle cx="442" cy="86" r="20" fill="url(#ao-sky)" opacity="0.9" />
      <path d="M 20 200 L 90 168 L 150 196 L 230 158 L 320 198 L 410 172 L 540 204 L 540 234 L 20 234 Z" fill="#14122b" opacity="0.85" />
      <g>
        <ellipse cx="120" cy="234" rx="34" ry="5" fill="#0d0b1e" opacity="0.6" />
        <path d="M 120 150 q -16 0 -16 22 q 0 16 8 22 l -10 40 h 36 l -10 -40 q 8 -6 8 -22 q 0 -22 -16 -22" fill="#0d0b1e" />
        <circle cx="120" cy="142" r="13" fill="#0d0b1e" />
        <path d="M 112 140 q 8 6 16 0" stroke="#6ee7b7" strokeWidth="1.5" fill="none" />
      </g>
      <rect x="20" y="240" width="520" height="70" rx="8" fill="#14122b" />
      <rect x="20.75" y="240.75" width="518.5" height="68.5" rx="7" fill="none" stroke="#403868" strokeWidth="1.5" />
      <text x="40" y="262" fill="#6ee7b7" fontSize="11" fontFamily="IBM Plex Mono, monospace">MARI</text>
      <text x="40" y="282" fill="#f1ebdd" fontSize="12" fontFamily="Georgia, serif" fontStyle="italic">
        The air outside is the same air. You just have to go meet it.
      </text>
      <rect x="40" y="292" width="150" height="12" rx="6" fill="#2e2754" />
      <text x="48" y="301" fill="#9a93b8" fontSize="8" fontFamily="IBM Plex Mono, monospace">› Step onto the balcony</text>
      <rect x="200" y="292" width="120" height="12" rx="6" fill="#2e2754" />
      <text x="208" y="301" fill="#9a93b8" fontSize="8" fontFamily="IBM Plex Mono, monospace">› Stay a little longer</text>
      <text x="524" y="262" textAnchor="end" fill="#9a93b8" fontSize="9" fontFamily="IBM Plex Mono, monospace">scene 12/15</text>
    </svg>
  )
}

function HardHaq() {
  return (
    <svg {...frameProps} aria-label="HardHaq quantum simulation preview">
      <Chrome label="ansys-hfss · capacitance extraction" accent="#fcd34d" />
      <rect x="20" y="50" width="330" height="260" rx="8" fill="#14122b" />
      <rect x="60" y="110" width="110" height="64" rx="6" fill="none" stroke="#fcd34d" strokeWidth="2" />
      <rect x="200" y="180" width="110" height="64" rx="6" fill="none" stroke="#67e8f9" strokeWidth="2" />
      <path d="M 170 142 C 200 142, 180 212, 200 212" fill="none" stroke="#f1ebdd" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M 80 130 h 70 M 80 144 h 70 M 80 158 h 70" stroke="#fcd34d" strokeWidth="1" opacity="0.5" />
      <path d="M 220 200 h 70 M 220 214 h 70 M 220 228 h 70" stroke="#67e8f9" strokeWidth="1" opacity="0.5" />
      <text x="115" y="100" textAnchor="middle" fill="#fcd34d" fontSize="10" fontFamily="IBM Plex Mono, monospace">qubit A</text>
      <text x="255" y="262" textAnchor="middle" fill="#67e8f9" fontSize="10" fontFamily="IBM Plex Mono, monospace">qubit B</text>
      <path d="M 40 286 q 20 -14 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0" fill="none" stroke="#fda4af" strokeWidth="1.5" opacity="0.8" />
      <rect x="366" y="50" width="174" height="150" rx="8" fill="#14122b" />
      <text x="382" y="72" fill="#9a93b8" fontSize="10" fontFamily="IBM Plex Mono, monospace">MAXWELL C-MATRIX</text>
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={382 + c * 36}
            y={84 + r * 26}
            width="30"
            height="20"
            rx="3"
            fill={r === c ? '#fcd34d' : '#2e2754'}
            opacity={r === c ? 0.9 : 0.5 + 0.1 * ((r + c) % 3)}
          />
        ))
      )}
      <rect x="366" y="212" width="174" height="98" rx="8" fill="#14122b" />
      <text x="382" y="234" fill="#9a93b8" fontSize="10" fontFamily="IBM Plex Mono, monospace">COUPLING</text>
      <text x="382" y="262" fill="#fcd34d" fontSize="20" fontFamily="IBM Plex Mono, monospace">35.8 MHz</text>
      <text x="382" y="284" fill="#9a93b8" fontSize="10" fontFamily="IBM Plex Mono, monospace">vs 900 MHz detuning</text>
      <text x="382" y="300" fill="#6ee7b7" fontSize="10" fontFamily="IBM Plex Mono, monospace">✓ 1st place · 20+ teams</text>
    </svg>
  )
}

function UmbrellaShare() {
  return (
    <svg {...frameProps} aria-label="UmbrellaShare kiosk preview">
      <Chrome label="umbrellashare · kiosk + android" accent="#93c5fd" />
      <rect x="20" y="48" width="520" height="262" rx="8" fill="#171430" />
      <path d="M 40 230 v -90 h 36 v 90 M 96 230 v -120 h 44 v 120 M 160 230 v -74 h 30 v 74 M 420 230 v -104 h 40 v 104 M 480 230 v -82 h 34 v 82" fill="#221c40" stroke="#2e2754" strokeWidth="1" />
      {Array.from({ length: 18 }).map((_, i) => (
        <line
          key={i}
          x1={40 + i * 28}
          y1={60 + (i % 4) * 8}
          x2={32 + i * 28}
          y2={84 + (i % 4) * 8}
          stroke="#93c5fd"
          strokeWidth="1"
          opacity="0.45"
        />
      ))}
      <g>
        <path d="M 250 120 a 46 46 0 0 1 92 0 q -7.5 -10 -15.5 0 q -7.5 -10 -15.5 0 q -7.5 -10 -15.5 0 q -7.5 -10 -15.5 0 q -7.5 -10 -15 0 q -7 -10 -15 0" fill="#93c5fd" />
        <line x1="296" y1="120" x2="296" y2="196" stroke="#f1ebdd" strokeWidth="3" />
        <path d="M 296 196 q 0 10 10 10" fill="none" stroke="#f1ebdd" strokeWidth="3" />
      </g>
      <rect x="208" y="150" width="58" height="86" rx="6" fill="#14122b" stroke="#403868" strokeWidth="1.5" />
      <rect x="216" y="160" width="42" height="30" rx="3" fill="#2e2754" />
      <text x="237" y="179" textAnchor="middle" fill="#93c5fd" fontSize="9" fontFamily="IBM Plex Mono, monospace">SCAN ID</text>
      <rect x="216" y="198" width="42" height="8" rx="2" fill="#6ee7b7" opacity="0.8" />
      <rect x="216" y="212" width="42" height="8" rx="2" fill="#2e2754" />
      <path d="M 20 236 h 520" stroke="#2e2754" strokeWidth="2" />
      <ellipse cx="296" cy="252" rx="60" ry="6" fill="#93c5fd" opacity="0.12" />
      <rect x="360" y="148" width="52" height="92" rx="8" fill="#14122b" stroke="#403868" strokeWidth="1.5" />
      <rect x="368" y="158" width="36" height="46" rx="3" fill="#221c40" />
      <path d="M 374 186 a 12 12 0 0 1 24 0" fill="#93c5fd" opacity="0.9" />
      <line x1="386" y1="186" x2="386" y2="198" stroke="#f1ebdd" strokeWidth="1.5" />
      <text x="386" y="172" textAnchor="middle" fill="#9a93b8" fontSize="7" fontFamily="IBM Plex Mono, monospace">2 nearby</text>
      <rect x="368" y="212" width="36" height="10" rx="5" fill="#93c5fd" />
      <text x="386" y="220" textAnchor="middle" fill="#14122b" fontSize="7" fontFamily="IBM Plex Mono, monospace">UNLOCK</text>
      <text x="280" y="292" textAnchor="middle" fill="#9a93b8" fontSize="10" fontFamily="IBM Plex Mono, monospace">
        rust backend · java android · uwaterloo id scanner · 3rd place, un-habitat hackathon
      </text>
    </svg>
  )
}

function Hairrison() {
  return (
    <svg {...frameProps} aria-label="Hairrison styling app preview">
      <Chrome label="hairrison.vercel.app" accent="#fda4af" />
      <rect x="20" y="50" width="246" height="200" rx="8" fill="#14122b" />
      <text x="143" y="74" textAnchor="middle" fill="#9a93b8" fontSize="10" fontFamily="IBM Plex Mono, monospace">BEFORE</text>
      <circle cx="143" cy="140" r="34" fill="#2e2754" />
      <path d="M 109 136 q 0 -36 34 -36 q 34 0 34 36 q -10 -22 -34 -22 q -24 0 -34 22" fill="#403868" />
      <ellipse cx="143" cy="206" rx="44" ry="18" fill="#2e2754" />
      <rect x="294" y="50" width="246" height="200" rx="8" fill="#14122b" stroke="#fda4af" strokeWidth="1.5" />
      <text x="417" y="74" textAnchor="middle" fill="#fda4af" fontSize="10" fontFamily="IBM Plex Mono, monospace">AFTER · CURTAIN FRINGE</text>
      <circle cx="417" cy="140" r="34" fill="#2e2754" />
      <path d="M 383 140 q -4 -44 34 -44 q 38 0 34 44 q -4 -18 -12 -22 q 2 12 -6 16 q 0 -14 -16 -16 q -16 2 -16 16 q -8 -4 -6 -16 q -8 4 -12 22" fill="#fda4af" />
      <ellipse cx="417" cy="206" rx="44" ry="18" fill="#2e2754" />
      <path d="M 270 150 h 14 m -5 -5 l 5 5 l -5 5" stroke="#f1ebdd" strokeWidth="2" fill="none" />
      {['fringe', 'bob', 'waves', 'buzz'].map((s, i) => (
        <g key={s}>
          <rect x={20 + i * 84} y="262" width="76" height="20" rx="10" fill={i === 0 ? '#fda4af' : '#221c40'} stroke={i === 0 ? 'none' : '#403868'} />
          <text x={58 + i * 84} y="275" textAnchor="middle" fill={i === 0 ? '#14122b' : '#9a93b8'} fontSize="9" fontFamily="IBM Plex Mono, monospace">{s}</text>
        </g>
      ))}
      <rect x="376" y="258" width="164" height="48" rx="8" fill="#6ee7b7" />
      <text x="458" y="278" textAnchor="middle" fill="#14122b" fontSize="11" fontFamily="IBM Plex Mono, monospace">Pay with Stripe</text>
      <text x="458" y="294" textAnchor="middle" fill="#14302b" fontSize="9" fontFamily="IBM Plex Mono, monospace">$4.99 · secure checkout</text>
    </svg>
  )
}

function RougeRogue() {
  const wall = '#403868'
  const floor = '#221c40'
  const cells: string[] = []
  const map = [
    '############################',
    '#......#########....########',
    '#......+.......#....+......#',
    '#......#.......#....#......#',
    '########.......######......#',
    '#......+.......+....+......#',
    '#......#########....########',
    '############################'
  ]
  return (
    <svg {...frameProps} aria-label="RougeRogue dungeon preview">
      <Chrome label="rougerogue.exe · roguesharp + rlnet" accent="#fcd34d" />
      <rect x="20" y="50" width="520" height="222" rx="8" fill="#0d0b1e" />
      {map.map((row, r) =>
        row.split('').map((ch, c) => {
          const x = 36 + c * 17.5
          const y = 64 + r * 25
          if (ch === '#')
            return <rect key={`${r}-${c}`} x={x} y={y} width="16" height="23" fill={wall} opacity="0.85" />
          if (ch === '+')
            return <rect key={`${r}-${c}`} x={x} y={y} width="16" height="23" fill="#fcd34d" opacity="0.35" />
          return <rect key={`${r}-${c}`} x={x} y={y} width="16" height="23" fill={floor} opacity="0.6" />
        })
      )}
      <circle cx={36 + 3.5 * 17.5} cy={64 + 2.5 * 25} r="52" fill="#fcd34d" opacity="0.08" />
      <text x={36 + 3 * 17.5 + 8} y={64 + 2 * 25 + 17} textAnchor="middle" fill="#fcd34d" fontSize="16" fontFamily="IBM Plex Mono, monospace">@</text>
      <text x={36 + 12 * 17.5 + 8} y={64 + 2 * 25 + 17} textAnchor="middle" fill="#fda4af" fontSize="14" fontFamily="IBM Plex Mono, monospace">g</text>
      <text x={36 + 21 * 17.5 + 8} y={64 + 5 * 25 + 17} textAnchor="middle" fill="#fda4af" fontSize="14" fontFamily="IBM Plex Mono, monospace">o</text>
      <line x1={36 + 4 * 17.5} y1={64 + 2.5 * 25} x2={36 + 12 * 17.5} y2={64 + 2.5 * 25} stroke="#fda4af" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />
      <rect x="20" y="280" width="520" height="30" rx="8" fill="#14122b" />
      <text x="36" y="299" fill="#6ee7b7" fontSize="10" fontFamily="IBM Plex Mono, monospace">HP ██████████░░ 24/30</text>
      <text x="280" y="299" fill="#9a93b8" fontSize="10" fontFamily="IBM Plex Mono, monospace">depth 3 · the goblin notices you</text>
    </svg>
  )
}

export default function ProjectArt({ title }: Props) {
  switch (title) {
    case 'StockTracker':
      return <StockTracker />
    case 'The Air Outside':
      return <AirOutside />
    case "HardHaq '25":
      return <HardHaq />
    case 'UmbrellaShare':
      return <UmbrellaShare />
    case 'Hairrison':
      return <Hairrison />
    case 'RougeRogue':
      return <RougeRogue />
    default:
      return null
  }
}
