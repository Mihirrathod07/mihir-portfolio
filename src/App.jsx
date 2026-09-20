import MatrixRain from './components/MatrixRain.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Terminal from './components/Terminal.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <MatrixRain />
      <div className="scanline"></div>
      <div className="bg-grid"></div>
      <Nav />
      <Hero />
      <Terminal />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}
