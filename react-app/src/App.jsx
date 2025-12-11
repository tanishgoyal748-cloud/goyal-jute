import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VideoShowcase from './components/VideoShowcase'

export default function App(){
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <VideoShowcase />
        <Products />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
