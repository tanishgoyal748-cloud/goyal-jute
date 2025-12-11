import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CarouselLightbox({ items = [], index = 0, open = false, onClose = ()=>{} }){
  const [i, setI] = React.useState(index)
  const containerRef = React.useRef(null)
  const lastActiveRef = React.useRef(null)

  useEffect(()=> setI(index), [index])

  useEffect(()=>{
    if(!open) return
    lastActiveRef.current = document.activeElement
    setTimeout(()=> containerRef.current?.focus(), 10)

    const onKey = (e)=>{
      if(e.key === 'Escape') onClose()
      if(e.key === 'ArrowRight') setI(s => (s+1) % items.length)
      if(e.key === 'ArrowLeft') setI(s => (s-1 + items.length) % items.length)
    }
    document.addEventListener('keydown', onKey)
    return ()=>{
      document.removeEventListener('keydown', onKey)
      try{ lastActiveRef.current?.focus() }catch(e){}
    }
  }, [open, items.length, onClose])

  if(!open || items.length === 0) return null

  const cur = items[i]

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="lightbox-inner carousel" ref={containerRef} tabIndex={-1} onClick={e=>e.stopPropagation()}>
        <button className="lb-close" onClick={onClose} aria-label="Close">✕</button>

        <button className="lb-prev" onClick={()=>setI(s => (s-1 + items.length) % items.length)} aria-label="Previous">‹</button>

        <AnimatePresence initial={false} mode="wait">
          <motion.div key={i} initial={{opacity:0, x:40}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-40}} transition={{duration:0.32}} className="carousel-slide">
            <img src={cur.hd || cur.img} alt={cur.title || `Image ${i+1}`} />
            <div className="carousel-caption">
              <div>
                <h3>{cur.title}</h3>
                <p>{cur.caption}</p>
              </div>
              <div className="carousel-actions">
                <a className="btn primary" href={cur.hd || cur.img} target="_blank" rel="noreferrer" download>Download HD</a>
                <button className="btn ghost" onClick={()=> window.open('#contact','_self')}>Request Quote</button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button className="lb-next" onClick={()=>setI(s => (s+1) % items.length)} aria-label="Next">›</button>
      </div>
    </div>
  )
}
