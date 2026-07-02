import TechBackground from './TechBackground'

function Portfolio() {
  return (
    <section id="portfolio" style={{
      padding: '100px 5%', background: '#0D1525',
      position: 'relative', overflow: 'hidden'
    }}>
      <TechBackground opacity={0.15} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: '#00C2FF', fontWeight: 600, marginBottom: 12 }}>
            Nos réalisations
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
            Ce que nous{' '}
            <span style={{ background: 'linear-gradient(135deg, #0066FF, #00C2FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              avons construit
            </span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#8899bb', maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
            Découvrez bientôt nos premiers projets réalisés pour nos clients.
          </p>
        </div>

        {/* Coming Soon */}
        <div style={{
          textAlign: 'center', padding: '80px 40px',
          border: '1px dashed rgba(0,102,255,0.3)', borderRadius: 20,
          background: 'rgba(0,102,255,0.04)'
        }}>
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            background: 'rgba(0,102,255,0.1)',
            border: '1px solid rgba(0,194,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 28px'
          }}>
            <i className="fas fa-rocket" style={{ fontSize: 32, color: '#00C2FF' }} />
          </div>

          <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: 12 }}>
            Nos premiers projets arrivent bientôt
          </h3>
          <p style={{ fontSize: 15, color: '#8899bb', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.75 }}>
            Rivex est une jeune entreprise ambitieuse. Nos premiers projets clients sont en cours de réalisation. Revenez très bientôt pour découvrir nos réalisations !
          </p>

          {/* Formulaire notification */}
          <div style={{ display: 'flex', gap: 12, maxWidth: 420, margin: '0 auto' }}>
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

          {/* Catégories à venir */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap' }}>
            {[
              { icon: 'fa-laptop-code', label: 'Tech & Digital' },
              { icon: 'fa-bolt', label: 'Électronique' },
              { icon: 'fa-seedling', label: 'Agriculture' },
            ].map((cat, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 18px', borderRadius: 20,
                background: '#0A0F1C', border: '1px solid #1a2540',
                fontSize: 13, color: '#8899bb'
              }}>
                <i className={`fas ${cat.icon}`} style={{ color: '#00C2FF', fontSize: 13 }} />
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