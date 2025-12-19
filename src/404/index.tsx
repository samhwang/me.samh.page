import { Link } from '@tanstack/react-router';
import { css } from '../../styled-system/css';

const section = css({
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
});

const link = css({
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

export default function ErrorPage() {
  return (
    <section className={section}>
      <header>
        <h2>Error 404: Page not found.</h2>
        <h3>It seems like you&apos;ve hit a dead end. There&apos;s nothing to see here.</h3>
        <h4>
          Please go back to the{' '}
          <Link className={link} to="/">
            Home page.
          </Link>
        </h4>
      </header>
    </section>
  );
}
