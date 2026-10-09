"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SparklesIcon, ArrowRightIcon } from "@/components/icons";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "DocVault AI", href: "/products/docvault-ai", badge: "AI Flagship" },
    { label: "AssetFlow", href: "/products/assetflow", badge: "Enterprise" },
    { label: "Technology", href: "/technology" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-teal-400 font-bold shadow-sm group-hover:bg-slate-800 transition-colors">
              <span className="text-base tracking-tighter">N</span>
              <span className="text-teal-400 text-xs">▲</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-slate-900 tracking-tight text-lg group-hover:text-teal-700 transition-colors">
                  NexaForge
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                  STUDIO
                </span>
              </div>
              <span className="text-[10px] uppercase font-medium tracking-wider text-slate-500">
                AI Enterprise Software
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative flex items-center gap-1.5 ${
                    active
                      ? "text-teal-700 bg-teal-50/70"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="hidden xl:inline text-[10px] px-1.5 py-0.2 rounded-full bg-slate-100 text-slate-500 font-normal">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 rounded-lg shadow-sm hover:shadow transition-all duration-150"
            >
              <span>Request Demo</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                isActive(link.href)
                  ? "bg-teal-50 text-teal-800 font-semibold"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {link.badge}
                  </span>
                )}
              </div>
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700"
            >
              <span>Request Demo</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
