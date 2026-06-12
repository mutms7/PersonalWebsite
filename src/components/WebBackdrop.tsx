import React, { useEffect, useRef } from 'react'

/* A slow, shifting constellation web behind the story map. */
export default function WebBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let raf = 0

    type P = { x: number; y: number; vx: number; vy: number }
    let points: P[] = []

    function resize() {
      if (!canvas || !ctx) return
      const parent = canvas.parentElement
      if (!parent) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = parent.clientWidth
      height = parent.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.max(28, Math.floor(width / 32))
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22
      }))
    }

    function frame() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)
      const linkDist = 150
      for (const p of points) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20
      }
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x
          const dy = points[i].y - points[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.16
            ctx.strokeStyle = `rgba(154, 147, 184, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(points[i].x, points[i].y)
            ctx.lineTo(points[j].x, points[j].y)
            ctx.stroke()
          }
        }
      }
      for (const p of points) {
        ctx.fillStyle = 'rgba(252, 211, 77, 0.28)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2)
        ctx.fill()
      }
      if (!reduced) raf = requestAnimationFrame(frame)
    }

    resize()
    frame()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />
}
