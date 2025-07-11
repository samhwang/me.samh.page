import { css } from '../../styled-system/css';

// Navbar utilities
export const navbar = css({
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingY: '0.5rem',
  paddingX: '1rem',
});

export const navbarExpandLg = css({
  lg: {
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
  },
});

export const navbarDark = css({
  '& .navbar-brand': {
    color: 'white!',
  },
  '& .navbar-nav .nav-link': {
    color: 'white!',
  },
  '& .navbar-nav .nav-link:hover': {
    color: 'rgba(255, 255, 255, 0.75)!',
  },
  '& .navbar-nav .nav-link.active': {
    color: 'white!',
  },
  '& .navbar-toggler': {
    color: 'rgba(255, 255, 255, 0.55)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  '& span': {
    color: 'white!',
  },
  '& a': {
    color: 'white!',
  },
  '& ul': {
    color: 'white!',
  },
  '& li': {
    color: 'white!',
  },
});

export const fixedTop = css({
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 1030,
});

export const navbarBrand = css({
  paddingY: '0.3125rem',
  marginRight: '1rem',
  fontSize: '1.25rem',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
});

export const navbarToggler = css({
  padding: '0.25rem 0.75rem',
  fontSize: '1.25rem',
  lineHeight: 1,
  backgroundColor: 'transparent',
  border: '1px solid transparent',
  borderRadius: '0.25rem',
  transition: 'box-shadow 0.15s ease-in-out',
  '&:hover': {
    textDecoration: 'none',
  },
  '&:focus': {
    textDecoration: 'none',
    outline: 0,
    boxShadow: '0 0 0 0.25rem',
  },
});

export const navbarTogglerIcon = css({
  display: 'inline-block',
  width: '1.5em',
  height: '1.5em',
  verticalAlign: 'middle',
  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '100%',
});

export const navbarCollapse = css({
  flexGrow: 1,
  alignItems: 'center',
});

export const navbarNav = css({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: 0,
  marginBottom: 0,
  listStyle: 'none',
  lg: {
    flexDirection: 'row',
  },
});

export const navLink = css({
  display: 'block',
  padding: '0.5rem 1rem',
  color: 'white!',
  textDecoration: 'none',
  transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out',
  '&:hover': {
    color: 'rgba(255, 255, 255, 0.75)!',
  },
  '&:focus': {
    color: 'rgba(255, 255, 255, 0.75)!',
  },
});

// State utilities
export const collapsed = css({
  '&:not(.show)': {
    display: 'none',
  },
});

export const show = css({
  display: 'block',
});

export const collapse = css({
  display: 'none',
  '&.show': {
    display: 'block',
  },
});
