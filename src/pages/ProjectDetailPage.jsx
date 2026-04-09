import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import techIcons from '../assets/tech-icons.png'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import useWindowSize from '../hooks/useWindowSize'
const projects = [
  {
    id: 1, title: 'Portfolio', type: 'Frontend', img: project1,
    desc: 'This project is a portfolio website developed using React.js. The website is designed to showcase the user\'s skills, projects, and services. It features a modern and clean design with smooth navigation and responsive layout.',
    features: [
      { title: 'Responsive Design:', desc: 'The website is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.' },
      { title: 'Modern UI/UX:', desc: 'The website features a modern and clean user interface, providing a pleasant user experience. It uses a consistent color scheme and typography throughout the site.' },
    ],
    demo: '#', github: '#',
  },
  {
    id: 2, title: 'Weather App', type: 'Full Stack', img: project2,
    desc: 'A full-stack weather application built with NodeJS and ReactJS that delivers real-time weather data with an intuitive interface.',
    features: [
      { title: 'Real-time Data:', desc: 'Fetches live weather data from external APIs providing accurate and up-to-date information for any location worldwide.' },
      { title: 'Responsive Design:', desc: 'The app is fully responsive and works seamlessly across desktop and mobile devices.' },
    ],
    demo: '#', github: '#',
  },
  {
    id: 3, title: 'Cred Clone', type: 'Frontend', img: project3,
    desc: 'A responsive CRED Landing Page clone built using ReactJS for modularity and interactivity, styled with CSS to match the original design.',
    features: [
      { title: 'Pixel Perfect:', desc: 'Crafted to closely match the original CRED design with attention to detail in typography, colors, and layout.' },
      { title: 'Responsive Layout:', desc: 'Fully responsive design ensuring the page looks great across all screen sizes and devices.' },
    ],
    demo: '#', github: '#',
  },
  {
    id: 4, title: 'User Authentication System', type: 'Full Stack', img: project1,
    desc: 'A full-stack user authentication system with login, register, and session management using Node.js and React.',
    features: [
      { title: 'Secure Auth:', desc: 'JWT-based authentication ensuring secure user sessions and protected routes.' },
      { title: 'Full Stack:', desc: 'Built with Node.js backend and React frontend with a clean and intuitive UI.' },
    ],
    demo: '#', github: '#',
  },
  {
    id: 5, title: 'Todo List', type: 'Frontend', img: project2,
    desc: 'A clean and functional Todo List app with add, delete, and complete task features built with React.',
    features: [
      { title: 'Task Management:', desc: 'Easily add, complete, and delete tasks with a smooth and responsive interface.' },
      { title: 'Local Storage:', desc: 'Tasks persist across sessions using browser local storage.' },
    ],
    demo: '#', github: '#',
  },
  {
    id: 6, title: 'QR Scanner', type: 'Frontend', img: project3,
    desc: 'A QR code generator and scanner web app built with React that supports multiple QR formats.',
    features: [
      { title: 'QR Generation:', desc: 'Generate QR codes instantly from any text or URL input.' },
      { title: 'Scanner Support:', desc: 'Scan QR codes using your device camera directly in the browser.' },
    ],
    demo: '#', github: '#',
  },
  {
    id: 7, title: 'Playlist Generator', type: 'Frontend', img: project1,
    desc: 'A Spotify-integrated playlist generator that creates custom playlists based on mood and genre preferences.',
    features: [
      { title: 'Mood Based:', desc: 'Generates playlists tailored to your current mood using smart filtering.' },
      { title: 'Spotify Integration:', desc: 'Connects with Spotify API to fetch and create real playlists in your account.' },
    ],
    demo: '#', github: '#',
  },
]

function ProjectDetailPage() {
  const { isMobile } = useWindowSize() 
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === parseInt(id))

  if (!project) {
    return (
      <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#fff', fontFamily: 'Space Grotesk, sans-serif' }}>Project not found.</p>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Navbar />
      <div style={{ width: '100%', maxWidth: '1478px', marginTop: '100px', padding: '0 16px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '30px' }}>

        {/* BACK BUTTON */}
        <div>
          <button onClick={() => navigate('/projects')} style={{ backgroundColor: '#1a1a1a', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif', display: 'flex', alignItems: 'center', gap: '8px' }}>
            &#8592; Back
          </button>
        </div>

        {/* PROJECT HERO */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ flex: 1.2, minWidth: '280px' }}>
            <img src={project.img} alt={project.title} style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ flex: 1, minWidth: '260px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h1 style={{ color: '#fff', fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, margin: 0 }}>{project.title}</h1>
            <p style={{ color: '#c8ff00', fontSize: '16px', fontWeight: 600, margin: 0, fontFamily: 'Space Grotesk, sans-serif' }}>{project.type}</p>
            <p style={{ color: '#ccc', fontSize: '14px', lineHeight: 1.8, margin: 0, fontFamily: 'Space Grotesk, sans-serif' }}>{project.desc}</p>
            <div>
              <p style={{ color: '#fff', fontSize: '16px', fontWeight: 700, margin: '0 0 10px 0', fontFamily: 'Space Grotesk, sans-serif' }}>Tech Stack</p>
              <img src={techIcons} alt="tech stack" style={{ height: '44px', objectFit: 'contain', objectPosition: 'left' }} />
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href={project.demo} style={{ backgroundColor: '#c8ff00', color: '#000', padding: '12px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Space Grotesk, sans-serif' }}>▶ Demo</a>
              <a href={project.github} style={{ backgroundColor: '#c8ff00', color: '#000', padding: '12px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Space Grotesk, sans-serif' }}>&#128027; GitHub</a>
            </div>
          </div>
        </div>

        {/* MAIN FEATURES */}
        <div style={{ width: '100%', backgroundColor: '#161616', borderRadius: '12px', padding: '36px 40px', boxSizing: 'border-box' }}>
          <h2 style={{ color: '#c8ff00', fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, margin: '0 0 24px 0' }}>Main Features</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {project.features.map((feature, index) => (
              <div key={index} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#fff', fontSize: '18px', marginTop: '2px' }}>•</span>
                <div>
                  <p style={{ color: '#fff', fontSize: '15px', fontWeight: 700, margin: '0 0 4px 0', fontFamily: 'Space Grotesk, sans-serif' }}>{feature.title}</p>
                  <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.7, margin: 0, fontFamily: 'Space Grotesk, sans-serif' }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default ProjectDetailPage