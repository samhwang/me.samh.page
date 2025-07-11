import { Link } from '@tanstack/react-router';
import { cx } from '../../styled-system/css';
import * as commonStyles from '../resume/common.styles';
import * as layoutStyles from '../resume/layout.styles';
import SEO from '../resume/seo';

export default function ErrorPage() {
  return (
    <>
      <SEO title="Error 404: Page not found" description="Error 404: Page not found" />
      <section className={cx(commonStyles.section, layoutStyles.p3, layoutStyles.pLg5, commonStyles.dFlex, commonStyles.alignItemsCenter)}>
        <header>
          <h2>Error 404: Page not found.</h2>
          <h3>It seems like you&apos;ve hit a dead end. There&apos;s nothing to see here.</h3>
          <h4>
            Please go back to the{' '}
            <Link className={commonStyles.link} to="/">
              Home page.
            </Link>
          </h4>
        </header>
      </section>
    </>
  );
}
