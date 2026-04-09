import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import g1 from '../assets/gallery/g1.png'
import g2 from '../assets/gallery/g2.png'
import g3 from '../assets/gallery/g3.png'
import g4 from '../assets/gallery/g4.png'
import g5 from '../assets/gallery/g5.png'
import g6 from '../assets/gallery/g6.png'
import g7 from '../assets/gallery/g7.png'
import g8 from '../assets/gallery/g8.png'
import g9 from '../assets/gallery/g9.png'
import g10 from '../assets/gallery/g10.png'
import g11 from '../assets/gallery/g11.png'
import g12 from '../assets/gallery/g12.png'
import g13 from '../assets/gallery/g13.png'
import g14 from '../assets/gallery/g14.png'
import g15 from '../assets/gallery/g15.png'
import g16 from '../assets/gallery/g16.png'
import g17 from '../assets/gallery/g17.png'
import g18 from '../assets/gallery/g18.png'
import g19 from '../assets/gallery/g19.png'
import g20 from '../assets/gallery/g20.png'
import g21 from '../assets/gallery/g21.png'
import g22 from '../assets/gallery/g22.png'
import g23 from '../assets/gallery/g23.png'
import g24 from '../assets/gallery/g24.png'
import g25 from '../assets/gallery/g25.png'
import g26 from '../assets/gallery/g26.png'
import g27 from '../assets/gallery/g27.png'
import g28 from '../assets/gallery/g28.png'
import g29 from '../assets/gallery/g29.png'
import g30 from '../assets/gallery/g30.png'
import g31 from '../assets/gallery/g31.png'

const col1 = [
  { img: g1, big: true },
  { img: g2, big: false },
  { img: g3, big: false },
  { img: g4, big: true },
  { img: g5, big: false },
  { img: g6, big: true },
  { img: g7, big: false },
  { img: g8, big: true },
]

const col2 = [
  { img: g9, big: true },
  { img: g10, big: false },
  { img: g11, big: true },
  { img: g12, big: false },
  { img: g13, big: true },
  { img: g14, big: false },
  { img: g15, big: true },
  { img: g16, big: false },
]

const col3 = [
  { img: g17, big: false },
  { img: g18, big: true },
  { img: g19, big: false },
  { img: g20, big: true },
  { img: g21, big: false },
  { img: g22, big: true },
  { img: g23, big: false },
  { img: g24, big: true },
]

const col4 = [
  { img: g25, big: true },
  { img: g26, big: false },
  { img: g27, big: true },
  { img: g28, big: false },
  { img: g29, big: true },
  { img: g30, big: false },
  { img: g31, big: true },
]

const BIG_HEIGHT = '358px'
const SMALL_HEIGHT = '201px'

function GalleryColumn({ items, isFirst }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10.73px', flex: 1, minWidth: 0 }}>
      {isFirst && (
        <div style={{ backgroundColor: '#000', padding: '16px 20px', borderRadius: '4px' }}>
          <h2 style={{ color: '#fff', fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', fontWeight: 900, margin: 0, letterSpacing: '2px' }}>
            Gallery
          </h2>
        </div>
      )}
      {items.map((item, i) => (
        <div
          key={i}
          style={{ width: '100%', height: item.big ? BIG_HEIGHT : SMALL_HEIGHT, overflow: 'hidden', borderRadius: '4px', flexShrink: 0 }}
        >
          <img
            src={item.img}
            alt={'gallery ' + i}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
      ))}
    </div>
  )
}

function GalleryPage() {
  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Navbar />

      <div style={{ width: '100%', maxWidth: '1478px', marginTop: '100px', padding: '0 16px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '30px' }}>

        {/* GALLERY GRID */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10.73px', alignItems: 'flex-start', width: '100%' }}>
          <GalleryColumn items={col1} isFirst={true} />
          <GalleryColumn items={col2} isFirst={false} />
          <GalleryColumn items={col3} isFirst={false} />
          <GalleryColumn items={col4} isFirst={false} />
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  )
}

export default GalleryPage