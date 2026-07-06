import { Zap, ShieldAlert, Cpu, BarChart3, Settings, LucideIcon } from "lucide-react";

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  isFlagship: boolean;
  comingSoon: boolean;
  iconName: "Zap" | "ShieldAlert" | "Cpu" | "BarChart3" | "Settings";
  features: ProductFeature[];
  useCases: string[];
  architectureOverview: string;
}

export const PRODUCTS_DATA: Record<string, ProductData> = {
  "projectpilot-ai": {
    slug: "projectpilot-ai",
    name: "ProjectPilot AI",
    tagline: "AI-driven project execution & BRD automation",
    description: "Generate requirements, design system architecture blueprints, and structure Jira tasks from docs in minutes.",
    longDescription: "ProjectPilot AI is our flagship platform designed to bridge the gap between business ideas and technical execution. By feeding raw documentation, email chains, or conversational transcripts into ProjectPilot AI, the system automatically builds complete Agile backlogs, detailed system container architecture blueprints, and compliance reports. It uses state-of-the-art context-aware Large Language Models specialized in software engineering and systems design, saving product managers and project managers hundreds of hours during setup phases.",
    isFlagship: true,
    comingSoon: false,
    iconName: "Zap",
    features: [
      {
        title: "BRD & PRD Autopilot Intake",
        description: "Parse large, unstructured files or paste brief notes to construct clean, hierarchical requirement modules."
      },
      {
        title: "Agile Story & Task Generator",
        description: "Generates user stories with precise Gherkin syntax acceptance criteria (Given/When/Then) and story point estimates."
      },
      {
        title: "C4 Container Blueprinting",
        description: "Drafts structural system layout proposals (C4 architecture L1/L2) and outlines database schema designs."
      },
      {
        title: "Jira & Azure DevOps Sync",
        description: "Direct bi-directional sync ensuring that changes in requirements are automatically reflected in your ticketing backlog."
      }
    ],
    useCases: [
      "Accelerating agency kickoffs from weeks to hours",
      "Drafting compliance-ready functional requirement documentation (FRDs)",
      "Automating the breakdown of product specs into developer tasks"
    ],
    architectureOverview: "Powered by PMPilot's contextual ingestion model, ProjectPilot AI maps variables through a vector database to verify architectural patterns against industry standards, exporting code bundles and webhook payloads asynchronously."
  },
  "governance-ai": {
    slug: "governance-ai",
    name: "Governance AI",
    tagline: "Automated delivery compliance & risk auditing",
    description: "Continuous auditing of project deliveries, tracking regulatory compliance and predicting delay risks.",
    longDescription: "Governance AI is designed for large enterprises and PMO executives who need high-assurance tracking of project deliverables. By analyzing system communications, commit logs, and status updates, Governance AI continuously audits active programs against regulatory compliances (SOC2, HIPAA, GDPR) and project milestones, identifying potential delays before they impact the bottom line.",
    isFlagship: false,
    comingSoon: true,
    iconName: "ShieldAlert",
    features: [
      {
        title: "Real-time Compliance Audits",
        description: "Maintains a live score of project compliance against ISO standards, regulatory rules, and inner-source company policies."
      },
      {
        title: "Predictive Risk Modeling",
        description: "Detects delivery drift patterns early by analyzing ticket history, comms channels, and code check-ins."
      },
      {
        title: "Automated Governance Reports",
        description: "Generates audit-ready governance logs and PDF reports for executive stakeholders automatically."
      }
    ],
    useCases: [
      "Enterprise compliance enforcement for regulated software development",
      "Early warning systems for multi-million dollar program delivery",
      "Executive governance dashboarding for multi-tenant projects"
    ],
    architectureOverview: "Governance AI operates via read-only hooks integrated into version control and messaging systems, processing audit telemetry through secure, anonymized classification vectors."
  },
  "pmo-intelligence": {
    slug: "pmo-intelligence",
    name: "PMO Intelligence",
    tagline: "Enterprise-wide PMO analytics & forecasting",
    description: "Consolidate multi-project data into central intelligence streams for portfolio resource allocation.",
    longDescription: "PMO Intelligence acts as the brain of your project management office. It ingests portfolio-wide execution data to provide predictive capacity planning, resource constraint forecasting, and budget burn rate projections, enabling leadership to make data-backed strategic decisions.",
    isFlagship: false,
    comingSoon: true,
    iconName: "Cpu",
    features: [
      {
        title: "Predictive Capacity Mapping",
        description: "Models team velocity against future backlogs to highlight resource constraints and hiring needs."
      },
      {
        title: "Budget & Burn Forecasting",
        description: "Tracks project spending and predicts cost overruns using historical execution burn rates."
      },
      {
        title: "Unified Executive Portfolio Stream",
        description: "Aggregates disparate team workspaces (Jira, Monday, Asana) into a single unified analytical dashboard."
      }
    ],
    useCases: [
      "Portfolio budget optimization across multiple business units",
      "Capacity forecasting and load-balancing for cross-functional teams",
      "Stakeholder reporting with predictive delivery dates"
    ],
    architectureOverview: "PMO Intelligence leverages advanced multi-tenant aggregation layers to compile and normalize metrics from third-party tools into a cohesive relational database structure."
  },
  "delivery-intelligence": {
    slug: "delivery-intelligence",
    name: "Delivery Intelligence",
    tagline: "Real-time velocity & engineering performance tracker",
    description: "Gain deep code repository analysis, tracking velocity trends and predicting developer bottlenecks.",
    longDescription: "Delivery Intelligence connects the dots between product management and software engineering. By analyzing commit graphs, pull request lifecycles, and build health metrics, it delivers actionable indicators on developer workload balance, velocity trends, and architecture complexity.",
    isFlagship: false,
    comingSoon: true,
    iconName: "BarChart3",
    features: [
      {
        title: "Commit & PR Lifecycle Analysis",
        description: "Measures times-to-merge, review feedback cycles, and code-base churn patterns."
      },
      {
        title: "Engineering Velocity Indicators",
        description: "Monitors overall velocity trends and highlights potential burnouts or structural impediments."
      },
      {
        title: "Technical Debt Tracking",
        description: "Audits architectural complexity markers to identify refactoring needs in hot paths."
      }
    ],
    useCases: [
      "Optimizing release management pipelines for agile teams",
      "Identifying process blockers in pull request reviews",
      "Balancing developer workload based on actual commit volumes"
    ],
    architectureOverview: "Delivery Intelligence connects via secure git webhooks, scanning metadata without storing sensitive codebase source code to maintain privacy."
  },
  "portfoliopilot-ai": {
    slug: "portfoliopilot-ai",
    name: "PortfolioPilot AI",
    tagline: "Strategic portfolio management & alignment",
    description: "Align business objectives with actual engineering tasks to ensure compliance and strategic fit.",
    longDescription: "PortfolioPilot AI helps C-suite executives map top-level OKRs and corporate strategy directly to the sprint backlogs of execution teams. It highlights strategic alignment gaps, misallocated engineering resources, and ROI estimates in real time.",
    isFlagship: false,
    comingSoon: true,
    iconName: "Settings",
    features: [
      {
        title: "OKR-to-Task Mapping",
        description: "Traces high-level strategic objectives down to individual epics and user stories."
      },
      {
        title: "Strategic Alignment Scoring",
        description: "Rates portfolio investments on actual developer time spent vs. target strategic targets."
      },
      {
        title: "Dynamic Scenario Builder",
        description: "Models portfolio-wide impacts of shifting strategic directions or relocating resources."
      }
    ],
    useCases: [
      "C-suite engineering investment optimization",
      "Strategic alignment audits of enterprise software programs",
      "OKRs mapping for scale-ups and enterprises"
    ],
    architectureOverview: "PortfolioPilot AI combines organizational graph models with actual work logs to build real-time alignment and investment views."
  }
};
