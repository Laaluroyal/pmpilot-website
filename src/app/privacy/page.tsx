import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
                <h1 className="text-xl sm:text-2xl font-extrabold text-text-brand">Privacy Policy</h1>
                <p className="text-[10px] text-text-secondary-brand font-medium">Last updated: July 2026</p>
              </div>
            </div>

            <div className="text-xs text-text-brand leading-relaxed space-y-4">
              <h2 className="text-sm font-bold text-text-brand">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us when setting up beta workspaces, request demos, or communicate with our advisory teams. This includes your name, business email, organization name, and details concerning project requirements.
              </p>

              <h2 className="text-sm font-bold text-text-brand">2. Data Security & Storage</h2>
              <p>
                All data ingested via ProjectPilot AI or our consulting channels is encrypted both in transit (TLS 1.3) and at rest (AES-256). We maintain strict tenant isolation systems, ensuring your business documents are never leaked or used to train public LLM models.
              </p>

              <h2 className="text-sm font-bold text-text-brand">3. Integration Webhooks</h2>
              <p>
                When you connect third-party accounts (e.g. Jira, GitHub, Azure DevOps) to portal.pmpilot.in, we scrape metadata and sync ticket structures only as explicitly configured by your administrators.
              </p>

              <h2 className="text-sm font-bold text-text-brand">4. Contact Us</h2>
              <p>
                If you have questions about our data security practices or need to delete your records, contact us at <a href="laalutej111@gmail.com" className="text-primary hover:underline font-bold">laalutej111@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
