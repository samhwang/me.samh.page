import { afterAll, beforeAll, vi } from 'vitest';

beforeAll(() => {
  vi.useFakeTimers();
  const currentDate = new Date().setFullYear(2022);
  vi.setSystemTime(currentDate);
});

afterAll(() => {
  vi.useRealTimers();
});
