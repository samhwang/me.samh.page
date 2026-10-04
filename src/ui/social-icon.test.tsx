import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import SocialIcon from './social-icon';

const ICON_NAME = 'github-plain';
const NAME = 'GitHub';
const URL = 'https://github.com/testusername';

describe('Social Icon', () => {
  it('should show the icon', () => {
    render(<SocialIcon icon={ICON_NAME} name={NAME} url={URL} />);
    const icon = screen.getByTestId(`social-icon-${ICON_NAME}`);
    expect(icon).toBeInTheDocument();
  });

  it('should link to the correct URL', () => {
    render(<SocialIcon icon={ICON_NAME} name={NAME} url={URL} />);
    const icon = screen.getByTestId(`social-icon-${ICON_NAME}`);
    const parent = icon.parentElement as HTMLAnchorElement;
    expect(parent).toBeInTheDocument();
    expect(parent.href).toEqual(URL);
  });

  it('should show the correct class on render', () => {
    render(<SocialIcon icon={ICON_NAME} name={NAME} url={URL} />);
    const icon = screen.getByTestId(`social-icon-${ICON_NAME}`);
    expect(icon).toHaveClass(`devicon-${ICON_NAME}`);
  });

  it('should keep the label on the anchor', () => {
    render(<SocialIcon icon={ICON_NAME} name={NAME} url={URL} />);
    expect(screen.getByRole('link', { name: NAME })).toHaveAttribute('href', URL);
  });

  it('should show a tooltip with the label on hover', async () => {
    const user = userEvent.setup();
    render(<SocialIcon icon={ICON_NAME} name={NAME} url={URL} />);
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    await user.hover(screen.getByRole('link', { name: NAME }));

    expect(await screen.findByRole('tooltip')).toHaveTextContent(NAME);
  });

  it('should show a tooltip with the label on keyboard focus', async () => {
    const user = userEvent.setup();
    render(<SocialIcon icon={ICON_NAME} name={NAME} url={URL} />);

    await user.tab();

    expect(screen.getByRole('link', { name: NAME })).toHaveFocus();
    expect(await screen.findByRole('tooltip')).toHaveTextContent(NAME);
  });
});
