import { Link } from '@tanstack/react-router';
import { cx } from '../../styled-system/css';
import * as commonStyles from '../resume/common.styles';
import SEO from '../resume/seo';

export default function ErrorPage() {
  return (
    <>
      <SEO title="Error 404: Page not found" description="Error 404: Page not found" />
      <section className={cx(commonStyles.section, 'p-3 p-lg-5 d-flex align-items-center')}>
        <header>
          <h2>Error 404: Page not found.</h2>
          <h3>It seems like you&apos;ve hit a dead end. There&apos;s nothing to see here.</h3>
          <h4>
            Please go back to the{' '}
            <Link className={cx(commonStyles.link)} to="/">
              Home page.
            </Link>
          </h4>
        </header>
      </section>
    </>
  );
}
