import TechBackground from './TechBackground'

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
  return (
    <section id="equipe" style={{
      padding: '100px 5%', background: '#0A0F1C',
      position: 'relative', overflow: 'hidden'
    }}>
      <TechBackground opacity={0.15} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: '#00C2FF', fontWeight: 600, marginBottom: 12 }}>
            Les visages de Rivex
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
            Notre{' '}
            <span style={{ background: 'linear-gradient(135deg, #0066FF, #00C2FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              équipe
            </span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#8899bb', maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
            Une équipe passionnée de jeunes experts déterminés à construire les solutions technologiques de demain.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24
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
                background: '#0D1525', border: '1px solid #1a2540',
                transition: 'all 0.3s', textAlign: 'center',
              }}>

              {/* Avatar */}
              <div style={{
                padding: '40px 20px 24px',
                background: 'linear-gradient(135deg, rgba(0,102,255,0.1), rgba(122,0,255,0.1))',
                borderBottom: '1px solid #1a2540'
              }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(0,102,255,0.2), rgba(122,0,255,0.2))',
                  border: '2px solid rgba(0,194,255,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <i className={`fas ${m.icon}`} style={{ fontSize: 32, color: '#00C2FF' }} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{m.nom}</h3>
                <div style={{ fontSize: 13, color: '#00C2FF', fontWeight: 500 }}>{m.role}</div>
              </div>

              {/* Socials */}
              <div style={{ padding: '20px', display: 'flex', gap: 10, justifyContent: 'center' }}>
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
                      width: 36, height: 36, borderRadius: 8,
                      background: '#0A0F1C', border: '1px solid #1a2540',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#8899bb', fontSize: 14, textDecoration: 'none',
                      transition: 'all 0.2s'
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
          marginTop: 48, textAlign: 'center', padding: '32px',
          background: 'rgba(0,102,255,0.05)', borderRadius: 16,
          border: '1px dashed rgba(0,102,255,0.3)'
        }}>
          <i className="fas fa-users" style={{ fontSize: 28, color: '#00C2FF', marginBottom: 12, display: 'block' }} />
          <h4 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8 }}>
            L'équipe grandit !
          </h4>
          <p style={{ fontSize: 14, color: '#8899bb', marginBottom: 16 }}>
            Nous recrutons des talents passionnés par la technologie et l'innovation.
          </p>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '10px 24px', borderRadius: 8, fontSize: 14, fontWeight: 600,
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