import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  variant?: 'default' | 'secondary' | 'outline' | 'destructive';
  className?: string;
  disabled?: boolean;
};

const variantMap: Record<NonNullable<ButtonProps['variant']>, string> = {
  default: 'bg-slate-900 text-white hover:bg-slate-700',
  secondary: 'bg-amber-500 text-slate-950 hover:bg-amber-400',
  outline: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-100',
  destructive: 'bg-red-700 text-white hover:bg-red-600',
};

const base =
  'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60';

export function Button({ children, href, variant = 'default', className = '', ...rest }: ButtonProps) {
  const classes = `${base} ${variantMap[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
