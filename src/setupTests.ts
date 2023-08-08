import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { beforeAll, afterAll, afterEach, expect, vi } from 'vitest';

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
