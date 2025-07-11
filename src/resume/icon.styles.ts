import { css } from '../../styled-system/css';

export const socialIcons = css({
  '& > a': {
    display: 'inline-block',
    height: '3.5rem',
    width: '3.5rem',
    bgColor: 'gray.700',
    color: 'white!',
    borderRadius: '100%',
    textAlign: 'center',
    fontSize: '1.5rem',
    lineHeight: '3.5rem',
    mr: '1rem',
    textDecoration: 'none!',
    _last: {
      mr: 0,
    },
    _hover: {
      bgColor: 'primary!',
    },
  },
});

export const devIcons = css({
  fontSize: '3rem',
  '& li': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
