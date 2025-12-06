import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  {
    id: 1,
    title: 'Maximum Profit',
    subtitle: 'Pillar I',
    description:
      'Unlock tiered commissions from 0.4% to 1% based on volume. Plus, earn 0.25% trailing commission on repeat client transactions. Your success compounds over time.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    buttonText: 'Learn More',
    buttonLink: '/why',
    gradient: 'from-vblue to-accent-cyan',
    glowColor: 'rgba(0, 195, 255, 0.3)',
    features: ['Tiered Commissions', 'Trailing Revenue', 'Volume Bonuses'],
  },
  {
    id: 2,
    title: 'Superior Efficiency',
    subtitle: 'Pillar II',
    description:
      'Experience 5-minute digital closings with our streamlined platform. Access real-time CRM, automated documentation, and a dedicated success manager for seamless operations.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    buttonText: 'Platform Tools',
    buttonLink: '/support',
    gradient: 'from-accent-purple to-accent-pink',
    glowColor: 'rgba(168, 85, 247, 0.3)',
    features: ['5-Min Closing', 'Real-time CRM', 'Auto Documentation'],
  },
  {
    id: 3,
    title: 'Unquestionable Credibility',
    subtitle: 'Pillar III',
    description:
      'Every asset comes with UDS Estamp registration ensuring complete legal certainty. Sell with confidence knowing all titles are verified and fully compliant.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    buttonText: 'Legal Advantage',
    buttonLink: '/why',
    gradient: 'from-green-400 to-emerald-500',
    glowColor: 'rgba(74, 222, 128, 0.3)',
    features: ['UDS Secured', 'Title Verified', '100% Compliant'],
  },
]

function PillarCard({ pillar, index }) {
  const cardRef = useRef()
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const tiltX = (y - centerY) / 15
    const tiltY = (centerX - x) / 15
    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <div
      ref={cardRef}
      className="pillar-card relative group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Card Background with gradient border */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
        style={{ transform: 'scale(0.9)' }}
      />

      <div className="relative glass-card rounded-3xl p-8 h-full flex flex-col overflow-hidden">
        {/* Shimmer effect on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out`}
        />

        {/* Header */}
        <div className="flex items-start justify-between mb-6 relative z-10">
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-white/40">
              {pillar.subtitle}
            </span>
            <h3 className="font-display text-2xl lg:text-3xl font-bold mt-1">{pillar.title}</h3>
          </div>
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            {pillar.icon}
          </div>
        </div>

        {/* Description */}
        <p className="text-white/60 leading-relaxed mb-6 relative z-10 flex-grow">
          {pillar.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-8 relative z-10">
          {pillar.features.map((feature, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/70"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link
          to={pillar.buttonLink}
          className={`relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r ${pillar.gradient} text-white overflow-hidden group/btn`}
        >
          <span className="relative z-10">{pillar.buttonText}</span>
          <svg
            className="w-4 h-4 relative z-10 transform group-hover/btn:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
        </Link>

        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `0 0 60px ${pillar.glowColor}`,
          }}
        />
      </div>
    </div>
  )
}

export default function Pillars() {
  const containerRef = useRef()
  const headerRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current.children, {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      // Cards stagger animation
      gsap.from('.pillar-card', {
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-label="Agent Advantages"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-vblue/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-vblue mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            The Agent Advantage
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Three Pillars of <span className="text-gradient">Partner Success</span>
          </h2>
          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            Our partnership framework is designed to maximize your earnings, efficiency, and credibility
            in every transaction.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
