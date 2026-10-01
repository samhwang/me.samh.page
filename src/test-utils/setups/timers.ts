import { afterAll, beforeAll, vi } from 'vitest';

// Freeze only Date. Faking setTimeout/rAF too would stall userEvent and Ark's animation and delay timers.
beforeAll(() => {
  vi.useFakeTimers({ toFake: ['Date'] });
  const currentDate = new Date().setFullYear(2022);
  vi.setSystemTime(currentDate);
});

afterAll(() => {
  vi.useRealTimers();
});
