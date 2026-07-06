import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Compass, ShieldCheck, Cpu, Target, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const VALUES = [
    {
      name: "Delivery Rigour",
      description: "We believe projects succeed when details are defined. We focus on structural requirements, clear critical paths, and objective metrics.",
      icon: Target,
    },
    {
      name: "Pragmatic AI Integration",
      description: "AI is a powerful execution teammate, not a magic solution. We build systems that solve real operational bottlenecks safely and predictably.",
      icon: Cpu,
    },
    {
      name: "Security & Secrecy",
      description: "Enterprise project data is sensitive intellectual property. Our systems are built around tenant isolation, data encryption, and zero model leaks.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-mesh-grid">
      <Navbar />

      <main className="flex-grow pt-16 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider mb-3">
              <Building2 className="h-4 w-4" />
              Company Vision
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-text-brand mb-4">
              Empowering Project Leaders
            </h1>
            <p className="text-sm text-text-secondary-brand leading-relaxed">
              PMPilot is an AI-first technology and advisory firm. We design enterprise systems that bridge business requirements with predictable engineering delivery.
            </p>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 text-left">
              <h2 className="text-2xl font-bold tracking-tight text-text-brand">
                Our Mission
              </h2>
              <p className="text-sm text-text-secondary-brand leading-relaxed">
                Software projects frequently fail due to misaligned expectations, inadequate specifications, and outdated tracking methods. Our mission is to automate the overhead of project coordination using context-aware artificial intelligence.
              </p>
              <p className="text-sm text-text-secondary-brand leading-relaxed">
                By compiling user inputs, architectural guidelines, and ticketing details, PMPilot provides a unified intelligence stream. Project leaders can focus on strategic design, while our system manages tasks, compliance, and velocity calculations.
              </p>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/15 blur-3xl opacity-60 -z-10 rounded-full" />
              <div className="p-8 rounded-3xl bg-white border border-border-brand shadow-premium max-w-md">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">FOUNDING PHILOSOPHY</span>
                <blockquote className="mt-4 text-sm font-serif italic text-text-brand leading-relaxed">
                  &ldquo;A project is successfully delivered not when it is merely completed, but when its initial business objectives are verified, compliant, and operating at peak capacity.&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1.5 w-6 bg-primary rounded-full" />
                  <span className="text-[11px] font-bold text-text-secondary-brand">Sai Teja,  CEO,  PMPilot.in</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="bg-white rounded-3xl border border-border-brand p-8 sm:p-10 mb-20 shadow-premium">
            <h2 className="text-2xl font-bold tracking-tight text-text-brand mb-10 text-center">
              Our Core Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VALUES.map((val) => {
                const Icon = val.icon;
                return (
                  <div key={val.name} className="space-y-3.5 text-left">
                    <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-bold text-text-brand">{val.name}</h3>
                    <p className="text-xs text-text-secondary-brand leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team / Advisory Section */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-text-brand mb-4 text-center">
              Advisory Board & Team
            </h2>
            <p className="text-xs text-text-secondary-brand max-w-md mx-auto text-center mb-10 leading-relaxed">
              We are backed by seasoned delivery directors, agile transformation coaches, and AI research architects with decades of industry experience.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Sai Teja", role: "Senior Project Manager; CEO PMPilot.in", initials: "ST" },
                { name: "xyz", role: "Agile Coach, SAFe SPC", initials: "xy" },
                { name: "xyz", role: "Senior Delivery Director", initials: "xy" },
                { name: "xyz", role: "AI Systems Architect", initials: "xy" }
              ].map((member) => (
                <div key={member.name} className="p-5 rounded-2xl border border-border-brand bg-white text-center hover:border-primary/20 transition-all duration-200">
                  <div className="h-12 w-12 bg-primary/10 text-primary font-bold text-xs rounded-full flex items-center justify-center mx-auto mb-3">
                    {member.initials}
                  </div>
                  <h3 className="text-xs font-bold text-text-brand">{member.name}</h3>
                  <p className="text-[10px] text-text-secondary-brand mt-0.5">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
