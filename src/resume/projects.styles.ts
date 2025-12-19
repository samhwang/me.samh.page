import { css } from '../../styled-system/css';

// Re-export common styles
export { container, heading, link as projectLink } from './common.styles';

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
