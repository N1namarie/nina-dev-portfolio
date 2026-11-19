
import './App.css'
import OrbitalUniverse from './components/OrbitalUniverse'

function App() {
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
      <section id="work" className="section">
        <p className="eyebrow">02 / SELECTED WORK</p>
        <h2>BUILT WITH PURPOSE.</h2>
        <p>Project case studies coming next.</p>
      </section>

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

export default App
