export interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  methodology: string[];
  benefits: string[];
  deliverables: string[];
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  "pmo-setup": {
    slug: "pmo-setup",
    name: "PMO Setup & Optimization",
    tagline: "Establish a high-performance PMO configured for modern delivery metrics",
    description: "Design, deploy, and refine project management offices that balance speed with structural compliance.",
    longDescription: "A modern PMO must move beyond administrative report gathering and become a strategic enabler of speed and quality. PMPilot establishes, audits, and upgrades Enterprise PMOs by blending traditional frameworks (PMBOK) with Agile structures and advanced AI integrations. We design dashboard governance, set up standard workflows, and train internal teams to maintain high execution metrics.",
    methodology: [
      "Discovery & Maturity Assessment: Audit current PMO practices, tooling setups, and bottleneck areas.",
      "Custom Governance Design: Establish tailored reporting rhythms, KPIs, and tool schemas.",
      "Deployment & Change Management: Set up templates, configure tools, and run training bootcamps.",
      "AI Integration & Handoff: Embed automated intake and delivery reporting plugins, completing transition."
    ],
    benefits: [
      "Up to 30% reduction in program delivery overhead costs.",
      "Unified visibility across multi-platform teams (Jira, ADO, Monday).",
      "Actionable reporting that executive committees actually read."
    ],
    deliverables: [
      "PMO Charter & Operating Guidelines",
      "Executive Dashboard Configuration Plans",
      "Standard Project Lifecycle Checklists"
    ]
  },
  "pm-consulting": {
    slug: "pm-consulting",
    name: "Project Management Consulting",
    tagline: "Elite project managers to lead your high-value programs to completion",
    description: "On-demand Project Managers and Directors with domain expertise to govern complex deployments.",
    longDescription: "High-stakes initiatives need steady leadership. PMPilot provides highly experienced, certified Program and Project Managers (PMP, PgMP) to oversee enterprise-wide systems integrations, infrastructure shifts, or product rollouts. We bring rigour, transparent risk monitoring, and direct execution strategies.",
    methodology: [
      "Project Kickoff & Alignment: Define scope limits, success parameters, and team roles.",
      "Active Execution Governance: Weekly risk logs, critical path checks, and stakeholder updates.",
      "Continuous Optimization: Iterating timelines based on engineering speed metrics.",
      "Handoff & Retrospective: Orderly archive of assets, learnings, and transition reports."
    ],
    benefits: [
      "95%+ on-time, on-budget delivery rates for sponsored projects.",
      "Neutral risk tracking without organizational bias.",
      "Seamless resource management across third-party suppliers."
    ],
    deliverables: [
      "Detailed Project Master Schedule",
      "Comprehensive Risk Register & Mitigation Plans",
      "Monthly Cost & Resource Burn Sheets"
    ]
  },
  "agile-transformation": {
    slug: "agile-transformation",
    name: "Agile & SAFe Transformation",
    tagline: "Scale agile methodologies across hundreds of engineering resources",
    description: "Unlock organizational speed by transitioning from waterfall silos to scaled agile teams.",
    longDescription: "Scaling agile is not just about organizing daily standups; it requires shifting mindset, alignment, and performance targets. We lead Agile transformations at scale (using SAFe, LeSS, or Spotify models), redesigning corporate workflows, training agile coaches, and helping product groups deliver value increments continuously.",
    methodology: [
      "Value Stream Identification: Analyze how value is built and identify organizational silos.",
      "Transformation Roadmap Design: Outline training programs, team structures, and sprint patterns.",
      "Launch Planning & Coaching: Guide initial teams through Scrum/Kanban practices and PI Plannings.",
      "Continuous Scaling: Expanding agile models to wider portfolios and auditing performance."
    ],
    benefits: [
      "Faster time-to-market for software products (up to 40% improvement).",
      "Improved cross-team communication and reduced dependency delays.",
      "Elevated employee engagement and clear ownership definitions."
    ],
    deliverables: [
      "Value Stream Map & Team Topology Design",
      "Agile Playbook customized for your organization",
      "Scrum Master & Product Owner Training Kits"
    ]
  },
  "digital-transformation": {
    slug: "digital-transformation",
    name: "Digital Transformation Consulting",
    tagline: "Modernize legacy systems, operations, and business capabilities",
    description: "Navigate digital growth through legacy system upgrades, cloud migrations, and modern tools.",
    longDescription: "To remain competitive, companies must modernize their operational backbones. PMPilot guides legacy enterprises through cloud migrations, core product modernization, and custom workflow development. We manage vendor selection, roadmap design, and execution audits.",
    methodology: [
      "Legacy Audit & Gap Analysis: Review current technology architecture, licensing, and operational bottlenecks.",
      "Digital Roadmap Definition: Map step-by-step modernization options with calculated ROI projections.",
      "Execution Management: Oversee product selection, data migrations, and integrations.",
      "Operations Handoff: Secure systems transition, documentation, and capability checks."
    ],
    benefits: [
      "Decreased tech debt footprint and reduced legacy license spends.",
      "Improved agility through cloud-native architectures.",
      "Self-reliant teams capable of maintaining upgraded setups."
    ],
    deliverables: [
      "Modernization Strategy Blueprint",
      "Vendor RFP Sheets & Evaluation Scorecards",
      "Transition Architecture Layout Drawings"
    ]
  },
  "delivery-governance": {
    slug: "delivery-governance",
    name: "Delivery Governance & Audit",
    tagline: "Unbiased audits to verify software quality, scope compliance, and vendors",
    description: "Independent reviews to verify that delivery partners are meeting contractual standards.",
    longDescription: "Ensure your software development partners are actually writing clean, secure code and meeting sprint requirements. PMPilot performs objective audits of source repositories, ticket pipelines, and delivery budgets, bringing transparency to outsourcing contracts.",
    methodology: [
      "Audit Ingestion: Plug metrics scrapers into repositories, JIRA, and timesheets.",
      "Criteria Assessment: Rate execution against contracts, engineering velocity, and security rules.",
      "Findings Compilation: Gather evidence on bugs, technical debt, and team utilization.",
      "Remediation Strategy: Set clear, actionable steps for delivery partners to fix gaps."
    ],
    benefits: [
      "Total transparency on external supplier efficiency.",
      "Identification of quality shortcuts and security vulnerabilities.",
      "Data-backed negotiation power during renewal phases."
    ],
    deliverables: [
      "Independent Project Health & Quality Report",
      "Security & Code-Base Churn Audits",
      "Vendor Performance Evaluation Scorecard"
    ]
  },
  "business-analysis": {
    slug: "business-analysis",
    name: "Business Analysis & BRD Prep",
    tagline: "Translate corporate ideas into rock-solid technical requirement specs",
    description: "Elite business analysts to write comprehensive BRDs, user stories, and specs.",
    longDescription: "Vague specifications are the primary cause of project failure. PMPilot's business analysts run structured discovery workshops to document requirements in detail. We output compliance-ready Business Requirement Documents (BRDs), user journey mappings, and developer specifications.",
    methodology: [
      "Stakeholder Discovery: Run workshops to outline business needs, workflows, and goals.",
      "Specs Structuring: Organize requirements into detailed, functional components.",
      "Validation Loops: Review specifications with tech teams to confirm feasibility.",
      "Sign-off & Backlog Prep: Hand off clean, ready-to-develop requirement modules."
    ],
    benefits: [
      "Elimination of scope drift through precise upfront definitions.",
      "Clear developer direction, reducing questions during sprints.",
      "Faster sign-offs by keeping stakeholders aligned early."
    ],
    deliverables: [
      "Complete Business Requirements Document (BRD)",
      "User Journey & System Interaction Flowcharts",
      "Acceptance Criteria Matrix"
    ]
  },
  "project-rescue": {
    slug: "project-rescue",
    name: "Project Rescue & Recovery",
    tagline: "Turn troubled projects around before they exceed budget limits",
    description: "Rapid deployment of recovery experts to stabilize, replan, and deliver projects.",
    longDescription: "When a critical project is behind schedule, over budget, and losing stakeholder confidence, traditional management changes are insufficient. PMPilot brings project rescue frameworks. We audit the system, clean up backlogs, redefine achievable scope, and stabilize delivery teams to push cross the line.",
    methodology: [
      "48-Hour Rapid Assessment: Audit source repositories, backlogs, budgets, and relationships.",
      "Stabilization & Scope Trim: Cut non-essential deliverables and stabilize core work items.",
      "Execution Reboot: Clear roadmap, Daily War-Room governance, and close developer tracking.",
      "Sustainable Transition: Move management back to internal teams once stabilized."
    ],
    benefits: [
      "Stops project budget bleeding within the first 10 days.",
      "Restores alignment between sponsors and tech teams.",
      "Guaranteed path to MVP or critical release targets."
    ],
    deliverables: [
      "Project Recovery & Re-baselining Plan",
      "Triage Scope Cut List",
      "Stabilized Release Schedule Roadmap"
    ]
  }
};
