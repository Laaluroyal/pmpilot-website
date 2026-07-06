"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "projectpilot",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "projectpilot",
        message: "",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-mesh-grid">
      <Navbar />

      <main className="flex-grow pt-16 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider mb-3">
              <MessageSquare className="h-4 w-4" />
              Connect with us
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-text-brand mb-4">
              Contact Sales & Advisory
            </h1>
            <p className="text-sm text-text-secondary-brand leading-relaxed">
              Have questions about ProjectPilot AI, integration options, or PMO consulting programs? Drop us a line and our partner advisory team will respond within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
            {/* Contact Details (Left side) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="p-6 rounded-3xl bg-white border border-border-brand shadow-premium space-y-6">
                <h2 className="text-base font-bold text-text-brand mb-2">Corporate Office</h2>
                
                <div className="flex items-start gap-4">
                  <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-text-brand">Address</h3>
                    <p className="text-xs text-text-secondary-brand mt-1 leading-relaxed">
                      PMPilot.in Technology Solutions Pvt Ltd,<br />
                      1/547, Anantapur District,<br />
                      AndhraPradesh, 515401
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-9 w-9 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="absolute h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-text-brand">Email Contacts</h3>
                    <p className="text-xs text-text-secondary-brand mt-1 leading-relaxed">
                      Sales: <a href="mailto:laalutej111@gmail.com" className="text-primary hover:underline">laalutej111@gmail.com</a><br />
                      Support: <a href="mailto:Laalutej111@gmail.com" className="text-primary hover:underline">laalutej111@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Demo callout */}
              <div className="p-6 rounded-3xl bg-gradient-to-tr from-primary to-secondary text-white space-y-4 shadow-lg shadow-primary/15">
                <h3 className="text-sm font-bold">Prefer a live walkthrough?</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Book a direct 30-minute workspace demo. We'll show you how to digest specs and sync tasks in real time.
                </p>
                <div>
                  <a
                    href="/book-demo"
                    className="inline-flex items-center gap-1 text-xs font-bold text-white hover:underline"
                  >
                    Schedule a Demo
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form (Right side) */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-border-brand p-6 sm:p-8 shadow-premium">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-text-brand">Query Received</h3>
                  <p className="text-xs text-text-secondary-brand max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out! Our project governance advisory team has received your message and will follow up shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline mt-4 cursor-pointer"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-text-brand mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2 text-xs bg-background-brand border border-border-brand rounded-xl focus:outline-none focus:border-primary text-text-brand"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-text-brand mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company"
                        className="w-full px-3.5 py-2 text-xs bg-background-brand border border-border-brand rounded-xl focus:outline-none focus:border-primary text-text-brand"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-brand mb-1.5">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      className="w-full px-3.5 py-2 text-xs bg-background-brand border border-border-brand rounded-xl focus:outline-none focus:border-primary text-text-brand"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-brand mb-1.5">
                      Area of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 text-xs bg-background-brand border border-border-brand rounded-xl focus:outline-none focus:border-primary text-text-brand cursor-pointer"
                    >
                      <option value="projectpilot">ProjectPilot AI (Flagship Product)</option>
                      <option value="governance">Governance AI / Compliance Tools</option>
                      <option value="pmo">PMO Setup & Optimizations</option>
                      <option value="rescue">Project Rescue Services</option>
                      <option value="other">General Sales Query</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-brand mb-1.5">
                      Message / Request details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Outline details of your project, size of team, or specific compliance objectives..."
                      className="w-full px-3.5 py-2 text-xs bg-background-brand border border-border-brand rounded-xl focus:outline-none focus:border-primary text-text-brand resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-primary to-secondary hover:opacity-95 shadow-md shadow-primary/10 transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    Submit Query
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
