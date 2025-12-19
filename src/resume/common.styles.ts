import { css } from '../../styled-system/css';

/**
 * Common semantic styles shared across multiple resume components
 * These are reusable patterns, not Bootstrap-style utilities
 */

// === LAYOUT PATTERNS ===

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

// Section content container (100% width)
export const container = css({
  width: '100%',
});

// === TYPOGRAPHY PATTERNS ===

// Section heading (h2) with standard margin
export const heading = css({
  marginBottom: 'headingMargin',
});

// Subheading style (used for degree, company, skill titles)
export const subheading = css({
  marginBottom: 'subheadingMargin',
  textTransform: 'uppercase',
  fontWeight: 500,
  fontSize: '1.5rem',
  fontFamily: 'heading',
});

// Title with no bottom margin (h3 typically)
export const title = css({
  marginBottom: 0,
});

// === COLOR PATTERNS ===

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

// Primary text color
export const textPrimary = css({
  color: 'primary',
});

// Primary background color
export const bgPrimary = css({
  backgroundColor: 'primary',
});
