import type { ReactNode } from 'react';

const colourMap = {
  low: 'bg-emerald-100 text-emerald-800',
  caution: 'bg-amber-100 text-amber-800',
  high: 'bg-orange-100 text-orange-800',
  urgent: 'bg-red-100 text-red-800',
};

export function SeverityBadge({ level }: { level: keyof typeof colourMap }) {
  return (
    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold uppercase tracking-wide ${colourMap[level]}`}>
      {level === 'high' ? 'high risk' : level}
    </span>
  );
}

export function Badge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`inline-flex rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 ${className}`}>{children}</span>;
}
