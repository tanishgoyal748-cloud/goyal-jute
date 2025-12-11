import React from 'react'

export default function Navbar(){
  const [open, setOpen] = React.useState(false)
  return (
    <header className="nav-root">
      <div className="container nav-inner">
        <a className="brand" href="#home">Goyal PP Wovens</a>
        <nav className={`nav-links ${open? 'open':''}`}> 
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <button aria-label="menu" className="nav-toggle" onClick={()=>setOpen(s=>!s)}>
          <span/>
          <span/>
          <span/>
        </button>
      </div>
    </header>
  )
}
