
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import LiveSiteFrame from './LiveSiteFrame'
import { caseStudies } from '../data/caseStudies'
import './ProjectCaseStudy.css'

export default function ProjectCaseStudy() {
  const { projectId } = useParams<{ projectId: string }>()
  const project = projectId ? caseStudies[projectId] : undefined

  // Coming from halfway down the homepage? Start the story at the beginning.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  if (!project) {
    return (
      <main className="case-study not-found">
        <h1>404 / PROJECT NOT FOUND</h1>
        <p>Well, this is awkward. Even the code has limits.</p>
        <Link to="/#work">← BACK TO PROJECTS</Link>
      </main>
    )
  }

  return (
    <main className="case-study">
      <nav className="case-nav">
        <Link to="/" className="case-logo">N/DEV.</Link>
        <Link to="/#work" className="case-back">
          ← BACK TO PROJECTS
        </Link>
      </nav>

      <section className="case-hero">
        <p className="case-eyebrow">{project.category}</p>

        <h1>{project.headline}</h1>

        <div className="case-hero-bottom">
          <p>{project.description}</p>
          <span className="case-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </div>
      </section>

      <section className="case-live">
        <span>01 / SEE IT LIVE</span>
        <h2>THE REAL THING.</h2>
        <p>{project.liveNote}</p>

        <LiveSiteFrame
          projectId={projectId!}
          projectName={project.name}
          visual={project.visual}
          url={project.liveUrl}
        />
      </section>

      <section className="case-details">
        <div className="case-detail">
          <span>02 / THE CHALLENGE</span>
          <h2>THE PROBLEM.</h2>
          <p>{project.challenge}</p>
        </div>

        <div className="case-detail">
          <span>03 / THE SOLUTION</span>
          <h2>THE APPROACH.</h2>
          <p>{project.solution}</p>
        </div>
      </section>

      <section className="case-stack">
        <span>04 / THE TECHNOLOGY</span>
        <h2>UNDER THE HOOD.</h2>

        <div className="case-tech">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      <footer className="case-footer">
        <Link to="/#work">← EXPLORE MORE WORK</Link>
        <span>BUILT WITH PURPOSE. AND A LITTLE ATTITUDE.</span>
      </footer>
    </main>
  )
}
