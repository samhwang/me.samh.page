import { css } from '../../styled-system/css';

// Footer section container
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

// Footer link styling
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
