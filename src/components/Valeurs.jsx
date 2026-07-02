import TechBackground from './TechBackground'
import SliderBackground from './SliderBackground'
import useWindowSize from '../hooks/useWindowSize'

const images = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80',
]

const valeurs = [
  {
    icon: 'fa-lightbulb',
    titre: 'Innovate',
    texte: 'Nous concevons des solutions originales et sur mesure qui répondent précisément aux défis de votre secteur. Chaque projet est une opportunité de repousser les limites.'
  },
  {
    icon: 'fa-bolt',
    titre: 'Automate',
    texte: 'Nous automatisons vos processus métier pour libérer votre équipe des tâches répétitives et vous permettre de vous concentrer sur ce qui compte vraiment.'
  },
  {
    icon: 'fa-rocket',
    titre: 'Elevate',
    texte: 'Nous élevons votre performance à un niveau supérieur grâce à des technologies intelligentes — IA, IoT, systèmes embarqués — adaptées à vos objectifs.'
  }
]

function Valeurs() {
  const { width } = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="valeurs" style={{
      padding: isMobile ? '70px 6%' : '100px 5%',
      background: '#0D1525', position: 'relative', overflow: 'hidden'
    }}>
      <SliderBackground images={images} overlay="rgba(13,21,37,0.82)" />
      <TechBackground opacity={0.15} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 60 }}>
          <div style={{
            fontSize: 12, letterSpacing: 2, textTransform: 'uppercase',
            color: '#00C2FF', fontWeight: 600, marginBottom: 12
          }}>
            Notre ADN
          </div>
          <h2 style={{
            fontSize: isMobile ? '1.8rem' : 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 800, lineHeight: 1.2, marginBottom: 16
          }}>
            Trois piliers,{' '}
            <span style={{ background: 'linear-gradient(135deg, #0066FF, #00C2FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              une vision
            </span>
          </h2>
          <p style={{
            fontSize: isMobile ? '0.9rem' : '1rem',
            color: '#8899bb', maxWidth: 520, margin: '0 auto', lineHeight: 1.75
          }}>
            Tout ce que nous créons repose sur trois engagements fondamentaux qui guident chaque projet, chaque décision.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? 16 : 24
        }}>
          {valeurs.map((v, i) => (
            <div key={i}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#0066FF'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1a2540'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              style={{
                padding: isMobile ? '24px 20px' : '36px 30px',
                borderRadius: 16,
                background: 'rgba(10,15,28,0.85)',
                border: '1px solid #1a2540',
                transition: 'border-color 0.3s, transform 0.3s'
              }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: 'rgba(0,102,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16
              }}>
                <i className={`fas ${v.icon}`} style={{ fontSize: 20, color: '#00C2FF' }} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 10, color: '#fff' }}>
                {v.titre}
              </h3>
              <p style={{ fontSize: 13, color: '#8899bb', lineHeight: 1.7 }}>
                {v.texte}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Valeurs