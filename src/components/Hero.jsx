import useWindowSize from '../hooks/useWindowSize'
function Hero() {
  const { isMobile } = useWindowSize() 
  const row1 = ['GNER', 'UI', 'DESIGNER', 'UI']
  const row2 = ['DEVELOPER', 'FRONTEND', 'DEV']
  const row3 = ['FRONTEND', 'DESIGNER', 'FRONT']

  return (
    <section id="home" style={{ width: '1478px', height: '764px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginTop: '100px' }}>

      {/* Watermark background rows */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0px', pointerEvents: 'none', userSelect: 'none' }}>
        <div style={{ display: 'flex', gap: '40px', transform: 'translateX(-60px)', opacity: 0.08 }}>
          {row1.map((word, i) => (
            <span key={i} style={{ fontSize: '160px', fontWeight: 900, color: 'transparent', letterSpacing: '0.1em', whiteSpace: 'nowrap', fontFamily: 'Bebas Neue, sans-serif', WebkitTextStroke: '1.5px #666' }}>
              {word}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '40px', transform: 'translateX(60px)', opacity: 0.08, marginTop: '-40px' }}>
          {row2.map((word, i) => (
            <span key={i} style={{ fontSize: '160px', fontWeight: 900, color: 'transparent', letterSpacing: '0.1em', whiteSpace: 'nowrap', fontFamily: 'Bebas Neue, sans-serif', WebkitTextStroke: '1.5px #666' }}>
              {word}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '40px', transform: 'translateX(-80px)', opacity: 0.08, marginTop: '-40px' }}>
          {row3.map((word, i) => (
            <span key={i} style={{ fontSize: '160px', fontWeight: 900, color: 'transparent', letterSpacing: '0.1em', whiteSpace: 'nowrap', fontFamily: 'Bebas Neue, sans-serif', WebkitTextStroke: '1.5px #666' }}>
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Center content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ color: '#c8ff00', fontSize: '22px', fontWeight: 500, marginBottom: '8px', fontFamily: 'Space Grotesk, sans-serif' }}>
          Hey There I'm
        </p>
        <h1 style={{ color: '#c8ff00', fontFamily: 'Bebas Neue, sans-serif', fontSize: '180px', lineHeight: 1, margin: 0, fontWeight: 900 }}>
          RAHUL
        </h1>
        <p style={{ color: '#ffffff', fontSize: '16px', fontWeight: 500, marginTop: '16px', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.6 }}>
          Currently Studying Computer Science<br />and Engineering
        </p>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ backgroundColor: '#c8ff00', color: '#000', borderRadius: '8px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" style={{ backgroundColor: '#c8ff00', color: '#000', borderRadius: '8px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero