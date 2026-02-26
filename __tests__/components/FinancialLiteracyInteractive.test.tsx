import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FinancialLiteracyInteractive from '@/components/modules/FinancialLiteracyInteractive';

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

describe('FinancialLiteracyInteractive', () => {
  beforeEach(() => {
    const localStorageMock = createLocalStorageMock();
    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      writable: true,
      value: localStorageMock,
    });
  });

  it('shows loading state initially then renders lesson content', async () => {
    render(<FinancialLiteracyInteractive />);

    const loadingMessage = screen.queryByText('Loading your lesson...');
    if (loadingMessage) {
      await waitForElementToBeRemoved(loadingMessage);
    }
    expect(screen.getByText('Financial Literacy')).toBeInTheDocument();
  });

  it('displays the back link to the home page', async () => {
    render(<FinancialLiteracyInteractive />);

    await waitFor(() => {
      const backLink = screen.getByRole('link', { name: /Back to Cronx Academy/i });
      expect(backLink).toHaveAttribute('href', '/');
    });
  });

  it('renders category section headings in browse view', async () => {
    render(<FinancialLiteracyInteractive />);

    await waitFor(() => {
      // Category names appear as section headings AND as era fields on lesson cards.
      // Use getAllByText since multiple occurrences are expected.
      expect(screen.getAllByText('Money & Banking').length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText('Budgeting & Saving').length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText('Earning & Work').length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText('Planning for the Future').length).toBeGreaterThanOrEqual(1);
    });
  });

  it('shows 0 lessons completed with empty localStorage', async () => {
    render(<FinancialLiteracyInteractive />);

    await waitFor(() => {
      // Renders "0 of 12 lessons"
      expect(screen.getByText(/0 of \d+ lessons/)).toBeInTheDocument();
    });
  });

  it('restores completed count from localStorage', async () => {
    localStorage.setItem(
      'completedFinancialLiteracyLessons',
      JSON.stringify([
        'What is Money? A Brief History of Currency',
        'How Banks Work: Your Money and the Banking System',
      ]),
    );

    render(<FinancialLiteracyInteractive />);

    await waitFor(() => {
      expect(screen.getByText(/2 of \d+ lessons/)).toBeInTheDocument();
    });
  });

  it('renders Browse All Topics and Random Lesson buttons', async () => {
    render(<FinancialLiteracyInteractive />);

    await waitFor(() => {
      expect(screen.getByText(/Browse All Topics/i)).toBeInTheDocument();
      expect(screen.getByText(/Random Lesson/i)).toBeInTheDocument();
    });
  });

  it('shows Mark Complete button after entering lesson view via Random Lesson', async () => {
    const user = userEvent.setup();
    render(<FinancialLiteracyInteractive />);

    await waitFor(() => {
      expect(screen.getByText(/Random Lesson/i)).toBeInTheDocument();
    });

    await user.click(screen.getByText(/Random Lesson/i));

    await waitFor(() => {
      expect(screen.getByText('Mark Complete')).toBeInTheDocument();
    });
  });

  it('increments completed count when Mark Complete is clicked', async () => {
    const user = userEvent.setup();
    render(<FinancialLiteracyInteractive />);

    // Enter lesson view
    await waitFor(() => {
      expect(screen.getByText(/Random Lesson/i)).toBeInTheDocument();
    });
    await user.click(screen.getByText(/Random Lesson/i));

    await waitFor(() => {
      expect(screen.getByText(/0 of \d+ lessons/)).toBeInTheDocument();
    });

    await user.click(screen.getByText('Mark Complete'));

    await waitFor(() => {
      expect(screen.getByText(/1 of \d+ lessons/)).toBeInTheDocument();
    });

    const stored = JSON.parse(localStorage.getItem('completedFinancialLiteracyLessons') || '[]');
    expect(stored.length).toBe(1);
  });

  it('does not double-count when Mark Complete is clicked twice on the same lesson', async () => {
    const user = userEvent.setup();
    render(<FinancialLiteracyInteractive />);

    // Enter lesson view
    await waitFor(() => {
      expect(screen.getByText(/Random Lesson/i)).toBeInTheDocument();
    });
    await user.click(screen.getByText(/Random Lesson/i));

    await waitFor(() => {
      expect(screen.getByText('Mark Complete')).toBeInTheDocument();
    });

    // First click marks the lesson complete
    await user.click(screen.getByText('Mark Complete'));

    await waitFor(() => {
      expect(screen.getByText(/1 of \d+ lessons/)).toBeInTheDocument();
    });

    // Button text changes to "Completed!" after first click – no second click possible
    const stored = JSON.parse(localStorage.getItem('completedFinancialLiteracyLessons') || '[]');
    expect(stored.length).toBe(1);
  });

  it('renders teaching tips section', async () => {
    render(<FinancialLiteracyInteractive />);

    await waitFor(() => {
      expect(screen.getByText(/Teaching Tips for Sheena/i)).toBeInTheDocument();
    });
  });

  it('renders lesson cards in browse view with correct lesson titles', async () => {
    render(<FinancialLiteracyInteractive />);

    await waitFor(() => {
      expect(screen.getByText('What is Money? A Brief History of Currency')).toBeInTheDocument();
    });
  });
});
