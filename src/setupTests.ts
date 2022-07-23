import matchers, {
  TestingLibraryMatchers,
} from '@testing-library/jest-dom/matchers';
import { beforeAll, afterAll, afterEach, expect } from 'vitest';
import { server } from './__mocks__/msw/server';

declare global {
  namespace Vi {
    interface JestAssertion<T = any>
      extends jest.Matchers<void, T>,
        TestingLibraryMatchers<T, void> {}
  }
}

expect.extend(matchers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
