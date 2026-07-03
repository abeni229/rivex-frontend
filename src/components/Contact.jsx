import TechBackground from './TechBackground'
import useWindowSize from '../hooks/useWindowSize'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function Contact() {
  const { width } = useWindowSize()
  const isMobile = width < 768
  const { t } = useLanguage()
  const infos = [
  { icon: 'fa-phone', titre: t('ct_tel'), valeur: '+229 01 56 39 47 41' },
  { icon: 'fa-envelope', titre: t('ct_email'), valeur: 'rivex15@outlook.com' },
  { icon: 'fa-map-marker-alt', titre: t('ct_adresse'), valeur: t('ct_adresse_val') },
]

  return (
    <section id="contact" style={{
      padding: isMobile ? '70px 6%' : '100px 5%',
      background: '#0A0F1C', position: 'relative', overflow: 'hidden'
    }}>
      <TechBackground opacity={0.15} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 60 }}>
          <div style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: '#00C2FF', fontWeight: 600, marginBottom: 12 }}>
             {t('ct_label')}
          </div>
          <h2 style={{ fontSize: isMobile ? '1.8rem' : 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
            {t('ct_titre')}{' '}
            <span style={{ background: 'linear-gradient(135deg, #0066FF, #00C2FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Rivex
            </span>
          </h2>
          <p style={{ fontSize: isMobile ? '0.9rem' : '1rem', color: '#8899bb', maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
            {t('ct_desc')}
          </p>
        </div>

        {/* Contenu */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr',
          gap: isMobile ? 40 : 64
        }}>

          {/* Infos contact */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
              {infos.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: 'rgba(0,102,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <i className={`fas ${item.icon}`} style={{ fontSize: 16, color: '#00C2FF' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: '#8899bb', marginBottom: 4 }}>{item.titre}</div>
                    <div style={{ fontSize: 14, color: '#fff', fontWeight: 500 }}>{item.valeur}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 13, color: '#8899bb', marginBottom: 14, fontWeight: 500 }}> {t('ct_suivez')}</div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {[
                 { icon: 'fa-facebook-f', href: 'https://www.facebook.com/profile.php?id=61591720462723' },
                  { icon: 'fa-linkedin-in', href: '#' },
                  { icon: 'fa-tiktok', href: '#' },
                  { icon: 'fa-whatsapp', href: 'https://wa.me/22901563947411' },
                ].map((s, i) => (
                  <a key={i} href={s.href}
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
                      width: 44, height: 44, borderRadius: 12,
                      background: '#0D1525', border: '1px solid #1a2540',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#8899bb', fontSize: 17, textDecoration: 'none',
                      transition: 'all 0.2s'
                    }}>
                    <i className={`fab ${s.icon}`} />
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp direct */}
            <a href="https://wa.me/22901563947411" target="_blank" rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '13px 22px', borderRadius: 10, fontSize: 14, fontWeight: 600,
                background: '#25D366', color: '#fff', textDecoration: 'none',
                width: isMobile ? '100%' : 'auto',
                justifyContent: isMobile ? 'center' : 'flex-start'
              }}>
              <i className="fab fa-whatsapp" style={{ fontSize: 20 }} />
             {t('ct_whatsapp')}
            </a>
          </div>

          {/* Formulaire */}
          <div style={{
            background: '#0D1525', borderRadius: 20,
            border: '1px solid #1a2540',
            padding: isMobile ? '24px 20px' : '40px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: 16, marginBottom: 16
            }}>
              {[
                { label: t('ct_nom'), type: 'text', placeholder: t('ct_nom_ph') },
                { label: t('ct_email'), type: 'email', placeholder: t('ct_email_ph') },
              ].map((f, i) => (
                <div key={i}>
                  <label style={{ display: 'block', fontSize: 13, color: '#8899bb', marginBottom: 8, fontWeight: 500 }}>
                    {f.label}
                  </label>
                  <input type={f.type} placeholder={f.placeholder}
                    onFocus={e => e.target.style.borderColor = '#0066FF'}
                    onBlur={e => e.target.style.borderColor = '#1a2540'}
                    style={{
                      width: '100%', padding: '12px 14px', borderRadius: 8,
                      background: '#0A0F1C', border: '1px solid #1a2540',
                      color: '#e2e8f0', fontFamily: 'Poppins, sans-serif',
                      fontSize: 14, outline: 'none', transition: 'border-color 0.2s'
                    }} />
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 13, color: '#8899bb', marginBottom: 8, fontWeight: 500 }}>
                Téléphone / WhatsApp
              </label>
              <input type="tel" placeholder={t('ct_tel_ph')}
                onFocus={e => e.target.style.borderColor = '#0066FF'}
                onBlur={e => e.target.style.borderColor = '#1a2540'}
                style={{
                  width: '100%', padding: '12px 14px', borderRadius: 8,
                  background: '#0A0F1C', border: '1px solid #1a2540',
                  color: '#e2e8f0', fontFamily: 'Poppins, sans-serif',
                  fontSize: 14, outline: 'none', transition: 'border-color 0.2s'
                }} />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 13, color: '#8899bb', marginBottom: 8, fontWeight: 500 }}>
                {t('ct_service')}
              </label>
              <select
                onFocus={e => e.target.style.borderColor = '#0066FF'}
                onBlur={e => e.target.style.borderColor = '#1a2540'}
                style={{
                  width: '100%', padding: '12px 14px', borderRadius: 8,
                  background: '#0A0F1C', border: '1px solid #1a2540',
                  color: '#e2e8f0', fontFamily: 'Poppins, sans-serif',
                  fontSize: 14, outline: 'none', transition: 'border-color 0.2s'
                }}>
                <option value="">{t('ct_service_ph')}</option>
                <optgroup label="Tech & Digital">
                  <option>Création de site web</option>
                  <option>Application mobile</option>
                  <option>Intelligence Artificielle</option>
                  <option>Chatbot</option>
                  <option>Automatisation business</option>
                  <option>Cybersécurité</option>
                </optgroup>
                <optgroup label="Électronique & Systèmes">
                  <option>Systèmes informatiques</option>
                  <option>Systèmes électriques</option>
                  <option>Vidéosurveillance</option>
                  <option>Systèmes embarqués</option>
                </optgroup>
                <optgroup label="Agriculture Intelligente">
                  <option>Irrigation intelligente</option>
                  <option>Ferme intelligente</option>
                  <option>Élevage moderne</option>
                  <option>IA Agricole</option>
                </optgroup>
                <option>Autre / Je ne sais pas encore</option>
              </select>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', fontSize: 13, color: '#8899bb', marginBottom: 8, fontWeight: 500 }}>
                {t('ct_projet')}
              </label>
              <textarea placeholder={t('ct_projet_ph')}
                rows={5}
                onFocus={e => e.target.style.borderColor = '#0066FF'}
                onBlur={e => e.target.style.borderColor = '#1a2540'}
                style={{
                  width: '100%', padding: '12px 14px', borderRadius: 8,
                  background: '#0A0F1C', border: '1px solid #1a2540',
                  color: '#e2e8f0', fontFamily: 'Poppins, sans-serif',
                  fontSize: 14, outline: 'none', resize: 'vertical',
                  transition: 'border-color 0.2s'
                }} />
            </div>

            <button
              onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              style={{
                width: '100%', padding: '14px', borderRadius: 10,
                fontSize: 15, fontWeight: 600,
                background: 'linear-gradient(135deg, #0066FF, #00C2FF)',
                color: '#fff', border: 'none', cursor: 'pointer',
                fontFamily: 'Poppins, sans-serif', transition: 'opacity 0.2s',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
              }}>
            {t('ct_envoyer')}
              <i className="fas fa-paper-plane" style={{ fontSize: 14 }} />
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp flottant */}
     <a href="https://wa.me/22901563947411" target="_blank" rel="noreferrer"
        style={{
          position: 'fixed', bottom: 28, right: 28, zIndex: 999,
          width: 56, height: 56, borderRadius: '50%',
          background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: 26, textDecoration: 'none',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
          animation: 'floatWa 4s ease-in-out infinite'
        }}>
        <i className="fab fa-whatsapp" />
      </a>

      <style>{`
        @keyframes floatWa {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  )
}

export default Contact