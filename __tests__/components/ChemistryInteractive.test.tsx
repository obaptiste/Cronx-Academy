import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChemistryInteractive from '@/components/modules/ChemistryInteractive';

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

describe('ChemistryInteractive', () => {
  beforeEach(() => {
    const mock = createLocalStorageMock();
    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      writable: true,
      value: mock,
    });
  });

  async function waitForLoad() {
    const loading = screen.queryByText(/Mixing the reagents/i);
    if (loading) await waitForElementToBeRemoved(loading);
  }

  it('shows loading state then renders the module heading', async () => {
    render(<ChemistryInteractive />);
    await waitForLoad();
    expect(screen.getByText('Chemistry Interactive')).toBeInTheDocument();
  });

  it('renders back link to home', async () => {
    render(<ChemistryInteractive />);
    await waitForLoad();
    const link = screen.getByRole('link', { name: /Back to Cronx Academy/i });
    expect(link).toHaveAttribute('href', '/');
  });

  it('shows 0/12 progress with empty localStorage', async () => {
    render(<ChemistryInteractive />);
    await waitForLoad();
    expect(screen.getByText('0/12 lessons')).toBeInTheDocument();
  });

  it('restores completed count from localStorage', async () => {
    localStorage.setItem(
      'completedChemistryLessons',
      JSON.stringify(['Atomic Structure: Inside the Atom', 'Elements, Compounds & Mixtures']),
    );
    render(<ChemistryInteractive />);
    await waitForLoad();
    expect(screen.getByText('2/12 lessons')).toBeInTheDocument();
  });

  it('renders Random Lesson and Browse Topics toggle buttons', async () => {
    render(<ChemistryInteractive />);
    await waitForLoad();
    expect(screen.getByText(/Random Lesson/i)).toBeInTheDocument();
    expect(screen.getByText(/Browse Topics/i)).toBeInTheDocument();
  });

  it('renders Mark Complete and New Lesson action buttons', async () => {
    render(<ChemistryInteractive />);
    await waitForLoad();
    expect(screen.getByText(/Mark Complete/i)).toBeInTheDocument();
    expect(screen.getByText(/New Lesson/i)).toBeInTheDocument();
  });

  it('renders fun fact ticker with navigation buttons', async () => {
    render(<ChemistryInteractive />);
    await waitForLoad();
    expect(screen.getByLabelText('Next fact')).toBeInTheDocument();
    expect(screen.getByLabelText('Previous fact')).toBeInTheDocument();
  });

  it('increments completed count when Mark Complete is clicked', async () => {
    const user = userEvent.setup();
    render(<ChemistryInteractive />);
    await waitForLoad();

    expect(screen.getByText('0/12 lessons')).toBeInTheDocument();
    await user.click(screen.getByText(/Mark Complete/i));

    await waitFor(() => {
      expect(screen.getByText('1/12 lessons')).toBeInTheDocument();
    });

    const stored = JSON.parse(localStorage.getItem('completedChemistryLessons') ?? '[]');
    expect(stored.length).toBe(1);
  });

  it('does not double-count when Mark Complete is clicked twice', async () => {
    const user = userEvent.setup();
    render(<ChemistryInteractive />);
    await waitForLoad();

    const btn = screen.getByText(/Mark Complete/i);
    await user.click(btn);
    await waitFor(() => expect(screen.getByText('1/12 lessons')).toBeInTheDocument());
    // Button should now show "Completed!" and be disabled — clicking again should not increment
    await user.click(screen.getByText(/Completed!/i));
    await waitFor(() => expect(screen.getByText('1/12 lessons')).toBeInTheDocument());
  });

  it('switches to browse mode when Browse Topics is clicked', async () => {
    const user = userEvent.setup();
    render(<ChemistryInteractive />);
    await waitForLoad();

    await user.click(screen.getByText(/Browse Topics/i));
    expect(screen.getByText('All Topics')).toBeInTheDocument();
  });

  it('renders a lesson card in browse mode and clicking it loads the lesson', async () => {
    const user = userEvent.setup();
    render(<ChemistryInteractive />);
    await waitForLoad();

    await user.click(screen.getByText(/Browse Topics/i));
    // Click on the first lesson card title visible in the browser
    const atomsCard = screen.getByText('Atomic Structure: Inside the Atom');
    await user.click(atomsCard);

    // Should return to lesson mode and show that lesson's title
    await waitFor(() => {
      expect(screen.getByText('Atomic Structure: Inside the Atom')).toBeInTheDocument();
    });
    // Mark Complete button should be back
    expect(screen.getByText(/Mark Complete/i)).toBeInTheDocument();
  });

  it('renders the quiz with Submit Answers button', async () => {
    render(<ChemistryInteractive />);
    await waitForLoad();
    expect(screen.getByText('Submit Answers')).toBeInTheDocument();
  });

  it('renders teaching tips for Sheena', async () => {
    render(<ChemistryInteractive />);
    await waitForLoad();
    expect(screen.getByText(/Teaching Tips for Sheena/i)).toBeInTheDocument();
  });

  it('falls back gracefully when localStorage contains malformed JSON', async () => {
    localStorage.setItem('completedChemistryLessons', '{bad json');
    render(<ChemistryInteractive />);
    await waitForLoad();
    expect(screen.getByText('0/12 lessons')).toBeInTheDocument();
  });

  it('falls back gracefully when localStorage contains non-array JSON', async () => {
    localStorage.setItem('completedChemistryLessons', JSON.stringify({ bad: true }));
    render(<ChemistryInteractive />);
    await waitForLoad();
    expect(screen.getByText('0/12 lessons')).toBeInTheDocument();
  });
});
