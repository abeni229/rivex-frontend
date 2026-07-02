import { useEffect, useRef } from 'react'

function TechBackground({ opacity = 1 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    let circuits = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // ── Particules
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.35,
        dy: (Math.random() - 0.5) * 0.35,
        o: Math.random() * 0.4 + 0.1,
        color: Math.random() > 0.5 ? '0,194,255' : '0,102,255'
      })
    }

    // ── Circuits (lignes qui se dessinent)
    const createCircuit = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      segments: [],
      progress: 0,
      speed: Math.random() * 1.5 + 0.5,
      maxSegments: Math.floor(Math.random() * 5) + 3,
      length: Math.random() * 80 + 40,
      dir: [0, 1, 2, 3][Math.floor(Math.random() * 4)], // 0=right,1=down,2=left,3=up
      opacity: Math.random() * 0.3 + 0.1,
      done: false,
      fade: 1
    })

    for (let i = 0; i < 18; i++) circuits.push(createCircuit())

    const getDirVector = (dir) => {
      const dirs = [[1,0],[ 0,1],[-1,0],[0,-1]]
      return dirs[dir]
    }

    const turnDir = (dir) => {
      const turns = [-1, 1]
      const turn = turns[Math.floor(Math.random() * 2)]
      return (dir + turn + 4) % 4
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // ── Dessiner circuits
      circuits.forEach((c, idx) => {
        if (c.done) {
          c.fade -= 0.005
          if (c.fade <= 0) circuits[idx] = createCircuit()
          return
        }

        ctx.strokeStyle = `rgba(0,194,255,${c.opacity * c.fade})`
        ctx.lineWidth = 1
        ctx.lineCap = 'round'

        let cx = c.x, cy = c.y
        ctx.beginPath()
        ctx.moveTo(cx, cy)

        for (let i = 0; i < c.segments.length; i++) {
          const [dx, dy] = getDirVector(c.segments[i].dir)
          cx += dx * c.segments[i].len
          cy += dy * c.segments[i].len
          ctx.lineTo(cx, cy)
          // Noeud au coin
          ctx.arc(cx, cy, 2, 0, Math.PI * 2)
          ctx.moveTo(cx, cy)
        }

        // Segment en cours
        if (c.segments.length < c.maxSegments) {
          const [dx, dy] = getDirVector(c.dir)
          c.progress += c.speed
          ctx.lineTo(cx + dx * c.progress, cy + dy * c.progress)
          if (c.progress >= c.length) {
            c.segments.push({ dir: c.dir, len: c.length })
            c.dir = turnDir(c.dir)
            c.progress = 0
            c.length = Math.random() * 80 + 40
          }
        } else {
          c.done = true
        }

        ctx.stroke()

        // Point lumineux au bout
        const [dx, dy] = getDirVector(c.dir)
        const headX = cx + dx * c.progress
        const headY = cy + dy * c.progress
        ctx.beginPath()
        ctx.arc(headX, headY, 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,194,255,${c.opacity * c.fade * 2})`
        ctx.fill()

        // Halo
        const grad = ctx.createRadialGradient(headX, headY, 0, headX, headY, 10)
        grad.addColorStop(0, `rgba(0,194,255,${c.opacity * 0.4})`)
        grad.addColorStop(1, 'rgba(0,194,255,0)')
        ctx.beginPath()
        ctx.arc(headX, headY, 10, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      })

      // ── Dessiner particules
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},${p.o})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })

      // ── Lignes entre particules proches
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,102,255,${0.07 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        opacity: opacity,
        pointerEvents: 'none'
      }}
    />
  )
}

export default TechBackground