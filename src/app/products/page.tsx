import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTS_DATA } from "@/data/products";
import { 
  Zap, ShieldAlert, Cpu, BarChart3, Settings, 
  ArrowRight, Sparkles, Building2, Terminal 
} from "lucide-react";

export default function ProductsPage() {
  const icons = {
    Zap,
    ShieldAlert,
    Cpu,
    BarChart3,
    Settings,
  };

  return (
    <div className="flex flex-col min-h-screen bg-mesh-grid">
      <Navbar />

      <main className="flex-grow pt-16 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider mb-3">
              <Building2 className="h-4 w-4" />
              PMPilot Platform
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-text-brand mb-4">
              Enterprise AI Products
            </h1>
            <p className="text-sm text-text-secondary-brand leading-relaxed">
              Explore our modular enterprise project management systems. We design AI solutions for requirement authoring, project delivery audit, compliance forecasting, and portfolio sync.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(PRODUCTS_DATA).map((product) => {
              const Icon = icons[product.iconName] || Zap;
              return (
                <div 
                  key={product.slug}
                  className="bg-white rounded-3xl border border-border-brand p-6 shadow-premium hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      {product.isFlagship ? (
                        <span className="text-[9px] uppercase font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          Flagship Product
                        </span>
                      ) : product.comingSoon ? (
                        <span className="text-[9px] uppercase font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
                          Coming Soon
                        </span>
                      ) : (
                        <span className="text-[9px] uppercase font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                          Beta Testing
                        </span>
                      )}
                    </div>

                    <h2 className="text-base font-bold text-text-brand mb-2">{product.name}</h2>
                    <p className="text-xs font-medium text-primary mb-3">{product.tagline}</p>
                    <p className="text-xs text-text-secondary-brand leading-relaxed mb-6">{product.description}</p>
                  </div>

                  <div className="border-t border-border-brand/60 pt-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-text-secondary-brand">
                      {product.comingSoon ? "REGISTRATION OPEN" : "ACTIVE WORKSPACE"}
                    </span>
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                      Explore details
                      <ArrowRight className="h-3.5 w-3.5" />
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
