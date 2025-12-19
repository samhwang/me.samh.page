import { css } from '../../styled-system/css';

// Re-export common styles
export { container, subheading as address, textPrimary as lastName, title as name } from './common.styles';

// Unique bio paragraph styling (not in common)
export const bio = css({
  marginBottom: 'headingMargin',
  fontSize: '1.15rem',
  fontWeight: 400,
});
