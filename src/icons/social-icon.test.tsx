import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SocialIcon from './social-icon';

const ICON_NAME = 'github-plain';
const URL = 'https://github.com/samhwang';

describe('Social Icon', () => {
  it('Should render without crashing and match snapshot', () => {
    const tree = render(<SocialIcon icon={ICON_NAME} url={URL} />);
    expect(tree).toMatchSnapshot();
  });

  it('should show the icon', () => {
    const tree = render(<SocialIcon icon={ICON_NAME} url={URL} />);
    const icon = tree.getByTestId(`social-icon-${ICON_NAME}`);
    expect(icon).toBeInTheDocument();
  });

  it('should link to the correct URL', () => {
    const tree = render(<SocialIcon icon={ICON_NAME} url={URL} />);
    const icon = tree.getByTestId(`social-icon-${ICON_NAME}`);
    const parent = icon.parentElement as HTMLAnchorElement;
    expect(parent).toBeInTheDocument();
    expect(parent.href).toEqual(URL);
  });

  it('should show the correct class on render', () => {
    const tree = render(<SocialIcon icon={ICON_NAME} url={URL} />);
    const icon = tree.getByTestId(`social-icon-${ICON_NAME}`);
    expect(icon).toHaveClass(`devicon-${ICON_NAME}`);
  });
});
