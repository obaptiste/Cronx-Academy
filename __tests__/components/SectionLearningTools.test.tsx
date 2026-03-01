import { describe, it, expect, beforeEach, vi, type Mock } from 'vitest';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SectionLearningTools } from '@/components/ui/SectionLearningTools';
import type { Section } from '@/types';

// ── Mocks ──────────────────────────────────────────────────────────────────

vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// localStorage mock (same pattern as MathsInteractive.test.tsx)
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

// ── SpeechSynthesisUtterance class mock ────────────────────────────────────
// Using a class so `new SpeechSynthesisUtterance()` works correctly in jsdom.
// We store the most recently created instance in `lastUtterance` so tests can
// fire onstart/onend callbacks to simulate speech progressing.

class MockSpeechSynthesisUtterance {
  onstart: (() => void) | null = null;
  onend: (() => void) | null = null;
  onerror: (() => void) | null = null;
  rate = 0.9;
  pitch = 1;
  lang = 'en-GB';
  text: string;

  constructor(text: string) {
    this.text = text;
  }
}

// Captured when mockSpeechSynthesis.speak() is called, so tests can fire
// onstart/onend callbacks without aliasing `this` inside the constructor.
let lastUtterance: MockSpeechSynthesisUtterance | null = null;

const mockSpeechSynthesis = {
  speak: vi.fn(),
  cancel: vi.fn(),
};

// fetch mock — happy-path default: returns simplified text.
const mockFetch = vi.fn();

// ── Test fixtures ──────────────────────────────────────────────────────────

const SECTIONS: Section[] = [
  { id: 'sec-1', title: 'Section One', text: 'First section body text.' },
  { id: 'sec-2', title: 'Section Two', text: 'Second section body text.' },
];

// ── Setup ──────────────────────────────────────────────────────────────────

beforeEach(() => {
  lastUtterance = null;

  // localStorage
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    writable: true,
    value: createLocalStorageMock(),
  });

  // Web Speech API
  Object.defineProperty(globalThis, 'SpeechSynthesisUtterance', {
    configurable: true,
    writable: true,
    value: MockSpeechSynthesisUtterance,
  });
  Object.defineProperty(globalThis, 'speechSynthesis', {
    configurable: true,
    writable: true,
    value: mockSpeechSynthesis,
  });
  // Capture the utterance object passed to speak() so tests can fire callbacks.
  mockSpeechSynthesis.speak.mockImplementation((utterance: MockSpeechSynthesisUtterance) => {
    lastUtterance = utterance;
  });
  mockSpeechSynthesis.cancel.mockClear();

  // fetch
  globalThis.fetch = mockFetch as typeof fetch;
  mockFetch.mockReset();
  mockFetch.mockResolvedValue({
    ok: true,
    json: async () => ({ simplified: 'This is simpler text.' }),
  });
});

// ── Rendering tests ────────────────────────────────────────────────────────

