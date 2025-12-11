import React from 'react'
import { motion } from 'framer-motion'

export default function VideoShowcase(){
  return (
    <section className="section video-showcase">
      <div className="container">
        <motion.h2 initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}}>Manufacturing Process</motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} className="hero-sub">A short walkthrough of our production line and quality controls.</motion.p>

        <div style={{display:'grid',gridTemplateColumns:'1fr',gap:20,marginTop:18}}>
          <div style={{borderRadius:12,overflow:'hidden',boxShadow:'0 18px 50px rgba(2,6,23,0.6)'}}>
            <video controls playsInline style={{width:'100%',height:'auto',display:'block'}} poster="https://images.unsplash.com/photo-1581091012184-7f9f5f0d8b6f?w=1200&h=800&fit=crop">
              <source src="https://cdn.coverr.co/videos/coverr-manufacturing-assembly-line-6913?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
