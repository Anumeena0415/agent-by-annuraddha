import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  {
    value: '0.4% - 1%',
    label: 'Tiered Commission',
    icon: '💰',
    color: 'cyan',
  },
  {
    value: '7-Day',
    label: 'Payout SLA',
    icon: '⚡',
    color: 'purple',
  },
  {
    value: '100%',
    label: 'UDS Secured',
    icon: '🛡️',
    color: 'green',
  },
  {
    value: '5-Min',
    label: 'Digital Close',
    icon: '🚀',
    color: 'pink',
  },
]

export default function StatsBar() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const getColorClasses = (color) => {
    const colors = {
      cyan: 'from-cyan-400/20 to-cyan-400/5 border-cyan-400/20 text-cyan-400',
      purple: 'from-purple-400/20 to-purple-400/5 border-purple-400/20 text-purple-400',
      green: 'from-green-400/20 to-green-400/5 border-green-400/20 text-green-400',
      pink: 'from-pink-400/20 to-pink-400/5 border-pink-400/20 text-pink-400',
    }
    return colors[color] || colors.cyan
  }

  return (
    <section ref={containerRef} className="relative py-16 lg:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold">
            Why Agents Choose <span className="text-gradient">Vlands</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-item stat-shine glass-card glass-card-hover rounded-2xl p-6 text-center`}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className={`text-2xl lg:text-3xl font-bold mb-2 ${
                stat.color === 'cyan' ? 'text-cyan-400' :
                stat.color === 'purple' ? 'text-purple-400' :
                stat.color === 'green' ? 'text-green-400' : 'text-pink-400'
              }`}>
                {stat.value}
              </div>
              <div className="text-sm text-white/60 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
