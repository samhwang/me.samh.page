import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

vi.mock('@tanstack/react-devtools', () => ({
  TanStackDevtools: () => null,
}));

afterEach(() => {
  cleanup();
});
