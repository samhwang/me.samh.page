import { css } from '../../styled-system/css';

export const section = css({
  pt: '5rem!',
  pb: '5rem!',
  maxW: '75rem',
  '@media (min-width: 992px)': {
    pt: '3rem!',
    pb: '3rem!',
  },
  '@media (min-width: 768px)': {
    minH: '100vh',
  },
});

export const date = css({
  '@media (min-width: 768px)': {
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
    color: 'darkblue!',
  },
  _focus: {
    color: 'darkblue!',
  },
  _active: {
    color: 'darkblue!',
  },
});
