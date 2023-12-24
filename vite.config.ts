/// <reference types="vitest" />

import { defineConfig } from 'vite';
import reactBabel from '@vitejs/plugin-react';
import reactSwc from '@vitejs/plugin-react-swc';
import purgeCss from '@mojojoejo/vite-plugin-purgecss';
import { VitePWA } from 'vite-plugin-pwa';
import { manifest, iconClasses } from './metadata/metadata';

const useSwc = true;
const react = useSwc ? reactSwc : reactBabel;

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
  },
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      manifest,
    }),
    purgeCss({
      safelist: [...iconClasses],
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setupTests.ts'],
    coverage: {
      provider: 'v8',
      enabled: !!process.env.CI,
    },
  },
});
