import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        '.cta-content > *',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      )

      // Glow pulse animation
      gsap.to('.cta-glow', {
        scale: 1.05,
        opacity: 0.8,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black" />
      
      {/* Glow effects */}
      <div className="cta-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[100px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="cta-content text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-white/70">Limited Slots Available</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Ready to <span className="text-gradient">Elevate</span>
            <br />
            <span className="text-gradient-blue">Your Sales?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-10">
            Join an exclusive network of top-performing agents with premium assets, superior tools, and unmatched earning potential.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              to="/apply"
              className="btn-primary text-base px-8 py-4 animate-pulse-glow"
            >
              <span>Start Partnership Application</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="mailto:partner@vlands.agency" className="btn-secondary text-base">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact Us</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-white/40">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium">100% UDS Secured</span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">7-Day Payout</span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium">5-Min Digital Close</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
