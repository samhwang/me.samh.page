import Layout from '../layout/layout';

export default function ErrorPage() {
  return (
    <Layout title="Error 404: Page not found" description="Error 404: Page not found">
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
        <header className="major">
          <h2>Error 404: Page not found.</h2>
          <h3>
            It seems like you&apos;ve hit a dead end. There&apos;s nothing to
            {` see here.`}
          </h3>
          <h4>
            {`Please go back to the `}
            <a href="/">Home page.</a>
          </h4>
        </header>
      </section>
    </Layout>
  );
}
