import { useState } from 'react'
import ProjectPreview from './ProjectPreview'
import type { LiveSite } from '../data/caseStudies'
import './LiveSiteFrame.css'

type LiveSiteFrameProps = {
  projectId: string
  projectName: string
  visual: string
  sites?: LiveSite[]
}

type Device = 'desktop' | 'mobile'

export default function LiveSiteFrame({ projectId, projectName, visual, sites = [] }: LiveSiteFrameProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [device, setDevice] = useState<Device>('desktop')
  // Which URL has finished loading. Storing the URL (not true/false) means
  // switching tabs automatically shows the poster again until the new site arrives.
  const [loadedUrl, setLoadedUrl] = useState<string | null>(null)

  const activeSite = sites[activeIndex]
  const hostname = activeSite ? new URL(activeSite.url).hostname : 'coming-soon.local'

  return (
    <div className={`live-frame live-frame-${device}`}>
      <div className="live-frame-bar">
        <span className="live-frame-lights" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>

        <span className="live-frame-address">
          <span aria-hidden="true">🔒</span> {hostname}
        </span>

        {activeSite && (
          <div className="live-frame-actions">
            <div className="live-frame-devices" role="group" aria-label="Preview size">
              {(['desktop', 'mobile'] as Device[]).map((option) => (
                <button
                  key={option}
                  type="button"
                  className={device === option ? 'active' : ''}
                  aria-pressed={device === option}
                  onClick={() => setDevice(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <a href={activeSite.url} target="_blank" rel="noopener noreferrer">
              OPEN ↗
            </a>
          </div>
        )}
      </div>

      {sites.length > 1 && (
        <div className="live-frame-tabs" role="tablist" aria-label={`${projectName} sites`}>
          {sites.map((site, index) => (
            <button
              key={site.url}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              className={index === activeIndex ? 'active' : ''}
              onClick={() => setActiveIndex(index)}
            >
              {site.label}
            </button>
          ))}
        </div>
      )}

      <div className="live-frame-screen">
        {/* The poster sits underneath, so nobody stares at a blank white box while the site loads. */}
        <div className={`live-frame-poster visual-${visual}`}>
          <div className="visual-grid" />
          <ProjectPreview projectId={projectId} />

          {!activeSite && (
            <div className="live-frame-cta">
              <p>Well, this is awkward. The live demo is still in the oven.</p>
            </div>
          )}
        </div>

        {activeSite && (
          // sandbox WITHOUT allow-top-navigation: the framed site runs normally,
          // but it can't hijack the whole portfolio tab.
          <iframe
            key={activeSite.url}
            src={activeSite.url}
            title={`${projectName}: ${activeSite.label} live website`}
            className={loadedUrl === activeSite.url ? 'is-loaded' : ''}
            onLoad={() => setLoadedUrl(activeSite.url)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </div>
    </div>
  )
}
