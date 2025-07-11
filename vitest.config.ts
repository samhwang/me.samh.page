import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/setup-tests.ts'],
      coverage: {
        provider: 'v8',
        enabled: !!process.env.CI,
        exclude: ['styled-system', '**/*.config.*', '**/*.d.ts'],
        include: ['src/resume/**', 'src/icons/**'],
      },
      typecheck: {
        enabled: true,
      },
    },
  })
);
