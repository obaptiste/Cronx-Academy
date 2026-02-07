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
        bg-gradient-to-br from-white to-gray-50
        rounded-3xl p-8
        shadow-lg
        border-[3px] ${borderColorClass}
        transition-all duration-400
        ${!isComingSoon && 'hover:transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer'}
        ${isComingSoon && 'opacity-75 cursor-default'}
      `}
    >
      <div className="text-6xl mb-4 text-center">{module.icon}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">{module.title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{module.description}</p>
      <div className="bg-indigo-50 p-4 rounded-2xl mt-4">
        <ul className="space-y-2">
          {module.features.map((feature, idx) => (
            <li key={idx} className="text-sm text-gray-700 flex items-start">
              <span className="text-green-500 font-bold mr-2 flex-shrink-0">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <span
          className={`
            inline-block
            ${isComingSoon ? 'bg-gray-400' : 'bg-green-500'}
            text-white
            px-4 py-2
            rounded-full
            text-sm
            font-bold
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
