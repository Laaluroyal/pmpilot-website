"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight, Zap, Cpu, Settings, ShieldAlert, BarChart3, HelpCircle } from "lucide-react";

const PRODUCTS = [
  {
    name: "ProjectPilot AI",
    tagline: "AI-driven project execution & BRD automation",
    href: "/products/projectpilot-ai",
    badge: "Flagship",
    icon: Zap,
  },
  {
    name: "Governance AI",
    tagline: "Automated delivery compliance & risk auditing",
    href: "/products/governance-ai",
    badge: "Coming Soon",
    icon: ShieldAlert,
  },
  {
    name: "PMO Intelligence",
    tagline: "Enterprise-wide PMO analytics & forecasting",
    href: "/products/pmo-intelligence",
    badge: "Coming Soon",
    icon: Cpu,
  },
  {
    name: "Delivery Intelligence",
    tagline: "Real-time velocity & engineering performance tracker",
    href: "/products/delivery-intelligence",
    badge: "Coming Soon",
    icon: BarChart3,
  },
  {
    name: "PortfolioPilot AI",
    tagline: "Strategic portfolio management & alignment",
    href: "/products/portfoliopilot-ai",
    badge: "Coming Soon",
    icon: Settings,
  },
];

const SERVICES = [
  { name: "PMO Setup & Optimization", href: "/services/pmo-setup" },
  { name: "Project Management Consulting", href: "/services/pm-consulting" },
  { name: "Agile & SAFe Transformation", href: "/services/agile-transformation" },
  { name: "Digital Transformation Consulting", href: "/services/digital-transformation" },
  { name: "Delivery Governance & Audit", href: "/services/delivery-governance" },
  { name: "Business Analysis & BRD Prep", href: "/services/business-analysis" },
  { name: "Project Rescue & Recovery", href: "/services/project-rescue" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"products" | "services" | null>(null);

  const toggleDropdown = (menu: "products" | "services") => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-nav shadow-premium">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-secondary shadow-md transition-transform duration-300 group-hover:scale-105">
                {/* Custom Logo Graphic */}
                <svg
                  className="h-5.5 w-5.5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xl font-bold tracking-tight text-text-brand">
                  PMPilot<span className="text-primary">.in</span>
                </span>
                <span className="text-[9px] font-medium uppercase tracking-wider text-text-secondary-brand -mt-1">
                  AI-First Enterprise
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("products")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-text-secondary-brand hover:text-text-brand transition-colors py-2 cursor-pointer">
                  Products
                  <ChevronDown className="h-4 w-4 transition-transform duration-200" style={{ transform: activeDropdown === "products" ? "rotate(180deg)" : "rotate(0)" }} />
                </button>

                <AnimatePresence>
                  {activeDropdown === "products" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-1 w-[460px] rounded-2xl bg-white p-4 shadow-xl border border-border-brand"
                    >
                      <div className="text-xs font-semibold uppercase tracking-wider text-text-secondary-brand mb-2 px-2">
                        Enterprise AI Products
                      </div>
                      <div className="grid gap-2">
                        {PRODUCTS.map((prod) => {
                          const Icon = prod.icon;
                          return (
                            <Link
                              key={prod.name}
                              href={prod.href}
                              className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-background-brand transition-colors"
                            >
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-semibold text-text-brand">{prod.name}</span>
                                  {prod.badge && (
                                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                                      prod.badge === "Flagship" 
                                        ? "bg-primary/15 text-primary" 
                                        : "bg-gray-100 text-text-secondary-brand"
                                    }`}>
                                      {prod.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-text-secondary-brand mt-0.5">{prod.tagline}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-text-secondary-brand hover:text-text-brand transition-colors py-2 cursor-pointer">
                  Services
                  <ChevronDown className="h-4 w-4 transition-transform duration-200" style={{ transform: activeDropdown === "services" ? "rotate(180deg)" : "rotate(0)" }} />
                </button>

                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-1 w-[280px] rounded-2xl bg-white p-3 shadow-xl border border-border-brand"
                    >
                      <div className="text-xs font-semibold uppercase tracking-wider text-text-secondary-brand mb-2 px-2">
                        Consulting & Delivery
                      </div>
                      <div className="flex flex-col gap-1">
                        {SERVICES.map((srv) => (
                          <Link
                            key={srv.name}
                            href={srv.href}
                            className="text-sm font-medium text-text-secondary-brand hover:text-text-brand rounded-lg px-2.5 py-1.5 hover:bg-background-brand transition-colors"
                          >
                            {srv.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other pages */}
              <Link
                href="/pricing"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/pricing" ? "text-primary" : "text-text-secondary-brand hover:text-text-brand"
                }`}
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/blog" ? "text-primary" : "text-text-secondary-brand hover:text-text-brand"
                }`}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/about" ? "text-primary" : "text-text-secondary-brand hover:text-text-brand"
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/contact" ? "text-primary" : "text-text-secondary-brand hover:text-text-brand"
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://portal.pmpilot.in"
              target="_blank"
              className="text-sm font-semibold text-text-secondary-brand hover:text-text-brand transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/book-demo"
              className="text-sm font-semibold text-text-brand hover:text-primary transition-colors bg-white border border-border-brand px-4 py-2 rounded-xl shadow-sm hover:shadow"
            >
              Book Demo
            </Link>
            <Link
              href="https://portal.pmpilot.in"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:opacity-95 px-4 py-2 rounded-xl shadow-md shadow-primary/10 transition-all hover:-translate-y-0.5"
            >
              Start Free Trial
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-text-secondary-brand hover:text-text-brand hover:bg-background-brand transition-all"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border-brand bg-white"
          >
            <div className="space-y-1.5 px-4 py-4 max-h-[80vh] overflow-y-auto">
              {/* Mobile Products */}
              <div>
                <button
                  onClick={() => toggleDropdown("products")}
                  className="flex w-full items-center justify-between py-2 text-base font-semibold text-text-brand"
                >
                  Products
                  <ChevronDown className="h-5 w-5 transition-transform duration-200" style={{ transform: activeDropdown === "products" ? "rotate(180deg)" : "rotate(0)" }} />
                </button>
                {activeDropdown === "products" && (
                  <div className="pl-4 mt-1 border-l border-border-brand/60 space-y-3 py-1">
                    {PRODUCTS.map((prod) => (
                      <Link
                        key={prod.name}
                        href={prod.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-text-brand">{prod.name}</span>
                          {prod.badge && (
                            <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-gray-100 text-text-secondary-brand">
                              {prod.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-text-secondary-brand">{prod.tagline}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => toggleDropdown("services")}
                  className="flex w-full items-center justify-between py-2 text-base font-semibold text-text-brand"
                >
                  Services
                  <ChevronDown className="h-5 w-5 transition-transform duration-200" style={{ transform: activeDropdown === "services" ? "rotate(180deg)" : "rotate(0)" }} />
                </button>
                {activeDropdown === "services" && (
                  <div className="pl-4 mt-1 border-l border-border-brand/60 space-y-2 py-1">
                    {SERVICES.map((srv) => (
                      <Link
                        key={srv.name}
                        href={srv.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm font-medium text-text-secondary-brand hover:text-text-brand"
                      >
                        {srv.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Simple Links */}
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-text-brand border-b border-border-brand/30"
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-text-brand border-b border-border-brand/30"
              >
                Blog
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-text-brand border-b border-border-brand/30"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-text-brand"
              >
                Contact
              </Link>

              {/* Action Buttons */}
              <div className="grid gap-3 pt-6">
                <Link
                  href="/book-demo"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center font-semibold text-text-brand bg-white border border-border-brand py-2.5 rounded-xl shadow-sm"
                >
                  Book Demo
                </Link>
                <Link
                  href="https://portal.pmpilot.in"
                  target="_blank"
                  className="w-full text-center font-semibold text-white bg-gradient-to-r from-primary to-secondary py-2.5 rounded-xl shadow"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="https://portal.pmpilot.in"
                  target="_blank"
                  className="w-full text-center font-medium text-text-secondary-brand py-1.5"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
