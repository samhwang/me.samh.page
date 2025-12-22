import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SocialIcon from './social-icon';

const ICON_NAME = 'github-plain';
const URL = 'https://github.com/samhwang';

describe('Social Icon', () => {
  it('Should render without crashing and match snapshot', () => {
    const { container } = render(<SocialIcon icon={ICON_NAME} url={URL} />);
    expect(container).toMatchSnapshot();
  });

  it('should show the icon', () => {
    render(<SocialIcon icon={ICON_NAME} url={URL} />);
    const icon = screen.getByTestId(`social-icon-${ICON_NAME}`);
    expect(icon).toBeInTheDocument();
  });

  it('should link to the correct URL', () => {
    render(<SocialIcon icon={ICON_NAME} url={URL} />);
    const icon = screen.getByTestId(`social-icon-${ICON_NAME}`);
    const parent = icon.parentElement as HTMLAnchorElement;
    expect(parent).toBeInTheDocument();
    expect(parent.href).toEqual(URL);
  });

  it('should show the correct class on render', () => {
    render(<SocialIcon icon={ICON_NAME} url={URL} />);
    const icon = screen.getByTestId(`social-icon-${ICON_NAME}`);
    expect(icon).toHaveClass(`devicon-${ICON_NAME}`);
  });
});
