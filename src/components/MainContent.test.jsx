import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MainContent from './MainContent';

describe('MainContent', () => {
  it('should render a button', () => {
    render(<MainContent />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should show the help area after clicking the button', async () => {
    render(<MainContent />);

    const button = screen.getByRole('button');
    await userEvent.click(button);
    //intentionally fail the test area of code to test out the github actions script.
    expect(screen.getByTestId('help-area')).not.toBeInTheDocument();
    //expect(screen.getByTestId('help-area')).toBeInTheDocument();
  });
});
