import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { aboutData as mockAboutData } from '../test-utils/mock-metadata';
import About from './about';

describe('Render About Data', () => {
  it('Should match snapshot', () => {
    const tree = render(<About />);
    expect(tree).toMatchSnapshot();
  });

  it('Should contain correct About content', () => {
    const tree = render(<About />);

    const firstName = tree.getByText(mockAboutData.firstName);
    expect(firstName).toBeInTheDocument();

    const lastName = tree.getByText(mockAboutData.lastName);
    expect(lastName).toBeInTheDocument();

    const address = tree.getByText(mockAboutData.address);
    expect(address).toBeInTheDocument();

    const link = mockAboutData.socialLinks[0];

    const linkIcon = tree.getByTestId(`social-icon-${link.icon}`);
    expect(linkIcon).toBeInTheDocument();

    const linkAnchor = linkIcon.parentElement as HTMLAnchorElement;
    expect(linkAnchor).toBeInTheDocument();
  });
});
