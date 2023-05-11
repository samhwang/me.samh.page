/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import reactBabel from '@vitejs/plugin-react';
import reactSwc from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import { manifest } from './metadata/metadata';

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
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setupTests.ts'],
    coverage: {
      provider: 'c8',
      enabled: !!process.env.CI,
    },
  },
});
