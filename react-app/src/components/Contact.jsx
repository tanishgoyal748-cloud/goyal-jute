import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Reach out for quotes, samples or custom orders.</p>
          <p><strong>Phone:</strong> <a href="tel:+911234567890">+91-12345-67890</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@goyalppwovens.com">info@goyalppwovens.com</a></p>
        </div>
        <form className="contact-form" onSubmit={(e)=>{ e.preventDefault(); alert('Message sent (demo)') }}>
          <input name="name" placeholder="Your name" required />
          <input name="email" type="email" placeholder="Email" required />
          <textarea name="message" rows={5} placeholder="Message" required />
          <div style={{display:'flex', gap:10}}>
            <button className="btn primary" type="submit">Send Message</button>
            <button className="btn ghost" type="button">Request Sample</button>
          </div>
        </form>
      </div>
    </section>
  )
}
