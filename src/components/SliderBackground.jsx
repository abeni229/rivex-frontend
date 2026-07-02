import { useState, useEffect } from 'react'

function SliderBackground({ images, overlay = 'rgba(10,15,28,0.75)' }) {
  const [actif, setActif] = useState(0)
  const [fondu, setFondu] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFondu(false)
      setTimeout(() => {
        setActif(prev => (prev + 1) % images.length)
        setFondu(true)
      }, 500)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <>
      {/* Image de fond */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url(${images[actif]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: fondu ? 1 : 0,
        transition: 'opacity 0.5s ease',
      }} />

      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: overlay
      }} />

      {/* Indicateurs */}
      <div style={{
        position: 'absolute', bottom: 20, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', gap: 8, zIndex: 2
      }}>
        {images.map((_, i) => (
          <div key={i}
            onClick={() => setActif(i)}
            style={{
              width: i === actif ? 24 : 8,
              height: 8, borderRadius: 4,
              background: i === actif ? '#00C2FF' : 'rgba(255,255,255,0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }} />
        ))}
      </div>
    </>
  )
}

export default SliderBackground