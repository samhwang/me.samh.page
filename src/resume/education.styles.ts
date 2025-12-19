import { css } from '../../styled-system/css';

// Container for the entire education section
export const container = css({
  width: '100%',
});

// Section heading styling
export const heading = css({
  marginBottom: 'headingMargin',
});

// Institution/school name
export const instituteName = css({
  marginBottom: 0,
});

// Degree line with subheading styling
export const degree = css({
  marginBottom: 'subheadingMargin',
  textTransform: 'uppercase',
  fontWeight: 500,
  fontSize: '1.5rem',
  fontFamily: 'heading',
});

// Date text styling
export const dateText = css({
  color: 'primary',
});
