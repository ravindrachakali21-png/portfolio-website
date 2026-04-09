import techIcons from '../assets/tech-icons.png'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import useWindowSize from '../hooks/useWindowSize'
const projects = [
  {
    title: 'Portfolio',
    type: 'Frontend',
    desc: 'Developed to showcase my skills in web development, my portfolio website exemplifies proficiency in technologies such as ReactJS, CSS, and Figma.',
    img: project1,
  },
  {
    title: 'Weather App',
    type: 'Full Stack',
    desc: 'Developed a full-stack weather app using NodeJS/Express for server-side logic and ReactJS/Handlebars for interactive frontend, delivering real-time weather data.',
    img: project2,
  },
  {
    title: 'Cred Clone',
    type: 'Frontend',
    desc: 'Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.',
    img: project3,
  },
]

function Projects() {
  const { isMobile } = useWindowSize() 
  return (
    <section id="projects" style={{ width: '1478px', display: 'flex', flexDirection: 'column', gap: '20px', boxSizing: 'border-box' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 900, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '2px', margin: 0 }}>
          Recent Projects
        </h2>
        <a href="#" style={{ color: '#fff', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Space Grotesk, sans-serif' }}>
          See all &#8594;
        </a>
      </div>

      {/* Cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ backgroundColor: '#1a1a1a', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <img src={project.img} alt={project.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, margin: 0, fontFamily: 'Space Grotesk, sans-serif' }}>
                {project.title}
              </h3>
              <p style={{ color: '#c8ff00', fontSize: '13px', fontWeight: 600, margin: 0, fontFamily: 'Space Grotesk, sans-serif' }}>
                {project.type}
              </p>
              <p style={{ color: '#9ca3af', fontSize: '12px', lineHeight: 1.6, margin: 0, fontFamily: 'Space Grotesk, sans-serif' }}>
                {project.desc}
              </p>
              <img src={techIcons} alt="tech stack" style={{ height: '28px', objectFit: 'contain', objectPosition: 'left', marginTop: '8px' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects