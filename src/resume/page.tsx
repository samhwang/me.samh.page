import { Fragment } from 'react';
import { css } from '../../styled-system/css';
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

  return sections.map(({ id, content }) => (
    <Fragment key={id}>
      <section className={commonStyles.section} id={id}>
        {content}
      </section>
      <hr className={css({ margin: 0 })} />
    </Fragment>
  ));
}
