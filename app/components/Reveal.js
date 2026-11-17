'use client'

import { useRef, useEffect, useState } from 'react'

/**
 * Wraps any content and fades/slides it into view the first time it scrolls
 * onto screen. Uses IntersectionObserver (cheap, no scroll listeners).
 *
 *   <Reveal delay={120}>...</Reveal>
 *
 * `delay` staggers siblings so a grid animates one-by-one instead of all at once.
 */
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  const [settled, setSettled] = useState(false)

  // Once the entrance has played, drop the stagger so hover effects respond instantly.
  useEffect(() => {
    if (!shown) return
    const id = setTimeout(() => setSettled(true), delay + 1200)
    return () => clearTimeout(id)
  }, [shown, delay])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'reveal--in' : ''} ${className}`.trim()}
      style={{ transitionDelay: settled ? '0ms' : `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
