import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import RenderWrapper from '../test-utils/render-wrapper';
import Layout from './layout';

describe('Layout', () => {
  it('renders without crashing and matches snapshot', () => {
    const { container } = render(<Layout />, { wrapper: RenderWrapper });
    expect(container).toMatchSnapshot();
  });

  it('renders Sidebar component', () => {
    render(<Layout />, { wrapper: RenderWrapper });

    // Test that sidebar navigation is present by checking for nav element
    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();

    // Check that at least one sidebar link is present (About)
    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();
  });

  it('renders Footer component', () => {
    render(<Layout />, { wrapper: RenderWrapper });

    // Test that footer is present by checking for copyright text
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(new RegExp(`© ${currentYear}`));
    expect(copyrightText).toBeInTheDocument();
  });

  it('renders main container for child routes', () => {
    const { container } = render(<Layout />, { wrapper: RenderWrapper });

    // Test that the container div exists (the one with containerFluidNoPadding class)
    // This is the main content area that holds the Outlet
    const mainContainer = container.querySelector('div > div');
    expect(mainContainer).toBeInTheDocument();
  });
});
