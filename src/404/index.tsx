import clsx from 'clsx';
import { Link } from 'react-router-dom';
import classes from '../resume/common.module.scss';
import SEO from '../seo';

export default function ErrorPage() {
  return (
    <>
      <SEO title="Error 404: Page not found" description="Error 404: Page not found" />
      <section className={clsx(classes.section, 'p-3 p-lg-5 d-flex align-items-center')}>
        <header className="major">
          <h2>Error 404: Page not found.</h2>
          <h3>It seems like you&apos;ve hit a dead end. There&apos;s nothing to see here.</h3>
          <h4>
            Please go back to the <Link to="/">Home page.</Link>
          </h4>
        </header>
      </section>
    </>
  );
}
