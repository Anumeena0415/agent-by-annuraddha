import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import WhyPartner from './pages/WhyPartner'
import SupportResources from './pages/SupportResources'
import Application from './pages/Application'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className='min-h-screen bg-gradient-to-b from-vdark to-black text-white'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/why' element={<WhyPartner/>} />
          <Route path='/support' element={<SupportResources/>} />
          <Route path='/apply' element={<Application/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
