import React from 'react'
import { motion } from 'framer-motion'

const particlesOptions = {
  particles: { number: { value: 30 }, size: { value: { min:1, max:3 } }, move: { speed:0.6 } },
  interactivity: { events: { onHover: { enable: false } } }
}

export default function Hero(){
  const [ParticlesComp, setParticlesComp] = React.useState(null)

  React.useEffect(()=>{
    let mounted = true
    const load = async () => {
      // defer loading of heavy particle code until idle or a short timeout
      await new Promise(res => (window.requestIdleCallback ? window.requestIdleCallback(res) : setTimeout(res, 700)))
      const [{default: Particles}, { loadFull }] = await Promise.all([import('react-tsparticles'), import('tsparticles')])
      if(!mounted) return
      setParticlesComp({ Particles, loadFull })
    }
    load()
    return ()=>{ mounted = false }
  },[])

  return (
    <section id="home" className="hero-animated">
      <div className="hero-video-bg" aria-hidden="true">
        <video playsInline autoPlay muted loop poster="https://images.unsplash.com/photo-1581091012184-7f9f5f0d8b6f?w=1200&h=800&fit=crop">
          <source src="https://cdn.coverr.co/videos/coverr-aerial-view-industrial-plant-1638?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9" type="video/mp4" />
        </video>
      </div>

      {ParticlesComp && (()=>{
        const Part = ParticlesComp.Particles
        const loadFullFn = ParticlesComp.loadFull
        return <Part id="tsparticles-react" options={particlesOptions} init={async (main) => { await loadFullFn(main) }} />
      })()}

      <div className="hero-inner container">
        <motion.h1 initial={{y:40, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1.2, ease:'easeOut'}}>We Design Durable <span style={{color:'var(--accent)'}}>PP Woven</span> Fabrics & Bags</motion.h1>
        <motion.p initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1}} className="hero-sub">End-to-end manufacturing — custom sizes, lamination, printing and global shipping.</motion.p>

        <motion.div className="hero-actions" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}>
          <a className="btn primary" href="#products">Explore Products</a>
          <a className="btn ghost" href="#contact">Request Quote</a>
        </motion.div>

        <div style={{marginTop:28}}>
          <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_ktwnwv5m.json" background="transparent" speed="1" style={{ width: 180, height: 180, margin: '0 auto' }} loop autoplay></lottie-player>
        </div>
      </div>
    </section>
  )
}
