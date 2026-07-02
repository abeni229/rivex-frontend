import { useState, useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize'

const servicesDropdown = [
  { icon: 'fa-laptop-code', label: 'Tech & Digital', id: 'tech' },
  { icon: 'fa-bolt', label: 'Électronique & Systèmes', id: 'elec' },
  { icon: 'fa-seedling', label: 'Agriculture Intelligente', id: 'agri' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesHover, setServicesHover] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { width } = useWindowSize()
  const isMobile = width < 1024

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleServiceClick = (id) => {
    setServicesHover(false)
    setMenuOpen(false)
    setServicesOpen(false)
    const el = document.getElementById('services')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    window.dispatchEvent(new CustomEvent('openServiceTab', { detail: id }))
  }

  const links = [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#apropos' },
    { label: 'Réalisations', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
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
          <svg viewBox="0 0 160 44" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        {/* DESKTOP LINKS */}
        {!isMobile && (
          <ul style={{ display: 'flex', alignItems: 'center', gap: 32, listStyle: 'none' }}>
            <li>
              <a href="#hero" style={{ textDecoration: 'none', color: '#8899bb', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#00C2FF'}
                onMouseLeave={e => e.target.style.color = '#8899bb'}>
                Accueil
              </a>
            </li>

            {/* SERVICES DROPDOWN */}
            <li style={{ position: 'relative' }}
              onMouseEnter={() => setServicesHover(true)}
              onMouseLeave={() => setServicesHover(false)}>
              <a href="#services" style={{
                textDecoration: 'none', fontSize: 14, fontWeight: 500,
                color: servicesHover ? '#00C2FF' : '#8899bb',
                display: 'flex', alignItems: 'center', gap: 6
              }}>
                Services
                <i className={`fas fa-chevron-${servicesHover ? 'up' : 'down'}`} style={{ fontSize: 11 }} />
              </a>

              {servicesHover && (
                <div style={{
                  position: 'absolute', top: '100%', left: '50%',
                  transform: 'translateX(-50%)', marginTop: 16, width: 280,
                  background: '#0D1525', border: '1px solid #1a2540',
                  borderRadius: 14, boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  overflow: 'hidden', animation: 'fadeDown 0.2s ease'
                }}>
                  <div style={{ padding: '8px 0' }}>
                    {servicesDropdown.map((s, i) => (
                      <div key={i} onClick={() => handleServiceClick(s.id)}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,102,255,0.08)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 14,
                          padding: '14px 20px', cursor: 'pointer', transition: 'background 0.2s',
                          borderBottom: i < servicesDropdown.length - 1 ? '1px solid #1a2540' : 'none'
                        }}>
                        <div style={{
                          width: 38, height: 38, borderRadius: 10,
                          background: 'rgba(0,102,255,0.1)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                          <i className={`fas ${s.icon}`} style={{ fontSize: 16, color: '#00C2FF' }} />
                        </div>
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{s.label}</div>
                          <div style={{ fontSize: 12, color: '#8899bb', marginTop: 2 }}>
                            {s.id === 'tech' ? '6 services' : '5 services'}
                          </div>
                        </div>
                        <i className="fas fa-arrow-right" style={{ fontSize: 12, color: '#8899bb', marginLeft: 'auto' }} />
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '12px 20px', background: 'rgba(0,102,255,0.05)', borderTop: '1px solid #1a2540', textAlign: 'center' }}>
                    <a href="#services" onClick={() => setServicesHover(false)}
                      style={{ fontSize: 13, color: '#00C2FF', textDecoration: 'none', fontWeight: 500 }}>
                      Voir tous nos services <i className="fas fa-arrow-right" style={{ fontSize: 11, marginLeft: 4 }} />
                    </a>
                  </div>
                </div>
              )}
            </li>

            {links.filter(l => l.label !== 'Accueil').map(l => (
              <li key={l.label}>
                <a href={l.href} style={{ textDecoration: 'none', color: '#8899bb', fontSize: 14, fontWeight: 500 }}
                  onMouseEnter={e => e.target.style.color = '#00C2FF'}
                  onMouseLeave={e => e.target.style.color = '#8899bb'}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* DROITE */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {!isMobile && (
            <div style={{ display: 'flex', gap: 6 }}>
              {['FR', 'EN'].map((lang, i) => (
                <button key={lang} style={{
                  background: 'none',
                  border: `1px solid ${i === 0 ? '#00C2FF' : '#1a2540'}`,
                  color: i === 0 ? '#00C2FF' : '#8899bb',
                  fontSize: 12, padding: '4px 10px', borderRadius: 6,
                  cursor: 'pointer', fontFamily: 'Poppins, sans-serif'
                }}>
                  {lang}
                </button>
              ))}
            </div>
          )}

          {!isMobile && (
            <a href="#contact" style={{
              padding: '10px 22px', borderRadius: 8, fontSize: 14, fontWeight: 600,
              background: 'linear-gradient(135deg, #0066FF, #00C2FF)',
              color: '#fff', textDecoration: 'none'
            }}>
              Devis gratuit
            </a>
          )}

          {/* HAMBURGER */}
          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: 5, padding: 4
            }}>
              <span style={{ width: 24, height: 2, background: menuOpen ? '#00C2FF' : '#e2e8f0', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ width: 24, height: 2, background: '#e2e8f0', borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
              <span style={{ width: 24, height: 2, background: menuOpen ? '#00C2FF' : '#e2e8f0', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </button>
          )}
        </div>
      </nav>

      {/* MENU MOBILE */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: 72, left: 0, right: 0, bottom: 0,
          background: 'rgba(10,15,28,0.98)', zIndex: 999,
          padding: '32px 5%', overflowY: 'auto',
          display: 'flex', flexDirection: 'column', gap: 8
        }}>
          {/* Liens principaux */}
          {links.map(l => (
            <a key={l.label} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '16px 0', fontSize: 18, fontWeight: 600,
                color: '#fff', textDecoration: 'none',
                borderBottom: '1px solid #1a2540', display: 'block'
              }}>
              {l.label}
            </a>
          ))}

          {/* Services accordéon mobile */}
          <div>
            <div onClick={() => setServicesOpen(!servicesOpen)}
              style={{
                padding: '16px 0', fontSize: 18, fontWeight: 600,
                color: '#fff', borderBottom: '1px solid #1a2540',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                cursor: 'pointer'
              }}>
              Services
              <i className={`fas fa-chevron-${servicesOpen ? 'up' : 'down'}`} style={{ color: '#00C2FF', fontSize: 14 }} />
            </div>
            {servicesOpen && (
              <div style={{ paddingLeft: 16, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {servicesDropdown.map((s, i) => (
                  <div key={i} onClick={() => handleServiceClick(s.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '12px 0', cursor: 'pointer',
                      borderBottom: i < servicesDropdown.length - 1 ? '1px solid #1a2540' : 'none'
                    }}>
                    <i className={`fas ${s.icon}`} style={{ color: '#00C2FF', fontSize: 16, width: 20 }} />
                    <span style={{ fontSize: 15, color: '#e2e8f0' }}>{s.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Switch langue + CTA */}
          <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
            {['FR', 'EN'].map((lang, i) => (
              <button key={lang} style={{
                background: 'none',
                border: `1px solid ${i === 0 ? '#00C2FF' : '#1a2540'}`,
                color: i === 0 ? '#00C2FF' : '#8899bb',
                fontSize: 13, padding: '8px 16px', borderRadius: 6,
                cursor: 'pointer', fontFamily: 'Poppins, sans-serif'
              }}>
                {lang}
              </button>
            ))}
          </div>
          <a href="#contact" onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 12, padding: '14px', borderRadius: 10, fontSize: 15, fontWeight: 600,
              background: 'linear-gradient(135deg, #0066FF, #00C2FF)',
              color: '#fff', textDecoration: 'none', textAlign: 'center', display: 'block'
            }}>
            Devis gratuit
          </a>
        </div>
      )}

      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </>
  )
}

export default Navbar