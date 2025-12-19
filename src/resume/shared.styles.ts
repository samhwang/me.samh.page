import { css } from '../../styled-system/css';

/**
 * Shared semantic styles used across multiple components
 * These are not Bootstrap-style utilities, but semantic, reusable patterns
 */

// Standard section container (used in Footer, Page, 404)
export const section = css({
  display: 'flex',
  alignItems: 'center',
  padding: 'sectionPadding',
  paddingTop: 'sectionVertical',
  paddingBottom: 'sectionVertical',
  paddingLeft: '2rem',
  maxWidth: 'contentMaxWidth',

  lg: {
    padding: 'sectionPaddingLg',
    paddingTop: '3rem',
    paddingBottom: '3rem',
  },

  md: {
    minHeight: '100vh',
  },
});

// Standard link styling (used in Footer, Projects, 404)
export const link = css({
  color: 'primary',
  textDecoration: 'none',

  '&:hover': {
    color: 'slightlyDarker',
  },

  '&:focus': {
    color: 'slightlyDarker',
  },

  '&:active': {
    color: 'slightlyDarker',
  },
});

// Primary background color (semantic utility)
export const bgPrimary = css({
  backgroundColor: 'primary',
});

// Primary text color (semantic utility)
export const textPrimary = css({
  color: 'primary',
});
