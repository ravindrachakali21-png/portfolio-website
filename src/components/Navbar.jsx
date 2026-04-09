import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

  const handleClick = (path) => {
    setMenuOpen(false)
    if (path.startsWith('/#')) {
      navigate('/')
      setTimeout(() => {
        const id = path.replace('/#', '')
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      navigate(path)
      window.scrollTo(0, 0)
    }
  }

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav style={{ width: '100%', backgroundColor: '#0d0d0d', position: 'fixed', top: 0, left: 0, zIndex: 50, boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1478px', margin: '0 auto', height: '100px', paddingTop: '40px', paddingBottom: '40px', paddingLeft: '16px', paddingRight: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>

        {/* Desktop */}
        <ul className="hidden md:flex" style={{ gap: '60px', listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map((link) => (
            <li key={link.label}>
              <button onClick={() => handleClick(link.path)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 500, letterSpacing: '0.05em', color: isActive(link.path) ? '#c8ff00' : '#9ca3af', fontFamily: 'Space Grotesk, sans-serif' }}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile top bar */}
        <div className="flex md:hidden" style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#c8ff00', fontFamily: 'Bebas Neue, sans-serif', fontSize: '22px', fontWeight: 900 }}>RAHUL</span>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }}>
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="flex md:hidden" style={{ backgroundColor: '#0d0d0d', padding: '0 16px 16px' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {links.map((link) => (
              <li key={link.label}>
                <button onClick={() => handleClick(link.path)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 500, color: isActive(link.path) ? '#c8ff00' : '#9ca3af', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar