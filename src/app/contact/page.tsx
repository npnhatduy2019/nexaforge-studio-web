"use client";

import React, { useState } from "react";
import { Badge } from "@/components/Badge";
import {
  MailIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  BoxesIcon,
} from "@/components/icons";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    product: "docvault-ai",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-slate-200/80 bg-grid-pattern py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Direct Communication</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Request a Technical Demo or Partnership
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Connect directly with the NexaForge Studio engineering team. Whether you need a private pilot of DocVault AI, an AssetFlow evaluation, or an architectural consultation, we respond within 24 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
                      <CheckCircleIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Request Received</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for contacting NexaForge Studio. Our lead engineering team will review your requirements and reach out via <strong>{formData.workEmail}</strong> shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-4 py-2 text-xs font-semibold text-teal-700 hover:text-teal-800 bg-teal-50 rounded-lg transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Submit Inquiries & Pilot Requests</h2>
                      <p className="text-xs text-slate-500 mt-1">Please provide corporate or work email address for faster evaluation.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="fullName">
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          required
                          type="text"
                          placeholder="e.g. Alex Nguyen"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="workEmail">
                          Work Email *
                        </label>
                        <input
                          id="workEmail"
                          required
                          type="email"
                          placeholder="alex@company.com"
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="company">
                          Company / Organization *
                        </label>
                        <input
                          id="company"
                          required
                          type="text"
                          placeholder="Company Ltd."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="product">
                          Area of Interest *
                        </label>
                        <select
                          id="product"
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                        >
                          <option value="docvault-ai">DocVault AI (Early Access Beta)</option>
                          <option value="assetflow">AssetFlow (Enterprise Asset Management)</option>
                          <option value="claude-startup">Claude for Startups / Strategic Partnership</option>
                          <option value="custom-apex">Custom Oracle APEX + AI Engineering</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="message">
                        Operational Challenges & Scope
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about the volume of documents, number of facilities, or existing ERP systems involved..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-slate-900 hover:bg-teal-700 text-white font-semibold text-sm shadow-sm hover:shadow transition-all duration-150"
                    >
                      <span>Submit Request</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
                      <ShieldCheckIcon className="w-3.5 h-3.5 text-teal-600" />
                      <span>Zero spam. Enterprise NDA signed upon request prior to technical sharing.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Studio Info Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Direct Contact Channels
                </h3>
                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MailIcon className="w-4 h-4 text-teal-700 mt-1 shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-medium">General & Founder Inquiries</div>
                      <a href="mailto:contact@nexaforge.studio" className="font-semibold text-slate-900 hover:text-teal-700">
                        contact@nexaforge.studio
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MailIcon className="w-4 h-4 text-indigo-700 mt-1 shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Engineering & Claude AI Pilots</div>
                      <a href="mailto:engineering@nexaforge.studio" className="font-semibold text-slate-900 hover:text-teal-700">
                        engineering@nexaforge.studio
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  What Happens Next?
                </h4>
                <ol className="space-y-2.5 text-xs text-slate-600 list-decimal list-inside leading-relaxed">
                  <li><strong>Triage:</strong> Our technical founder reviews your inquiry directly within 24 hours.</li>
                  <li><strong>Discovery:</strong> A 30-minute technical session to understand database schema or document workflow needs.</li>
                  <li><strong>Pilot Scope:</strong> Clear milestones, sandbox environment, or tailored architecture proposal.</li>
                </ol>
              </div>

              <div className="p-6 rounded-2xl bg-teal-900 text-teal-50 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-300">
                  Independent Studio Commitment
                </div>
                <p className="text-xs text-teal-100 leading-relaxed">
                  We are vendor-neutral and independent. We respect existing corporate contracts and maintain total confidentiality across all industry engagements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
