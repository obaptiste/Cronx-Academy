import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MathsInteractive from '@/components/modules/MathsInteractive';

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Mock localStorage
const localStorageMock: Record<string, string> = {};

beforeEach(() => {
  Object.keys(localStorageMock).forEach((key) => delete localStorageMock[key]);
  vi.stubGlobal('localStorage', {
    getItem: vi.fn((key: string) => localStorageMock[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      localStorageMock[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete localStorageMock[key];
    }),
    clear: vi.fn(() => {
      Object.keys(localStorageMock).forEach((key) => delete localStorageMock[key]);
    }),
  });
});

describe('MathsInteractive', () => {

  it('shows loading state initially then renders lesson content', async () => {
    render(<MathsInteractive />);

    // After useEffect fires, loading should disappear and lesson content should appear
    await waitFor(() => {
      expect(screen.getByText('Daily Maths Lesson')).toBeInTheDocument();
    });
  });

  it('displays the back link to home', async () => {
    render(<MathsInteractive />);

    await waitFor(() => {
      const backLink = screen.getByRole('link', { name: /Back to Cronx Academy/i });
      expect(backLink).toHaveAttribute('href', '/');
    });
  });

  it('renders difficulty level buttons', async () => {
    render(<MathsInteractive />);

    await waitFor(() => {
      expect(screen.getByText('Foundation')).toBeInTheDocument();
      expect(screen.getByText('Standard')).toBeInTheDocument();
      expect(screen.getByText('Higher')).toBeInTheDocument();
    });
  });

  it('shows 0 topics completed with empty localStorage', async () => {
    render(<MathsInteractive />);

    await waitFor(() => {
      expect(screen.getByText('0 topics completed')).toBeInTheDocument();
    });
  });

  it('restores completed count from localStorage', async () => {
    localStorage.setItem(
      'completedTopics',
      JSON.stringify(['Solving Linear Equations', 'Expanding Brackets']),
    );

    render(<MathsInteractive />);

    await waitFor(() => {
      expect(screen.getByText('2 topics completed')).toBeInTheDocument();
    });
  });

  it('renders Mark Complete and New Lesson buttons', async () => {
    render(<MathsInteractive />);

    await waitFor(() => {
      expect(screen.getByText('Mark Complete')).toBeInTheDocument();
      expect(screen.getByText('New Lesson')).toBeInTheDocument();
    });
  });

  it('increments completed count when Mark Complete is clicked', async () => {
    const user = userEvent.setup();
    render(<MathsInteractive />);

    await waitFor(() => {
      expect(screen.getByText('0 topics completed')).toBeInTheDocument();
    });

    await user.click(screen.getByText('Mark Complete'));

    await waitFor(() => {
      expect(screen.getByText('1 topics completed')).toBeInTheDocument();
    });

    // Verify localStorage was updated
    const stored = JSON.parse(localStorage.getItem('completedTopics') || '[]');
    expect(stored.length).toBe(1);
  });

  it('renders teaching tips section', async () => {
    render(<MathsInteractive />);

    await waitFor(() => {
      expect(screen.getByText(/Teaching Tips for Sheena/)).toBeInTheDocument();
    });
  });

  it('renders lesson sections (warm-up, activities, practice, extension, homework)', async () => {
    render(<MathsInteractive />);

    await waitFor(() => {
      expect(screen.getByText(/Warm-Up/)).toBeInTheDocument();
      expect(screen.getByText(/Main Activities/)).toBeInTheDocument();
      expect(screen.getByText(/Practice Questions/)).toBeInTheDocument();
      expect(screen.getByText(/Extension Challenge/)).toBeInTheDocument();
      expect(screen.getByText(/Homework/)).toBeInTheDocument();
    });
  });
});
