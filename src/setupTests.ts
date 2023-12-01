import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';

beforeAll(() => {
  vi.useFakeTimers();
  const currentDate = new Date().setFullYear(2022);
  vi.setSystemTime(currentDate);
});

afterAll(() => {
  vi.useRealTimers();
});

afterEach(() => {
  cleanup();
});
