import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isProduction = (mode: string) => mode === 'production';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: isProduction(mode) ? '/rebuild/' : '/',
}));
