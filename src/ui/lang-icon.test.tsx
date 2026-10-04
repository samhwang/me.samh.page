import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import LangIcon from './lang-icon';

const ICON_NAME = 'php-plain';
const getGlyph = () => screen.getByTestId(`language-icon-glyph-${ICON_NAME}`);

describe('Lang Icon', () => {
  it('should show the icon', () => {
    render(<LangIcon name={ICON_NAME} />);
    const icon = screen.getByTestId(`language-icon-${ICON_NAME}`);
    expect(icon).toBeInTheDocument();
  });

  it('should have the correct icon class on render', () => {
    render(<LangIcon name={ICON_NAME} />);
    const icon = getGlyph();
    expect(icon).toHaveClass(`devicon-${ICON_NAME}`);
    expect(icon).not.toHaveClass('colored');
  });

  it('should add colored class on mouse enter', async () => {
    const user = userEvent.setup();
    render(<LangIcon name={ICON_NAME} />);
    const button = screen.getByTestId(`language-icon-${ICON_NAME}`);
    const glyph = getGlyph();

    await user.hover(button);

    await waitFor(() => {
      expect(glyph).toHaveClass('colored');
    });
  });

  it('should remove colored class on mouse leave', async () => {
    const user = userEvent.setup();
    render(<LangIcon name={ICON_NAME} />);
    const button = screen.getByTestId(`language-icon-${ICON_NAME}`);
    const glyph = getGlyph();

    await user.hover(button);

    await waitFor(() => {
      expect(glyph).toHaveClass('colored');
    });

    await user.unhover(button);

    await waitFor(() => {
      expect(glyph).not.toHaveClass('colored');
    });
  });

  it('should render a native button', () => {
    render(<LangIcon name={ICON_NAME} />);
    const button = screen.getByRole('button', { name: ICON_NAME });
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should keep devicon classes off the button and hide the glyph from assistive tech', () => {
    render(<LangIcon name={ICON_NAME} />);
    const button = screen.getByRole('button', { name: ICON_NAME });
    expect(button).not.toHaveClass(`devicon-${ICON_NAME}`);
    expect(getGlyph()).toHaveAttribute('aria-hidden', 'true');
  });

  it.each(['{Enter}', ' '])('should toggle colored class once on %j keypress', async (key) => {
    const user = userEvent.setup();
    render(<LangIcon name={ICON_NAME} />);
    const button = screen.getByRole('button', { name: ICON_NAME });

    await user.tab();
    expect(button).toHaveFocus();

    await user.keyboard(key);
    expect(getGlyph()).toHaveClass('colored');

    await user.keyboard(key);
    expect(getGlyph()).not.toHaveClass('colored');
  });

  it('should not toggle colored class on non-activating keypress', async () => {
    const user = userEvent.setup();
    render(<LangIcon name={ICON_NAME} />);
    const button = screen.getByRole('button', { name: ICON_NAME });

    await user.tab();
    expect(button).toHaveFocus();

    await user.keyboard('a');
    expect(getGlyph()).not.toHaveClass('colored');
  });
});
