import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
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

const createLocalStorageMock = () => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
};

describe('MathsInteractive', () => {
  beforeEach(() => {
    const localStorageMock = createLocalStorageMock();
    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      writable: true,
      value: localStorageMock,
    });
  });

  it('shows loading state initially then renders lesson content', async () => {
    render(<MathsInteractive />);

    const loadingMessage = screen.queryByText('Loading your lesson...');
    if (loadingMessage) {
      await waitForElementToBeRemoved(loadingMessage);
    }
    expect(screen.getByText('Daily Maths Lesson')).toBeInTheDocument();
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

  it('does not increment completed count when Mark Complete is clicked twice', async () => {
    const user = userEvent.setup();
    render(<MathsInteractive />);

    await waitFor(() => {
      expect(screen.getByText('0 topics completed')).toBeInTheDocument();
    });

    const markCompleteButton = screen.getByText('Mark Complete');
    await user.click(markCompleteButton);
    await user.click(markCompleteButton);

    await waitFor(() => {
      expect(screen.getByText('1 topics completed')).toBeInTheDocument();
    });

    const stored = JSON.parse(localStorage.getItem('completedTopics') || '[]');
    expect(stored.length).toBe(1);
  });

  it('falls back to empty progress when localStorage contains malformed JSON', async () => {
    localStorage.setItem('completedTopics', '{');

    render(<MathsInteractive />);

    await waitFor(() => {
      expect(screen.getByText('0 topics completed')).toBeInTheDocument();
    });
  });

  it('falls back to empty progress when localStorage contains non-array JSON', async () => {
    localStorage.setItem('completedTopics', JSON.stringify({ foo: 'bar' }));

    render(<MathsInteractive />);

    await waitFor(() => {
      expect(screen.getByText('0 topics completed')).toBeInTheDocument();
    });
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