describe('SectionLearningTools — rendering', () => {
  it('renders all section titles', () => {
    render(<SectionLearningTools storageKey="test-key" sections={SECTIONS} />);
    expect(screen.getByText('Section One')).toBeInTheDocument();
    expect(screen.getByText('Section Two')).toBeInTheDocument();
  });

  it('renders all section body texts', () => {
    render(<SectionLearningTools storageKey="test-key" sections={SECTIONS} />);
    expect(screen.getByText('First section body text.')).toBeInTheDocument();
    expect(screen.getByText('Second section body text.')).toBeInTheDocument();
  });

  it('renders Read Aloud buttons for each section', () => {
    render(<SectionLearningTools storageKey="test-key" sections={SECTIONS} />);
    const buttons = screen.getAllByRole('button', { name: /Read .* aloud/i });
    expect(buttons).toHaveLength(SECTIONS.length);
  });

  it('renders Simplify buttons for each section', () => {
    render(<SectionLearningTools storageKey="test-key" sections={SECTIONS} />);
    const buttons = screen.getAllByRole('button', {
      name: /Simplify .* for easier reading/i,
    });
    expect(buttons).toHaveLength(SECTIONS.length);
  });

  it('shows the progress bar starting at 0%', () => {
    render(<SectionLearningTools storageKey="test-key" sections={SECTIONS} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', '0');
  });

  it('omits the progress bar when sections array is empty', () => {
    const { container } = render(<SectionLearningTools storageKey="test-key" sections={[]} />);
    expect(container.querySelector('[role="progressbar"]')).toBeNull();
  });
});

// ── Read-aloud tests ───────────────────────────────────────────────────────

describe('SectionLearningTools — Read Aloud', () => {
  it('calls speechSynthesis.speak when Read Aloud is pressed', async () => {
    const user = userEvent.setup();
    render(<SectionLearningTools storageKey="test-key" sections={SECTIONS} />);

    const [readBtn] = screen.getAllByRole('button', { name: /Read .* aloud/i });
    await user.click(readBtn);

    expect(mockSpeechSynthesis.speak).toHaveBeenCalledTimes(1);
  });

  it('shows Stop button while a section is playing', async () => {
    const user = userEvent.setup();
    render(<SectionLearningTools storageKey="test-key" sections={SECTIONS} />);

    const [readBtn] = screen.getAllByRole('button', { name: /Read .* aloud/i });
    await user.click(readBtn);

    // Wrap state-triggering callback in act() so React processes the update.
    act(() => {
      lastUtterance?.onstart?.();
    });

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Stop reading/i })).toBeInTheDocument();
    });
  });

  it('shows green checkmark when speech finishes', async () => {
    const user = userEvent.setup();
    render(<SectionLearningTools storageKey="test-key" sections={SECTIONS} />);

    const [readBtn] = screen.getAllByRole('button', { name: /Read .* aloud/i });
    await user.click(readBtn);

    act(() => {
      lastUtterance?.onstart?.();
      lastUtterance?.onend?.();
    });

    await waitFor(() => {
      expect(screen.getByLabelText('Section listened')).toBeInTheDocument();
    });
  });

  it('fires onSectionListened callback after speech completes', async () => {
    const user = userEvent.setup();
    const onListened = vi.fn();
    render(
      <SectionLearningTools
        storageKey="test-key"
        sections={SECTIONS}
        onSectionListened={onListened}
      />,
    );

    const [readBtn] = screen.getAllByRole('button', { name: /Read .* aloud/i });
    await user.click(readBtn);

    act(() => {
      lastUtterance?.onstart?.();
      lastUtterance?.onend?.();
    });

    await waitFor(() => {
      expect(onListened).toHaveBeenCalledWith('sec-1');
    });
  });

  it('updates the progress bar to 50% after one of two sections is listened to', async () => {
    const user = userEvent.setup();
    render(<SectionLearningTools storageKey="test-key" sections={SECTIONS} />);

    const [readBtn] = screen.getAllByRole('button', { name: /Read .* aloud/i });
    await user.click(readBtn);
    act(() => {
      lastUtterance?.onstart?.();
      lastUtterance?.onend?.();
    });

    await waitFor(() => {
      const bar = screen.getByRole('progressbar');
      expect(bar).toHaveAttribute('aria-valuenow', '50');
    });
  });

  it('persists listened section ID to localStorage', async () => {
    const user = userEvent.setup();
    render(<SectionLearningTools storageKey="test-key" sections={SECTIONS} />);

    const [readBtn] = screen.getAllByRole('button', { name: /Read .* aloud/i });
    await user.click(readBtn);
    act(() => {
      lastUtterance?.onstart?.();
      lastUtterance?.onend?.();
    });

    await waitFor(() => {
      const stored = localStorage.getItem('test-key');
      expect(stored).not.toBeNull();
      const parsed = JSON.parse(stored!) as string[];
      expect(parsed).toContain('sec-1');
    });
  });
});

// ── Simplify tests ─────────────────────────────────────────────────────────

