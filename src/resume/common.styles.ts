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
  bgColor: 'green.800',
});

export const textPrimary = css({
  color: 'green.800',
});

export const link = css({
  color: 'green.800!',
  _hover: {
    color: 'green.900',
  },
  _focus: {
    color: 'green.900!',
  },
  _active: {
    color: 'green.900!',
  },
});
