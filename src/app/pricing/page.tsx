"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const PLANS = [
    {
      name: "Starter",
      description: "For product managers and small teams kickstarting requirements.",
      priceMonthly: 49,
      priceAnnual: 39,
      ctaText: "Start Free Trial",
      ctaHref: "https://portal.pmpilot.in",
      features: [
        "Up to 5 AI project generations / month",
        "Standard agile story generation",
        "PDF functional specs export",
        "Standard Jira integration mapping",
        "Single-user workspace access",
      ],
      isPopular: false,
    },
    {
      name: "Pro",
      description: "For fast-scaling product organizations and delivery managers.",
      priceMonthly: 189,
      priceAnnual: 149,
      ctaText: "Start Free Trial",
      ctaHref: "https://portal.pmpilot.in",
      features: [
        "Unlimited ProjectPilot AI generations",
        "Full Gherkin acceptance criteria rules",
        "C4 container mapping & schema designs",
        "Bi-directional Jira & Azure DevOps sync",
        "Up to 10 collaborative team workspace seats",
        "Email & Discord priority support",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "For high-assurance compliance, multi-PMO teams, and scale-ups.",
      priceMonthly: null,
      priceAnnual: null,
      ctaText: "Contact Sales",
      ctaHref: "/contact",
      features: [
        "Custom enterprise LLM integration options",
        "Continuous Governance AI audit scanning",
        "Multi-repository Delivery Intelligence tracking",
        "Custom SSO / SAML user integration",
        "Dedicated Delivery Success Architect",
        "SLA guaranteed compliance reporting",
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-mesh-grid">
      <Navbar />

      <main className="flex-grow pt-16 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              PRICING PLANS
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-brand mt-3 mb-4">
              Transparent, Scalable Pricing
            </h1>
            <p className="text-sm text-text-secondary-brand leading-relaxed">
              Start drafting specifications for free, then scale as your team delivers. Choose a plan that aligns with your engineering governance demands.
            </p>

            {/* Toggle switch */}
            <div className="flex justify-center items-center gap-3.5 mt-8">
              <span className={`text-xs font-semibold ${!isAnnual ? "text-text-brand" : "text-text-secondary-brand"}`}>
                Monthly Billing
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative h-6 w-11 bg-primary rounded-full p-0.5 transition-colors cursor-pointer"
              >
                <div
                  className={`h-5 w-5 bg-white rounded-full transition-transform shadow`}
                  style={{ transform: isAnnual ? "translateX(20px)" : "translateX(0)" }}
                />
              </button>
              <span className={`text-xs font-semibold ${isAnnual ? "text-text-brand" : "text-text-secondary-brand"} flex items-center gap-1.5`}>
                Annual Billing
                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/50 px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-3xl border p-6 flex flex-col justify-between relative shadow-premium transition-all duration-300 ${
                  plan.isPopular
                    ? "border-primary shadow-lg ring-1 ring-primary/20"
                    : "border-border-brand hover:border-primary/20"
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-1 bg-gradient-to-r from-primary to-secondary text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-base font-bold text-text-brand text-left">{plan.name}</h3>
                  <p className="text-xs text-text-secondary-brand text-left mt-1.5 leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>

                  {/* Pricing Info */}
                  <div className="my-6 text-left border-y border-border-brand/60 py-4 min-h-[80px] flex items-center">
                    {plan.priceMonthly !== null ? (
                      <div>
                        <span className="text-4xl font-extrabold tracking-tight text-text-brand">
                          ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                        </span>
                        <span className="text-xs font-semibold text-text-secondary-brand ml-1">
                          / month
                        </span>
                        {isAnnual && (
                          <div className="text-[10px] text-emerald-600 font-bold mt-1">
                            Billed annually (${(isAnnual ? plan.priceAnnual : plan.priceMonthly)! * 12}/yr)
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        <span className="text-3xl font-extrabold tracking-tight text-text-brand">
                          Custom
                        </span>
                        <p className="text-[10px] text-text-secondary-brand mt-1 font-semibold">
                          Custom quotes for larger teams & enterprise PMOs.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3.5 text-left mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-text-brand leading-normal">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={plan.ctaHref}
                  target={plan.ctaHref.startsWith("http") ? "_blank" : undefined}
                  className={`w-full text-center py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:opacity-95"
                      : "bg-background-brand text-text-brand border border-border-brand hover:bg-white hover:border-primary/50"
                  }`}
                >
                  {plan.ctaText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Security note */}
          <div className="mt-12 max-w-lg mx-auto flex items-center justify-center gap-2.5 text-xs text-text-secondary-brand border border-border-brand bg-white px-5 py-3 rounded-2xl shadow-sm">
            <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>
              All transactions are encrypted securely via Stripe. Compliance logs are fully exportable.
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
