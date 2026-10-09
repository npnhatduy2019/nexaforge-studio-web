import React from "react";

interface IconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export function SparklesIcon({ className = "w-5 h-5", width = 20, height = 20 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>
    </svg>
  );
}

export function FileTextIcon({ className = "w-5 h-5", width = 20, height = 20 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
      <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
      <path d="M10 9H8"/>
      <path d="M16 13H8"/>
      <path d="M16 17H8"/>
    </svg>
  );
}

export function BoxesIcon({ className = "w-5 h-5", width = 20, height = 20 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l5.96 3.44a2 2 0 0 0 2.06 0l5.96-3.44a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71l-5.96-3.44a2 2 0 0 0-2.06 0Z"/>
      <path d="m7.5 4.21 4.5 2.6 4.5-2.6"/>
      <path d="M7.5 19.79V14.6l-4.5-2.6"/>
      <path d="M21 12l-4.5 2.6v5.19"/>
      <path d="M3.29 7.84a2 2 0 0 0-.32.99v3.24a2 2 0 0 0 .97 1.71l5.96 3.44a2 2 0 0 0 2.06 0l5.96-3.44a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.32-.99L13.06 4.7a2 2 0 0 0-2.12 0Z"/>
    </svg>
  );
}

export function ShieldCheckIcon({ className = "w-5 h-5", width = 20, height = 20 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}

export function DatabaseIcon({ className = "w-5 h-5", width = 20, height = 20 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
    </svg>
  );
}

export function CpuIcon({ className = "w-5 h-5", width = 20, height = 20 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="16" x="4" y="4" rx="2"/>
      <rect width="6" height="6" x="9" y="9" rx="1"/>
      <path d="M15 2v2"/>
      <path d="M15 20v2"/>
      <path d="M2 15h2"/>
      <path d="M2 9h2"/>
      <path d="M20 15h2"/>
      <path d="M20 9h2"/>
      <path d="M9 2v2"/>
      <path d="M9 20v2"/>
    </svg>
  );
}

export function NetworkIcon({ className = "w-5 h-5", width = 20, height = 20 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="16" y="16" width="6" height="6" rx="1"/>
      <rect x="2" y="16" width="6" height="6" rx="1"/>
      <rect x="9" y="2" width="6" height="6" rx="1"/>
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/>
      <path d="M12 12V8"/>
    </svg>
  );
}

export function ScanTextIcon({ className = "w-5 h-5", width = 20, height = 20 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
      <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
      <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
      <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
      <path d="M7 8h10"/>
      <path d="M7 12h10"/>
      <path d="M7 16h6"/>
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-4 h-4", width = 16, height = 16 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>
  );
}

export function CheckCircleIcon({ className = "w-5 h-5", width = 20, height = 20 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <path d="m9 11 3 3L22 4"/>
    </svg>
  );
}

export function ClockIcon({ className = "w-4 h-4", width = 16, height = 16 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

export function LayersIcon({ className = "w-5 h-5", width = 20, height = 20 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
      <path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L3.18 12.5"/>
      <path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L3.18 17.5"/>
    </svg>
  );
}

export function WorkflowIcon({ className = "w-5 h-5", width = 20, height = 20 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="8" x="3" y="3" rx="2"/>
      <path d="M7 11v4a2 2 0 0 0 2 2h4"/>
      <rect width="8" height="8" x="13" y="13" rx="2"/>
    </svg>
  );
}

export function ServerIcon({ className = "w-5 h-5", width = 20, height = 20 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
      <line x1="6" x2="6.01" y1="6" y2="6"/>
      <line x1="6" x2="6.01" y1="18" y2="18"/>
    </svg>
  );
}

export function LockIcon({ className = "w-5 h-5", width = 20, height = 20 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}

export function BarChart3Icon({ className = "w-5 h-5", width = 20, height = 20 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/>
      <path d="M18 17V9"/>
      <path d="M13 17V5"/>
      <path d="M8 17v-3"/>
    </svg>
  );
}

export function ExternalLinkIcon({ className = "w-4 h-4", width = 16, height = 16 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6"/>
      <path d="M10 14 21 3"/>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    </svg>
  );
}

export function MailIcon({ className = "w-5 h-5", width = 20, height = 20 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

export function CodeIcon({ className = "w-5 h-5", width = 20, height = 20 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  );
}
