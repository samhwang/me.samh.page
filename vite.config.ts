import { cloudflare } from '@cloudflare/vite-plugin';
import babel from '@rolldown/plugin-babel';
import { devtools } from '@tanstack/devtools-vite';
import { tanstackRouter } from '@tanstack/router-plugin/esbuild';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import { manifest } from './metadata/metadata.ts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
  },
  plugins: [
    devtools(),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      manifest,
    }),
    cloudflare(),
  ],
});
