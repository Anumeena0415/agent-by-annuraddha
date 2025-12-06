import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

export default function Hero() {
  const containerRef = useRef()
  const leftRef = useRef()
  const rightRef = useRef()
  const orbsRef = useRef()
  const markersRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main timeline
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      // Animate orbs
      gsap.to('.orb-1', {
        x: 50,
        y: -30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('.orb-2', {
        x: -40,
        y: 40,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('.orb-3', {
        x: 30,
        y: 50,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Left content animation
      tl.from(leftRef.current.querySelectorAll('.hero-animate'), {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
      }, 0.3)

      // Right 3D card animation
      .from(rightRef.current, {
        x: 100,
        opacity: 0,
        rotateY: -15,
        duration: 1.2,
      }, 0.5)

      // Floating markers animation
      gsap.to(markersRef.current, {
        y: -12,
        duration: 2,
        stagger: 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Glow pulse on the 3D card
      gsap.to('.land-card', {
        boxShadow: '0 0 80px rgba(0, 195, 255, 0.3)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  const addToRefs = (el) => {
    if (el && !markersRef.current.includes(el)) {
      markersRef.current.push(el)
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
      aria-label="Hero"
    >
      {/* Background Effects */}
      <div ref={orbsRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb orb-1 orb-blue w-96 h-96 absolute -top-20 -left-20" />
        <div className="orb orb-2 orb-purple w-80 h-80 absolute top-1/3 right-0" />
        <div className="orb orb-3 orb-pink w-64 h-64 absolute bottom-20 left-1/4" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Content */}
        <div ref={leftRef} className="order-2 lg:order-1">
          <div className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="w-2 h-2 rounded-full bg-vblue animate-pulse" />
            <span className="text-sm font-medium text-white/70">Certified Partner Program</span>
          </div>

          <h1 className="hero-animate font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Access <span className="text-gradient">Premium Assets.</span>
            <br />
            <span className="text-gradient-blue">Elevate Your Earnings.</span>
          </h1>

          <p className="hero-animate mt-6 text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed">
            Scale Your Income. Close Deals Faster. Become a Vlands Certified Partner.
          </p>

          <p className="hero-animate mt-4 text-base text-white/50 max-w-xl leading-relaxed">
            Stop selling uncertainty. Partner with Vlands to offer your clients fully-vetted, 
            high-return land assets. We provide the platform efficiency and legal certainty 
            (UDS Estamp); you secure the deal.
          </p>

          <div className="hero-animate mt-10 flex flex-wrap gap-4">
            <Link
              to="/why"
              className="btn-primary group inline-flex items-center gap-2"
            >
              <span>View Commission Structure</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link to="/apply" className="btn-secondary inline-flex items-center gap-2">
              <svg className="w-5 h-5 text-vblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Apply for Partnership</span>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="hero-animate mt-12 flex items-center gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                <svg className="w-6 h-6 text-vblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold">UDS Secured</div>
                <div className="text-xs text-white/50">100% Legal Certainty</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold">Fast Closing</div>
                <div className="text-xs text-white/50">5-Minute Digital</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right 3D Visual */}
        <div ref={rightRef} className="order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000">
          <div className="land-card relative w-full max-w-lg glass-card rounded-3xl p-6 transform-gpu hover:scale-[1.02] transition-transform duration-500">
            {/* Card Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent-cyan animate-pulse" />
                <span className="text-sm font-medium text-white/70">Live Asset Preview</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-vblue/20 border border-vblue/30">
                <span className="text-xs font-medium text-vblue">Premium</span>
              </div>
            </div>

            {/* 3D Land Plot Visual */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-vdark-800 to-vdark-950 aspect-[4/3]">
              {/* Grid Pattern for Land Plot */}
              <div className="absolute inset-0 bg-grid opacity-30" />
              
              {/* Isometric Land Plot */}
              <svg
                viewBox="0 0 400 300"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Gradient Definitions */}
                <defs>
                  <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f766e" />
                    <stop offset="50%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#5eead4" />
                  </linearGradient>
                  <linearGradient id="sideGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0d9488" />
                    <stop offset="100%" stopColor="#064e3b" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Shadow */}
                <ellipse cx="200" cy="250" rx="120" ry="30" fill="rgba(0,0,0,0.3)" />

                {/* Land Plot - Top Face */}
                <polygon
                  points="200,80 320,140 200,200 80,140"
                  fill="url(#landGradient)"
                  stroke="#5eead4"
                  strokeWidth="2"
                  filter="url(#glow)"
                />

                {/* Land Plot - Right Side */}
                <polygon
                  points="200,200 320,140 320,170 200,230"
                  fill="url(#sideGradient)"
                />

                {/* Land Plot - Left Side */}
                <polygon
                  points="200,200 80,140 80,170 200,230"
                  fill="#0d9488"
                />

                {/* Grid Lines on Top */}
                <line x1="140" y1="110" x2="140" y2="170" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="200" y1="80" x2="200" y2="200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="260" y1="110" x2="260" y2="170" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="80" y1="140" x2="320" y2="140" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

                {/* Location Markers */}
                <g className="marker" filter="url(#glow)">
                  <circle cx="180" cy="120" r="8" fill="#00c3ff" />
                  <circle cx="180" cy="120" r="4" fill="#ffffff" />
                  <line x1="180" y1="128" x2="180" y2="150" stroke="#00c3ff" strokeWidth="2" />
                </g>

                <g className="marker" filter="url(#glow)">
                  <circle cx="240" cy="150" r="8" fill="#a855f7" />
                  <circle cx="240" cy="150" r="4" fill="#ffffff" />
                  <line x1="240" y1="158" x2="240" y2="175" stroke="#a855f7" strokeWidth="2" />
                </g>
              </svg>

              {/* Floating Markers */}
              <div
                ref={addToRefs}
                className="floating-marker absolute top-4 left-4 px-3 py-1.5 rounded-lg glass-strong text-xs font-medium flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-vblue" />
                Future Development Zone
              </div>

              <div
                ref={addToRefs}
                className="floating-marker absolute top-4 right-4 px-3 py-1.5 rounded-lg glass-strong text-xs font-medium flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
                High Growth Corridor
              </div>

              <div
                ref={addToRefs}
                className="floating-marker absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg glass-strong text-xs font-medium flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                UDS Secured
              </div>
            </div>

            {/* Card Footer Stats */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-xs text-white/50 mb-1">Plot Size</div>
                <div className="text-lg font-semibold text-gradient-blue">2,400 sq.ft</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-xs text-white/50 mb-1">ROI Potential</div>
                <div className="text-lg font-semibold text-green-400">+24% YoY</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-xs text-white/50 mb-1">Title Status</div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-sm font-medium">Clear</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-xs text-white/50 mb-1">Estamp</div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-vblue" />
                  <span className="text-sm font-medium">Registered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5 text-vblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
