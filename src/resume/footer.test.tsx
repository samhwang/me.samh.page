import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
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

    const authorName = screen.getByRole('link', { name: 'Sam Huynh' });
    expect(authorName).toBeInTheDocument();
    expect(authorName).toHaveAttribute('href', 'https://github.com/samhwang');
  });

  it('displays all footer links', () => {
    render(<Footer />, { wrapper: RenderWrapper });

    // Test GitHub link
    const githubLink = screen.getByRole('link', { name: 'Sam Huynh' });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/samhwang');

    // Test Cloudflare Pages link
    const cloudflareLink = screen.getByRole('link', { name: 'Cloudflare Worker' });
    expect(cloudflareLink).toHaveAttribute('href', 'https://workers.cloudflare.com/');

    // Test Vite link
    const viteLink = screen.getByRole('link', { name: 'Vite' });
    expect(viteLink).toHaveAttribute('href', 'https://www.vitejs.dev/');

    // Test React link
    const reactLink = screen.getByRole('link', { name: 'React' });
    expect(reactLink).toHaveAttribute('href', 'https://reactjs.org/');
  });
});
