import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import LangIcon from './lang-icon';

const ICON_NAME = 'php-plain';

describe('Lang Icon', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = render(<LangIcon name={ICON_NAME} />);
    expect(tree).toMatchSnapshot();
  });

  it('should show the icon', () => {
    const tree = render(<LangIcon name={ICON_NAME} />);
    const icon = tree.getByTestId(`language-icon-${ICON_NAME}`);
    expect(icon).toBeInTheDocument();
  });

  it('should have the correct icon class on render', () => {
    const tree = render(<LangIcon name={ICON_NAME} />);
    const icon = tree.getByTestId(`language-icon-${ICON_NAME}`);
    expect(icon).toHaveClass(`devicon-${ICON_NAME}`);
  });

  it('should have the correct icon class on hover', async () => {
    vi.useRealTimers();

    const user = userEvent.setup();
    const tree = render(<LangIcon name={ICON_NAME} />);
    const icon = tree.getByTestId(`language-icon-${ICON_NAME}`);
    await user.hover(icon);

    expect(icon).toHaveClass('colored');
  });
});
