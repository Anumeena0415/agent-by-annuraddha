import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  {
    id: 1,
    title: 'Maximum Profit',
    subtitle: 'Pillar I',
    description: 'Unlock tiered commissions from 0.4% to 1% based on volume, plus 0.25% trailing on repeat transactions.',
    icon: '💎',
    buttonText: 'Learn More',
    buttonLink: '/why',
    gradient: 'from-cyan-400 to-blue-500',
    features: ['Tiered Commissions', 'Trailing Revenue', 'Volume Bonuses'],
  },
  {
    id: 2,
    title: 'Superior Efficiency',
    subtitle: 'Pillar II',
    description: 'Experience 5-minute digital closings with real-time CRM, automated docs, and dedicated support.',
    icon: '⚡',
    buttonText: 'Platform Tools',
    buttonLink: '/support',
    gradient: 'from-purple-400 to-pink-500',
    features: ['5-Min Closing', 'Real-time CRM', 'Auto Docs'],
  },
  {
    id: 3,
    title: 'Full Credibility',
    subtitle: 'Pillar III',
    description: 'Every asset comes with UDS Estamp registration ensuring complete legal certainty and compliance.',
    icon: '🛡️',
    buttonText: 'Legal Info',
    buttonLink: '/why',
    gradient: 'from-green-400 to-emerald-500',
    features: ['UDS Secured', 'Title Verified', '100% Compliant'],
  },
]

export default function Pillars() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.pillars-header',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
        }
      )

      // Cards stagger animation
      gsap.fromTo(
        '.pillar-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pillars-grid',
            start: 'top 80%',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="pillars-header text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-cyan-400 mb-4">
            ✨ The Agent Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Three Pillars of <span className="text-gradient">Success</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Our partnership framework maximizes your earnings, efficiency, and credibility.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="pillars-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="pillar-card nft-border glass-card rounded-2xl p-6 lg:p-8 flex flex-col h-full transition-all duration-300 hover:translate-y-[-4px]"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="text-xs font-medium tracking-widest uppercase text-white/30">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold mt-1">{pillar.title}</h3>
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-2xl`}>
                  {pillar.icon}
                </div>
              </div>

              {/* Description */}
              <p className="text-white/50 leading-relaxed mb-6 flex-grow">
                {pillar.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {pillar.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/60"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Button */}
              <Link
                to={pillar.buttonLink}
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r ${pillar.gradient} text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20`}
              >
                {pillar.buttonText}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
