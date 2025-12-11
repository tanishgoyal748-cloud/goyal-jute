import React, { useEffect } from 'react'

export default function Lightbox({ images = [], index = 0, onClose = () => {}, open = false }){
  const [i, setI] = React.useState(index)
  const closeRef = React.useRef(null)
  const containerRef = React.useRef(null)
  const lastActiveRef = React.useRef(null)

  useEffect(()=>{ setI(index) }, [index])

  useEffect(()=>{
    if(!open) return;
    lastActiveRef.current = document.activeElement
    // focus the close button when opened
    setTimeout(()=> closeRef.current?.focus(), 0)

    const onKey = (e)=>{
      if(e.key === 'Escape') onClose()
      if(e.key === 'ArrowRight') setI(s => Math.min(s+1, images.length-1))
      if(e.key === 'ArrowLeft') setI(s => Math.max(s-1, 0))
      if(e.key === 'Tab') {
        // basic focus trap
        const focusable = containerRef.current.querySelectorAll('button, [href], input, textarea, [tabindex]:not([tabindex="-1"])')
        if(focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length-1]
        if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
        else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener('keydown', onKey)
    return ()=>{
      document.removeEventListener('keydown', onKey)
      // restore focus
      try { lastActiveRef.current?.focus() } catch (err){}
    }
  }, [open, images.length, onClose])

  if(!open) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="lightbox-inner" ref={containerRef} onClick={e=>e.stopPropagation()}>
        <button className="lb-close" ref={closeRef} onClick={onClose} aria-label="Close">✕</button>
        <button className="lb-prev" onClick={()=>setI(s => Math.max(s-1, 0))} aria-label="Previous">‹</button>
        <img src={images[i]} alt={`Product ${i+1}`} />
        <button className="lb-next" onClick={()=>setI(s => Math.min(s+1, images.length-1))} aria-label="Next">›</button>
      </div>
    </div>
  )
}
