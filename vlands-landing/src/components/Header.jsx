import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

export default function Header() {
  const headerRef = useRef()
  const logoRef = useRef()
  const navRef = useRef()
  const buttonRef = useRef()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // GSAP entrance animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
    
    tl.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
    })
    .from(logoRef.current, {
      x: -30,
      opacity: 0,
      duration: 0.8,
    }, '-=0.5')
    .from(navRef.current?.children || [], {
      y: -20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
    }, '-=0.4')
    .from(buttonRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
    }, '-=0.3')
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Close menu on scroll
  useEffect(() => {
    if (!isOpen) return
    const closeMenu = () => setIsOpen(false)
    window.addEventListener('scroll', closeMenu)
    return () => window.removeEventListener('scroll', closeMenu)
  }, [isOpen])

  const navLinks = [
    { path: '/why', label: 'Why Partner' },
    { path: '/support', label: 'Support & Resources' },
    { path: '/apply', label: 'Application' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 glass-strong shadow-glass'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" ref={logoRef} className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-vblue via-vblue-600 to-accent-purple flex items-center justify-center overflow-hidden group-hover:shadow-glow transition-all duration-300">
            <span className="font-display font-bold text-xl text-white relative z-10">V</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight">Vlands</span>
            <span className="text-xs text-vblue/80 font-medium tracking-wider uppercase">Agent Portal</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden lg:flex items-center gap-8" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-medium text-sm tracking-wide transition-all duration-300 py-2 ${
                isActive(link.path)
                  ? 'text-vblue'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-vblue to-accent-purple transition-all duration-300 ${
                  isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
          
          <a
            href="#"
            className="text-white/50 hover:text-white/70 text-sm font-medium transition-colors duration-300"
          >
            Agent Login
          </a>
        </nav>

        {/* CTA Button */}
        <div ref={buttonRef} className="hidden lg:block">
          <Link
            to="/apply"
            className="btn-primary relative group inline-flex items-center gap-2"
          >
            <span>Apply Now</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white rounded-full transform transition-all duration-300 origin-center ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                isOpen ? 'opacity-0 scale-0' : ''
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white rounded-full transform transition-all duration-300 origin-center ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ease-out ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="glass-strong mx-4 mt-2 rounded-2xl overflow-hidden shadow-glass-strong">
          <nav className="flex flex-col p-4" aria-label="Mobile Navigation">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`py-4 px-4 rounded-xl font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-vblue/10 text-vblue'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </Link>
            ))}
            
            <a
              href="#"
              className="py-4 px-4 text-white/50 hover:text-white/70 font-medium transition-colors duration-300"
            >
              Agent Login
            </a>
            
            <div className="pt-4 mt-2 border-t border-white/10">
              <Link
                to="/apply"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <span>Apply Now</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
