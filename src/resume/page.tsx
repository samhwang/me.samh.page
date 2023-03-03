import { Fragment } from 'react';
import SEO from '../layout/seo';
import About from './about';
import Education from './education';
import Experiences from './experience';
import ProjectSection from './projects';
import SkillSection from './skills';

export default function ResumePage() {
  const sections = [
    { id: 'about', content: <About /> },
    { id: 'experience', content: <Experiences /> },
    { id: 'education', content: <Education /> },
    { id: 'skills', content: <SkillSection /> },
    { id: 'projects', content: <ProjectSection /> },
  ];

  return (
    <>
      <SEO title="Resume" description="Sam Huynh resume" />
      {sections.map(({ id, content }) => (
        <Fragment key={id}>
          {content}
          <hr className="m-0" />
        </Fragment>
      ))}
    </>
  );
}
