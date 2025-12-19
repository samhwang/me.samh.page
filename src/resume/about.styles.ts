import { css } from '../../styled-system/css';

// Container for the entire about section
export const container = css({
  width: '100%',
});

// Main heading (name)
export const name = css({
  marginBottom: 0,
});

// Last name with primary color
export const lastName = css({
  color: 'primary',
});

// Address line with subheading styling
export const address = css({
  marginBottom: 'headingMargin',
  textTransform: 'uppercase',
  fontWeight: 500,
  fontSize: '1.5rem',
  fontFamily: 'heading',
});

// Bio paragraph
export const bio = css({
  marginBottom: 'headingMargin',
  fontSize: '1.15rem',
  fontWeight: 400,
});
