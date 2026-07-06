import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoWizard from "@/components/DemoWizard";
import WorkflowPreview from "@/components/WorkflowPreview";
import { 
  ArrowRight, ShieldAlert, Sparkles, Building2, Terminal, ArrowUpRight, 
  Workflow, GitBranch, Cpu, Compass, Layers, CheckCircle2 
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-mesh-grid">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold mb-6 animate-fade-in">
              <Sparkles className="h-3.5 w-3.5" />
              Announcing ProjectPilot AI Beta
            </div>

            {/* Heading */}
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-brand max-w-4xl mx-auto leading-[1.1] mb-6">
              Enterprise Project Intelligence, <br />
              <span className="font-serif italic text-gradient font-normal">Accelerated by AI</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-text-secondary-brand max-w-2xl mx-auto leading-relaxed mb-8">
              Transform business specifications, BRDs, and meeting transcripts into sprint-ready Agile backlogs, architecture blueprints, and delivery guardrails in minutes.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link
                href="https://portal.pmpilot.in"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:opacity-95 rounded-xl shadow-lg shadow-primary/15 hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Start Free Trial
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-text-brand bg-white border border-border-brand hover:bg-background-brand rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
              >
                Book Demo
                <ArrowRight className="h-4 w-4 text-text-secondary-brand" />
              </Link>
            </div>

            {/* Interactive Demo Simulation Section */}
            <div className="relative w-full max-w-4xl mx-auto mb-20">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/15 blur-3xl opacity-60 -z-10 rounded-full" />
              <div className="text-xs font-semibold uppercase tracking-widest text-text-secondary-brand/85 mb-4 text-center">
                Interactive Demonstration - Try it yourself
              </div>
              <DemoWizard />
            </div>
          </div>
        </section>

        {/* Company Vision & Messaging Section */}
        <section className="py-16 md:py-20 bg-white border-y border-border-brand relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-5 text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider">
                  <Building2 className="h-4 w-4" />
                  PMPilot Company Brand
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-text-brand">
                  Governing Delivery Intelligence for the AI Era
                </h2>
                <p className="text-sm text-text-secondary-brand leading-relaxed">
                  PMPilot is an AI-first software and consulting company building enterprise-grade tools for Project Management, PMO setup, Delivery Governance, and Intelligent Automation.
                </p>
                <p className="text-sm text-text-secondary-brand leading-relaxed">
                  We empower PMO executives, product managers, and engineering leaders to run compliance-proof projects with predictable timelines. Our ecosystem supports both modern AI agent workforces and traditional advisory structures.
                </p>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-primary/90 transition-colors cursor-pointer"
                  >
                    Learn more about our vision
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Right: Grid of Product Placeholders */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl border border-border-brand bg-background-brand/50 hover:bg-white hover:shadow-premium transition-all duration-300">
                  <span className="text-[10px] uppercase font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Flagship</span>
                  <h3 className="text-sm font-bold text-text-brand mt-2">ProjectPilot AI</h3>
                  <p className="text-xs text-text-secondary-brand mt-1.5">
                    Generate requirements, design system architecture blueprints, and structure Jira tasks from docs.
                  </p>
                  <Link href="/products/projectpilot-ai" className="text-xs font-semibold text-primary inline-flex items-center gap-1 mt-3.5 hover:underline">
                    View Product Page <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>

                <div className="p-5 rounded-2xl border border-border-brand bg-background-brand/50 hover:bg-white hover:shadow-premium transition-all duration-300">
                  <span className="text-[10px] uppercase font-bold text-text-secondary-brand bg-gray-100 px-2 py-0.5 rounded-full">Coming Soon</span>
                  <h3 className="text-sm font-bold text-text-brand mt-2">Governance AI</h3>
                  <p className="text-xs text-text-secondary-brand mt-1.5">
                    Continuous auditing of project deliveries, tracking regulatory compliance and predicting delay risks.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-border-brand bg-background-brand/50 hover:bg-white hover:shadow-premium transition-all duration-300">
                  <span className="text-[10px] uppercase font-bold text-text-secondary-brand bg-gray-100 px-2 py-0.5 rounded-full">Coming Soon</span>
                  <h3 className="text-sm font-bold text-text-brand mt-2">PMO Intelligence</h3>
                  <p className="text-xs text-text-secondary-brand mt-1.5">
                    Consolidate multi-project data into central intelligence streams for portfolio resource allocation.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-border-brand bg-background-brand/50 hover:bg-white hover:shadow-premium transition-all duration-300">
                  <span className="text-[10px] uppercase font-bold text-text-secondary-brand bg-gray-100 px-2 py-0.5 rounded-full">Coming Soon</span>
                  <h3 className="text-sm font-bold text-text-brand mt-2">Delivery Intelligence</h3>
                  <p className="text-xs text-text-secondary-brand mt-1.5">
                    Gain deep code repository analysis, tracking velocity trends and predicting developer bottlenecks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Workflow Preview Section */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider mb-3">
              <Workflow className="h-4 w-4" />
              INTELLIGENT EXECUTION TIMELINE
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-text-brand mb-4">
              How PMPilot Transforms Project Execution
            </h2>
            <p className="text-sm text-text-secondary-brand max-w-2xl mx-auto leading-relaxed mb-12">
              Our advanced project modeling engines read, align, build, and sync specs securely across standard toolstacks. Here is how it functions.
            </p>

            <WorkflowPreview />
          </div>
        </section>

        {/* Core Capabilities Grid (Trust & Security) */}
        <section className="py-16 md:py-20 bg-white border-t border-border-brand relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">ENTERPRISE-GRADE PRINCIPLES</span>
            <h2 className="text-3xl font-bold tracking-tight text-text-brand mt-2 mb-12">
              Engineered for Enterprise Compliance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl border border-border-brand bg-background-brand/10 text-left hover:shadow-md transition-all duration-300">
                <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Terminal className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-text-brand">C4 Modeling & Visual Diagrams</h3>
                <p className="text-xs text-text-secondary-brand mt-2 leading-relaxed">
                  Generates technical design drawings, database diagrams, and API routing structures aligned to C4 guidelines.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border-brand bg-background-brand/10 text-left hover:shadow-md transition-all duration-300">
                <div className="h-10 w-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-4">
                  <GitBranch className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-text-brand">Bi-directional Tools Sync</h3>
                <p className="text-xs text-text-secondary-brand mt-2 leading-relaxed">
                  Syncs directly with JIRA, GitHub, GitLab, and Azure DevOps, updating tasks automatically when requirements change.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border-brand bg-background-brand/10 text-left hover:shadow-md transition-all duration-300">
                <div className="h-10 w-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-text-brand">Verified Agile Compliance</h3>
                <p className="text-xs text-text-secondary-brand mt-2 leading-relaxed">
                  All stories feature Gherkin acceptance criteria (Given-When-Then) and automatically generated test plan definitions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
