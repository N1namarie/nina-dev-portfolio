// Case-study content for every project, in one place.
//
// WHY a data file: the case-study page is one reusable template. Adding a
// project means adding an entry here, not copy-pasting a whole page.
// The `id` must match the id in ProjectGallery.tsx, or the card links to a 404.

export type LiveSite = {
  label: string
  url: string
}

export type CaseStudy = {
  name: string
  category: string
  headline: string
  description: string
  challenge: string
  solution: string
  technologies: string[]
  // Matches the gallery card background (visual-print, visual-growth, ...)
  visual: string
  // Public addresses only. Never an admin panel or anything with real customer data.
  // More than one site? Each gets its own tab in the live window.
  liveSites?: LiveSite[]
  // Honest one-liner shown above the live window.
  liveNote: string
}

export const caseStudies: Record<string, CaseStudy> = {
  copp: {
    name: 'CO Print Press',
    category: 'COMMERCE / OPERATIONS / SOFTWARE',
    headline: 'FROM ORDER TO PRODUCTION.',
    description:
      'A custom software platform designed around the real-world operations of a print business.',
    challenge:
      'Custom print orders involve artwork, specifications, payments, production stages, and customer communication. Coordinating those steps can create operational bottlenecks.',
    solution:
      'A unified ordering and management experience designed to bring customers, payments, and production workflows together.',
    technologies: ['Laravel', 'PHP', 'Stripe', 'Tailwind CSS'],
    visual: 'print',
    liveSites: [{ label: 'Storefront', url: 'https://coprintingpress.com' }],
    liveNote:
      'The real, live storefront. Browse freely. Orders placed here are real, so maybe don’t buy 500 banners by accident.',
  },
  runthe: {
    name: 'RunThe Ecosystem',
    category: 'PLATFORM / OPERATIONS / SAAS',
    headline: 'ONE ENGINE. THREE EXPERIENCES.',
    description:
      'A single software ecosystem powering RunTheJob, RunTheAgency, and RunTheBiz.',
    challenge:
      'Field service teams, agencies, and small businesses all juggle jobs, people, and money — but most tools force them into one generic shape or three disconnected apps.',
    solution:
      'One shared foundation with distinct experiences on top: field service management, agency management, and day-to-day business operations.',
    technologies: ['Laravel', 'Livewire', 'PHP'],
    visual: 'operations',
    // Parked until all three sites load reliably. Uncomment to go live:
    // liveSites: [
    //   { label: 'RunTheJob', url: 'https://runthejob.com' },
    //   { label: 'RunTheAgency', url: 'https://runtheagency.com' },
    //   { label: 'RunTheBiz', url: 'https://runthebiz.com' },
    // ],
    liveNote: 'Product in development. A sanitized demo with fictional data is on the way.',
  },
  frap: {
    name: 'FRAP',
    category: 'MEMBERSHIP / GROWTH / PLATFORM',
    headline: 'COMMUNITY THAT PAYS FOR ITSELF.',
    description:
      'A membership and business growth platform connecting community, operations, and recurring revenue.',
    challenge:
      'Membership programs tend to live across a payment tool, a spreadsheet, and a group chat. Growth stalls when nobody can see the whole picture.',
    solution:
      'One platform for members, recurring billing, and growth tracking, so the business side of community runs on a system instead of memory.',
    technologies: ['PHP', 'MySQL', 'Stripe'],
    visual: 'growth',
    liveNote: 'Product in development. A sanitized demo with fictional data is on the way.',
  },
  isolated: {
    name: 'Isolated Bodywork',
    category: 'CLIENT PROJECT / WEBSITE / APPLICATION',
    headline: 'CALM ON THE FRONT. ORGANIZED IN THE BACK.',
    description:
      'A client website paired with a business management application.',
    challenge:
      'A bodywork practice needs a site that feels as calm as the service — and a back office that keeps clients, scheduling, and operations from becoming a second job.',
    solution:
      'A client-facing website built alongside a Filament-powered management application for running the business.',
    technologies: ['Laravel', 'Filament', 'Tailwind CSS'],
    visual: 'bodywork',
    liveNote: 'Client project. Live preview coming once the public site address is confirmed.',
  },
  nlcs: {
    name: 'NLCS',
    category: 'CLIENT PROJECT / WORDPRESS / CONTRACTING',
    headline: 'BUILT FOR THE JOB SITE.',
    description:
      'Custom WordPress development for an insurance restoration and contracting business.',
    challenge:
      'Homeowners dealing with damage and insurance claims need fast answers and trust. A generic template doesn’t earn either.',
    solution:
      'A custom WordPress build focused on clear services, credibility, and getting homeowners to reach out.',
    technologies: ['WordPress', 'PHP', 'JavaScript'],
    visual: 'contracting',
    liveSites: [{ label: 'Website', url: 'https://nlcontractingservices.com' }],
    liveNote: 'The live client website, shown with permission.',
  },
  pool: {
    name: 'USA Pool Madness',
    category: 'DIGITAL PRODUCT / COMMUNITY / IN DEVELOPMENT',
    headline: 'EVERY TOURNAMENT. ONE TABLE.',
    description:
      'An evolving digital product for the competitive pool and billiards community.',
    challenge:
      'Pool tournaments and players are scattered across flyers, group pages, and word of mouth. Finding where to play shouldn’t require a detective.',
    solution:
      'A community platform bringing tournaments and players into one place — starting in Colorado and growing nationwide.',
    technologies: ['PHP', 'Product Design', 'Architecture'],
    visual: 'pool',
    liveSites: [{ label: 'Platform', url: 'https://usapoolmadness.com' }],
    liveNote:
      'Live and actively in development. Some features are still being built — what you see is what exists today.',
  },
}
