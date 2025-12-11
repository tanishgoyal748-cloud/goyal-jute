import React from 'react'
import { motion } from 'framer-motion'
import CarouselLightbox from './CarouselLightbox'

const PRODUCTS = [
  {title:'PP Woven Fabric', img:'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80', hd:'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=2000&q=90', desc:'Premium industrial polypropylene woven fabric with superior tensile strength and durability.'},
  {title:'Jute Bags', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', hd:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2000&q=90', desc:'Eco-friendly natural jute bags perfect for sustainable packaging and storage solutions.'},
  {title:'PP Woven Bags', img:'https://images.unsplash.com/photo-1492707892657-8a91d798cbfd?w=800&q=80', hd:'https://images.unsplash.com/photo-1492707892657-8a91d798cbfd?w=2000&q=90', desc:'High-strength polypropylene woven bags for industrial and agricultural applications.'},
  {title:'Jute Bales', img:'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&q=80', hd:'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=2000&q=90', desc:'Premium raw jute fiber bales sourced and processed to industry standards.'},
  {title:'Laminated Solutions', img:'https://images.unsplash.com/photo-1581091870622-d7f5a1d6c9c8?w=800&q=80', hd:'https://images.unsplash.com/photo-1581091870622-d7f5a1d6c9c8?w=2000&q=90', desc:'Water-resistant laminated PP fabric for extreme moisture protection.'},
  {title:'Custom Orders', img:'https://images.unsplash.com/photo-1562564055-71dff9f0a9b3?w=800&q=80', hd:'https://images.unsplash.com/photo-1562564055-71dff9f0a9b3?w=2000&q=90', desc:'Tailored fabric solutions: custom dimensions, prints, and specialty finishes.'}
]

export default function Products(){
  const [open, setOpen] = React.useState(false)
  const [index, setIndex] = React.useState(0)
  const items = PRODUCTS.map(p => ({ img: p.img, hd: p.hd, title: p.title, caption: p.desc }))

  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2>Our Products</h2>
        <div className="products-grid">
          {PRODUCTS.map((p, i)=> (
            <motion.article key={p.title} className="card" whileHover={{scale:1.02}} initial={{opacity:0, y:24}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.08}}>
              <div className="card-media" style={{backgroundImage:`url(${p.img})`}} role="img" aria-label={p.title} />
              <div className="ai-badge">AI Image</div>
              <div className="card-overlay">
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className="card-meta">
                  <div className="card-actions">
                    <button className="btn primary" onClick={()=>{ setOpen(true); setIndex(i) }} aria-label={`View ${p.title}`}><span className="btn-icon">🔍</span> View</button>
                    <a className="btn ghost" href="#contact">Request Quote</a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <CarouselLightbox items={items} index={index} open={open} onClose={()=>setOpen(false)} />
    </section>
  )
}
