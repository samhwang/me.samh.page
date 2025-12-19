import { css } from '../../styled-system/css';

// Main navigation container
export const navigation = css({
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 1030,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingY: '0.5rem',
  paddingX: '1rem',
  backgroundColor: 'primary',
  color: 'white',

  lg: {
    textAlign: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    width: 'sidebarWidth',
    height: '100vh',
  },

  // Nested link and element styles
  '& a': {
    color: 'white',
  },

  '& a:hover': {
    color: 'rgba(255, 255, 255, 0.75)',
  },
});

// Brand/logo link
export const brand = css({
  paddingY: '0.3125rem',
  marginRight: '1rem',
  fontSize: '1.25rem',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  color: 'white',

  lg: {
    display: 'flex',
    margin: 'auto auto 0',
    padding: '0.5rem',
  },
});

// Name text (mobile only)
export const nameText = css({
  display: 'block',

  lg: {
    display: 'none',
  },
});

// Avatar container (desktop only)
export const avatarContainer = css({
  display: 'none',

  lg: {
    display: 'block',
  },
});

// Avatar image
export const avatar = css({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '50%',
  marginX: 'auto',
  marginBottom: '0.5rem',

  lg: {
    maxWidth: '10rem',
    maxHeight: '10rem',
    border: '0.5rem solid rgba(255, 255, 255, 0.2)',
  },
});

// Mobile menu toggle button
export const menuToggle = css({
  padding: '0.25rem 0.75rem',
  fontSize: '1.25rem',
  lineHeight: 1,
  backgroundColor: 'transparent',
  border: '1px solid transparent',
  borderRadius: '0.25rem',
  borderColor: 'rgba(255, 255, 255, 0.1)',
  color: 'rgba(255, 255, 255, 0.55)',
  transition: 'box-shadow 0.15s ease-in-out',

  '&:hover': {
    textDecoration: 'none',
  },

  '&:focus': {
    textDecoration: 'none',
    outline: 0,
    outlineColor: 'blue.500',
    boxShadow: '0 0 0 0.25rem',
  },

  '&[data-collapsed="true"]': {
    '& ~ div': {
      display: 'none',
    },
  },
});

// Hamburger icon
export const menuIcon = css({
  display: 'inline-block',
  width: '1.5em',
  height: '1.5em',
  verticalAlign: 'middle',
  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '100%',
});

// Collapsible navigation menu
export const menu = css({
  display: 'none',
  flexGrow: 1,
  alignItems: 'center',

  '&[data-visible="true"]': {
    display: 'block',
  },

  lg: {
    display: 'flex',
    alignItems: 'flex-start',
    flexGrow: '0',
    width: '100%',
    marginBottom: 'auto',
  },
});

// Navigation list wrapper
export const navListWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: 0,
  marginBottom: 0,
  listStyle: 'none',

  lg: {
    flexDirection: 'column',
    width: '100%',
  },
});

// Navigation list (ul element)
export const navList = css({
  paddingLeft: 0,
  marginBottom: 0,
  listStyle: 'none',
});

// Navigation item (li element)
export const navItem = css({
  lg: {
    display: 'block',
  },
});

// Navigation link
export const navLink = css({
  display: 'block',
  padding: '0.5rem 1rem',
  color: 'white',
  textDecoration: 'none',
  fontWeight: '800',
  letterSpacing: '0.05rem',
  textTransform: 'uppercase',
  transition: 'color 0.15s ease-in-out',

  lg: {
    display: 'block',
  },

  '&:hover': {
    color: 'rgba(255, 255, 255, 0.75)',
  },

  '&:focus': {
    color: 'rgba(255, 255, 255, 0.75)',
  },
});
