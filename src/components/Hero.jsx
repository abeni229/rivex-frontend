import TechBackground from './TechBackground'

function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', position: 'relative', overflow: 'hidden',
      padding: '120px 5% 80px', background: '#0A0F1C'
    }}>
      {/* Animation Tech */}
      <TechBackground opacity={0.8} />

      {/* Glows */}
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: '#0066FF', filter: 'blur(120px)', opacity: 0.12,
        top: -100, right: -100, pointerEvents: 'none', zIndex: 0
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: '#7A00FF', filter: 'blur(120px)', opacity: 0.1,
        bottom: -50, left: -80, pointerEvents: 'none', zIndex: 0
      }} />

      {/* Contenu */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, width: '100%', display: 'flex', alignItems: 'center', gap: 60 }}>

        {/* Texte */}
        <div style={{ maxWidth: 640 }}>
         

          {/* Titre */}
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.12, marginBottom: 20, letterSpacing: '-0.5px' }}>
            <span style={{ background: 'linear-gradient(135deg, #0066FF, #00C2FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              L'innovation
            </span>
            <br />
            <span style={{ color: '#fff' }}>au service de</span>
            <br />
            <span style={{ background: 'linear-gradient(135deg, #0066FF, #00C2FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              votre futur
            </span>
          </h1>

          {/* Sous-titre */}
          <p style={{ fontSize: '1.05rem', color: '#8899bb', lineHeight: 1.75, marginBottom: 40, maxWidth: 520 }}>
            Rivex conçoit, automatise et élève vos projets technologiques du développement web & mobile à l'agriculture intelligente, en passant par la cybersécurité et l'IA.
          </p>

          {/* Boutons */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#services" style={{
              padding: '14px 30px', borderRadius: 10, fontSize: 15, fontWeight: 600,
              background: 'linear-gradient(135deg, #0066FF, #00C2FF)',
              color: '#fff', textDecoration: 'none',
              boxShadow: '0 0 30px rgba(0,102,255,0.35)'
            }}>
              Découvrir nos services
            </a>
            <a href="#contact" style={{
              padding: '14px 30px', borderRadius: 10, fontSize: 15, fontWeight: 600,
              background: 'transparent', color: '#fff', textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              Demander un devis
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 40, marginTop: 60 }}>
            {[
              { num: '17+', label: 'Services proposés' },
              { num: '3', label: "Domaines d'expertise" },
              { num: '100%', label: 'Solutions sur mesure' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, background: 'linear-gradient(135deg, #0066FF, #00C2FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {s.num}
                </div>
                <div style={{ fontSize: 12, color: '#8899bb', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Orbe visuelle */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            width: 380, height: 380, borderRadius: '50%',
            background: 'radial-gradient(circle at 40% 40%, rgba(0,102,255,0.25), rgba(122,0,255,0.15), transparent 70%)',
            border: '1px solid rgba(0,194,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', animation: 'float 6s ease-in-out infinite'
          }}>
            <div style={{
              width: 260, height: 260, borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, rgba(0,102,255,0.4), rgba(122,0,255,0.3))',
              border: '1px solid rgba(0,194,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <i className="fas fa-microchip" style={{ fontSize: 72, color: '#00C2FF', opacity: 0.8 }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
      `}</style>
    </section>
  )
}

export default Hero