describe('SectionLearningTools — Simplify', () => {
  it('calls /api/simplify when Simplify is pressed', async () => {
    const user = userEvent.setup();
    render(<SectionLearningTools storageKey="test-key" sections={SECTIONS} />);

    const [simplifyBtn] = screen.getAllByRole('button', {
      name: /Simplify .* for easier reading/i,
    });
    await user.click(simplifyBtn);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        '/api/simplify',
        expect.objectContaining({ method: 'POST' }),
      );
    });
  });

  it('displays the simplified text panel after the API responds', async () => {
    const user = userEvent.setup();
    render(<SectionLearningTools storageKey="test-key" sections={SECTIONS} />);

    const [simplifyBtn] = screen.getAllByRole('button', {
      name: /Simplify .* for easier reading/i,
    });
    await user.click(simplifyBtn);

    await waitFor(() => {
      expect(screen.getByText('This is simpler text.')).toBeInTheDocument();
    });
  });

  it('toggles between Original and Simplified on repeated clicks', async () => {
    const user = userEvent.setup();
    render(<SectionLearningTools storageKey="test-key" sections={SECTIONS} />);

    const [simplifyBtn] = screen.getAllByRole('button', {
      name: /Simplify .* for easier reading/i,
    });
    await user.click(simplifyBtn);

    await waitFor(() => {
      expect(screen.getByText('This is simpler text.')).toBeInTheDocument();
    });

    // Press "Original" to hide the simplified panel
    await user.click(screen.getByRole('button', { name: /Show original text for/i }));

    await waitFor(() => {
      expect(screen.queryByText('This is simpler text.')).not.toBeInTheDocument();
    });
  });

  it('does not make a second API call when toggling an already-simplified section', async () => {
    const user = userEvent.setup();
    render(<SectionLearningTools storageKey="test-key" sections={SECTIONS} />);

    const [simplifyBtn] = screen.getAllByRole('button', {
      name: /Simplify .* for easier reading/i,
    });

    // First click: fetches from API
    await user.click(simplifyBtn);
    await waitFor(() => {
      expect(screen.getByText('This is simpler text.')).toBeInTheDocument();
    });
    expect(mockFetch).toHaveBeenCalledTimes(1);

    // Toggle off, then on again — should NOT trigger a second fetch
    await user.click(screen.getByRole('button', { name: /Show original text for/i }));
    await waitFor(() => {
      expect(screen.queryByText('This is simpler text.')).not.toBeInTheDocument();
    });

    // Two sections mean two Simplify buttons; pick the first (sec-1)
    await user.click(
      screen.getAllByRole('button', {
        name: /Simplify .* for easier reading/i,
      })[0],
    );
    await waitFor(() => {
      expect(screen.getByText('This is simpler text.')).toBeInTheDocument();
    });

    expect(mockFetch).toHaveBeenCalledTimes(1); // still just 1
  });

  it('shows an error alert when the API call fails', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 500 });

    const user = userEvent.setup();
    render(<SectionLearningTools storageKey="test-key" sections={SECTIONS} />);

    const [simplifyBtn] = screen.getAllByRole('button', {
      name: /Simplify .* for easier reading/i,
    });
    await user.click(simplifyBtn);

    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });

  it('shows loading state while the API is pending', async () => {
    // Never resolves — lets us assert the intermediate loading state.
    mockFetch.mockImplementationOnce(() => new Promise<Response>(() => {}));

    const user = userEvent.setup();
    render(<SectionLearningTools storageKey="test-key" sections={SECTIONS} />);

    const [simplifyBtn] = screen.getAllByRole('button', {
      name: /Simplify .* for easier reading/i,
    });
    await user.click(simplifyBtn);

    expect(screen.getByText('Simplifying…')).toBeInTheDocument();
  });
});

// ── Persistence tests ──────────────────────────────────────────────────────

describe('SectionLearningTools — persistence', () => {
  it('restores previously listened sections from localStorage on mount', () => {
    localStorage.setItem('test-key', JSON.stringify(['sec-1']));

    render(<SectionLearningTools storageKey="test-key" sections={SECTIONS} />);

    // Green checkmark should appear immediately — no interaction needed.
    expect(screen.getByLabelText('Section listened')).toBeInTheDocument();
  });

  it('does not add a duplicate entry if the same section is listened to twice', async () => {
    const user = userEvent.setup();
    const onListened = vi.fn();
    render(
      <SectionLearningTools
        storageKey="test-key"
        sections={SECTIONS}
        onSectionListened={onListened}
      />,
    );

    // First listen — completes normally
    const [readBtn] = screen.getAllByRole('button', { name: /Read .* aloud/i });
    await user.click(readBtn);
    act(() => {
      lastUtterance?.onstart?.();
      lastUtterance?.onend?.();
    });
    await waitFor(() => expect(onListened).toHaveBeenCalledTimes(1));

    // Stop current playback so button returns to "Read Aloud"
    const stopBtn = screen.queryByRole('button', { name: /Stop reading/i });
    if (stopBtn) await user.click(stopBtn);

    // Second listen of the same section
    const readBtns = screen.getAllByRole('button', { name: /Read .* aloud/i });
    await user.click(readBtns[0]);
    act(() => {
      lastUtterance?.onstart?.();
      lastUtterance?.onend?.();
    });
    await waitFor(() => expect(onListened).toHaveBeenCalledTimes(2));

    // localStorage should only contain ONE entry for sec-1
    const stored = localStorage.getItem('test-key');
    const parsed = JSON.parse(stored!) as string[];
    expect(parsed.filter((id) => id === 'sec-1')).toHaveLength(1);
  });
});

// Prevent unused-import lint noise on the Mock type import.
const _ref: Mock = mockFetch;
void _ref;
