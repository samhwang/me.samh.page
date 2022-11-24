import { Fragment, ReactNode } from 'react';
import Layout from '../layout/layout';
import About from './about';
import Education from './education';
import Experiences from './experience';
import ProjectSection from './projects';
import SkillSection from './skills';

interface SectionType {
  id: string;
  content: ReactNode;
}

export default function ResumePage() {
  const sections: SectionType[] = [
    { id: 'about', content: <About /> },
    { id: 'experience', content: <Experiences /> },
    { id: 'education', content: <Education /> },
    { id: 'skills', content: <SkillSection /> },
    { id: 'projects', content: <ProjectSection /> },
  ];

  const children = sections.map(({ id, content }) => (
    <Fragment key={id}>
      {content}
      <hr className="m-0" />
    </Fragment>
  ));

  return (
    <Layout title="Resume" description="Sam Huynh resume">
      {children}
    </Layout>
  );
}
