import React from "react";

type BadgeVariant = "in-development" | "enterprise" | "ai" | "beta" | "neutral" | "tech";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "neutral", className = "" }: BadgeProps) {
  const variantStyles: Record<BadgeVariant, string> = {
    "in-development": "bg-amber-50 text-amber-800 border-amber-200/80 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60",
    "enterprise": "bg-teal-50 text-teal-800 border-teal-200/80 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-800/60",
    "ai": "bg-indigo-50 text-indigo-800 border-indigo-200/80 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800/60",
    "beta": "bg-sky-50 text-sky-800 border-sky-200/80 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800/60",
    "neutral": "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
    "tech": "bg-slate-50 text-slate-700 border-slate-200/80 font-mono text-xs dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border tracking-wide transition-colors ${variantStyles[variant]} ${className}`}
    >
      {variant === "in-development" && (
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
      )}
      {variant === "enterprise" && (
        <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
      )}
      {variant === "ai" && (
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
      )}
      {children}
    </span>
  );
}
