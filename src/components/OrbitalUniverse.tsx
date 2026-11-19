
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './OrbitalUniverse.css'

const particles = Array.from({ length: 30 }, (_, i) => {
  const angle = i * 2.39996
  const radius = 100 + Math.sqrt(i / 30) * 145

  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  }
})

const orbits = [
  { id: 'one', speed: 5.5, reverse: false },
  { id: 'two', speed: 8, reverse: true },
  { id: 'three', speed: 11, reverse: false },
  { id: 'four', speed: 6.5, reverse: true },
]

export default function OrbitalUniverse() {
  const containerRef = useRef<HTMLDivElement>(null)
  const systemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const system = systemRef.current

    if (!container || !system) return

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return

    const context = gsap.context(() => {
      // Three simultaneous axes create complex movement.
      gsap.to('.orbital-axis-x', {
        rotationX: '+=360',
        duration: 18,
        ease: 'none',
        repeat: -1,
      })

      gsap.to('.orbital-axis-y', {
        rotationY: '+=360',
        duration: 13,
        ease: 'none',
        repeat: -1,
      })

      gsap.to('.orbital-axis-z', {
        rotationZ: '+=360',
        duration: 25,
        ease: 'none',
        repeat: -1,
      })

      // Each satellite travels around its own ring.
      orbits.forEach((orbit) => {
        gsap.to(`.satellite-track-${orbit.id}`, {
          rotation: orbit.reverse ? -360 : 360,
          duration: orbit.speed,
          ease: 'none',
          repeat: -1,
        })
      })

      // The core pulses but does not rotate edge-on.
      gsap.to('.energy-core', {
        scale: 1.12,
        duration: 1.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })

      gsap.to('.energy-halo', {
        scale: 1.25,
        opacity: 0.35,
        duration: 2.4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })

      gsap.to('.orbital-particle', {
        opacity: 0.25,
        duration: 1.5,
        stagger: {
          each: 0.08,
          repeat: -1,
          yoyo: true,
        },
      })
    }, container)

    const move = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5

      gsap.to(system, {
        x: x * 35,
        y: y * 35,
        duration: 0.6,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    const reset = () => {
      gsap.to(system, {
        x: 0,
        y: 0,
        duration: 0.8,
        overwrite: 'auto',
      })
    }

    container.addEventListener('pointermove', move)
    container.addEventListener('pointerleave', reset)

    return () => {
      container.removeEventListener('pointermove', move)
      container.removeEventListener('pointerleave', reset)
      context.revert()
    }
  }, [])

  return (
    <div className="orbital-container" ref={containerRef}>
      <div className="orbital-atmosphere" />

      <div className="orbital-scene" ref={systemRef}>
        <div className="orbital-axis-x">
          <div className="orbital-axis-y">
            <div className="orbital-axis-z">
              {orbits.map((orbit) => (
                <div
                  className={`orbit-plane plane-${orbit.id}`}
                  key={orbit.id}
                >
                  <div className={`orbit-ring orbit-ring-${orbit.id}`} />

                  <div className={`satellite-track satellite-track-${orbit.id}`}>
                    <span className="orbit-satellite" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="energy-halo" />
        <div className="energy-core" />
      </div>

      <div className="orbital-particles" aria-hidden="true">
        {particles.map((particle, i) => (
          <span
            key={i}
            className="orbital-particle"
            style={{
              left: `calc(50% + ${particle.x}px)`,
              top: `calc(50% + ${particle.y}px)`,
            }}
          />
        ))}
      </div>

      <div className="orbital-label">
        <span className="status-dot" />
        SYSTEM ONLINE
      </div>
    </div>
  )
}
