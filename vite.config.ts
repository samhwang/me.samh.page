import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isProduction = (mode: string) => mode === 'production';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    manifest: true,
  },
  plugins: [react()],
  base: isProduction(mode) ? '/rebuild/' : '/',
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['src/setupTests.ts'],
    coverage: {
      enabled: true,
    },
  },
}));
