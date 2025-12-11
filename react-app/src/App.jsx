import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
