const CERTS = [
  { name: 'Introduction to Cybersecurity', org: 'Cisco Networking Academy', file: '/public/certificates/cisco-cybersecurity.pdf' },
  { name: 'Cybersecurity Job Simulation', org: 'Deloitte Australia — Forage', file: '/public/certificates/Deloitte.pdf' },
  { name: 'Certified Cybersecurity Educator (CCEP)', org: 'Redteamleaders', file: '/public/certificates/certified_certificate.pdf' },
  { name: 'Cybersecurity Internship Certificate', org: 'Shadowfox — Dec 2025', file: '/public/certificates/Mihir Rathod_Shadowfox_complate.pdf' },
]

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="wrap">
        <div className="eyebrow">Credentials</div>
        <h2 className="section-title">04 // <span>Certifications</span></h2>
        <div className="cert-grid">
          {CERTS.map((c) => (
            <a className="cert-card" href={encodeURI(c.file)} target="_blank" rel="noreferrer" key={c.name}>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-org">{c.org}</div>
              </div>
              <div className="cert-check">✓ verified</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
