import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EtymologyInteractive from '@/components/modules/EtymologyInteractive';

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe('EtymologyInteractive', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the module title', () => {
    render(<EtymologyInteractive />);
    expect(screen.getByText('European Language Etymology')).toBeInTheDocument();
  });

  it('renders the subtitle with origins and Caribbean reference', () => {
    render(<EtymologyInteractive />);
    expect(screen.getByText(/Origins, Migrations & Deaths/i)).toBeInTheDocument();
  });

  it('renders all 5 navigation tabs', () => {
    render(<EtymologyInteractive />);
    expect(screen.getAllByText(/Family Tree|Tree/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Timeline/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Detective/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Graveyard/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Quiz/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renders a Back to Cronx Academy link', () => {
    render(<EtymologyInteractive />);
    const link = screen.getByRole('link', { name: /Cronx Academy/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });

  it('shows progress counter starting at 1/5 explored', () => {
    render(<EtymologyInteractive />);
    expect(screen.getByText('1/5 explored')).toBeInTheDocument();
  });

  describe('Section 1: Language Family Tree', () => {
    it('shows the Language Family Tree section heading', () => {
      render(<EtymologyInteractive />);
      expect(screen.getByText('The Language Family Tree')).toBeInTheDocument();
    });

    it('renders Proto-Indo-European (PIE) node in the tree', () => {
      render(<EtymologyInteractive />);
      // Multiple PIE elements exist (tree node + detail panel) — use getAllByText
      const pieElements = screen.getAllByText(/Proto-Indo-European/i);
      expect(pieElements.length).toBeGreaterThanOrEqual(1);
    });

    it('shows PIE node detail panel on load', () => {
      render(<EtymologyInteractive />);
      // PIE is selected by default — detail panel shows its era
      expect(screen.getAllByText(/4500/).length).toBeGreaterThanOrEqual(1);
    });

    it('clicking Celtic updates the detail panel', async () => {
      const user = userEvent.setup();
      render(<EtymologyInteractive />);
      // Click the Celtic tree node (there may be multiple "Celtic" elements — pick the one in the tree panel)
      const celticElements = screen.getAllByText('Celtic');
      await user.click(celticElements[0]);
      await waitFor(() => {
        // Celtic detail panel should show its region info
        const westernEuropeElements = screen.getAllByText(/Western Europe/i);
        expect(westernEuropeElements.length).toBeGreaterThanOrEqual(1);
      });
    });

    it('clicking English node shows Caribbean connection', async () => {
      const user = userEvent.setup();
      render(<EtymologyInteractive />);
      // English is already visible (all branches pre-expanded) — click it directly
      const englishElements = screen.getAllByText('English');
      await user.click(englishElements[0]);
      await waitFor(() => {
        expect(screen.getAllByText(/Caribbean Connection/i).length).toBeGreaterThanOrEqual(1);
      });
    });

    it('shows Basque as the outlier section', () => {
      render(<EtymologyInteractive />);
      expect(screen.getByText(/Basque.*Outlier/i)).toBeInTheDocument();
    });
  });

  describe('Section 2: Timeline', () => {
    it('navigates to Timeline tab', async () => {
      const user = userEvent.setup();
      render(<EtymologyInteractive />);
      const timelineTab = screen.getAllByText(/Timeline/i)[0];
      await user.click(timelineTab);
      await waitFor(() => {
        expect(screen.getByText('The Great Migrations — A Timeline')).toBeInTheDocument();
      });
    });

    it('shows timeline events in the scroll strip', async () => {
      const user = userEvent.setup();
      render(<EtymologyInteractive />);
      await user.click(screen.getAllByText(/Timeline/i)[0]);
      await waitFor(() => {
        // Both in strip + expanded panel — use getAllByText
        expect(screen.getAllByText('PIE Origins').length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText('Norman Conquest').length).toBeGreaterThanOrEqual(1);
      });
    });

    it('first event is expanded by default showing etymology example', async () => {
      const user = userEvent.setup();
      render(<EtymologyInteractive />);
      await user.click(screen.getAllByText(/Timeline/i)[0]);
      await waitFor(() => {
        expect(screen.getByText('Etymology Example')).toBeInTheDocument();
      });
    });

    it('updates progress counter when visiting Timeline', async () => {
      const user = userEvent.setup();
      render(<EtymologyInteractive />);
      expect(screen.getByText('1/5 explored')).toBeInTheDocument();
      await user.click(screen.getAllByText(/Timeline/i)[0]);
      await waitFor(() => {
        expect(screen.getByText('2/5 explored')).toBeInTheDocument();
      });
    });
  });

  describe('Section 3: Word Detective', () => {
    async function navigateToWordDetective() {
      const user = userEvent.setup();
      render(<EtymologyInteractive />);
      await user.click(screen.getAllByText(/Detective/i)[0]);
      // Wait for RIVER to appear (unique identifier for this section)
      await waitFor(() => {
        expect(screen.getByText('RIVER')).toBeInTheDocument();
      });
      return user;
    }

    it('shows the first word (RIVER)', async () => {
      await navigateToWordDetective();
      expect(screen.getByText('RIVER')).toBeInTheDocument();
    });

    it('shows score bar with starting score of 0', async () => {
      await navigateToWordDetective();
      expect(screen.getByText(/Score: 0/)).toBeInTheDocument();
    });

    it('shows answer options for the first step', async () => {
      await navigateToWordDetective();
      expect(screen.getByText('rivere')).toBeInTheDocument();
    });

    it('selecting correct answer shows the Next Step button', async () => {
      const user = userEvent.setup();
      render(<EtymologyInteractive />);
      await user.click(screen.getAllByText(/Detective/i)[0]);
      await waitFor(() => {
        expect(screen.getByText('rivere')).toBeInTheDocument();
      });
      await user.click(screen.getByText('rivere'));
      await waitFor(() => {
        // After answering, the Next Step button and explanation appear
        expect(screen.getByText(/Next Step/i)).toBeInTheDocument();
      });
    });

    it('selecting any answer shows next step button', async () => {
      const user = userEvent.setup();
      render(<EtymologyInteractive />);
      await user.click(screen.getAllByText(/Detective/i)[0]);
      await waitFor(() => {
        expect(screen.getByText('flumen')).toBeInTheDocument();
      });
      await user.click(screen.getByText('flumen'));
      await waitFor(() => {
        expect(screen.getByText(/Next Step/i)).toBeInTheDocument();
      });
    });
  });

  describe('Section 4: Dead Languages Graveyard', () => {
    it('navigates to Graveyard tab', async () => {
      const user = userEvent.setup();
      render(<EtymologyInteractive />);
      await user.click(screen.getAllByText(/Graveyard/i)[0]);
      await waitFor(() => {
        expect(screen.getByText('The Graveyard of Tongues')).toBeInTheDocument();
      });
    });

    it('shows dead language frequency counter text', async () => {
      const user = userEvent.setup();
      render(<EtymologyInteractive />);
      await user.click(screen.getAllByText(/Graveyard/i)[0]);
      await waitFor(() => {
        expect(screen.getByText(/every two weeks/i)).toBeInTheDocument();
      });
    });

    it('shows dead language memorial cards', async () => {
      const user = userEvent.setup();
      render(<EtymologyInteractive />);
      await user.click(screen.getAllByText(/Graveyard/i)[0]);
      await waitFor(() => {
        expect(screen.getAllByText('Dalmatian').length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText('Cornish').length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText('Gothic').length).toBeGreaterThanOrEqual(1);
      });
    });

    it('clicking a language card reveals its detail section', async () => {
      const user = userEvent.setup();
      render(<EtymologyInteractive />);
      await user.click(screen.getAllByText(/Graveyard/i)[0]);
      await waitFor(() => {
        expect(screen.getAllByText('Dalmatian').length).toBeGreaterThanOrEqual(1);
      });
      // Find and click the Dalmatian card (first occurrence = the card button)
      const dalmatianCards = screen.getAllByText('Dalmatian');
      await user.click(dalmatianCards[0]);
      await waitFor(() => {
        // lastSpeaker text includes "Udaina"
        expect(screen.getByText(/Udaina/i)).toBeInTheDocument();
      });
    });
  });

  describe('Section 5: Quiz Zone', () => {
    async function navigateToQuiz() {
      const user = userEvent.setup();
      render(<EtymologyInteractive />);
      await user.click(screen.getAllByText(/Quiz/i)[0]);
      await waitFor(() => {
        expect(screen.getByText('Quiz Zone — 15 Questions')).toBeInTheDocument();
      });
      return user;
    }

    it('shows quiz zone heading', async () => {
      await navigateToQuiz();
    });

    it('shows question labels Q1 and Q15', async () => {
      await navigateToQuiz();
      await waitFor(() => {
        expect(screen.getByText('Q1')).toBeInTheDocument();
        expect(screen.getByText('Q15')).toBeInTheDocument();
      });
    });

    it('submit button is disabled until all questions answered', async () => {
      await navigateToQuiz();
      const submitBtn = screen.getByRole('button', { name: /Answer all/i });
      expect(submitBtn).toBeDisabled();
    });

    it('submit button shows count of remaining questions', async () => {
      await navigateToQuiz();
      expect(screen.getByText(/Answer all 15 remaining questions/i)).toBeInTheDocument();
    });

    it('answered count updates as user selects answers', async () => {
      const user = await navigateToQuiz();
      await waitFor(() => {
        expect(screen.getByText('Q1')).toBeInTheDocument();
      });
      // Answer first question by clicking option labelled 'A'
      const allOptionAs = screen.getAllByText('A');
      await user.click(allOptionAs[0]);
      await waitFor(() => {
        expect(screen.getByText('1/15 answered')).toBeInTheDocument();
      });
    });
  });

  describe('Caribbean footer panel', () => {
    it('shows the Caribbean language roots panel on the tree tab', () => {
      render(<EtymologyInteractive />);
      expect(screen.getByText('Caribbean Language Roots — The Full Picture')).toBeInTheDocument();
    });

    it('shows Taíno substrate mention in the footer', () => {
      render(<EtymologyInteractive />);
      // Footer lists Taíno substrate words
      expect(screen.getByText(/hurricane.*canoe.*hammock/i)).toBeInTheDocument();
    });

    it('Caribbean footer is NOT shown on Word Detective tab', async () => {
      const user = userEvent.setup();
      render(<EtymologyInteractive />);
      await user.click(screen.getAllByText(/Detective/i)[0]);
      await waitFor(() => {
        expect(screen.getByText('RIVER')).toBeInTheDocument();
      });
      // Footer should be hidden on tab index 2 (Word Detective)
      expect(screen.queryByText('Caribbean Language Roots — The Full Picture')).not.toBeInTheDocument();
    });
  });
});
