import TechBackground from './TechBackground'
import SliderBackground from './SliderBackground'
import useWindowSize from '../hooks/useWindowSize'

const images = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&q=80',
  'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1600&q=80',
]

function Portfolio() {
  const { width } = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="portfolio" style={{
      padding: isMobile ? '70px 6%' : '100px 5%',
      background: '#0D1525', position: 'relative', overflow: 'hidden'
    }}>
      <SliderBackground images={images} overlay="rgba(13,21,37,0.82)" />
      <TechBackground opacity={0.15} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 60 }}>
          <div style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: '#00C2FF', fontWeight: 600, marginBottom: 12 }}>
            Nos réalisations
          </div>
          <h2 style={{ fontSize: isMobile ? '1.8rem' : 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
            Ce que nous{' '}
            <span style={{ background: 'linear-gradient(135deg, #0066FF, #00C2FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              avons construit
            </span>
          </h2>
          <p style={{ fontSize: isMobile ? '0.9rem' : '1rem', color: '#8899bb', maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
            Découvrez bientôt nos premiers projets réalisés pour nos clients.
          </p>
        </div>

        {/* Coming Soon */}
        <div style={{
          textAlign: 'center',
          padding: isMobile ? '48px 24px' : '80px 40px',
          border: '1px dashed rgba(0,102,255,0.3)', borderRadius: 20,
          background: 'rgba(0,102,255,0.04)'
        }}>
          <div style={{
            width: isMobile ? 64 : 80, height: isMobile ? 64 : 80,
            borderRadius: '50%',
            background: 'rgba(0,102,255,0.1)',
            border: '1px solid rgba(0,194,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px'
          }}>
            <i className="fas fa-rocket" style={{ fontSize: isMobile ? 26 : 32, color: '#00C2FF' }} />
          </div>

          <h3 style={{ fontSize: isMobile ? '1.3rem' : '1.6rem', fontWeight: 700, color: '#fff', marginBottom: 12 }}>
            Nos premiers projets arrivent bientôt
          </h3>
          <p style={{ fontSize: isMobile ? 13 : 15, color: '#8899bb', maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.75 }}>
            Rivex est une jeune entreprise ambitieuse. Nos premiers projets clients sont en cours de réalisation. Revenez très bientôt !
          </p>

          {/* Formulaire notification */}
          <div style={{
            display: 'flex', flexDirection: isMobile ? 'column' : 'row',
            gap: 12, maxWidth: 420, margin: '0 auto'
          }}>
            <input
              type="email"
              placeholder="Votre email pour être notifié"
              style={{
                flex: 1, padding: '12px 16px', borderRadius: 8,
                background: '#0A0F1C', border: '1px solid #1a2540',
                color: '#e2e8f0', fontFamily: 'Poppins, sans-serif',
                fontSize: 14, outline: 'none'
              }}
              onFocus={e => e.target.style.borderColor = '#0066FF'}
              onBlur={e => e.target.style.borderColor = '#1a2540'}
            />
            <button style={{
              padding: '12px 24px', borderRadius: 8, fontSize: 14, fontWeight: 600,
              background: 'linear-gradient(135deg, #0066FF, #00C2FF)',
              color: '#fff', border: 'none', cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif', whiteSpace: 'nowrap'
            }}>
              M'alerter
            </button>
          </div>

          {/* Catégories */}
          <div style={{
            display: 'flex', gap: 10, justifyContent: 'center',
            marginTop: 36, flexWrap: 'wrap'
          }}>
            {[
              { icon: 'fa-laptop-code', label: 'Tech & Digital' },
              { icon: 'fa-bolt', label: 'Électronique' },
              { icon: 'fa-seedling', label: 'Agriculture' },
            ].map((cat, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 16px', borderRadius: 20,
                background: 'rgba(10,15,28,0.85)', border: '1px solid #1a2540',
                fontSize: isMobile ? 12 : 13, color: '#8899bb'
              }}>
                <i className={`fas ${cat.icon}`} style={{ color: '#00C2FF', fontSize: 12 }} />
                {cat.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio