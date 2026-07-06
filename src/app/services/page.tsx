import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES_DATA } from "@/data/services";
import { Briefcase, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-mesh-grid">
      <Navbar />

      <main className="flex-grow pt-16 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider mb-3">
              <Briefcase className="h-4 w-4" />
              Professional Advisory
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-text-brand mb-4">
              Enterprise Delivery Consulting
            </h1>
            <p className="text-sm text-text-secondary-brand leading-relaxed">
              We provide expert advisory services spanning agile scaling, governance auditing, PMO optimizations, digital system modernizations, and critical project recovery actions.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(SERVICES_DATA).map((service) => {
              return (
                <div 
                  key={service.slug}
                  className="bg-white rounded-3xl border border-border-brand p-6 shadow-premium hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h2 className="text-base font-bold text-text-brand mb-2">{service.name}</h2>
                    <p className="text-xs font-medium text-primary mb-3">{service.tagline}</p>
                    <p className="text-xs text-text-secondary-brand leading-relaxed mb-6">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.benefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-[11px] font-medium text-text-brand leading-tight">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border-brand/60 pt-4 flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="text-xs font-bold text-text-secondary-brand hover:text-text-brand transition-colors"
                    >
                      Consult Expert
                    </Link>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-0.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                      View blueprints
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
