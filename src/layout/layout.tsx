import { ReactNode } from 'react';
import SEO from './seo';
import Footer from './footer';
import Sidebar from './sidebar';
import '../assets/sass/resume.scss';
import 'devicon/devicon.min.css';
import { useSiteMetadata } from '../../metadata/use-metadata';

export type LayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function Layout({ children, title, description }: LayoutProps) {
  const defaultFallback = useSiteMetadata();

  return (
    <>
      <SEO title={title} description={description} defaultFallback={defaultFallback} />
      <div className="main-body">
        <Sidebar />
        <div className="container-fluid p-0">{children}</div>
        <Footer />
      </div>
    </>
  );
}
