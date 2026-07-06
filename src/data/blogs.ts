export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Project Management" | "AI in PMO" | "Customer Stories" | "Product Updates";
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
}

export const BLOGS_DATA: Record<string, BlogPost> = {
  "ai-agents-pmo-governance": {
    slug: "ai-agents-pmo-governance",
    title: "How AI Agents are Redefining PMO Governance in 2026",
    excerpt: "Discover how large language models are transitioning from simple text tools to complex, context-aware agents governing delivery compliance.",
    content: "The Role of PMO has traditionally been administrative. Project managers spent up to 40% of their schedules compiled status reports, chasing developers for updates, and drafting risk summaries. In 2026, AI-first systems are changing this pattern. By plugging agentic modules directly into source control, ticketing systems, and messaging layouts, companies can audit delivery velocity, quality metrics, and security rules continuously. Rather than waiting for monthly reviews, Governance AI models flag deviation risks in real-time, allowing teams to react before budget overruns occur. In this article, we outline PMPilot's architecture to solve this integration challenge.",
    category: "AI in PMO",
    date: "July 02, 2026",
    readTime: "5 min read",
    author: "Sai Teja",
    authorRole: "Senior Project Manager, Rezolve Ai"
  },
  "agile-scaling-scenarios": {
    slug: "agile-scaling-scenarios",
    title: "Scaling Agile: Common Pitfalls in Multi-Team Organizations",
    excerpt: "Transitioning to SAFe or LeSS frameworks often fails due to tool misalignment. Here is how to configure systems to retain organizational speed.",
    content: "Scaling scrum teams across hundreds of developers requires shifting organizational systems. Many transformations fail because they try to force rigid bureaucratic processes onto developer teams. The key is value stream optimization: aligning team topologies directly around product offerings. In this paper, we explore practical case studies of companies that successfully scaled Agile frameworks while keeping system overheads low.",
    category: "Project Management",
    date: "June 25, 2026",
    readTime: "7 min read",
    author: "Sai Teja",
    authorRole: "Senior Project Manager, Rezolve Ai"
  },
  "acme-corp-case-study": {
    slug: "acme-corp-case-study",
    title: "Case Study: How Acme Corp Reduced BRD Drafting Times by 90%",
    excerpt: "Learn how a global logistics leader integrated ProjectPilot AI to bootstrap complex software projects from user interviews in hours.",
    content: "Acme Corp, a Fortune 500 logistics provider, struggled with slow product development kickoffs. It typically took 6 to 8 weeks to gather stakeholder needs, draft Business Requirement Documents (BRDs), secure architectural approval, and configure JIRA backlogs. By deploying ProjectPilot AI, the product teams automated BRD structures directly from discovery notes and transcript imports. Over 90% of sprint tickets were generated with precise Gherkin criteria in one pass, decreasing the total kickoff cycle to less than 3 days.",
    category: "Customer Stories",
    date: "June 14, 2026",
    readTime: "4 min read",
    author: "Sai Teja",
    authorRole: "Senior Project Manager, Rezolve Ai"
  },
  "announcing-projectpilot-beta": {
    slug: "announcing-projectpilot-beta",
    title: "Announcing ProjectPilot AI Enterprise Beta release",
    excerpt: "Get a deep dive into the features, system configurations, and integration capabilities of our flagship requirement generation engine.",
    content: "We are thrilled to launch the active beta testing program for ProjectPilot AI. Engineered with deep contextual parsing and dynamic C4 system architecture builders, ProjectPilot AI serves as the primary gateway for PMO automation. In this update, we discuss key features, security architectures, and webhook setups.",
    category: "Product Updates",
    date: "May 28, 2026",
    readTime: "3 min read",
    author: "Sai Teja",
    authorRole: "Senior Project Manager, Rezolve Ai"
  }
};
