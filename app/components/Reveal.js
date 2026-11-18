'use client'

import { useRef, useEffect, useState } from 'react'

/**
 * Wraps any content and fades/slides it into view the first time it scrolls
 * onto screen. Uses IntersectionObserver (cheap, no scroll listeners).
 *
 *   <Reveal delay={120}>...</Reveal>
 *
 * `delay` staggers siblings so a grid animates one-by-one instead of all at once.
 *
 * Progressive enhancement: the server HTML is fully VISIBLE. Only once
 * JavaScript has run do we hide the elements that are still below the screen,
 * so they can animate in on scroll. If JS is slow, blocked or fails, the
 * visitor still sees every section — just without the animation.
 */
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  // 'static'  → server / no-JS render: visible, no animation
  // 'waiting' → below the screen, hidden until it scrolls into view
  // 'shown'   → animating (or animated) in
  const [phase, setPhase] = useState('static')
  const [settled, setSettled] = useState(false)

  // Once the entrance has played, drop the stagger so hover effects respond instantly.
  useEffect(() => {
    if (phase !== 'shown') return
    const id = setTimeout(() => setSettled(true), delay + 1200)
    return () => clearTimeout(id)
  }, [phase, delay])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Already on screen (or the visitor scrolled before JS loaded): leave it as is.
    if (el.getBoundingClientRect().top < window.innerHeight) return
    setPhase('waiting')
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase('shown')
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const state = phase === 'static' ? 'reveal--in' : phase === 'waiting' ? 'reveal' : 'reveal reveal--in'

  return (
    <Tag
      ref={ref}
      className={`${state} ${className}`.trim()}
      style={phase === 'static' ? undefined : { transitionDelay: settled ? '0ms' : `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
