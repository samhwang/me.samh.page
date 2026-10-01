import { createMemoryHistory, createRootRoute, createRouter, RouterProvider } from '@tanstack/react-router';
import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { useAboutData } from '../../metadata/use-metadata';
import { aboutData } from '../test-utils/mock-metadata';
import RenderWrapper from '../test-utils/render-wrapper';
import Footer from './footer';

describe('Footer', () => {
  it('Should render without crashing and match snapshot', () => {
    const { container } = render(<Footer />, { wrapper: RenderWrapper });
    expect(container).toMatchSnapshot();
  });

  it('displays copyright with current year', () => {
    render(<Footer />, { wrapper: RenderWrapper });

    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(new RegExp(`© ${currentYear}`));
    expect(copyrightText).toBeInTheDocument();
  });

  it('displays author name', () => {
    render(<Footer />, { wrapper: RenderWrapper });

    const authorName = screen.getByRole('link', { name: `${aboutData.firstName} ${aboutData.lastName}` });
    expect(authorName).toBeInTheDocument();
    expect(authorName).toHaveAttribute('href', 'https://github.com/testusername');
  });

  it('displays all footer links', () => {
    render(<Footer />, { wrapper: RenderWrapper });

    // Test GitHub link
    const githubLink = screen.getByRole('link', { name: `${aboutData.firstName} ${aboutData.lastName}` });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/testusername');

    // Test Cloudflare Workers link
    const cloudflareLink = screen.getByRole('link', { name: 'Cloudflare Worker' });
    expect(cloudflareLink).toHaveAttribute('href', 'https://workers.cloudflare.com/');

    // Test Vite link
    const viteLink = screen.getByRole('link', { name: 'Vite' });
    expect(viteLink).toHaveAttribute('href', 'https://www.vitejs.dev/');

    // Test React link
    const reactLink = screen.getByRole('link', { name: 'React' });
    expect(reactLink).toHaveAttribute('href', 'https://reactjs.org/');
  });

  describe('without a GitHub social link', () => {
    afterEach(() => {
      vi.mocked(useAboutData).mockReturnValue(aboutData);
    });

    it('falls back to a hash link for the author link', async () => {
      vi.mocked(useAboutData).mockReturnValue({ ...aboutData, socialLinks: [] });
      // RenderWrapper mounts the whole page, so Footer is isolated in its own router.
      const router = createRouter({
        routeTree: createRootRoute({ component: Footer }),
        history: createMemoryHistory({ initialEntries: ['/'] }),
      });
      await router.load();
      render(<RouterProvider router={router} />);

      const authorLink = await screen.findByRole('link', { name: `${aboutData.firstName} ${aboutData.lastName}` });
      // TanStack Router resolves the '#' fallback against the current path.
      expect(authorLink).toHaveAttribute('href', '/#');
    });
  });
});
