import { Link } from '@tanstack/react-router';
import { cx } from '../../styled-system/css';
import * as commonStyles from './common.styles';

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

function FooterLink({ children, to }: FooterLinkProps) {
  return (
    <Link className={cx(commonStyles.link)} to={to}>
      {children}
    </Link>
  );
}

export default function Footer() {
  const LINKS = {
    github: <FooterLink to="https://github.com/samhwang">Sam Huynh</FooterLink>,
    netlify: <FooterLink to="https://app.netlify.com">Netlify</FooterLink>,
    vite: <FooterLink to="https://www.vitejs.dev/">Vite</FooterLink>,
    react: <FooterLink to="https://reactjs.org/">React</FooterLink>,
  };

  return (
    <section className={cx(commonStyles.section, 'p-3 p-lg-5 d-flex align-items-center')}>
      <p>
        © {new Date().getFullYear()} {LINKS.github}. Hosted on {LINKS.netlify}. Built with {LINKS.vite} and {LINKS.react}.
      </p>
    </section>
  );
}
