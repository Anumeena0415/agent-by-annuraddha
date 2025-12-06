import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

export default function Hero() {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const visualRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      )

      // Visual animation
      gsap.fromTo(
        visualRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.4 }
      )

      // Floating animation for markers
      gsap.to('.float-marker', {
        y: -8,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      })

      // Glow pulse
      gsap.to('.glow-ring', {
        scale: 1.1,
        opacity: 0.5,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={contentRef}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/70 font-medium">Now Accepting Partners</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              Access <span className="text-gradient">Premium Assets.</span>
              <br />
              <span className="text-gradient-blue">Elevate Earnings.</span>
            </h1>

            <p className="text-lg text-white/50 leading-relaxed mb-4 max-w-lg">
              Scale Your Income. Close Deals Faster. Become a Vlands Certified Partner.
            </p>

            <p className="text-white/40 leading-relaxed mb-8 max-w-lg">
              Partner with Vlands to offer fully-vetted, high-return land assets with complete legal certainty through UDS Estamp.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/why" className="btn-primary">
                <span>View Commission</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/apply" className="btn-secondary">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Apply Now</span>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold">UDS Secured</div>
                  <div className="text-xs text-white/40">100% Legal</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-400/10 border border-purple-400/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold">5-Min Close</div>
                  <div className="text-xs text-white/40">Digital Process</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div ref={visualRef} className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Glow ring */}
              <div className="glow-ring absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 blur-2xl" />
              
              {/* Main card */}
              <div className="relative glass-card rounded-3xl p-6 border border-white/10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm text-white/60">Live Preview</span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-400/20 to-purple-400/20 text-cyan-400 border border-cyan-400/20">
                    Premium
                  </span>
                </div>

                {/* 3D Land Visual */}
                <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  
                  {/* SVG Land Plot */}
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    <defs>
                      <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0d9488" />
                        <stop offset="100%" stopColor="#2dd4bf" />
                      </linearGradient>
                      <linearGradient id="sideGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0f766e" />
                        <stop offset="100%" stopColor="#064e3b" />
                      </linearGradient>
                    </defs>
                    
                    {/* Shadow */}
                    <ellipse cx="200" cy="250" rx="100" ry="25" fill="rgba(0,0,0,0.3)" />
                    
                    {/* Land top */}
                    <polygon points="200,80 300,130 200,180 100,130" fill="url(#landGrad)" stroke="#5eead4" strokeWidth="2" />
                    
                    {/* Land sides */}
                    <polygon points="200,180 300,130 300,155 200,205" fill="url(#sideGrad)" />
                    <polygon points="200,180 100,130 100,155 200,205" fill="#0d9488" />
                    
                    {/* Grid lines */}
                    <line x1="150" y1="105" x2="150" y2="155" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    <line x1="200" y1="80" x2="200" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    <line x1="250" y1="105" x2="250" y2="155" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    
                    {/* Marker */}
                    <circle cx="200" cy="120" r="6" fill="#00d4ff" />
                    <circle cx="200" cy="120" r="3" fill="#fff" />
                  </svg>

                  {/* Floating markers */}
                  <div className="float-marker absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur text-xs font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Growth Zone
                  </div>
                  <div className="float-marker absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur text-xs font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    High Demand
                  </div>
                  <div className="float-marker absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur text-xs font-medium flex items-center gap-2">
                    <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    UDS Verified
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/5">
                    <div className="text-xs text-white/40 mb-1">Plot Size</div>
                    <div className="text-lg font-bold text-gradient-blue">2,400 sq.ft</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5">
                    <div className="text-xs text-white/40 mb-1">ROI</div>
                    <div className="text-lg font-bold text-green-400">+24% YoY</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-white/30">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
