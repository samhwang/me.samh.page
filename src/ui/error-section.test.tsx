import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { routeTree } from '../route-tree.gen';

// RenderWrapper always mounts '/', so an unknown path is needed to reach the 404 component.
async function renderMissingRoute() {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: ['/missing'] }),
  });
  await router.load();
  render(<RouterProvider router={router} />);
}

describe('ErrorSection', () => {
  it('renders the 404 heading for an unknown route', async () => {
    await renderMissingRoute();

    expect(await screen.findByRole('heading', { name: 'Error 404: Page not found.' })).toBeInTheDocument();
  });

  it('links back to the home page', async () => {
    await renderMissingRoute();

    expect(await screen.findByRole('link', { name: 'Home page.' })).toHaveAttribute('href', '/');
  });
});
