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
  bgColor: 'blue.600',
});

export const textPrimary = css({
  color: 'blue.600',
});

export const link = css({
  color: 'blue.600!',
  _hover: {
    color: 'blue.700',
  },
  _focus: {
    color: 'blue.700!',
  },
  _active: {
    color: 'blue.700!',
  },
});
