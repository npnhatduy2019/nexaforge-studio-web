import React from "react";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import {
  SparklesIcon,
  FileTextIcon,
  ShieldCheckIcon,
  CpuIcon,
  ScanTextIcon,
  LockIcon,
  CheckCircleIcon,
  ClockIcon,
  ArrowRightIcon,
  ServerIcon,
  DatabaseIcon,
} from "@/components/icons";

export const metadata = {
  title: "DocVault AI | Intelligent Document Management | NexaForge Studio",
  description: "DocVault AI fuses OCR and Claude API intelligence to transform unstructured enterprise documents into structured, searchable operational data.",
};

export default function DocVaultAIPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Product Hero Header */}
      <section className="bg-white border-b border-slate-200/80 bg-grid-pattern py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Flagship Product</span>
              <span className="text-slate-300">•</span>
              <Badge variant="in-development">AI Core: In Development</Badge>
              <Badge variant="enterprise">Vault Architecture: Enterprise Ready</Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              DocVault AI: <br />
              <span className="bg-gradient-to-r from-indigo-700 via-teal-700 to-teal-600 bg-clip-text text-transparent">
                Intelligent Document Management
              </span>
            </h1>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Smarter document processing and management for modern enterprise operations. Fusing multi-engine OCR with Claude API intelligence to convert contracts, shipping manifests, invoices, and technical records into verified, searchable business assets.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 rounded-lg shadow-sm hover:shadow transition-colors"
              >
                <span>Request Early Access Beta</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <span>View Tech Specifications</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Status Disclaimer Box */}
      <section className="bg-amber-50/70 border-b border-amber-200/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start sm:items-center gap-3 text-xs text-amber-900">
            <span className="p-1 rounded bg-amber-200 text-amber-900 font-bold shrink-0">NOTICE</span>
            <p className="leading-relaxed">
              <strong>Engineering Integrity Notice:</strong> DocVault AI document ingestion, file vault, and RBAC schemas are production-ready. Advanced Claude-powered automated parsing, semantic vector search, and agentic workflows are currently <strong>In Development</strong> and under active benchmarking. We do not advertise unverified AI features as live production software.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive Grid */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">Capability Matrix</h2>
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Designed for High-Volume Enterprise Paperwork
            </h3>
            <p className="mt-2 text-slate-600 text-sm">
              Standard document stores just store PDFs. DocVault AI understands their structure, validates data against business rules, and protects corporate compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Secure Vault Storage */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-slate-300 transition-all flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center">
                  <LockIcon className="w-5 h-5" />
                </div>
                <Badge variant="enterprise">Enterprise Ready</Badge>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Enterprise Vault & RBAC</h4>
              <p className="text-xs text-slate-600 leading-relaxed flex-1">
                Role-based document classification, automated retention schedules, cryptographic tamper detection, and complete audit logging on Oracle database schemas.
              </p>
            </div>

            {/* 2. Multi-Pass OCR Pipeline */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-slate-300 transition-all flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center">
                  <ScanTextIcon className="w-5 h-5" />
                </div>
                <Badge variant="enterprise">Core Module</Badge>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Multi-Pass OCR Engine</h4>
              <p className="text-xs text-slate-600 leading-relaxed flex-1">
                Cleans, deskews, and binarizes degraded mobile scans, carbon copies, and faxed POs before feeding high-confidence bounding-box text into the intelligence layer.
              </p>
            </div>

            {/* 3. Claude Semantic Extraction */}
            <div className="p-6 rounded-xl border border-indigo-200/70 bg-indigo-50/20 hover:bg-indigo-50/40 transition-all flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center">
                  <CpuIcon className="w-5 h-5" />
                </div>
                <Badge variant="in-development">In Development</Badge>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Claude API Semantic Parser</h4>
              <p className="text-xs text-slate-600 leading-relaxed flex-1">
                Leveraging Claude 3.5 Sonnet's contextual reasoning to extract key line items, payment terms, tax IDs, and warranty expiration dates into validated JSON schemas.
              </p>
            </div>

            {/* 4. Natural Language Search */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-slate-300 transition-all flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center">
                  <SparklesIcon className="w-5 h-5" />
                </div>
                <Badge variant="in-development">In Development</Badge>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Semantic Document Search</h4>
              <p className="text-xs text-slate-600 leading-relaxed flex-1">
                Ask operational questions in plain language: <em>"Which vendor contracts from Q2 2025 have auto-renewal clauses over 60 days?"</em> and get direct page citations.
              </p>
            </div>

            {/* 5. Automated Data Validation */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-slate-300 transition-all flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center">
                  <CheckCircleIcon className="w-5 h-5" />
                </div>
                <Badge variant="enterprise">Enterprise Ready</Badge>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Cross-Database Validation</h4>
              <p className="text-xs text-slate-600 leading-relaxed flex-1">
                Extracted invoice numbers, customer tax codes, and PO amounts are immediately reconciled against core transactional tables to flag anomalies before approval.
              </p>
            </div>

            {/* 6. n8n Enterprise Ingestion */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-slate-300 transition-all flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
                  <ServerIcon className="w-5 h-5" />
                </div>
                <Badge variant="enterprise">Enterprise Ready</Badge>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Automated Multi-Channel Ingestion</h4>
              <p className="text-xs text-slate-600 leading-relaxed flex-1">
                Listen to shared inbox emails, SFTP drop folders, webhook endpoints, and cloud object stores via self-hosted n8n workflows with zero vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PIPELINE ARCHITECTURE SECTION */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">Process Architecture</h2>
            <h3 className="text-3xl font-extrabold text-slate-900">How DocVault AI Processes Documents</h3>
            <p className="mt-2 text-sm text-slate-600">
              A disciplined four-stage pipeline ensuring data privacy, extraction accuracy, and relational persistence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 text-center relative">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center mx-auto mb-3">1</div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Ingest & Authenticate</h4>
              <p className="text-xs text-slate-600">Multi-format file upload, hash generation, malware check & encryption at rest.</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 text-center relative">
              <div className="w-8 h-8 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center mx-auto mb-3">2</div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">OCR & Layering</h4>
              <p className="text-xs text-slate-600">Image enhancement, bounding box character recognition, and tabular normalization.</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-indigo-200 bg-indigo-50/20 text-center relative">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center mx-auto mb-3">3</div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Claude 3.5 Inference</h4>
              <div className="inline-block mb-1">
                <Badge variant="in-development">In Dev</Badge>
              </div>
              <p className="text-xs text-slate-600">Structured prompt extraction, schema validation, and confidence scoring.</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 text-center relative">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center mx-auto mb-3">4</div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Enterprise Commit</h4>
              <p className="text-xs text-slate-600">Commit to relational database, triggers n8n alerts, and indexes for audit search.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Interested in DocVault AI Early Access?
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            We are selecting pilot enterprise partners to evaluate our automated document processing pipeline. Get in touch with our engineering team today.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 rounded-lg shadow-sm transition-colors"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
