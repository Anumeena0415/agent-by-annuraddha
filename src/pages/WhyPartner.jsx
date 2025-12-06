import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const commissionTiers = [
  { range: '₹0 - ₹50L', rate: '0.4%', tier: 'Entry' },
  { range: '₹50L - ₹1Cr', rate: '0.5%', tier: 'Growth' },
  { range: '₹1Cr - ₹3Cr', rate: '0.7%', tier: 'Pro' },
  { range: '₹3Cr+', rate: '1.0%', tier: 'Elite' },
]

const benefits = [
  {
    title: 'Commission & Payout',
    icon: '💰',
    gradient: 'from-cyan-400 to-blue-500',
    features: [
      'Tiered commission: 0.4% → 1%',
      '7-day guaranteed payout',
      '0.25% trailing commission',
      'Quarterly bonuses',
    ],
  },
  {
    title: 'Legal Security',
    icon: '🛡️',
    gradient: 'from-green-400 to-emerald-500',
    features: [
      '100% UDS Estamp secured',
      'Pre-verified clear titles',
      'All documentation ready',
      'Full compliance assured',
    ],
  },
  {
    title: 'Digital Workflow',
    icon: '⚡',
    gradient: 'from-purple-400 to-pink-500',
    features: [
      '5-minute digital closing',
      'Paperless documentation',
      'Real-time tracking',
      'Instant notifications',
    ],
  },
  {
    title: 'Premium Assets',
    icon: '🏆',
    gradient: 'from-amber-400 to-orange-500',
    features: [
      'Curated premium portfolio',
      'High-growth locations',
      'Market analysis included',
      'Future zone mapping',
    ],
  },
]

export default function WhyPartner() {
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.why-header > *',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      )

      // Table rows
      gsap.fromTo(
        '.table-row',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.commission-table', start: 'top 80%' },
        }
      )

      // Benefit cards
      gsap.fromTo(
        '.benefit-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.benefits-grid', start: 'top 75%' },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="page-fade-in min-h-screen pt-28 pb-20">
      {/* Background */}
      <div className="fixed inset-0 bg-mesh opacity-50 pointer-events-none" />
      <div className="fixed top-20 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="why-header text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-cyan-400 mb-4">
            📈 Partner Benefits
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Why <span className="text-gradient">Partner</span> With Us?
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Unlock premium earnings with competitive commissions and guaranteed payouts.
          </p>
        </div>

        {/* Commission Table */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-center">
            <span className="text-gradient-blue">Commission Tiers</span>
          </h2>

          <div className="commission-table glass-card rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-white/5 border-b border-white/10 text-sm font-semibold text-white/60 uppercase tracking-wider">
              <div>Monthly Volume</div>
              <div className="text-center">Rate</div>
              <div className="text-right">Tier</div>
            </div>

            {/* Rows */}
            {commissionTiers.map((tier, index) => (
              <div
                key={index}
                className="table-row grid grid-cols-3 gap-4 p-4 border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <div className="font-medium">{tier.range}</div>
                <div className="text-center">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/20 text-cyan-400 font-bold">
                    {tier.rate}
                  </span>
                </div>
                <div className="text-right text-white/50">{tier.tier}</div>
              </div>
            ))}
          </div>

          {/* Extra info */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              7-Day Payout SLA
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              +0.25% Trailing
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Quarterly Bonuses
            </span>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-grid grid md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card glass-card glass-card-hover rounded-2xl p-6"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-2xl mb-5`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <ul className="space-y-3">
                {benefit.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/60 text-sm">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/apply" className="btn-primary text-base">
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
