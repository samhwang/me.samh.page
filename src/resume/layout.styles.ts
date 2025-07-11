import { css } from '../../styled-system/css';

// Container utilities
export const containerFluidNoPadding = css({
  width: '100%',
  padding: 0,
});

// Flexbox utilities
export const flexColumn = css({
  flexDirection: 'column',
});

export const flexMdRow = css({
  md: {
    flexDirection: 'row',
  },
});

export const justifyContentBetween = css({
  justifyContent: 'space-between',
});

// Spacing utilities
export const p3 = css({
  padding: '0.75rem',
});

export const pLg5 = css({
  lg: {
    padding: '3rem',
  },
});

export const m0 = css({
  margin: 0,
});

export const mb2 = css({
  marginBottom: '0.5rem',
});

export const mxAuto = css({
  marginX: 'auto',
});

// Display utilities
export const dBlock = css({
  display: 'block',
});

export const dNone = css({
  display: 'none',
});

export const dLgNone = css({
  lg: {
    display: 'none',
  },
});

export const dLgBlock = css({
  lg: {
    display: 'block',
  },
});

// Text utilities
export const textMdRight = css({
  md: {
    textAlign: 'right',
  },
});

// Image utilities
export const imgFluid = css({
  maxWidth: '100%',
  height: 'auto',
});

export const roundedCircle = css({
  borderRadius: '50%',
});

// FontAwesome utilities
export const faUl = css({
  listStyle: 'none',
  marginLeft: '2.5em',
  paddingLeft: 0,
  '& li': {
    position: 'relative',
  },
  '& .fa-li': {
    position: 'absolute',
    left: '-2em',
    width: '2em',
    top: '0.14285714em',
    textAlign: 'center',
  },
});

// Combined utilities for common patterns
export const sectionPadding = css({
  padding: '0.75rem',
  lg: {
    padding: '3rem',
  },
});

export const flexCenterBetween = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const flexColumnMdRow = css({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '3rem',
  md: {
    flexDirection: 'row',
  },
});
