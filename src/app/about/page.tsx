import React from "react";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import {
  SparklesIcon,
  ShieldCheckIcon,
  DatabaseIcon,
  CpuIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ServerIcon,
  LockIcon,
} from "@/components/icons";

export const metadata = {
  title: "About Us | Founder & Studio Story | NexaForge Studio",
  description: "Learn about the mission, engineering principles, and technical founder story behind NexaForge Studio.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200/80 bg-grid-pattern py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Studio Origin & Vision</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Engineering Practical Intelligence for Enterprise Operations
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              NexaForge Studio was established as an independent software studio with a focused technical thesis: high-stakes enterprise operations do not need another experimental chatbot—they need rock-solid transactional engines augmented by reliable AI automation.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section id="story" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                The Bridge Between Deep Enterprise Operations and Frontier AI
              </h2>
              
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Many startups approach enterprise software from the outside, building flashy AI wrappers that break when confronted with real-world complexity—such as thousands of messy scanned invoices, distributed multi-warehouse inventories, or strict database audit trails.
                </p>
                <p>
                  Having architected enterprise-scale asset management and operational systems for high-volume retail logistics, our founding team recognized that the true unlock lies at the intersection of two distinct disciplines:
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-800">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <DatabaseIcon className="w-4 h-4 text-teal-700" />
                    <span>Discipline 1: Bulletproof Relational Engineering</span>
                  </div>
                  <p className="text-slate-600">
                    Oracle APEX, strict relational schemas, ACID transactional guarantees, zero ghost records, and enterprise-grade role-based security.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-800">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <CpuIcon className="w-4 h-4 text-indigo-700" />
                    <span>Discipline 2: Frontier Document & Cognitive AI</span>
                  </div>
                  <p className="text-slate-600">
                    Claude 3.5 Sonnet context windows, multi-pass OCR preprocessing, and self-hosted n8n workflow pipelines to eliminate human manual data entry.
                  </p>
                </div>
                <p>
                  By establishing NexaForge Studio as an independent software brand, we create a neutral, agile launchpad capable of serving diverse enterprise clients, expanding our SaaS footprint, and participating in global accelerator initiatives like <strong>Claude for Startups</strong>.
                </p>
              </div>
            </div>

            {/* Sidebar: Studio Principles */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider text-xs">
                  Studio Principles
                </h3>
                <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
                    <div>
                      <strong className="text-slate-900">Zero Technical Fluff:</strong> If a feature doesn't save measurable hours or prevent expensive errors, we don't build it.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
                    <div>
                      <strong className="text-slate-900">Honest AI Labeling:</strong> Features in active testing are labeled <em>In Development</em>. We never oversell experimental LLM outputs as infallible production facts.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
                    <div>
                      <strong className="text-slate-900">Data Sovereignty First:</strong> Zero training on client records, encrypted vaults, and on-premise or private VPC deployment options.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3">
                <Badge variant="in-development">Startup Track</Badge>
                <h4 className="font-bold text-lg">Claude for Startups Program</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We are developing DocVault AI with Anthropic's Claude API as the cognitive backbone, applying for the Claude for Startups program to accelerate intelligent enterprise document processing globally.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300"
                  >
                    <span>Connect regarding startup partnerships</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Partner with NexaForge Studio
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            Whether you are exploring private enterprise deployment for AssetFlow, piloting DocVault AI, or seeking bespoke software architecture, we welcome direct conversation.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 rounded-lg shadow-sm transition-colors"
            >
              <span>Get in Touch with Founders</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
