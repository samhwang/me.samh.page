/// <reference types="vitest" />

import { tanstackRouter } from '@tanstack/router-plugin/esbuild';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { manifest } from './metadata/metadata';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
  },
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      manifest,
    }),
  ],
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
});
