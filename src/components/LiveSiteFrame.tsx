import { useState } from 'react'
import ProjectPreview from './ProjectPreview'
import './LiveSiteFrame.css'

type LiveSiteFrameProps = {
  projectId: string
  projectName: string
  visual: string
  url?: string
}

type Device = 'desktop' | 'mobile'

export default function LiveSiteFrame({ projectId, projectName, visual, url }: LiveSiteFrameProps) {
  // WHY wait for a click: a live website is heavy. Loading it only when
  // someone asks keeps the page (and the orbit) fast for everyone else.
  const [launched, setLaunched] = useState(false)
  const [device, setDevice] = useState<Device>('desktop')

  const hostname = url ? new URL(url).hostname : 'coming-soon.local'

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

        {url && (
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

            <a href={url} target="_blank" rel="noopener noreferrer">
              OPEN ↗
            </a>
          </div>
        )}
      </div>

      <div className="live-frame-screen">
        {launched && url ? (
          // sandbox WITHOUT allow-top-navigation: the framed site can run
          // normally, but it can't hijack the whole portfolio tab.
          <iframe
            src={url}
            title={`${projectName} live website`}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <div className={`live-frame-poster visual-${visual}`}>
            <div className="visual-grid" />
            <ProjectPreview projectId={projectId} />

            <div className="live-frame-cta">
              {url ? (
                <button type="button" onClick={() => setLaunched(true)}>
                  ▶ LAUNCH LIVE SITE
                </button>
              ) : (
                <p>Well, this is awkward. The live demo is still in the oven.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
