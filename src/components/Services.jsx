import { useState, useEffect } from 'react'
import TechBackground from './TechBackground'

const categories = [
  {
    id: 'tech',
    icon: 'fa-laptop-code',
    titre: 'Tech & Digital',
    bg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80',
    services: [
      { icon: 'fa-globe', titre: 'Création de sites web', desc: 'Sites vitrines, e-commerce et applications web modernes, rapides et optimisés pour tous les appareils.' },
      { icon: 'fa-mobile-alt', titre: 'Applications mobiles', desc: 'Apps iOS et Android natives ou cross-platform pour digitaliser votre activité et atteindre vos clients partout.' },
      { icon: 'fa-brain', titre: 'Intelligence Artificielle', desc: 'Conception d\'IA personnalisées pour particuliers et entreprises — automatisation, analyse, prise de décision.' },
      { icon: 'fa-comments', titre: 'Chatbots & Assistants', desc: 'Création de chatbots intelligents pour tous vos réseaux sociaux — WhatsApp, Facebook, Telegram.' },
      { icon: 'fa-cogs', titre: 'Automatisation Business', desc: 'Optimisation et automatisation de vos processus métier pour plus d\'efficacité et moins d\'erreurs humaines.' },
      { icon: 'fa-shield-alt', titre: 'Cybersécurité', desc: 'Audit, protection et sécurisation de vos systèmes informatiques contre les menaces et cyberattaques.' },
    ]
  },
  {
    id: 'elec',
    icon: 'fa-bolt',
    titre: 'Électronique & Systèmes',
    bg: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80',
    services: [
      { icon: 'fa-desktop', titre: 'Systèmes informatiques', desc: 'Installation, configuration et mise à jour de vos systèmes informatiques pour un fonctionnement optimal.' },
      { icon: 'fa-plug', titre: 'Systèmes électriques', desc: 'Installation et maintenance complète de vos installations électriques industrielles et tertiaires.' },
      { icon: 'fa-microchip', titre: 'Systèmes électroniques', desc: 'Installation et maintenance de systèmes électroniques complexes pour vos infrastructures.' },
      { icon: 'fa-video', titre: 'Vidéosurveillance', desc: 'Conception et installation de systèmes de vidéosurveillance intelligents pour sécuriser vos locaux.' },
      { icon: 'fa-server', titre: 'Systèmes embarqués', desc: 'Implantation de systèmes embarqués intelligents dans vos équipements industriels et machines agricoles.' },
    ]
  },
  {
    id: 'agri',
    icon: 'fa-seedling',
    titre: 'Agriculture Intelligente',
    bg: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=80',
    services: [
      { icon: 'fa-tint', titre: 'Irrigation intelligente', desc: 'Installation de systèmes d\'irrigation automatiques et intelligents pour optimiser la gestion de l\'eau.' },
      { icon: 'fa-leaf', titre: 'Fermes agricoles intelligentes', desc: 'Conception et déploiement de fermes connectées avec capteurs IoT et pilotage à distance.' },
      { icon: 'fa-horse', titre: 'Élevage moderne', desc: 'Mise en place de systèmes intelligents pour la gestion et l\'optimisation des fermes d\'élevage.' },
      { icon: 'fa-robot', titre: 'IA Agricole', desc: 'Intégration de l\'intelligence artificielle pour l\'analyse prédictive des rendements et la détection de maladies.' },
      { icon: 'fa-chart-line', titre: 'Optimisation de production', desc: 'Optimisation de la production animale et végétale grâce aux données, capteurs et systèmes embarqués.' },
    ]
  }
]

