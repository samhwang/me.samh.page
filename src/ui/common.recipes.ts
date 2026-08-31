import { defineRecipe } from '@pandacss/dev';

export const section = defineRecipe({
  className: 'section',
  base: {
    display: 'flex',
    alignItems: 'center',
    padding: 'sectionPadding',
    paddingTop: 'sectionVertical',
    paddingBottom: 'sectionVertical',
    paddingLeft: '2rem',
    maxWidth: 'contentMaxWidth',
    lg: {
      padding: 'sectionPaddingLg',
      paddingTop: '3rem',
      paddingBottom: '3rem',
    },
    md: {
      minHeight: '100vh',
    },
  },
});

export const subheading = defineRecipe({
  className: 'subheading',
  base: {
    marginBottom: 'subheadingMargin',
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: '1.5rem',
    fontFamily: 'heading',
  },
});

export const link = defineRecipe({
  className: 'link',
  base: {
    color: 'primary',
    textDecoration: 'none',
    '&:hover, &:focus, &:active': {
      color: 'slightlyDarker',
    },
  },
});

export const container = defineRecipe({
  className: 'container',
  base: {
    width: '100%',
  },
});

export const heading = defineRecipe({
  className: 'heading',
  base: {
    marginBottom: 'headingMargin',
  },
});

export const title = defineRecipe({
  className: 'title',
  base: {
    marginBottom: 0,
  },
});

export const textPrimary = defineRecipe({
  className: 'textPrimary',
  base: {
    color: 'primary',
  },
});
