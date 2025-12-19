import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { sidebarData as mockSidebarData } from '../test-utils/mock-metadata';
import Sidebar from './sidebar';

describe('Sidebar', () => {
  it('renders without crashing and matches snapshot', () => {
    const tree = render(<Sidebar />);
    expect(tree).toMatchSnapshot();
  });

  it('displays user name in mobile view', () => {
    render(<Sidebar />);

    const fullName = `${mockSidebarData.firstName} ${mockSidebarData.lastName}`;
    const nameElement = screen.getByText(fullName);
    expect(nameElement).toBeInTheDocument();
  });

  it('displays avatar with correct alt text', () => {
    render(<Sidebar />);

    const altText = `${mockSidebarData.firstName} ${mockSidebarData.lastName} Avatar`;
    const avatar = screen.getByAltText(altText);
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', '/src/img/avatar.jpg');
  });

  it('displays all navigation tabs', () => {
    render(<Sidebar />);

    const navTabs = ['About', 'Experience', 'Education', 'Skills', 'Projects'];

    for (const tab of navTabs) {
      const tabLink = screen.getByRole('link', { name: tab });
      expect(tabLink).toBeInTheDocument();
    }
  });

  it('navigation links have correct href attributes', () => {
    render(<Sidebar />);

    const expectedLinks = [
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#experience' },
      { name: 'Education', href: '#education' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
    ];

    for (const { name, href } of expectedLinks) {
      const link = screen.getByRole('link', { name });
      expect(link).toHaveAttribute('href', href);
    }
  });

  it('toggle button expands and collapses navigation', async () => {
    // Use real timers for user interactions
    vi.useRealTimers();

    const user = userEvent.setup();
    const { container } = render(<Sidebar />);

    // Find the toggle button
    const toggleButton = screen.getByRole('button', { name: 'Toggle navigation' });
    expect(toggleButton).toBeInTheDocument();

    // Find the collapsible navigation div by aria-controls
    const navbarId = toggleButton.getAttribute('aria-controls');
    const navCollapse = container.querySelector(`#${navbarId}`);
    expect(navCollapse).toBeInTheDocument();

    // Get the initial data attributes
    const initialVisible = navCollapse?.getAttribute('data-visible');
    const initialCollapsed = toggleButton.getAttribute('data-collapsed');

    // Click to expand
    await user.click(toggleButton);

    // After click, check if data attributes changed (indicating state change)
    const expandedVisible = navCollapse?.getAttribute('data-visible');
    const expandedCollapsed = toggleButton.getAttribute('data-collapsed');

    // Data attributes should be different after toggle
    expect(expandedVisible).not.toEqual(initialVisible);
    expect(expandedCollapsed).not.toEqual(initialCollapsed);

    // Click again to collapse
    await user.click(toggleButton);

    // Data attributes should return to initial state
    const collapsedAgainVisible = navCollapse?.getAttribute('data-visible');
    const collapsedAgainCollapsed = toggleButton.getAttribute('data-collapsed');

    expect(collapsedAgainVisible).toEqual(initialVisible);
    expect(collapsedAgainCollapsed).toEqual(initialCollapsed);
  });

  it('toggle button has correct ARIA attributes', () => {
    render(<Sidebar />);

    const toggleButton = screen.getByRole('button', { name: 'Toggle navigation' });

    expect(toggleButton).toHaveAttribute('aria-label', 'Toggle navigation');
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    expect(toggleButton).toHaveAttribute('aria-controls');
  });
});
