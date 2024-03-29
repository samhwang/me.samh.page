import { useExperienceData } from '../../metadata/use-metadata';
import { cx } from '../../styled-system/css';
import LangIcon from '../icons/lang-icon';
import * as commonStyles from './common.styles';
import * as iconStyles from './icon.styles';
import * as typographyStyles from './typography.styles';

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
        <div className={cx('mb-3', typographyStyles.subheading)}>{companyName}</div>
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
        <ul className={cx('list-inline', iconStyles.devIcons)}>
          {techIcons.map((icon) => (
            <LangIcon name={icon} key={icon} />
          ))}
        </ul>
      </div>
      <div className={cx(commonStyles.date, 'text-md-right')}>
        <span className={cx(commonStyles.textPrimary)}>{duration}</span>
      </div>
    </div>
  );
}

export default function Experiences() {
  const experience = useExperienceData();

  return (
    <>
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
    </>
  );
}
