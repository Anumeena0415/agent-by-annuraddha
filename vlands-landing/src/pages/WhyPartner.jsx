import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const commissionTiers = [
  { range: '₹0 - ₹50L', rate: '0.4%', description: 'Entry Level' },
  { range: '₹50L - ₹1Cr', rate: '0.5%', description: 'Growth Tier' },
  { range: '₹1Cr - ₹3Cr', rate: '0.7%', description: 'Pro Tier' },
  { range: '₹3Cr+', rate: '1.0%', description: 'Elite Partner' },
]

const benefits = [
  {
    title: 'Commission & Payout',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: [
      'Tiered commission: 0.4% → 1% based on volume',
      '7-day guaranteed payout after Estamp registration',
      '0.25% trailing commission on repeat client transactions',
      'Quarterly performance bonuses for top performers',
    ],
    gradient: 'from-vblue to-accent-cyan',
  },
  {
    title: 'Legal Security & UDS Estamp',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    features: [
      '100% UDS Estamp secured on all assets',
      'Pre-verified clear titles – zero title risk',
      'All legal documentation pre-prepared',
      'Complete regulatory compliance assured',
    ],
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Digital Closing Workflow',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: [
      '5-minute digital closing process',
      'Paperless documentation workflow',
      'Real-time transaction tracking',
      'Instant client notifications',
    ],
    gradient: 'from-accent-purple to-accent-pink',
  },
  {
    title: 'Vetted High-Quality Assets',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: [
      'Curated portfolio of premium land assets',
      'High-growth corridor locations',
      'Detailed market analysis included',
      'Future development zone mapping',
    ],
    gradient: 'from-accent-cyan to-vblue',
  },
]

export default function WhyPartner() {
  const containerRef = useRef()
  const headerRef = useRef()
  const tableRef = useRef()
  const benefitsRef = useRef()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current.children, {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      })

      // Commission table animation
      gsap.from('.commission-row', {
        x: -50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: tableRef.current,
          start: 'top 80%',
        },
      })

      // Benefits cards animation
      gsap.from('.benefit-card', {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: 'top 75%',
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen pt-32 pb-24">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-vblue/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent-purple/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-vblue mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Partner Benefits
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
            Why <span className="text-gradient">Partner</span> With Us?
          </h1>
          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            Unlock premium earnings with competitive commissions, guaranteed payouts, 
            and a robust support system designed for your success.
          </p>
        </div>

        {/* Commission Table */}
        <div ref={tableRef} className="mb-20">
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-8 text-center">
            <span className="text-gradient-blue">Commission Tiers</span>
          </h2>
          
          <div className="glass-card rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-4 lg:p-6 bg-white/5 border-b border-white/10 text-sm font-semibold text-white/70 uppercase tracking-wider">
              <div>Monthly Volume</div>
              <div className="text-center">Commission Rate</div>
              <div className="text-right">Tier Level</div>
            </div>
            
            {/* Table Rows */}
            {commissionTiers.map((tier, index) => (
              <div
                key={index}
                className="commission-row grid grid-cols-3 gap-4 p-4 lg:p-6 border-b border-white/5 hover:bg-white/5 transition-colors duration-300"
              >
                <div className="font-medium">{tier.range}</div>
                <div className="text-center">
                  <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-vblue/20 text-vblue font-bold text-lg">
                    {tier.rate}
                  </span>
                </div>
                <div className="text-right text-white/60">{tier.description}</div>
              </div>
            ))}
          </div>

          {/* Extra Bonus Info */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-white/60">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7-Day Payout SLA</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <svg className="w-5 h-5 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>+0.25% Trailing Commission</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <svg className="w-5 h-5 text-vblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Quarterly Bonuses</span>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div ref={benefitsRef} className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card glass-card rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white mb-6`}>
                {benefit.icon}
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-bold mb-4">{benefit.title}</h3>
              <ul className="space-y-3">
                {benefit.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/60">
                    <svg className="w-5 h-5 text-vblue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            to="/apply"
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            <span>Apply for Partnership</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
