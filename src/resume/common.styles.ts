import { css } from '../../styled-system/css';

export const section = css({
  pt: '5rem!',
  pb: '5rem!',
  maxW: '75rem',
  lg: {
    pt: '3rem!',
    pb: '3rem!',
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
