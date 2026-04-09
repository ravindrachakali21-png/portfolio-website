import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useWindowSize from '../hooks/useWindowSize'
function ContactPage() {
  const { isMobile } = useWindowSize() 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    if (name.trim() && email.trim() && message.trim()) {
      setSent(true)
      setName('')
      setEmail('')
      setMessage('')
      setTimeout(() => setSent(false), 3000)
    }
  }

  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Navbar />

      <div style={{ width: '100%', maxWidth: '1478px', marginTop: '100px', padding: '0 16px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '30px' }}>

        {/* CONTACT HEADER BANNER */}
        <div style={{ width: '100%', height: '152px', backgroundColor: '#161616', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>
          <h1 style={{ color: '#fff', fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: 900, margin: 0, letterSpacing: '4px' }}>
            CONTACT
          </h1>
        </div>

        {/* CONTACT BOX */}
        <div style={{ width: '100%', backgroundColor: '#c8ff00', borderRadius: '10px', padding: '60px', boxSizing: 'border-box', display: 'flex', flexDirection: 'row', gap: '60px', flexWrap: 'wrap' }}>

          {/* LEFT - Get in Touch text */}
          <div style={{ flex: 1, minWidth: '240px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{ color: '#0d0d0d', fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 900, margin: 0, lineHeight: 1 }}>
              Get in Touch
            </h2>
            <p style={{ color: '#0d0d0d', fontSize: '15px', lineHeight: 1.7, margin: 0, fontFamily: 'Space Grotesk, sans-serif', maxWidth: '320px' }}>
              If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas .
            </p>
          </div>

          {/* RIGHT - Form */}
          <div style={{ flex: 1.5, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Name */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: '#0d0d0d', fontSize: '15px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }}>
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: 'none', outline: 'none', fontSize: '15px', fontFamily: 'Space Grotesk, sans-serif', backgroundColor: '#fff', color: '#000', boxSizing: 'border-box' }}
              />
            </div>

            {/* Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: '#0d0d0d', fontSize: '15px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: 'none', outline: 'none', fontSize: '15px', fontFamily: 'Space Grotesk, sans-serif', backgroundColor: '#fff', color: '#000', boxSizing: 'border-box' }}
              />
            </div>

            {/* Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: '#0d0d0d', fontSize: '15px', fontWeight: 600, fontFamily: 'Space Grotesk, sans-serif' }}>
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={7}
                style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: 'none', outline: 'none', fontSize: '15px', fontFamily: 'Space Grotesk, sans-serif', backgroundColor: '#fff', color: '#000', resize: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* Send Button */}
            <button
              onClick={handleSend}
              style={{ width: '100%', padding: '16px', backgroundColor: '#0d0d0d', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif', transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              {sent ? '✅ Message Sent!' : 'Send'}
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  )
}

export default ContactPage