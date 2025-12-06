import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const headerRef = useRef(null)
  const logoRef = useRef(null)

  const navLinks = [
    { path: '/why', label: 'Why Partner', icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )},
    { path: '/support', label: 'Resources', icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )},
    { path: '/apply', label: 'Apply', icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )},
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )

      // Logo glow pulse
      gsap.to('.logo-glow', {
        scale: 1.2,
        opacity: 0.6,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      })

      // Nav links stagger
      gsap.fromTo(
        '.nav-link',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out', delay: 0.3 }
      )
    }, headerRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3'
          : 'py-4'
      }`}
    >
      {/* Background with glass effect */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-2xl border-b border-white/5' 
          : 'bg-transparent'
      }`} />

      {/* Gradient line at bottom when scrolled */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" ref={logoRef}>
            <div className="relative">
              {/* Logo glow */}
              <div className="logo-glow absolute inset-0 w-11 h-11 rounded-xl bg-cyan-500/30 blur-xl" />
              
              {/* Logo container */}
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 flex items-center justify-center overflow-hidden shadow-lg shadow-cyan-500/25">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                
                {/* Letter */}
                <span className="relative font-bold text-xl text-white drop-shadow-lg">V</span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </div>
            </div>
            
            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Vlands</span>
                <span className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30">
                  Partner
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] text-white/40 font-medium">Portal Active</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            {/* Nav pill container */}
            <div className="flex items-center gap-1 px-2 py-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link group relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {/* Active indicator */}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                  )}
                  
                  <span className={`transition-colors duration-300 ${
                    isActive(link.path) ? 'text-cyan-400' : 'text-white/40 group-hover:text-cyan-400'
                  }`}>
                    {link.icon}
                  </span>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/10 to-transparent mx-4" />

            {/* Login */}
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/40 hover:text-white/70 transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Login
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              to="/apply" 
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm overflow-hidden"
            >
              {/* Button background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-400 transition-all duration-300 group-hover:from-cyan-400 group-hover:to-cyan-300" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-400/0 via-white/20 to-cyan-400/0" />
              
              {/* Content */}
              <span className="relative text-black font-semibold">Apply Now</span>
              <svg className="relative w-4 h-4 text-black transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              
              {/* Border shine */}
              <div className="absolute inset-0 rounded-xl border border-white/20" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.06] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px] w-full' : 'w-full'}`} />
              <span className={`h-0.5 rounded-full bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 w-0' : 'w-3/4 opacity-60'}`} />
              <span className={`h-0.5 rounded-full bg-gradient-to-r from-white to-purple-400 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px] w-full' : 'w-1/2'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? 'max-h-[400px] mt-4 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="relative p-4 rounded-2xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl border border-white/[0.08] rounded-2xl" />
            
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            
            {/* Content */}
            <div className="relative space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                      : 'text-white/70 hover:bg-white/[0.05] border border-transparent'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className={isActive(link.path) ? 'text-cyan-400' : 'text-white/40'}>
                    {link.icon}
                  </span>
                  {link.label}
                  {isActive(link.path) && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                  )}
                </Link>
              ))}
              
              {/* Login link */}
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium text-white/50 hover:text-white/70 hover:bg-white/[0.03] transition-all duration-300 border border-transparent"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Login to Dashboard
              </a>
              
              {/* Divider */}
              <div className="my-3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              
              {/* CTA Button */}
              <Link 
                to="/apply" 
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-cyan-400 text-black hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300"
              >
                <span>Start Partnership Application</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              {/* Trust badge */}
              <div className="flex items-center justify-center gap-2 pt-3 text-white/30 text-xs">
                <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>100% UDS Secured Assets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
