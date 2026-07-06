import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-mesh-grid">
      <Navbar />

      <main className="flex-grow pt-10 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-text-secondary-brand hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="bg-white rounded-3xl border border-border-brand p-6 sm:p-8 shadow-premium text-left space-y-6">
            <div className="flex items-center gap-3 border-b border-border-brand pb-4">
              <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-text-brand">Terms of Use</h1>
                <p className="text-[10px] text-text-secondary-brand font-medium">Last updated: July 2026</p>
              </div>
            </div>

            <div className="text-xs text-text-brand leading-relaxed space-y-4">
              <h2 className="text-sm font-bold text-text-brand">1. Acceptance of Terms</h2>
              <p>
                By accessing this website (www.pmpilot.in) or registering for beta testing of our SaaS application at portal.pmpilot.in, you agree to comply with these Terms of Use and all applicable laws.
              </p>

              <h2 className="text-sm font-bold text-text-brand">2. SaaS Applications Disclaimer</h2>
              <p>
                All SaaS features, including ProjectPilot AI, Governance AI, and PMO Intelligence, are provided in 'Beta' state. PMPilot does not guarantee uninterrupted runtime or absolute ticket synchronization correctness.
              </p>

              <h2 className="text-sm font-bold text-text-brand">3. Acceptable Use Limits</h2>
              <p>
                Users are prohibited from attempting to bypass API filters, reverse-engineer LLM templates, or scrape other tenants' workspace data on portal.pmpilot.in. Violation leads to immediate cancellation of access.
              </p>

              <h2 className="text-sm font-bold text-text-brand">4. Intellectual Property</h2>
              <p>
                The layouts, logos, CSS illustrations, and designs contained on this site are the exclusive property of PMPilot Technology Solutions Pvt Ltd.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
