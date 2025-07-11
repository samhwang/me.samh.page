import { useExperienceData } from '../../metadata/use-metadata';
import { cx } from '../../styled-system/css';
import LangIcon from '../icons/lang-icon';
import * as commonStyles from './common.styles';
import * as iconStyles from './icon.styles';
import * as layoutStyles from './layout.styles';
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
    <div className={cx(commonStyles.dFlex, layoutStyles.flexColumn, layoutStyles.flexMdRow, layoutStyles.justifyContentBetween, commonStyles.mb5)}>
      <div>
        <h3 className={commonStyles.mb0}>{title}</h3>
        <div className={cx(commonStyles.mb3, typographyStyles.subheading)}>{companyName}</div>
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
        <ul className={cx(commonStyles.listInline, iconStyles.devIcons)}>
          {techIcons.map((icon) => (
            <LangIcon name={icon} key={icon} />
          ))}
        </ul>
      </div>
      <div className={cx(commonStyles.date, layoutStyles.textMdRight)}>
        <span className={commonStyles.textPrimary}>{duration}</span>
      </div>
    </div>
  );
}

export default function Experiences() {
  const experience = useExperienceData();

  return (
    <div className={commonStyles.w100}>
      <h2 className={commonStyles.mb5}>Experience</h2>
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
  );
}
