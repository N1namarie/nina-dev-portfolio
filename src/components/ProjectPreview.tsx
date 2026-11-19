
import './ProjectPreview.css'

type ProjectPreviewProps = {
  projectId: string
}

const previewData: Record<string, {
  label: string
  heading: string
  metrics: { label: string; value: string }[]
  rows: { name: string; status: string }[]
}> = {
  copp: {
    label: 'PRINT OPERATIONS',
    heading: 'Production Queue',
    metrics: [
      { label: 'Open Orders', value: '24' },
      { label: 'In Production', value: '08' },
    ],
    rows: [
      { name: 'Custom Apparel', status: 'Printing' },
      { name: 'Business Cards', status: 'Proofing' },
      { name: 'Event Banners', status: 'Ready' },
    ],
  },
  runthe: {
    label: 'BUSINESS OPERATIONS',
    heading: 'Operations Center',
    metrics: [
      { label: 'Active Jobs', value: '18' },
      { label: 'Teams', value: '06' },
    ],
    rows: [
      { name: 'Field Service', status: 'Active' },
      { name: 'Agency Projects', status: 'Review' },
      { name: 'Business Tasks', status: 'Scheduled' },
    ],
  },
  frap: {
    label: 'MEMBERSHIP PLATFORM',
    heading: 'Community Overview',
    metrics: [
      { label: 'Members', value: '128' },
      { label: 'Sessions', value: '12' },
    ],
    rows: [
      { name: 'New Member', status: 'Joined' },
      { name: 'Growth Workshop', status: 'Upcoming' },
      { name: 'Member Directory', status: 'Updated' },
    ],
  },
  isolated: {
    label: 'CLIENT EXPERIENCE',
    heading: 'Booking Overview',
    metrics: [
      { label: 'Appointments', value: '16' },
      { label: 'Services', value: '05' },
    ],
    rows: [
      { name: 'New Booking', status: 'Confirmed' },
      { name: 'Client Intake', status: 'Complete' },
      { name: 'Availability', status: 'Open' },
    ],
  },
  nlcs: {
    label: 'CONTRACTING WEBSITE',
    heading: 'Service Requests',
    metrics: [
      { label: 'Inquiries', value: '14' },
      { label: 'Services', value: '09' },
    ],
    rows: [
      { name: 'Roofing', status: 'Available' },
      { name: 'Restoration', status: 'Available' },
      { name: 'Emergency Service', status: '24/7' },
    ],
  },
  pool: {
    label: 'PRODUCT CONCEPT',
    heading: 'Pool Madness',
    metrics: [
      { label: 'Game Modes', value: '03' },
      { label: 'Prototype', value: '01' },
    ],
    rows: [
      { name: 'Player Profiles', status: 'Concept' },
      { name: 'Tournament Flow', status: 'Planning' },
      { name: 'Game Experience', status: 'Design' },
    ],
  },
}

export default function ProjectPreview({
  projectId,
}: ProjectPreviewProps) {
  const preview = previewData[projectId]

  if (!preview) return null

  return (
    <div className={`product-preview preview-${projectId}`}>
        
      <div className="preview-topbar">
        <span className="preview-light" />
        <span className="preview-light" />
        <span className="preview-light" />
        <span className="preview-label">{preview.label}</span>
      </div>

      <div className="preview-body">
        <aside className="preview-sidebar">
          <div className="preview-brand">N/DEV</div>
          <span />
          <span />
          <span />
          <span />
        </aside>

        <div className="preview-main">
          <div className="preview-heading">{preview.heading}</div>

          <div className="preview-metrics">
            {preview.metrics.map((metric) => (
              <div className="preview-metric" key={metric.label}>
                <small>{metric.label}</small>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>

          <div className="preview-list">
            {preview.rows.map((row) => (
              <div className="preview-row" key={row.name}>
                <span>{row.name}</span>
                <em>{row.status}</em>
              </div>
            ))}
          </div>
        </div>
      </div>

      <span className="preview-demo-label">
        CONCEPTUAL PREVIEW / SAMPLE DATA
      </span>
    </div>
  )
}
