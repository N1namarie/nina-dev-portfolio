
import './App.css'
import OrbitalUniverse from './components/OrbitalUniverse'
import ProjectGallery from './components/ProjectGallery'
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ProjectCaseStudy from './components/ProjectCaseStudy'

function HomePage() {
  const { hash } = useLocation()

  // React Router changes the URL to /#work but doesn't scroll there for us.
  // Rude. So when the page loads with a #section, we go find it ourselves.
  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <main className="portfolio">

      {/* NAVIGATION */}
      <nav className="navigation">
        <div className="logo">N/DEV.</div>

        <div className="nav-links">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">

        {/* LEFT COLUMN: TEXT */}
        <div className="hero-content">
          <p className="eyebrow">
            01 / BUILDING WHAT'S NEXT
          </p>

          <h1>
            I THINK IN SYSTEMS.
            <span>I BUILD IN CODE.</span>
          </h1>

          <p className="description">
            Business strategy meets software development.
            Real products. Complex problems. Better solutions.
          </p>

          <a className="explore" href="#work">
            EXPLORE MY WORK <span>↗</span>
          </a>
        </div>

        {/* RIGHT COLUMN: ANIMATED UNIVERSE */}
        <OrbitalUniverse />

      </section>

{/* PROJECTS */}
<ProjectGallery />

      {/* ABOUT */}
      <section id="about" className="section">
        <p className="eyebrow">03 / ABOUT</p>
        <h2>BUSINESS MIND. BUILDER'S MINDSET.</h2>
        <p>
          Connecting business operations, product thinking,
          and software development.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <p className="eyebrow">04 / CONTACT</p>
        <h2>LET'S BUILD SOMETHING.</h2>
        <p>Open to conversations about software and technical roles.</p>
      </section>

    </main>
    )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:projectId" element={<ProjectCaseStudy />} />
    </Routes>
  )
}

export default App