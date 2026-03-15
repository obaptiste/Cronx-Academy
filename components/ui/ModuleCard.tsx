import Link from 'next/link';
import { ModuleCard as ModuleCardType } from '@/types';

interface ModuleCardProps {
  module: ModuleCardType;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  const isComingSoon = module.status === 'coming-soon';
  const borderColorClass = `module-${module.colorClass}`;

  const CardContent = (
    <div
      className={`
        ${borderColorClass}
        paper-card h-full overflow-hidden border-[1.5px] p-7
        transition-all duration-300
        ${!isComingSoon && 'cursor-pointer hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(6,10,18,0.28)]'}
        ${isComingSoon && 'cursor-default opacity-80'}
      `}
    >
      <div
        className="mb-5 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]"
        style={{
          backgroundColor: 'var(--module-tint, rgba(226, 197, 121, 0.14))',
          color: 'var(--module-accent, #8c6a24)',
        }}
      >
        {isComingSoon ? 'Coming Soon' : 'Open Module'}
      </div>
      <div className="mb-4 text-center text-6xl">{module.icon}</div>
      <h3 className="display-title mb-3 text-center text-3xl text-[var(--text-dark)]">
        {module.title}
      </h3>
      <p className="mb-5 leading-relaxed text-[var(--text-soft-dark)]">{module.description}</p>
      <div className="mt-4 rounded-[1.4rem] border border-black/10 bg-[rgba(255,255,255,0.65)] p-4">
        <ul className="space-y-2">
          {module.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-[var(--text-soft-dark)]">
              <span
                className="mr-2 flex-shrink-0 font-bold"
                style={{ color: 'var(--module-accent, #8c6a24)' }}
              >
                ✦
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5">
        <span
          className={`
            inline-flex items-center rounded-full px-4 py-2 text-sm font-bold
            ${isComingSoon ? 'bg-slate-400 text-white' : 'bg-[var(--module-accent)] text-white'}
          `}
        >
          {isComingSoon ? '🔜 Coming Soon' : '✨ Ready to Explore'}
        </span>
      </div>
    </div>
  );

  if (isComingSoon) {
    return <div>{CardContent}</div>;
  }

  return (
    <Link href={module.href} className="block">
      {CardContent}
    </Link>
  );
}
