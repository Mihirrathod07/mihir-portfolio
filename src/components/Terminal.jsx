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
    '  whoami        — quick profile summary',
    '  about         — background & focus areas',
    '  skills        — tools & specializations',
    '  experience    — internship history',
    '  education     — academic background',
    '  projects      — featured work',
    '  certs         — certifications',
    '  contact       — get in touch',
    '  resume        — download my resume (PDF)',
    '  nmap          — scan this host',
    '  sudo hire mihir — you know what to do',
    '  clear         — clear the screen',
  ],
  whoami: () => [
    'mihir_rathod — VAPT / Penetration Tester',
    'Location: Ahmedabad, India',
    'M.Tech Cybersecurity @ Indus University (2025 – Present)',
    'Currently: VAPT Intern @ Selkey CyberSecurity',
    'Email: mihir8716@gmail.com  |  Phone: +91 97122 12242',
    'Focus: Web App Pentesting · OWASP Top 10 · OSINT · SOC',
    'Languages: English, Hindi, Gujarati',
  ],
  about: () => [
    'M.Tech Cybersecurity student with hands-on experience in',
    'Web Application Penetration Testing (VAPT) through',
    'internships and practical security projects.',
    '',
    'Proficient in OWASP Top 10 testing using Burp Suite, Nmap,',
    'OWASP ZAP, SQLMap, and Kali Linux. Built VulnProbe,',
    'PhantomEye, and CipherGuard from the ground up.',
    '',
    'Soft skills: Analytical Thinking · Problem Solving ·',
    'Attention to Detail · Team Collaboration',
    '',
    'Interests: Web App Security · Bug Hunting · Threat',
    'Research · OSINT',
    '',
    'Currently seeking an entry-level VAPT / Penetration',
    'Tester role.',
  ],
  skills: () => [
    'Web App Security:',
    '  VAPT, OWASP Top 10, API Security Testing,',
    '  Authentication/Authorization Testing, CVSS Risk Scoring',
    '',
    'Security Tools:',
    '  Burp Suite, OWASP ZAP, Nmap, SQLMap, Metasploit,',
    '  Nuclei, Gobuster, Subfinder, Wireshark, Kali Linux',
    '',
    'Vulnerability Testing:',
    '  SQL Injection (SQLi), XSS, CSRF, IDOR,',
    '  Security Misconfiguration, Directory Enum, Port Scanning',
    '',
    'Programming & Tech:',
    '  Python, JavaScript, HTML, CSS, Flask, MongoDB,',
    '  REST APIs, Git, Linux',
    '',
    'OSINT & Recon:',
    '  WHOIS, DNS Enumeration, AbuseIPDB, VirusTotal,',
    '  Email Reconnaissance, Username Enumeration',
  ],
  experience: () => [
    'Selkey Cyber Security — VAPT Intern',
    '  Jul 2026 – Present',
    '  Manual + automated web app pentesting (OWASP Top 10),',
    '  found & documented SQLi/XSS/IDOR/CSRF, wrote VAPT',
    '  reports with PoC + CVSS v3.1 ratings.',
    '',
    'ShadowFox — Cybersecurity Intern',
    '  Dec 2025 – Jan 2026',
    '  Vuln assessments with Burp Suite, SQLMap, Nmap;',
    '  network recon & traffic analysis with Wireshark.',
    '',
    'SoftEdge Infotech — Frontend Developer Intern',
    '  Jan 2024 – Jun 2024',
    '  Built responsive apps with React.js, integrated REST',
    '  APIs, learned auth flows & client-side security.',
  ],
  education: () => [
    'Indus University, Ahmedabad',
    '  M.Tech in Cybersecurity (Pursuing) · 2025 – Present',
    '',
    'Indus University, Ahmedabad',
    '  B.Tech in Information Technology · 2020 – 2024',
  ],
  projects: () => [
    '01 PhantomEye   — OSINT intel platform (12+ modules)',
    '02 VulnProbe    — automated web vuln scanner',
    '03 CipherGuard  — password security analyzer',
    '04 Proginter    — domain service platform',
    "Type 'open <name>' e.g. 'open phantomeye' to launch.",
  ],
  certs: () => [
    '[✓] Cybersecurity Job Simulation — Deloitte (Forage)',
    '[✓] Cybersecurity Fundamentals — IBM',
    '[✓] Introduction to Cybersecurity — Cisco Networking Academy',
    '[✓] Certified Cybersecurity Educator Professional (CCEP)',
  ],
  contact: () => [
    'email: mihir8716@gmail.com',
    'github: github.com/Mihirrathod07',
    'linkedin: linkedin.com/in/mihir-rathod',
    'phone: +91 97122 12242',
    'location: Ahmedabad, India',
  ],
  resume: () => {
    const link = document.createElement('a')
    link.href = RESUME_PATH
    link.download = 'Mihirrathod_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    return ['Downloading Mihirrathod_Resume.pdf ...', 'If nothing happens, check your browser\'s download prompt.']
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