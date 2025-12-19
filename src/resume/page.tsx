import { Fragment } from 'react';
import About from './about';
import Education from './education';
import Experiences from './experience';
import * as styles from './page.styles';
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
      <section className={styles.section} id={id}>
        {content}
      </section>
      <hr className={styles.separator} />
    </Fragment>
  ));
}
