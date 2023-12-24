import clsx from 'clsx';
import { useExperienceData } from '../../metadata/use-metadata';
import iconClasses from '../icons/icon.module.scss';
import LangIcon from '../icons/lang-icon';
import resumeClasses from './common.module.scss';

type JobDescriptionProps = {
  title: string;
  companyName: string;
  description: string[];
  duration: string;
  techIcons: string[];
  technologies: string[];
};

function JobDescription({ title, companyName, description, duration, techIcons, technologies }: JobDescriptionProps) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div>
        <h3 className="mb-0">{title}</h3>
        <div className="subheading mb-3">{companyName}</div>
        <ul>
          {description.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <h4>Technologies involved:</h4>
        <ul>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <ul className={clsx('list-inline', iconClasses.devIcons)}>
          {techIcons.map((icon) => (
            <LangIcon name={icon} key={icon} />
          ))}
        </ul>
      </div>
      <div className={clsx(resumeClasses.date, 'text-md-right')}>
        <span className="text-primary">{duration}</span>
      </div>
    </div>
  );
}

export default function Experiences() {
  const experience = useExperienceData();

  return (
    <section className={clsx(resumeClasses.section, 'p-3 p-lg-5 d-flex justify-content-center')} id="experience">
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>
        {experience.map(({ title, companyName, description, duration, techIcons, technologies }) => (
          <JobDescription
            key={companyName}
            title={title}
            companyName={companyName}
            description={description}
            duration={duration}
            techIcons={techIcons}
            technologies={technologies}
          />
        ))}
      </div>
    </section>
  );
}
