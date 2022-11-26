import { cleanup } from '@testing-library/react';
import matchers, { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';
import { expect, afterEach } from 'vitest';

declare global {
  namespace Vi {
    interface JestAssertion<T = any> extends jest.Matchers<void, T>, TestingLibraryMatchers<T, void> {}
  }
}

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
