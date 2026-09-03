import { cloudflare } from '@cloudflare/vite-plugin';
import { devtools } from '@tanstack/devtools-vite';
import { tanstackRouter } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import { metadata, manifest } from './metadata/metadata.ts';

function htmlMetadata(): Plugin {
  return {
    name: 'html-metadata',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        const { title, description } = metadata.site;
        return html
          .replace(/<!--.*-->\n\s*/, '')
          .replace('<title></title>', `<title>${title}</title>`)
          .replace('<meta name="description" content="" />', `<meta name="description" content="${description}" />`);
      },
    },
  };
}

function humansTxt(): Plugin {
  return {
    name: 'humans-txt',
    apply: 'build',
    generateBundle() {
      const { firstName, lastName, socialLinks } = metadata.personalInformation;
      const github = socialLinks.find((link) => link.name.toLowerCase() === 'github');
      const handle = github?.url.replace(/^https?:\/\/(www\.)?github\.com\//, '') ?? '';
      const date = new Date().toISOString().slice(0, 10);
      this.emitFile({
        type: 'asset',
        fileName: 'humans.txt',
        source: [
          '/* TEAM */',
          `Developer: ${firstName} ${lastName}`,
          `GitHub: ${handle}`,
          '',
          '/* THANKS */',
          'Vite',
          'Node',
          'React',
          'CloudFlare',
          'PandaCSS',
          '',
          '/* SITE */',
          `Last update: ${date}`,
          'Standards: JavaScript, TypeScript, React',
          '',
        ].join('\n'),
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
  },
  plugins: [
    htmlMetadata(),
    devtools(),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react({
      compiler: true,
    }),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      manifest,
    }),
    humansTxt(),
    cloudflare(),
  ],
});
