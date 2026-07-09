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

function ConquestCartes() {
  const market = ['a', 'a', 'a', 'r', 'a', 'a', 'a', 'a', 'a', 'v']
  const stripFor = (t: string) => (t === 'r' ? '#c9922e' : t === 'v' ? '#8a3a72' : '#5a8fd6')
  return (
    <svg {...frameProps} aria-label="ConquestCartes deck-builder preview">
      <Chrome label="conquest-cartes.vercel.app" accent="#c4b5fd" />
      <rect x="20" y="48" width="520" height="262" rx="8" fill="#100d20" />
      <text x="34" y="70" fill="#e8c87a" fontSize="14" fontFamily="Georgia, serif" letterSpacing="1">CONQUEST CARTES</text>
      <rect x="214" y="54" width="150" height="20" rx="10" fill="#1b1630" stroke="#4a3f68" strokeWidth="1" />
      <text x="228" y="68" fill="#9a93b8" fontSize="9" fontFamily="IBM Plex Mono, monospace">RELICS</text>
      {[286, 306, 326, 346].map((cx) => (
        <circle key={cx} cx={cx} cy="64" r="6" fill="none" stroke="#6a5f88" strokeWidth="1" />
      ))}
      <text x="26" y="92" fill="#c9922e" fontSize="8" fontFamily="IBM Plex Mono, monospace">TREASURY</text>
      <text x="280" y="92" textAnchor="middle" fill="#5a8fd6" fontSize="8" fontFamily="IBM Plex Mono, monospace">BARRACKS</text>
      <text x="534" y="92" textAnchor="end" fill="#a85a8a" fontSize="8" fontFamily="IBM Plex Mono, monospace">ESTATES</text>
      {[0, 1].map((i) => (
        <g key={`t${i}`}>
          <rect x="26" y={98 + i * 74} width="46" height="66" rx="5" fill="#241d1a" stroke="#c9922e" strokeWidth="1" />
          <rect x="30" y={102 + i * 74} width="38" height="26" rx="3" fill="#3a2e1c" />
          <circle cx="40" cy={110 + i * 74} r="6" fill="#c9922e" opacity="0.7" />
        </g>
      ))}
      {market.map((t, i) => {
        const col = i % 5
        const row = Math.floor(i / 5)
        const x = 96 + col * 78
        const y = 98 + row * 74
        return (
          <g key={`m${i}`}>
            <rect x={x} y={y} width="62" height="66" rx="5" fill="#1c1730" stroke="#3a3358" strokeWidth="1" />
            <rect x={x + 4} y={y + 4} width="54" height="26" rx="3" fill="#2a2340" />
            <rect x={x} y={y + 40} width="62" height="4" fill={stripFor(t)} opacity="0.9" />
            <circle cx={x + 13} cy={y + 13} r="6" fill="#3a3358" />
            <rect x={x + 6} y={y + 48} width="50" height="3" rx="1.5" fill="#3a3358" />
            <rect x={x + 6} y={y + 55} width="34" height="3" rx="1.5" fill="#3a3358" />
          </g>
        )
      })}
      {[0, 1].map((i) => (
        <g key={`e${i}`}>
          <rect x="496" y={98 + i * 74} width="44" height="66" rx="5" fill="#2a1d2a" stroke="#8a3a72" strokeWidth="1" />
          <rect x="500" y={102 + i * 74} width="36" height="26" rx="3" fill="#3a2438" />
          <text x="518" y={152 + i * 74} textAnchor="middle" fill="#c98ab5" fontSize="8" fontFamily="IBM Plex Mono, monospace">{i ? '3' : '6'} VP</text>
        </g>
      ))}
      <rect x="20" y="250" width="150" height="60" rx="6" fill="#161227" />
      <text x="34" y="272" fill="#e8c87a" fontSize="10" fontFamily="IBM Plex Mono, monospace">COINS · 0</text>
      <text x="34" y="289" fill="#9a93b8" fontSize="10" fontFamily="IBM Plex Mono, monospace">ACTIONS · 1</text>
      <text x="34" y="306" fill="#9a93b8" fontSize="10" fontFamily="IBM Plex Mono, monospace">BUYS · 1</text>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={`h${i}`} transform={`rotate(${(i - 2) * 7} 320 430)`}>
          <rect x={282 + i * 6} y="256" width="42" height="56" rx="4" fill="#241d1a" stroke="#c9922e" strokeWidth="1" />
          <circle cx={303 + i * 6} cy="272" r="6" fill="#c9922e" opacity="0.6" />
        </g>
      ))}
      <rect x="448" y="280" width="92" height="30" rx="6" fill="#d9b45e" />
      <text x="494" y="300" textAnchor="middle" fill="#1a1206" fontSize="10" fontFamily="IBM Plex Mono, monospace">END TURN</text>
    </svg>
  )
}

