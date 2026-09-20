const TIMELINE = [
  { date: 'June 2026 – Present', role: 'VAPT Intern', org: 'Selkey CyberSecurity' },
  { date: '2025 – 2027', role: 'M.Tech — Cyber Security', org: 'Indus University' },
  { date: 'Dec 2025', role: 'Cybersecurity Internship', org: 'Shadow-Fox · 1 Month' },
  { date: '2020 – 2024', role: 'B.Tech — Information Technology', org: 'Indus University' },
  { date: 'Jan – Jun 2024', role: 'Internship — MERN Stack', org: 'Softedge InfoTech' },
]

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="eyebrow">Who Am I</div>
        <h2 className="section-title">01 // <span>About Me</span></h2>
        <div className="about-grid">
          <div>
            <p style={{ color: 'var(--muted)', marginBottom: 16 }}>
              I'm a cybersecurity enthusiast with a B.Tech in Information Technology, currently pursuing an
              M.Tech in Cyber Security at Indus University. My journey started with a deep curiosity for how
              systems work — and how they can be broken.
            </p>
            <p style={{ color: 'var(--muted)', marginBottom: 16 }}>
              I specialize in OSINT, penetration testing, vulnerability assessment, and security monitoring
              using industry-standard tools. I enjoy building security tools that solve real-world problems.
            </p>
            <div className="timeline">
              {TIMELINE.map((t) => (
                <div className="t-item" key={t.role}>
                  <div className="t-date">{t.date}</div>
                  <div className="t-role">{t.role}</div>
                  <div className="t-org">{t.org}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="code-tab">profile.json</div>
            <div className="code-block">
              <span className="p">mihir@kali:~$</span> cat profile.json<br /><br />
              {'{'}<br />
              &nbsp;&nbsp;<span className="k">"name"</span>: <span className="s">"Mihir Rathod"</span>,<br />
              &nbsp;&nbsp;<span className="k">"role"</span>: <span className="s">"Cybersecurity Researcher"</span>,<br />
              &nbsp;&nbsp;<span className="k">"degree"</span>: <span className="s">"M.Tech Cyber Security"</span>,<br />
              &nbsp;&nbsp;<span className="k">"university"</span>: <span className="s">"Indus University"</span>,<br />
              &nbsp;&nbsp;<span className="k">"prev_degree"</span>: <span className="s">"B.Tech IT"</span>,<br />
              &nbsp;&nbsp;<span className="k">"email"</span>: <span className="s">"mihir8716@gmail.com"</span>,<br />
              &nbsp;&nbsp;<span className="k">"focus"</span>: [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="s">"Ethical Hacking"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="s">"OSINT"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="s">"Penetration Testing"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="s">"SOC Analyst"</span><br />
              &nbsp;&nbsp;],<br />
              &nbsp;&nbsp;<span className="k">"status"</span>: <span className="s">"Available for opportunities"</span><br />
              {'}'}<br />
              <span className="p">mihir@kali:~$</span> <span className="cursor" style={{ color: 'var(--accent)' }}>_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
