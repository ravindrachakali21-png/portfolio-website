import logo from '../assets/logo.png'
import useWindowSize from '../hooks/useWindowSize'
function Footer() {
  const { isMobile } = useWindowSize() 
  return (
    <footer style={{ width: '1478px', height: '331px', backgroundColor: '#1a1a1a', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', paddingTop: '54px', paddingBottom: '54px', paddingLeft: '50px', paddingRight: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box' }}>

      {/* Logo */}
      <img src={logo} alt="Logo" style={{ width: '140px', height: 'auto', objectFit: 'contain' }} />

      {/* Right text */}
      <div style={{ textAlign: 'right' }}>
        <p style={{ fontSize: '42px', fontWeight: 900, lineHeight: 1.2, margin: 0, fontFamily: 'Bebas Neue, sans-serif' }}>
          <span style={{ color: '#555' }}>Designing the </span>
          <span style={{ color: '#c8ff00' }}>extraordinary</span>
        </p>
        <p style={{ fontSize: '42px', fontWeight: 900, lineHeight: 1.2, margin: 0, fontFamily: 'Bebas Neue, sans-serif' }}>
          <span style={{ color: '#555' }}>one </span>
          <span style={{ color: '#c8ff00' }}>pixel</span>
          <span style={{ color: '#555' }}> at a time.</span>
        </p>
        <p style={{ color: '#444', fontSize: '12px', marginTop: '10px', fontFamily: 'Space Grotesk, sans-serif' }}>
          Portfolio v2.3 © 2024 Rahul
        </p>
      </div>
    </footer>
  )
}

export default Footer