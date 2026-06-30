import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'À propos', href: '#apropos' },
    { label: 'Réalisations', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 5%', height: '72px',
      background: scrolled ? 'rgba(10,15,28,0.97)' : 'rgba(10,15,28,0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0,102,255,0.15)',
      transition: 'background 0.3s'
    }}>

      {/* LOGO */}
      <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <svg viewBox="0 0 160 44" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00C2FF"/>
              <stop offset="60%" stopColor="#0066FF"/>
              <stop offset="100%" stopColor="#7A00FF"/>
            </linearGradient>
          </defs>
          <rect x="2"  y="4"  width="6" height="6" fill="url(#lg1)" opacity="0.5"/>
          <rect x="2"  y="12" width="6" height="6" fill="url(#lg1)" opacity="0.7"/>
          <rect x="2"  y="20" width="6" height="6" fill="url(#lg1)"/>
          <rect x="2"  y="28" width="6" height="6" fill="url(#lg1)" opacity="0.8"/>
          <rect x="10" y="4"  width="6" height="6" fill="url(#lg1)"/>
          <rect x="18" y="4"  width="6" height="6" fill="url(#lg1)" opacity="0.8"/>
          <rect x="10" y="12" width="6" height="6" fill="url(#lg1)"/>
          <rect x="18" y="12" width="6" height="6" fill="url(#lg1)" opacity="0.6"/>
          <rect x="10" y="20" width="6" height="6" fill="url(#lg1)"/>
          <rect x="10" y="28" width="6" height="6" fill="url(#lg1)" opacity="0.6"/>
          <text x="32" y="30" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="22" fill="#ffffff" letterSpacing="2">RIVEX</text>
        </svg>
      </a>

      {/* LIENS DESKTOP */}
      <ul style={{ display: 'flex', alignItems: 'center', gap: 32, listStyle: 'none' }}
          className="nav-links-desktop">
        {links.map(l => (
          <li key={l.label}>
            <a href={l.href} style={{
              textDecoration: 'none', color: '#8899bb',
              fontSize: 14, fontWeight: 500, transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.target.style.color = '#00C2FF'}
            onMouseLeave={e => e.target.style.color = '#8899bb'}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* DROITE */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        {/* Switch langue */}
        <div style={{ display: 'flex', gap: 6 }}>
          {['FR', 'EN'].map((lang, i) => (
            <button key={lang} style={{
              background: 'none',
              border: `1px solid ${i === 0 ? '#00C2FF' : '#1a2540'}`,
              color: i === 0 ? '#00C2FF' : '#8899bb',
              fontSize: 12, padding: '4px 10px', borderRadius: 6,
              cursor: 'pointer', fontFamily: 'Poppins, sans-serif',
              transition: 'all 0.2s'
            }}>
              {lang}
            </button>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" style={{
          padding: '10px 22px', borderRadius: 8, fontSize: 14, fontWeight: 600,
          background: 'linear-gradient(135deg, #0066FF, #00C2FF)',
          color: '#fff', textDecoration: 'none', transition: 'opacity 0.2s'
        }}
        onMouseEnter={e => e.target.style.opacity = '0.85'}
        onMouseLeave={e => e.target.style.opacity = '1'}>
          Devis gratuit
        </a>

        {/* Hamburger mobile */}
        <div onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', flexDirection: 'column', gap: 5, cursor: 'pointer' }}
          className="hamburger">
          <span style={{ width: 24, height: 2, background: '#e2e8f0', borderRadius: 2 }}/>
          <span style={{ width: 24, height: 2, background: '#e2e8f0', borderRadius: 2 }}/>
          <span style={{ width: 24, height: 2, background: '#e2e8f0', borderRadius: 2 }}/>
        </div>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: 72, left: 0, right: 0,
          background: 'rgba(10,15,28,0.98)',
          borderBottom: '1px solid #1a2540',
          padding: '20px 5%', display: 'flex', flexDirection: 'column', gap: 20
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar