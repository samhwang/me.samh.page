import { Link } from '@tanstack/react-router';

import { useAboutData } from '../../metadata/use-metadata';
import * as commonStyles from '../../styled-system/recipes';

type FooterLinkProps = {
  to: string;
  children: React.ReactNode;
};

function FooterLink({ children, to }: FooterLinkProps) {
  return (
    <Link className={commonStyles.link()} to={to}>
      {children}
    </Link>
  );
}

export default function Footer() {
  const { firstName, lastName, socialLinks } = useAboutData();
  const githubUrl = socialLinks.find((link) => link.name.toLowerCase() === 'github')?.url ?? '#';

  const LINKS = {
    github: (
      <FooterLink to={githubUrl}>
        {firstName} {lastName}
      </FooterLink>
    ),
    cloudflare: <FooterLink to="https://workers.cloudflare.com/">Cloudflare Worker</FooterLink>,
    vite: <FooterLink to="https://www.vitejs.dev/">Vite</FooterLink>,
    react: <FooterLink to="https://reactjs.org/">React</FooterLink>,
  };

  return (
    <section className={commonStyles.section()}>
      <p>
        © {new Date().getFullYear()} {LINKS.github}. Hosted on {LINKS.cloudflare}. Built with {LINKS.vite} and {LINKS.react}.
      </p>
    </section>
  );
}
