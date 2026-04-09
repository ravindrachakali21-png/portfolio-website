import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import techIcons from '../assets/tech-icons.png'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import project7 from '../assets/project7.png'
import useWindowSize from '../hooks/useWindowSize'
const projects = [
  { id: 1, title: 'Portfolio', type: 'Frontend', img: project1, desc: 'This project is a portfolio website developed using React.js. The website is designed to showcase the user\'s skills, projects, and services. It features a modern and clean design with smooth navigation and responsive layout.', features: [{ title: 'Responsive Design:', desc: 'The website is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.' }, { title: 'Modern UI/UX:', desc: 'The website features a modern and clean user interface, providing a pleasant user experience. It uses a consistent color scheme and typography throughout the site.' }], demo: '#', github: '#' },
  { id: 2, title: 'Weather App', type: 'Full Stack', img: project2, desc: 'A full-stack weather application built with NodeJS and ReactJS that delivers real-time weather data with an intuitive interface.', features: [{ title: 'Real-time Data:', desc: 'Fetches live weather data from external APIs providing accurate and up-to-date information for any location worldwide.' }, { title: 'Responsive Design:', desc: 'The app is fully responsive and works seamlessly across desktop and mobile devices.' }], demo: '#', github: '#' },
  { id: 3, title: 'Cred Clone', type: 'Frontend', img: project3, desc: 'A responsive CRED Landing Page clone built using ReactJS for modularity and interactivity, styled with CSS to match the original design.', features: [{ title: 'Pixel Perfect:', desc: 'Crafted to closely match the original CRED design with attention to detail in typography, colors, and layout.' }, { title: 'Responsive Layout:', desc: 'Fully responsive design ensuring the page looks great across all screen sizes and devices.' }], demo: '#', github: '#' },
  { id: 4, title: 'User Authentication System', type: 'Full Stack', img: project4, desc: 'A full-stack user authentication system with login, register, and session management using Node.js and React.', features: [{ title: 'Secure Auth:', desc: 'JWT-based authentication ensuring secure user sessions and protected routes.' }, { title: 'Full Stack:', desc: 'Built with Node.js backend and React frontend with a clean and intuitive UI.' }], demo: '#', github: '#' },
  { id: 5, title: 'Todo List', type: 'Frontend', img: project5, desc: 'A clean and functional Todo List app with add, delete, and complete task features built with React.', features: [{ title: 'Task Management:', desc: 'Easily add, complete, and delete tasks with a smooth and responsive interface.' }, { title: 'Local Storage:', desc: 'Tasks persist across sessions using browser local storage.' }], demo: '#', github: '#' },
  { id: 6, title: 'QR Scanner', type: 'Frontend', img: project6, desc: 'A QR code generator and scanner web app built with React that supports multiple QR formats.', features: [{ title: 'QR Generation:', desc: 'Generate QR codes instantly from any text or URL input.' }, { title: 'Scanner Support:', desc: 'Scan QR codes using your device camera directly in the browser.' }], demo: '#', github: '#' },
  { id: 7, title: 'Playlist Generator', type: 'Frontend', img: project7, desc: 'A Spotify-integrated playlist generator that creates custom playlists based on mood and genre preferences.', features: [{ title: 'Mood Based:', desc: 'Generates playlists tailored to your current mood using smart filtering.' }, { title: 'Spotify Integration:', desc: 'Connects with Spotify API to fetch and create real playlists in your account.' }], demo: '#', github: '#' },
]
function ProjectsPage() {
  const { isMobile } = useWindowSize() 
  const navigate = useNavigate()

  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Navbar />
      <div style={{ width: '100%', maxWidth: '1478px', marginTop: '100px', padding: '0 16px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '30px' }}>

        {/* HEADER */}
        <div style={{ width: '100%', backgroundColor: '#161616', borderRadius: '10px', padding: '40px 60px', boxSizing: 'border-box' }}>
          <h1 style={{ color: '#fff', fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: 900, margin: 0, letterSpacing: '4px', textAlign: 'center' }}>
            PROJECTS
          </h1>
        </div>

        {/* GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '10px', boxSizing: 'border-box' }}>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate('/projects/' + project.id)}
              style={{ backgroundColor: '#161616', borderRadius: '20px', overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img src={project.img} alt={project.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, margin: 0, fontFamily: 'Space Grotesk, sans-serif' }}>{project.title}</h3>
                <p style={{ color: '#c8ff00', fontSize: '13px', fontWeight: 600, margin: 0, fontFamily: 'Space Grotesk, sans-serif' }}>{project.type}</p>
                <p style={{ color: '#9ca3af', fontSize: '12px', lineHeight: 1.6, margin: 0, fontFamily: 'Space Grotesk, sans-serif' }}>{project.desc}</p>
                <img src={techIcons} alt="tech stack" style={{ height: '28px', objectFit: 'contain', objectPosition: 'left', marginTop: '8px' }} />
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default ProjectsPage