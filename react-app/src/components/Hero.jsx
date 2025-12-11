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
      {ParticlesComp && (()=>{
        const Part = ParticlesComp.Particles
        const loadFullFn = ParticlesComp.loadFull
        return <Part id="tsparticles-react" options={particlesOptions} init={async (main) => { await loadFullFn(main) }} />
      })()}

      <div className="hero-inner container">
        <motion.h1 initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1.1}}>Industrial PP Wovens & Bags — Built to Last</motion.h1>
        <motion.p initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1}} className="hero-sub">High-strength polypropylene woven fabric and bags for packaging, agriculture & industry.</motion.p>

        <motion.div className="hero-actions" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}>
          <a className="btn primary" href="#products">Explore Products</a>
          <a className="btn ghost" href="#contact">Request Quote</a>
        </motion.div>
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_j1adxtyb.json"
          background="transparent"
          speed="1"
          style={{ width: 280, height: 280, margin: '20px auto 0' }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </section>
  )
}
