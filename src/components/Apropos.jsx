import TechBackground from './TechBackground'

const piliers = [
  {
    icon: 'fa-bullseye',
    titre: 'Notre mission',
    texte: 'Rendre la technologie accessible et impactante pour toutes les entreprises, quelle que soit leur taille ou leur secteur d\'activité.'
  },
  {
    icon: 'fa-eye',
    titre: 'Notre vision',
    texte: 'Devenir le partenaire technologique de référence en Afrique de l\'Ouest, en propulsant la transformation digitale du continent.'
  },
  {
    icon: 'fa-handshake',
    titre: 'Notre engagement',
    texte: 'Accompagner chaque client de l\'idée à la livraison avec transparence, qualité et un suivi personnalisé sur le long terme.'
  }
]

const chiffres = [
  { num: '17+', label: 'Services proposés' },
  { num: '3', label: "Domaines d'expertise" },
  { num: '100%', label: 'Sur mesure' },
  { num: '4', label: 'Experts passionnés' },
]

function Apropos() {
  return (
    <section id="apropos" style={{
      padding: '100px 5%', background: '#0D1525',
      position: 'relative', overflow: 'hidden'
    }}>
      <TechBackground opacity={0.15} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: '#00C2FF', fontWeight: 600, marginBottom: 12 }}>
            Qui sommes-nous
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
            Rivex, l'innovation{' '}
            <span style={{ background: 'linear-gradient(135deg, #0066FF, #00C2FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              made in Bénin
            </span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#8899bb', maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>
            Rivex est une entreprise technologique béninoise à la pointe de l'innovation. Nous combinons expertise technique et vision stratégique pour offrir des solutions intelligentes qui transforment les entreprises et les secteurs clés.
          </p>
        </div>

        {/* Chiffres clés */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24, marginBottom: 80
        }}>
          {chiffres.map((c, i) => (
            <div key={i} style={{
              textAlign: 'center', padding: '32px 20px',
              background: '#0A0F1C', borderRadius: 16,
              border: '1px solid #1a2540'
            }}>
              <div style={{
                fontSize: '2.2rem', fontWeight: 800,
                background: 'linear-gradient(135deg, #0066FF, #00C2FF)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                marginBottom: 8
              }}>
                {c.num}
              </div>
              <div style={{ fontSize: 13, color: '#8899bb' }}>{c.label}</div>
            </div>
          ))}
        </div>

        {/* Piliers */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24
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
                padding: '32px 28px', borderRadius: 16,
                background: '#0A0F1C', border: '1px solid #1a2540',
                transition: 'all 0.3s'
              }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: 'rgba(0,102,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20
              }}>
                <i className={`fas ${p.icon}`} style={{ fontSize: 22, color: '#00C2FF' }} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: 12 }}>
                {p.titre}
              </h3>
              <p style={{ fontSize: 14, color: '#8899bb', lineHeight: 1.75 }}>
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