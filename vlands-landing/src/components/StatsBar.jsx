import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  {
    value: '0.4% - 1%',
    label: 'Tiered Commission',
    description: 'Competitive rates',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'vblue',
  },
  {
    value: '7-Day',
    label: 'Payout SLA',
    description: 'Guaranteed timeline',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'accent-purple',
  },
  {
    value: '100%',
    label: 'UDS Estamp Secured',
    description: 'Legal certainty',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'green-400',
  },
  {
    value: '5-Min',
    label: 'Digital Closing',
    description: 'Swift transactions',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'accent-cyan',
  },
]

export default function StatsBar() {
  const containerRef = useRef()
  const statsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each stat card
      gsap.from(statsRef.current, {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      // Add continuous subtle animation to icons
      gsap.to('.stat-icon', {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const addToRefs = (el) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el)
    }
  }

  const getColorClass = (color) => {
    const colorMap = {
      vblue: 'text-vblue bg-vblue/10 border-vblue/30',
      'accent-purple': 'text-accent-purple bg-accent-purple/10 border-accent-purple/30',
      'green-400': 'text-green-400 bg-green-400/10 border-green-400/30',
      'accent-cyan': 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/30',
    }
    return colorMap[color] || colorMap.vblue
  }

  const getTextColor = (color) => {
    const colorMap = {
      vblue: 'text-vblue',
      'accent-purple': 'text-accent-purple',
      'green-400': 'text-green-400',
      'accent-cyan': 'text-accent-cyan',
    }
    return colorMap[color] || 'text-vblue'
  }

  return (
    <section
      ref={containerRef}
      className="relative py-16 lg:py-24 overflow-hidden"
      aria-label="Statistics"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-vblue/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-white/90">
            Why Top Agents Choose <span className="text-gradient">Vlands</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="stat-card group glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-500 cursor-default"
            >
              {/* Icon */}
              <div
                className={`stat-icon w-14 h-14 rounded-xl border flex items-center justify-center mb-4 ${getColorClass(stat.color)}`}
              >
                {stat.icon}
              </div>

              {/* Value */}
              <div className={`text-3xl lg:text-4xl font-display font-bold ${getTextColor(stat.color)} mb-2`}>
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-white font-semibold mb-1">{stat.label}</div>

              {/* Description */}
              <div className="text-sm text-white/50">{stat.description}</div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                style={{
                  background: `radial-gradient(circle at center, ${
                    stat.color === 'vblue'
                      ? 'rgba(0, 195, 255, 0.1)'
                      : stat.color === 'accent-purple'
                      ? 'rgba(168, 85, 247, 0.1)'
                      : stat.color === 'green-400'
                      ? 'rgba(74, 222, 128, 0.1)'
                      : 'rgba(0, 245, 255, 0.1)'
                  }, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
