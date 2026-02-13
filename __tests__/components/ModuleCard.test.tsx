import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ModuleCard from '@/components/ui/ModuleCard';
import { ModuleCard as ModuleCardType } from '@/types';

// Mock next/link to render as a plain anchor
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const readyModule: ModuleCardType = {
  id: 'test-module',
  title: 'Test Module',
  icon: '📘',
  description: 'A test module for unit testing.',
  features: ['Feature one', 'Feature two', 'Feature three'],
  status: 'ready',
  href: '/modules/test',
  colorClass: 'history',
};

const comingSoonModule: ModuleCardType = {
  id: 'future-module',
  title: 'Future Module',
  icon: '🔮',
  description: 'This module is coming soon.',
  features: ['Upcoming feature'],
  status: 'coming-soon',
  href: '#',
  colorClass: 'english',
};

describe('ModuleCard', () => {
  it('renders the module title', () => {
    render(<ModuleCard module={readyModule} />);
    expect(screen.getByText('Test Module')).toBeInTheDocument();
  });

  it('renders the module description', () => {
    render(<ModuleCard module={readyModule} />);
    expect(screen.getByText('A test module for unit testing.')).toBeInTheDocument();
  });

  it('renders the module icon', () => {
    render(<ModuleCard module={readyModule} />);
    expect(screen.getByText('📘')).toBeInTheDocument();
  });

  it('renders all features with checkmarks', () => {
    render(<ModuleCard module={readyModule} />);
    expect(screen.getByText('Feature one')).toBeInTheDocument();
    expect(screen.getByText('Feature two')).toBeInTheDocument();
    expect(screen.getByText('Feature three')).toBeInTheDocument();
  });

  it('renders a clickable link for ready modules', () => {
    render(<ModuleCard module={readyModule} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/modules/test');
  });

  it('shows "Ready to Explore" badge for ready modules', () => {
    render(<ModuleCard module={readyModule} />);
    expect(screen.getByText(/Ready to Explore/)).toBeInTheDocument();
  });

  it('shows "Coming Soon" badge for coming-soon modules', () => {
    render(<ModuleCard module={comingSoonModule} />);
    expect(screen.getByText(/Coming Soon/)).toBeInTheDocument();
  });

  it('does not render a link for coming-soon modules', () => {
    render(<ModuleCard module={comingSoonModule} />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
