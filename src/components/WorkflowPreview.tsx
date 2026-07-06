"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, BrainCircuit, ListTodo, GitPullRequest, ArrowRight, CheckCircle2 } from "lucide-react";

const WORKFLOW_STEPS = [
  {
    id: 1,
    title: "1. Smart Document Digestion",
    description: "Upload any business requirement doc, markdown note, or raw code sketch. The AI instantly parses and structures raw data.",
    icon: FileText,
    color: "from-blue-500/10 to-primary/10",
    iconColor: "text-primary",
    points: ["Supports PDF, DOCX, MD, Images", "OCR for hand-drawn wireframes", "Auto-extracts entity schemas"],
  },
  {
    id: 2,
    title: "2. Contextual Alignment",
    description: "Aligns project scope with enterprise policies, security guidelines (SOC2, GDPR), tech stack rules, and architecture templates.",
    icon: BrainCircuit,
    color: "from-purple-500/10 to-secondary/10",
    iconColor: "text-secondary",
    points: ["Security risk profiling", "Architecture pattern validation", "Tech stack compliance checks"],
  },
  {
    id: 3,
    title: "3. Sprint Orchestration",
    description: "AI builds complete Agile Backlogs automatically. Creates structured Epics, detailed User Stories, Acceptance Criteria, and subtasks.",
    icon: ListTodo,
    color: "from-sky-500/10 to-accent/10",
    iconColor: "text-accent",
    points: ["Gherkin (Given/When/Then) syntax", "Estimates Story Points", "Dependency mapping"],
  },
  {
    id: 4,
    title: "4. Synchronized Delivery",
    description: "Instantly export or synchronize requirements directly to JIRA, GitHub, Azure DevOps, or the native PMPilot enterprise workspace.",
    icon: GitPullRequest,
    color: "from-emerald-500/10 to-emerald-600/10",
    iconColor: "text-emerald-500",
    points: ["Bi-directional webhook sync", "Jira API custom mappings", "Markdown code bundle download"],
  },
];

export default function WorkflowPreview() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Step Selection Timeline */}
        <div className="lg:col-span-5 space-y-4">
          {WORKFLOW_STEPS.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`group p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                  isActive
                    ? "bg-white border-border-brand shadow-md shadow-primary/5"
                    : "border-transparent hover:bg-white/40 hover:border-border-brand/40"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all ${
                    isActive ? "bg-primary text-white" : "bg-background-brand text-text-secondary-brand group-hover:text-primary"
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold transition-colors ${isActive ? "text-text-brand" : "text-text-secondary-brand group-hover:text-text-brand"}`}>
                      {step.title}
                    </h4>
                    <p className="text-xs text-text-secondary-brand mt-0.5 line-clamp-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Premium Interactive Showcase Display */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-border-brand shadow-premium p-6 sm:p-8 relative overflow-hidden min-h-[380px] flex flex-col justify-between">
          {/* Subtle bg blur */}
          <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-gradient-to-tr from-primary/10 to-secondary/10 blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-3.5 mb-5">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${WORKFLOW_STEPS[activeStep].color}`}>
                {React.createElement(WORKFLOW_STEPS[activeStep].icon, {
                  className: `h-6 w-6 ${WORKFLOW_STEPS[activeStep].iconColor}`
                })}
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-primary">Workflow Stage 0{activeStep + 1}</span>
                <h3 className="text-base font-bold text-text-brand">{WORKFLOW_STEPS[activeStep].title.split(". ")[1]}</h3>
              </div>
            </div>

            <p className="text-sm text-text-secondary-brand leading-relaxed mb-6">
              {WORKFLOW_STEPS[activeStep].description}
            </p>

            <div className="space-y-2.5">
              {WORKFLOW_STEPS[activeStep].points.map((pt, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="h-4.5 w-4.5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs text-text-brand font-medium">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-border-brand/60 pt-5 flex items-center justify-between">
            <span className="text-[10px] font-bold text-text-secondary-brand tracking-wide">
              INTELLIGENT BACKEND RUNTIME
            </span>
            <button
              onClick={() => setActiveStep((prev) => (prev + 1) % WORKFLOW_STEPS.length)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors"
            >
              Next Step
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