function BlendTogether() {
  return (
    <svg {...frameProps} aria-label="Blend Together 3D modeling preview">
      <Chrome label="blending3d.vercel.app" accent="#93c5fd" />
      <rect x="20" y="48" width="520" height="262" rx="8" fill="#0e1526" />
      <text x="34" y="68" fill="#f1ebdd" fontSize="12" fontFamily="Instrument Sans, sans-serif">Blend Together</text>
      <circle cx="150" cy="63" r="4" fill="#fb7185" />
      <rect x="250" y="53" width="72" height="20" rx="6" fill="#3b82f6" />
      <text x="286" y="67" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="IBM Plex Mono, monospace">Start round</text>
      <rect x="328" y="53" width="48" height="20" rx="6" fill="#1b2438" stroke="#33415c" strokeWidth="1" />
      <text x="352" y="67" textAnchor="middle" fill="#c9d4e6" fontSize="9" fontFamily="IBM Plex Mono, monospace">★ Daily</text>
      <rect x="28" y="86" width="86" height="216" rx="8" fill="#141c2e" stroke="#28324a" strokeWidth="1" />
      {['Cube', 'Sphere', 'Vertex', 'Edge', 'Face', 'Move', 'Rotate'].map((t, i) => (
        <g key={t}>
          <rect x="36" y={96 + i * 28} width="70" height="20" rx="5" fill={i === 4 || i === 5 ? '#3b82f6' : '#1b2438'} stroke="#2c3852" strokeWidth="1" />
          <text x="44" y={110 + i * 28} fill={i === 4 || i === 5 ? '#ffffff' : '#aab7cc'} fontSize="9" fontFamily="IBM Plex Mono, monospace">{t}</text>
        </g>
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={`g${i}`} x1="132" y1={132 + i * 34} x2="440" y2={132 + i * 34} stroke="#1c2740" strokeWidth="1" />
      ))}
      <polygon points="300,152 360,152 360,222 300,222" fill="#c8a06a" opacity="0.92" />
      <polygon points="300,152 330,130 390,130 360,152" fill="#9fb0c8" />
      <polygon points="360,152 390,130 390,200 360,222" fill="#8290ab" />
      <line x1="330" y1="187" x2="330" y2="122" stroke="#4ade80" strokeWidth="2.5" />
      <line x1="330" y1="187" x2="406" y2="207" stroke="#f87171" strokeWidth="2.5" />
      <line x1="330" y1="187" x2="272" y2="216" stroke="#60a5fa" strokeWidth="2.5" />
      <rect x="132" y="264" width="40" height="40" rx="4" fill="#1b2438" stroke="#33415c" strokeWidth="1" />
      <text x="152" y="288" textAnchor="middle" fill="#8ea3bf" fontSize="7" fontFamily="IBM Plex Mono, monospace">FRONT</text>
      <rect x="212" y="266" width="182" height="40" rx="8" fill="#131b2c" stroke="#3b82f6" strokeWidth="1" />
      <text x="303" y="283" textAnchor="middle" fill="#7fb0ff" fontSize="8" fontFamily="IBM Plex Mono, monospace">TUTORIAL · STEP 3 OF 7</text>
      <text x="303" y="298" textAnchor="middle" fill="#f1ebdd" fontSize="9" fontFamily="Instrument Sans, sans-serif">Drag the arrows to move the face</text>
      <rect x="452" y="86" width="88" height="118" rx="8" fill="#141c2e" stroke="#28324a" strokeWidth="1" />
      <text x="462" y="102" fill="#8ea3bf" fontSize="8" fontFamily="IBM Plex Mono, monospace">COLOR</text>
      {['#f87171', '#fb923c', '#fcd34d', '#4ade80', '#22d3ee', '#60a5fa', '#a78bfa', '#f472b6'].map((c, i) => (
        <circle key={c} cx={466 + (i % 4) * 20} cy={118 + Math.floor(i / 4) * 18} r="6" fill={c} />
      ))}
      <rect x="462" y="158" width="72" height="20" rx="5" fill="#3b82f6" />
      <text x="498" y="172" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="IBM Plex Mono, monospace">Color face</text>
    </svg>
  )
}

