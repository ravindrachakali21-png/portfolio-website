function About() {
  return (
    <section id="about" style={{ width: '1478px', backgroundColor: '#c8ff00', borderRadius: '10px', paddingTop: '50px', paddingBottom: '50px', paddingLeft: '100px', paddingRight: '100px', display: 'flex', flexDirection: 'column', gap: '10px', boxSizing: 'border-box' }}>
      <h2 style={{ color: '#000', fontSize: '32px', fontWeight: 900, textAlign: 'center', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '3px', margin: 0 }}>
        About
      </h2>
      <p style={{ color: '#000', fontSize: '15px', lineHeight: 1.8, fontFamily: 'Space Grotesk, sans-serif', margin: 0 }}>
        Hi there! I'm Rahul, a third-year Computer Science student at SRM Institute with a passion for crafting user-centric experiences. I specialize in UI/UX design, front-end development, and graphic design, with expertise in HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, QML, and C++. I thrive on collaboration and bring experience in agile scrum methodologies. Beyond coding, I enjoy photography, graphic design, and exploring music. Let's connect and bring your digital visions to life.
      </p>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
        <button style={{ backgroundColor: '#0d0d0d', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif' }}>
          More...
        </button>
      </div>
    </section>
  )
}

export default About