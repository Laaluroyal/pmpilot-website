import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES_DATA } from "@/data/services";
import { 
  ArrowLeft, CheckCircle2, ChevronRight, Compass, ShieldCheck, 
  HelpCircle, MessageSquare, Briefcase, Sparkles, Layers 
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-mesh-grid">
      <Navbar />

      <main className="flex-grow pt-10 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-text-secondary-brand hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          {/* Hero Banner Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider">
                <Briefcase className="h-4 w-4" />
                Enterprise Service Offering
              </div>

              {/* Title & Tagline */}
              <h1 className="text-4xl font-extrabold tracking-tight text-text-brand leading-[1.1]">
                {service.name}
              </h1>
              <p className="text-lg font-medium text-primary leading-snug">
                {service.tagline}
              </p>

              {/* Long Description */}
              <p className="text-sm text-text-secondary-brand leading-relaxed">
                {service.longDescription}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:opacity-95 rounded-xl shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  Consult an Expert
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/book-demo"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-text-brand bg-white border border-border-brand hover:bg-background-brand rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  Book Demo
                </Link>
              </div>
            </div>

            {/* Right: Graphic Card (Methodology/Summary) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/15 blur-3xl opacity-60 -z-10 rounded-full" />
              
              <div className="w-full max-w-[380px] rounded-3xl bg-white border border-border-brand shadow-premium p-6 relative overflow-hidden">
                <h3 className="text-xs font-bold text-text-brand uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Key Outcomes & Focus
                </h3>

                <div className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-xs text-text-brand font-medium leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border-brand/60 mt-6 pt-4 space-y-3">
                  <h4 className="text-[10px] font-bold text-text-secondary-brand uppercase tracking-wider">
                    Core Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {service.deliverables.map((del, idx) => (
                      <span key={idx} className="text-[10px] font-semibold bg-background-brand border border-border-brand px-2.5 py-1 rounded-lg text-text-secondary-brand">
                        {del}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border-brand my-12" />

          {/* Service Delivery Timeline / Methodology */}
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                EXECUTION Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-brand mt-2 mb-4">
                Our Consulting Methodology
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary-brand max-w-xl mx-auto leading-relaxed">
                We deliver structure, transparency, and data-backed performance through a highly structured 4-phase program execution.
              </p>
            </div>

            {/* Timeline cards */}
            <div className="relative border-l-2 border-border-brand/80 ml-4 md:ml-32 space-y-8 py-4">
              {service.methodology.map((step, idx) => {
                const parts = step.split(": ");
                const title = parts[0];
                const desc = parts[1];

                return (
                  <div key={idx} className="relative pl-6 md:pl-8">
                    {/* Circle icon marker */}
                    <div className="absolute left-[-9px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-white flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </div>

                    {/* Timeline box */}
                    <div className="p-5 rounded-2xl border border-border-brand bg-white shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-bold text-text-brand">
                          {title}
                        </h3>
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          Phase 0{idx + 1}
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary-brand leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
