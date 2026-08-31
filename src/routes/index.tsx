import { createFileRoute } from '@tanstack/react-router';
import { Fragment } from 'react';

import { useSiteMetadata } from '../../metadata/use-metadata';
import { css } from '../../styled-system/css';
import { section } from '../../styled-system/recipes';
import About from '../resume/about';
import Education from '../resume/education';
import Experiences from '../resume/experience';
import ProjectSection from '../resume/projects';
import SkillSection from '../resume/skills';

export function ResumePage() {
  const sections = [
    { id: 'about', content: <About /> },
    { id: 'experience', content: <Experiences /> },
    { id: 'education', content: <Education /> },
    { id: 'skills', content: <SkillSection /> },
    { id: 'projects', content: <ProjectSection /> },
  ];

  return sections.map(({ id, content }) => (
    <Fragment key={id}>
      <section className={section()} id={id}>
        {content}
      </section>
      <hr className={css({ margin: 0 })} />
    </Fragment>
  ));
}

export const Route = createFileRoute('/')({
  component: ResumePage,
  head: () => {
    const siteMetadata = useSiteMetadata();
    return {
      title: `Resume | ${siteMetadata.title}`,
      meta: [
        {
          name: 'description',
          content: 'Sam Huynh resume',
        },
        {
          property: 'og:title',
          content: `Resume | ${siteMetadata.title}`,
        },
        {
          property: 'og:description',
          content: 'Sam Huynh resume',
        },
      ],
    };
  },
});
