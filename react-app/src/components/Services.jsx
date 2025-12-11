import React from 'react'
import { motion } from 'framer-motion'

const SERVICES = [
  {title:'Manufacturing', desc:'High-capacity production lines and custom finishing.'},
  {title:'Export', desc:'Reliable logistics and global export compliance.'},
  {title:'Customization', desc:'Printing, lamination, and tailor-made sizes.'},
  {title:'Quality Assurance', desc:'In-line QC and certifications.'}
]

export default function Services(){
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {SERVICES.map((s,i)=> (
            <motion.div key={s.title} className="service-card" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.08}}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
