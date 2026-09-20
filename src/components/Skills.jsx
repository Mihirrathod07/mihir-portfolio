const CATEGORIES = [
  { title: 'Offensive Security', count: '05', tags: ['Kali Linux', 'Burp Suite', 'Metasploit', 'John the Ripper', 'Zphisher'] },
  { title: 'Network & Recon', count: '05', tags: ['Nmap', 'Wireshark', 'OSINT', 'Dorking', 'ExifTool'] },
  { title: 'SOC & Monitoring', count: '05', tags: ['Splunk', 'Wazuh', 'SIEM', 'Log Analysis', 'IDS/IPS'] },
  { title: 'Development', count: '05', tags: ['Python', 'Streamlit', 'React.js', 'Next.js', 'MERN Stack'] },
  { title: 'Specializations', count: '05', tags: ['Pen Testing', 'VAPT', 'CTF', 'Threat Intel', 'Incident Response'] },
  { title: 'Soft Skills', count: '04', tags: ['Report Writing', 'Security Research', 'Team Collaboration', 'Problem Solving'] },
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
