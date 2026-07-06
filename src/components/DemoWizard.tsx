"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Upload, Sparkles, CheckCircle2, Play, RefreshCw, FileText, ArrowRight,
  Database, ShieldCheck, Terminal, Layers, FileCode, Check, Loader2, Info
} from "lucide-react";

type WizardStep = {
  id: number;
  label: string;
  status: "pending" | "working" | "done";
};

const INITIAL_STEPS: WizardStep[] = [
  { id: 1, label: "Reading Requirements", status: "pending" },
  { id: 2, label: "Understanding Business Context", status: "pending" },
  { id: 3, label: "Identifying Functional Requirements", status: "pending" },
  { id: 4, label: "Creating Project Summary", status: "pending" },
  { id: 5, label: "Generating FRD", status: "pending" },
  { id: 6, label: "Planning Agile Sprints", status: "pending" },
  { id: 7, label: "Designing Solution Architecture", status: "pending" },
  { id: 8, label: "Creating Epics", status: "pending" },
  { id: 9, label: "Generating User Stories", status: "pending" },
  { id: 10, label: "Building Tasks", status: "pending" },
];

export default function DemoWizard() {
  const [activeTab, setActiveTab] = useState<"upload" | "describe">("upload");
  const [flowState, setFlowState] = useState<"input" | "processing" | "results">("input");
  const [prompt, setPrompt] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [steps, setSteps] = useState<WizardStep[]>(INITIAL_STEPS);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [resultsTab, setResultsTab] = useState<"summary" | "backlog" | "architecture">("summary");

  // Mock processing animation
  useEffect(() => {
    if (flowState !== "processing") return;

    setProgress(0);
    setSteps(INITIAL_STEPS.map((s, idx) => ({ ...s, status: idx === 0 ? "working" : "pending" })));
    setCurrentStepIndex(0);

    const duration = 7500; // 7.5 seconds total
    const intervalTime = 75;
    const stepsCount = INITIAL_STEPS.length;
    const progressPerStep = 100 / stepsCount;
    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += (100 / (duration / intervalTime));
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        setTimeout(() => {
          setFlowState("results");
        }, 600);
      }
      setProgress(Math.round(currentProgress));

      // Calculate which step is active
      const activeIdx = Math.min(
        Math.floor((currentProgress / 100) * stepsCount),
        stepsCount - 1
      );

      setSteps((prev) =>
        prev.map((step, idx) => {
          if (idx < activeIdx) {
            return { ...step, status: "done" };
          } else if (idx === activeIdx) {
            return { ...step, status: currentProgress === 100 ? "done" : "working" };
          } else {
            return { ...step, status: "pending" };
          }
        })
      );
      setCurrentStepIndex(activeIdx);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [flowState]);

  const handleStartGenerate = () => {
    if (activeTab === "describe" && !prompt.trim()) return;
    if (activeTab === "upload" && uploadedFiles.length === 0) {
      setUploadedFiles(["PRD_v1.2_ECommerce.docx"]);
    }
    setFlowState("processing");
  };

  const handlePresetSelect = (text: string) => {
    setPrompt(`Build a modern ${text} with user authorization, payment processing, product catalogs, and an administration dashboard.`);
  };

  const resetFlow = () => {
    setFlowState("input");
    setPrompt("");
    setUploadedFiles([]);
    setProgress(0);
    setSteps(INITIAL_STEPS);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {/* State 1: Input Screen */}
        {flowState === "input" && (
          <motion.div
            key="input"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="bg-white rounded-3xl border border-border-brand shadow-premium p-6 sm:p-8"
          >
            {/* Header Tabs */}
            <div className="flex justify-center border-b border-border-brand pb-4 mb-6">
              <div className="flex bg-background-brand p-1 rounded-xl">
                <button
                  onClick={() => setActiveTab("upload")}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    activeTab === "upload"
                      ? "bg-white text-primary shadow-sm"
                      : "text-text-secondary-brand hover:text-text-brand"
                  }`}
                >
                  Upload documents
                </button>
                <button
                  onClick={() => setActiveTab("describe")}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    activeTab === "describe"
                      ? "bg-white text-primary shadow-sm"
                      : "text-text-secondary-brand hover:text-text-brand"
                  }`}
                >
                  Describe your project
                </button>
              </div>
            </div>

            {/* Tab Panels */}
            {activeTab === "upload" ? (
              <div className="space-y-4">
                <div
                  onClick={handleStartGenerate}
                  className="border-2 border-dashed border-border-brand hover:border-primary/50 transition-colors rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer bg-background-brand/50 group"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <Upload className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-text-brand">Drop files here or click to upload</h3>
                  <p className="mt-1 text-xs text-text-secondary-brand text-center max-w-xs">
                    BRD, DOCX, PDF, XLSX, PPTX, PNG, JPG - up to 25MB each
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  {["BRD", "Word", "PDF", "Excel", "PowerPoint", "Images", "Notes"].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setUploadedFiles([`Sample_${tag}_Specs.pdf`]);
                        setFlowState("processing");
                      }}
                      className="text-xs font-semibold px-3.5 py-1.5 rounded-lg border border-border-brand bg-white hover:bg-background-brand transition-colors text-text-secondary-brand hover:text-text-brand cursor-pointer"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative">
                  <textarea
                    rows={4}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe your project or paste your business requirements..."
                    className="w-full rounded-2xl border border-border-brand p-4 text-sm focus:outline-none focus:border-primary bg-background-brand/35 text-text-brand placeholder:text-text-secondary-brand/60"
                  />
                  <div className="absolute right-3 bottom-3 flex items-center gap-1.5">
                    <button
                      onClick={handleStartGenerate}
                      disabled={!prompt.trim()}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-md ${
                        prompt.trim()
                          ? "bg-gradient-to-r from-primary to-secondary text-white hover:opacity-95 cursor-pointer"
                          : "bg-gray-100 text-text-secondary-brand/40 border border-border-brand/40 cursor-not-allowed"
                      }`}
                    >
                      Generate Project
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {["SaaS MVP", "Banking Portal", "Marketplace", "Internal Ops Tool"].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => handlePresetSelect(preset)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-border-brand bg-white hover:bg-background-brand transition-colors text-text-secondary-brand hover:text-text-brand cursor-pointer"
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Info Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border-brand/60 pt-6">
              <div className="flex gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-brand">10x faster kickoffs</h4>
                  <p className="text-[10px] text-text-secondary-brand mt-0.5">
                    From idea to sprint-ready backlog in one pass.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-9 w-9 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <Database className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-brand">Enterprise-grade AI</h4>
                  <p className="text-[10px] text-text-secondary-brand mt-0.5">
                    Trained on FRD, PRD, C4 and Agile frameworks.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-brand">SOC2-ready workflow</h4>
                  <p className="text-[10px] text-text-secondary-brand mt-0.5">
                    Your documents are encrypted and never shared.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* State 2: Loading Progress Wizard */}
        {flowState === "processing" && (
          <motion.div
            key="processing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-3xl border border-border-brand shadow-xl p-6 sm:p-8 max-w-md mx-auto"
          >
            <div className="flex items-center justify-between border-b border-border-brand pb-4 mb-4">
              <div>
                <h3 className="font-bold text-text-brand text-sm">AI Project Intelligence</h3>
                <p className="text-xs text-text-secondary-brand">Analyzing specs & building requirements</p>
              </div>
              <div className="text-sm font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg">
                {progress}%
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-background-brand rounded-full overflow-hidden mb-6">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Steps Checklist */}
            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex items-center justify-between p-2 rounded-xl transition-all ${
                    step.status === "working"
                      ? "bg-primary/5 border border-primary/20"
                      : "border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-text-secondary-brand font-mono w-4">
                      {step.id}
                    </span>
                    <span
                      className={`text-xs font-medium transition-colors ${
                        step.status === "done"
                          ? "text-text-brand line-through opacity-65"
                          : step.status === "working"
                          ? "text-primary font-semibold"
                          : "text-text-secondary-brand/60"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>

                  <div>
                    {step.status === "done" && (
                      <div className="h-5 w-5 rounded-full bg-secondary/15 text-secondary flex items-center justify-center">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </div>
                    )}
                    {step.status === "working" && (
                      <Loader2 className="h-4 w-4 text-primary animate-spin" />
                    )}
                    {step.status === "pending" && (
                      <div className="h-2 w-2 rounded-full bg-gray-200" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* State 3: Results Dashboard Mockup */}
        {flowState === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="bg-white rounded-3xl border border-border-brand shadow-premium overflow-hidden"
          >
            {/* Header */}
            <div className="bg-background-brand/80 border-b border-border-brand p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="h-7 w-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                  <Check className="h-4.5 w-4.5" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-text-brand text-xs sm:text-sm">Requirements Generated Successfully</h3>
                  <p className="text-[10px] text-text-secondary-brand">Ready to download, edit, or push to PMO tools</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={resetFlow}
                  className="inline-flex items-center gap-1 text-xs font-semibold bg-white border border-border-brand hover:bg-background-brand px-3 py-1.5 rounded-xl text-text-brand transition-colors cursor-pointer"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  Restart Demo
                </button>
                <Link
                  href="https://portal.pmpilot.in"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary hover:bg-primary/95 text-white px-3 py-1.5 rounded-xl transition-all shadow-md shadow-primary/10 hover:-translate-y-0.5 cursor-pointer"
                >
                  Push to JIRA / Portal
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Content Tabs */}
            <div className="flex border-b border-border-brand bg-white px-4">
              {["summary", "backlog", "architecture"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setResultsTab(tab as any)}
                  className={`py-3 px-4 text-xs font-semibold capitalize border-b-2 -mb-px transition-all cursor-pointer ${
                    resultsTab === tab
                      ? "border-primary text-primary"
                      : "border-transparent text-text-secondary-brand hover:text-text-brand"
                  }`}
                >
                  {tab === "summary" && "Project Summary"}
                  {tab === "backlog" && "Agile Backlog"}
                  {tab === "architecture" && "System Architecture"}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="p-5 sm:p-6 max-h-[380px] overflow-y-auto">
              {resultsTab === "summary" && (
                <div className="space-y-4">
                  <div className="border border-border-brand rounded-2xl p-4 bg-background-brand/30">
                    <h4 className="text-xs font-bold text-text-brand uppercase tracking-wider mb-2">Scope Summary</h4>
                    <p className="text-xs text-text-secondary-brand leading-relaxed">
                      This project involves bootstrapping a modern, scalable web-based platform with robust authentication, role-based access control, Stripe-based billing/subscription integration, and custom content management pipelines.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-border-brand rounded-2xl p-4">
                      <h4 className="text-xs font-bold text-text-brand uppercase tracking-wider mb-1.5">Tech Stack Recommendations</h4>
                      <ul className="text-xs text-text-secondary-brand list-disc list-inside space-y-1">
                        <li>Frontend: Next.js (App Router), Tailwind CSS</li>
                        <li>Database: PostgreSQL with Prisma ORM</li>
                        <li>Authentication: NextAuth / Clerk</li>
                        <li>Payments: Stripe API</li>
                      </ul>
                    </div>
                    <div className="border border-border-brand rounded-2xl p-4">
                      <h4 className="text-xs font-bold text-text-brand uppercase tracking-wider mb-1.5">Identified Risks</h4>
                      <ul className="text-xs text-text-secondary-brand list-disc list-inside space-y-1">
                        <li>Third-party API latency (Stripe webhook)</li>
                        <li>Multi-tenant data isolation constraints</li>
                        <li>High concurrent asset uploads</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {resultsTab === "backlog" && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 px-1 text-[11px] font-bold text-text-secondary-brand uppercase tracking-wider">
                    <Layers className="h-3.5 w-3.5 text-primary" />
                    Generated Epics & User Stories
                  </div>

                  <div className="space-y-2">
                    {/* Epic 1 */}
                    <div className="border border-border-brand rounded-2xl overflow-hidden shadow-sm">
                      <div className="bg-background-brand px-4 py-2 border-b border-border-brand flex justify-between items-center">
                        <span className="text-xs font-bold text-text-brand">Epic 1: User Authentication & Onboarding</span>
                        <span className="text-[10px] bg-secondary/10 text-secondary font-semibold px-2 py-0.5 rounded-full">3 User Stories</span>
                      </div>
                      <div className="p-3 space-y-2 bg-white">
                        <div className="text-xs border-b border-border-brand/40 pb-2">
                          <span className="font-bold text-primary font-mono mr-2">US-1.1</span>
                          <span className="font-medium text-text-brand">As a user, I want to sign up with email/password so I can create an account.</span>
                        </div>
                        <div className="text-xs border-b border-border-brand/40 pb-2">
                          <span className="font-bold text-primary font-mono mr-2">US-1.2</span>
                          <span className="font-medium text-text-brand">As a user, I want to authenticate via Google/GitHub OAuth for fast onboarding.</span>
                        </div>
                        <div className="text-xs">
                          <span className="font-bold text-primary font-mono mr-2">US-1.3</span>
                          <span className="font-medium text-text-brand">As an administrator, I want role-based access limits (Admin, Editor, User).</span>
                        </div>
                      </div>
                    </div>

                    {/* Epic 2 */}
                    <div className="border border-border-brand rounded-2xl overflow-hidden shadow-sm">
                      <div className="bg-background-brand px-4 py-2 border-b border-border-brand flex justify-between items-center">
                        <span className="text-xs font-bold text-text-brand">Epic 2: Stripe Billing Integration</span>
                        <span className="text-[10px] bg-secondary/10 text-secondary font-semibold px-2 py-0.5 rounded-full">2 User Stories</span>
                      </div>
                      <div className="p-3 space-y-2 bg-white">
                        <div className="text-xs border-b border-border-brand/40 pb-2">
                          <span className="font-bold text-primary font-mono mr-2">US-2.1</span>
                          <span className="font-medium text-text-brand">As a subscriber, I want to select a pricing plan and checkout via Stripe checkout.</span>
                        </div>
                        <div className="text-xs">
                          <span className="font-bold text-primary font-mono mr-2">US-2.2</span>
                          <span className="font-medium text-text-brand">As a premium user, I want to download monthly PDF invoices.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {resultsTab === "architecture" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 px-1 text-[11px] font-bold text-text-secondary-brand uppercase tracking-wider">
                    <Terminal className="h-3.5 w-3.5 text-primary" />
                    C4 Level 2 Container Architecture
                  </div>

                  <div className="border border-border-brand rounded-2xl p-4 bg-gray-50 font-mono text-[10px] text-text-brand overflow-x-auto whitespace-pre leading-5 shadow-inner">
{`+-------------------------------------------------------------------+
|                           Client Browser                           |
|       (Next.js Client Components with tailwind/motion)            |
+---------------------------------+---------------------------------+
                                  |
                           GraphQL / REST API
                                  |
                                  v
+---------------------------------+---------------------------------+
|                       Next.js App Server                          |
|    - Route Handlers API (TypeScript)                              |
|    - Auth Validation (NextAuth)                                   |
+------------------+------------------------------+-----------------+
                   |                              |
            SQL / Prisma                   REST Integration
                   |                              |
                   v                              v
+------------------+--------------+ +-------------+-----------------+
|            PostgreSQL           | |         Stripe API            |
|     (Primary Transactional)     | |    (Subscription Engine)      |
+---------------------------------+ +-------------------------------+`}
                  </div>

                  <div className="flex items-center gap-1.5 text-text-secondary-brand text-xs">
                    <Info className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>Visual interactive canvas is fully scalable in portal.pmpilot.in workspace.</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
