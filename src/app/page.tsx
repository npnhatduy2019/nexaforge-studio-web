import React from "react";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import {
  SparklesIcon,
  FileTextIcon,
  BoxesIcon,
  ShieldCheckIcon,
  DatabaseIcon,
  CpuIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  NetworkIcon,
  ScanTextIcon,
  LockIcon,
  BarChart3Icon,
  ServerIcon,
} from "@/components/icons";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/80 bg-grid-pattern pt-16 pb-20 md:pt-24 md:pb-28">
        {/* Soft radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-teal-100/60 to-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-200/90 bg-teal-50/80 text-teal-800 text-xs font-semibold tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span>NexaForge Studio</span>
              <span className="text-teal-400">•</span>
              <span className="text-slate-600 font-normal">AI-Powered Enterprise Software</span>
            </div>

            {/* Core Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Intelligent Software. <br />
              <span className="bg-gradient-to-r from-slate-900 via-teal-800 to-teal-600 bg-clip-text text-transparent">
                Simpler Operations.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We build modern enterprise applications that transform complex workflows into secure, efficient, and intelligent experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Link
                href="/products/docvault-ai"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Explore DocVault AI</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/products/assetflow"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300/80 rounded-lg transition-colors"
              >
                <span>View AssetFlow</span>
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-teal-700 hover:text-teal-800 hover:bg-teal-50 rounded-lg transition-colors"
              >
                <span>Request Demo</span>
              </Link>
            </div>

            {/* 3 Pillars Quick Badges */}
            <div className="pt-8 border-t border-slate-200/70 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50/80 border border-slate-200/60">
                <div className="w-8 h-8 rounded bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <DatabaseIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Oracle APEX</div>
                  <div className="text-[11px] text-slate-500">Enterprise Data & Security</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50/80 border border-slate-200/60">
                <div className="w-8 h-8 rounded bg-indigo-100 text-indigo-800 flex items-center justify-center shrink-0">
                  <CpuIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">AI Automation</div>
                  <div className="text-[11px] text-slate-500">Claude API & n8n Workflows</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50/80 border border-slate-200/60">
                <div className="w-8 h-8 rounded bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                  <ScanTextIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Document Intelligence</div>
                  <div className="text-[11px] text-slate-500">OCR & Contextual Extraction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLAGSHIP & SECOND PRODUCT SHOWCASE */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
              <span>Studio Ecosystem</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Products
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Specialized enterprise software engineered for security, reliability, and measurable operational speed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CARD 1: DocVault AI (Flagship) */}
            <div className="relative flex flex-col rounded-2xl bg-white border border-slate-200 p-8 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shadow-xs">
                    <SparklesIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">DocVault AI</h3>
                    <p className="text-xs font-medium text-indigo-600">Flagship Intelligence Platform</p>
                  </div>
                </div>
                <Badge variant="in-development">In Development (AI Core)</Badge>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                <strong>Smarter document processing and management.</strong> DocVault AI fuses multi-pass OCR and Claude API intelligence to transform unstructured contracts, invoices, and technical documentation into structured, searchable enterprise data.
              </p>

              {/* Feature Highlights */}
              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Secure Document Vault:</span> Centralized role-based document storage with audit history and strict access controls.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Multi-Pass OCR Pipeline:</span> High-accuracy text extraction from scans, multi-page PDFs, and complex receipts.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">AI</span>
                  <div>
                    <span className="font-semibold text-slate-900">Claude-Powered Semantic Extraction:</span> Automated key-value extraction and multi-language legal synthesis (in active lab testing).
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">Stack: Oracle + Claude 3.5 + OCR</span>
                <Link
                  href="/products/docvault-ai"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 group"
                >
                  <span>Product Specs</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* CARD 2: AssetFlow (Second Product) */}
            <div className="relative flex flex-col rounded-2xl bg-white border border-slate-200 p-8 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center shadow-xs">
                    <BoxesIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">AssetFlow</h3>
                    <p className="text-xs font-medium text-teal-700">Enterprise Operations</p>
                  </div>
                </div>
                <Badge variant="enterprise">Enterprise Ready</Badge>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                <strong>Enterprise asset lifecycle management.</strong> AssetFlow gives operational leaders total visibility over corporate physical assets, maintenance cycles, depreciation, and cross-facility transfers on top of high-integrity database engines.
              </p>

              {/* Feature Highlights */}
              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">End-to-End Asset Lifecycle:</span> Commissioning, allocation, transfer, depreciation, and decommission workflows.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Audit & Physical Verification:</span> QR code / barcode generation and mobile-friendly field reconciliation.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Preventive Maintenance Schedules:</span> Automated alerts for warranties, inspections, and compliance checks.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">Stack: Oracle APEX + PL/SQL + REST</span>
                <Link
                  href="/products/assetflow"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 group"
                >
                  <span>Explore Features</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES & TECH MATRIX */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
              Engineering Architecture
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Engineered for Enterprise Stability & Modern AI
            </h3>
            <p className="mt-4 text-base text-slate-600">
              We do not build brittle prototypes. NexaForge systems combine enterprise database reliability with leading-edge foundation models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-teal-200 transition-all">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                <DatabaseIcon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-2">Oracle APEX Backbone</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Relational integrity, ACID compliance, and sub-millisecond data processing handling millions of operational records with ease.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-200 transition-all">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center mb-4">
                <CpuIcon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-2">Claude API Intelligence</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deep document comprehension, contract extraction, and multi-turn reasoning with industry-leading context windows and precision.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-sky-200 transition-all">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center mb-4">
                <ScanTextIcon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-2">High-Res OCR Engine</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pre-processing, de-skewing, and multi-language OCR tailored for messy business paperwork, bills of lading, and tax invoices.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-200 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <NetworkIcon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-2">n8n Workflow Hub</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Self-hosted, auditable event orchestration connecting webhooks, third-party ERPs, and batch notification pipelines without lock-in.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              <span>Explore detailed architectural specifications</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CLAUDE FOR STARTUPS & STUDIO ROADMAP */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/60 border border-indigo-700 text-indigo-300 text-xs font-semibold">
                <SparklesIcon className="w-3.5 h-3.5" />
                <span>Next-Gen Enterprise Vision</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Building Independent SaaS for Real-World Industry Workflows
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                NexaForge Studio is an independent software studio founded with a clear mandate: bridge the divide between legacy enterprise operations and frontier AI capabilities. We are preparing our flagship DocVault AI for the Claude for Startups track to scale automated document intelligence globally.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheckIcon className="w-4 h-4 text-teal-400" />
                  <span>Zero Data Training on Client Files</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <LockIcon className="w-4 h-4 text-teal-400" />
                  <span>Isolated Tenant Architecture</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ServerIcon className="w-4 h-4 text-teal-400" />
                  <span>On-Premise & Cloud Hybrid Support</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
              <div className="p-6 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
                <h4 className="font-bold text-white text-base">Request Technical Demo</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Interested in testing DocVault AI beta or deploying AssetFlow in your enterprise? Get in touch with our engineering team directly.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs tracking-wide transition-colors"
                >
                  <span>Book Technical Session</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-2">
                <div className="text-xs font-semibold text-slate-300">About the Studio</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Learn about our founder background, enterprise low-code pedigree, and technical philosophy.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-teal-400 hover:text-teal-300 pt-1"
                >
                  <span>Read Founder Story</span>
                  <ArrowRightIcon className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
