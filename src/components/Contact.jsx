import { useEffect, useRef, useState } from 'react'

const NMAP_LINES = [
  '$ nmap -sV mihir.rathod',
  'Starting Nmap scan...',
  'PORT     STATE  SERVICE',
  '22/tcp   open   ssh',
  '80/tcp   open   portfolio',
  '443/tcp  open   secure-comms',
  'Nmap done — Host is UP',
  '$ echo "Ready to collaborate!"',
  'Ready to collaborate!',
]

export default function Contact() {
  const [shown, setShown] = useState([])
  const boxRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = boxRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            let i = 0
            const timer = setInterval(() => {
              if (i < NMAP_LINES.length) {
                setShown((prev) => [...prev, NMAP_LINES[i]])
                i += 1
              } else {
                clearInterval(timer)
              }
            }, 260)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" style={{ borderBottom: 'none' }}>
      <div className="wrap">
        <div className="eyebrow">Let's Connect</div>
        <h2 className="section-title">05 // <span>Get In Touch</span></h2>
        <div className="contact-box">
          <p style={{ color: 'var(--muted)' }}>
            Open to internships, collaborations, CTF teams, and cybersecurity opportunities. Feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="mailto:mihir8716@gmail.com">mihir8716@gmail.com</a>
            <a href="https://github.com/Mihirrathod07" target="_blank" rel="noreferrer">github.com/Mihirrathod07</a>
            <a href="https://www.linkedin.com/in/mihir-rathod-9a0110245" target="_blank" rel="noreferrer">linkedin.com/in/mihir-rathod</a>
            <a href="tel:+919712212242">+91 97122 12242</a>
          </div>
          <div ref={boxRef} style={{ marginTop: 26, fontSize: 12.5, color: 'var(--muted)' }}>
            {shown.map((l, i) => <div key={i}>{l}</div>)}
          </div>
        </div>
      </div>
    </section>
  )
}
