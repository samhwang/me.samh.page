import { Link } from 'react-router-dom';

export default function Footer() {
  const GitHubLink = <Link to="https://github.com/samhwang">Sam Huynh</Link>;

  const GitHubPages = <Link to="https://pages.github.com/">GitHub Pages</Link>;

  const ViteLink = <Link to="https://www.vitejs.dev/">Vite.</Link>;

  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
      <p>
        {`© ${new Date().getFullYear()} `}
        {GitHubLink}
        {`. Hosted on `}
        {GitHubPages}
        {`. Built with `}
        {ViteLink}
      </p>
    </section>
  );
}
