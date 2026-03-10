import type { ReactNode } from 'react';

export function Alert({ children, tone = 'warning' }: { children: ReactNode; tone?: 'warning' | 'danger' | 'info' }) {
  const toneClasses = {
    warning: 'border-amber-300 bg-amber-50 text-amber-900',
    danger: 'border-red-300 bg-red-50 text-red-900',
    info: 'border-blue-300 bg-blue-50 text-blue-900',
  }[tone];

  return <div className={`rounded-lg border p-3 text-sm ${toneClasses}`}>{children}</div>;
}
