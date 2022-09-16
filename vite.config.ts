import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const isProduction = (mode: string) => mode === 'production';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    manifest: true,
  },
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'auto',
      base: isProduction(mode) ? '/rebuild/' : '/',
      includeAssets: ['favicon.svg', 'robots.txt', 'humans.txt'],
      manifest: {
        name: 'samhwang page',
        short_name: 'samhwang',
        description: 'homepage for samhwang',
        icons: [
          {
            src: 'img192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'img512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'img512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setupTests.ts'],
    coverage: {
      enabled: true,
    },
  },
}));
