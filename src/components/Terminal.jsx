import { useEffect, useRef, useState } from 'react'

const ASCII_ART = [
  ' __  __ ___ _   _ ___ ____  ',
  '|  \\/  |_ _| | | |_ _|  _ \\ ',
  '| |\\/| || || |_| || || |_) |',
  '| |  | || ||  _  || ||  _ < ',
  '|_|  |_|___|_| |_|___|_| \\_\\',
]

const RESUME_PATH = '/assets/Mihirrathod_Resume.pdf'

const COMMANDS = {
help: () => [
  'Available commands:',
  '  whoami       — profile',
  '  skills       — core skills',
  '  projects     — featured work',
  '  experience   — experience',
  '  contact      — contact details',
  '  resume       — download resume',
  '  open <name>  — launch project',
  '  nmap         — scan this host',
  '  sudo hire mihir — you know what to do',
  '  clear        — clear terminal',
],

  whoami: () => [
    'mihir_rathod — VAPT / Penetration Tester',
    'M.Tech Cybersecurity @ Indus University',
    'VAPT Intern @ Selkey Cyber Security',
    'Focus: Web Security · API Security · Bug Hunting',
  ],

  skills: () => [
    'VAPT · OWASP Top 10 · API Security',
    'Burp Suite · Nmap · SQLMap · Kali Linux',
    'Python · FastAPI · Flask · React.js',
    'OSINT · Recon · Web Security',
  ],

  experience: () => [
    'Selkey Cyber Security — VAPT Intern',
    'Jul 2026 – Present',
    '',
    'ShadowFox — Cybersecurity Intern',
    'Dec 2025 – Jan 2026',
    '',
    'SoftEdge Infotech — Frontend Developer Intern',
    'Jan 2024 – Jun 2024',
  ],

  projects: () => [
    '01 ApiShield   — API security & VAPT',
    '02 PhantomEye  — OSINT intelligence',
    '03 VulnProbe   — web vulnerability scanner',
    '04 CipherGuard — password security',
    '05 Proginter   — domain service platform',
    '',
    "Use 'open <name>' to launch.",
  ],

  contact: () => [
    'Email: mihir8716@gmail.com',
    'GitHub: github.com/Mihirrathod07',
    'LinkedIn: linkedin.com/in/mihir-rathod',
    'Location: Ahmedabad, India',
  ],

  resume: () => {
    const link = document.createElement('a')
    link.href = RESUME_PATH
    link.download = 'Mihirrathod_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    return ['Downloading resume...']
  },

 nmap: () => [
    'Starting Nmap scan on mihir.rathod...',
    'PORT     STATE  SERVICE',
    '22/tcp   open   ssh',
    '80/tcp   open   portfolio',
    '443/tcp  open   secure-comms',
    'Host is up. All ports secured.',
  ],

}

const PROJECT_LINKS = {
  apishield: 'https://apishield-vews.onrender.com/',
  phantomeye: 'https://phantomeye.onrender.com/',
  vulnprobe: 'https://vulnprobe.onrender.com/',
  cipherguard: 'https://cipherguard-ik69.onrender.com/',
}

let idCounter = 0
function makeLine(text, cls) {
  idCounter += 1
  return { id: idCounter, text, cls }
}

function bootLines() {
  const lines = []
  ASCII_ART.forEach((l) => lines.push(makeLine(l, 'term-ok')))
  lines.push(makeLine('', null))
  lines.push(makeLine('🛡  VAPT / Penetration Tester · OWASP Top 10 · OSINT', 'term-cyan'))
  lines.push(makeLine('M.Tech Cybersecurity · Indus University · 2025-Present', 'term-out'))
  lines.push(makeLine('', null))
  lines.push(makeLine("Type 'help' to see available commands, or 'whoami' to start.", 'term-out'))
  lines.push(makeLine('', null))
  return lines
}

export default function Terminal() {
  const [lines, setLines] = useState(bootLines)
  const [value, setValue] = useState('')
  const historyRef = useRef([])
  const hIndexRef = useRef(-1)
  const screenRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight
    }
  }, [lines])

  function print(text, cls) {
    setLines((prev) => [...prev, makeLine(text, cls)])
  }

  function handleCommand(raw) {
    const cmd = raw.trim()
    if (!cmd) return
    historyRef.current.push(cmd)
    hIndexRef.current = historyRef.current.length
    print(`mihir@kali:~$ ${cmd}`, 'term-cyan')

    const lower = cmd.toLowerCase()

    if (lower === 'clear') {
      setLines([])
      return
    }
    if (lower === 'sudo hire mihir') {
      print('[sudo] password for mihir: ********', 'term-out')
      print('Access granted. Redirecting to contact...', 'term-ok')
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }, 500)
      return
    }
    if (lower.startsWith('open ')) {
      const key = lower.replace('open ', '').trim()
      if (PROJECT_LINKS[key]) {
        print(`Opening ${key}...`, 'term-ok')
        window.open(PROJECT_LINKS[key], '_blank')
      } else {
        print(`project not found: ${key}`, 'term-err')
      }
      return
    }
    if (COMMANDS[lower]) {
      const out = COMMANDS[lower]()
      out.forEach((l) => print(l, lower === 'resume' ? 'term-ok' : 'term-out'))
      return
    }
    print(`command not found: ${cmd} (try "help")`, 'term-err')
  }

  function onSubmit(e) {
    e.preventDefault()
    handleCommand(value)
    setValue('')
  }

  function onKeyDown(e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (hIndexRef.current > 0) {
        hIndexRef.current -= 1
        setValue(historyRef.current[hIndexRef.current])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (hIndexRef.current < historyRef.current.length - 1) {
        hIndexRef.current += 1
        setValue(historyRef.current[hIndexRef.current])
      } else {
        hIndexRef.current = historyRef.current.length
        setValue('')
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const partial = value.toLowerCase()
      const match = Object.keys(COMMANDS).find((c) => c.startsWith(partial))
      if (match) setValue(match)
    }
  }

  return (
    <section id="terminal">
      <div className="wrap">
        <div className="eyebrow">Interactive Terminal</div>
        <h2 className="section-title">~/mihir/<span>terminal</span></h2>
        <p style={{ color: 'var(--muted)', marginBottom: 22, maxWidth: 600 }}>
          Explore my background through a live command line. Try <b style={{ color: 'var(--text)' }}>help</b>,{' '}
          <b style={{ color: 'var(--text)' }}>whoami</b>, <b style={{ color: 'var(--text)' }}>skills</b>, or{' '}
          <b style={{ color: 'var(--text)' }}>resume</b>.
        </p>
        <div className="term-wrap">
          <div className="term-bar">
            <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
            <span className="term-title">mihir@kali: ~</span>
          </div>
          <div className="term-screen" ref={screenRef}>
            {lines.map((l) => (
              <div key={l.id} className={`line${l.cls ? ' ' + l.cls : ''}`}>{l.text}</div>
            ))}
          </div>
          <form className="term-form" onSubmit={onSubmit}>
            <span className="term-prompt">mihir@kali:~$</span>
            <input
              ref={inputRef}
              className="term-input"
              autoComplete="off"
              spellCheck="false"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
            />
          </form>
        </div>
        <div className="term-hint">↑ / ↓ for history · Tab to autocomplete</div>
      </div>
    </section>
  )
}