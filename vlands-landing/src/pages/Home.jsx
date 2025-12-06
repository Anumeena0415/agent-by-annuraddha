import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import Pillars from '../components/Pillars'
import CTASection from '../components/CTASection'

export default function Home() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative">
      <Hero />
      <StatsBar />
      <Pillars />
      <CTASection />
    </div>
  )
}
