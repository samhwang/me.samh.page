import { css } from '../../styled-system/css';

export const sideNav = css({
  lg: {
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
    outlineColor: 'blue.500',
  },
});

export const navLink = css({
  fontWeight: '800!',
  letterSpacing: '0.05rem',
  textTransform: 'uppercase',
  color: 'white!',
  lg: {
    display: 'block',
  },
  '&:hover': {
    color: 'rgba(255, 255, 255, 0.75)!',
  },
});

export const navItem = css({
  lg: {
    display: 'block',
  },
});

export const imgProfile = css({
  lg: {
    maxW: '10rem',
    maxH: '10rem',
    border: '0.5rem solid fade-out(white, 0.8)',
  },
});

export const navbarBrand = css({
  color: 'white!',
  lg: {
    display: 'flex',
    margin: 'auto auto 0',
    padding: '0.5rem',
  },
});

export const navbarCollapse = css({
  lg: {
    display: 'flex',
    alignItems: 'flex-start',
    flexGrow: '0!',
    width: '100%',
    marginBottom: 'auto',
  },
});

export const navbarNav = css({
  lg: {
    flexDirection: 'column !important',
    width: '100%',
  },
});
