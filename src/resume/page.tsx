import { Fragment } from 'react';
import { cx } from '../../styled-system/css';
import SEO from '../seo';
import About from './about';
import * as commonStyles from './common.styles';
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
          <section className={cx(commonStyles.section, 'p-3 p-lg-5 d-flex align-items-center')} id={id}>
            {content}
          </section>
          <hr className="m-0" />
        </Fragment>
      ))}
    </>
  );
}
