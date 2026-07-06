import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTS_DATA } from "@/data/products";
import { 
  ArrowLeft, ArrowUpRight, CheckCircle2, Cpu, ShieldAlert, Zap, 
  BarChart3, Settings, AlertCircle, Sparkles, Terminal, FileCode, Check 
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS_DATA[slug];

  if (!product) {
    notFound();
  }

  // Map icon name to icon component
  const icons = {
    Zap,
    ShieldAlert,
    Cpu,
    BarChart3,
    Settings,
  };
  const IconComponent = icons[product.iconName] || Zap;

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
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Product Badge */}
              <div className="flex items-center gap-2">
                {product.isFlagship && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary">
                    <Sparkles className="h-3 w-3" />
                    Flagship Product
                  </span>
                )}
                {product.comingSoon ? (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-700">
                    <AlertCircle className="h-3 w-3" />
                    Coming Soon / Alpha Registration Open
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600">
                    <Check className="h-3 w-3" />
                    Active Beta Testing
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-brand leading-[1.1]">
                {product.name}
              </h1>
              <p className="text-lg font-medium text-primary leading-snug">
                {product.tagline}
              </p>

              {/* Long Description */}
              <p className="text-sm text-text-secondary-brand leading-relaxed">
                {product.longDescription}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="https://portal.pmpilot.in"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:opacity-95 rounded-xl shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  {product.comingSoon ? "Join Alpha Waitlist" : "Launch in Workspace"}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/book-demo"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-text-brand bg-white border border-border-brand hover:bg-background-brand rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  Book Demo
                </Link>
              </div>
            </div>

            {/* Right: Beautiful Pure-CSS Branding Graphic Illustration */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/15 blur-3xl opacity-60 -z-10 rounded-full" />
              <div className="w-full max-w-[400px] h-[300px] rounded-3xl bg-white border border-border-brand shadow-premium p-6 flex flex-col justify-between relative overflow-hidden group hover:border-primary/20 transition-all duration-300">
                {/* Visual lines */}
                <div className="absolute inset-0 bg-[radial-gradient(#E6EBF5_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

                <div className="flex items-center justify-between border-b border-border-brand pb-3 z-10">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[10px] font-mono text-text-secondary-brand uppercase tracking-wider">
                    {product.slug}.pmpilot.ai/canvas
                  </span>
                </div>

                {/* Animated inner canvas */}
                <div className="flex-1 flex items-center justify-center relative py-6">
                  {/* Decorative glass elements */}
                  <div className="absolute h-24 w-36 rounded-2xl glass-panel border border-border-brand shadow-sm flex flex-col justify-between p-3 rotate-[-6deg] -translate-x-12 translate-y-2 z-10 transition-transform duration-500 group-hover:rotate-[-2deg] group-hover:-translate-x-14">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <IconComponent className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-[10px] font-bold text-text-brand">{product.name}</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-1 w-full bg-border-brand rounded-full" />
                      <div className="h-1 w-3/4 bg-border-brand rounded-full" />
                      <div className="h-1.5 w-1/2 bg-primary/30 rounded-full" />
                    </div>
                  </div>

                  <div className="absolute h-24 w-36 rounded-2xl bg-white border border-border-brand shadow-md flex flex-col justify-between p-3 rotate-[8deg] translate-x-12 -translate-y-2 z-0 transition-transform duration-500 group-hover:rotate-[4deg] group-hover:translate-x-14">
                    <span className="text-[9px] font-mono text-text-secondary-brand uppercase tracking-wider">SYSTEM METRICS</span>
                    <div className="flex items-end gap-1.5 h-10 pb-1">
                      <div className="w-full bg-primary/20 rounded-sm h-[30%] group-hover:h-[45%] transition-all duration-500" />
                      <div className="w-full bg-primary/45 rounded-sm h-[60%] group-hover:h-[75%] transition-all duration-500" />
                      <div className="w-full bg-secondary/70 rounded-sm h-[40%] group-hover:h-[55%] transition-all duration-500" />
                      <div className="w-full bg-gradient-to-t from-primary to-secondary rounded-sm h-[85%] group-hover:h-[95%] transition-all duration-500" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-border-brand/60 pt-3 z-10">
                  <span className="text-[10px] font-bold text-text-secondary-brand">MODEL PARAM: CONTEXT-ENG v1.2</span>
                  <div className="h-4.5 w-4.5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Sparkles className="h-2.5 w-2.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border-brand my-12" />

          {/* Detailed Features & Specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Features list */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-text-brand mb-6">
                Product Features & Capabilities
              </h2>
              <div className="grid gap-4">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-border-brand bg-white shadow-sm hover:shadow-md transition-all duration-200">
                    <h3 className="text-sm font-bold text-text-brand">{feature.title}</h3>
                    <p className="text-xs text-text-secondary-brand mt-1.5 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use cases & architecture */}
            <div className="space-y-8">
              {/* Use cases */}
              <div className="p-6 rounded-2xl border border-border-brand bg-white shadow-sm">
                <h3 className="text-base font-bold text-text-brand mb-4">Enterprise Use Cases</h3>
                <div className="space-y-3">
                  {product.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="h-4.5 w-4.5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-3 w-3" />
                      </div>
                      <span className="text-xs text-text-brand font-medium leading-normal">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture overview */}
              <div className="p-6 rounded-2xl border border-border-brand bg-white shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="h-4.5 w-4.5 text-primary" />
                  <h3 className="text-base font-bold text-text-brand">Architectural Integration</h3>
                </div>
                <p className="text-xs text-text-secondary-brand leading-relaxed">
                  {product.architectureOverview}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold text-text-secondary-brand uppercase tracking-wider">
                  <FileCode className="h-3.5 w-3.5 text-primary" />
                  JSON Webhook Schema Available / API Driven
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
