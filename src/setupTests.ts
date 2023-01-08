import { cleanup } from '@testing-library/react';
import matchers, { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';
import { beforeAll, afterAll, afterEach, expect, vi } from 'vitest';

declare global {
  namespace Vi {
    interface JestAssertion<T = any> extends jest.Matchers<void, T>, TestingLibraryMatchers<T, void> {}
  }
}

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
