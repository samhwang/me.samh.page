import * as fs from 'node:fs';
import * as path from 'node:path';

import { cloudflare } from '@cloudflare/vite-plugin';
import { devtools } from '@tanstack/devtools-vite';
import { tanstackRouter } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import splice from 'vite-plugin-splice';

import { metadata, manifest, ICONS } from './metadata/metadata.ts';

const ROOT = path.resolve(import.meta.dirname);
const ICON_NAMES = new Set(Object.values(ICONS));

function usedDeviconUnicodes(): string[] {
  const css = fs.readFileSync(path.resolve(ROOT, 'node_modules/devicon/devicon.min.css'), 'utf-8');
  const glyphs = Object.fromEntries([...css.matchAll(/\.devicon-([a-zA-Z0-9_-]+):before\{content:"([^"]+)"/g)].map((m) => [m[1], m[2]]));
  const cps = [
    ...new Set(
      Object.keys(glyphs)
        .filter((n) => ICON_NAMES.has(n))
        .map((n) => glyphs[n].codePointAt(0)!)
    ),
  ].sort((a, b) => a - b);
  return cps.map((cp) => `U+${cp.toString(16).toUpperCase().padStart(4, '0')}`);
}

const DEVICON_RULE_RE = /\.devicon-[a-zA-Z0-9_-]+:before(?:,\.[a-zA-Z0-9_-]+:before)*\{[^}]*\}/g;

let deviconCSS: string;

function deviconFilter(): Plugin {
  return {
    name: 'devicon-filter',
    enforce: 'pre',
    buildStart() {
      const src = fs.readFileSync(path.resolve(ROOT, 'node_modules/devicon/devicon.min.css'), 'utf-8');
      deviconCSS = src.replace(/@font-face\{font-family:"devicon";.*?font-display:block\}/g, '');
    },
    transform(code, id) {
      if (id.endsWith('/src/index.css') && code.includes('devicon/devicon.min.css')) {
        return code.replace(/@import\s+['"]devicon\/devicon\.min\.css['"][^;]*;\n?/, deviconCSS);
      }
    },
    generateBundle(_, bundle) {
      for (const fileName of Object.keys(bundle)) {
        const asset = bundle[fileName];
        if (asset.type !== 'asset' || !fileName.endsWith('.css')) continue;
        if (typeof asset.source !== 'string') continue;
        if (!/\.devicon-[a-zA-Z0-9_-]+:before/.test(asset.source)) continue;

        DEVICON_RULE_RE.lastIndex = 0;
        asset.source = asset.source.replace(DEVICON_RULE_RE, (match) => {
          const hasUsed = [...match.matchAll(/\.devicon-([a-zA-Z0-9_-]+):before/g)].some((m) => ICON_NAMES.has(m[1]));
          return hasUsed ? match : '';
        });
      }
    },
  };
}

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
    splice({
      fonts: [
        {
          family: 'devicon',
          src: 'node_modules/devicon/fonts/devicon.woff',
          unicodes: usedDeviconUnicodes(),
        },
      ],
    }),
    deviconFilter(),
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
