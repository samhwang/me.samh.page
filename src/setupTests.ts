import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, expect, vi } from 'vitest';

expect.extend(matchers);

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
