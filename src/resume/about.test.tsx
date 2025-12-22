import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { aboutData as mockAboutData } from '../test-utils/mock-metadata';
import About from './about';

describe('Render About Data', () => {
  it('Should match snapshot', () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });

  it('Should contain correct About content', () => {
    render(<About />);

    const firstName = screen.getByText(mockAboutData.firstName);
    expect(firstName).toBeInTheDocument();

    const lastName = screen.getByText(mockAboutData.lastName);
    expect(lastName).toBeInTheDocument();

    const address = screen.getByText(mockAboutData.address);
    expect(address).toBeInTheDocument();

    const link = mockAboutData.socialLinks[0];

    const linkIcon = screen.getByTestId(`social-icon-${link.icon}`);
    expect(linkIcon).toBeInTheDocument();

    const linkAnchor = linkIcon.parentElement as HTMLAnchorElement;
    expect(linkAnchor).toBeInTheDocument();
  });
});
