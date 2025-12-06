import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const toolkit = [
  {
    title: 'Success Toolkit',
    icon: '📦',
    gradient: 'from-cyan-400 to-blue-500',
    items: ['Property templates', 'Pitch scripts', 'Closing checklists', 'Objection guides'],
    action: 'Download Kit',
  },
  {
    title: 'Marketing Materials',
    icon: '🎨',
    gradient: 'from-purple-400 to-pink-500',
    items: ['Digital brochures', 'Social templates', 'Email campaigns', 'WhatsApp content'],
    action: 'Get Materials',
  },
  {
    title: 'Pitch Deck',
    icon: '📊',
    gradient: 'from-green-400 to-emerald-500',
    items: ['Investment slides', 'ROI calculator', 'Market analysis', 'Comparison sheets'],
    action: 'Download Deck',
  },
]

const platformFeatures = [
  { icon: '📊', title: 'CRM Dashboard', desc: 'Track leads & deals', stat: '24/7 Access' },
  { icon: '👥', title: 'Lead Management', desc: 'Smart lead scoring', stat: 'Unlimited' },
  { icon: '💰', title: 'Commission Tracker', desc: 'Real-time earnings', stat: 'Live Updates' },
  { icon: '📄', title: 'Document Center', desc: 'Legal templates', stat: '50+ Docs' },
  { icon: '🏠', title: 'Asset Inventory', desc: 'Premium listings', stat: '200+ Assets' },
  { icon: '🎧', title: 'Support Channel', desc: 'Dedicated manager', stat: '< 2hr Response' },
]

export default function SupportResources() {
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.support-header > *', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' })

      gsap.fromTo('.toolkit-card', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.toolkit-grid', start: 'top 80%' },
      })

      gsap.fromTo('.platform-item', { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.platform-grid', start: 'top 80%' },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="page-fade-in min-h-screen pt-28 pb-20">
      {/* Background */}
      <div className="fixed inset-0 bg-mesh opacity-50 pointer-events-none" />
      <div className="fixed top-40 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="support-header text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-400 mb-4">
            🛠️ Partner Resources
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Support & <span className="text-gradient">Resources</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Everything you need to close deals faster and more efficiently.
          </p>
        </div>

        {/* Toolkit */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="text-gradient-blue">Partner Toolkit</span>
          </h2>

          <div className="toolkit-grid grid md:grid-cols-3 gap-6">
            {toolkit.map((item, index) => (
              <div key={index} className="toolkit-card glass-card glass-card-hover rounded-2xl p-6 flex flex-col">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <ul className="space-y-2 mb-6 flex-grow">
                  {item.items.map((listItem, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-white/50">
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      {listItem}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold text-sm bg-gradient-to-r ${item.gradient} text-white flex items-center justify-center gap-2 transition-all hover:opacity-90`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Dashboard */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-cyan-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Real-time Platform
            </span>
            <h2 className="text-2xl font-bold">
              Partner <span className="text-gradient">Dashboard</span>
            </h2>
          </div>

          {/* Dashboard Preview */}
          <div className="glass-card rounded-2xl p-5 mb-8">
            {/* Browser bar */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <span className="px-3 py-1 rounded bg-white/5 text-xs text-white/40 font-mono">
                  partner.vlands.agency/dashboard
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-xs text-white/40 mb-1">Earnings</div>
                <div className="text-xl font-bold text-gradient-blue">₹4.2L</div>
                <div className="text-xs text-green-400">+12%</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-xs text-white/40 mb-1">Leads</div>
                <div className="text-xl font-bold">24</div>
                <div className="text-xs text-cyan-400">8 hot</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-xs text-white/40 mb-1">Deals</div>
                <div className="text-xl font-bold">7</div>
                <div className="text-xs text-purple-400">This quarter</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-xs text-white/40 mb-1">Tier</div>
                <div className="text-xl font-bold text-gradient">Pro</div>
                <div className="text-xs text-white/40">0.7% rate</div>
              </div>
            </div>

            {/* Chart */}
            <div className="p-4 rounded-xl bg-white/5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium">Performance</span>
                <span className="text-xs text-white/40">Last 30 days</span>
              </div>
              <div className="h-24 flex items-end gap-1">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-cyan-400/50 to-cyan-400" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>

          {/* Platform features */}
          <div className="platform-grid grid grid-cols-2 lg:grid-cols-3 gap-4">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="platform-item p-4 rounded-xl glass-card hover:bg-white/5 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-sm mb-0.5">{feature.title}</h4>
                    <p className="text-xs text-white/40 mb-1">{feature.desc}</p>
                    <span className="text-xs text-cyan-400 font-medium">{feature.stat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Access Everything?</h3>
          <p className="text-white/50 mb-6 max-w-md mx-auto">
            Apply now to get instant access to all resources and your partner portal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/apply" className="btn-primary">
              <span>Apply Now</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="mailto:partner@vlands.agency" className="btn-secondary">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
