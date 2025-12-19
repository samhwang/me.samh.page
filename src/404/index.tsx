import { Link } from '@tanstack/react-router';
import { link, section } from '../resume/common.styles';

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
