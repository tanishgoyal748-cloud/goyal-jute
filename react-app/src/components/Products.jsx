import React from 'react'
import { motion } from 'framer-motion'
import Lightbox from './Lightbox'

const PRODUCTS = [
  {title:'PP Woven Bags', img:'https://images.unsplash.com/photo-1581091012184-7f9f5f0d8b6f?w=1600&h=1066&fit=crop', srcset:'https://images.unsplash.com/photo-1581091012184-7f9f5f0d8b6f?w=480&h=320&fit=crop 480w, https://images.unsplash.com/photo-1581091012184-7f9f5f0d8b6f?w=800&h=533&fit=crop 800w, https://images.unsplash.com/photo-1581091012184-7f9f5f0d8b6f?w=1600&h=1066&fit=crop 1600w', desc:'High-strength polypropylene woven bags for industrial packaging.'},
  {title:'PP Woven Fabric', img:'https://images.unsplash.com/photo-1542705758-5a8d3b1f9b5b?w=1600&h=1066&fit=crop', srcset:'https://images.unsplash.com/photo-1542705758-5a8d3b1f9b5b?w=480&h=320&fit=crop 480w, https://images.unsplash.com/photo-1542705758-5a8d3b1f9b5b?w=800&h=533&fit=crop 800w, https://images.unsplash.com/photo-1542705758-5a8d3b1f9b5b?w=1600&h=1066&fit=crop 1600w', desc:'Woven fabric in multiple weights.'},
  {title:'Laminated PP Bags', img:'https://images.unsplash.com/photo-1581091870622-d7f5a1d6c9c8?w=1600&h=1066&fit=crop', srcset:'https://images.unsplash.com/photo-1581091870622-d7f5a1d6c9c8?w=480&h=320&fit=crop 480w, https://images.unsplash.com/photo-1581091870622-d7f5a1d6c9c8?w=800&h=533&fit=crop 800w, https://images.unsplash.com/photo-1581091870622-d7f5a1d6c9c8?w=1600&h=1066&fit=crop 1600w', desc:'Water-resistant laminated options.'},
  {title:'Bulk / FIBC', img:'https://images.unsplash.com/photo-1605902711622-cfb43c44367b?w=1600&h=1066&fit=crop', srcset:'https://images.unsplash.com/photo-1605902711622-cfb43c44367b?w=480&h=320&fit=crop 480w, https://images.unsplash.com/photo-1605902711622-cfb43c44367b?w=800&h=533&fit=crop 800w, https://images.unsplash.com/photo-1605902711622-cfb43c44367b?w=1600&h=1066&fit=crop 1600w', desc:'Custom big-bags for bulk handling.'},
  {title:'Geotextile', img:'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1600&h=1066&fit=crop', srcset:'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=480&h=320&fit=crop 480w, https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&h=533&fit=crop 800w, https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1600&h=1066&fit=crop 1600w', desc:'Geotextiles for civil engineering.'},
  {title:'Custom Solutions', img:'https://images.unsplash.com/photo-1562564055-71dff9f0a9b3?w=1600&h=1066&fit=crop', srcset:'https://images.unsplash.com/photo-1562564055-71dff9f0a9b3?w=480&h=320&fit=crop 480w, https://images.unsplash.com/photo-1562564055-71dff9f0a9b3?w=800&h=533&fit=crop 800w, https://images.unsplash.com/photo-1562564055-71dff9f0a9b3?w=1600&h=1066&fit=crop 1600w', desc:'Tailored sizes, finishes and printing.'}
]

export default function Products(){
  const [open, setOpen] = React.useState(false)
  const [index, setIndex] = React.useState(0)
  const images = PRODUCTS.map(p => p.img)

  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2>Our Products</h2>
        <div className="products-grid">
          {PRODUCTS.map((p, i)=> (
            <motion.article key={p.title} className="card" whileHover={{y:-8, scale:1.02}} initial={{opacity:0, y:24}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.06}}>
              <button className="img-btn" onClick={()=>{ setOpen(true); setIndex(i) }} aria-label={`Open ${p.title}`}>
                  <img src={p.img} srcSet={p.srcset} sizes="(max-width:600px) 100vw, 33vw" alt={p.title} loading="lazy" width="1200" height="800" />
                </button>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="card-actions">
                <button className="btn light">Learn More</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <Lightbox images={images} index={index} open={open} onClose={()=>setOpen(false)} />
    </section>
  )
}
