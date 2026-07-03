import TechBackground from './TechBackground'
import SliderBackground from './SliderBackground'
import useWindowSize from '../hooks/useWindowSize'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const images = [
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
]



function Apropos() {
  const { t } = useLanguage()
  const { width } = useWindowSize()
  const isMobile = width < 768


const piliers = [
  {
    icon: 'fa-bullseye',
    titre: t('ap_mission_titre'),
    texte: t('ap_mission_texte')
  },
  {
    icon: 'fa-eye',
    titre: t('ap_vision_titre'),
    texte: t('ap_vision_texte')
  },
  {
    icon: 'fa-handshake',
    titre: t('ap_engagement_titre'),
    texte: t('ap_engagement_texte')
  }
]

const chiffres = [
  { num: '17+', label: t('ap_stat1') },
  { num: '3', label: t('ap_stat2') },
  { num: '100%', label: t('ap_stat3') },
  { num: '4', label: t('ap_stat4') },
]

  return (
    <section id="apropos" style={{
      padding: isMobile ? '70px 6%' : '100px 5%',
      background: '#0D1525', position: 'relative', overflow: 'hidden'
    }}>
      <SliderBackground images={images} overlay="rgba(13,21,37,0.82)" />
      <TechBackground opacity={0.15} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 80 }}>
          <div style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: '#00C2FF', fontWeight: 600, marginBottom: 12 }}>
             {t('ap_label')}
          </div>
          <h2 style={{ fontSize: isMobile ? '1.8rem' : 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
            {t('ap_titre1')}{' '}
            <span style={{ background: 'linear-gradient(135deg, #0066FF, #00C2FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {t('ap_titre2')}
            </span>
          </h2>
          <p style={{ fontSize: isMobile ? '0.9rem' : '1rem', color: '#8899bb', maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>
            {t('ap_desc')}
          </p>
        </div>

        {/* Chiffres clés */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? 12 : 24, marginBottom: isMobile ? 40 : 80
        }}>
          {chiffres.map((c, i) => (
            <div key={i} style={{
              textAlign: 'center', padding: isMobile ? '20px 12px' : '32px 20px',
              background: 'rgba(10,15,28,0.85)', borderRadius: 16,
              border: '1px solid #1a2540'
            }}>
              <div style={{
                fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight: 800,
                background: 'linear-gradient(135deg, #0066FF, #00C2FF)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                marginBottom: 8
              }}>
                {c.num}
              </div>
              <div style={{ fontSize: 12, color: '#8899bb' }}>{c.label}</div>
            </div>
          ))}
        </div>

        {/* Piliers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? 12 : 24
        }}>
          {piliers.map((p, i) => (
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
                padding: isMobile ? '24px 20px' : '32px 28px',
                borderRadius: 16,
                background: 'rgba(10,15,28,0.85)',
                border: '1px solid #1a2540',
                transition: 'all 0.3s'
              }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: 'rgba(0,102,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16
              }}>
                <i className={`fas ${p.icon}`} style={{ fontSize: 20, color: '#00C2FF' }} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: 10 }}>
                {p.titre}
              </h3>
              <p style={{ fontSize: 13, color: '#8899bb', lineHeight: 1.75 }}>
                {p.texte}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Apropos