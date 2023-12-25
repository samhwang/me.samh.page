import clsx from 'clsx';
import { Link } from 'react-router-dom';
import commonClasses from '../resume/common.module.scss';
import typographyClasses from '../resume/typography.module.scss';
import SEO from '../seo';

export default function ErrorPage() {
  return (
    <>
      <SEO title="Error 404: Page not found" description="Error 404: Page not found" />
      <section className={clsx(commonClasses.section, 'p-3 p-lg-5 d-flex align-items-center')}>
        <header>
          <h2 className={clsx(typographyClasses.h2)}>Error 404: Page not found.</h2>
          <h3 className={clsx(typographyClasses.h3)}>It seems like you&apos;ve hit a dead end. There&apos;s nothing to see here.</h3>
          <h4 className={clsx(typographyClasses.h4)}>
            Please go back to the{' '}
            <Link className={clsx(commonClasses.link)} to="/">
              Home page.
            </Link>
          </h4>
        </header>
      </section>
    </>
  );
}
