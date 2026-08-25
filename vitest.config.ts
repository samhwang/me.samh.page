import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config.ts';

// https://vitejs.dev/config/
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
        exclude: ['styled-system', '**/*.config.*', '**/*.d.ts', '**/*.gen.*', 'src/test-utils'],
        include: ['src/**/**.ts'],
      },
      typecheck: {
        enabled: true,
      },
    },
  })
);