function Services() {
  const [ouvert, setOuvert] = useState(null)
  const [bgActif, setBgActif] = useState(null)

  useEffect(() => {
    const handler = (e) => {
      setOuvert(e.detail)
      setBgActif(e.detail)
      setTimeout(() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
    window.addEventListener('openServiceTab', handler)
    return () => window.removeEventListener('openServiceTab', handler)
  }, [])

  const toggle = (id) => {
    const next = ouvert === id ? null : id
    setOuvert(next)
    setBgActif(next)
  }

  const bgImage = categories.find(c => c.id === bgActif)?.bg

  return (
    <section id="services" style={{
      padding: '100px 5%',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.6s ease',
      minHeight: '600px'
    }}>
        <TechBackground opacity={0.2} />
      {/* Background image avec overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        backgroundSize: 'cover', backgroundPosition: 'center',
        transition: 'background-image 0.6s ease',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
            background: bgActif
        ? 'linear-gradient(135deg, rgba(10,15,28,0.55) 0%, rgba(10,15,28,0.40) 100%)'
        : '#0A0F1C'
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* En-tête */}
        <div style={{ marginBottom: 60 }}>
          <div style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: '#00C2FF', fontWeight: 600, marginBottom: 12 }}>
            Ce que nous faisons
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
            Nos{' '}
            <span style={{ background: 'linear-gradient(135deg, #0066FF, #00C2FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              services
            </span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#8899bb', maxWidth: 560, lineHeight: 1.75 }}>
            Des solutions complètes pour les entreprises qui veulent prendre de l'avance dans un monde en constante évolution technologique.
          </p>
        </div>

        {/* Accordéon */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {categories.map(cat => (
            <div key={cat.id} style={{
              borderRadius: 16, overflow: 'hidden',
              border: `1px solid ${ouvert === cat.id ? '#0066FF' : '#1a2540'}`,
              transition: 'border-color 0.3s',
              backdropFilter: 'blur(10px)'
            }}>

              {/* Header */}
              <div onClick={() => toggle(cat.id)} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '24px 28px', cursor: 'pointer',
                background: ouvert === cat.id ? 'rgba(0,102,255,0.12)' : 'rgba(13,21,37,0.9)',
                transition: 'background 0.3s'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: ouvert === cat.id ? 'rgba(0,102,255,0.25)' : 'rgba(0,102,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.3s'
                  }}>
                    <i className={`fas ${cat.icon}`} style={{ fontSize: 20, color: '#00C2FF' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{cat.titre}</h3>
                    <p style={{ fontSize: 13, color: '#8899bb', marginTop: 2 }}>{cat.services.length} services disponibles</p>
                  </div>
                </div>
                <i className={`fas fa-chevron-${ouvert === cat.id ? 'up' : 'down'}`}
                  style={{ color: '#00C2FF', fontSize: 16 }} />
              </div>

              {/* Contenu */}
              {ouvert === cat.id && (
                <div style={{
                  padding: '28px',
                  background: 'rgba(10,15,28,0.85)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: 20,
                  borderTop: '1px solid #1a2540',
                  backdropFilter: 'blur(10px)'
                }}>
                  {cat.services.map((s, i) => (
                    <div key={i}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'rgba(0,102,255,0.4)'
                        e.currentTarget.style.transform = 'translateY(-3px)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = '#1a2540'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                      style={{
                        padding: '22px 20px', borderRadius: 12,
                        background: 'rgba(13,21,37,0.9)',
                        border: '1px solid #1a2540',
                        transition: 'all 0.3s'
                      }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: 10,
                        background: 'rgba(0,102,255,0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginBottom: 14
                      }}>
                        <i className={`fas ${s.icon}`} style={{ fontSize: 18, color: '#00C2FF' }} />
                      </div>
                      <h4 style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{s.titre}</h4>
                      <p style={{ fontSize: 13, color: '#8899bb', lineHeight: 1.65 }}>{s.desc}</p>
                      <a href="#contact" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        marginTop: 14, fontSize: 13, color: '#00C2FF',
                        textDecoration: 'none', fontWeight: 500
                      }}>
                        Demander un devis <i className="fas fa-arrow-right" style={{ fontSize: 11 }} />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services