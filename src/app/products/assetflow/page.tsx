import React from "react";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import {
  BoxesIcon,
  ShieldCheckIcon,
  DatabaseIcon,
  BarChart3Icon,
  CheckCircleIcon,
  ArrowRightIcon,
  LockIcon,
  ServerIcon,
  WorkflowIcon,
  ExternalLinkIcon,
} from "@/components/icons";

export const metadata = {
  title: "AssetFlow | Enterprise Asset Management | NexaForge Studio",
  description: "AssetFlow delivers end-to-end enterprise asset lifecycle management, maintenance tracking, barcode audits, and financial depreciation built on Oracle APEX.",
};

export default function AssetFlowPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Product Hero */}
      <section className="bg-white border-b border-slate-200/80 bg-grid-pattern py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Studio Ecosystem</span>
              <span className="text-slate-300">•</span>
              <Badge variant="enterprise">Enterprise Ready</Badge>
              <Badge variant="tech">Oracle APEX Core</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              AssetFlow: <br />
              <span className="bg-gradient-to-r from-teal-800 via-teal-700 to-teal-500 bg-clip-text text-transparent">
                Enterprise Asset Lifecycle Management
              </span>
            </h1>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Total operational control over corporate capital assets, physical audit verification, maintenance work orders, and depreciation accounting. Engineered for distributed enterprises with multi-branch, multi-warehouse operational footprints.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://oracleapex.com/ords/r/sgwebtools/sgc-ams/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-sm hover:shadow transition-colors group"
              >
                <span>Launch Live Interactive Demo</span>
                <ExternalLinkIcon className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <span>Request Custom Deployment</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE INTERACTIVE DEMO SANDBOX BANNER */}
      <section className="bg-slate-900 text-white py-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 border border-teal-500/30 p-6 sm:p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  <span>Live Production Sandbox Available</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Experience AssetFlow Live on Oracle APEX
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We have prepared a live cloud sandbox on Oracle APEX. Explore the actual relational asset register, depreciation schedules, audit reconciliations, and role-based permissions without waiting for a scheduled sales call.
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <CheckCircleIcon className="w-4 h-4 text-teal-400" />
                    <span>Real-time ACID Transactions</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircleIcon className="w-4 h-4 text-teal-400" />
                    <span>Sub-100ms Query Performance</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircleIcon className="w-4 h-4 text-teal-400" />
                    <span>Sample Data Preloaded</span>
                  </span>
                </div>
              </div>

              {/* Sandbox Credentials Card */}
              <div className="lg:col-span-5 bg-slate-950/80 rounded-xl border border-teal-500/40 p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold">
                    Sandbox Credentials
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800">
                    Read & Operate
                  </span>
                </div>

                <div className="space-y-2.5 text-xs font-mono">
                  <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">Username:</span>
                    <span className="text-teal-300 font-bold tracking-wide">userdev</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">Password:</span>
                    <span className="text-teal-300 font-bold tracking-wide">Admin@123</span>
                  </div>
                </div>

                <a
                  href="https://oracleapex.com/ords/r/sgwebtools/sgc-ams/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs tracking-wider uppercase transition-colors shadow-sm"
                >
                  <span>Open Live APEX Sandbox</span>
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>

                <p className="text-[10px] text-slate-400 text-center">
                  Hosted on Oracle Cloud Infrastructure • Isolated Sandbox Workspace
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">Core Modules</h2>
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              From Procurement to Decommission
            </h3>
            <p className="mt-2 text-slate-600 text-sm">
              AssetFlow eliminates manual spreadsheets, lost hardware, and ghost assets through strict relational data integrity and mobile-ready field tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Lifecycle Tracking */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-teal-200 transition-all flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                <BoxesIcon className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">End-to-End Asset Tracking</h4>
              <p className="text-xs text-slate-600 leading-relaxed flex-1">
                Log every transition from capital purchase, serial numbering, custodian assignment, departmental relocation, to repair or final write-off.
              </p>
              <div className="pt-4 border-t border-slate-200/60 text-[11px] font-mono text-teal-700 font-semibold">
                Status: Production Ready
              </div>
            </div>

            {/* 2. QR & Barcode Mobile Audit */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-teal-200 transition-all flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                <BarChart3Icon className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Physical Reconciliation & Audits</h4>
              <p className="text-xs text-slate-600 leading-relaxed flex-1">
                Generate high-density barcodes and QR asset tags. Conduct physical stocktakes via smartphone or industrial handheld scanner with instant book discrepancy reports.
              </p>
              <div className="pt-4 border-t border-slate-200/60 text-[11px] font-mono text-teal-700 font-semibold">
                Status: Field Tested
              </div>
            </div>

            {/* 3. Preventive Maintenance */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-teal-200 transition-all flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                <WorkflowIcon className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Maintenance Work Orders</h4>
              <p className="text-xs text-slate-600 leading-relaxed flex-1">
                Automated calendar triggers for preventive equipment service, calibration certificates, vendor warranty expirations, and replacement parts tracking.
              </p>
              <div className="pt-4 border-t border-slate-200/60 text-[11px] font-mono text-teal-700 font-semibold">
                Status: Production Ready
              </div>
            </div>

            {/* 4. Depreciation & Financial Books */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-teal-200 transition-all flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                <DatabaseIcon className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Automated Depreciation</h4>
              <p className="text-xs text-slate-600 leading-relaxed flex-1">
                Configurable depreciation schedules (straight-line, double-declining balance, units of production) calculating monthly book values and salvage values automatically.
              </p>
              <div className="pt-4 border-t border-slate-200/60 text-[11px] font-mono text-teal-700 font-semibold">
                Status: Production Ready
              </div>
            </div>

            {/* 5. Enterprise Multi-Location Hierarchy */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-teal-200 transition-all flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                <ServerIcon className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Multi-Entity & Multi-Site</h4>
              <p className="text-xs text-slate-600 leading-relaxed flex-1">
                Manage assets across subsidiaries, regional branches, distribution centers, and stores with localized permission fences and centralized corporate reporting.
              </p>
              <div className="pt-4 border-t border-slate-200/60 text-[11px] font-mono text-teal-700 font-semibold">
                Status: Production Ready
              </div>
            </div>

            {/* 6. AI Predictive Health (In Dev) */}
            <div className="p-6 rounded-xl border border-indigo-200/70 bg-indigo-50/20 hover:bg-indigo-50/40 transition-all flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center">
                  <WorkflowIcon className="w-5 h-5" />
                </div>
                <Badge variant="in-development">In Development</Badge>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">AI Predictive Maintenance</h4>
              <p className="text-xs text-slate-600 leading-relaxed flex-1">
                Experimental telemetry and maintenance anomaly detection module utilizing machine learning models to forecast machinery breakdown patterns.
              </p>
              <div className="pt-4 border-t border-indigo-200/60 text-[11px] font-mono text-indigo-700 font-semibold">
                Status: In Development (R&D)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ORACLE APEX FOUNDATION */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
                Architectural Advantage
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Built on Oracle APEX: Zero Fluff, 100% Relational Integrity
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Many modern SaaS tools use fragile microservice layers that compromise database consistency during high-volume inventory operations. AssetFlow is engineered directly within the Oracle database tier:
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 shrink-0" />
                  <span><strong>Zero Data Desynchronization:</strong> Transactional ACID compliance prevents duplicate serial codes or lost transfer records.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 shrink-0" />
                  <span><strong>Enterprise Security:</strong> Integrated Oracle database RBAC, Virtual Private Database (VPD) segregation, and complete audit tables.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 shrink-0" />
                  <span><strong>Sub-second Performance:</strong> Reporting and asset queries execute in milliseconds, even on millions of active serial numbers.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                AssetFlow Operational Metric Summary
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/70">
                  <div className="text-2xl font-extrabold text-slate-900">100%</div>
                  <div className="text-[11px] text-slate-500 mt-1">Audit Trail Coverage</div>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/70">
                  <div className="text-2xl font-extrabold text-teal-700">&lt; 100ms</div>
                  <div className="text-[11px] text-slate-500 mt-1">Average Query Response</div>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/70">
                  <div className="text-2xl font-extrabold text-slate-900">0%</div>
                  <div className="text-[11px] text-slate-500 mt-1">Ghost Asset Discrepancy</div>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/70">
                  <div className="text-2xl font-extrabold text-teal-700">REST</div>
                  <div className="text-[11px] text-slate-500 mt-1">Bi-Directional ERP APIs</div>
                </div>
              </div>
              <Link
                href="/contact"
                className="block text-center w-full py-3 px-4 rounded-lg bg-slate-900 hover:bg-teal-700 text-white font-semibold text-xs tracking-wide transition-colors"
              >
                Schedule Technical Architecture Review
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
