import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Navbar />
      <div style={{ width: '100%', maxWidth: '1478px', display: 'flex', flexDirection: 'column', gap: '30px', padding: '0 16px', boxSizing: 'border-box' }}>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home