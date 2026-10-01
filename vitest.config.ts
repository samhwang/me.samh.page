import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config.ts';

// Cloudflare plugin starts its own server; exclude it from vitest to avoid conflict
const filteredPlugins = viteConfig.plugins?.flat().filter((p: any) => !p?.name?.startsWith('vite-plugin-cloudflare')) || [];

const viteConfigForTest = {
  ...viteConfig,
  plugins: filteredPlugins,
};

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfigForTest,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/setup-tests.ts'],
      pool: 'vmThreads',
      coverage: {
        provider: 'v8',
        enabled: !!process.env.CI,
        exclude: [
          'styled-system',
          '**/*.config.*',
          '**/*.d.ts',
          '**/*.gen.*',
          'src/test-utils/**',
          'src/app.tsx',
          'src/index.tsx',
          'src/router.tsx',
          'src/ui/**/*.recipe*.ts',
        ],
        include: ['src/**/**.ts', 'src/**/**.tsx'],
      },
      typecheck: {
        enabled: true,
      },
    },
  })
);
