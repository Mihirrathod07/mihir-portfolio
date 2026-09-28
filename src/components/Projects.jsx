const PROJECTS = [
  {
    id: 'PROJECT-001',
    status: 'ACTIVE',
    category: 'API Security',
    title: 'ApiShield — API Security & VAPT Platform',
    desc: 'A full-stack API security testing platform built with FastAPI and React that automates OWASP API Top 10 checks, endpoint discovery, authentication testing, and BOLA/IDOR detection using dual-user authorization testing.',
    modsLabel: '// Modules',
    mods: [
      'OWASP API Top 10',
      'Endpoint Discovery',
      'OpenAPI Import',
      'BOLA / IDOR Testing',
      'JWT Authentication',
      'Rate Limit Testing',
      'Credential Encryption',
      'Vulnerability Reports'
    ],
    demo: 'https://apishield-vews.onrender.com/',
    github: 'https://github.com/Mihirrathod07/',
  },

  {
    id: 'PROJECT-002',
    status: 'ACTIVE',
    category: 'OSINT Framework',
    title: 'PhantomEye — OSINT Intelligence Platform',
    desc: 'An OSINT reconnaissance platform with 12 integrated modules for automated information gathering, including WHOIS/DNS lookup, email intelligence, username enumeration, IP reputation analysis, and bulk IP scanning.',
    modsLabel: '// Modules',
    mods: [
      'WHOIS / DNS',
      'Username Lookup',
      'Email Intelligence',
      'IP Reputation',
      'Metadata',
      'Phone Lookup',
      'Hash Identifier',
      'Dork Generator',
      'Bulk IP Scan',
      'Risk Analysis'
    ],
    demo: 'https://phantomeye.onrender.com/',
    github: 'https://github.com/Mihirrathod07/Phantomeye.git',
  },

  {
    id: 'PROJECT-003',
    status: 'ACTIVE',
    category: 'VAPT Tool',
    title: 'VulnProbe — Web Vulnerability Scanner',
    desc: 'A Flask-based automated web vulnerability scanner covering port scanning, security headers, SQL injection, XSS, directory enumeration, subdomain discovery, and CVE-based vulnerability detection with automated reports.',
    modsLabel: '// Modules',
    mods: [
      'Port Scanner',
      'SQL Injection',
      'XSS Scanner',
      'Security Headers',
      'Directory Enum',
      'Subdomain Enum',
      'CVE Detection',
      'PDF Reports'
    ],
    demo: 'https://vulnprobe.onrender.com/',
    github: 'https://github.com/Mihirrathod07/VulnProbe',
  },

  {
    id: 'PROJECT-004',
    status: 'ACTIVE',
    category: 'Security Tool',
    title: 'CipherGuard — Password Security Analyzer',
    desc: 'A password security analyzer that evaluates password strength, estimates brute-force crack time, generates secure passwords, and checks compromised credentials through the Have I Been Pwned API.',
    modsLabel: '// Features',
    mods: [
      'Strength Analysis',
      'Entropy Analysis',
      'Crack Time',
      'Password Generator',
      'Breach Detection'
    ],
    demo: 'https://cipherguard-ik69.onrender.com/',
    github: 'https://github.com/Mihirrathod07/CipherGuard-',
  },

  {
    id: 'PROJECT-005',
    status: 'INTERNSHIP',
    category: 'Full Stack',
    title: 'Proginter — Domain Service Platform',
    desc: 'A full-stack domain registration and management platform developed during an internship at Softedge InfoTech, featuring domain search, registration workflows, and REST API integration.',
    modsLabel: '// Tech Stack',
    mods: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Next.js',
      'REST API'
    ],
    demo: null,
    github: 'https://github.com/Mihirrathod07',
  },
]
export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow">Featured Work</div>
        <h2 className="section-title">03 // <span>Projects</span></h2>
        {PROJECTS.map((p) => (
          <div className="proj-card" key={p.id}>
            <div className="proj-top">
              <span className="proj-num">{p.id}</span>
              <span className="proj-status">{p.status}</span>
            </div>
            <div className="proj-cat">{p.category}</div>
            <div className="proj-title">{p.title}</div>
            <p className="proj-desc">{p.desc}</p>
            <div className="proj-mods-label">{p.modsLabel}</div>
            <div className="skill-tags">
              {p.mods.map((m) => <span key={m}>{m}</span>)}
            </div>
            <div className="proj-links">
              {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live Demo →</a>}
              <a href={p.github} target="_blank" rel="noreferrer">GitHub →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
