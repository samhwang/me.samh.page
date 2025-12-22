import { render, screen } from '@testing-library/react';
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
  });

  it('should have the correct icon class on hover', async () => {
    vi.useRealTimers();

    const user = userEvent.setup();
    render(<LangIcon name={ICON_NAME} />);
    const icon = screen.getByTestId(`language-icon-${ICON_NAME}`);
    await user.hover(icon);

    expect(icon).toHaveClass('colored');
  });
});
