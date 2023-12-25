import { css } from '../../styled-system/css';

export const sideNav = css({
  '@media (min-width: 992px)': {
    textAlign: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    width: 'sidebarWidth',
    height: '100vh',
  },
});

export const navbarToggler = css({
  _focus: {
    outlineColor: 'lightBlue',
  },
});

export const navLink = css({
  fontWeight: 800,
  letterSpacing: '0.5rem',
  textTransform: 'uppercase',
  '@media (min-width: 992px)': {
    display: 'block',
  },
});

export const navItem = css({
  '@media (min-width: 992px)': {
    display: 'block',
  },
});

export const imgProfile = css({
  '@media (min-width: 992px)': {
    maxW: '10rem',
    maxH: '10rem',
    border: '0.5rem solid fade-out(white, 0.8)',
  },
});

export const navbarBrand = css({
  '@media (min-width: 992px)': {
    display: 'flex',
    margin: 'auto auto 0',
    padding: '0.5rem',
  },
});

export const navbarCollapse = css({
  '@media (min-width: 992px)': {
    display: 'flex',
    alignItems: 'flex-start',
    flexGrow: 0,
    width: '100%',
    marginBottom: 'auto',
  },
});

export const navbarNav = css({
  '@media (min-width: 992px)': {
    flexDirection: 'column !important',
    width: '100%',
  },
});
