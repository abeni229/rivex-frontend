import useWindowSize from '../hooks/useWindowSize'

function Footer() {
  const annee = new Date().getFullYear()
  const { width } = useWindowSize()
  const isMobile = width < 768
  const isTablet = width >= 768 && width < 1024

  return (
    <footer style={{
      background: '#060B14',
      borderTop: '1px solid #1a2540',
      padding: isMobile ? '48px 6% 24px' : '64px 5% 32px'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Top */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '2fr 1fr 1fr 1fr',
          gap: isMobile ? 36 : 48,
          marginBottom: isMobile ? 36 : 48
        }}>

          {/* Brand */}
          <div>
            <a href="#hero" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 16 }}>
              <svg viewBox="0 0 160 44" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="lg-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00C2FF"/>
                    <stop offset="60%" stopColor="#0066FF"/>
                    <stop offset="100%" stopColor="#7A00FF"/>
                  </linearGradient>
                </defs>
                <rect x="2"  y="4"  width="6" height="6" fill="url(#lg-footer)" opacity="0.5"/>
                <rect x="2"  y="12" width="6" height="6" fill="url(#lg-footer)" opacity="0.7"/>
                <rect x="2"  y="20" width="6" height="6" fill="url(#lg-footer)"/>
                <rect x="2"  y="28" width="6" height="6" fill="url(#lg-footer)" opacity="0.8"/>
                <rect x="10" y="4"  width="6" height="6" fill="url(#lg-footer)"/>
                <rect x="18" y="4"  width="6" height="6" fill="url(#lg-footer)" opacity="0.8"/>
                <rect x="10" y="12" width="6" height="6" fill="url(#lg-footer)"/>
                <rect x="18" y="12" width="6" height="6" fill="url(#lg-footer)" opacity="0.6"/>
                <rect x="10" y="20" width="6" height="6" fill="url(#lg-footer)"/>
                <rect x="10" y="28" width="6" height="6" fill="url(#lg-footer)" opacity="0.6"/>
                <text x="32" y="30" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="22" fill="#ffffff" letterSpacing="2">RIVEX</text>
              </svg>
            </a>
            <p style={{ fontSize: 13, color: '#8899bb', lineHeight: 1.75, maxWidth: 280, marginBottom: 20 }}>
              Solutions technologiques intelligentes pour un monde en constante évolution. Innovate • Automate • Elevate.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {[
                { icon: 'fa-facebook-f', href: 'https://www.facebook.com/profile.php?id=61591720462723' },
                { icon: 'fa-linkedin-in', href: '#' },
                { icon: 'fa-tiktok', href: '#' },
                { icon: 'fa-whatsapp', href: 'https://wa.me/22901563947411' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#0066FF'
                    e.currentTarget.style.color = '#00C2FF'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#1a2540'
                    e.currentTarget.style.color = '#8899bb'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                  style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: '#0D1525', border: '1px solid #1a2540',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#8899bb', fontSize: 15, textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}>
                  <i className={`fab ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 18, letterSpacing: '0.5px' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Tech & Digital', href: '#services' },
                { label: 'Électronique', href: '#services' },
                { label: 'Agriculture IA', href: '#services' },
                { label: 'Cybersécurité', href: '#services' },
                { label: 'Chatbots', href: '#services' },
              ].map((s, i) => (
                <li key={i}>
                  <a href={s.href}
                    onMouseEnter={e => e.target.style.color = '#00C2FF'}
                    onMouseLeave={e => e.target.style.color = '#8899bb'}
                    style={{ fontSize: 14, color: '#8899bb', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 18, letterSpacing: '0.5px' }}>
              Entreprise
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'À propos', href: '#apropos' },
                { label: 'Notre équipe', href: '#equipe' },
                { label: 'Réalisations', href: '#portfolio' },
                { label: 'Contact', href: '#contact' },
              ].map((l, i) => (
                <li key={i}>
                  <a href={l.href}
                    onMouseEnter={e => e.target.style.color = '#00C2FF'}
                    onMouseLeave={e => e.target.style.color = '#8899bb'}
                    style={{ fontSize: 14, color: '#8899bb', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Légal */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 18, letterSpacing: '0.5px' }}>
              Contact
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
              {[
                { icon: 'fa-phone', label: '+229 01 56 39 47 41' },
                { icon: 'fa-envelope', label: 'rivex15@outlook.com' },
                { icon: 'fa-globe', label: 'rivex.tech' },
              ].map((c, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <i className={`fas ${c.icon}`} style={{ fontSize: 12, color: '#00C2FF', width: 14, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: '#8899bb' }}>{c.label}</span>
                </li>
              ))}
            </ul>

            <h4 style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 14, letterSpacing: '0.5px' }}>
              Légal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Mentions légales', href: '#' },
                { label: 'Confidentialité', href: '#' },
                { label: 'CGU', href: '#' },
              ].map((l, i) => (
                <li key={i}>
                  <a href={l.href}
                    onMouseEnter={e => e.target.style.color = '#00C2FF'}
                    onMouseLeave={e => e.target.style.color = '#8899bb'}
                    style={{ fontSize: 13, color: '#8899bb', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#1a2540', marginBottom: 24 }} />

        {/* Bottom */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between', alignItems: 'center',
          gap: 12, textAlign: isMobile ? 'center' : 'left'
        }}>
          <p style={{ fontSize: 13, color: '#8899bb' }}>
            © {annee} Rivex. Tous droits réservés. Conçu au Bénin 🇧🇯
          </p>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ fontSize: 12, color: '#4a5a7a' }}>Propulsé par</span>
            <span style={{ fontSize: 13, fontWeight: 700, background: 'linear-gradient(135deg, #0066FF, #00C2FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Rivex
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer