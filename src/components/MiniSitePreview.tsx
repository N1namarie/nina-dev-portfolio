import { useEffect, useRef, useState } from 'react'
import './MiniSitePreview.css'

type MiniSitePreviewProps = {
  url: string
  name: string
}

// The real site renders at a normal desktop width, then gets shrunk to fit
// the card. Same trick as zooming out on a screenshot, except it's live.
const DESKTOP_WIDTH = 1440

export default function MiniSitePreview({ url, name }: MiniSitePreviewProps) {
  const boxRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ scale: 0.25, height: 1120 })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const box = boxRef.current
    if (!box) return

    // Cards change width with the screen, so re-measure whenever they do.
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      const scale = width / DESKTOP_WIDTH
      setSize({ scale, height: height / scale })
    })

    observer.observe(box)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="mini-site" ref={boxRef} aria-hidden="true">
      <iframe
        src={url}
        title={`${name} live preview`}
        loading="lazy"
        tabIndex={-1}
        className={loaded ? 'is-loaded' : ''}
        onLoad={() => setLoaded(true)}
        // Look, don't touch: no forms, no popups, no taking over the tab.
        sandbox="allow-scripts allow-same-origin"
        referrerPolicy="strict-origin-when-cross-origin"
        style={{
          width: DESKTOP_WIDTH,
          height: size.height,
          transform: `scale(${size.scale})`,
        }}
      />
    </div>
  )
}
