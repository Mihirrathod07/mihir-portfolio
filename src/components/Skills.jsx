const CATEGORIES = [
  {
    title: 'Offensive Security',
    count: '05',
    tags: [
      'Kali Linux',
      'Burp Suite',
      'Metasploit',
      'SQLMap',
      'OWASP Testing'
    ]
  },
  {
    title: 'Network & Recon',
    count: '05',
    tags: [
      'Nmap',
      'Wireshark',
      'OSINT',
      'Dorking',
      'ExifTool'
    ]
  },
  {
    title: 'Bug Bounty',
    count: '05',
    tags: [
      'Web Reconnaissance',
      'Subdomain Enumeration',
      'Vulnerability Discovery',
      'API Security Testing',
      'Responsible Disclosure'
    ]
  },
  {
    title: 'Development',
    count: '05',
    tags: [
      'Python',
      'Streamlit',
      'React.js',
      'Next.js',
      'MERN Stack'
    ]
  },
  {
    title: 'Specializations',
    count: '05',
    tags: [
      'Penetration Testing',
      'VAPT',
      'Web Security',
      'Threat Intelligence',
      'Security Research'
    ]
  },
  {
    title: 'Soft Skills',
    count: '04',
    tags: [
      'Report Writing',
      'Security Research',
      'Team Collaboration',
      'Problem Solving'
    ]
  },
]
export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="eyebrow">Arsenal &amp; Tools</div>
        <h2 className="section-title">02 // <span>Skills</span></h2>
        <div className="skill-grid">
          {CATEGORIES.map((c) => (
            <div className="skill-card" key={c.title}>
              <h4>{c.title} <span style={{ color: 'var(--muted)' }}>[{c.count}]</span></h4>
              <div className="skill-tags">
                {c.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
