import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { sidebarData as mockSidebarData } from '../test-utils/mock-metadata';
import Sidebar from './sidebar';

describe('Sidebar', () => {
  it('does not leave a dangling aria-labelledby reference', () => {
    const { container } = render(<Sidebar />);

    for (const element of container.querySelectorAll('[aria-labelledby]')) {
      for (const id of (element.getAttribute('aria-labelledby') ?? '').split(' ')) {
        expect(container.querySelector(`[id="${id}"]`)).toBeInTheDocument();
      }
    }
    expect(screen.getByText('Sections')).toBeInTheDocument();
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
      const tabLink = screen.getByRole('link', { name: tab, hidden: true });
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
      const link = screen.getByRole('link', { name, hidden: true });
      expect(link).toHaveAttribute('href', href);
    }
  });

  describe('mobile menu', () => {
    it('toggle button expands and collapses navigation', async () => {
      const user = userEvent.setup();
      render(<Sidebar />);

      const toggleButton = screen.getByRole('button', { name: 'Toggle navigation' });
      const menu = document.getElementById(toggleButton.getAttribute('aria-controls')!);
      expect(menu).toHaveAttribute('data-state', 'closed');
      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

      await user.click(toggleButton);
      expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
      expect(menu).toHaveAttribute('data-state', 'open');

      await user.click(toggleButton);
      await waitFor(() => expect(toggleButton).toHaveAttribute('aria-expanded', 'false'));
      expect(menu).toHaveAttribute('data-state', 'closed');
    });

    it('closes the menu on Escape', async () => {
      const user = userEvent.setup();
      render(<Sidebar />);

      const toggleButton = screen.getByRole('button', { name: 'Toggle navigation' });
      await user.click(toggleButton);
      expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

      await user.keyboard('{Escape}');
      await waitFor(() => expect(toggleButton).toHaveAttribute('aria-expanded', 'false'));
    });

    it('closes the menu on Escape with focus outside the nav', async () => {
      const user = userEvent.setup();
      render(<Sidebar />);

      const toggleButton = screen.getByRole('button', { name: 'Toggle navigation' });
      await user.click(toggleButton);
      expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

      document.body.focus();

      await user.keyboard('{Escape}');
      await waitFor(() => expect(toggleButton).toHaveAttribute('aria-expanded', 'false'));
    });

    it('does nothing on Escape when menu is already closed', async () => {
      const user = userEvent.setup();
      render(<Sidebar />);

      const toggleButton = screen.getByRole('button', { name: 'Toggle navigation' });
      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

      await user.keyboard('{Escape}');

      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('closes the menu when a navigation link is clicked', async () => {
      const user = userEvent.setup();
      render(<Sidebar />);

      const toggleButton = screen.getByRole('button', { name: 'Toggle navigation' });
      await user.click(toggleButton);
      await user.click(screen.getByRole('link', { name: 'Skills' }));

      await waitFor(() => expect(toggleButton).toHaveAttribute('aria-expanded', 'false'));
    });
  });

  it('toggle button has correct ARIA attributes', () => {
    render(<Sidebar />);

    const toggleButton = screen.getByRole('button', { name: 'Toggle navigation' });

    expect(toggleButton).toHaveAttribute('aria-label', 'Toggle navigation');
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    expect(toggleButton).toHaveAttribute('aria-controls');
  });

  describe('at the lg breakpoint', () => {
    const originalMatchMedia = window.matchMedia;

    beforeEach(() => {
      window.matchMedia = (query: string) =>
        ({ matches: true, media: query, addEventListener: () => {}, removeEventListener: () => {} }) as unknown as MediaQueryList;
    });
    afterEach(() => {
      window.matchMedia = originalMatchMedia;
    });

    it('keeps the menu open while the toggle stays in the DOM', () => {
      render(<Sidebar />);

      const toggleButton = screen.getByRole('button', { name: 'Toggle navigation', hidden: true });
      expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
      expect(document.getElementById(toggleButton.getAttribute('aria-controls')!)).not.toHaveAttribute('hidden');
      expect(screen.getByRole('link', { name: 'About' })).toBeVisible();
    });
  });

  describe('active section', () => {
    type ObserverStub = { cb: IntersectionObserverCallback };
    const observers = () => (IntersectionObserver as unknown as { instances: ObserverStub[] }).instances;

    beforeEach(() => {
      observers().length = 0;
    });

    it('marks the intersecting section link as active', async () => {
      render(<Sidebar />);

      await waitFor(() => expect(observers()).not.toHaveLength(0));
      const entries = [{ target: { id: 'skills' }, isIntersecting: true }] as unknown as IntersectionObserverEntry[];
      await act(async () => {
        for (const observer of observers()) observer.cb(entries, {} as IntersectionObserver);
      });

      const skills = screen.getByRole('link', { name: 'Skills', hidden: true });
      await waitFor(() => expect(skills).toHaveAttribute('data-active'));
      expect(skills).toHaveAttribute('aria-current', 'location');
      expect(screen.getByRole('link', { name: 'About', hidden: true })).not.toHaveAttribute('data-active');
    });
  });
});
