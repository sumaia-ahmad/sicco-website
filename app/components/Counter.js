'use client'

import { useRef, useEffect, useState } from 'react'

/**
 * Counts up to a number the first time it scrolls into view.
 * Accepts strings like "1991", "+30", "4" — it animates the digits and keeps
 * any leading/trailing symbols (so "+30" counts 0 → +30).
 */
export default function Counter({ to }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)

  const match = String(to).match(/^(\D*)(\d+)(\D*)$/)
  const prefix = match ? match[1] : ''
  const target = match ? parseInt(match[2], 10) : 0
  const suffix = match ? match[3] : ''

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const duration = 1500
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
          setN(Math.round(target * eased))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target])

  return (
    <span ref={ref}>
      {prefix}
      {n}
      {suffix}
    </span>
  )
}
