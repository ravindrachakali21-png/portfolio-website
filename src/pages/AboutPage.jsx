import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import profilePhoto from '../assets/profile.jpg'
import logo from '../assets/logo.png'
import skillCss from '../assets/skill-css.png'
import skillTailwind from '../assets/skill-tailwind.png'
import skillCpp from '../assets/skill-cpp.png'
import skillPremiere from '../assets/skill-premiere.png'
import skillReact from '../assets/skill-react.png'
import skillFigma from '../assets/skill-figma.png'
import skillMui from '../assets/skill-materialui.png'

const skills = [
  { img: skillCss, name: 'CSS3' },
  { img: skillTailwind, name: 'Tailwind' },
  { img: skillCpp, name: 'C++' },
  { img: skillPremiere, name: 'Premiere' },
  { img: skillReact, name: 'React' },
  { img: skillFigma, name: 'Figma' },
  { img: skillMui, name: 'Material UI' },
]

function AboutPage() {
  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Navbar />

      <div style={{ width: '100%', maxWidth: '1478px', marginTop: '100px', padding: '0 16px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '30px' }}>

        {/* ABOUT HEADER BANNER */}
        <div style={{ width: '100%', backgroundColor: '#161616', borderRadius: '10px', padding: '40px 60px', boxSizing: 'border-box' }}>
          <h1 style={{ color: '#fff', fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: 900, margin: 0, letterSpacing: '4px' }}>
            ABOUT
          </h1>
        </div>

        {/* PHOTO + BIO */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Photo */}
          <div style={{ flexShrink: 0, width: '100%', maxWidth: '380px' }}>
            <img src={profilePhoto} alt="Rahul" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px', display: 'block' }} />
          </div>

          {/* Bio */}
          <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ color: '#fff', fontSize: '15px', lineHeight: 1.9, fontFamily: 'Space Grotesk, sans-serif', margin: 0 }}>
              I'm a Computer Science student at{' '}
              <a href="#" style={{ color: '#c8ff00', textDecoration: 'none' }}>SRM Institute of Science and Technology</a>.
              {' '}My passion lies in building user-friendly solutions that enhance overall user experiences. I am currently
              focused on{' '}
              <a href="#" style={{ color: '#c8ff00', textDecoration: 'none' }}>React Native, Expo, Firebase, and React</a>,
              {' '}leveraging these technologies to create responsive and functional applications. One of my ongoing projects is Rescue Paws,
              a mobile app designed to facilitate the rescue and adoption of stray and pet dogs. The app will soon be published on the{' '}
              <a href="#" style={{ color: '#c8ff00', textDecoration: 'none' }}>Play Store and App Store</a>,
              {' '}and it incorporates AI-driven features to guide users through the adoption process. In addition to app development,
              I've led the design and development of platforms like the GitHub Community SRM website, which serves as an all-in-one platform
              for the community. I've also organized and managed events such as hackathons and workshops, mentoring others in UI/UX and graphic
              design. I thrive in{' '}
              <a href="#" style={{ color: '#c8ff00', textDecoration: 'none' }}>Agile Scrum environments</a>
              {' '}and believe collaboration and teamwork are essential to delivering successful projects. I'm always eager to work on impactful
              projects that challenge me to grow while also contributing to meaningful outcomes. So, whether you're{' '}
              <a href="#" style={{ color: '#c8ff00', textDecoration: 'none' }}>looking for a dedicated developer, a creative designer, or a collaborative team member</a>,
              {' '}I'm here to help bring ideas to life. Let's connect and create innovative solutions together!
            </p>

            <div>
              <button style={{ backgroundColor: 'transparent', color: '#fff', border: '1.5px solid #fff', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif', display: 'flex', alignItems: 'center', gap: '8px' }}>
                📄 Download Resume
              </button>
            </div>
          </div>
        </div>

        {/* SKILLS + SOCIAL ROW */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>

          {/* Skills card */}
          <div style={{ flex: 2, minWidth: '280px', backgroundColor: '#161616', borderRadius: '12px', padding: '28px 32px', boxSizing: 'border-box' }}>
            <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, margin: '0 0 24px 0', fontFamily: 'Space Grotesk, sans-serif' }}>
              Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              {skills.map((skill) => (
                <img key={skill.name} src={skill.img} alt={skill.name} title={skill.name} style={{ width: '52px', height: '52px', objectFit: 'contain', borderRadius: '8px' }} />
              ))}
            </div>
          </div>

          {/* Social card */}
          <div style={{ flex: 1, minWidth: '200px', backgroundColor: '#161616', borderRadius: '12px', padding: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>

              {/* Instagram */}
              <a href="#" style={{ color: '#c8ff00' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.226 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038C23.986 15.668 24 15.259 24 12c0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" style={{ color: '#c8ff00' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </a>

              {/* Behance */}
              <a href="#" style={{ color: '#c8ff00', fontWeight: 900, fontSize: '24px', fontFamily: 'serif', textDecoration: 'none', lineHeight: 1 }}>Bē</a>

              {/* LinkedIn */}
              <a href="#" style={{ color: '#c8ff00' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* GitHub */}
              <a href="#" style={{ color: '#c8ff00' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer style={{ width: '100%', backgroundColor: '#1a1a1a', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', paddingTop: '54px', paddingBottom: '54px', paddingLeft: '50px', paddingRight: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box', flexWrap: 'wrap', gap: '20px' }}>
          <img src={logo} alt="Logo" style={{ width: '120px', height: 'auto', objectFit: 'contain' }} />
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 900, lineHeight: 1.2, margin: 0, fontFamily: 'Bebas Neue, sans-serif' }}>
              <span style={{ color: '#555' }}>Designing the </span>
              <span style={{ color: '#c8ff00' }}>extraordinary</span>
            </p>
            <p style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 900, lineHeight: 1.2, margin: 0, fontFamily: 'Bebas Neue, sans-serif' }}>
              <span style={{ color: '#555' }}>one </span>
              <span style={{ color: '#c8ff00' }}>pixel</span>
              <span style={{ color: '#555' }}> at a time.</span>
            </p>
            <p style={{ color: '#444', fontSize: '12px', marginTop: '10px', fontFamily: 'Space Grotesk, sans-serif', margin: '10px 0 0 0' }}>
              Portfolio v2.3 © 2024 Rahul
            </p>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default AboutPage