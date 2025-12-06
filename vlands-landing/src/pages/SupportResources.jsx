import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const toolkitItems = [
  {
    title: 'Partner Success Toolkit',
    description: 'Everything you need to close deals faster and more efficiently.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    items: [
      'Property listing templates',
      'Client presentation scripts',
      'Objection handling guides',
      'Closing checklists',
    ],
    gradient: 'from-vblue to-accent-cyan',
    downloadLabel: 'Download Toolkit',
  },
  {
    title: 'Marketing Materials',
    description: 'Professional branding assets and marketing collateral.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      'Digital brochures & flyers',
      'Social media post templates',
      'Email campaign templates',
      'WhatsApp broadcast content',
    ],
    gradient: 'from-accent-purple to-accent-pink',
    downloadLabel: 'Get Marketing Kit',
  },
  {
    title: 'Pitch Deck & Presentations',
    description: 'Professionally designed slides to impress your clients.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    items: [
      'Investment pitch deck',
      'Asset comparison slides',
      'ROI calculator presentations',
      'Market analysis reports',
    ],
    gradient: 'from-green-400 to-emerald-500',
    downloadLabel: 'Download Pitch Deck',
  },
]

const platformFeatures = [
  {
    title: 'Real-time CRM Dashboard',
    description: 'Track all your leads, deals, and commissions in one intuitive interface.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    stats: '24/7 Access',
  },
  {
    title: 'Lead Management',
    description: 'Organize and nurture your prospects with smart lead scoring.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    stats: 'Unlimited Leads',
  },
  {
    title: 'Commission Tracker',
    description: 'Monitor your earnings in real-time with detailed breakdowns.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stats: 'Real-time Updates',
  },
  {
    title: 'Document Center',
    description: 'Access all legal templates and transaction documents instantly.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    stats: '50+ Templates',
  },
  {
    title: 'Asset Inventory',
    description: 'Browse all available premium land assets with detailed insights.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    stats: '200+ Assets',
  },
  {
    title: 'Support Channel',
    description: 'Direct access to your dedicated partner success manager.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    stats: '< 2hr Response',
  },
]

export default function SupportResources() {
  const containerRef = useRef()
  const headerRef = useRef()
  const toolkitRef = useRef()
  const platformRef = useRef()

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

      // Toolkit cards animation
      gsap.from('.toolkit-card', {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: toolkitRef.current,
          start: 'top 80%',
        },
      })

      // Platform features animation
      gsap.from('.platform-feature', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: platformRef.current,
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
      <div className="absolute top-20 left-0 w-96 h-96 rounded-full bg-accent-purple/10 blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-vblue/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-accent-purple mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Partner Resources
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
            Support & <span className="text-gradient">Resources</span>
          </h1>
          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            Access our comprehensive toolkit, marketing materials, and powerful 
            platform tools designed to accelerate your success.
          </p>
        </div>

        {/* Toolkit Section */}
        <div ref={toolkitRef} className="mb-24">
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-8 text-center">
            <span className="text-gradient-blue">Partner Success Toolkit</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {toolkitItems.map((item, index) => (
              <div
                key={index}
                className="toolkit-card group glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-500 flex flex-col"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-5`}>
                  {item.icon}
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm mb-5">{item.description}</p>

                {/* Items List */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {item.items.map((listItem, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-white/60">
                      <svg className="w-4 h-4 text-vblue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{listItem}</span>
                    </li>
                  ))}
                </ul>

                {/* Download Button */}
                <button className={`w-full py-3 rounded-xl font-semibold text-sm bg-gradient-to-r ${item.gradient} text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {item.downloadLabel}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Dashboard Section */}
        <div ref={platformRef}>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-vblue mb-4">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Real-time Platform Access
            </span>
            <h2 className="font-display text-2xl lg:text-3xl font-bold">
              Partner <span className="text-gradient">Dashboard</span> & CRM
            </h2>
            <p className="mt-3 text-white/50 max-w-xl mx-auto">
              Your command center for managing leads, tracking commissions, and accessing resources.
            </p>
          </div>

          {/* Dashboard Preview Card */}
          <div className="glass-card rounded-3xl p-6 lg:p-8 mb-10">
            {/* Browser Header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1.5 rounded-lg bg-white/5 text-xs text-white/50 font-mono">
                  partner.vlands.agency/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Grid Preview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-xs text-white/50 mb-1">Total Earnings</div>
                <div className="text-2xl font-bold text-gradient-blue">₹4.2L</div>
                <div className="text-xs text-green-400 mt-1">+12% this month</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-xs text-white/50 mb-1">Active Leads</div>
                <div className="text-2xl font-bold text-white">24</div>
                <div className="text-xs text-vblue mt-1">8 hot prospects</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-xs text-white/50 mb-1">Deals Closed</div>
                <div className="text-2xl font-bold text-white">7</div>
                <div className="text-xs text-accent-purple mt-1">This quarter</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-xs text-white/50 mb-1">Partner Tier</div>
                <div className="text-2xl font-bold text-gradient">Pro</div>
                <div className="text-xs text-white/40 mt-1">0.7% commission</div>
              </div>
            </div>

            {/* Activity Chart Placeholder */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-sm">Performance Overview</span>
                <span className="text-xs text-white/40">Last 30 days</span>
              </div>
              <div className="h-32 flex items-end gap-2">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-vblue/50 to-vblue"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Platform Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {platformFeatures.map((feature, index) => (
              <div
                key={index}
                className="platform-feature group p-5 rounded-xl glass-card hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-vblue/10 border border-vblue/20 flex items-center justify-center text-vblue flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-white/50 mb-2">{feature.description}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-vblue">
                      <span className="w-1.5 h-1.5 rounded-full bg-vblue" />
                      {feature.stats}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="glass-card rounded-2xl p-8 lg:p-12 max-w-3xl mx-auto">
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
              Ready to Access Your Partner Dashboard?
            </h3>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Apply now to get instant access to all resources, marketing materials, 
              and your personal partner portal.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/apply"
                className="btn-primary inline-flex items-center gap-2 text-lg"
              >
                <span>Apply for Partnership</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="mailto:partner@vlands.agency"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5 text-vblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Contact Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
