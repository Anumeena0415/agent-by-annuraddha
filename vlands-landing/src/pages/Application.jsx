import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

const experienceOptions = [
  { value: '', label: 'Select your experience' },
  { value: '0-1', label: '0-1 years (New to Real Estate)' },
  { value: '1-3', label: '1-3 years (Growing Agent)' },
  { value: '3-5', label: '3-5 years (Experienced Agent)' },
  { value: '5-10', label: '5-10 years (Senior Agent)' },
  { value: '10+', label: '10+ years (Industry Veteran)' },
]

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Up to 1% Commission',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: '7-Day Payout Guarantee',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    text: '100% UDS Secured Assets',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    text: '5-Min Digital Closing',
  },
]

export default function Application() {
  const containerRef = useRef()
  const formRef = useRef()
  const sideRef = useRef()

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    city: '',
    message: '',
  })
  const [status, setStatus] = useState('') // '', 'sending', 'sent', 'error'
  const [errors, setErrors] = useState({})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Side content animation
      gsap.from(sideRef.current.children, {
        x: -50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      })

      // Form animation
      gsap.from(formRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      })

      // Form fields animation
      gsap.from('.form-field', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.5,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const validateForm = () => {
    const newErrors = {}
    
    if (!form.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }
    
    if (!form.experience) {
      newErrors.experience = 'Please select your experience level'
    }
    
    if (!form.city.trim()) {
      newErrors.city = 'City/Region is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setStatus('sending')
    
    try {
      // Demo: Formspree endpoint - replace with your actual form endpoint
      const res = await fetch('https://formspree.io/f/mayvlkno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          phone: form.phone,
          experience: form.experience,
          city: form.city,
          message: form.message,
        }),
      })
      
      if (res.ok) {
        setStatus('sent')
        setForm({
          fullName: '',
          email: '',
          phone: '',
          experience: '',
          city: '',
          message: '',
        })
        setErrors({})
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' })
    }
  }

  return (
    <div ref={containerRef} className="relative min-h-screen pt-32 pb-24">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-vblue/10 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-accent-purple/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Information */}
          <div ref={sideRef} className="lg:sticky lg:top-32">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-vblue mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Partner Application
            </span>

            <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
              Join the <span className="text-gradient">Vlands</span>
              <br />
              <span className="text-gradient-blue">Partner Network</span>
            </h1>

            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Take the first step towards transforming your real estate career. 
              Apply to become a certified Vlands partner and unlock exclusive benefits.
            </p>

            {/* Benefits */}
            <div className="mt-10 space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl glass-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-vblue/10 border border-vblue/20 flex items-center justify-center text-vblue">
                    {benefit.icon}
                  </div>
                  <span className="font-medium text-white/80">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-10 p-6 rounded-2xl glass-card">
              <h3 className="font-semibold mb-4">Need Help?</h3>
              <div className="space-y-3">
                <a
                  href="mailto:partner@vlands.agency"
                  className="flex items-center gap-3 text-white/60 hover:text-vblue transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>partner@vlands.agency</span>
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-white/60 hover:text-vblue transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 98765 43210</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div ref={formRef}>
            {status === 'sent' ? (
              // Success State
              <div className="glass-card rounded-3xl p-8 lg:p-10 text-center">
                <div className="w-20 h-20 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4">
                  Application Submitted!
                </h2>
                <p className="text-white/60 mb-8 max-w-md mx-auto">
                  Thank you for applying to become a Vlands Partner. Our team will review 
                  your application and contact you within 48 hours.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Back to Home</span>
                  </Link>
                  <Link
                    to="/support"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <span>Explore Resources</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ) : (
              // Form State
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-8 lg:p-10"
                aria-label="Partner Application Form"
              >
                <h2 className="font-display text-2xl font-bold mb-2">Apply for Partnership</h2>
                <p className="text-white/50 mb-8">Fill in your details to get started</p>

                <div className="space-y-5">
                  {/* Full Name */}
                  <div className="form-field">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="Enter your full name"
                      className={`form-input ${errors.fullName ? 'border-red-400' : ''}`}
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="form-field">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className={`form-input ${errors.email ? 'border-red-400' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="form-field">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">+91</span>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="98765 43210"
                        className={`form-input pl-14 ${errors.phone ? 'border-red-400' : ''}`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Experience */}
                  <div className="form-field">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Years of Experience <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={form.experience}
                      onChange={(e) => handleChange('experience', e.target.value)}
                      className={`form-input form-select ${errors.experience ? 'border-red-400' : ''}`}
                    >
                      {experienceOptions.map((option) => (
                        <option key={option.value} value={option.value} className="bg-vdark">
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.experience && (
                      <p className="text-red-400 text-sm mt-1">{errors.experience}</p>
                    )}
                  </div>

                  {/* City/Region */}
                  <div className="form-field">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      City / Region <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => handleChange('city', e.target.value)}
                      placeholder="e.g., Mumbai, Pune, Delhi NCR"
                      className={`form-input ${errors.city ? 'border-red-400' : ''}`}
                    />
                    {errors.city && (
                      <p className="text-red-400 text-sm mt-1">{errors.city}</p>
                    )}
                  </div>

                  {/* Message (Optional) */}
                  <div className="form-field">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Additional Message <span className="text-white/40">(Optional)</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your real estate experience..."
                      rows={4}
                      className="form-input resize-none"
                    />
                  </div>

                  {/* Error Message */}
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-400/10 border border-red-400/30 text-red-400 text-sm">
                      Something went wrong. Please try again or contact us directly.
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Apply for Partnership</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  {/* Terms */}
                  <p className="text-center text-xs text-white/40">
                    By submitting this form, you agree to our{' '}
                    <a href="#" className="text-vblue hover:underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-vblue hover:underline">Privacy Policy</a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
