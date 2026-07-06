"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="w-full bg-white border-t border-border-brand mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Info & Newsletter */}
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-secondary shadow-md">
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
            <p className="text-sm text-text-secondary-brand max-w-md">
              Building enterprise AI agents and systems to govern delivery compliance, optimize PMO execution, and automate project intelligence.
            </p>
            {/* Newsletter */}
            <div className="max-w-md">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-brand">
                Subscribe to our newsletter
              </h3>
              <p className="text-xs text-text-secondary-brand mt-1.5">
                The latest news, articles, and AI product updates, sent weekly.
              </p>
              <form onSubmit={handleSubscribe} className="mt-3 flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary-brand" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2 text-sm bg-background-brand border border-border-brand rounded-xl focus:outline-none focus:border-primary transition-colors text-text-brand"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center p-2 rounded-xl bg-primary hover:bg-primary/95 text-white transition-colors cursor-pointer"
                >
                  {subscribed ? (
                    <span className="text-xs px-2 font-medium">Subscribed!</span>
                  ) : (
                    <ArrowRight className="h-5 w-5" />
                  )}
                </button>
              </form>
            </div>
            {/* Socials */}
            <div className="flex gap-4">
              <a href="#" className="text-text-secondary-brand hover:text-primary transition-colors">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-text-secondary-brand hover:text-primary transition-colors">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-text-secondary-brand hover:text-primary transition-colors">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Sitemap Columns */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-4">
            {/* Products */}
            <div>
              <h3 className="text-sm font-semibold text-text-brand tracking-wider">Products</h3>
              <ul role="list" className="mt-4 space-y-2.5">
                <li>
                  <Link href="/products/projectpilot-ai" className="text-sm text-text-secondary-brand hover:text-text-brand transition-colors">
                    ProjectPilot AI <span className="text-[10px] text-primary bg-primary/10 px-1 py-0.5 rounded">Flag</span>
                  </Link>
                </li>
                <li>
                  <Link href="/products/governance-ai" className="text-sm text-text-secondary-brand hover:text-text-brand transition-colors">
                    Governance AI
                  </Link>
                </li>
                <li>
                  <Link href="/products/pmo-intelligence" className="text-sm text-text-secondary-brand hover:text-text-brand transition-colors">
                    PMO Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="/products/delivery-intelligence" className="text-sm text-text-secondary-brand hover:text-text-brand transition-colors">
                    Delivery Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="/products/portfoliopilot-ai" className="text-sm text-text-secondary-brand hover:text-text-brand transition-colors">
                    PortfolioPilot AI
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-text-brand tracking-wider">Services</h3>
              <ul role="list" className="mt-4 space-y-2.5">
                <li>
                  <Link href="/services/pmo-setup" className="text-sm text-text-secondary-brand hover:text-text-brand transition-colors">
                    PMO Setup
                  </Link>
                </li>
                <li>
                  <Link href="/services/pm-consulting" className="text-sm text-text-secondary-brand hover:text-text-brand transition-colors">
                    PM Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/services/agile-transformation" className="text-sm text-text-secondary-brand hover:text-text-brand transition-colors">
                    Agile Transformation
                  </Link>
                </li>
                <li>
                  <Link href="/services/digital-transformation" className="text-sm text-text-secondary-brand hover:text-text-brand transition-colors">
                    Digital Transformation
                  </Link>
                </li>
                <li>
                  <Link href="/services/project-rescue" className="text-sm text-text-secondary-brand hover:text-text-brand transition-colors">
                    Project Rescue
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-text-brand tracking-wider">Company</h3>
              <ul role="list" className="mt-4 space-y-2.5">
                <li>
                  <Link href="/about" className="text-sm text-text-secondary-brand hover:text-text-brand transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-text-secondary-brand hover:text-text-brand transition-colors">
                    Blog & Articles
                  </Link>
                </li>
                <li>
                  <Link href="/book-demo" className="text-sm text-text-secondary-brand hover:text-text-brand transition-colors">
                    Book Demo
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-text-secondary-brand hover:text-text-brand transition-colors">
                    Contact Sales
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-text-brand tracking-wider">Legal</h3>
              <ul role="list" className="mt-4 space-y-2.5">
                <li>
                  <Link href="/privacy" className="text-sm text-text-secondary-brand hover:text-text-brand transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-text-secondary-brand hover:text-text-brand transition-colors">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-sm text-text-secondary-brand hover:text-text-brand transition-colors">
                    Security Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border-brand/60 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-xs text-text-secondary-brand">
            &copy; {new Date().getFullYear()} PMPilot Technology Solutions Pvt Ltd. All rights reserved.
          </p>
          <p className="text-[10px] text-text-secondary-brand/75 mt-2 md:mt-0 max-w-sm">
            Disclaimer: portal.pmpilot.in and ProjectPilot AI are under active beta testing. Access is restricted to authorized enterprise partners only.
          </p>
        </div>
      </div>
    </footer>
  );
}
