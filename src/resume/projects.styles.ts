import { css } from '../../styled-system/css';

// Container for the entire projects section
export const container = css({
  width: '100%',
});

// Section heading styling
export const heading = css({
  marginBottom: 'headingMargin',
});

// Custom list with checkmark markers (replacing FontAwesome)
export const projectList = css({
  listStyle: 'none',
  marginLeft: '2.5em',
  paddingLeft: 0,
  marginBottom: 0,
});

// Individual project item with CSS checkmark
export const projectItem = css({
  position: 'relative',
  marginBottom: '0.5rem',

  '&::before': {
    content: '"✓"',
    position: 'absolute',
    left: '-2em',
    width: '2em',
    top: '0.14em',
    textAlign: 'center',
    color: 'warning',
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
});

// Project link styling
export const projectLink = css({
  color: 'primary',
  textDecoration: 'none',

  '&:hover': {
    color: 'slightlyDarker',
  },

  '&:focus': {
    color: 'slightlyDarker',
  },

  '&:active': {
    color: 'slightlyDarker',
  },
});
