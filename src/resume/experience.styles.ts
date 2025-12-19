import { css } from '../../styled-system/css';

// Container for the entire experience section
export const container = css({
  width: '100%',
});

// Section heading styling
export const heading = css({
  marginBottom: 'headingMargin',
});

// Job title
export const jobTitle = css({
  marginBottom: 0,
});

// Company name with subheading styling
export const companyName = css({
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
