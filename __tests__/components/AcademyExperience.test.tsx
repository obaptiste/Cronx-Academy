import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AcademyExperience from '@/components/academy/AcademyExperience';

describe('AcademyExperience', () => {
  const user = { name: 'Jordan Blake', email: 'operator@aquacore.academy', role: 'operator' as const };

  it('renders modules and marks a correct quiz answer', async () => {
    render(<AcademyExperience user={user} />);

    expect(screen.getByText('Pool Maintenance Operations Programme')).toBeInTheDocument();

    const answer = screen.getByLabelText('Apply lockout/tagout controls');
    await userEvent.click(answer);

    expect(screen.getByText(/Correct\./i)).toBeInTheDocument();
  });
});
