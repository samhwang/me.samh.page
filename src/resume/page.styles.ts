import { css } from '../../styled-system/css';

// Section wrapper for each resume section
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

// Horizontal separator between sections
export const separator = css({
  margin: 0,
});
