import { css } from '../../styled-system/css';

export const section = css({
  pt: '5rem!',
  pb: '5rem!',
  pl: '2rem',
  maxW: '75rem',
  lg: {
    pt: '3rem!',
    pb: '3rem!',
    pl: '3rem',
  },
  md: {
    minH: '100vh',
  },
});

export const date = css({
  md: {
    minW: '8rem',
  },
});

export const bgPrimary = css({
  bgColor: 'primary',
});

export const textPrimary = css({
  color: 'primary',
});

export const link = css({
  color: 'primary!',
  _hover: {
    color: 'slightlyDarker!',
  },
  _focus: {
    color: 'slightlyDarker!',
  },
  _active: {
    color: 'slightlyDarker!',
  },
});

// Common utility classes
export const w100 = css({
  width: '100%',
});

export const mb0 = css({
  marginBottom: 0,
});

export const mb3 = css({
  marginBottom: '1rem',
});

export const mb5 = css({
  marginBottom: '3rem',
});

export const dFlex = css({
  display: 'flex',
});

export const alignItemsCenter = css({
  alignItems: 'center',
});

export const listInline = css({
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: 0,
  paddingLeft: '2rem',
  margin: 0,
  marginTop: '1rem',
  gap: '1.5rem',
  rowGap: '1rem',
});

export const listInlineItem = css({
  display: 'inline-block',
});
