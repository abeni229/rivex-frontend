import TechBackground from './TechBackground'
import SliderBackground from './SliderBackground'
import useWindowSize from '../hooks/useWindowSize'

const images = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80',
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&q=80',
]

const membres = [
  {
    nom: 'Membre 1',
    role: 'CEO & Fondateur',
    icon: 'fa-user-tie',
    socials: [
      { icon: 'fa-linkedin-in', href: '#' },
      { icon: 'fa-facebook-f', href: '#' },
      { icon: 'fa-whatsapp', href: '#' },
    ]
  },
  {
    nom: 'Membre 2',
    role: 'Lead Developer',
    icon: 'fa-code',
    socials: [
      { icon: 'fa-linkedin-in', href: '#' },
      { icon: 'fa-github', href: '#' },
      { icon: 'fa-whatsapp', href: '#' },
    ]
  },
  {
    nom: 'Membre 3',
    role: 'Ingénieur Électronique',
    icon: 'fa-microchip',
    socials: [
      { icon: 'fa-linkedin-in', href: '#' },
      { icon: 'fa-facebook-f', href: '#' },
      { icon: 'fa-whatsapp', href: '#' },
    ]
  },
  {
    nom: 'Membre 4',
    role: 'Expert Agri-Tech',
    icon: 'fa-seedling',
    socials: [
      { icon: 'fa-linkedin-in', href: '#' },
      { icon: 'fa-tiktok', href: '#' },
      { icon: 'fa-whatsapp', href: '#' },
    ]
  },
]

function Equipe() {
  const { width } = useWindowSize()
  const isMobile = width < 768
  const isTablet = width >= 768 && width < 1024

  return (
    <section id="equipe" style={{
      padding: isMobile ? '70px 6%' : '100px 5%',
      background: '#0A0F1C', position: 'relative', overflow: 'hidden'
    }}>
      <SliderBackground images={images} overlay="rgba(10,15,28,0.82)" />
      <TechBackground opacity={0.15} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 60 }}>
          <div style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: '#00C2FF', fontWeight: 600, marginBottom: 12 }}>
            Les visages de Rivex
          </div>
          <h2 style={{ fontSize: isMobile ? '1.8rem' : 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
            Notre{' '}
            <span style={{ background: 'linear-gradient(135deg, #0066FF, #00C2FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              équipe
            </span>
          </h2>
          <p style={{ fontSize: isMobile ? '0.9rem' : '1rem', color: '#8899bb', maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
            Une équipe passionnée de jeunes experts déterminés à construire les solutions technologiques de demain.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? 12 : 24
        }}>
          {membres.map((m, i) => (
            <div key={i}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,102,255,0.5)'
                e.currentTarget.style.transform = 'translateY(-6px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1a2540'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              style={{
                borderRadius: 16, overflow: 'hidden',
                background: 'rgba(13,21,37,0.9)',
                border: '1px solid #1a2540',
                transition: 'all 0.3s', textAlign: 'center',
              }}>

              {/* Avatar */}
              <div style={{
                padding: isMobile ? '24px 16px 16px' : '40px 20px 24px',
                background: 'linear-gradient(135deg, rgba(0,102,255,0.1), rgba(122,0,255,0.1))',
                borderBottom: '1px solid #1a2540'
              }}>
                <div style={{
                  width: isMobile ? 60 : 80, height: isMobile ? 60 : 80,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(0,102,255,0.2), rgba(122,0,255,0.2))',
                  border: '2px solid rgba(0,194,255,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 12px'
                }}>
                  <i className={`fas ${m.icon}`} style={{ fontSize: isMobile ? 24 : 32, color: '#00C2FF' }} />
                </div>
                <h3 style={{ fontSize: isMobile ? 14 : 16, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{m.nom}</h3>
                <div style={{ fontSize: isMobile ? 11 : 13, color: '#00C2FF', fontWeight: 500 }}>{m.role}</div>
              </div>

              {/* Socials */}
              <div style={{ padding: isMobile ? '12px' : '20px', display: 'flex', gap: 8, justifyContent: 'center' }}>
                {m.socials.map((s, j) => (
                  <a key={j} href={s.href}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = '#0066FF'
                      e.currentTarget.style.color = '#00C2FF'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#1a2540'
                      e.currentTarget.style.color = '#8899bb'
                    }}
                    style={{
                      width: isMobile ? 30 : 36, height: isMobile ? 30 : 36,
                      borderRadius: 8, background: '#0A0F1C',
                      border: '1px solid #1a2540',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#8899bb', fontSize: isMobile ? 12 : 14,
                      textDecoration: 'none', transition: 'all 0.2s'
                    }}>
                    <i className={`fab ${s.icon}`} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Message recrutement */}
        <div style={{
          marginTop: isMobile ? 32 : 48, textAlign: 'center',
          padding: isMobile ? '24px 20px' : '32px',
          background: 'rgba(0,102,255,0.05)', borderRadius: 16,
          border: '1px dashed rgba(0,102,255,0.3)'
        }}>
          <i className="fas fa-users" style={{ fontSize: isMobile ? 24 : 28, color: '#00C2FF', marginBottom: 12, display: 'block' }} />
          <h4 style={{ fontSize: isMobile ? 15 : 16, fontWeight: 600, color: '#fff', marginBottom: 8 }}>
            L'équipe grandit !
          </h4>
          <p style={{ fontSize: isMobile ? 13 : 14, color: '#8899bb', marginBottom: 16 }}>
            Nous recrutons des talents passionnés par la technologie et l'innovation.
          </p>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: isMobile ? '10px 20px' : '10px 24px',
            borderRadius: 8, fontSize: 14, fontWeight: 600,
            background: 'linear-gradient(135deg, #0066FF, #00C2FF)',
            color: '#fff', textDecoration: 'none'
          }}>
            Nous rejoindre <i className="fas fa-arrow-right" style={{ fontSize: 12 }} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Equipe