import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

const experienceOptions = [
  { value: '', label: 'Select experience' },
  { value: '0-1', label: '0-1 years' },
  { value: '1-3', label: '1-3 years' },
  { value: '3-5', label: '3-5 years' },
  { value: '5-10', label: '5-10 years' },
  { value: '10+', label: '10+ years' },
]

const benefits = [
  { icon: '💰', text: 'Up to 1% Commission' },
  { icon: '⚡', text: '7-Day Payout' },
  { icon: '🛡️', text: 'UDS Secured' },
  { icon: '🚀', text: '5-Min Close' },
]

export default function Application() {
  const containerRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', experience: '', city: '', message: '' })
  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.app-side > *', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' })
      gsap.fromTo('.app-form', { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: 'power3.out' })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email'
    if (!form.phone.trim()) e.phone = 'Required'
    else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) e.phone = 'Invalid phone'
    if (!form.experience) e.experience = 'Required'
    if (!form.city.trim()) e.city = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (!validate()) return

    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mayvlkno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', phone: '', experience: '', city: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value })
    if (errors[field]) setErrors({ ...errors, [field]: '' })
  }

  return (
    <div ref={containerRef} className="page-fade-in min-h-screen pt-28 pb-20">
      {/* Background */}
      <div className="fixed inset-0 bg-mesh opacity-50 pointer-events-none" />
      <div className="fixed top-40 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div className="app-side lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-cyan-400 mb-6">
              👤 Partner Application
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Join the <span className="text-gradient">Vlands</span>
              <br />
              <span className="text-gradient-blue">Partner Network</span>
            </h1>

            <p className="text-white/50 mb-8">
              Take the first step towards transforming your real estate career with exclusive benefits.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl glass-card">
                  <span className="text-xl">{b.icon}</span>
                  <span className="font-medium text-white/80">{b.text}</span>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="p-5 rounded-xl glass-card">
              <h4 className="font-semibold mb-3">Need Help?</h4>
              <a href="mailto:partner@vlands.agency" className="flex items-center gap-2 text-sm text-white/50 hover:text-cyan-400 transition-colors mb-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                partner@vlands.agency
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-white/50 hover:text-cyan-400 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="app-form">
            {status === 'sent' ? (
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-400/20 border border-green-400/30 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-3">Application Submitted!</h2>
                <p className="text-white/50 mb-6">Our team will contact you within 48 hours.</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link to="/" className="btn-secondary text-sm">Back Home</Link>
                  <Link to="/support" className="btn-primary text-sm">View Resources</Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 lg:p-8">
                <h2 className="text-xl font-bold mb-1">Apply for Partnership</h2>
                <p className="text-white/40 text-sm mb-6">Fill your details to get started</p>

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Enter your name"
                      className={`form-input ${errors.name ? 'border-red-400' : ''}`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="your@email.com"
                      className={`form-input ${errors.email ? 'border-red-400' : ''}`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">Phone *</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">+91</span>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="98765 43210"
                        className={`form-input pl-12 ${errors.phone ? 'border-red-400' : ''}`}
                      />
                    </div>
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">Experience *</label>
                    <select
                      value={form.experience}
                      onChange={(e) => handleChange('experience', e.target.value)}
                      className={`form-input form-select ${errors.experience ? 'border-red-400' : ''}`}
                    >
                      {experienceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-gray-900">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.experience && <p className="text-red-400 text-xs mt-1">{errors.experience}</p>}
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">City / Region *</label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => handleChange('city', e.target.value)}
                      placeholder="Mumbai, Delhi, etc."
                      className={`form-input ${errors.city ? 'border-red-400' : ''}`}
                    />
                    {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">Message (Optional)</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about yourself..."
                      rows={3}
                      className="form-input resize-none"
                    />
                  </div>

                  {/* Error */}
                  {status === 'error' && (
                    <div className="p-3 rounded-lg bg-red-400/10 border border-red-400/30 text-red-400 text-sm">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full btn-primary py-4 text-base disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Apply for Partnership
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    )}
                  </button>

                  <p className="text-center text-xs text-white/30">
                    By applying, you agree to our <a href="#" className="text-cyan-400 hover:underline">Terms</a> and <a href="#" className="text-cyan-400 hover:underline">Privacy</a>
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
