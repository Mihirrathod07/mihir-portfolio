export default function Hero() {
  return (
    <header className="hero wrap">
      <div className="status-pill"><span className="status-dot"></span>SYSTEM ONLINE</div>
      <div className="role-tag">Cybersecurity Researcher &amp; M.Tech Student</div>
      <h1>MIHIR RATHOD<span className="cursor">_</span></h1>
      <p className="hero-desc">
        Passionate cybersecurity enthusiast specializing in <b>VAPT</b>, <b>ethical hacking</b>, <b>threat analysis</b>,
        and <b>OSINT</b>. Currently pursuing M.Tech in Cyber Security at Indus University — turning curiosity
        about how systems break into tools that keep them safe.
      </p>
      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="https://github.com/Mihirrathod07" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub →</a>
        <a href="/assets/Mihirrathod_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-ghost">Resume →</a>
      </div>
      <div className="stat-row">
        <div className="stat"><b>05</b><span>Projects</span></div>
        <div className="stat"><b>04</b><span>Certifications</span></div>
        <div className="stat"><b>10+</b><span>Tools Mastered</span></div>
        <div className="stat"><b>∞</b><span>Curiosity</span></div>
      </div>
      <div className="tag-row">
        <span className="tag">VAPT</span><span className="tag">Bug Hunting</span><span className="tag">CTF</span>
        <span className="tag">Kali Linux</span><span className="tag">OSINT</span><span className="tag">Threat Analyst</span>
      </div>
    </header>
  )
}
