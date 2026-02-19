import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import LangIcon from './lang-icon';

const ICON_NAME = 'php-plain';

describe('Lang Icon', () => {
  it('Should render without crashing and match snapshot', () => {
    const { container } = render(<LangIcon name={ICON_NAME} />);
    expect(container).toMatchSnapshot();
  });

  it('should show the icon', () => {
    render(<LangIcon name={ICON_NAME} />);
    const icon = screen.getByTestId(`language-icon-${ICON_NAME}`);
    expect(icon).toBeInTheDocument();
  });

  it('should have the correct icon class on render', () => {
    render(<LangIcon name={ICON_NAME} />);
    const icon = screen.getByTestId(`language-icon-${ICON_NAME}`);
    expect(icon).toHaveClass(`devicon-${ICON_NAME}`);
    expect(icon).not.toHaveClass('colored');
  });

  it('should add colored class on mouse enter', async () => {
    vi.useRealTimers();

    const user = userEvent.setup();
    render(<LangIcon name={ICON_NAME} />);
    const icon = screen.getByTestId(`language-icon-${ICON_NAME}`);

    await user.hover(icon);

    await waitFor(() => {
      expect(icon).toHaveClass('colored');
    });
  });

  it('should remove colored class on mouse leave', async () => {
    vi.useRealTimers();

    const user = userEvent.setup();
    render(<LangIcon name={ICON_NAME} />);
    const icon = screen.getByTestId(`language-icon-${ICON_NAME}`);

    // Hover to add colored class
    await user.hover(icon);

    await waitFor(() => {
      expect(icon).toHaveClass('colored');
    });

    // Mouse leave to remove colored class
    await user.unhover(icon);

    await waitFor(() => {
      expect(icon).not.toHaveClass('colored');
    });
  });
});
