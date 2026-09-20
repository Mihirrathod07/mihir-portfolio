const PROJECTS = [
  {
    id: 'PROJECT-001',
    status: 'ACTIVE',
    category: 'OSINT Framework',
    title: 'PhantomEye — OSINT Intelligence Platform',
    desc: 'A full-featured OSINT framework with a unified dashboard and 12+ recon modules. Built for ethical security research, penetration testing, and threat intelligence gathering — all from a single interface.',
    modsLabel: '// Modules',
    mods: ['Dashboard', 'Username Lookup', 'IP / Domain', 'Email Intel', 'Metadata', 'Phone Dork Gen', 'Hash ID', 'WHOIS', 'DNS Lookup', 'Risk Score'],
    demo: 'https://phantomeye.onrender.com/',
    github: 'https://github.com/Mihirrathod07/Phantomeye.git',
  },
  {
    id: 'PROJECT-002',
    status: 'ACTIVE',
    category: 'VAPT Tool',
    title: 'VulnProbe — Web Vulnerability Scanner',
    desc: 'An automated web vulnerability assessment platform with 8 scanning modules. Detects OWASP Top 10 vulnerabilities, maps findings to real CVEs, and generates professional PDF reports with a real-time risk scoring engine (0–100).',
    modsLabel: '// Modules',
    mods: ['Port Scanner', 'SQL Injection', 'XSS Scanner', 'Security Headers', 'Directory Enum', 'Subdomain Enum', 'CVE Intelligence', 'PDF Reports'],
    demo: 'https://vulnprobe.onrender.com/',
    github: 'https://github.com/Mihirrathod07/VulnProbe',
  },
  {
    id: 'PROJECT-003',
    status: 'ACTIVE',
    category: 'Security Tool',
    title: 'CipherGuard — Password Security Analyzer',
    desc: 'A cybersecurity web tool that performs real-time password strength analysis, breach detection against 10B+ leaked passwords, crack time estimation across 3 attack scenarios, and secure password generation.',
    modsLabel: '// Features',
    mods: ['Real-time Analysis', 'Breach Detection', 'Crack Time Estimator', 'Entropy Calculator', 'Flask Backend'],
    demo: 'https://cipherguard-ik69.onrender.com/',
    github: 'https://github.com/Mihirrathod07/CipherGuard-',
  },
  {
    id: 'PROJECT-004',
    status: 'INTERNSHIP',
    category: 'Full Stack',
    title: 'Proginter — Domain Service Platform',
    desc: 'A full-stack domain registration and management platform built during an internship at Softedge InfoTech. Users can search, register, and manage domain names through a REST API backend.',
    modsLabel: '// Tech Stack',
    mods: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Next.js', 'REST API'],
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
