import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import Pillars from '../components/Pillars'
import CTASection from '../components/CTASection'

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="page-fade-in">
      <Hero />
      <StatsBar />
      <Pillars />
      <CTASection />
    </div>
  )
}
