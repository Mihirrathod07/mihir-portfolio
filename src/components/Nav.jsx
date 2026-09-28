import { useState } from 'react'

const links = ['terminal','about', 'skills', 'projects', 'certifications', 'contact']

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className="nav-inner">
        <div className="logo">&gt;_ mihir<span>.sh</span></div>
        <div className={`nav-links${open ? ' open' : ''}`}>
          {links.map((l) => (
            <a key={l} href={`#${l}`} onClick={() => setOpen(false)}>
              {l === 'certifications' ? 'certs' : l}
            </a>
          ))}
        </div>
        <button className="burger" onClick={() => setOpen(!open)}>≡</button>
      </div>
    </nav>
  )
}
