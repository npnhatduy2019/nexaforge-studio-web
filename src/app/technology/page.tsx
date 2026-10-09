import React from "react";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import {
  DatabaseIcon,
  CpuIcon,
  ScanTextIcon,
  NetworkIcon,
  ShieldCheckIcon,
  ServerIcon,
  LockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BoxesIcon,
  SparklesIcon,
} from "@/components/icons";

export const metadata = {
  title: "Technology Stack | NexaForge Studio",
  description: "Explore the core technologies powering NexaForge Studio: Oracle APEX, Claude API, Enterprise OCR, and n8n Workflow Automation.",
};

export default function TechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-slate-200/80 bg-grid-pattern py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Engineering Philosophy</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Enterprise Data Integrity Meets Frontier AI
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We reject brittle prototypes and hype-driven microservices. NexaForge Studio builds software on proven enterprise database engines paired strategically with frontier AI models.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="tech">Oracle APEX & PL/SQL</Badge>
              <Badge variant="tech">Claude API (Anthropic)</Badge>
              <Badge variant="tech">High-Res OCR Pipeline</Badge>
              <Badge variant="tech">n8n Self-Hosted Orchestration</Badge>
              <Badge variant="tech">Next.js & TypeScript</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Technology Pillars */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 1. Oracle APEX */}
          <div id="oracle-apex" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-24">
            <div className="lg:col-span-5 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 flex items-center justify-center">
                <DatabaseIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-teal-700 uppercase">Core Data Tier</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Oracle APEX</h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Oracle Application Express (APEX) provides the high-performance relational engine powering transactional systems like AssetFlow and DocVault core storage.
              </p>
            </div>
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Engineering Advantages</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Data-Centric Performance:</strong> Code runs directly in the database engine, eliminating ORM latency and serializing million-row queries in sub-second times.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Ironclad ACID Compliance:</strong> Financial depreciation, asset transfers, and document hash registrations will never corrupt or desync.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Enterprise RBAC & Security:</strong> Built-in session state protection, Cross-Site Scripting (XSS) defense, and fine-grained Virtual Private Database (VPD) tenant isolation.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* 2. Claude API */}
          <div id="claude-api" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-24">
            <div className="lg:col-span-5 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center">
                <CpuIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-indigo-700 uppercase">Intelligence Tier</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Claude API (Anthropic)</h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                DocVault AI harnesses Claude 3.5 Sonnet for document understanding, multi-turn reasoning, and high-precision structured data extraction.
              </p>
              <div className="pt-1">
                <Badge variant="in-development">Active Benchmarking & R&D</Badge>
              </div>
            </div>
            <div className="lg:col-span-7 bg-indigo-50/20 rounded-2xl border border-indigo-200/80 p-6 sm:p-8 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Engineering Advantages</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Superior Complex Document Reasoning:</strong> Claude models demonstrate unmatched accuracy on convoluted tabular layouts, fine print legal terms, and multi-page cross-referencing.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Strict JSON Schema Adherence:</strong> Reliable function calling and structured output guarantees extracted fields directly map to relational tables without parse errors.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Commercial Data Protection:</strong> Customer data transmitted to Claude API is never used to train frontier models, meeting stringent enterprise compliance standards.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* 3. OCR Pipeline */}
          <div id="ocr-pipeline" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-24">
            <div className="lg:col-span-5 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 text-sky-800 flex items-center justify-center">
                <ScanTextIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-sky-700 uppercase">Computer Vision Tier</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Multi-Pass OCR Pipeline</h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Raw real-world paperwork is crumpled, faded, and skewed. Our vision pipeline cleans and prepares scanned documents before text analysis begins.
              </p>
            </div>
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Engineering Advantages</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Intelligent Image Preprocessing:</strong> Automatic angle correction, shadow removal, adaptive thresholding, and resolution upscaling.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Spatial & Tabular Coordinate Mapping:</strong> Bounding boxes capture horizontal and vertical alignment so tables in shipping manifests retain column relationships.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Vietnamese & Multilingual Support:</strong> Full character coverage for accented diacritics and complex bilingual enterprise receipts.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* 4. n8n Automation */}
          <div id="n8n-automation" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-24">
            <div className="lg:col-span-5 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center">
                <NetworkIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-emerald-700 uppercase">Orchestration Tier</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">n8n Workflow Hub</h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Self-hosted, auditable automation connecting legacy ERPs, shared file servers, messaging channels, and scheduled batch tasks.
              </p>
            </div>
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Engineering Advantages</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Total Data Sovereignty:</strong> Self-hosted behind your corporate firewall or private cloud VPC with zero third-party data inspection.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Event-Driven Micro-Workflows:</strong> Automatically ingest inbound document emails, trigger OCR worker queues, and post status alerts to internal webhooks.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <strong>Resilient Retry Policies:</strong> Built-in rate limiting, failure alarms, and replay mechanisms for high-volume enterprise operations.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HYBRID PARADIGM */}
      <section id="architecture" className="py-16 md:py-24 bg-slate-900 text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Architectural Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Why We Combine Oracle APEX with Claude AI
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              In enterprise software, an AI hallucination on a financial balance or serial number is unacceptable. Our hybrid architectural pattern solves this fundamentally:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-4">
              <div className="text-xs font-mono font-semibold text-teal-400 uppercase">The Foundation: Relational Truth</div>
              <h3 className="text-xl font-bold text-white">Oracle Database & APEX</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Stores state, enforces permissions, validates foreign keys, and logs audits. Nothing exists in production unless it passes strict relational constraints and cryptographic verification.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-4">
              <div className="text-xs font-mono font-semibold text-indigo-400 uppercase">The Intelligence: Frontier Models</div>
              <h3 className="text-xl font-bold text-white">Claude 3.5 Sonnet & OCR</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Acts as the cognitive parser for unstructured inputs (PDFs, paper scans, customer messages). It parses and proposes structured data, which is then validated against relational constraints before commit.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-sm transition-colors"
            >
              <span>Discuss Architecture with Our Lead Engineer</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
