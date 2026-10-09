import React from "react";
import Link from "next/link";
import { SparklesIcon, ShieldCheckIcon, MailIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-teal-400 font-bold shadow-sm">
                <span className="text-sm tracking-tighter">N</span>
                <span className="text-teal-400 text-xs">▲</span>
              </div>
              <span className="font-bold text-slate-900 text-lg tracking-tight">
                NexaForge Studio
              </span>
            </div>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              AI-Powered Enterprise Software Studio. We architect intelligent, high-reliability software that transforms complex operational workflows into secure and automated business systems.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800 border border-teal-200">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                Independent Software Studio
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200">
                Claude for Startups Track
              </span>
            </div>
          </div>

          {/* Column: Products */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/products/docvault-ai"
                  className="hover:text-teal-600 transition-colors flex items-center justify-between"
                >
                  <span>DocVault AI</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-indigo-50 text-indigo-700 border border-indigo-100 font-medium">
                    Flagship
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/assetflow"
                  className="hover:text-teal-600 transition-colors flex items-center justify-between"
                >
                  <span>AssetFlow</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-200/80 text-slate-700 font-medium">
                    Enterprise
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/technology#architecture"
                  className="hover:text-teal-600 transition-colors"
                >
                  Architecture Matrix
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-teal-600 transition-colors"
                >
                  Request Early Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Technology */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Technology Stack
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/technology#oracle-apex" className="hover:text-teal-600 transition-colors">
                  Oracle APEX Engine
                </Link>
              </li>
              <li>
                <Link href="/technology#claude-api" className="hover:text-teal-600 transition-colors">
                  Claude API & Intelligence
                </Link>
              </li>
              <li>
                <Link href="/technology#ocr-pipeline" className="hover:text-teal-600 transition-colors">
                  Multi-Pass OCR Pipeline
                </Link>
              </li>
              <li>
                <Link href="/technology#n8n-automation" className="hover:text-teal-600 transition-colors">
                  n8n Event Orchestration
                </Link>
              </li>
              <li>
                <Link href="/technology#security" className="hover:text-teal-600 transition-colors">
                  Enterprise RBAC & Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Studio */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Studio & Contact
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-teal-600 transition-colors">
                  About the Founder
                </Link>
              </li>
              <li>
                <Link href="/about#story" className="hover:text-teal-600 transition-colors">
                  Studio Story & Mission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-600 transition-colors">
                  Schedule Technical Demo
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@nexaforge.studio"
                  className="hover:text-teal-600 transition-colors inline-flex items-center gap-1.5"
                >
                  <MailIcon className="w-3.5 h-3.5" />
                  <span>contact@nexaforge.studio</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 NexaForge Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <ShieldCheckIcon className="w-3.5 h-3.5 text-teal-600" />
              <span>Enterprise Data Isolation & Zero Data Leakage Standards</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
