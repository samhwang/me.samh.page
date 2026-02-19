import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  body: {
    pt: '54px',
    color: 'gray.600!',
    fontFamily: 'body!',
    lg: {
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
    paddingLeft: '2rem',
    marginBottom: '1rem',
  },
  li: {
    display: 'list-item',
    marginBottom: '0.5rem',
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
        sizes: {
          sidebarWidth: { value: '17rem' },
          contentMaxWidth: { value: '75rem' },
        },
        spacing: {
          sectionVertical: { value: '5rem' },
          sectionPadding: { value: '0.75rem' },
          sectionPaddingLg: { value: '3rem' },
          entryMargin: { value: '3rem' },
          headingMargin: { value: '3rem' },
          subheadingMargin: { value: '1rem' },
          dateMinWidth: { value: '8rem' },
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
      semanticTokens: {
        colors: {
          primary: {
            value: '{colors.blue.800}',
          },
          slightlyDarker: {
            value: '{colors.green.900}',
          },
          warning: {
            value: '{colors.orange.500}',
          },
        },
      },
      recipes: {
        entryContainer: {
          base: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginBottom: 'entryMargin',
          },
          variants: {
            responsive: {
              row: {
                md: { flexDirection: 'row' },
              },
              column: {
                flexDirection: 'column',
              },
            },
          },
          defaultVariants: {
            responsive: 'row',
          },
        },
        dateDisplay: {
          base: {
            color: 'primary',
          },
          variants: {
            alignment: {
              right: {
                md: {
                  textAlign: 'right',
                  minWidth: 'dateMinWidth',
                },
              },
              left: {
                textAlign: 'left',
              },
            },
          },
          defaultVariants: {
            alignment: 'right',
          },
        },
        inlineList: {
          base: {
            display: 'flex',
            flexWrap: 'wrap',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            marginTop: '1rem',
          },
          variants: {
            gap: {
              small: { gap: '0.5rem' },
              medium: { gap: '1rem' },
              large: { gap: '1.5rem', rowGap: '1rem' },
            },
          },
          defaultVariants: {
            gap: 'large',
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
