import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  body: {
    pt: '54px',
    color: 'gray.600!',
    fontFamily: 'body!',
    '@media (min-width: 992px)': {
      pt: 0,
      pl: '17rem',
    },
  },
  h1: {
    fontFamily: 'heading',
    fontWeight: '700!',
    textTransform: 'uppercase',
    fontSize: '6rem!',
    lineHeight: '5.5rem',
  },
  h2: {
    fontFamily: 'heading',
    fontWeight: '700!',
    textTransform: 'uppercase',
    fontSize: '3.5rem!',
  },
  h3: {
    fontFamily: 'heading',
    fontWeight: '700!',
    textTransform: 'uppercase',
    fontSize: '2rem!',
  },
  'h4, h5, h6': {
    fontFamily: 'heading',
    fontWeight: '700!',
    textTransform: 'uppercase',
    fontSize: '1.5rem!',
  },
  ul: {
    listStyleType: 'disc',
  },
  li: {
    display: 'list-item',
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  globalCss,
  theme: {
    extend: {
      tokens: {
        colors: {
          white: { value: '#fff' },
          'gray.600': { value: '#868e96' },
          'gray.700': { value: '#495057' },
          'gray.800': { value: '#343a40' },
          blue: { value: '#007bff' },
          lightblue: { value: '#4da3ff' },
          darkblue: { value: '#0056b3' },
        },
        sizes: {
          sidebarWidth: { value: '17rem' },
        },
      },
      semanticTokens: {
        colors: {
          primary: { value: '{colors.blue}' },
        },
        fonts: {
          body: {
            value: 'Mulish',
          },
          heading: {
            value: 'Saira Extra Condensed',
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
