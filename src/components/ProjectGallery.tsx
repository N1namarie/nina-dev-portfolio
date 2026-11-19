
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProjectGallery.css'

import ProjectPreview from './ProjectPreview'

type Category = 'All' | 'Platforms' | 'Websites' | 'Experiments'

type Project = {
  id: string
  number: string
  name: string
  category: Exclude<Category, 'All'>
  description: string
  technologies: string[]
  status: string
  visual: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 'copp',
    number: '01',
    name: 'CO Print Press',
    category: 'Platforms',
    description:
      'Custom print ordering and production management. Built around the operational needs of a real print business.',
    technologies: ['Laravel', 'PHP', 'Stripe', 'Tailwind'],
    status: 'Product development',
    visual: 'print',
    featured: true,
  },
  {
    id: 'runthe',
    number: '02',
    name: 'RunThe Ecosystem',
    category: 'Platforms',
    description:
      'One software ecosystem with distinct experiences for field service, agency management, and business operations.',
    technologies: ['Laravel', 'Livewire', 'PHP'],
    status: 'Product development',
    visual: 'operations',
    featured: true,
  },
  {
    id: 'frap',
    number: '03',
    name: 'FRAP',
    category: 'Platforms',
    description:
      'A membership and business growth platform connecting community, operations, and recurring revenue.',
    technologies: ['PHP', 'MySQL', 'Stripe'],
    status: 'Product development',
    visual: 'growth',
  },
  {
    id: 'isolated',
    number: '04',
    name: 'Isolated Bodywork',
    category: 'Websites',
    description:
      'Client-focused digital experience and business management application.',
    technologies: ['Laravel', 'Filament', 'Tailwind'],
    status: 'Client project',
    visual: 'bodywork',
  },
  {
    id: 'nlcs',
    number: '05',
    name: 'NLCS',
    category: 'Websites',
    description:
      'Custom WordPress development for a contracting and home services business.',
    technologies: ['WordPress', 'PHP', 'JavaScript'],
    status: 'Client project',
    visual: 'contracting',
  },
  {
    id: 'pool',
    number: '06',
    name: 'USA Pool Madness',
    category: 'Experiments',
    description:
      'An evolving digital product concept centered on competitive pool.',
    technologies: ['Product Design', 'Architecture'],
    status: 'Planning / development',
    visual: 'pool',
  },
]

const filters: Category[] = [
  'All',
  'Platforms',
  'Websites',
  'Experiments',
]

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<Category>('All')

  const visibleProjects = projects.filter(
    (project) =>
      activeFilter === 'All' || project.category === activeFilter
  )

  return (
    <section id="work" className="projects-section">
      <div className="projects-heading">
        <div>
          <p className="eyebrow">02 / SELECTED WORK</p>
          <h2>
            BUILT WITH <span>PURPOSE.</span>
          </h2>
        </div>

        <p className="projects-intro">
          Real business problems. Real product thinking.
          Software built to make complicated things work better.
        </p>
      </div>

      <div className="project-filters" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={
              activeFilter === filter
                ? 'project-filter active'
                : 'project-filter'
            }
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <article
            className={`project-card ${
              project.featured ? 'project-featured' : ''
            }`}
            key={project.id}
          >
            
            <div className={`project-visual visual-${project.visual}`}>
  <div className="visual-grid" />
  <ProjectPreview projectId={project.id} />
  <span className="project-number">{project.number} / 06</span>
</div>

            <div className="project-info">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.status}</span>
              </div>

              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="project-bottom">
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <Link
                  className="project-link"
                  to={`/projects/${project.id}`}
                  aria-label={`View the ${project.name} case study`}
                >
                  CASE STUDY ↗
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="projects-footer">
        MORE SYSTEMS IN THE WORKS. THE BUILD NEVER REALLY STOPS.
      </p>
    </section>
  )
}
