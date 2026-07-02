import TechBackground from './TechBackground'
import useWindowSize from '../hooks/useWindowSize'

function Hero() {
  const { width } = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', position: 'relative', overflow: 'hidden',
      padding: isMobile ? '100px 6% 60px' : '120px 5% 80px',
      background: '#0A0F1C'
    }}>
      <TechBackground opacity={0.8} />

      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: '#0066FF', filter: 'blur(120px)', opacity: 0.1,
        top: -100, right: -100, pointerEvents: 'none', zIndex: 0
      }} />
      <div style={{
        position: 'absolute', width: 300, height: 300, borderRadius: '50%',
        background: '#7A00FF', filter: 'blur(120px)', opacity: 0.08,
        bottom: -50, left: -80, pointerEvents: 'none', zIndex: 0
      }} />

      <div style={{
        position: 'relative', zIndex: 1, maxWidth: 1200, width: '100%',
        display: 'flex', alignItems: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 40 : 60,
        textAlign: isMobile ? 'center' : 'left'
      }}>

        {/* Texte */}
        <div style={{ maxWidth: isMobile ? '100%' : 640, width: '100%' }}>

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: 20,
            border: '1px solid rgba(0,194,255,0.3)',
            background: 'rgba(0,102,255,0.08)',
            fontSize: 11, color: '#00C2FF', fontWeight: 500,
            marginBottom: 24, letterSpacing: '0.5px'
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%', background: '#00C2FF',
              animation: 'pulse 2s infinite', flexShrink: 0
            }} />
            Solutions technologiques intelligentes
          </div>

          {/* Titre */}
          <h1 style={{
            fontSize: isMobile ? '2.2rem' : 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 800, lineHeight: 1.12, marginBottom: 20, letterSpacing: '-0.5px'
          }}>
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
          <p style={{
            fontSize: isMobile ? '0.95rem' : '1.05rem',
            color: '#8899bb', lineHeight: 1.75, marginBottom: 36,
            maxWidth: isMobile ? '100%' : 520
          }}>
            Rivex conçoit, automatise et élève vos projets technologiques — du développement web & mobile à l'agriculture intelligente, en passant par la cybersécurité et l'IA.
          </p>

          {/* Boutons */}
          <div style={{
            display: 'flex', gap: 12, flexWrap: 'wrap',
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}>
            <a href="#services" style={{
              padding: isMobile ? '12px 22px' : '14px 30px',
              borderRadius: 10, fontSize: isMobile ? 14 : 15, fontWeight: 600,
              background: 'linear-gradient(135deg, #0066FF, #00C2FF)',
              color: '#fff', textDecoration: 'none',
              boxShadow: '0 0 30px rgba(0,102,255,0.35)'
            }}>
              Découvrir nos services
            </a>
            <a href="#contact" style={{
              padding: isMobile ? '12px 22px' : '14px 30px',
              borderRadius: 10, fontSize: isMobile ? 14 : 15, fontWeight: 600,
              background: 'transparent', color: '#fff', textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              Demander un devis
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: isMobile ? 24 : 40, marginTop: 48,
            justifyContent: isMobile ? 'center' : 'flex-start',
            flexWrap: 'wrap'
          }}>
            {[
              { num: '17+', label: 'Services proposés' },
              { num: '3', label: "Domaines d'expertise" },
              { num: '100%', label: 'Solutions sur mesure' },
            ].map(s => (
              <div key={s.label}>
                <div style={{
                  fontSize: isMobile ? '1.5rem' : '1.8rem', fontWeight: 800,
                  background: 'linear-gradient(135deg, #0066FF, #00C2FF)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                }}>
                  {s.num}
                </div>
                <div style={{ fontSize: 11, color: '#8899bb', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Globe — caché sur mobile */}
        {!isMobile && (
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 400, height: 400, animation: 'float 6s ease-in-out infinite' }}>
              <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }}>
                <defs>
                  <radialGradient id="globeGrad" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#1a4aff" stopOpacity="0.9"/>
                    <stop offset="50%" stopColor="#0033cc" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#000a2e" stopOpacity="1"/>
                  </radialGradient>
                  <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0066FF" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#0066FF" stopOpacity="0"/>
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <clipPath id="globeClip">
                    <circle cx="200" cy="200" r="155"/>
                  </clipPath>
                </defs>
                <circle cx="200" cy="200" r="195" fill="url(#glowGrad)"/>
                <ellipse cx="200" cy="200" rx="185" ry="185" fill="none" stroke="rgba(0,194,255,0.15)" strokeWidth="1" strokeDasharray="4 6"/>
                <circle cx="200" cy="200" r="155" fill="url(#globeGrad)"/>
                {[-100,-65,-30,0,30,65,100].map((offset, i) => {
                  const y = 200 + offset
                  const r = Math.sqrt(Math.max(0, 155*155 - offset*offset))
                  const ry = r * 0.28
                  return r > 0 ? (
                    <ellipse key={i} cx="200" cy={y} rx={r} ry={ry}
                      fill="none" stroke="rgba(0,194,255,0.2)" strokeWidth="0.8"
                      clipPath="url(#globeClip)"/>
                  ) : null
                })}
                <g clipPath="url(#globeClip)">
                  <animateTransform attributeName="transform" type="rotate" values="0 200 200;360 200 200" dur="18s" repeatCount="indefinite"/>
                  {[0,30,60,90,120,150].map((angle, i) => (
                    <ellipse key={i} cx="200" cy="200" rx="155" ry={155 * Math.abs(Math.cos(angle * Math.PI / 180))}
                      fill="none" stroke="rgba(0,194,255,0.18)" strokeWidth="0.8"
                      transform={`rotate(${angle} 200 200)`}/>
                  ))}
                </g>
                {[
                  {cx:155,cy:160},{cx:240,cy:140},{cx:200,cy:220},
                  {cx:270,cy:200},{cx:130,cy:230},{cx:220,cy:170},
                  {cx:180,cy:260},{cx:250,cy:250},{cx:160,cy:190},
                ].map((p, i) => (
                  <g key={i} filter="url(#glow)">
                    <circle cx={p.cx} cy={p.cy} r="3" fill="#00C2FF" opacity="0.9" clipPath="url(#globeClip)">
                      <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2+i*0.4}s`} repeatCount="indefinite"/>
                      <animate attributeName="r" values="2;4;2" dur={`${2+i*0.4}s`} repeatCount="indefinite"/>
                    </circle>
                  </g>
                ))}
                {[
                  {x1:155,y1:160,x2:240,y2:140},{x1:240,y1:140,x2:200,y2:220},
                  {x1:200,y1:220,x2:270,y2:200},{x1:130,y1:230,x2:200,y2:220},
                  {x1:220,y1:170,x2:240,y2:140},{x1:180,y1:260,x2:250,y2:250},
                ].map((l, i) => (
                  <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                    stroke="rgba(0,194,255,0.35)" strokeWidth="0.8" clipPath="url(#globeClip)">
                    <animate attributeName="opacity" values="0.1;0.5;0.1" dur={`${3+i*0.5}s`} repeatCount="indefinite"/>
                  </line>
                ))}
                <ellipse cx="165" cy="155" rx="45" ry="28" fill="rgba(255,255,255,0.06)" clipPath="url(#globeClip)"/>
                <g>
                  <animateTransform attributeName="transform" type="rotate" values="0 200 200;360 200 200" dur="8s" repeatCount="indefinite"/>
                  <ellipse cx="200" cy="200" rx="185" ry="55" fill="none" stroke="rgba(0,102,255,0.25)" strokeWidth="1" transform="rotate(-20 200 200)"/>
                  <circle cx="385" cy="200" r="5" fill="#00C2FF" filter="url(#glow)" transform="rotate(-20 200 200)">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </g>
                <g>
                  <animateTransform attributeName="transform" type="rotate" values="360 200 200;0 200 200" dur="12s" repeatCount="indefinite"/>
                  <ellipse cx="200" cy="200" rx="175" ry="40" fill="none" stroke="rgba(122,0,255,0.2)" strokeWidth="1" transform="rotate(40 200 200)"/>
                  <circle cx="375" cy="200" r="4" fill="#7A00FF" filter="url(#glow)" transform="rotate(40 200 200)">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
                  </circle>
                </g>
                <circle cx="200" cy="200" r="155" fill="none" stroke="rgba(0,194,255,0.3)" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>
        )}
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