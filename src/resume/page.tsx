import { Fragment } from 'react';
import { cx } from '../../styled-system/css';
import About from './about';
import * as commonStyles from './common.styles';
import Education from './education';
import Experiences from './experience';
import * as layoutStyles from './layout.styles';
import ProjectSection from './projects';
import SEO from './seo';
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
          <section className={cx(commonStyles.section, layoutStyles.p3, layoutStyles.pLg5, commonStyles.dFlex, commonStyles.alignItemsCenter)} id={id}>
            {content}
          </section>
          <hr className={layoutStyles.m0} />
        </Fragment>
      ))}
    </>
  );
}