function Molt() {
  return (
    <svg {...frameProps} aria-label="Molt 3D platformer preview">
      <Chrome label="molt-one.vercel.app" accent="#fb923c" />
      <defs>
        <linearGradient id="molt-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bcd0e6" />
          <stop offset="0.55" stopColor="#e9dcc0" />
          <stop offset="1" stopColor="#efe4c8" />
        </linearGradient>
      </defs>
      <rect x="20" y="48" width="520" height="262" rx="8" fill="url(#molt-sky)" />
      <ellipse cx="280" cy="150" rx="150" ry="118" fill="#f6eecf" opacity="0.6" />
      <polygon points="20,120 96,150 96,310 20,310" fill="#b07b45" opacity="0.85" />
      <polygon points="540,120 464,150 464,310 540,310" fill="#b07b45" opacity="0.85" />
      <polygon points="96,310 464,310 396,222 164,222" fill="#d8c79f" />
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line
          key={i}
          x1={164 + (96 - 164) * t}
          y1={222 + (310 - 222) * t}
          x2={396 + (464 - 396) * t}
          y2={222 + (310 - 222) * t}
          stroke="#b9a67c"
          strokeWidth="1"
        />
      ))}
      <polygon points="228,152 342,152 362,168 248,168" fill="#8a7f6a" />
      <rect x="246" y="132" width="16" height="4" fill="#5cc8e0" />
      <rect x="300" y="128" width="14" height="4" fill="#5cc8e0" />
      <circle cx="332" cy="122" r="4" fill="#fcd34d" />
      <ellipse cx="280" cy="250" rx="20" ry="7" fill="#000000" opacity="0.13" />
      <rect x="268" y="190" width="24" height="34" rx="10" fill="#e07b3a" />
      <rect x="274" y="206" width="12" height="10" rx="2" fill="#efe4c8" opacity="0.7" />
      <circle cx="280" cy="182" r="10" fill="#e8b98a" />
      <path d="M 270 178 q 10 -8 20 0" fill="#4a3524" />
      <rect x="272" y="224" width="6" height="16" fill="#2f2a3a" />
      <rect x="282" y="224" width="6" height="16" fill="#2f2a3a" />
      <rect x="26" y="54" width="128" height="20" rx="10" fill="#2a2620" opacity="0.9" />
      <circle cx="38" cy="64" r="5" fill="#fb923c" />
      <text x="48" y="68" fill="#f1ebdd" fontSize="9" fontFamily="Instrument Sans, sans-serif">Bare · slow-seeing</text>
      <rect x="26" y="78" width="104" height="18" rx="9" fill="#2a2620" opacity="0.85" />
      <text x="36" y="91" fill="#fcd34d" fontSize="9" fontFamily="IBM Plex Mono, monospace">★ 0 / 4 needed</text>
      <rect x="150" y="292" width="260" height="16" rx="8" fill="#2a2620" opacity="0.85" />
      <text x="280" y="304" textAnchor="middle" fill="#d9d2c4" fontSize="8" fontFamily="IBM Plex Mono, monospace">WASD move · Space jump · Q molt</text>
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
    case 'ConquestCartes':
      return <ConquestCartes />
    case 'Blend Together':
      return <BlendTogether />
    case 'Molt':
      return <Molt />
    default:
      return null
  }
}
