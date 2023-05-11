import { Link } from 'react-router-dom';

export default function Footer() {
  const LINKS = {
    github: <Link to="https://github.com/samhwang">Sam Huynh</Link>,
    githubPages: <Link to="https://pages.github.com/">GitHub Pages</Link>,
    githubAction: <Link to="https://github.com/features/actions">GitHub Actions</Link>,
    netlify: <Link to="https://app.netlify.com">Netlify</Link>,
    vite: <Link to="https://www.vitejs.dev/">Vite</Link>,
    react: <Link to="https://reactjs.org/">React</Link>,
  };

  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
      <p>
        {`© ${new Date().getFullYear()} `}
        {LINKS.github}.{` Hosted on `}
        {LINKS.netlify}.{` Built with `}
        {LINKS.vite}
        {` and `}
        {LINKS.react}.
      </p>
    </section>
  );
}
