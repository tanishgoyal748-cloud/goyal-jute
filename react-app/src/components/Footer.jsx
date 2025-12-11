import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Goyal PP Wovens</div>
        <div className="socials">
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
