import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const containerRef = useRef()
  const contentRef = useRef()
  const orbsRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for background orbs
      gsap.to('.cta-orb-1', {
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.to('.cta-orb-2', {
        y: 80,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      gsap.to('.cta-orb-3', {
        y: -60,
        x: 40,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      })

      // Content fade in
      gsap.from(contentRef.current.children, {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })

      // Continuous glow animation
      gsap.to('.cta-glow', {
        scale: 1.1,
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative py-32 lg:py-40 overflow-hidden"
      aria-label="Call to Action"
    >
      {/* Dark Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-vdark-900 via-black to-vdark-950" />

      {/* Animated Orbs */}
      <div ref={orbsRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="cta-orb-1 absolute w-96 h-96 rounded-full bg-vblue/20 blur-3xl -top-20 -left-20" />
        <div className="cta-orb-2 absolute w-80 h-80 rounded-full bg-accent-purple/20 blur-3xl top-1/2 -right-20" />
        <div className="cta-orb-3 absolute w-64 h-64 rounded-full bg-accent-pink/15 blur-3xl bottom-0 left-1/3" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div
          ref={contentRef}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-white/80">Limited Partnership Slots Available</span>
          </div>

          {/* Main Headline */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Ready to <span className="text-gradient">Elevate</span>
            <br />
            <span className="text-gradient-blue">Your Sales?</span>
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Join an exclusive network of top-performing agents. Access premium assets, 
            superior tools, and unmatched earning potential.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/apply"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg bg-gradient-to-r from-vblue via-vblue-600 to-accent-purple text-white overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="cta-glow absolute inset-0 bg-gradient-to-r from-vblue to-accent-purple opacity-50 blur-xl" />
              
              {/* Button Content */}
              <span className="relative z-10">Start Your Partnership Application</span>
              <svg
                className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <a
              href="mailto:partner@vlands.agency"
              className="btn-secondary inline-flex items-center gap-2 text-lg"
            >
              <svg className="w-5 h-5 text-vblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Contact Us</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <div className="flex items-center gap-3 text-white/40">
              <svg className="w-6 h-6 text-vblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-sm font-medium">100% UDS Secured</span>
            </div>
            <div className="flex items-center gap-3 text-white/40">
              <svg className="w-6 h-6 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium">7-Day Payout SLA</span>
            </div>
            <div className="flex items-center gap-3 text-white/40">
              <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-sm font-medium">5-Min Digital Closing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-vdark-950 to-transparent" />
    </section>
  )
}

