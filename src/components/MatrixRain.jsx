import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    // Cyber / hex / code themed character set (no katakana)
    const chars = '01$#%&@{}[]<>/\\;:=+-*01010101ABCDEF0x'
    let w, h, cols, drops, interval

    function resize() {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      cols = Math.floor(w / 16)
      drops = new Array(cols).fill(0).map(() => Math.random() * -50)
    }

    function draw() {
      ctx.fillStyle = 'rgba(6,8,7,0.08)'
      ctx.fillRect(0, 0, w, h)
      ctx.font = '14px monospace'

      for (let i = 0; i < cols; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)]
        const y = drops[i] * 16

        // Bright leading character, dimmer green trail behind it
        ctx.fillStyle = Math.random() > 0.94 ? '#e8fff0' : '#39ff8a'
        ctx.fillText(ch, i * 16, y)

        if (y > h && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
    }

    resize()
    window.addEventListener('resize', resize)
    interval = setInterval(draw, 55)

    return () => {
      window.removeEventListener('resize', resize)
      clearInterval(interval)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-rain" />
}