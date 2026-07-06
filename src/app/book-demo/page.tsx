"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar as CalendarIcon, Clock, Users, Shield, CheckCircle, ArrowRight } from "lucide-react";

export default function BookDemoPage() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    goals: "",
  });

  // Simple mock calendar dates (e.g. days of July 2026)
  const AVAILABLE_DATES = [
    { day: 7, label: "Tue", active: true },
    { day: 8, label: "Wed", active: true },
    { day: 9, label: "Thu", active: true },
    { day: 10, label: "Fri", active: true },
    { day: 13, label: "Mon", active: true },
    { day: 14, label: "Tue", active: true },
    { day: 15, label: "Wed", active: true },
  ];

  const TIME_SLOTS = [
    "10:00 AM IST",
    "11:30 AM IST",
    "02:00 PM IST",
    "03:30 PM IST",
    "05:00 PM IST",
  ];

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
    setSelectedTime(null);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && selectedDate && selectedTime) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-mesh-grid">
      <Navbar />

      <main className="flex-grow pt-16 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              LIVE WORKSPACE WALKTHROUGH
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-text-brand mt-3 mb-4">
              Book a PMPilot Demo
            </h1>
            <p className="text-sm text-text-secondary-brand leading-relaxed">
              Schedule a 30-minute interactive session with a project delivery specialist to see how ProjectPilot AI maps BRDs and constructs execution plans.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-border-brand shadow-premium overflow-hidden">
            {submitted ? (
              <div className="p-8 sm:p-16 text-center space-y-5">
                <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h2 className="text-xl font-extrabold text-text-brand">Demo Scheduled Successfully</h2>
                <div className="p-4 rounded-2xl bg-background-brand/60 border border-border-brand max-w-md mx-auto text-left space-y-2">
                  <div className="text-xs font-bold text-text-brand flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-primary" />
                    <span>July {selectedDate}, 2026</span>
                  </div>
                  <div className="text-xs font-bold text-text-brand flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{selectedTime}</span>
                  </div>
                  <div className="text-xs text-text-secondary-brand pt-1 border-t border-border-brand/40">
                    Host: PMPilot Systems Engineer<br />
                    Location: Google Meet (Calendar link sent to {formData.email})
                  </div>
                </div>
                <p className="text-xs text-text-secondary-brand max-w-sm mx-auto leading-relaxed">
                  We look forward to meeting you! If you need to make adjustments, please reply directly to the calendar invite.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSelectedDate(null);
                      setSelectedTime(null);
                      setFormData({ name: "", email: "", org: "", goals: "" });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer"
                  >
                    Book another slot
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                {/* Left: Scheduler Calendar (7 cols) */}
                <div className="md:col-span-7 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-border-brand">
                  <h3 className="text-sm font-bold text-text-brand mb-4 flex items-center gap-2">
                    <CalendarIcon className="h-4.5 w-4.5 text-primary" />
                    1. Select a Date & Time
                  </h3>

                  {/* Date Grid */}
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold text-text-secondary-brand uppercase tracking-wider">
                      July 2026
                    </span>
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                      {AVAILABLE_DATES.map((date) => (
                        <button
                          key={date.day}
                          onClick={() => handleDateClick(date.day)}
                          className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                            selectedDate === date.day
                              ? "bg-primary border-primary text-white shadow-sm"
                              : "bg-white border-border-brand text-text-brand hover:border-primary/40"
                          }`}
                        >
                          <span className="text-[10px] font-semibold opacity-80">{date.label}</span>
                          <span className="text-sm font-bold mt-1">{date.day}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time slots */}
                  {selectedDate && (
                    <div className="mt-8 space-y-4 animate-fade-in">
                      <span className="text-[10px] font-bold text-text-secondary-brand uppercase tracking-wider block">
                        Available slots for July {selectedDate}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {TIME_SLOTS.map((time) => (
                          <button
                            key={time}
                            onClick={() => handleTimeClick(time)}
                            className={`px-4 py-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                              selectedTime === time
                                ? "bg-secondary border-secondary text-white shadow-sm"
                                : "bg-white border-border-brand text-text-brand hover:border-secondary/40"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Confirmation Form (5 cols) */}
                <div className="md:col-span-5 p-6 sm:p-8 bg-background-brand/30 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-text-brand mb-4 flex items-center gap-2">
                      <Clock className="h-4.5 w-4.5 text-primary" />
                      2. Confirm Details
                    </h3>

                    {selectedDate && selectedTime ? (
                      <form onSubmit={handleConfirmBooking} className="space-y-4 text-left">
                        <div>
                          <label className="block text-[10px] font-bold text-text-brand mb-1">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            placeholder="John Doe"
                            className="w-full px-3 py-2 text-xs bg-white border border-border-brand rounded-lg focus:outline-none focus:border-primary text-text-brand"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-text-brand mb-1">
                            Business Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            placeholder="john@company.com"
                            className="w-full px-3 py-2 text-xs bg-white border border-border-brand rounded-lg focus:outline-none focus:border-primary text-text-brand"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-text-brand mb-1">
                            Organization
                          </label>
                          <input
                            type="text"
                            name="org"
                            value={formData.org}
                            onChange={handleFormChange}
                            placeholder="Acme Corp"
                            className="w-full px-3 py-2 text-xs bg-white border border-border-brand rounded-lg focus:outline-none focus:border-primary text-text-brand"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-text-brand mb-1">
                            Specific Goals (Optional)
                          </label>
                          <textarea
                            name="goals"
                            rows={3}
                            value={formData.goals}
                            onChange={handleFormChange}
                            placeholder="I want to see JIRA sync..."
                            className="w-full px-3 py-2 text-xs bg-white border border-border-brand rounded-lg focus:outline-none focus:border-primary text-text-brand resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-primary to-secondary hover:opacity-95 shadow transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-1"
                        >
                          Confirm Booking
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </form>
                    ) : (
                      <div className="h-60 flex flex-col items-center justify-center text-center text-text-secondary-brand/60 border-2 border-dashed border-border-brand rounded-2xl p-4">
                        <Users className="h-8 w-8 mb-2 opacity-40" />
                        <p className="text-xs font-medium">
                          Please select a date and time slot on the calendar first.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Trust factors */}
                  <div className="border-t border-border-brand/60 mt-6 pt-4 space-y-2 text-left">
                    <div className="flex items-center gap-2 text-[10px] text-text-secondary-brand font-medium">
                      <Shield className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                      <span>Private 1-on-1 Workspace Tour</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
