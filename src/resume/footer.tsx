import { Link } from '@tanstack/react-router';
import { cx } from '../../styled-system/css';
import * as commonStyles from './common.styles';
import * as layoutStyles from './layout.styles';

type FooterLinkProps = {
  to: string;
  children: React.ReactNode;
};

function FooterLink({ children, to }: FooterLinkProps) {
  return (
    <Link className={commonStyles.link} to={to}>
      {children}
    </Link>
  );
}

export default function Footer() {
  const LINKS = {
    github: <FooterLink to="https://github.com/samhwang">Sam Huynh</FooterLink>,
    cloudflare: <FooterLink to="https://pages.cloudflare.com/">Cloudflare Pages</FooterLink>,
    vite: <FooterLink to="https://www.vitejs.dev/">Vite</FooterLink>,
    react: <FooterLink to="https://reactjs.org/">React</FooterLink>,
  };

  return (
    <section className={cx(commonStyles.section, layoutStyles.p3, layoutStyles.pLg5, commonStyles.dFlex, commonStyles.alignItemsCenter)}>
      <p>
        © {new Date().getFullYear()} {LINKS.github}. Hosted on {LINKS.cloudflare}. Built with {LINKS.vite} and {LINKS.react}.
      </p>
    </section>
  );
}
